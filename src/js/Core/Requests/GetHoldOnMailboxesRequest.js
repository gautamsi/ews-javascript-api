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
var GetHoldOnMailboxesResponse_1 = require("../Responses/GetHoldOnMailboxesResponse");
var ServiceValidationException_1 = require("../../Exceptions/ServiceValidationException");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var Strings_1 = require("../../Strings");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var SimpleServiceRequestBase_1 = require("./SimpleServiceRequestBase");
/**
 * @internal Represents a GetHoldOnMailboxesRequest request.
 *
 * @sealed
 */
var GetHoldOnMailboxesRequest = /** @class */ (function (_super) {
    __extends(GetHoldOnMailboxesRequest, _super);
    /**
     * @internal Initializes a new instance of the **GetHoldOnMailboxesRequest** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    function GetHoldOnMailboxesRequest(service) {
        var _this = _super.call(this, service) || this;
        /**
         * Hold id
         */
        _this.HoldId = null;
        return _this;
    }
    /**
     * @internal Executes this request.
     *
     * @return  {Promise<GetHoldOnMailboxesResponse>}      Service response  :Promise.
     */
    GetHoldOnMailboxesRequest.prototype.Execute = function () {
        return this.InternalExecute().then(function (serviceResponse) {
            return serviceResponse;
        });
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    GetHoldOnMailboxesRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2013;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name.
     */
    GetHoldOnMailboxesRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetHoldOnMailboxesResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetHoldOnMailboxesRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetHoldOnMailboxes;
    };
    /**
     * @internal Parses the response.
     *
     * @param   {any}   jsonBody   The js object response body.
     * @return  {any}              Response object.
     */
    GetHoldOnMailboxesRequest.prototype.ParseResponse = function (jsonBody) {
        var response = new GetHoldOnMailboxesResponse_1.GetHoldOnMailboxesResponse();
        response.LoadFromXmlJsObject(jsonBody, this.Service);
        return response;
    };
    /**
     * @internal Validate request.
     */
    GetHoldOnMailboxesRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.HoldId)) {
            throw new ServiceValidationException_1.ServiceValidationException(Strings_1.Strings.HoldIdParameterIsNotSpecified);
        }
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    GetHoldOnMailboxesRequest.prototype.WriteElementsToXml = function (writer) {
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.HoldId, this.HoldId);
    };
    return GetHoldOnMailboxesRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.GetHoldOnMailboxesRequest = GetHoldOnMailboxesRequest;
