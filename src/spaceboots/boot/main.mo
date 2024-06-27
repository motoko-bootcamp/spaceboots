import Http "http";
import Text "mo:base/Text";
import Blob "mo:base/Blob";
import frontend "frontend/__html__";

shared ({ caller = creator }) actor class Boot() = this {

    public type HttpRequest = Http.Request;
    public type HttpResponse = Http.Response;

    // The owner of the boot.
    var owner : Principal = creator;
    var name : Text = "Ocean spaceboots";

    public query func getOwner() : async Principal {
        return owner;
    };

    public func transfer() {
        // Implementation of transfer logic
    };


    // // Equip the boot.
    // public func equip() {
    //     // Equip the boot.
    // };

    // // Unequip the boot.
    // public func unequip() {
    //     // Unequip the boot.
    // };

    // public func walk() {
    //     // Walk.
    // };

    // Secret key.
    // Validation of the scan.

    public query func http_request(request : frontend.Request) : async frontend.Response {
        return 
           frontend.get_html(request);
    };
};
