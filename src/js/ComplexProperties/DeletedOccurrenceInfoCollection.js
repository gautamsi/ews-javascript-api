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
var DeletedOccurrenceInfo_1 = require("./DeletedOccurrenceInfo");
var ComplexPropertyCollection_1 = require("./ComplexPropertyCollection");
/**
 * Represents a collection of deleted occurrence objects.
 */
var DeletedOccurrenceInfoCollection = /** @class */ (function (_super) {
    __extends(DeletedOccurrenceInfoCollection, _super);
    /**
     * @internal Initializes a new instance of the **OccurrenceInfoCollection** class.
     */
    function DeletedOccurrenceInfoCollection() {
        return _super.call(this) || this;
    }
    /**
     * @internal Creates the complex property.
     *
     * @param   {string}   xmlElementName   Name of the XML element.
     * @return  {DeletedOccurrenceInfo}     OccurenceInfo instance.
     */
    DeletedOccurrenceInfoCollection.prototype.CreateComplexProperty = function (xmlElementName) {
        if (xmlElementName == XmlElementNames_1.XmlElementNames.DeletedOccurrence) {
            return new DeletedOccurrenceInfo_1.DeletedOccurrenceInfo();
        }
        else {
            return null;
        }
    };
    /**
     * @internal Creates the default complex property.
     *
     * @return  {DeletedOccurrenceInfo}     Default OccurenceInfo instance.
     */
    DeletedOccurrenceInfoCollection.prototype.CreateDefaultComplexProperty = function () { return new DeletedOccurrenceInfo_1.DeletedOccurrenceInfo(); };
    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {DeletedOccurrenceInfo}   complexProperty   The complex property.
     * @return  {string}        XML element name.
     */
    DeletedOccurrenceInfoCollection.prototype.GetCollectionItemXmlElementName = function (complexProperty) { return XmlElementNames_1.XmlElementNames.Occurrence; };
    return DeletedOccurrenceInfoCollection;
}(ComplexPropertyCollection_1.ComplexPropertyCollection));
exports.DeletedOccurrenceInfoCollection = DeletedOccurrenceInfoCollection;
