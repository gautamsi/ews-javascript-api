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
var GetNonIndexableItemStatisticsResponse_1 = require("../Responses/GetNonIndexableItemStatisticsResponse");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var ServiceValidationException_1 = require("../../Exceptions/ServiceValidationException");
var Strings_1 = require("../../Strings");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var SimpleServiceRequestBase_1 = require("./SimpleServiceRequestBase");
/**
 * @internal Represents the GetNonIndexableItemStatistics response.
 */
var GetNonIndexableItemStatisticsRequest = /** @class */ (function (_super) {
    __extends(GetNonIndexableItemStatisticsRequest, _super);
    /**
     * @internal Initializes a new instance of the **GetNonIndexableItemStatisticsRequest** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    function GetNonIndexableItemStatisticsRequest(service) {
        var _this = _super.call(this, service) || this;
        /**
         * Mailboxes
         */
        _this.Mailboxes = null;
        /**
         * Whether to search archive only
         */
        _this.SearchArchiveOnly = false;
        return _this;
    }
    /**
     * @internal Executes this request.
     *
     * @return  {Promise<GetNonIndexableItemStatisticsResponse>}      Service response  :Promise.
     */
    GetNonIndexableItemStatisticsRequest.prototype.Execute = function () {
        return this.InternalExecute().then(function (serviceResponse) {
            return serviceResponse;
        });
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    GetNonIndexableItemStatisticsRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2013;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name.
     */
    GetNonIndexableItemStatisticsRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetNonIndexableItemStatisticsResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetNonIndexableItemStatisticsRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetNonIndexableItemStatistics;
    };
    /**
     * @internal Parses the response.
     *
     * @param   {any}   jsonBody   The js object response body.
     * @return  {any}              Response object.
     */
    GetNonIndexableItemStatisticsRequest.prototype.ParseResponse = function (jsonBody) {
        var response = new GetNonIndexableItemStatisticsResponse_1.GetNonIndexableItemStatisticsResponse();
        response.LoadFromXmlJsObject(jsonBody, this.Service);
        return response;
    };
    /**
     * @internal Validate request.
     */
    GetNonIndexableItemStatisticsRequest.prototype.Validate = function () {
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
    GetNonIndexableItemStatisticsRequest.prototype.WriteElementsToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.Mailboxes);
        for (var _i = 0, _a = this.Mailboxes; _i < _a.length; _i++) {
            var mailbox = _a[_i];
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.LegacyDN, mailbox);
        }
        writer.WriteEndElement();
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.SearchArchiveOnly, this.SearchArchiveOnly);
    };
    return GetNonIndexableItemStatisticsRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.GetNonIndexableItemStatisticsRequest = GetNonIndexableItemStatisticsRequest;
