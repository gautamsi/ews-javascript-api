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
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var ServiceResponse_1 = require("../Responses/ServiceResponse");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/**
 * @internal Represents a request to a Apply Conversation Action operation
 *
 * @sealed
 */
var ApplyConversationActionRequest = /** @class */ (function (_super) {
    __extends(ApplyConversationActionRequest, _super);
    /**
     * @internal Initializes a new instance of the **ApplyConversationActionRequest** class.
     *
     * @param   {ExchangeService}       service   The service.
     * @param   {ServiceErrorHandling}  errorHandlingMode   Indicates how errors should be handled.
     */
    function ApplyConversationActionRequest(service, errorHandlingMode) {
        var _this = _super.call(this, service, errorHandlingMode) || this;
        _this.conversationActions = [];
        return _this;
    }
    Object.defineProperty(ApplyConversationActionRequest.prototype, "ConversationActions", {
        get: function () {
            return this.conversationActions;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Creates service response.
     *
     * @param   {ExchangeService}   service         The service.
     * @param   {number}   			responseIndex   Index of the response.
     * @return  {ServiceResponse}	Service response.
     */
    ApplyConversationActionRequest.prototype.CreateServiceResponse = function (service, responseIndex) {
        return new ServiceResponse_1.ServiceResponse();
    };
    /**
     * @internal Gets the expected response message count.
     *
     * @return  {number}      Number of expected response messages.
     */
    ApplyConversationActionRequest.prototype.GetExpectedResponseMessageCount = function () {
        return this.conversationActions.length;
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    ApplyConversationActionRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2010_SP1;
    };
    /**
     * @internal Gets the name of the response message XML element.
     *
     * @return  {string}      Xml element name.
     */
    ApplyConversationActionRequest.prototype.GetResponseMessageXmlElementName = function () { return XmlElementNames_1.XmlElementNames.ApplyConversationActionResponseMessage; };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      Xml element name.
     */
    ApplyConversationActionRequest.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.ApplyConversationActionResponse; };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      Xml element name.
     */
    ApplyConversationActionRequest.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.ApplyConversationAction; };
    /**
     * @internal Validate the request.
     */
    ApplyConversationActionRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        EwsUtilities_1.EwsUtilities.ValidateParamCollection(this.conversationActions, "conversationActions");
        for (var iAction = 0; iAction < this.ConversationActions.length; iAction++) {
            this.ConversationActions[iAction].Validate();
        }
    };
    /**
     * @internal Writes XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    ApplyConversationActionRequest.prototype.WriteElementsToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.ConversationActions);
        for (var iAction = 0; iAction < this.ConversationActions.length; iAction++) {
            this.ConversationActions[iAction].WriteElementsToXml(writer);
        }
        writer.WriteEndElement();
    };
    return ApplyConversationActionRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.ApplyConversationActionRequest = ApplyConversationActionRequest;
