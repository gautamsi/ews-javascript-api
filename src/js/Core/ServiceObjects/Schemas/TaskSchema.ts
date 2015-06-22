import {TaskMode} from "../../../Enumerations/TaskMode";
import {TaskStatus} from "../../../Enumerations/TaskStatus";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {IntPropertyDefinition} from "../../../PropertyDefinitions/IntPropertyDefinition";
import {PropertyDefinitionFlags} from "../../../Enumerations/PropertyDefinitionFlags";
import {DateTimePropertyDefinition} from "../../../PropertyDefinitions/DateTimePropertyDefinition";
import {StringPropertyDefinition} from "../../../PropertyDefinitions/StringPropertyDefinition";
import {ComplexPropertyDefinition} from "../../../PropertyDefinitions/ComplexPropertyDefinition";
import {StringList} from "../../../ComplexProperties/StringList";
import {TaskDelegationStatePropertyDefinition} from "../../../PropertyDefinitions/TaskDelegationStatePropertyDefinition";
import {GenericPropertyDefinition} from "../../../PropertyDefinitions/GenericPropertyDefinition";
import {BoolPropertyDefinition} from "../../../PropertyDefinitions/BoolPropertyDefinition";
import {DoublePropertyDefinition} from "../../../PropertyDefinitions/DoublePropertyDefinition";
import {RecurrencePropertyDefinition} from "../../../PropertyDefinitions/RecurrencePropertyDefinition";
import {ItemSchema} from "./ItemSchema";
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";

//module TaskSchema {
module FieldUris {
    export var ActualWork: string = "task:ActualWork";
    export var AssignedTime: string = "task:AssignedTime";
    export var BillingInformation: string = "task:BillingInformation";
    export var ChangeCount: string = "task:ChangeCount";
    export var Companies: string = "task:Companies";
    export var CompleteDate: string = "task:CompleteDate";
    export var Contacts: string = "task:Contacts";
    export var DelegationState: string = "task:DelegationState";
    export var Delegator: string = "task:Delegator";
    export var DueDate: string = "task:DueDate";
    export var IsAssignmentEditable: string = "task:IsAssignmentEditable";
    export var IsComplete: string = "task:IsComplete";
    export var IsRecurring: string = "task:IsRecurring";
    export var IsTeamTask: string = "task:IsTeamTask";
    export var Mileage: string = "task:Mileage";
    export var Owner: string = "task:Owner";
    export var PercentComplete: string = "task:PercentComplete";
    export var Recurrence: string = "task:Recurrence";
    export var StartDate: string = "task:StartDate";
    export var Status: string = "task:Status";
    export var StatusDescription: string = "task:StatusDescription";
    export var TotalWork: string = "task:TotalWork";
}
//}
export class TaskSchema extends ItemSchema {
    static ActualWork: PropertyDefinition = new IntPropertyDefinition(
        "ActualWork",
        "ActualWork",
        ExchangeVersion.Exchange2007_SP1, 
        FieldUris.ActualWork,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        true
        );

    static AssignedTime: PropertyDefinition = new DateTimePropertyDefinition(
        "AssignedTime",
        "AssignedTime",
        ExchangeVersion.Exchange2007_SP1, 
        FieldUris.AssignedTime,
        PropertyDefinitionFlags.CanFind,
        true
        );

    static BillingInformation: PropertyDefinition = new StringPropertyDefinition(
        "BillingInformation",
        "BillingInformation",
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.BillingInformation,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

    static ChangeCount: PropertyDefinition = new IntPropertyDefinition(
        "ChangeCount",
        "ChangeCount",
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.ChangeCount,
        PropertyDefinitionFlags.CanFind
        );

    static Companies: PropertyDefinition = new ComplexPropertyDefinition<StringList>(
        "Companies",
        "Companies",
        ExchangeVersion.Exchange2007_SP1, 
        FieldUris.Companies,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        () => { return new StringList(); }
        );

    static CompleteDate: PropertyDefinition = new DateTimePropertyDefinition(
        "CompleteDate",
        "CompleteDate",
        ExchangeVersion.Exchange2007_SP1, 
        FieldUris.CompleteDate,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        true
        );

    static Contacts: PropertyDefinition = new ComplexPropertyDefinition<StringList>(
        "Contacts",
        "Contacts",
        ExchangeVersion.Exchange2007_SP1, 
        FieldUris.Contacts,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        () => { return new StringList(); }
        );

    static DelegationState: PropertyDefinition = new TaskDelegationStatePropertyDefinition(
        "DelegationState",
        "DelegationState",
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.DelegationState,
        PropertyDefinitionFlags.CanFind
        );

    static Delegator: PropertyDefinition = new StringPropertyDefinition(
        "Delegator",
        "Delegator",
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Delegator,
        PropertyDefinitionFlags.CanFind
        );

    static DueDate: PropertyDefinition = new DateTimePropertyDefinition(
        "DueDate",
        "DueDate",
        ExchangeVersion.Exchange2007_SP1, 
        FieldUris.DueDate,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        true
        );

    static Mode: PropertyDefinition = new GenericPropertyDefinition<TaskMode>(
        "IsAssignmentEditable",
        "IsAssignmentEditable",
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsAssignmentEditable,
        PropertyDefinitionFlags.CanFind
        );

    static IsComplete: PropertyDefinition = new BoolPropertyDefinition(
        "IsComplete",
        "IsComplete",
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsComplete,
        PropertyDefinitionFlags.CanFind
        );

    static IsRecurring: PropertyDefinition = new BoolPropertyDefinition(
        "IsRecurring",
        "IsRecurring",
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsRecurring,
        PropertyDefinitionFlags.CanFind
        );

    static IsTeamTask: PropertyDefinition = new BoolPropertyDefinition(
        "IsTeamTask",
        "IsTeamTask",
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.IsTeamTask,
        PropertyDefinitionFlags.CanFind
        );

    static Mileage: PropertyDefinition = new StringPropertyDefinition(
        "Mileage",
        "Mileage",
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Mileage,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

    static Owner: PropertyDefinition = new StringPropertyDefinition(
        "Owner",
        "Owner",
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Owner,
        PropertyDefinitionFlags.CanFind
        );

    static PercentComplete: PropertyDefinition = new DoublePropertyDefinition(
        "PercentComplete",
        "PercentComplete",
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.PercentComplete,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    static Recurrence: PropertyDefinition = new RecurrencePropertyDefinition(
        "Recurrence",
        "Recurrence",
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Recurrence,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete
        );

    static StartDate: PropertyDefinition = new DateTimePropertyDefinition(
        "StartDate",
        "StartDate",
        ExchangeVersion.Exchange2007_SP1, 
        FieldUris.StartDate,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        true
        );

    static Status: PropertyDefinition = new GenericPropertyDefinition<TaskStatus>(
        "Status",
        "Status",
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.Status,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

    static StatusDescription: PropertyDefinition = new StringPropertyDefinition(
        "StatusDescription",
        "StatusDescription",
        ExchangeVersion.Exchange2007_SP1,
        FieldUris.StatusDescription,
        PropertyDefinitionFlags.CanFind
        );

    static TotalWork: PropertyDefinition = new IntPropertyDefinition(
        "TotalWork",
        "TotalWork",
        ExchangeVersion.Exchange2007_SP1, 
        FieldUris.TotalWork,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        true
        );

    static Instance: TaskSchema = new TaskSchema();
    RegisterProperties(): void {
        super.RegisterProperties();
        super.RegisterProperty(TaskSchema.ActualWork);
        super.RegisterProperty(TaskSchema.AssignedTime);
        super.RegisterProperty(TaskSchema.BillingInformation);
        super.RegisterProperty(TaskSchema.ChangeCount);
        super.RegisterProperty(TaskSchema.Companies);
        super.RegisterProperty(TaskSchema.CompleteDate);
        super.RegisterProperty(TaskSchema.Contacts);
        super.RegisterProperty(TaskSchema.DelegationState);
        super.RegisterProperty(TaskSchema.Delegator);
        super.RegisterProperty(TaskSchema.DueDate);
        super.RegisterProperty(TaskSchema.Mode);
        super.RegisterProperty(TaskSchema.IsComplete);
        super.RegisterProperty(TaskSchema.IsRecurring);
        super.RegisterProperty(TaskSchema.IsTeamTask);
        super.RegisterProperty(TaskSchema.Mileage);
        super.RegisterProperty(TaskSchema.Owner);
        super.RegisterProperty(TaskSchema.PercentComplete);
        super.RegisterProperty(TaskSchema.Recurrence);
        super.RegisterProperty(TaskSchema.StartDate);
        super.RegisterProperty(TaskSchema.Status);
        super.RegisterProperty(TaskSchema.StatusDescription);
        super.RegisterProperty(TaskSchema.TotalWork);
    }
}