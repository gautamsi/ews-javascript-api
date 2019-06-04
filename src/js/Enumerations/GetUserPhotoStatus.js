"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the response types from a GetUserPhoto request
 */
var GetUserPhotoStatus;
(function (GetUserPhotoStatus) {
    /**
     * The photo was successfully returned
     */
    GetUserPhotoStatus[GetUserPhotoStatus["PhotoReturned"] = 0] = "PhotoReturned";
    /**
     * The photo has not changed since it was last obtained
     */
    GetUserPhotoStatus[GetUserPhotoStatus["PhotoUnchanged"] = 1] = "PhotoUnchanged";
    /**
     * The photo or user was not found on the server
     */
    GetUserPhotoStatus[GetUserPhotoStatus["PhotoOrUserNotFound"] = 2] = "PhotoOrUserNotFound";
})(GetUserPhotoStatus = exports.GetUserPhotoStatus || (exports.GetUserPhotoStatus = {}));
