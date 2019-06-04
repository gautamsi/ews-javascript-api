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
var TaskSuggestion_1 = require("./TaskSuggestion");
var ComplexPropertyCollection_1 = require("./ComplexPropertyCollection");
/**
 * Represents a collection of TaskSuggestion objects.
 */
var TaskSuggestionCollection = /** @class */ (function (_super) {
    __extends(TaskSuggestionCollection, _super);
    function TaskSuggestionCollection(collection) {
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
     * @param   {string}            xmlElementName   Name of the XML element.
     * @return  {TaskSuggestion}    TaskSuggestion.
     */
    TaskSuggestionCollection.prototype.CreateComplexProperty = function (xmlElementName) { return new TaskSuggestion_1.TaskSuggestion(); };
    /**
     * @internal Creates the default complex property.
     *
     * @return  {TaskSuggestion}      TaskSuggestion.
     */
    TaskSuggestionCollection.prototype.CreateDefaultComplexProperty = function () { return new TaskSuggestion_1.TaskSuggestion(); };
    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {TaskSuggestion}    complexProperty   The complex property.
     * @return  {string}            XML element name.
     */
    TaskSuggestionCollection.prototype.GetCollectionItemXmlElementName = function (complexProperty) { return XmlElementNames_1.XmlElementNames.NlgTaskSuggestion; };
    return TaskSuggestionCollection;
}(ComplexPropertyCollection_1.ComplexPropertyCollection));
exports.TaskSuggestionCollection = TaskSuggestionCollection;
