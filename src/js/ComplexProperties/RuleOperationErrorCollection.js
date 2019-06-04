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
var RuleOperationError_1 = require("./RuleOperationError");
var ComplexPropertyCollection_1 = require("./ComplexPropertyCollection");
/**
 * Represents a collection of rule operation errors.
 *
 * @sealed
 */
var RuleOperationErrorCollection = /** @class */ (function (_super) {
    __extends(RuleOperationErrorCollection, _super);
    /**
     * @internal Initializes a new instance of the **RuleOperationErrorCollection** class.
     */
    function RuleOperationErrorCollection() {
        return _super.call(this) || this;
    }
    /**
     * @internal Creates an RuleOperationError object from an XML element name.
     *
     * @param   {string}   xmlElementName   The XML element name from which to create the RuleOperationError object.
     * @return  {RuleOperationError}        A RuleOperationError object.
     */
    RuleOperationErrorCollection.prototype.CreateComplexProperty = function (xmlElementName) {
        if (xmlElementName == XmlElementNames_1.XmlElementNames.RuleOperationError) {
            return new RuleOperationError_1.RuleOperationError();
        }
        else {
            return null;
        }
    };
    /**
     * @internal Creates the default complex property.
     *
     * @return  {RuleOperationError}      A RuleOperationError object.
     */
    RuleOperationErrorCollection.prototype.CreateDefaultComplexProperty = function () {
        return new RuleOperationError_1.RuleOperationError();
    };
    /**
     * @internal Retrieves the XML element name corresponding to the provided RuleOperationError object.
     *
     * @param   {RuleOperationError}    operationError   The RuleOperationError object from which to determine the XML element name.
     * @return  {string}                The XML element name corresponding to the provided RuleOperationError object.
     */
    RuleOperationErrorCollection.prototype.GetCollectionItemXmlElementName = function (operationError) {
        return XmlElementNames_1.XmlElementNames.RuleOperationError;
    };
    return RuleOperationErrorCollection;
}(ComplexPropertyCollection_1.ComplexPropertyCollection));
exports.RuleOperationErrorCollection = RuleOperationErrorCollection;
