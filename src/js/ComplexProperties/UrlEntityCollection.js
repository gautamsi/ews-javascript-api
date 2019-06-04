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
var UrlEntity_1 = require("./UrlEntity");
var ComplexPropertyCollection_1 = require("./ComplexPropertyCollection");
/**
 * Represents a collection of UrlEntity objects.
 */
var UrlEntityCollection = /** @class */ (function (_super) {
    __extends(UrlEntityCollection, _super);
    function UrlEntityCollection(collection) {
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
     * @param   {string}        xmlElementName   Name of the XML element.
     * @return  {UrlEntity}     UrlEntity.
     */
    UrlEntityCollection.prototype.CreateComplexProperty = function (xmlElementName) { return new UrlEntity_1.UrlEntity(); };
    /**
     * @internal Creates the default complex property.
     *
     * @return  {UrlEntity}      UrlEntity.
     */
    UrlEntityCollection.prototype.CreateDefaultComplexProperty = function () { return new UrlEntity_1.UrlEntity(); };
    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {UrlEntity}     complexProperty   The complex property.
     * @return  {string}        XML element name.
     */
    UrlEntityCollection.prototype.GetCollectionItemXmlElementName = function (complexProperty) { return XmlElementNames_1.XmlElementNames.NlgUrl; };
    return UrlEntityCollection;
}(ComplexPropertyCollection_1.ComplexPropertyCollection));
exports.UrlEntityCollection = UrlEntityCollection;
