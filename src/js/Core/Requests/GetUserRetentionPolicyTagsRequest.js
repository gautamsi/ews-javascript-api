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
var GetUserRetentionPolicyTagsResponse_1 = require("../Responses/GetUserRetentionPolicyTagsResponse");
var XmlElementNames_1 = require("../XmlElementNames");
var SimpleServiceRequestBase_1 = require("./SimpleServiceRequestBase");
/**
 * @internal Represents a GetUserRetentionPolicyTagsRequest request.
 *
 * @sealed
 */
var GetUserRetentionPolicyTagsRequest = /** @class */ (function (_super) {
    __extends(GetUserRetentionPolicyTagsRequest, _super);
    /**
     * @internal Initializes a new instance of the **GetUserRetentionPolicyTagsRequest** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    function GetUserRetentionPolicyTagsRequest(service) {
        return _super.call(this, service) || this;
    }
    /**
     * @internal Executes this request.
     *
     * @return  {Promise<GetUserRetentionPolicyTagsResponse>}      Service response  :Promise.
     */
    GetUserRetentionPolicyTagsRequest.prototype.Execute = function () {
        return this.InternalExecute();
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    GetUserRetentionPolicyTagsRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2013;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name,
     */
    GetUserRetentionPolicyTagsRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetUserRetentionPolicyTagsResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name,
     */
    GetUserRetentionPolicyTagsRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetUserRetentionPolicyTags;
    };
    /**
     * @internal Parses the response.
     *
     * @param   {any}   jsonBody   The js object response body.
     * @return  {any}              Response object.
     */
    GetUserRetentionPolicyTagsRequest.prototype.ParseResponse = function (jsonBody) {
        var response = new GetUserRetentionPolicyTagsResponse_1.GetUserRetentionPolicyTagsResponse();
        response.LoadFromXmlJsObject(jsonBody, this.Service);
        return response;
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    GetUserRetentionPolicyTagsRequest.prototype.WriteElementsToXml = function (writer) {
        // Don't have parameter in request.
    };
    return GetUserRetentionPolicyTagsRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.GetUserRetentionPolicyTagsRequest = GetUserRetentionPolicyTagsRequest;
