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
var GetSearchableMailboxesResponse_1 = require("../Responses/GetSearchableMailboxesResponse");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var SimpleServiceRequestBase_1 = require("./SimpleServiceRequestBase");
/**
 * @internal Represents a GetSearchableMailboxesRequest request.
 */
var GetSearchableMailboxesRequest = /** @class */ (function (_super) {
    __extends(GetSearchableMailboxesRequest, _super);
    /**
     * @internal Initializes a new instance of the **GetSearchableMailboxesRequest** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    function GetSearchableMailboxesRequest(service) {
        var _this = _super.call(this, service) || this;
        /**
         * Search filter
         */
        _this.SearchFilter = null;
        /**
         * Expand group membership
         */
        _this.ExpandGroupMembership = false;
        return _this;
    }
    /**
     * @internal Executes this request.
     *
     * @return  {Promise<GetDiscoverySearchConfigurationResponse>}      Service response  :Promise.
     */
    GetSearchableMailboxesRequest.prototype.Execute = function () {
        return this.InternalExecute().then(function (serviceResponse) {
            return serviceResponse;
        });
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    GetSearchableMailboxesRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2013;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name.
     */
    GetSearchableMailboxesRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetSearchableMailboxesResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetSearchableMailboxesRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetSearchableMailboxes;
    };
    /**
     * @internal Parses the response.
     *
     * @param   {any}   jsonBody   The js object response body.
     * @return  {any}              Response object.
     */
    GetSearchableMailboxesRequest.prototype.ParseResponse = function (jsonBody) {
        var response = new GetSearchableMailboxesResponse_1.GetSearchableMailboxesResponse();
        response.LoadFromXmlJsObject(jsonBody, this.Service);
        return response;
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    GetSearchableMailboxesRequest.prototype.WriteElementsToXml = function (writer) {
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.SearchFilter, this.SearchFilter || ExtensionMethods_1.StringHelper.Empty);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.ExpandGroupMembership, this.ExpandGroupMembership);
    };
    return GetSearchableMailboxesRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.GetSearchableMailboxesRequest = GetSearchableMailboxesRequest;
