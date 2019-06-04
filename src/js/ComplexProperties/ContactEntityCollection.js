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
var ContactEntity_1 = require("./ContactEntity");
var ComplexPropertyCollection_1 = require("./ComplexPropertyCollection");
/**
 * Represents a collection of ContactEntity objects.
 */
var ContactEntityCollection = /** @class */ (function (_super) {
    __extends(ContactEntityCollection, _super);
    function ContactEntityCollection(collection) {
        if (collection === void 0) { collection = null; }
        var _this = _super.call(this) || this;
        if (collection != null) {
            collection.forEach(function (entity) { _this.InternalAdd(entity); });
        }
        return _this;
    }
    /**
     * @internal Creates the complex property.
     *
     * @param   {string}                xmlElementName   Name of the XML element.
     * @return  {ContactEntity}     ContactEntity.
     */
    ContactEntityCollection.prototype.CreateComplexProperty = function (xmlElementName) { return new ContactEntity_1.ContactEntity(); };
    /**
     * @internal Creates the default complex property.
     *
     * @return  {ContactEntity}      ContactEntity.
     */
    ContactEntityCollection.prototype.CreateDefaultComplexProperty = function () { return new ContactEntity_1.ContactEntity(); };
    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {ContactEntity}     complexProperty   The complex property.
     * @return  {string}                XML element name.
     */
    ContactEntityCollection.prototype.GetCollectionItemXmlElementName = function (complexProperty) { return XmlElementNames_1.XmlElementNames.NlgContact; };
    return ContactEntityCollection;
}(ComplexPropertyCollection_1.ComplexPropertyCollection));
exports.ContactEntityCollection = ContactEntityCollection;
