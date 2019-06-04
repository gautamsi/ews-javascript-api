"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var OutlookProtocol_1 = require("./OutlookProtocol");
var OutlookUser_1 = require("./OutlookUser");
var UserSettingName_1 = require("../../../Enumerations/UserSettingName");
var LazyMember_1 = require("../../../Core/LazyMember");
var ExtensionMethods_1 = require("../../../ExtensionMethods");
var ConfigurationSettingsBase_1 = require("../ConfigurationSettingsBase");
/** @internal  */
var OutlookConfigurationSettings = /** @class */ (function (_super) {
    __extends(OutlookConfigurationSettings, _super);
    function OutlookConfigurationSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OutlookConfigurationSettings.prototype.ConvertSettings = function (smtpAddress, requestedSettings) { throw new Error("OutlookConfigurationSettings.ts - ConvertSettings : Not implemented."); };
    OutlookConfigurationSettings.prototype.GetNamespace = function () { throw new Error("OutlookConfigurationSettings.ts - GetNamespace : Not implemented."); };
    OutlookConfigurationSettings.prototype.IsAvailableUserSetting = function (setting) { throw new Error("OutlookConfigurationSettings.ts - IsAvailableUserSetting : Not implemented."); };
    OutlookConfigurationSettings.prototype.MakeRedirectionResponse = function (redirectUrl) { throw new Error("OutlookConfigurationSettings.ts - MakeRedirectionResponse : Not implemented."); };
    OutlookConfigurationSettings.prototype.ReportUnsupportedSettings = function (requestedSettings, response) { throw new Error("OutlookConfigurationSettings.ts - ReportUnsupportedSettings : Not implemented."); };
    OutlookConfigurationSettings.allOutlookProviderSettings = new LazyMember_1.LazyMember(function () {
        var results = []; //new List<UserSettingName>();
        ExtensionMethods_1.ArrayHelper.AddRange(results, OutlookUser_1.OutlookUser.AvailableUserSettings);
        ExtensionMethods_1.ArrayHelper.AddRange(results, OutlookProtocol_1.OutlookProtocol.AvailableUserSettings);
        results.push(UserSettingName_1.UserSettingName.AlternateMailboxes);
        return results;
    });
    return OutlookConfigurationSettings;
}(ConfigurationSettingsBase_1.ConfigurationSettingsBase));
exports.OutlookConfigurationSettings = OutlookConfigurationSettings;
