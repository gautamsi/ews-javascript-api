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
var InstallAppResponse_1 = require("../Responses/InstallAppResponse");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var SimpleServiceRequestBase_1 = require("./SimpleServiceRequestBase");
/**
 * @internal Represents a InstallApp request.
 *
 * @sealed
 */
var InstallAppRequest = /** @class */ (function (_super) {
    __extends(InstallAppRequest, _super);
    /**
     * Initializes a new instance of the **InstallAppRequest** class.
     *
     * @param   {ExchangeService}   service          The service.
     * @param   {string}   			manifestStream   The manifest's plain text XML stream.
     */
    function InstallAppRequest(service, manifestStream) {
        var _this = _super.call(this, service) || this;
        /**
         * The plain text manifest stream as base64 encoded string.
         */
        _this.manifestStream = null;
        _this.manifestStream = manifestStream;
        return _this;
    }
    /**
     * @internal Executes this request.
     *
     * @return  {Promise<InstallAppResponse>}      Service response  :Promise.
     */
    InstallAppRequest.prototype.Execute = function () {
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
    InstallAppRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2013;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name.
     */
    InstallAppRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.InstallAppResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    InstallAppRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.InstallAppRequest;
    };
    /**
     * @internal Parses the response.
     *
     * @param   {any}   jsonBody   The js object response body.
     * @return  {any}              Response object.
     */
    InstallAppRequest.prototype.ParseResponse = function (jsonBody) {
        var response = new InstallAppResponse_1.InstallAppResponse();
        response.LoadFromXmlJsObject(jsonBody, this.Service);
        return response;
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    InstallAppRequest.prototype.WriteElementsToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.Manifest);
        //writer.WriteBase64ElementValue(manifestStream);
        writer.WriteValue(this.manifestStream, null);
        writer.WriteEndElement();
    };
    return InstallAppRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.InstallAppRequest = InstallAppRequest;
