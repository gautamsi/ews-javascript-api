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
var ComplexProperty_1 = require("./ComplexProperty");
var SearchFolderParameters = /** @class */ (function (_super) {
    __extends(SearchFolderParameters, _super);
    function SearchFolderParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchFolderParameters.prototype.InternalToJson = function (service) { throw new Error("SearchFolderParameters.ts - InternalToJson : Not implemented."); };
    SearchFolderParameters.prototype.LoadFromJson = function (jsonProperty, service) { throw new Error("SearchFolderParameters.ts - LoadFromJson : Not implemented."); };
    SearchFolderParameters.prototype.PropertyChanged = function (complexProperty) { throw new Error("SearchFolderParameters.ts - PropertyChanged : Not implemented."); };
    /**@internal */
    SearchFolderParameters.prototype.ReadAttributesFromXmlJsObject = function (reader) { throw new Error("SearchFolderParameters.ts - ReadAttributesFromXml : Not implemented."); };
    /**@internal */
    SearchFolderParameters.prototype.ReadElementsFromXmlJsObject = function (reader) { throw new Error("SearchFolderParameters.ts - TryReadElementFromXmlJsObject : Not implemented."); };
    SearchFolderParameters.prototype.Validate = function () { throw new Error("SearchFolderParameters.ts - Validate : Not implemented."); };
    /**@internal */
    SearchFolderParameters.prototype.WriteAttributesToXml = function (writer) { throw new Error("SearchFolderParameters.ts - WriteAttributesToXml : Not implemented."); };
    /**@internal */
    SearchFolderParameters.prototype.WriteElementsToXml = function (writer) { throw new Error("SearchFolderParameters.ts - WriteElementsToXml : Not implemented."); };
    return SearchFolderParameters;
}(ComplexProperty_1.ComplexProperty));
exports.SearchFolderParameters = SearchFolderParameters;
//}
