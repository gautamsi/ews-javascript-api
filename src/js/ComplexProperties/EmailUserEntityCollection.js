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
var EmailUserEntity_1 = require("./EmailUserEntity");
var ComplexPropertyCollection_1 = require("./ComplexPropertyCollection");
/**
 * Represents a collection of EmailUserEntity objects.
 */
var EmailUserEntityCollection = /** @class */ (function (_super) {
    __extends(EmailUserEntityCollection, _super);
    function EmailUserEntityCollection(collection) {
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
     * @param   {string}              xmlElementName   Name of the XML element.
     * @return  {EmailUserEntity}     EmailUserEntity.
     */
    EmailUserEntityCollection.prototype.CreateComplexProperty = function (xmlElementName) { return new EmailUserEntity_1.EmailUserEntity(); };
    /**
     * @internal Creates the default complex property.
     *
     * @return  {EmailUserEntity}      EmailUserEntity.
     */
    EmailUserEntityCollection.prototype.CreateDefaultComplexProperty = function () { return new EmailUserEntity_1.EmailUserEntity(); };
    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {EmailUserEntity}       complexProperty   The complex property.
     * @return  {string}                XML element name.
     */
    EmailUserEntityCollection.prototype.GetCollectionItemXmlElementName = function (complexProperty) { return XmlElementNames_1.XmlElementNames.NlgEmailUser; };
    return EmailUserEntityCollection;
}(ComplexPropertyCollection_1.ComplexPropertyCollection));
exports.EmailUserEntityCollection = EmailUserEntityCollection;
