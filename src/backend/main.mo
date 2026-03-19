import Map "mo:core/Map";
import Array "mo:core/Array";
import Time "mo:core/Time";
import Nat "mo:core/Nat";
import Iter "mo:core/Iter";


// Use migration module for upgrades

actor {
  // Contact form submission type
  public type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  // Persistent state
  let contactSubmissions = Map.empty<Nat, ContactSubmission>();
  var nextContactId = 0;

  // Submit a new contact form
  public shared ({ caller }) func submitContact(
    name : Text,
    email : Text,
    message : Text,
  ) : async Nat {
    let id = nextContactId;
    let submission : ContactSubmission = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    contactSubmissions.add(id, submission);
    nextContactId += 1;
    id;
  };

  // Get all contact submissions (admin only)
  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    contactSubmissions.values().toArray();
  };
};
