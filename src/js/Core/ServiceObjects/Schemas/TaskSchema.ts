import ItemSchema = require("./ItemSchema");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");

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

class TaskSchema extends ItemSchema {
    static ActualWork: PropertyDefinition;
    static AssignedTime: PropertyDefinition;
    static BillingInformation: PropertyDefinition;
    static ChangeCount: PropertyDefinition;
    static Companies: PropertyDefinition;
    static CompleteDate: PropertyDefinition;
    static Contacts: PropertyDefinition;
    static DelegationState: PropertyDefinition;
    static Delegator: PropertyDefinition;
    static DueDate: PropertyDefinition;
    static Mode: PropertyDefinition;
    static IsComplete: PropertyDefinition;
    static IsRecurring: PropertyDefinition;
    static IsTeamTask: PropertyDefinition;
    static Mileage: PropertyDefinition;
    static Owner: PropertyDefinition;
    static PercentComplete: PropertyDefinition;
    static Recurrence: PropertyDefinition;
    static StartDate: PropertyDefinition;
    static Status: PropertyDefinition;
    static StatusDescription: PropertyDefinition;
    static TotalWork: PropertyDefinition;
    static Instance: TaskSchema;
    RegisterProperties(): any { throw new Error("TaskSchema.ts - RegisterProperties : Not implemented."); }
}


export = TaskSchema;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;


