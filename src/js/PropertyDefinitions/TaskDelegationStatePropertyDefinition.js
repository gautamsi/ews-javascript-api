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
var EwsLogging_1 = require("../Core/EwsLogging");
var ExtensionMethods_1 = require("../ExtensionMethods");
var TaskDelegationState_1 = require("../Enumerations/TaskDelegationState");
var GenericPropertyDefinition_1 = require("./GenericPropertyDefinition");
/**
 * @internal Represents a task delegation property definition.
 */
var TaskDelegationStatePropertyDefinition = /** @class */ (function (_super) {
    __extends(TaskDelegationStatePropertyDefinition, _super);
    /**
     * @internal Initializes a new instance of the **TaskDelegationStatePropertyDefinition** class.
     *
     * @param   {string}                    propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                    xmlElementName   Name of the XML element.
     * @param   {string}                    uri              The URI.
     * @param   {PropertyDefinitionFlags}   flags            The flags.
     * @param   {ExchangeVersion}           version          The version.
     */
    function TaskDelegationStatePropertyDefinition(propertyName, xmlElementName, uri, flags, version) {
        return _super.call(this, propertyName, xmlElementName, uri, flags, version, false) || this;
    }
    /**
     * @internal Parses the specified value (added to workaround Generic based value conversion in c#).
     *
     * @param   {string}    value   The value.
     * @return  {any}       Value of string.
     */
    TaskDelegationStatePropertyDefinition.prototype.Parse = function (value) {
        switch (value) {
            case TaskDelegationStatePropertyDefinition.NoMatch:
                return TaskDelegationState_1.TaskDelegationState.NoDelegation;
            case TaskDelegationStatePropertyDefinition.OwnNew:
                return TaskDelegationState_1.TaskDelegationState.Unknown;
            case TaskDelegationStatePropertyDefinition.Owned:
                return TaskDelegationState_1.TaskDelegationState.Accepted;
            case TaskDelegationStatePropertyDefinition.Accepted:
                return TaskDelegationState_1.TaskDelegationState.Declined;
            default:
                EwsLogging_1.EwsLogging.Assert(false, "TaskDelegationStatePropertyDefinition.Parse", ExtensionMethods_1.StringHelper.Format("TaskDelegationStatePropertyDefinition.Parse(): value {0} cannot be handled.", value));
                return null; // To keep the compiler happy
        }
    };
    /**
     * Convert instance to string.
     *
     * @param   {any}       value   The value.
     * @return  {string}    TaskDelegationState value.
     */
    TaskDelegationStatePropertyDefinition.prototype.ToString = function (value) {
        var taskDelegationState = value;
        switch (taskDelegationState) {
            case TaskDelegationState_1.TaskDelegationState.NoDelegation:
                return TaskDelegationStatePropertyDefinition.NoMatch;
            case TaskDelegationState_1.TaskDelegationState.Unknown:
                return TaskDelegationStatePropertyDefinition.OwnNew;
            case TaskDelegationState_1.TaskDelegationState.Accepted:
                return TaskDelegationStatePropertyDefinition.Owned;
            case TaskDelegationState_1.TaskDelegationState.Declined:
                return TaskDelegationStatePropertyDefinition.Accepted;
            default:
                EwsLogging_1.EwsLogging.Assert(false, "TaskDelegationStatePropertyDefinition.ToString", "Invalid TaskDelegationState value.");
                return null; // To keep the compiler happy
        }
    };
    TaskDelegationStatePropertyDefinition.NoMatch = "NoMatch";
    TaskDelegationStatePropertyDefinition.OwnNew = "OwnNew";
    TaskDelegationStatePropertyDefinition.Owned = "Owned";
    TaskDelegationStatePropertyDefinition.Accepted = "Accepted";
    return TaskDelegationStatePropertyDefinition;
}(GenericPropertyDefinition_1.GenericPropertyDefinition));
exports.TaskDelegationStatePropertyDefinition = TaskDelegationStatePropertyDefinition;
