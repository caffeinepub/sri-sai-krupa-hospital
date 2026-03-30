import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Nat "mo:core/Nat";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Array "mo:core/Array";
import List "mo:core/List";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Migration "migration";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

(with migration = Migration.run)
actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type UserProfile = {
    name : Text;
  };

  public type Contact = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  public type ShoppingCartItem = {
    productId : Nat;
    quantity : Nat;
  };

  public type Product = {
    name : Text;
    price : Nat;
    category : Text; // e.g. "fruits", "dairy", "snacks", "meat", "bakery", "pantry"
    description : Text;
    imageUrl : Text;
    rating : Nat; // 1-5 stars
  };

  public type Order = {
    user : Principal;
    items : [ShoppingCartItem];
    deliveryAddress : Text;
    deliverySlot : Text; // e.g. "9-11 AM", "4-6 PM"
    timestamp : Time.Time;
  };

  // Store user profiles
  let userProfiles = Map.empty<Principal, UserProfile>();

  // Store contact form messages
  let contacts = List.empty<(Nat, Contact)>();

  // Store products catalog
  let productCatalog = Map.empty<Nat, Product>();

  // Store user shopping carts - key is principal
  let shoppingCarts = Map.empty<Principal, [ShoppingCartItem]>();

  // Store orders - key is principal (user), value is array of orders
  let orders = Map.empty<Principal, [Order]>();

  var nextContactId = 0;
  var nextProductId = 0;

  // Profile management functions (required by frontend)
  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  // Add new product (admin only)
  public shared ({ caller }) func addProduct(product : Product) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can add products");
    };

    let newProductId = nextProductId;
    productCatalog.add(newProductId, product);
    nextProductId += 1;
    newProductId;
  };

  // Remove product (admin only)
  public shared ({ caller }) func deleteProduct(productId : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can delete products");
    };
    if (not productCatalog.containsKey(productId)) {
      Runtime.trap("Product not found!");
    };
    productCatalog.remove(productId);
  };

  public query ({ caller }) func getShoppingCart() : async [ShoppingCartItem] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can retrieve shopping cart");
    };
    switch (shoppingCarts.get(caller)) {
      case (null) { [] };
      case (?cart) { cart };
    };
  };

  // Shopping cart management
  // Get cart for user (create if not exists)
  func getOrCreateCart(user : Principal) : [ShoppingCartItem] {
    switch (shoppingCarts.get(user)) {
      case (null) { [] };
      case (?cart) { cart };
    };
  };

  // Get all products (public)
  public query func getAllProducts() : async [Product] {
    productCatalog.values().toArray();
  };

  // Get products by category (public)
  public query func getProductsByCategory(category : Text) : async [Product] {
    let filtered = productCatalog.toArray().filter(func((id, p)) { p.category == category });
    filtered.map(func((id, p)) { p });
  };

  // Add item to cart (user)
  public shared ({ caller }) func addToCart(productId : Nat, quantity : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can add to cart");
    };
    let cart = getOrCreateCart(caller);

    let item = { productId; quantity };
    let updatedCart = cart.concat([item]);
    shoppingCarts.add(caller, updatedCart);
  };

  // Remove item from cart (user)
  public shared ({ caller }) func removeFromCart(productId : Nat) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can remove from cart");
    };
    let cart = getOrCreateCart(caller);
    let filteredCart = cart.filter(func(item) { item.productId != productId });
    shoppingCarts.add(caller, filteredCart);
  };

  // Place order (user)
  public shared ({ caller }) func placeOrder(address : Text, slot : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can place orders");
    };
    let cart = getOrCreateCart(caller);
    if (cart.size() == 0) {
      Runtime.trap("Shopping cart is empty!");
    };

    let order : Order = {
      user = caller;
      items = cart;
      deliveryAddress = address;
      deliverySlot = slot;
      timestamp = Time.now();
    };

    // Get current user orders or create empty
    let currentOrders = switch (orders.get(caller)) {
      case (null) { [] };
      case (?o) { o };
    };

    // Add new order to user's order history
    let updatedOrders = currentOrders.concat([order]);
    orders.add(caller, updatedOrders);

    // Empty the shopping cart
    shoppingCarts.add(caller, []);
  };

  // Get order history (user)
  public query ({ caller }) func getOrderHistory() : async [Order] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access orders");
    };
    switch (orders.get(caller)) {
      case (null) { [] };
      case (?orderList) { orderList };
    };
  };

  // Search products by name (public)
  public query func searchProducts(searchTerm : Text) : async [Product] {
    let filtered = productCatalog.toArray().filter(func((id, p)) { p.name.contains(#text searchTerm) });
    filtered.map(func((id, p)) { p });
  };

  public shared ({ caller }) func submitContact(name : Text, email : Text, msg : Text) : async () {
    // Everyone can submit contact request, also anonymous connections
    let contact : Contact = {
      name;
      email;
      message = msg;
      timestamp = Time.now();
    };
    let contactId = nextContactId;

    contacts.add((contactId, contact));
    nextContactId += 1;
  };

  public query ({ caller }) func getAllContacts() : async [Contact] {
    // Only admins allowed access
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view contacts");
    };

    contacts.map<(Nat, Contact), Contact>(func((id, c)) { c }).toArray();
  };
};
