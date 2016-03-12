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
    public ActualWork: PropertyDefinition;

    /**
     * Defines the **AssignedTime** property.
     */
    public AssignedTime: PropertyDefinition;

    /**
     * Defines the **BillingInformation** property.
     */
    public BillingInformation: PropertyDefinition;

    /**
     * Defines the **ChangeCount** property.
     */
    public ChangeCount: PropertyDefinition;

    /**
     * Defines the **Companies** property.
     */
    public Companies: PropertyDefinition;

    /**
     * Defines the **CompleteDate** property.
     */
    public CompleteDate: PropertyDefinition;

    /**
     * Defines the **Contacts** property.
     */
    public Contacts: PropertyDefinition;

    /**
     * Defines the **DelegationState** property.
     */
    public DelegationState: PropertyDefinition;

    /**
     * Defines the **Delegator** property.
     */
    public Delegator: PropertyDefinition;

    /**
     * Defines the **DueDate** property.
     */
    public DueDate: PropertyDefinition;

    /**
     * Defines the **Mode** property.
     */
    public Mode: PropertyDefinition;

    /**
     * Defines the **IsComplete** property.
     */
    public IsComplete: PropertyDefinition;

    /**
     * Defines the **IsRecurring** property.
     */
    public IsRecurring: PropertyDefinition;

    /**
     * Defines the **IsTeamTask** property.
     */
    public IsTeamTask: PropertyDefinition;

    /**
     * Defines the **Mileage** property.
     */
    public Mileage: PropertyDefinition;

    /**
     * Defines the **Owner** property.
     */
    public Owner: PropertyDefinition;

    /**
     * Defines the **PercentComplete** property.
     */
    public PercentComplete: PropertyDefinition;

    /**
     * Defines the **Recurrence** property.
     */
    public Recurrence: PropertyDefinition;

    /**
     * Defines the **StartDate** property.
     */
    public StartDate: PropertyDefinition;

    /**
     * Defines the **Status** property.
     */
    public Status: PropertyDefinition;

    /**
     * Defines the **StatusDescription** property.
     */
    public StatusDescription: PropertyDefinition;

    /**
     * Defines the **TotalWork** property.
     */
    public TotalWork: PropertyDefinition;

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
        super.RegisterProperty(this.ActualWork);
        super.RegisterProperty(this.AssignedTime);
        super.RegisterProperty(this.BillingInformation);
        super.RegisterProperty(this.ChangeCount);
        super.RegisterProperty(this.Companies);
        super.RegisterProperty(this.CompleteDate);
        super.RegisterProperty(this.Contacts);
        super.RegisterProperty(this.DelegationState);
        super.RegisterProperty(this.Delegator);
        super.RegisterProperty(this.DueDate);
        super.RegisterProperty(this.Mode);
        super.RegisterProperty(this.IsComplete);
        super.RegisterProperty(this.IsRecurring);
        super.RegisterProperty(this.IsTeamTask);
        super.RegisterProperty(this.Mileage);
        super.RegisterProperty(this.Owner);
        super.RegisterProperty(this.PercentComplete);
        super.RegisterProperty(this.Recurrence);
        super.RegisterProperty(this.StartDate);
        super.RegisterProperty(this.Status);
        super.RegisterProperty(this.StatusDescription);
        super.RegisterProperty(this.TotalWork);
    }

    protected init() {
        super.init();
        this.ActualWork = new IntPropertyDefinition(
            "ActualWork",
            XmlElementNames.ActualWork,
            FieldUris.ActualWork,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1,
            true
        );

        this.AssignedTime = new DateTimePropertyDefinition(
            "AssignedTime",
            XmlElementNames.AssignedTime,
            FieldUris.AssignedTime,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1,
            true
        );

        this.BillingInformation = new StringPropertyDefinition(
            "BillingInformation",
            XmlElementNames.BillingInformation,
            FieldUris.BillingInformation,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.ChangeCount = new IntPropertyDefinition(
            "ChangeCount",
            XmlElementNames.ChangeCount,
            FieldUris.ChangeCount,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.Companies = new ComplexPropertyDefinition<StringList>(
            "Companies",
            XmlElementNames.Companies,
            FieldUris.Companies,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new StringList(); }
        );

        this.CompleteDate = new DateTimePropertyDefinition(
            "CompleteDate",
            XmlElementNames.CompleteDate,
            FieldUris.CompleteDate,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1,
            true
        );

        this.Contacts = new ComplexPropertyDefinition<StringList>(
            "Contacts",
            XmlElementNames.Contacts,
            FieldUris.Contacts,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1,
            () => { return new StringList(); }
        );

        this.DelegationState = new TaskDelegationStatePropertyDefinition(
            "DelegationState",
            XmlElementNames.DelegationState,
            FieldUris.DelegationState,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.Delegator = new StringPropertyDefinition(
            "Delegator",
            XmlElementNames.Delegator,
            FieldUris.Delegator,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.DueDate = new DateTimePropertyDefinition(
            "DueDate",
            XmlElementNames.DueDate,
            FieldUris.DueDate,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1,
            true
        );

        this.Mode = new GenericPropertyDefinition<TaskMode>(
            "IsAssignmentEditable",
            XmlElementNames.IsAssignmentEditable,
            FieldUris.IsAssignmentEditable,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.IsComplete = new BoolPropertyDefinition(
            "IsComplete",
            XmlElementNames.IsComplete,
            FieldUris.IsComplete,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.IsRecurring = new BoolPropertyDefinition(
            "IsRecurring",
            XmlElementNames.IsRecurring,
            FieldUris.IsRecurring,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.IsTeamTask = new BoolPropertyDefinition(
            "IsTeamTask",
            XmlElementNames.IsTeamTask,
            FieldUris.IsTeamTask,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.Mileage = new StringPropertyDefinition(
            "Mileage",
            XmlElementNames.Mileage,
            FieldUris.Mileage,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.Owner = new StringPropertyDefinition(
            "Owner",
            XmlElementNames.Owner,
            FieldUris.Owner,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.PercentComplete = new DoublePropertyDefinition(
            "PercentComplete",
            XmlElementNames.PercentComplete,
            FieldUris.PercentComplete,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.Recurrence = new RecurrencePropertyDefinition(
            "Recurrence",
            XmlElementNames.Recurrence,
            FieldUris.Recurrence,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete,
            ExchangeVersion.Exchange2007_SP1
        );

        this.StartDate = new DateTimePropertyDefinition(
            "StartDate",
            XmlElementNames.StartDate,
            FieldUris.StartDate,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1,
            true
        );

        this.Status = new GenericPropertyDefinition<TaskStatus>(
            "Status",
            XmlElementNames.Status,
            FieldUris.Status,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.StatusDescription = new StringPropertyDefinition(
            "StatusDescription",
            XmlElementNames.StatusDescription,
            FieldUris.StatusDescription,
            PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1
        );

        this.TotalWork = new IntPropertyDefinition(
            "TotalWork",
            XmlElementNames.TotalWork,
            FieldUris.TotalWork,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            ExchangeVersion.Exchange2007_SP1,
            true
        );
    }
}