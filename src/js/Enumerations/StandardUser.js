"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines a standard delegate user.
 */
var StandardUser;
(function (StandardUser) {
    /**
     * The Default delegate user, used to define default delegation permissions.
     */
    StandardUser[StandardUser["Default"] = 0] = "Default";
    /**
     * The Anonymous delegate user, used to define delegate permissions for unauthenticated users.
     */
    StandardUser[StandardUser["Anonymous"] = 1] = "Anonymous";
})(StandardUser = exports.StandardUser || (exports.StandardUser = {}));
