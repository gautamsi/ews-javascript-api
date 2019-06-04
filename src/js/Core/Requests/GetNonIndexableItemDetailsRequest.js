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
var GetNonIndexableItemDetailsResponse_1 = require("../Responses/GetNonIndexableItemDetailsResponse");
var SearchPageDirection_1 = require("../../Enumerations/SearchPageDirection");
var ServiceValidationException_1 = require("../../Exceptions/ServiceValidationException");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var Strings_1 = require("../../Strings");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var SimpleServiceRequestBase_1 = require("./SimpleServiceRequestBase");
/**
 * @internal Represents a GetNonIndexableItemDetailsRequest request.
 *
 * @sealed
 */
var GetNonIndexableItemDetailsRequest = /** @class */ (function (_super) {
    __extends(GetNonIndexableItemDetailsRequest, _super);
    /**
     * @internal Initializes a new instance of the **GetNonIndexableItemDetailsRequest** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    function GetNonIndexableItemDetailsRequest(service) {
        var _this = _super.call(this, service) || this;
        /**
         * Mailboxes
         */
        _this.Mailboxes = null;
        /**
         * @Nullable Page size
         */
        _this.PageSize = null;
        /**
         * Page item reference
         */
        _this.PageItemReference = null;
        /**
         * @Nullable Page direction
         */
        _this.PageDirection = null;
        /**
         * Whether to search archive only
         */
        _this.SearchArchiveOnly = false;
        return _this;
    }
    /**
     * @internal Executes this request.
     *
     * @return  {Promise<GetNonIndexableItemDetailsResponse>}      Service response  :Promise.
     */
    GetNonIndexableItemDetailsRequest.prototype.Execute = function () {
        return this.InternalExecute().then(function (serviceResponse) {
            return serviceResponse;
        });
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    GetNonIndexableItemDetailsRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2013;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name.
     */
    GetNonIndexableItemDetailsRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetNonIndexableItemDetailsResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetNonIndexableItemDetailsRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetNonIndexableItemDetails;
    };
    /**
     * @internal Parses the response.
     *
     * @param   {any}   jsonBody   The js object response body.
     * @return  {any}              Response object.
     */
    GetNonIndexableItemDetailsRequest.prototype.ParseResponse = function (jsonBody) {
        var response = new GetNonIndexableItemDetailsResponse_1.GetNonIndexableItemDetailsResponse();
        response.LoadFromXmlJsObject(jsonBody, this.Service);
        return response;
    };
    /**
     * @internal Validate request.
     */
    GetNonIndexableItemDetailsRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        if (this.Mailboxes == null || this.Mailboxes.length == 0) {
            throw new ServiceValidationException_1.ServiceValidationException(Strings_1.Strings.MailboxesParameterIsNotSpecified);
        }
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    GetNonIndexableItemDetailsRequest.prototype.WriteElementsToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.Mailboxes);
        for (var _i = 0, _a = this.Mailboxes; _i < _a.length; _i++) {
            var mailbox = _a[_i];
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.LegacyDN, mailbox);
        }
        writer.WriteEndElement();
        if (this.PageSize) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.PageSize, this.PageSize);
        }
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.PageItemReference)) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.PageItemReference, this.PageItemReference);
        }
        if (this.PageDirection) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.PageDirection, SearchPageDirection_1.SearchPageDirection[this.PageDirection]);
        }
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.SearchArchiveOnly, this.SearchArchiveOnly);
    };
    return GetNonIndexableItemDetailsRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.GetNonIndexableItemDetailsRequest = GetNonIndexableItemDetailsRequest;
