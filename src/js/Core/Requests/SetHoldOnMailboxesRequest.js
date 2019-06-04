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
var HoldAction_1 = require("../../Enumerations/HoldAction");
var ServiceValidationException_1 = require("../../Exceptions/ServiceValidationException");
var SetHoldOnMailboxesResponse_1 = require("../Responses/SetHoldOnMailboxesResponse");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var Strings_1 = require("../../Strings");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var SimpleServiceRequestBase_1 = require("./SimpleServiceRequestBase");
/**
 * @internal Represents a SetHoldOnMailboxesRequest request.
 *
 * @sealed
 */
var SetHoldOnMailboxesRequest = /** @class */ (function (_super) {
    __extends(SetHoldOnMailboxesRequest, _super);
    /**
     * @internal Initializes a new instance of the **SetHoldOnMailboxesRequest** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    function SetHoldOnMailboxesRequest(service) {
        var _this = _super.call(this, service) || this;
        /**
         * Action type
         */
        _this.ActionType = HoldAction_1.HoldAction.Create;
        /**
         * Hold id
         */
        _this.HoldId = null;
        /**
         * Query
         */
        _this.Query = null;
        /**
         * Collection of mailboxes to be held/unheld
         */
        _this.Mailboxes = null;
        /**
         * Query language
         */
        _this.Language = null;
        /**
         * InPlaceHold Identity
         */
        _this.InPlaceHoldIdentity = null;
        /**
         * Item hold period
         * *The text value can be "Unlimited" or the string value of any Timespan value.*
         */
        _this.ItemHoldPeriod = null;
        /**
         * Include Non Indexable Items
         */
        _this.IncludeNonIndexableItems = null;
        /**
         * Perform deduplication
         */
        _this.PerformDeduplication = null;
        return _this;
    }
    /**
     * @internal Executes this request.
     *
     * @return  {Promise<SetHoldOnMailboxesResponse>}      Service response  :Promise.
     */
    SetHoldOnMailboxesRequest.prototype.Execute = function () {
        return this.InternalExecute().then(function (serviceResponse) {
            return serviceResponse;
        });
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    SetHoldOnMailboxesRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2013;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name.
     */
    SetHoldOnMailboxesRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.SetHoldOnMailboxesResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    SetHoldOnMailboxesRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.SetHoldOnMailboxes;
    };
    /**
     * @internal Parses the response.
     *
     * @param   {any}   jsonBody   The js object response body.
     * @return  {any}              Response object.
     */
    SetHoldOnMailboxesRequest.prototype.ParseResponse = function (jsonBody) {
        var response = new SetHoldOnMailboxesResponse_1.SetHoldOnMailboxesResponse();
        response.LoadFromXmlJsObject(jsonBody, this.Service);
        return response;
    };
    /**
     * @internal Validate request.
     */
    SetHoldOnMailboxesRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.HoldId)) {
            throw new ServiceValidationException_1.ServiceValidationException(Strings_1.Strings.HoldIdParameterIsNotSpecified);
        }
        if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.InPlaceHoldIdentity) && (this.Mailboxes == null || this.Mailboxes.length == 0)) {
            throw new ServiceValidationException_1.ServiceValidationException(Strings_1.Strings.HoldMailboxesParameterIsNotSpecified);
        }
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    SetHoldOnMailboxesRequest.prototype.WriteElementsToXml = function (writer) {
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.ActionType, HoldAction_1.HoldAction[this.ActionType]);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.HoldId, this.HoldId);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.Query, this.Query || ExtensionMethods_1.StringHelper.Empty);
        if (this.Mailboxes != null && this.Mailboxes.length > 0) {
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.Mailboxes);
            for (var _i = 0, _a = this.Mailboxes; _i < _a.length; _i++) {
                var mailbox = _a[_i];
                writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.String, mailbox);
            }
            writer.WriteEndElement(); // Mailboxes
        }
        // Language
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.Language)) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.Language, this.Language);
        }
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.InPlaceHoldIdentity)) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.InPlaceHoldIdentity, this.InPlaceHoldIdentity);
        }
        /** per github issue #120 */
        if (this.IncludeNonIndexableItems !== null) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.IncludeNonIndexableItems, this.IncludeNonIndexableItems);
        }
        /** per github issue #120 */
        if (this.PerformDeduplication !== null) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.Deduplication, this.PerformDeduplication);
        }
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.ItemHoldPeriod)) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.ItemHoldPeriod, this.ItemHoldPeriod);
        }
    };
    return SetHoldOnMailboxesRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.SetHoldOnMailboxesRequest = SetHoldOnMailboxesRequest;
