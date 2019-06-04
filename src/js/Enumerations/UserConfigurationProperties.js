"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Identifies the user configuration properties to retrieve.
 *
 * [Flags]
 */
var UserConfigurationProperties;
(function (UserConfigurationProperties) {
    /**
     * Retrieve the Id property.
     */
    UserConfigurationProperties[UserConfigurationProperties["Id"] = 1] = "Id";
    /**
     * Retrieve the Dictionary property.
     */
    UserConfigurationProperties[UserConfigurationProperties["Dictionary"] = 2] = "Dictionary";
    /**
     * Retrieve the XmlData property.
     */
    UserConfigurationProperties[UserConfigurationProperties["XmlData"] = 4] = "XmlData";
    /**
     * Retrieve the BinaryData property.
     */
    UserConfigurationProperties[UserConfigurationProperties["BinaryData"] = 8] = "BinaryData";
    /**
     * Retrieve all properties.
     */
    UserConfigurationProperties[UserConfigurationProperties["All"] = 15] = "All";
})(UserConfigurationProperties = exports.UserConfigurationProperties || (exports.UserConfigurationProperties = {}));
