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

export class TaskSchema extends ItemSchema {
    public ActualWork: PropertyDefinition;
    public AssignedTime: PropertyDefinition;
    public BillingInformation: PropertyDefinition;
    public ChangeCount: PropertyDefinition;
    public Companies: PropertyDefinition;
    public CompleteDate: PropertyDefinition;
    public Contacts: PropertyDefinition;
    public DelegationState: PropertyDefinition;
    public Delegator: PropertyDefinition;
    public DueDate: PropertyDefinition;
    public Mode: PropertyDefinition;
    public IsComplete: PropertyDefinition;
    public IsRecurring: PropertyDefinition;
    public IsTeamTask: PropertyDefinition;
    public Mileage: PropertyDefinition;
    public Owner: PropertyDefinition;
    public PercentComplete: PropertyDefinition;
    public Recurrence: PropertyDefinition;
    public StartDate: PropertyDefinition;
    public Status: PropertyDefinition;
    public StatusDescription: PropertyDefinition;
    public TotalWork: PropertyDefinition;

    static Instance: TaskSchema = new TaskSchema();

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
            "ActualWork",
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.ActualWork,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            true
        );

        this.AssignedTime = new DateTimePropertyDefinition(
            "AssignedTime",
            "AssignedTime",
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.AssignedTime,
            PropertyDefinitionFlags.CanFind,
            true
        );

        this.BillingInformation = new StringPropertyDefinition(
            "BillingInformation",
            "BillingInformation",
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.BillingInformation,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

        this.ChangeCount = new IntPropertyDefinition(
            "ChangeCount",
            "ChangeCount",
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.ChangeCount,
            PropertyDefinitionFlags.CanFind
        );

        this.Companies = new ComplexPropertyDefinition<StringList>(
            "Companies",
            "Companies",
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.Companies,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            () => { return new StringList(); }
        );

        this.CompleteDate = new DateTimePropertyDefinition(
            "CompleteDate",
            "CompleteDate",
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.CompleteDate,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            true
        );

        this.Contacts = new ComplexPropertyDefinition<StringList>(
            "Contacts",
            "Contacts",
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.Contacts,
            PropertyDefinitionFlags.AutoInstantiateOnRead | PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            () => { return new StringList(); }
        );

        this.DelegationState = new TaskDelegationStatePropertyDefinition(
            "DelegationState",
            "DelegationState",
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.DelegationState,
            PropertyDefinitionFlags.CanFind
        );

        this.Delegator = new StringPropertyDefinition(
            "Delegator",
            "Delegator",
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.Delegator,
            PropertyDefinitionFlags.CanFind
        );

        this.DueDate = new DateTimePropertyDefinition(
            "DueDate",
            "DueDate",
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.DueDate,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            true
        );

        this.Mode = new GenericPropertyDefinition<TaskMode>(
            "IsAssignmentEditable",
            "IsAssignmentEditable",
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.IsAssignmentEditable,
            PropertyDefinitionFlags.CanFind
        );

        this.IsComplete = new BoolPropertyDefinition(
            "IsComplete",
            "IsComplete",
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.IsComplete,
            PropertyDefinitionFlags.CanFind
        );

        this.IsRecurring = new BoolPropertyDefinition(
            "IsRecurring",
            "IsRecurring",
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.IsRecurring,
            PropertyDefinitionFlags.CanFind
        );

        this.IsTeamTask = new BoolPropertyDefinition(
            "IsTeamTask",
            "IsTeamTask",
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.IsTeamTask,
            PropertyDefinitionFlags.CanFind
        );

        this.Mileage = new StringPropertyDefinition(
            "Mileage",
            "Mileage",
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.Mileage,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind
        );

        this.Owner = new StringPropertyDefinition(
            "Owner",
            "Owner",
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.Owner,
            PropertyDefinitionFlags.CanFind
        );

        this.PercentComplete = new DoublePropertyDefinition(
            "PercentComplete",
            "PercentComplete",
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.PercentComplete,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

        this.Recurrence = new RecurrencePropertyDefinition(
            "Recurrence",
            "Recurrence",
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.Recurrence,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete
        );

        this.StartDate = new DateTimePropertyDefinition(
            "StartDate",
            "StartDate",
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.StartDate,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            true
        );

        this.Status = new GenericPropertyDefinition<TaskStatus>(
            "Status",
            "Status",
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.Status,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanFind
        );

        this.StatusDescription = new StringPropertyDefinition(
            "StatusDescription",
            "StatusDescription",
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.StatusDescription,
            PropertyDefinitionFlags.CanFind
        );

        this.TotalWork = new IntPropertyDefinition(
            "TotalWork",
            "TotalWork",
            ExchangeVersion.Exchange2007_SP1,
            FieldUris.TotalWork,
            PropertyDefinitionFlags.CanSet | PropertyDefinitionFlags.CanUpdate | PropertyDefinitionFlags.CanDelete | PropertyDefinitionFlags.CanFind,
            true
        );
    }
}