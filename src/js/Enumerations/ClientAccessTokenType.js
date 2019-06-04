"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the type of ClientAccessTokenType
 */
var ClientAccessTokenType;
(function (ClientAccessTokenType) {
    /**
     * CallerIdentity
     */
    ClientAccessTokenType[ClientAccessTokenType["CallerIdentity"] = 0] = "CallerIdentity";
    /**
     * ExtensionCallback.
     */
    ClientAccessTokenType[ClientAccessTokenType["ExtensionCallback"] = 1] = "ExtensionCallback";
    /**
     * ScopedToken
     */
    ClientAccessTokenType[ClientAccessTokenType["ScopedToken"] = 2] = "ScopedToken";
})(ClientAccessTokenType = exports.ClientAccessTokenType || (exports.ClientAccessTokenType = {}));
