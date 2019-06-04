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
var ArgumentException_1 = require("../../Exceptions/ArgumentException");
var EwsUtilities_1 = require("../EwsUtilities");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var ServiceResult_1 = require("../../Enumerations/ServiceResult");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var UpdateInboxRulesException_1 = require("../../Exceptions/UpdateInboxRulesException");
var UpdateInboxRulesResponse_1 = require("../Responses/UpdateInboxRulesResponse");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var SimpleServiceRequestBase_1 = require("./SimpleServiceRequestBase");
/**
 * @internal Represents a UpdateInboxRulesRequest request.
 *
 * @sealed
 */
var UpdateInboxRulesRequest = /** @class */ (function (_super) {
    __extends(UpdateInboxRulesRequest, _super);
    /**
     * @internal Initializes a new instance of the **UpdateInboxRulesRequest** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    function UpdateInboxRulesRequest(service) {
        var _this = _super.call(this, service) || this;
        /**
         * The smtp address of the mailbox from which to get the inbox rules.
         */
        _this.mailboxSmtpAddress = null;
        /**
         * Remove OutlookRuleBlob or not.
         */
        _this.removeOutlookRuleBlob = false;
        /**
         * InboxRule operation collection.
         */
        _this.inboxRuleOperations = null;
        return _this;
    }
    Object.defineProperty(UpdateInboxRulesRequest.prototype, "MailboxSmtpAddress", {
        get: function () {
            return this.mailboxSmtpAddress;
        },
        set: function (value) {
            this.mailboxSmtpAddress = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateInboxRulesRequest.prototype, "RemoveOutlookRuleBlob", {
        get: function () {
            return this.removeOutlookRuleBlob;
        },
        set: function (value) {
            this.removeOutlookRuleBlob = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UpdateInboxRulesRequest.prototype, "InboxRuleOperations", {
        get: function () {
            return this.inboxRuleOperations;
        },
        set: function (value) {
            this.inboxRuleOperations = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Executes this request.
     *
     * @return  {Promise<UpdateInboxRulesResponse>}      Service response  :Promise.
     */
    UpdateInboxRulesRequest.prototype.Execute = function () {
        var _this = this;
        return this.InternalExecute().then(function (serviceResponse) {
            if (serviceResponse.Result == ServiceResult_1.ServiceResult.Error) {
                throw new UpdateInboxRulesException_1.UpdateInboxRulesException(serviceResponse, _this.inboxRuleOperations);
            }
            return serviceResponse;
        });
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    UpdateInboxRulesRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name,
     */
    UpdateInboxRulesRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.UpdateInboxRulesResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name,
     */
    UpdateInboxRulesRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.UpdateInboxRules;
    };
    /**
     * @internal Parses the response.
     *
     * @param   {any}   jsonBody   The js object response body.
     * @return  {any}              Response object.
     */
    UpdateInboxRulesRequest.prototype.ParseResponse = function (jsonBody) {
        var response = new UpdateInboxRulesResponse_1.UpdateInboxRulesResponse();
        response.LoadFromXmlJsObject(jsonBody, this.Service);
        return response;
    };
    /**
     * @internal Validate request.
     */
    UpdateInboxRulesRequest.prototype.Validate = function () {
        if (this.inboxRuleOperations == null) {
            throw new ArgumentException_1.ArgumentException("RuleOperations cannot be null.", "Operations");
        }
        var operationCount = 0;
        for (var _i = 0, _a = this.inboxRuleOperations; _i < _a.length; _i++) {
            var operation = _a[_i];
            EwsUtilities_1.EwsUtilities.ValidateParam(operation, "RuleOperation");
            operationCount++;
        }
        if (operationCount == 0) {
            throw new ArgumentException_1.ArgumentException("RuleOperations cannot be empty.", "Operations");
        }
        this.Service.Validate();
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    UpdateInboxRulesRequest.prototype.WriteElementsToXml = function (writer) {
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.mailboxSmtpAddress)) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.MailboxSmtpAddress, this.mailboxSmtpAddress);
        }
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.RemoveOutlookRuleBlob, this.RemoveOutlookRuleBlob);
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.Operations);
        for (var _i = 0, _a = this.inboxRuleOperations; _i < _a.length; _i++) {
            var operation = _a[_i];
            operation.WriteToXml(writer, operation.XmlElementName);
        }
        writer.WriteEndElement();
    };
    return UpdateInboxRulesRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.UpdateInboxRulesRequest = UpdateInboxRulesRequest;
