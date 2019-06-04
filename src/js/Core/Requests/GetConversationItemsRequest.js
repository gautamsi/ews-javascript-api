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
var ConversationSortOrder_1 = require("../../Enumerations/ConversationSortOrder");
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var MailboxSearchLocation_1 = require("../../Enumerations/MailboxSearchLocation");
var ServiceObjectType_1 = require("../../Enumerations/ServiceObjectType");
var ServiceVersionException_1 = require("../../Exceptions/ServiceVersionException");
var Strings_1 = require("../../Strings");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var GetConversationItemsResponse_1 = require("../Responses/GetConversationItemsResponse");
var MultiResponseServiceRequest_1 = require("./MultiResponseServiceRequest");
/**
 * @internal Represents a request to a GetConversationItems operation
 *
 * @sealed
 */
var GetConversationItemsRequest = /** @class */ (function (_super) {
    __extends(GetConversationItemsRequest, _super);
    /**
     * @internal Initializes a new instance of the **GetConversationItemsRequest** class.
     *
     * @param   {ExchangeService}       service   The service.
     * @param   {ServiceErrorHandling}  errorHandlingMode   Indicates how errors should be handled.
     */
    function GetConversationItemsRequest(service, errorHandlingMode) {
        var _this = _super.call(this, service, errorHandlingMode) || this;
        /**
         * @internal Gets or sets the conversations.
         */
        _this.Conversations = null;
        /**
         * Gets or sets the item properties.
         */
        _this.ItemProperties = null;
        /**
         * @internal Gets or sets the folders to ignore.
         */
        _this.FoldersToIgnore = null;
        /**
         * @internal Gets or sets the maximum number of items to return.
         *
         * @Nullable
         */
        _this.MaxItemsToReturn = null;
        /**
         * @internal Gets or sets the conversation sort order.
         *
         * @Nullable
         */
        _this.SortOrder = null;
        /**
         * @internal Gets or sets the mailbox search location to include in the search.
         *
         * @Nullable
         */
        _this.MailboxScope = null;
        return _this;
    }
    /**
     * @internal Creates service response.
     *
     * @param   {ExchangeService}   service         The service.
     * @param   {number}   			responseIndex   Index of the response.
     * @return  {GetConversationItemsResponse}	    Service response.
     */
    GetConversationItemsRequest.prototype.CreateServiceResponse = function (service, responseIndex) {
        return new GetConversationItemsResponse_1.GetConversationItemsResponse(this.ItemProperties);
    };
    /**
     * @internal Gets the expected response message count.
     *
     * @return  {number}      Number of expected response messages.
     */
    GetConversationItemsRequest.prototype.GetExpectedResponseMessageCount = function () {
        return this.Conversations ? this.Conversations.length : 0;
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    GetConversationItemsRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2013;
    };
    /**
     * @internal Gets the name of the response message XML element.
     *
     * @return  {string}      Xml element name.
     */
    GetConversationItemsRequest.prototype.GetResponseMessageXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetConversationItemsResponseMessage;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      Xml element name.
     */
    GetConversationItemsRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetConversationItemsResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      Xml element name.
     */
    GetConversationItemsRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetConversationItems;
    };
    /**
     * @internal Validate the request.
     */
    GetConversationItemsRequest.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        // SearchScope is only valid for Exchange2013 or higher
        //
        if (this.MailboxScope &&
            this.Service.RequestedServerVersion < ExchangeVersion_1.ExchangeVersion.Exchange2013) {
            throw new ServiceVersionException_1.ServiceVersionException(ExtensionMethods_1.StringHelper.Format(Strings_1.Strings.ParameterIncompatibleWithRequestVersion, "MailboxScope", ExchangeVersion_1.ExchangeVersion[ExchangeVersion_1.ExchangeVersion.Exchange2013]));
        }
    };
    /**
     * @internal Writes XML attributes.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    GetConversationItemsRequest.prototype.WriteAttributesToXml = function (writer) {
        _super.prototype.WriteAttributesToXml.call(this, writer);
    };
    /**
     * @internal Writes XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    GetConversationItemsRequest.prototype.WriteElementsToXml = function (writer) {
        this.ItemProperties.WriteToXml(writer, ServiceObjectType_1.ServiceObjectType.Item);
        //this.FoldersToIgnore.WriteToXml(writer, XmlNamespace.Messages, XmlElementNames.FoldersToIgnore);
        this.FoldersToIgnore.WriteToXml(writer, XmlElementNames_1.XmlElementNames.FoldersToIgnore, XmlNamespace_1.XmlNamespace.Messages); //info: temp workaround github #52 
        if (this.MaxItemsToReturn) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.MaxItemsToReturn, this.MaxItemsToReturn);
        }
        if (this.SortOrder) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.SortOrder, ConversationSortOrder_1.ConversationSortOrder[this.SortOrder]);
        }
        if (this.MailboxScope) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.MailboxScope, MailboxSearchLocation_1.MailboxSearchLocation[this.MailboxScope]);
        }
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, XmlElementNames_1.XmlElementNames.Conversations);
        this.Conversations.forEach(function (conversation) { return conversation.WriteToXml(writer, XmlElementNames_1.XmlElementNames.Conversation); });
        writer.WriteEndElement();
    };
    return GetConversationItemsRequest;
}(MultiResponseServiceRequest_1.MultiResponseServiceRequest));
exports.GetConversationItemsRequest = GetConversationItemsRequest;
