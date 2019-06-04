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
var EmailUserEntityCollection_1 = require("./EmailUserEntityCollection");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ExtractedEntity_1 = require("./ExtractedEntity");
/**
 * Represents an TaskSuggestion object.
 */
var TaskSuggestion = /** @class */ (function (_super) {
    __extends(TaskSuggestion, _super);
    /**
     * @internal Initializes a new instance of the **TaskSuggestion** class.
     */
    function TaskSuggestion() {
        return _super.call(this) || this;
    }
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    TaskSuggestion.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        _super.prototype.LoadFromXmlJsObject.call(this, jsObject, service);
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.NlgTaskString:
                    this.TaskString = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.NlgAssignees:
                    this.Assignees = new EmailUserEntityCollection_1.EmailUserEntityCollection();
                    this.Assignees.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                default:
                    break;
            }
        }
    };
    return TaskSuggestion;
}(ExtractedEntity_1.ExtractedEntity));
exports.TaskSuggestion = TaskSuggestion;
