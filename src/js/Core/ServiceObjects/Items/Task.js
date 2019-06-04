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
var AffectedTaskOccurrence_1 = require("../../../Enumerations/AffectedTaskOccurrence");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var MessageDisposition_1 = require("../../../Enumerations/MessageDisposition");
var PropertySet_1 = require("../../PropertySet");
var Schemas_1 = require("../Schemas/Schemas");
var XmlElementNames_1 = require("../../XmlElementNames");
var Item_1 = require("./Item");
/**
 * Represents a Task item. Properties available on tasks are defined in the TaskSchema class.
 */
var Task = /** @class */ (function (_super) {
    __extends(Task, _super);
    function Task(serviceOrParentAttachment) {
        return _super.call(this, serviceOrParentAttachment) || this;
    }
    Object.defineProperty(Task, "Attachable", {
        /** required to check [Attachable] attribute, AttachmentCollection.AddItemAttachment<TItem>() checks for non inherited [Attachable] attribute. */
        get: function () { return this.name === "Task"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Task.prototype, "ActualWork", {
        /**
         * @nullable Gets or sets the actual amount of time that is spent on the task.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.TaskSchema.ActualWork);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.TaskSchema.ActualWork, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "AssignedTime", {
        /**
         * @nullable Gets the date and time the task was assigned.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.TaskSchema.AssignedTime);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "BillingInformation", {
        /**
         * Gets or sets the billing information of the task.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.TaskSchema.BillingInformation);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.TaskSchema.BillingInformation, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "ChangeCount", {
        /**
         * Gets the number of times the task has changed since it was created.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.TaskSchema.ChangeCount);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "Companies", {
        /**
         * Gets or sets a list of companies associated with the task.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.TaskSchema.Companies);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.TaskSchema.Companies, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "CompleteDate", {
        /**
         * @nullable Gets or sets the date and time on which the task was completed.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.TaskSchema.CompleteDate);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.TaskSchema.CompleteDate, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "Contacts", {
        /**
         * Gets or sets a list of contacts associated with the task.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.TaskSchema.Contacts);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.TaskSchema.Contacts, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "DelegationState", {
        /**
         * Gets the current delegation state of the task.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.TaskSchema.DelegationState);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "Delegator", {
        /**
         * Gets the name of the delegator of this task.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.TaskSchema.Delegator);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "DueDate", {
        /**
         * @nullable    Gets or sets the date and time on which the task is due.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.TaskSchema.DueDate);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.TaskSchema.DueDate, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "Mode", {
        /**
         * Gets a value indicating the mode of the task.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.TaskSchema.Mode);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "IsComplete", {
        /**
         * Gets a value indicating whether the task is complete.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.TaskSchema.IsComplete);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "IsRecurring", {
        /**
         * Gets a value indicating whether the task is recurring.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.TaskSchema.IsRecurring);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "IsTeamTask", {
        /**
         * Gets a value indicating whether the task is a team task.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.TaskSchema.IsTeamTask);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "Mileage", {
        /**
         * Gets or sets the mileage of the task.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.TaskSchema.Mileage);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.TaskSchema.Mileage, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "Owner", {
        /**
         * Gets the name of the owner of the task.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.TaskSchema.Owner);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "PercentComplete", {
        /**
         * Gets or sets the completeion percentage of the task. PercentComplete must be between 0 and 100.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.TaskSchema.PercentComplete);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.TaskSchema.PercentComplete, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "Recurrence", {
        /**
         * Gets or sets the recurrence pattern for this task. Available recurrence pattern classes include Recurrence.
         * DailyPattern, Recurrence.MonthlyPattern and Recurrence.YearlyPattern.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.TaskSchema.Recurrence);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.TaskSchema.Recurrence, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "StartDate", {
        /**
         * @nullable    Gets or sets the date and time on which the task starts.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.TaskSchema.StartDate);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.TaskSchema.StartDate, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "Status", {
        /**
         * Gets or sets the status of the task.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.TaskSchema.Status);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.TaskSchema.Status, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "StatusDescription", {
        /**
         * Gets a string representing the status of the task, localized according to the PreferredCulture property of the ExchangeService object the task is bound to.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.TaskSchema.StatusDescription);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "TotalWork", {
        /**
         * @nullable Gets or sets the total amount of work spent on the task.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.TaskSchema.TotalWork);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.TaskSchema.TotalWork, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Task.prototype, "DefaultAffectedTaskOccurrences", {
        /**
         * @internal    @nullable   Gets the default setting for how to treat affected task occurrences on Delete.
         */
        get: function () {
            return AffectedTaskOccurrence_1.AffectedTaskOccurrence.AllOccurrences;
        },
        enumerable: true,
        configurable: true
    });
    Task.Bind = function (service, id, propertySet) {
        if (propertySet === void 0) { propertySet = PropertySet_1.PropertySet.FirstClassProperties; }
        return service.BindToItem(id, propertySet, Task);
    };
    /**
     * Deletes the current occurrence of a recurring task. After the current occurrence isdeleted, the task represents the next occurrence.
     * Developers should call Load to retrieve the new property values of the task.
     * Calling this method results in a call to EWS.
     *
     * @param   {DeleteMode}   deleteMode   The deletion mode.
     * @return  {Promise<void>}            :Promise.
     */
    Task.prototype.DeleteCurrentOccurrence = function (deleteMode) {
        return this.InternalDelete(deleteMode, null, AffectedTaskOccurrence_1.AffectedTaskOccurrence.SpecifiedOccurrenceOnly);
    };
    /**
     * @internal Gets a value indicating whether a time zone SOAP header should be emitted in a CreateItem or UpdateItem request so this item can be property saved or updated.
     *
     * @param   {boolean}   isUpdateOperation   Indicates whether the operation being petrformed is an update operation.
     * @return  {boolean}   *true* if a time zone SOAP header should be emitted; otherwise, *false*.
     */
    Task.prototype.GetIsTimeZoneHeaderRequired = function (isUpdateOperation) {
        return true;
    };
    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    Task.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
    };
    /**
     * @internal Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    Task.prototype.GetSchema = function () {
        return Schemas_1.Schemas.TaskSchema.Instance;
    };
    /**
     * @internal Gets the element name of item in XML
     *
     * @return  {string} name of elelment
     */
    Task.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.Task;
    };
    Task.prototype.Update = function (conflictResolutionMode) {
        return this.InternalUpdate(null /* parentFolder */, conflictResolutionMode, MessageDisposition_1.MessageDisposition.SaveOnly, null);
    };
    return Task;
}(Item_1.Item));
exports.Task = Task;
