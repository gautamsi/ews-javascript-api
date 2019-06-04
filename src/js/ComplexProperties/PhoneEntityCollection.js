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
var PhoneEntity_1 = require("./PhoneEntity");
var ComplexPropertyCollection_1 = require("./ComplexPropertyCollection");
/**
 * Represents a collection of PhoneEntity objects.
 */
var PhoneEntityCollection = /** @class */ (function (_super) {
    __extends(PhoneEntityCollection, _super);
    function PhoneEntityCollection(collection) {
        if (collection === void 0) { collection = null; }
        var _this = _super.call(this) || this;
        if (collection != null) {
            collection.forEach(function (suggestion) { _this.InternalAdd(suggestion); });
        }
        return _this;
    }
    /**
     * @internal Creates the complex property.
     *
     * @param   {string}        xmlElementName   Name of the XML element.
     * @return  {PhoneEntity}   PhoneEntity.
     */
    PhoneEntityCollection.prototype.CreateComplexProperty = function (xmlElementName) { return new PhoneEntity_1.PhoneEntity(); };
    /**
     * @internal Creates the default complex property.
     *
     * @return  {PhoneEntity}      PhoneEntity.
     */
    PhoneEntityCollection.prototype.CreateDefaultComplexProperty = function () { return new PhoneEntity_1.PhoneEntity(); };
    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {PhoneEntity}   complexProperty   The complex property.
     * @return  {string}        XML element name.
     */
    PhoneEntityCollection.prototype.GetCollectionItemXmlElementName = function (complexProperty) { return XmlElementNames_1.XmlElementNames.NlgPhone; };
    return PhoneEntityCollection;
}(ComplexPropertyCollection_1.ComplexPropertyCollection));
exports.PhoneEntityCollection = PhoneEntityCollection;
