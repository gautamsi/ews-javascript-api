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
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var XmlAttributeNames_1 = require("../../Core/XmlAttributeNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var UserSettingName_1 = require("../../Enumerations/UserSettingName");
var UserSettingError_1 = require("../UserSettingError");
var WebClientUrlCollection_1 = require("../WebClientUrlCollection");
var ProtocolConnectionCollection_1 = require("../ProtocolConnectionCollection");
var AlternateMailboxCollection_1 = require("../AlternateMailboxCollection");
var DocumentSharingLocationCollection_1 = require("../DocumentSharingLocationCollection");
var EwsLogging_1 = require("../../Core/EwsLogging");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var AutodiscoverResponse_1 = require("./AutodiscoverResponse");
var GetUserSettingsResponse = /** @class */ (function (_super) {
    __extends(GetUserSettingsResponse, _super);
    function GetUserSettingsResponse() {
        var _this = _super.call(this) || this;
        _this.SmtpAddress = "";
        _this.Settings = {};
        _this.UserSettingErrors = new Array();
        return _this;
    }
    /**@internal */
    GetUserSettingsResponse.prototype.LoadFromXml = function (reader, parentElementName) {
        do {
            reader.Read();
            if (reader.NodeType == Node.ELEMENT_NODE) {
                switch (reader.LocalName) {
                    case XmlElementNames_1.XmlElementNames.RedirectTarget:
                        this.RedirectTarget = reader.ReadElementValue();
                        break;
                    case XmlElementNames_1.XmlElementNames.UserSettingErrors:
                        this.LoadUserSettingErrorsFromXml(reader);
                        break;
                    case XmlElementNames_1.XmlElementNames.UserSettings:
                        this.LoadUserSettingsFromXml(reader);
                        break;
                    default:
                        _super.prototype.LoadFromXml.call(this, reader, parentElementName);
                        break;
                }
            }
        } while (reader.HasRecursiveParent(parentElementName));
        //while (!reader.IsEndElement(XmlNamespace.Autodiscover, endElementName));
    };
    /**@internal */
    GetUserSettingsResponse.prototype.LoadUserSettingErrorsFromXml = function (reader) {
        if (!reader.IsEmptyElement) {
            do {
                reader.Read();
                if ((reader.NodeType == Node.ELEMENT_NODE) && (reader.LocalName == XmlElementNames_1.XmlElementNames.UserSettingError)) {
                    var error = new UserSettingError_1.UserSettingError();
                    error.LoadFromXml(reader);
                    this.UserSettingErrors.push(error);
                }
            } while (reader.HasRecursiveParent(XmlElementNames_1.XmlElementNames.UserSettingErrors));
            reader.SeekLast(); // fix xml treewalker to go back last node, next do..while loop will come back to current node.
        }
    };
    /**@internal */
    GetUserSettingsResponse.prototype.LoadUserSettingsFromXml = function (reader) {
        var parent = reader.CurrentNode;
        if (!reader.IsEmptyElement) {
            do {
                reader.Read();
                if (reader.Eof || !reader.HasRecursiveParentNode(parent, XmlElementNames_1.XmlElementNames.UserSettings))
                    break;
                if ((reader.NodeType == Node.ELEMENT_NODE /*System.Xml.XmlNodeType.Element*/) && (reader.LocalName == XmlElementNames_1.XmlElementNames.UserSetting)) {
                    var settingClass = reader.ReadAttributeValue(XmlNamespace_1.XmlNamespace.XmlSchemaInstance, XmlAttributeNames_1.XmlAttributeNames.Type);
                    switch (settingClass) {
                        case XmlElementNames_1.XmlElementNames.StringSetting:
                        case XmlElementNames_1.XmlElementNames.WebClientUrlCollectionSetting:
                        case XmlElementNames_1.XmlElementNames.AlternateMailboxCollectionSetting:
                        case XmlElementNames_1.XmlElementNames.ProtocolConnectionCollectionSetting:
                        case XmlElementNames_1.XmlElementNames.DocumentSharingLocationCollectionSetting:
                            this.ReadSettingFromXml(reader);
                            break;
                        default:
                            EwsLogging_1.EwsLogging.Assert(false, "GetUserSettingsResponse.LoadUserSettingsFromXml", ExtensionMethods_1.StringHelper.Format("Invalid setting class '{0}' returned", settingClass));
                            break;
                    }
                }
            } while (true); // (reader.HasRecursiveParent(XmlElementNames.UserSettings));
            //while (!reader.IsEndElement(XmlNamespace.Autodiscover, XmlElementNames.UserSettings));
        }
    };
    /**@internal */
    GetUserSettingsResponse.prototype.ReadSettingFromXml = function (reader) {
        var name = null;
        var value = null;
        var parent = reader.CurrentNode;
        do {
            reader.Read();
            if (reader.Eof || !reader.HasRecursiveParentNode(parent, XmlElementNames_1.XmlElementNames.UserSetting))
                break;
            if (reader.NodeType == Node.ELEMENT_NODE) {
                switch (reader.LocalName) {
                    case XmlElementNames_1.XmlElementNames.Name:
                        name = reader.ReadElementValue();
                        break;
                    case XmlElementNames_1.XmlElementNames.Value:
                        value = reader.ReadElementValue();
                        break;
                    case XmlElementNames_1.XmlElementNames.WebClientUrls:
                        value = WebClientUrlCollection_1.WebClientUrlCollection.LoadFromXml(reader);
                        break;
                    case XmlElementNames_1.XmlElementNames.ProtocolConnections:
                        value = ProtocolConnectionCollection_1.ProtocolConnectionCollection.LoadFromXml(reader);
                        break;
                    case XmlElementNames_1.XmlElementNames.AlternateMailboxes:
                        value = AlternateMailboxCollection_1.AlternateMailboxCollection.LoadFromXml(reader);
                        break;
                    case XmlElementNames_1.XmlElementNames.DocumentSharingLocations:
                        value = DocumentSharingLocationCollection_1.DocumentSharingLocationCollection.LoadFromXml(reader);
                        break;
                }
            }
        } while (true);
        //while (reader.HasRecursiveParentNode(parent, XmlElementNames.UserSetting));
        //while (!reader.IsEndElement(XmlNamespace.Autodiscover, XmlElementNames.UserSetting));
        reader.SeekLast(); // fix xml treewalker to go back last node, next do..while loop will come back to current node.
        // EWS Managed API is broken with AutoDSvc endpoint in RedirectUrl scenario
        var userSettingName = UserSettingName_1.UserSettingName[name]; // EwsUtilities.Parse<UserSettingName>(name);
        if (userSettingName !== undefined)
            this.Settings[userSettingName] = value;
        else
            EwsLogging_1.EwsLogging.Assert(false, "GetUserSettingsResponse.ReadSettingFromXml", "Unexpected or empty name element in user setting");
        //try {
        //}
        //catch (ArgumentException) {
        //    // ignore unexpected UserSettingName in the response (due to the server-side bugs).
        //    // it'd be better if this is hooked into ITraceListener, but that is unavailable here.
        //    //
        //    // in case "name" is null, EwsUtilities.Parse throws ArgumentNullException
        //    // (which derives from ArgumentException).
        //    //
        //    //EwsUtilities.Assert(
        //    //    false,
        //    //    "GetUserSettingsResponse.ReadSettingFromXml",
        //    //    "Unexpected or empty name element in user setting");
        //}
    };
    GetUserSettingsResponse.prototype.LoadFromJson = function (obj /*, parentElementName: string*/) {
        //debugger;
        _super.prototype.LoadFromJson.call(this, obj /*, parentElementName*/);
        var settingscol = obj[XmlElementNames_1.XmlElementNames.UserSettings];
        this.LoadUserSettingsFromJson(settingscol);
        this.RedirectTarget = obj[XmlElementNames_1.XmlElementNames.RedirectTarget];
        //var redirecttarget = obj[XmlElementNames.RedirectTarget];
        ////if (redirecttarget["nil"]) redirecttarget = null;
        //this.RedirectTarget = redirecttarget;
        this.LoadUserSettingErrorsFromJson(obj[XmlElementNames_1.XmlElementNames.UserSettingErrors]);
    };
    GetUserSettingsResponse.prototype.LoadUserSettingErrorsFromJson = function (obj) {
        var errors = undefined;
        if (!obj || typeof (obj[XmlElementNames_1.XmlElementNames.UserSettingError]) === 'undefined')
            return;
        if (Object.prototype.toString.call(obj[XmlElementNames_1.XmlElementNames.UserSettingError]) === "[object Array]")
            errors = obj[XmlElementNames_1.XmlElementNames.UserSettingError];
        else
            errors = [obj[XmlElementNames_1.XmlElementNames.UserSettingError]];
        for (var i = 0; i < errors.length; i++) {
            var error = new UserSettingError_1.UserSettingError();
            error.LoadFromJson(errors[0]);
            this.UserSettingErrors.push(error);
        }
    };
    GetUserSettingsResponse.prototype.LoadUserSettingsFromJson = function (obj) {
        var settings = undefined;
        if (!obj || typeof (obj[XmlElementNames_1.XmlElementNames.UserSetting]) === 'undefined')
            return;
        if (Object.prototype.toString.call(obj[XmlElementNames_1.XmlElementNames.UserSetting]) === "[object Array]")
            settings = obj[XmlElementNames_1.XmlElementNames.UserSetting];
        else
            settings = [obj[XmlElementNames_1.XmlElementNames.UserSetting]];
        for (var i = 0; i < settings.length; i++) {
            var setting = settings[i];
            var settingClass = setting["type"];
            switch (settingClass) {
                case XmlElementNames_1.XmlElementNames.StringSetting:
                case XmlElementNames_1.XmlElementNames.WebClientUrlCollectionSetting:
                case XmlElementNames_1.XmlElementNames.AlternateMailboxCollectionSetting:
                case XmlElementNames_1.XmlElementNames.ProtocolConnectionCollectionSetting:
                case XmlElementNames_1.XmlElementNames.DocumentSharingLocationCollectionSetting:
                    this.ReadSettingFromJson(setting);
                    break;
                default:
                    EwsLogging_1.EwsLogging.Assert(false, "GetUserSettingsResponse.LoadUserSettingsFromXml", ExtensionMethods_1.StringHelper.Format("Invalid setting class '{0}' returned", settingClass));
                    break;
            }
        }
    };
    GetUserSettingsResponse.prototype.ReadSettingFromJson = function (obj) {
        var name = obj[XmlElementNames_1.XmlElementNames.Name];
        var value = obj[XmlElementNames_1.XmlElementNames.Value];
        switch (obj["type"]) {
            case XmlElementNames_1.XmlElementNames.WebClientUrlCollectionSetting: //.WebClientUrls:
                value = WebClientUrlCollection_1.WebClientUrlCollection.LoadFromJson(obj[XmlElementNames_1.XmlElementNames.WebClientUrls]);
                break;
            case XmlElementNames_1.XmlElementNames.ProtocolConnectionCollectionSetting: //ProtocolConnections:
                value = ProtocolConnectionCollection_1.ProtocolConnectionCollection.LoadFromJson(obj[XmlElementNames_1.XmlElementNames.ProtocolConnections]);
                break;
            case XmlElementNames_1.XmlElementNames.AlternateMailboxCollectionSetting: //AlternateMailboxes:
                value = AlternateMailboxCollection_1.AlternateMailboxCollection.LoadFromJson(obj[XmlElementNames_1.XmlElementNames.AlternateMailboxes]);
                break;
            case XmlElementNames_1.XmlElementNames.DocumentSharingLocationCollectionSetting: //DocumentSharingLocations:
                //debugger;
                EwsLogging_1.EwsLogging.Log("------------DocumentSharingLocationCollection needs test and fix ----------------", true);
                EwsLogging_1.EwsLogging.Log(obj, true, true);
                value = DocumentSharingLocationCollection_1.DocumentSharingLocationCollection.LoadFromJson(obj);
                break;
        }
        // EWS Managed API is broken with AutoDSvc endpoint in RedirectUrl scenario
        var userSettingName = UserSettingName_1.UserSettingName[name]; // EwsUtilities.Parse<UserSettingName>(name);
        if (userSettingName !== undefined)
            this.Settings[userSettingName] = value;
        else
            EwsLogging_1.EwsLogging.Assert(false, "GetUserSettingsResponse.ReadSettingFromXml", "Unexpected or empty name element in user setting");
        //try {
        //}
        //catch (ArgumentException) {
        //    // ignore unexpected UserSettingName in the response (due to the server-side bugs).
        //    // it'd be better if this is hooked into ITraceListener, but that is unavailable here.
        //    //
        //    // in case "name" is null, EwsUtilities.Parse throws ArgumentNullException
        //    // (which derives from ArgumentException).
        //    //
        //    //EwsUtilities.Assert(
        //    //    false,
        //    //    "GetUserSettingsResponse.ReadSettingFromXml",
        //    //    "Unexpected or empty name element in user setting");
        //}
    };
    GetUserSettingsResponse.prototype.GetSettingValue = function (setting) {
        //public bool TryGetSettingValue<T>(UserSettingName setting, out T value)
        return this.Settings[setting];
    };
    return GetUserSettingsResponse;
}(AutodiscoverResponse_1.AutodiscoverResponse));
exports.GetUserSettingsResponse = GetUserSettingsResponse;
