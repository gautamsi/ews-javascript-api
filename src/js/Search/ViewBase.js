"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PropertySet_1 = require("../Core/PropertySet");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
/**
 * Represents the base view class for search operations.
 */
var ViewBase = /** @class */ (function () {
    /**
     * @internal Initializes a new instance of the **ViewBase** class.
     */
    function ViewBase() {
        this.propertySet = null;
    }
    Object.defineProperty(ViewBase.prototype, "PropertySet", {
        /**
         * Gets or sets the property set. PropertySet determines which properties will be loaded on found items. If PropertySet is null, all first class properties are loaded on found items.
         */
        get: function () {
            return this.propertySet;
        },
        set: function (value) {
            this.propertySet = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Gets the property set or the default.
     *
     * @return  {PropertySet}      PropertySet
     */
    ViewBase.prototype.GetPropertySetOrDefault = function () { return this.PropertySet || PropertySet_1.PropertySet.FirstClassProperties; };
    /**
     * @internal Gets the type of service object this view applies to.
     *
     * @return  {ServiceObjectType}      A ServiceObjectType value.
     */
    ViewBase.prototype.GetServiceObjectType = function () { throw new Error("abstract - ViewBase.ts - GetServiceObjectType : Not implemented."); };
    /**
     * @internal Validates this view.
     *
     * @param   {ServiceRequestBase}   request   The request using this view.
     */
    ViewBase.prototype.InternalValidate = function (request) {
        if (this.PropertySet !== null && typeof this.PropertySet !== 'undefined') {
            this.PropertySet.InternalValidate();
            this.PropertySet.ValidateForRequest(request, true /*summaryPropertiesOnly*/);
        }
    };
    /**
     * @internal Writes this view to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    ViewBase.prototype.InternalWriteViewToXml = function (writer) {
        var maxEntriesReturned = this.GetMaxEntriesReturned();
        if (!isNaN(maxEntriesReturned)) {
            writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.MaxEntriesReturned, maxEntriesReturned);
        }
    };
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer    The writer.
     * @param   {Grouping}              groupBy   The group by clause.
     */
    ViewBase.prototype.WriteToXml = function (writer, groupBy) {
        this.GetPropertySetOrDefault().WriteToXml(writer, this.GetServiceObjectType());
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Messages, this.GetViewXmlElementName());
        this.InternalWriteViewToXml(writer);
        writer.WriteEndElement(); // this.GetViewXmlElementName()
        this.InternalWriteSearchSettingsToXml(writer, groupBy);
    };
    return ViewBase;
}());
exports.ViewBase = ViewBase;
