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
var ClientAccessTokenType_1 = require("../../Enumerations/ClientAccessTokenType");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var GetClientAccessTokenResponse_1 = require("../Responses/GetClientAccessTokenResponse");
var ServiceValidationException_1 = require("../../Exceptions/ServiceValidationException");
var ExtensionMethods_1 = require("../../ExtensionMethods");
var Strings_1 = require("../../Strings");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/**
 * @internal Represents a GetClientAccessToken request.
 *
 * @sealed
 */
var GetClientAccessTokenRequest = /** @class */ (function (_super) {
    __extends(GetClientAccessTokenRequest, _super);
    /**
     * @internal Initializes a new instance of the **GetClientAccessTokenRequest** class.
     *
     * @param   {ExchangeService}   	service             The service.
     * @param   {ServiceErrorHandling}  errorHandlingMode   Indicates how errors should be handled.
     */
    function GetClientAccessTokenRequest(service, errorHandlingMode) {
        var _this = _super.call(this, service, errorHandlingMode) || this;
        _this.TokenRequests = [];
        return _this;
    }
    /**
     * @internal Creates the service response.
     *
     * @param   {ExchangeService}   service         The service.
     * @param   {number}   			responseIndex   Index of the response.
     * @return  {GetClientAccessTokenResponse}		Response object.
     */
    GetClientAccessTokenRequest.prototype.CreateServiceResponse = function (service, responseIndex) {
        return new GetClientAccessTokenResponse_1.GetClientAccessTokenResponse(this.TokenRequests[responseIndex].Id, this.TokenRequests[responseIndex].TokenType);
    };
    /**
     * @internal Gets the expected response message count.
     *
     * @return  {number}      Number of items in response.
     */
    GetClientAccessTokenRequest.prototype.GetExpectedResponseMessageCount = function () {
        return this.TokenRequests.length;
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    GetClientAccessTokenRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2013;
    };
    /**
     * @internal Gets the name of the response message XML element.
     *
     * @return  {string}      XML element name.
     */
    GetClientAccessTokenRequest.prototype.GetResponseMessageXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetClientAccessTokenResponseMessage;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name.
     */
    GetClientAccessTokenRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetClientAccessTokenResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetClientAccessTokenRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetClientAccessToken;
    };
    /**
     * @internal Validate request.
     */
    GetClientAccessTokenRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        if (this.TokenRequests == null || this.TokenRequests.length == 0) {
            throw new ServiceValidationException_1.ServiceValidationException(Strings_1.Strings.HoldIdParameterIsNotSpecified);
        }
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    GetClientAccessTokenRequest.prototype.WriteElementsToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.TokenRequests);
        for (var _i = 0, _a = this.TokenRequests; _i < _a.length; _i++) {
            var tokenRequestInfo = _a[_i];
            writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.TokenRequest);
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Id, tokenRequestInfo.Id);
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.TokenType, ClientAccessTokenType_1.ClientAccessTokenType[tokenRequestInfo.TokenType]);
            if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(tokenRequestInfo.Scope)) {
                writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.HighlightTermScope, tokenRequestInfo.Scope);
            }
            writer.WriteEndElement();
        }
        writer.WriteEndElement();
    };
    return GetClientAccessTokenRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.GetClientAccessTokenRequest = GetClientAccessTokenRequest;
