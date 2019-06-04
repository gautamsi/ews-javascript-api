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
var DomainSettingName_1 = require("../../Enumerations/DomainSettingName");
var EwsLogging_1 = require("../../Core/EwsLogging");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var DomainSettingError_1 = require("../DomainSettingError");
var AutodiscoverResponse_1 = require("./AutodiscoverResponse");
var GetDomainSettingsResponse = /** @class */ (function (_super) {
    __extends(GetDomainSettingsResponse, _super);
    function GetDomainSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**@internal */
    GetDomainSettingsResponse.prototype.LoadDomainSettingErrorsFromXml = function (reader) {
        if (!reader.IsEmptyElement) {
            do {
                reader.Read();
                if ((reader.NodeType == Node.ELEMENT_NODE) && (reader.LocalName == XmlElementNames_1.XmlElementNames.DomainSettingError)) {
                    var error = new DomainSettingError_1.DomainSettingError();
                    error.LoadFromXml(reader);
                    this.DomainSettingErrors.push(error);
                }
            } while (reader.HasRecursiveParent(XmlElementNames_1.XmlElementNames.UserSettingErrors));
            reader.SeekLast(); // fix xml treewalker to go back last node, next do..while loop will come back to current node.
        }
    };
    /**@internal */
    GetDomainSettingsResponse.prototype.LoadDomainSettingsFromXml = function (reader) {
        var parent = reader.CurrentNode;
        if (!reader.IsEmptyElement) {
            do {
                reader.Read();
                if (reader.Eof || !reader.HasRecursiveParentNode(parent, XmlElementNames_1.XmlElementNames.DomainSettings))
                    break;
                if ((reader.NodeType == Node.ELEMENT_NODE /*System.Xml.XmlNodeType.Element*/) && (reader.LocalName == XmlElementNames_1.XmlElementNames.DomainSetting)) {
                    var settingClass = reader.ReadAttributeValue(XmlNamespace_1.XmlNamespace.XmlSchemaInstance, XmlAttributeNames_1.XmlAttributeNames.Type);
                    switch (settingClass) {
                        case XmlElementNames_1.XmlElementNames.DomainStringSetting:
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
    GetDomainSettingsResponse.prototype.LoadFromXml = function (reader, parentElementName) {
        do {
            reader.Read();
            if (reader.NodeType == Node.ELEMENT_NODE) {
                switch (reader.LocalName) {
                    case XmlElementNames_1.XmlElementNames.RedirectTarget:
                        this.RedirectTarget = reader.ReadElementValue();
                        break;
                    case XmlElementNames_1.XmlElementNames.DomainSettingErrors:
                        this.LoadDomainSettingErrorsFromXml(reader);
                        break;
                    case XmlElementNames_1.XmlElementNames.DomainSettings:
                        this.LoadDomainSettingsFromXml(reader);
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
    GetDomainSettingsResponse.prototype.ReadSettingFromXml = function (reader) {
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
                }
            }
        } while (true);
        reader.SeekLast(); // fix xml treewalker to go back last node, next do..while loop will come back to current node.
        // EWS Managed API is broken with AutoDSvc endpoint in RedirectUrl scenario
        var domainSettingName = DomainSettingName_1.DomainSettingName[name]; // EwsUtilities.Parse<UserSettingName>(name);
        if (domainSettingName !== undefined)
            this.Settings[domainSettingName] = value;
        else
            EwsLogging_1.EwsLogging.Assert(false, "GetUserSettingsResponse.ReadSettingFromXml", "Unexpected or empty name element in user setting");
    };
    GetDomainSettingsResponse.prototype.LoadDomainSettingErrorsFromJson = function (obj) {
        var errors = undefined;
        if (typeof (obj[XmlElementNames_1.XmlElementNames.DomainSettingError]) === 'undefined')
            return;
        if (Object.prototype.toString.call(obj[XmlElementNames_1.XmlElementNames.DomainSettingError]) === "[object Array]")
            errors = obj[XmlElementNames_1.XmlElementNames.DomainSettingError];
        else
            errors = [obj[XmlElementNames_1.XmlElementNames.DomainSettingError]];
        for (var i = 0; i < errors.length; i++) {
            var error = new DomainSettingError_1.DomainSettingError();
            error.LoadFromObject(errors[0]);
            this.DomainSettingErrors.push(error);
        }
    };
    GetDomainSettingsResponse.prototype.LoadDomainSettingsFromJson = function (obj) {
        var settings = undefined;
        if (typeof (obj[XmlElementNames_1.XmlElementNames.DomainSetting]) === 'undefined')
            return;
        if (Object.prototype.toString.call(obj[XmlElementNames_1.XmlElementNames.DomainSetting]) === "[object Array]")
            settings = obj[XmlElementNames_1.XmlElementNames.DomainSetting];
        else
            settings = [obj[XmlElementNames_1.XmlElementNames.DomainSetting]];
        for (var i = 0; i < settings.length; i++) {
            var setting = settings[i];
            var settingClass = setting["type"];
            switch (settingClass) {
                case XmlElementNames_1.XmlElementNames.DomainStringSetting:
                    this.ReadSettingFromJson(setting);
                    break;
                default:
                    EwsLogging_1.EwsLogging.Assert(false, "GetUserSettingsResponse.LoadUserSettingsFromXml", ExtensionMethods_1.StringHelper.Format("Invalid setting class '{0}' returned", settingClass));
                    break;
            }
        }
    };
    GetDomainSettingsResponse.prototype.LoadFromJson = function (obj) {
        _super.prototype.LoadFromJson.call(this, obj);
        var settingscol = obj[XmlElementNames_1.XmlElementNames.DomainSettings];
        this.LoadDomainSettingsFromJson(settingscol);
        this.RedirectTarget = obj[XmlElementNames_1.XmlElementNames.RedirectTarget];
        this.LoadDomainSettingErrorsFromJson(obj[XmlElementNames_1.XmlElementNames.DomainSettingErrors]);
    };
    GetDomainSettingsResponse.prototype.ReadSettingFromJson = function (obj) {
        var name = obj[XmlElementNames_1.XmlElementNames.Name];
        var value = obj[XmlElementNames_1.XmlElementNames.Value];
        // EWS Managed API is broken with AutoDSvc endpoint in RedirectUrl scenario
        var domainSettingName = DomainSettingName_1.DomainSettingName[name]; // EwsUtilities.Parse<UserSettingName>(name);
        if (domainSettingName !== undefined)
            this.Settings[domainSettingName] = value;
        else
            EwsLogging_1.EwsLogging.Assert(false, "GetUserSettingsResponse.ReadSettingFromObject", "Unexpected or empty name element in user setting");
    };
    return GetDomainSettingsResponse;
}(AutodiscoverResponse_1.AutodiscoverResponse));
exports.GetDomainSettingsResponse = GetDomainSettingsResponse;
