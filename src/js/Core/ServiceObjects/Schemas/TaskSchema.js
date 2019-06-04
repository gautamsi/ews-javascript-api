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
var BoolPropertyDefinition_1 = require("../../../PropertyDefinitions/BoolPropertyDefinition");
var ComplexPropertyDefinition_1 = require("../../../PropertyDefinitions/ComplexPropertyDefinition");
var DateTimePropertyDefinition_1 = require("../../../PropertyDefinitions/DateTimePropertyDefinition");
var DoublePropertyDefinition_1 = require("../../../PropertyDefinitions/DoublePropertyDefinition");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var GenericPropertyDefinition_1 = require("../../../PropertyDefinitions/GenericPropertyDefinition");
var IntPropertyDefinition_1 = require("../../../PropertyDefinitions/IntPropertyDefinition");
var PropertyDefinitionFlags_1 = require("../../../Enumerations/PropertyDefinitionFlags");
var RecurrencePropertyDefinition_1 = require("../../../PropertyDefinitions/RecurrencePropertyDefinition");
var StringList_1 = require("../../../ComplexProperties/StringList");
var StringPropertyDefinition_1 = require("../../../PropertyDefinitions/StringPropertyDefinition");
var TaskDelegationStatePropertyDefinition_1 = require("../../../PropertyDefinitions/TaskDelegationStatePropertyDefinition");
var TaskMode_1 = require("../../../Enumerations/TaskMode");
var TaskStatus_1 = require("../../../Enumerations/TaskStatus");
var XmlElementNames_1 = require("../../XmlElementNames");
var ItemSchema_1 = require("./ItemSchema");
/**
 * Field URIs for tasks.
 */
var FieldUris;
(function (FieldUris) {
    FieldUris.ActualWork = "task:ActualWork";
    FieldUris.AssignedTime = "task:AssignedTime";
    FieldUris.BillingInformation = "task:BillingInformation";
    FieldUris.ChangeCount = "task:ChangeCount";
    FieldUris.Companies = "task:Companies";
    FieldUris.CompleteDate = "task:CompleteDate";
    FieldUris.Contacts = "task:Contacts";
    FieldUris.DelegationState = "task:DelegationState";
    FieldUris.Delegator = "task:Delegator";
    FieldUris.DueDate = "task:DueDate";
    FieldUris.IsAssignmentEditable = "task:IsAssignmentEditable";
    FieldUris.IsComplete = "task:IsComplete";
    FieldUris.IsRecurring = "task:IsRecurring";
    FieldUris.IsTeamTask = "task:IsTeamTask";
    FieldUris.Mileage = "task:Mileage";
    FieldUris.Owner = "task:Owner";
    FieldUris.PercentComplete = "task:PercentComplete";
    FieldUris.Recurrence = "task:Recurrence";
    FieldUris.StartDate = "task:StartDate";
    FieldUris.Status = "task:Status";
    FieldUris.StatusDescription = "task:StatusDescription";
    FieldUris.TotalWork = "task:TotalWork";
})(FieldUris || (FieldUris = {}));
/**
 * Represents the schema for task items.
 */
var TaskSchema = /** @class */ (function (_super) {
    __extends(TaskSchema, _super);
    function TaskSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Registers properties.
     *
     * /remarks/    IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    TaskSchema.prototype.RegisterProperties = function () {
        _super.prototype.RegisterProperties.call(this);
        this.RegisterProperty(TaskSchema, TaskSchema.ActualWork);
        this.RegisterProperty(TaskSchema, TaskSchema.AssignedTime);
        this.RegisterProperty(TaskSchema, TaskSchema.BillingInformation);
        this.RegisterProperty(TaskSchema, TaskSchema.ChangeCount);
        this.RegisterProperty(TaskSchema, TaskSchema.Companies);
        this.RegisterProperty(TaskSchema, TaskSchema.CompleteDate);
        this.RegisterProperty(TaskSchema, TaskSchema.Contacts);
        this.RegisterProperty(TaskSchema, TaskSchema.DelegationState);
        this.RegisterProperty(TaskSchema, TaskSchema.Delegator);
        this.RegisterProperty(TaskSchema, TaskSchema.DueDate);
        this.RegisterProperty(TaskSchema, TaskSchema.Mode);
        this.RegisterProperty(TaskSchema, TaskSchema.IsComplete);
        this.RegisterProperty(TaskSchema, TaskSchema.IsRecurring);
        this.RegisterProperty(TaskSchema, TaskSchema.IsTeamTask);
        this.RegisterProperty(TaskSchema, TaskSchema.Mileage);
        this.RegisterProperty(TaskSchema, TaskSchema.Owner);
        this.RegisterProperty(TaskSchema, TaskSchema.PercentComplete);
        this.RegisterProperty(TaskSchema, TaskSchema.Recurrence);
        this.RegisterProperty(TaskSchema, TaskSchema.StartDate);
        this.RegisterProperty(TaskSchema, TaskSchema.Status);
        this.RegisterProperty(TaskSchema, TaskSchema.StatusDescription);
        this.RegisterProperty(TaskSchema, TaskSchema.TotalWork);
    };
    /**
     * Defines the **ActualWork** property.
     */
    TaskSchema.ActualWork = new IntPropertyDefinition_1.IntPropertyDefinition("ActualWork", XmlElementNames_1.XmlElementNames.ActualWork, FieldUris.ActualWork, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, true);
    /**
     * Defines the **AssignedTime** property.
     */
    TaskSchema.AssignedTime = new DateTimePropertyDefinition_1.DateTimePropertyDefinition("AssignedTime", XmlElementNames_1.XmlElementNames.AssignedTime, FieldUris.AssignedTime, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, true);
    /**
     * Defines the **BillingInformation** property.
     */
    TaskSchema.BillingInformation = new StringPropertyDefinition_1.StringPropertyDefinition("BillingInformation", XmlElementNames_1.XmlElementNames.BillingInformation, FieldUris.BillingInformation, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **ChangeCount** property.
     */
    TaskSchema.ChangeCount = new IntPropertyDefinition_1.IntPropertyDefinition("ChangeCount", XmlElementNames_1.XmlElementNames.ChangeCount, FieldUris.ChangeCount, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **Companies** property.
     */
    TaskSchema.Companies = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("Companies", XmlElementNames_1.XmlElementNames.Companies, FieldUris.Companies, PropertyDefinitionFlags_1.PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new StringList_1.StringList(); });
    /**
     * Defines the **CompleteDate** property.
     */
    TaskSchema.CompleteDate = new DateTimePropertyDefinition_1.DateTimePropertyDefinition("CompleteDate", XmlElementNames_1.XmlElementNames.CompleteDate, FieldUris.CompleteDate, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, true);
    /**
     * Defines the **Contacts** property.
     */
    TaskSchema.Contacts = new ComplexPropertyDefinition_1.ComplexPropertyDefinition("Contacts", XmlElementNames_1.XmlElementNames.Contacts, FieldUris.Contacts, PropertyDefinitionFlags_1.PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, function () { return new StringList_1.StringList(); });
    /**
     * Defines the **DelegationState** property.
     */
    TaskSchema.DelegationState = new TaskDelegationStatePropertyDefinition_1.TaskDelegationStatePropertyDefinition("DelegationState", XmlElementNames_1.XmlElementNames.DelegationState, FieldUris.DelegationState, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **Delegator** property.
     */
    TaskSchema.Delegator = new StringPropertyDefinition_1.StringPropertyDefinition("Delegator", XmlElementNames_1.XmlElementNames.Delegator, FieldUris.Delegator, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **DueDate** property.
     */
    TaskSchema.DueDate = new DateTimePropertyDefinition_1.DateTimePropertyDefinition("DueDate", XmlElementNames_1.XmlElementNames.DueDate, FieldUris.DueDate, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, true);
    /**
     * Defines the **Mode** property.
     */
    TaskSchema.Mode = new GenericPropertyDefinition_1.GenericPropertyDefinition("IsAssignmentEditable", XmlElementNames_1.XmlElementNames.IsAssignmentEditable, FieldUris.IsAssignmentEditable, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, TaskMode_1.TaskMode);
    /**
     * Defines the **IsComplete** property.
     */
    TaskSchema.IsComplete = new BoolPropertyDefinition_1.BoolPropertyDefinition("IsComplete", XmlElementNames_1.XmlElementNames.IsComplete, FieldUris.IsComplete, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **IsRecurring** property.
     */
    TaskSchema.IsRecurring = new BoolPropertyDefinition_1.BoolPropertyDefinition("IsRecurring", XmlElementNames_1.XmlElementNames.IsRecurring, FieldUris.IsRecurring, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **IsTeamTask** property.
     */
    TaskSchema.IsTeamTask = new BoolPropertyDefinition_1.BoolPropertyDefinition("IsTeamTask", XmlElementNames_1.XmlElementNames.IsTeamTask, FieldUris.IsTeamTask, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **Mileage** property.
     */
    TaskSchema.Mileage = new StringPropertyDefinition_1.StringPropertyDefinition("Mileage", XmlElementNames_1.XmlElementNames.Mileage, FieldUris.Mileage, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **Owner** property.
     */
    TaskSchema.Owner = new StringPropertyDefinition_1.StringPropertyDefinition("Owner", XmlElementNames_1.XmlElementNames.Owner, FieldUris.Owner, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **PercentComplete** property.
     */
    TaskSchema.PercentComplete = new DoublePropertyDefinition_1.DoublePropertyDefinition("PercentComplete", XmlElementNames_1.XmlElementNames.PercentComplete, FieldUris.PercentComplete, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **Recurrence** property.
     */
    TaskSchema.Recurrence = new RecurrencePropertyDefinition_1.RecurrencePropertyDefinition("Recurrence", XmlElementNames_1.XmlElementNames.Recurrence, FieldUris.Recurrence, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **StartDate** property.
     */
    TaskSchema.StartDate = new DateTimePropertyDefinition_1.DateTimePropertyDefinition("StartDate", XmlElementNames_1.XmlElementNames.StartDate, FieldUris.StartDate, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, true);
    /**
     * Defines the **Status** property.
     */
    TaskSchema.Status = new GenericPropertyDefinition_1.GenericPropertyDefinition("Status", XmlElementNames_1.XmlElementNames.Status, FieldUris.Status, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, TaskStatus_1.TaskStatus);
    /**
     * Defines the **StatusDescription** property.
     */
    TaskSchema.StatusDescription = new StringPropertyDefinition_1.StringPropertyDefinition("StatusDescription", XmlElementNames_1.XmlElementNames.StatusDescription, FieldUris.StatusDescription, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1);
    /**
     * Defines the **TotalWork** property.
     */
    TaskSchema.TotalWork = new IntPropertyDefinition_1.IntPropertyDefinition("TotalWork", XmlElementNames_1.XmlElementNames.TotalWork, FieldUris.TotalWork, PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags_1.PropertyDefinitionFlags.CanFind, ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1, true);
    /**
     * @internal Instance of **TaskSchema**
     */
    TaskSchema.Instance = new TaskSchema();
    return TaskSchema;
}(ItemSchema_1.ItemSchema));
exports.TaskSchema = TaskSchema;
