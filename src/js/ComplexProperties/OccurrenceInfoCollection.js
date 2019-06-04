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
var OccurrenceInfo_1 = require("./OccurrenceInfo");
var ComplexPropertyCollection_1 = require("./ComplexPropertyCollection");
/**
 * Represents a collection of OccurrenceInfo objects.
 */
var OccurrenceInfoCollection = /** @class */ (function (_super) {
    __extends(OccurrenceInfoCollection, _super);
    /**
     * @internal Initializes a new instance of the **OccurrenceInfoCollection** class.
     */
    function OccurrenceInfoCollection() {
        return _super.call(this) || this;
    }
    /**
     * @internal Creates the complex property.
     *
     * @param   {string}   xmlElementName   Name of the XML element.
     * @return  {OccurrenceInfo}        OccurenceInfo instance.
     */
    OccurrenceInfoCollection.prototype.CreateComplexProperty = function (xmlElementName) {
        if (xmlElementName == XmlElementNames_1.XmlElementNames.Occurrence) {
            return new OccurrenceInfo_1.OccurrenceInfo();
        }
        else {
            return null;
        }
    };
    /**
     * @internal Creates the default complex property.
     *
     * @return  {OccurrenceInfo}      OccurenceInfo instance.
     */
    OccurrenceInfoCollection.prototype.CreateDefaultComplexProperty = function () { return new OccurrenceInfo_1.OccurrenceInfo(); };
    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {OccurrenceInfo}    complexProperty   The complex property.
     * @return  {string}            XML element name.
     */
    OccurrenceInfoCollection.prototype.GetCollectionItemXmlElementName = function (complexProperty) { return XmlElementNames_1.XmlElementNames.Occurrence; };
    return OccurrenceInfoCollection;
}(ComplexPropertyCollection_1.ComplexPropertyCollection));
exports.OccurrenceInfoCollection = OccurrenceInfoCollection;
