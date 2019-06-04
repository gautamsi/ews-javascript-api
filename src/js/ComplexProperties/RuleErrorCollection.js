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
var RuleError_1 = require("./RuleError");
var ComplexPropertyCollection_1 = require("./ComplexPropertyCollection");
/**
 * @internal Represents a collection of rule validation errors.
 *
 * @sealed
 */
var RuleErrorCollection = /** @class */ (function (_super) {
    __extends(RuleErrorCollection, _super);
    /**
     * @internal Initializes a new instance of the **RuleErrorCollection** class.
     */
    function RuleErrorCollection() {
        return _super.call(this) || this;
    }
    /**
     * @internal Creates an RuleError object from an XML element name.
     *
     * @param   {string}   xmlElementName   The XML element name from which to create the RuleError object.
     * @return  {RuleError}        A RuleError object.
     */
    RuleErrorCollection.prototype.CreateComplexProperty = function (xmlElementName) {
        if (xmlElementName == XmlElementNames_1.XmlElementNames.Error) {
            return new RuleError_1.RuleError();
        }
        else {
            return null;
        }
    };
    /**
     * @internal Creates the default complex property.
     *
     * @return  {RuleError}      A RuleError object.
     */
    RuleErrorCollection.prototype.CreateDefaultComplexProperty = function () {
        return new RuleError_1.RuleError();
    };
    /**
     * @internal Retrieves the XML element name corresponding to the provided RuleError object.
     *
     * @param   {RuleError}		ruleValidationError   The RuleError object from which to determine the XML element name.
     * @return  {string}		The XML element name corresponding to the provided RuleError object.
     */
    RuleErrorCollection.prototype.GetCollectionItemXmlElementName = function (ruleValidationError) {
        return XmlElementNames_1.XmlElementNames.Error;
    };
    return RuleErrorCollection;
}(ComplexPropertyCollection_1.ComplexPropertyCollection));
exports.RuleErrorCollection = RuleErrorCollection;
