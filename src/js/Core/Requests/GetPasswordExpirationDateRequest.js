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
var GetPasswordExpirationDateResponse_1 = require("../Responses/GetPasswordExpirationDateResponse");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var XmlElementNames_1 = require("../XmlElementNames");
var SimpleServiceRequestBase_1 = require("./SimpleServiceRequestBase");
/** @internal */
var GetPasswordExpirationDateRequest = /** @class */ (function (_super) {
    __extends(GetPasswordExpirationDateRequest, _super);
    function GetPasswordExpirationDateRequest(service) {
        var _this = _super.call(this, service) || this;
        _this.mailboxSmtpAddress = null;
        return _this;
    }
    Object.defineProperty(GetPasswordExpirationDateRequest.prototype, "MailboxSmtpAddress", {
        get: function () {
            return this.mailboxSmtpAddress;
        },
        set: function (value) {
            this.mailboxSmtpAddress = value;
        },
        enumerable: true,
        configurable: true
    });
    GetPasswordExpirationDateRequest.prototype.Execute = function () {
        return this.InternalExecute().then(function (serviceResponse) {
            serviceResponse.ThrowIfNecessary();
            return serviceResponse;
        });
    };
    GetPasswordExpirationDateRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1; };
    GetPasswordExpirationDateRequest.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.GetPasswordExpirationDateResponse; };
    GetPasswordExpirationDateRequest.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.GetPasswordExpirationDateRequest; };
    //ParseResponse(reader: any): any { throw new Error("GetPasswordExpirationDateRequest.ts - ParseResponse : Not implemented."); }
    GetPasswordExpirationDateRequest.prototype.ParseResponse = function (jsonBody) {
        var serviceResponse = new GetPasswordExpirationDateResponse_1.GetPasswordExpirationDateResponse();
        serviceResponse.LoadFromXmlJsObject(jsonBody, this.Service);
        return serviceResponse;
    };
    /**@internal */
    GetPasswordExpirationDateRequest.prototype.WriteElementsToXml = function (writer) { writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.MailboxSmtpAddress, this.MailboxSmtpAddress); };
    return GetPasswordExpirationDateRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.GetPasswordExpirationDateRequest = GetPasswordExpirationDateRequest;
