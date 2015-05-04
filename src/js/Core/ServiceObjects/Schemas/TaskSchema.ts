import ItemSchema = require("./ItemSchema");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");
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
    RegisterProperties(): any { throw new Error("Not implemented."); }
}


module TaskSchema {
    export module FieldUris {
        export var /* static*/ ActualWork: string = "task:ActualWork";
        export var /* static*/ AssignedTime: string = "task:AssignedTime";
        export var /* static*/ BillingInformation: string = "task:BillingInformation";
        export var /* static*/ ChangeCount: string = "task:ChangeCount";
        export var /* static*/ Companies: string = "task:Companies";
        export var /* static*/ CompleteDate: string = "task:CompleteDate";
        export var /* static*/ Contacts: string = "task:Contacts";
        export var /* static*/ DelegationState: string = "task:DelegationState";
        export var /* static*/ Delegator: string = "task:Delegator";
        export var /* static*/ DueDate: string = "task:DueDate";
        export var /* static*/ IsAssignmentEditable: string = "task:IsAssignmentEditable";
        export var /* static*/ IsComplete: string = "task:IsComplete";
        export var /* static*/ IsRecurring: string = "task:IsRecurring";
        export var /* static*/ IsTeamTask: string = "task:IsTeamTask";
        export var /* static*/ Mileage: string = "task:Mileage";
        export var /* static*/ Owner: string = "task:Owner";
        export var /* static*/ PercentComplete: string = "task:PercentComplete";
        export var /* static*/ Recurrence: string = "task:Recurrence";
        export var /* static*/ StartDate: string = "task:StartDate";
        export var /* static*/ Status: string = "task:Status";
        export var /* static*/ StatusDescription: string = "task:StatusDescription";
        export var /* static*/ TotalWork: string = "task:TotalWork";
    }
}


export = TaskSchema;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;


