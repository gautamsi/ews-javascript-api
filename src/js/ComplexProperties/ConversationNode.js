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
var EwsServiceJsonReader_1 = require("../Core/EwsServiceJsonReader");
var ItemInfo_1 = require("../Core/ServiceObjects/Items/ItemInfo");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents the response to a GetConversationItems operation.
 *
 * @sealed
 */
var ConversationNode = /** @class */ (function (_super) {
    __extends(ConversationNode, _super);
    /**
     * @internal Initializes a new instance of the **ConversationNode** class.
     *
     * @param   {PropertySet}   propertySet   The property set.
     */
    function ConversationNode(propertySet) {
        var _this = _super.call(this) || this;
        _this.propertySet = null;
        /**
         * Gets or sets the Internet message id of the node.
         */
        _this.InternetMessageId = null;
        /**
         * Gets or sets the Internet message id of the parent node.
         */
        _this.ParentInternetMessageId = null;
        _this.propertySet = propertySet;
        return _this;
    }
    /**
     * Gets the item instance.
     *
     * @param   {ExchangeService}   service          The service.
     * @param   {string}            xmlElementName   Name of the XML element.
     * @return  {Item}              Item.
     */
    ConversationNode.prototype.GetObjectInstance = function (service, xmlElementName) {
        return (new ItemInfo_1.ItemInfo()).CreateEwsObjectFromXmlElementName(service, xmlElementName);
    };
    /**
     * @internal Obtains EWS XML element name for this object.
     *
     * @return  {string}      The XML element name.
     */
    ConversationNode.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.ConversationNode;
    };
    /**
     * @internal Loads from XMLjsObject.
     *
     * @param   {any}               jsObject   The json property.
     * @param   {ExchangeService}   service        [description]
     */
    ConversationNode.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        this.InternetMessageId = jsObject[XmlElementNames_1.XmlElementNames.InternetMessageId];
        if (jsObject[XmlElementNames_1.XmlElementNames.ParentInternetMessageId]) {
            this.ParentInternetMessageId = jsObject[XmlElementNames_1.XmlElementNames.ParentInternetMessageId];
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.Items]) {
            this.Items = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadServiceObjectsCollectionFromJson(jsObject, service, XmlElementNames_1.XmlElementNames.Items, this.GetObjectInstance.bind(this), false, /* clearPropertyBag */ this.propertySet, /* requestedPropertySet */ false); /* summaryPropertiesOnly */
        }
    };
    return ConversationNode;
}(ComplexProperty_1.ComplexProperty));
exports.ConversationNode = ConversationNode;
