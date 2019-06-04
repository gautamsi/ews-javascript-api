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
var GetDiscoverySearchConfigurationResponse_1 = require("../Responses/GetDiscoverySearchConfigurationResponse");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var SimpleServiceRequestBase_1 = require("./SimpleServiceRequestBase");
/**
 * @internal Represents a GetDiscoverySearchConfigurationRequest.
 *
 * @sealed
 */
var GetDiscoverySearchConfigurationRequest = /** @class */ (function (_super) {
    __extends(GetDiscoverySearchConfigurationRequest, _super);
    /**
     * @internal Initializes a new instance of the **GetDiscoverySearchConfigurationRequest** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    function GetDiscoverySearchConfigurationRequest(service) {
        var _this = _super.call(this, service) || this;
        /**
         * Search Id
         */
        _this.SearchId = null;
        /**
         * Expand group membership
         */
        _this.ExpandGroupMembership = false;
        /**
         * In-Place hold configuration only
         */
        _this.InPlaceHoldConfigurationOnly = false;
        return _this;
    }
    /**
     * @internal Executes this request.
     *
     * @return  {Promise<GetDiscoverySearchConfigurationResponse>}      Service response  :Promise.
     */
    GetDiscoverySearchConfigurationRequest.prototype.Execute = function () {
        return this.InternalExecute().then(function (serviceResponse) {
            return serviceResponse;
        });
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    GetDiscoverySearchConfigurationRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2013;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name.
     */
    GetDiscoverySearchConfigurationRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetDiscoverySearchConfigurationResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetDiscoverySearchConfigurationRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetDiscoverySearchConfiguration;
    };
    /**
     * @internal Parses the response.
     *
     * @param   {any}   jsonBody   The js object response body.
     * @return  {any}              Response object.
     */
    GetDiscoverySearchConfigurationRequest.prototype.ParseResponse = function (jsonBody) {
        var response = new GetDiscoverySearchConfigurationResponse_1.GetDiscoverySearchConfigurationResponse();
        response.LoadFromXmlJsObject(jsonBody, this.Service);
        return response;
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    GetDiscoverySearchConfigurationRequest.prototype.WriteElementsToXml = function (writer) {
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.SearchId, this.SearchId || ExtensionMethods_1.StringHelper.Empty);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.ExpandGroupMembership, this.ExpandGroupMembership);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.InPlaceHoldConfigurationOnly, this.InPlaceHoldConfigurationOnly);
    };
    return GetDiscoverySearchConfigurationRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.GetDiscoverySearchConfigurationRequest = GetDiscoverySearchConfigurationRequest;
