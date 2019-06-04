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
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ExtensionMethods_1 = require("../ExtensionMethods");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var ServiceObjectPropertyDefinition_1 = require("./ServiceObjectPropertyDefinition");
/**
 * @internal Represents the definition of the GroupMember property.
 */
var GroupMemberPropertyDefinition = /** @class */ (function (_super) {
    __extends(GroupMemberPropertyDefinition, _super);
    function GroupMemberPropertyDefinition(key) {
        var _this = _super.call(this, GroupMemberPropertyDefinition.FieldUri) || this;
        /**
         * Member key. Maps to the Index attribute of IndexedFieldURI element.
         */
        _this.key = null;
        if (arguments.length === 1) {
            _this.key = key;
        }
        return _this;
    }
    Object.defineProperty(GroupMemberPropertyDefinition.prototype, "Key", {
        /**
         * Gets or sets the member's key.
         */
        get: function () {
            return this.key;
        },
        set: function (value) {
            this.key = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GroupMemberPropertyDefinition.prototype, "Type", {
        /**
         * Gets the property type.
         */
        get: function () {
            return "String";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Gets the property definition's printable name.
     *
     * @return  {string}      The property definition's printable name.
     */
    GroupMemberPropertyDefinition.prototype.GetPrintableName = function () { return ExtensionMethods_1.StringHelper.Format("{0}:{1}", GroupMemberPropertyDefinition.FieldUri, this.Key); };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GroupMemberPropertyDefinition.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.IndexedFieldURI; };
    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    GroupMemberPropertyDefinition.prototype.WriteAttributesToXml = function (writer) {
        _super.prototype.WriteAttributesToXml.call(this, writer);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.FieldIndex, this.Key);
    };
    /**
     * FieldUri of IndexedFieldURI for a group member.
     */
    GroupMemberPropertyDefinition.FieldUri = "distributionlist:Members:Member";
    return GroupMemberPropertyDefinition;
}(ServiceObjectPropertyDefinition_1.ServiceObjectPropertyDefinition));
exports.GroupMemberPropertyDefinition = GroupMemberPropertyDefinition;
