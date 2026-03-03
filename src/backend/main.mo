import Map "mo:core/Map";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Nat "mo:core/Nat";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import List "mo:core/List";

actor {
  type Appointment = {
    id : Nat;
    name : Text;
    phoneNumber : Text;
    department : Text;
    preferredDate : Int;
    message : ?Text;
    timestamp : Time.Time;
  };

  type AppointmentInput = {
    name : Text;
    phoneNumber : Text;
    department : Text;
    preferredDate : Int;
    message : ?Text;
  };

  var nextId = 1;

  let appointments = Map.empty<Nat, Appointment>();

  public shared ({ caller }) func bookAppointment(input : AppointmentInput) : async Nat {
    let id = nextId;
    let appointment : Appointment = {
      id;
      name = input.name;
      phoneNumber = input.phoneNumber;
      department = input.department;
      preferredDate = input.preferredDate;
      message = input.message;
      timestamp = Time.now();
    };

    appointments.add(id, appointment);
    nextId += 1;
    id;
  };

  public query ({ caller }) func getAllAppointments() : async [Appointment] {
    appointments.values().toArray();
  };

  public query ({ caller }) func getAppointmentById(id : Nat) : async Appointment {
    switch (appointments.get(id)) {
      case (null) { Runtime.trap("Appointment not found") };
      case (?appointment) { appointment };
    };
  };
};
