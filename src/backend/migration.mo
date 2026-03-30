import List "mo:core/List";
import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Principal "mo:core/Principal";

module {
  type UserProfile = {
    name : Text;
  };

  type Contact = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  type OldActor = {
    userProfiles : Map.Map<Principal.Principal, UserProfile>;
    contacts : Map.Map<Nat, Contact>;
    nextContactId : Nat;
  };

  type ShoppingCartItem = {
    productId : Nat;
    quantity : Nat;
  };

  type Product = {
    name : Text;
    price : Nat;
    category : Text;
    description : Text;
    imageUrl : Text;
    rating : Nat;
  };

  type Order = {
    user : Principal.Principal;
    items : [ShoppingCartItem];
    deliveryAddress : Text;
    deliverySlot : Text;
    timestamp : Int;
  };

  type NewActor = {
    userProfiles : Map.Map<Principal.Principal, UserProfile>;
    productCatalog : Map.Map<Nat, Product>;
    contacts : List.List<(Nat, Contact)>;
    orders : Map.Map<Principal.Principal, [Order]>;
    shoppingCarts : Map.Map<Principal.Principal, [ShoppingCartItem]>;
    nextContactId : Nat;
    nextProductId : Nat;
  };

  public func run(old : OldActor) : NewActor {
    let newContacts = List.empty<(Nat, Contact)>();
    old.contacts.forEach(
      func((id, c)) {
        newContacts.add((id, c));
      }
    );

    {
      userProfiles = old.userProfiles;
      productCatalog = Map.empty<Nat, Product>();
      contacts = newContacts;
      orders = Map.empty<Principal.Principal, [Order]>();
      shoppingCarts = Map.empty<Principal.Principal, [ShoppingCartItem]>();
      nextContactId = old.nextContactId;
      nextProductId = 0;
    };
  };
};
