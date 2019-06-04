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
var ExtensionMethods_1 = require("../ExtensionMethods");
var ConversationNode_1 = require("./ConversationNode");
var ComplexPropertyCollection_1 = require("./ComplexPropertyCollection");
/**
 * Represents a collection of conversation items.
 *
 * @sealed
 */
var ConversationNodeCollection = /** @class */ (function (_super) {
    __extends(ConversationNodeCollection, _super);
    /**
     * @internal Initializes a new instance of the **ConversationNodeCollection** class.
     *
     * @param   {PropertySet}   propertySet   The property set.
     */
    function ConversationNodeCollection(propertySet) {
        var _this = _super.call(this) || this;
        _this.propertySet = null;
        _this.propertySet = propertySet;
        return _this;
    }
    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {string}   complexProperty   The complex property.
     * @return  {ConversationNode}           XML element name.
     */
    ConversationNodeCollection.prototype.CreateComplexProperty = function (xmlElementName) {
        return new ConversationNode_1.ConversationNode(this.propertySet);
    };
    /**
     * @internal Creates the default complex property.
     *
     * @return  {ConversationNode}      ConversationItem.
     */
    ConversationNodeCollection.prototype.CreateDefaultComplexProperty = function () {
        return new ConversationNode_1.ConversationNode(this.propertySet);
    };
    /**
     * @internal Loads from XMLjsObject.
     *
     * @interface   IJsonCollectionDeserializer
     *
     * @param   {any}               jsObjectCollection   The json collection.
     * @param   {ExchangeService}   service          The service.
     */
    ConversationNodeCollection.prototype.LoadFromXmlJsObject = function (jsObjectCollection, service) {
        var jsCollection = jsObjectCollection;
        if (!ExtensionMethods_1.ArrayHelper.isArray(jsCollection)) {
            jsCollection = [jsObjectCollection];
        }
        for (var _i = 0, jsCollection_1 = jsCollection; _i < jsCollection_1.length; _i++) {
            var jsObject = jsCollection_1[_i];
            var jsEntry = jsObject;
            if (jsEntry != null) {
                var node = new ConversationNode_1.ConversationNode(this.propertySet);
                node.LoadFromXmlJsObject(jsEntry, service);
                this.InternalAdd(node);
            }
        }
    };
    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {ConversationNode}  complexProperty   The complex property.
     * @return  {string}            XML element name.
     */
    ConversationNodeCollection.prototype.GetCollectionItemXmlElementName = function (complexProperty) {
        return complexProperty.GetXmlElementName();
    };
    return ConversationNodeCollection;
}(ComplexPropertyCollection_1.ComplexPropertyCollection));
exports.ConversationNodeCollection = ConversationNodeCollection;
