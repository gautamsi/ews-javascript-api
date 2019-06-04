"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the location where a ResolveName operation searches for contacts.
 */
var ResolveNameSearchLocation;
(function (ResolveNameSearchLocation) {
    /**
     * The name is resolved against the Global Address List.
     */
    ResolveNameSearchLocation[ResolveNameSearchLocation["DirectoryOnly"] = 0] = "DirectoryOnly";
    /**
     * The name is resolved against the Global Address List and then against the Contacts folder if no match was found.
     */
    ResolveNameSearchLocation[ResolveNameSearchLocation["DirectoryThenContacts"] = 1] = "DirectoryThenContacts";
    /**
     * The name is resolved against the Contacts folder.
     */
    ResolveNameSearchLocation[ResolveNameSearchLocation["ContactsOnly"] = 2] = "ContactsOnly";
    /**
     * The name is resolved against the Contacts folder and then against the Global Address List if no match was found.
     */
    ResolveNameSearchLocation[ResolveNameSearchLocation["ContactsThenDirectory"] = 3] = "ContactsThenDirectory";
})(ResolveNameSearchLocation = exports.ResolveNameSearchLocation || (exports.ResolveNameSearchLocation = {}));
