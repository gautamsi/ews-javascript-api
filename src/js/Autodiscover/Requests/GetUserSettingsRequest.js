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
var Strings_1 = require("../../Strings");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var EwsUtilities_1 = require("../../Core/EwsUtilities");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var UserSettingName_1 = require("../../Enumerations/UserSettingName");
var ServiceValidationException_1 = require("../../Exceptions/ServiceValidationException");
var GetUserSettingsResponseCollection_1 = require("../Responses/GetUserSettingsResponseCollection");
var AutodiscoverRequest_1 = require("./AutodiscoverRequest");
var GetUserSettingsRequest = /** @class */ (function (_super) {
    __extends(GetUserSettingsRequest, _super);
    function GetUserSettingsRequest(service, url) {
        var _this = _super.call(this, service, url) || this;
        _this.expectPartnerToken = false;
        return _this;
    }
    GetUserSettingsRequest.prototype.CreateServiceResponse = function () {
        return new GetUserSettingsResponseCollection_1.GetUserSettingsResponseCollection();
    };
    GetUserSettingsRequest.prototype.Execute = function () {
        var _this = this;
        return this.InternalExecute().then(function (adr) {
            _this.PostProcessResponses(adr);
            return adr;
        });
        //<Promise<>> v
        //if (!responses) return;
        //if (responses.ErrorCode == AutodiscoverErrorCode.NoError) {
        //    this.PostProcessResponses(responses);
        //}
        //return responses;
    };
    GetUserSettingsRequest.prototype.GetRequestXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetUserSettingsRequestMessage;
    };
    GetUserSettingsRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetUserSettingsResponseMessage;
    };
    GetUserSettingsRequest.prototype.GetWsAddressingActionName = function () {
        return GetUserSettingsRequest.GetUserSettingsActionUri; // GetUserSettingsActionUri;
    };
    GetUserSettingsRequest.prototype.PostProcessResponses = function (responses) {
        // Note:The response collection may not include all of the requested users if the request has been throttled.
        for (var index = 0; index < responses.Count; index++) {
            responses.__thisIndexer(index).SmtpAddress = this.SmtpAddresses[index];
        }
    };
    /**@internal */
    GetUserSettingsRequest.prototype.ReadSoapHeader = function (reader) {
        _super.prototype.ReadSoapHeader.call(this, reader);
        return;
        if (this.expectPartnerToken) {
            if (reader.IsElement(XmlNamespace_1.XmlNamespace.Autodiscover, XmlElementNames_1.XmlElementNames.PartnerToken)) {
                this.PartnerToken = reader.ReadInnerXml();
            }
            if (reader.IsElement(XmlNamespace_1.XmlNamespace.Autodiscover, XmlElementNames_1.XmlElementNames.PartnerTokenReference)) {
                this.PartnerTokenReference = reader.ReadInnerXml();
            }
        }
    };
    GetUserSettingsRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        EwsUtilities_1.EwsUtilities.ValidateParam(this.SmtpAddresses, "smtpAddresses");
        EwsUtilities_1.EwsUtilities.ValidateParam(this.Settings, "settings");
        if (this.Settings.length == 0) {
            throw new ServiceValidationException_1.ServiceValidationException(Strings_1.Strings.InvalidAutodiscoverSettingsCount);
        }
        if (this.SmtpAddresses.length == 0) {
            throw new ServiceValidationException_1.ServiceValidationException(Strings_1.Strings.InvalidAutodiscoverSmtpAddressesCount);
        }
        for (var s in this.SmtpAddresses) {
            var smtpAddress = this.SmtpAddresses[s];
            //if (string.IsNullOrEmpty(smtpAddress)) {
            if (smtpAddress != undefined && smtpAddress !== "") {
                throw new ServiceValidationException_1.ServiceValidationException(Strings_1.Strings.InvalidAutodiscoverSmtpAddress);
            }
        }
    };
    /**@internal */
    GetUserSettingsRequest.prototype.WriteAttributesToXml = function (writer) {
        writer.WriteAttributeValue("xmlns", EwsUtilities_1.EwsUtilities.AutodiscoverSoapNamespacePrefix, EwsUtilities_1.EwsUtilities.AutodiscoverSoapNamespace);
    };
    /**@internal */
    GetUserSettingsRequest.prototype.WriteElementsToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Autodiscover, XmlElementNames_1.XmlElementNames.Request);
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Autodiscover, XmlElementNames_1.XmlElementNames.Users);
        for (var s in this.SmtpAddresses) {
            var smtpAddress = this.SmtpAddresses[s];
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Autodiscover, XmlElementNames_1.XmlElementNames.User);
            //if (!string.IsNullOrEmpty(smtpAddress)) {
            if (smtpAddress != undefined && smtpAddress !== "") {
                writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Autodiscover, XmlElementNames_1.XmlElementNames.Mailbox, smtpAddress);
            }
            writer.WriteEndElement(); // User
        }
        writer.WriteEndElement(); // Users
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Autodiscover, XmlElementNames_1.XmlElementNames.RequestedSettings);
        for (var s in this.Settings) {
            var setting = this.Settings[s];
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Autodiscover, XmlElementNames_1.XmlElementNames.Setting, UserSettingName_1.UserSettingName[setting]);
        }
        writer.WriteEndElement(); // RequestedSettings
        writer.WriteEndElement(); // Request
    };
    /**@internal */
    GetUserSettingsRequest.prototype.WriteExtraCustomSoapHeadersToXml = function (writer) {
        if (this.expectPartnerToken) {
            debugger;
            // writer.WriteElementValue(
            //    XmlNamespace.Autodiscover,
            //    XmlElementNames.BinarySecret,
            //    btoa(ExchangeServiceBase.SessionKey));
            //    //System.Convert.ToBase64String(ExchangeServiceBase.SessionKey));
        }
    };
    GetUserSettingsRequest.GetUserSettingsActionUri = EwsUtilities_1.EwsUtilities.AutodiscoverSoapNamespace + "/Autodiscover/GetUserSettings";
    return GetUserSettingsRequest;
}(AutodiscoverRequest_1.AutodiscoverRequest));
exports.GetUserSettingsRequest = GetUserSettingsRequest;
