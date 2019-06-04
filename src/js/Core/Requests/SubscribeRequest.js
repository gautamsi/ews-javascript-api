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
var ExtensionMethods_1 = require("../../ExtensionMethods");
var EventType_1 = require("../../Enumerations/EventType");
var EwsUtilities_1 = require("../EwsUtilities");
var FolderIdWrapperList_1 = require("../../Misc/FolderIdWrapperList");
var ServiceErrorHandling_1 = require("../../Enumerations/ServiceErrorHandling");
var ServiceValidationException_1 = require("../../Exceptions/ServiceValidationException");
var Strings_1 = require("../../Strings");
var XmlAttributeNames_1 = require("../XmlAttributeNames");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/**
 * @internal Represents an abstract Subscribe request.
 *
 * @typeparam	{TSubscription}		The type of the subscription.
 */
var SubscribeRequest = /** @class */ (function (_super) {
    __extends(SubscribeRequest, _super);
    /**
     * @internal Initializes a new instance of the **SubscribeRequest<TSubscription>** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    function SubscribeRequest(service) {
        var _this = _super.call(this, service, ServiceErrorHandling_1.ServiceErrorHandling.ThrowOnError) || this;
        _this.FolderIds = new FolderIdWrapperList_1.FolderIdWrapperList();
        _this.EventTypes = [];
        return _this;
    }
    /**
     * @internal Gets the expected response message count.
     *
     * @return  {number}      Number of expected response messages.
     */
    SubscribeRequest.prototype.GetExpectedResponseMessageCount = function () { return 1; };
    /**
     * @internal Gets the name of the response message XML element.
     *
     * @return  {string}      XML element name,
     */
    SubscribeRequest.prototype.GetResponseMessageXmlElementName = function () { return XmlElementNames_1.XmlElementNames.SubscribeResponseMessage; };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name,
     */
    SubscribeRequest.prototype.GetResponseXmlElementName = function () { return XmlElementNames_1.XmlElementNames.SubscribeResponse; };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name,
     */
    SubscribeRequest.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.Subscribe; };
    /**
     * @internal Validate request.
     */
    SubscribeRequest.prototype.Validate = function () {
        var _this = this;
        _super.prototype.Validate.call(this);
        EwsUtilities_1.EwsUtilities.ValidateParam(this.FolderIds, "FolderIds");
        EwsUtilities_1.EwsUtilities.ValidateParamCollection(this.EventTypes, "EventTypes");
        this.FolderIds.Validate(this.Service.RequestedServerVersion);
        // Check that caller isn't trying to subscribe to Status events.
        if (ExtensionMethods_1.ArrayHelper.OfType(this.EventTypes, function (eventType) { return eventType === EventType_1.EventType.Status; }).length > 0) { //  this.EventTypes.Count<EventType>(eventType => (eventType == EventType.Status)) > 0)
            throw new ServiceValidationException_1.ServiceValidationException(Strings_1.Strings.CannotSubscribeToStatusEvents);
        }
        // If Watermark was specified, make sure it's not a blank string.
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.Watermark)) {
            EwsUtilities_1.EwsUtilities.ValidateNonBlankStringParam(this.Watermark, "Watermark");
        }
        this.EventTypes.forEach(function (eventType) {
            EwsUtilities_1.EwsUtilities.ValidateEnumVersionValue(EventType_1.EventType, eventType, _this.Service.RequestedServerVersion, "EventType");
        });
    };
    /**
     * @internal Writes XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    SubscribeRequest.prototype.WriteElementsToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, this.GetSubscriptionXmlElementName());
        if (this.FolderIds.Count == 0) {
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.SubscribeToAllFolders, true);
        }
        this.FolderIds.WriteToXml(writer, XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.FolderIds);
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.EventTypes);
        for (var _i = 0, _a = this.EventTypes; _i < _a.length; _i++) {
            var eventType = _a[_i];
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.EventType, EventType_1.EventType[eventType] + "Event");
        }
        writer.WriteEndElement();
        if (!ExtensionMethods_1.StringHelper.IsNullOrEmpty(this.Watermark)) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Watermark, this.Watermark);
        }
        this.InternalWriteElementsToXml(writer);
        writer.WriteEndElement();
    };
    return SubscribeRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.SubscribeRequest = SubscribeRequest;
