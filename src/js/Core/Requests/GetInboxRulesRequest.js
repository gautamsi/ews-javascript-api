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
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var GetInboxRulesResponse_1 = require("../Responses/GetInboxRulesResponse");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var SimpleServiceRequestBase_1 = require("./SimpleServiceRequestBase");
/**
 * @internal Represents a GetInboxRules request.
 *
 * @sealed
 */
var GetInboxRulesRequest = /** @class */ (function (_super) {
    __extends(GetInboxRulesRequest, _super);
    /**
     * @internal Initializes a new instance of the **GetInboxRulesRequest** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    function GetInboxRulesRequest(service) {
        return _super.call(this, service) || this;
    }
    Object.defineProperty(GetInboxRulesRequest.prototype, "MailboxSmtpAddress", {
        /**
         * Gets or sets the address of the mailbox from which to get the inbox rules.
         */
        get: function () {
            return this.mailboxSmtpAddress;
        },
        set: function (value) {
            this.mailboxSmtpAddress = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Executes this request.
     *
     * @return  {Promise<GetInboxRulesResponse>}      Service response  :Promise.
     */
    GetInboxRulesRequest.prototype.Execute = function () {
        return this.InternalExecute().then(function (serviceResponse) {
            serviceResponse.ThrowIfNecessary();
            return serviceResponse;
        });
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    GetInboxRulesRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name,
     */
    GetInboxRulesRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetInboxRulesResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name,
     */
    GetInboxRulesRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetInboxRules;
    };
    /**
     * @internal Parses the response.
     *
     * @param   {any}   jsonBody   The js object response body.
     * @return  {any}              Response object.
     */
    GetInboxRulesRequest.prototype.ParseResponse = function (jsonBody) {
        var response = new GetInboxRulesResponse_1.GetInboxRulesResponse();
        response.LoadFromXmlJsObject(jsonBody, this.Service);
        return response;
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    GetInboxRulesRequest.prototype.WriteElementsToXml = function (writer) {
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.mailboxSmtpAddress)) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.MailboxSmtpAddress, this.mailboxSmtpAddress);
        }
    };
    return GetInboxRulesRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.GetInboxRulesRequest = GetInboxRulesRequest;
