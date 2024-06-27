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
    var equipped : Bool = false;

    public query func reboot_objects_getOwner() : async Principal {
        return owner;
    };

    public query func reboot_objects_isEquipped() : async Bool {
        return equipped;
    };

    // Equip the boot.
    // Only the owner can equip the boot.
    public shared ({ caller }) func reboot_objects_equip() : async () {
        assert (caller == owner);
        if (equipped) {
            return;
        };
        equipped := true;
    };

    // // Unequip the boot.
    // Only the owner can unequip the boot.
    public shared ({ caller }) func reboot_objects_unequip() {
        assert (caller == owner);
        if (not equipped) {
            return;
        };
        equipped := false;
    };

    public query func http_request(request : frontend.Request) : async frontend.Response {
        return frontend.get_html(request);
    };
};
