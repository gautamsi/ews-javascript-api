"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @internal */
var ConfigurationSettingsBase = /** @class */ (function () {
    function ConfigurationSettingsBase() {
    }
    ConfigurationSettingsBase.prototype.ConvertSettings = function (smtpAddress, requestedSettings) { throw new Error("ConfigurationSettingsBase.ts - ConvertSettings : Not implemented."); };
    ConfigurationSettingsBase.prototype.GetNamespace = function () { throw new Error("ConfigurationSettingsBase.ts - GetNamespace : Not implemented."); };
    //LoadFromXml(reader: EwsXmlReader): any { throw new Error("ConfigurationSettingsBase.ts - LoadFromXml : Not implemented."); }
    ConfigurationSettingsBase.prototype.MakeRedirectionResponse = function (redirectUrl) { throw new Error("ConfigurationSettingsBase.ts - MakeRedirectionResponse : Not implemented."); };
    return ConfigurationSettingsBase;
}());
exports.ConfigurationSettingsBase = ConfigurationSettingsBase;
