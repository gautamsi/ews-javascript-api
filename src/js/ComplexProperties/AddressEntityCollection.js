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
var AddressEntity_1 = require("./AddressEntity");
var ComplexPropertyCollection_1 = require("./ComplexPropertyCollection");
/**
 * Represents a collection of AddressEntity objects.
 */
var AddressEntityCollection = /** @class */ (function (_super) {
    __extends(AddressEntityCollection, _super);
    function AddressEntityCollection(collection) {
        if (collection === void 0) { collection = null; }
        var _this = _super.call(this) || this;
        if (collection != null) {
            collection.forEach(function (address) { _this.InternalAdd(address); });
        }
        return _this;
    }
    /**
     * @internal Creates the complex property.
     *
     * @param   {string}            xmlElementName   Name of the XML element.
     * @return  {AddressEntity}     AddressEntity.
     */
    AddressEntityCollection.prototype.CreateComplexProperty = function (xmlElementName) { return new AddressEntity_1.AddressEntity(); };
    /**
     * @internal Creates the default complex property.
     *
     * @return  {AddressEntity}      AddressEntity.
     */
    AddressEntityCollection.prototype.CreateDefaultComplexProperty = function () { return new AddressEntity_1.AddressEntity(); };
    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {AddressEntity}     complexProperty   The complex property.
     * @return  {string}            XML element name.
     */
    AddressEntityCollection.prototype.GetCollectionItemXmlElementName = function (complexProperty) { return XmlElementNames_1.XmlElementNames.NlgAddress; };
    return AddressEntityCollection;
}(ComplexPropertyCollection_1.ComplexPropertyCollection));
exports.AddressEntityCollection = AddressEntityCollection;
