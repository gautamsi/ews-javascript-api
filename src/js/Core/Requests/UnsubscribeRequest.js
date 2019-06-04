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
var ServiceErrorHandling_1 = require("../../Enumerations/ServiceErrorHandling");
var ServiceResponse_1 = require("../Responses/ServiceResponse");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/**
 * @internal Represents an Unsubscribe request.
 */
var UnsubscribeRequest = /** @class */ (function (_super) {
    __extends(UnsubscribeRequest, _super);
    /**
     * @internal Initializes a new instance of the **UnsubscribeRequest** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    function UnsubscribeRequest(service) {
        return _super.call(this, service, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError) || this;
    }
    /**
     * @internal Creates service response.
     *
     * @param   {ExchangeService}   service         The service.
     * @param   {number}   			responseIndex   Index of the response.
     * @return  {ServiceResponse}	Service response.
     */
    UnsubscribeRequest.prototype.CreateServiceResponse = function (service, responseIndex) { return new ServiceResponse_1.ServiceResponse(); };
    /**
     * @internal Gets the expected response message count.
     *
     * @return  {number}      Number of expected response messages.
     */
    UnsubscribeRequest.prototype.GetExpectedResponseMessageCount = function () { return 1; };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    UnsubscribeRequest.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    /**
     * @internal Gets the name of the response message XML element.
     *
     * @return  {string}      Xml element name.
     */
    UnsubscribeRequest.prototype.GetResponseMessageXmlElementName = function () { return XmlElementNames_1.XmlElementNames.UnsubscribeResponseMessage; };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      Xml element name.
     */
    UnsubscribeRequest.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.UnsubscribeResponse; };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      Xml element name.
     */
    UnsubscribeRequest.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.Unsubscribe; };
    /**
     * @internal Validate the request.
     */
    UnsubscribeRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        EwsUtilities_1.EwsUtilities.ValidateNonBlankStringParam(this.SubscriptionId, "SubscriptionId");
    };
    /**
     * @internal Writes XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    UnsubscribeRequest.prototype.WriteElementsToXml = function (writer) {
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.SubscriptionId, this.SubscriptionId);
    };
    return UnsubscribeRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.UnsubscribeRequest = UnsubscribeRequest;
