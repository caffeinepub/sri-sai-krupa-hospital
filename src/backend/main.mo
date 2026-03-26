import Map "mo:core/Map";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Nat "mo:core/Nat";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";



actor {
  type Contact = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  public type UserProfile = {
    name : Text;
  };

  let contacts = Map.empty<Nat, Contact>();
  var nextContactId = 0;

  // Profiles stored permanently in the backend
  let userProfiles = Map.empty<Principal, UserProfile>();

  // persistent state for authorization
  let accessControlState = AccessControl.initState();
  // include complete mixin for authorization
  include MixinAuthorization(accessControlState);

  // ADMIN ONLY: view all contact form submissions
  public query ({ caller }) func getAllContacts() : async [Contact] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view contacts");
    };
    contacts.values().toArray();
  };

  // This function allows saving a contact form submission
  // Anyone can submit a contact form (including anonymous/guest users)
  public shared ({ caller }) func submitContact(name : Text, email : Text, message : Text) : async () {
    // no authorization check - public contact form
    let contact : Contact = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    contacts.add(nextContactId, contact);
    nextContactId += 1;
  };

  // Profile management functions (required by frontend)
  // get caller's own profile
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  // get any user's profile (own profile or admin viewing others)
  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  // save caller's own profile
  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };
};
