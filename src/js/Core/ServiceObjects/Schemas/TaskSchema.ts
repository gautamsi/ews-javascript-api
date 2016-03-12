import {XmlElementNames} from "../../XmlElementNames";
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
import {PropertyDefinition} from "../../../PropertyDefinitions/PropertyDefinition";
import {Schemas} from "./Schemas";

import {ItemSchema} from "./ItemSchema";

/**
 * Field URIs for tasks.
 */
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

/**
 * Represents the schema for task items.
 */
export class TaskSchema extends ItemSchema {

    /**
     * Defines the **ActualWork** property.
     */
    public static ActualWork: PropertyDefinition = new IntPropertyDefinition(
        "ActualWork",
        XmlElementNames.ActualWork,
        FieldUris.ActualWork,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1,
        true
    );

    /**
     * Defines the **AssignedTime** property.
     */
    public static AssignedTime: PropertyDefinition = new DateTimePropertyDefinition(
        "AssignedTime",
        XmlElementNames.AssignedTime,
        FieldUris.AssignedTime,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1,
        true
    );

    /**
     * Defines the **BillingInformation** property.
     */
    public static BillingInformation: PropertyDefinition = new StringPropertyDefinition(
        "BillingInformation",
        XmlElementNames.BillingInformation,
        FieldUris.BillingInformation,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **ChangeCount** property.
     */
    public static ChangeCount: PropertyDefinition = new IntPropertyDefinition(
        "ChangeCount",
        XmlElementNames.ChangeCount,
        FieldUris.ChangeCount,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **Companies** property.
     */
    public static Companies: PropertyDefinition = new ComplexPropertyDefinition<StringList>(
        "Companies",
        XmlElementNames.Companies,
        FieldUris.Companies,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new StringList(); }
    );

    /**
     * Defines the **CompleteDate** property.
     */
    public static CompleteDate: PropertyDefinition = new DateTimePropertyDefinition(
        "CompleteDate",
        XmlElementNames.CompleteDate,
        FieldUris.CompleteDate,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1,
        true
    );

    /**
     * Defines the **Contacts** property.
     */
    public static Contacts: PropertyDefinition = new ComplexPropertyDefinition<StringList>(
        "Contacts",
        XmlElementNames.Contacts,
        FieldUris.Contacts,
        PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1,
        () => { return new StringList(); }
    );

    /**
     * Defines the **DelegationState** property.
     */
    public static DelegationState: PropertyDefinition = new TaskDelegationStatePropertyDefinition(
        "DelegationState",
        XmlElementNames.DelegationState,
        FieldUris.DelegationState,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **Delegator** property.
     */
    public static Delegator: PropertyDefinition = new StringPropertyDefinition(
        "Delegator",
        XmlElementNames.Delegator,
        FieldUris.Delegator,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **DueDate** property.
     */
    public static DueDate: PropertyDefinition = new DateTimePropertyDefinition(
        "DueDate",
        XmlElementNames.DueDate,
        FieldUris.DueDate,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1,
        true
    );

    /**
     * Defines the **Mode** property.
     */
    public static Mode: PropertyDefinition = new GenericPropertyDefinition<TaskMode>(
        "IsAssignmentEditable",
        XmlElementNames.IsAssignmentEditable,
        FieldUris.IsAssignmentEditable,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **IsComplete** property.
     */
    public static IsComplete: PropertyDefinition = new BoolPropertyDefinition(
        "IsComplete",
        XmlElementNames.IsComplete,
        FieldUris.IsComplete,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **IsRecurring** property.
     */
    public static IsRecurring: PropertyDefinition = new BoolPropertyDefinition(
        "IsRecurring",
        XmlElementNames.IsRecurring,
        FieldUris.IsRecurring,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **IsTeamTask** property.
     */
    public static IsTeamTask: PropertyDefinition = new BoolPropertyDefinition(
        "IsTeamTask",
        XmlElementNames.IsTeamTask,
        FieldUris.IsTeamTask,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **Mileage** property.
     */
    public static Mileage: PropertyDefinition = new StringPropertyDefinition(
        "Mileage",
        XmlElementNames.Mileage,
        FieldUris.Mileage,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **Owner** property.
     */
    public static Owner: PropertyDefinition = new StringPropertyDefinition(
        "Owner",
        XmlElementNames.Owner,
        FieldUris.Owner,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **PercentComplete** property.
     */
    public static PercentComplete: PropertyDefinition = new DoublePropertyDefinition(
        "PercentComplete",
        XmlElementNames.PercentComplete,
        FieldUris.PercentComplete,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **Recurrence** property.
     */
    public static Recurrence: PropertyDefinition = new RecurrencePropertyDefinition(
        "Recurrence",
        XmlElementNames.Recurrence,
        FieldUris.Recurrence,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **StartDate** property.
     */
    public static StartDate: PropertyDefinition = new DateTimePropertyDefinition(
        "StartDate",
        XmlElementNames.StartDate,
        FieldUris.StartDate,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1,
        true
    );

    /**
     * Defines the **Status** property.
     */
    public static Status: PropertyDefinition = new GenericPropertyDefinition<TaskStatus>(
        "Status",
        XmlElementNames.Status,
        FieldUris.Status,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **StatusDescription** property.
     */
    public static StatusDescription: PropertyDefinition = new StringPropertyDefinition(
        "StatusDescription",
        XmlElementNames.StatusDescription,
        FieldUris.StatusDescription,
        PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1
    );

    /**
     * Defines the **TotalWork** property.
     */
    public static TotalWork: PropertyDefinition = new IntPropertyDefinition(
        "TotalWork",
        XmlElementNames.TotalWork,
        FieldUris.TotalWork,
        PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
        ExchangeVersion.Exchange2007_SP1,
        true
    );

    /**
     * @internal Instance of **TaskSchema** 
     */
    static Instance: TaskSchema = new TaskSchema();

    /**
     * Registers properties.
     * 
     * @remarks IMPORTANT NOTE: PROPERTIES MUST BE REGISTERED IN SCHEMA ORDER (i.e. the same order as they are defined in types.xsd)
     */
    RegisterProperties(): void {
        super.RegisterProperties();
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
    }
}

/**
 * Represents the schema for task items.
 */
export interface TaskSchema {
    /**
     * Defines the **ActualWork** property.
     */
    ActualWork: PropertyDefinition;
    /**
     * Defines the **AssignedTime** property.
     */
    AssignedTime: PropertyDefinition;
    /**
     * Defines the **BillingInformation** property.
     */
    BillingInformation: PropertyDefinition;
    /**
     * Defines the **ChangeCount** property.
     */
    ChangeCount: PropertyDefinition;
    /**
     * Defines the **Companies** property.
     */
    Companies: PropertyDefinition;
    /**
     * Defines the **CompleteDate** property.
     */
    CompleteDate: PropertyDefinition;
    /**
     * Defines the **Contacts** property.
     */
    Contacts: PropertyDefinition;
    /**
     * Defines the **DelegationState** property.
     */
    DelegationState: PropertyDefinition;
    /**
     * Defines the **Delegator** property.
     */
    Delegator: PropertyDefinition;
    /**
     * Defines the **DueDate** property.
     */
    DueDate: PropertyDefinition;
    /**
     * Defines the **Mode** property.
     */
    Mode: PropertyDefinition;
    /**
     * Defines the **IsComplete** property.
     */
    IsComplete: PropertyDefinition;
    /**
     * Defines the **IsRecurring** property.
     */
    IsRecurring: PropertyDefinition;
    /**
     * Defines the **IsTeamTask** property.
     */
    IsTeamTask: PropertyDefinition;
    /**
     * Defines the **Mileage** property.
     */
    Mileage: PropertyDefinition;
    /**
     * Defines the **Owner** property.
     */
    Owner: PropertyDefinition;
    /**
     * Defines the **PercentComplete** property.
     */
    PercentComplete: PropertyDefinition;
    /**
     * Defines the **Recurrence** property.
     */
    Recurrence: PropertyDefinition;
    /**
     * Defines the **StartDate** property.
     */
    StartDate: PropertyDefinition;
    /**
     * Defines the **Status** property.
     */
    Status: PropertyDefinition;
    /**
     * Defines the **StatusDescription** property.
     */
    StatusDescription: PropertyDefinition;
    /**
     * Defines the **TotalWork** property.
     */
    TotalWork: PropertyDefinition;
    /**
     * @internal Instance of **TaskSchema**
     */
    Instance: TaskSchema;
}

/**
 * Represents the schema for task items.
 */
export interface TaskSchemaStatic extends TaskSchema {
}