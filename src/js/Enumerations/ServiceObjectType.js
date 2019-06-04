"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the type of a service object.
 */
var ServiceObjectType;
(function (ServiceObjectType) {
    /**
     * The object is a folder.
     */
    ServiceObjectType[ServiceObjectType["Folder"] = 0] = "Folder";
    /**
     * The object is an item.
     */
    ServiceObjectType[ServiceObjectType["Item"] = 1] = "Item";
    /**
     * Data represents a conversation
     */
    ServiceObjectType[ServiceObjectType["Conversation"] = 2] = "Conversation";
    /**
     * Data represents a persona
     */
    ServiceObjectType[ServiceObjectType["Persona"] = 3] = "Persona";
})(ServiceObjectType = exports.ServiceObjectType || (exports.ServiceObjectType = {}));
