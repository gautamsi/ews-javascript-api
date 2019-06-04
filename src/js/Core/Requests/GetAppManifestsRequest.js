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
var EwsUtilities_1 = require("../EwsUtilities");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var GetAppManifestsResponse_1 = require("../Responses/GetAppManifestsResponse");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var SimpleServiceRequestBase_1 = require("./SimpleServiceRequestBase");
/**
 *  @internal Represents a GetAppManifests request.
 *
 * @sealed
*/
var GetAppManifestsRequest = /** @class */ (function (_super) {
    __extends(GetAppManifestsRequest, _super);
    /**
     * @internal Initializes a new instance of the **GetAppManifestsRequest** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    function GetAppManifestsRequest(service) {
        var _this = _super.call(this, service) || this;
        /**
         * @internal Gets or sets the api version supported by the client.
         * This tells Exchange service which app manifests should be returned based on the api version.
         *
         * @value	The Api version supported.
         */
        _this.ApiVersionSupported = null;
        /**
         * @internal Gets or sets the Schema version supported by the client.
         * This tells Exchange service which app manifests should be returned based on the schema version.
         *
         * @value	The schema version supported.
         */
        _this.SchemaVersionSupported = null;
        return _this;
    }
    /**
     * @internal Executes this request.
     *
     * @return  {Promise<GetAppManifestsResponse>}      Service response  :Promise.
     */
    GetAppManifestsRequest.prototype.Execute = function () {
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
    GetAppManifestsRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2013;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name.
     */
    GetAppManifestsRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetAppManifestsResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetAppManifestsRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetAppManifestsRequest;
    };
    /**
     * @internal Parses the response.
     *
     * @param   {any}   jsonBody   The js object response body.
     * @return  {any}              Response object.
     */
    GetAppManifestsRequest.prototype.ParseResponse = function (jsonBody) {
        var response = new GetAppManifestsResponse_1.GetAppManifestsResponse();
        response.LoadFromXmlJsObject(jsonBody, this.Service);
        return response;
    };
    /**
     * @internal Validate request.
     */
    GetAppManifestsRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        EwsUtilities_1.EwsUtilities.ValidateNonBlankStringParamAllowNull(this.ApiVersionSupported, "ApiVersionSupported");
        EwsUtilities_1.EwsUtilities.ValidateNonBlankStringParamAllowNull(this.SchemaVersionSupported, "SchemaVersionSupported");
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    GetAppManifestsRequest.prototype.WriteElementsToXml = function (writer) {
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.ApiVersionSupported)) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, "ApiVersionSupported", this.ApiVersionSupported);
        }
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.SchemaVersionSupported)) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, "SchemaVersionSupported", this.SchemaVersionSupported);
        }
    };
    return GetAppManifestsRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.GetAppManifestsRequest = GetAppManifestsRequest;
