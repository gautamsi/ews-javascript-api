import TaskDelegationState = require("../Enumerations/TaskDelegationState");
import GenericPropertyDefinition = require("./GenericPropertyDefinition");
class TaskDelegationStatePropertyDefinition extends GenericPropertyDefinition<TaskDelegationState> {
    private static NoMatch: string = "NoMatch";
    private static OwnNew: string = "OwnNew";
    private static Owned: string = "Owned";
    private static Accepted: string = "Accepted";

    Parse(value: string): any { throw new Error("TaskDelegationStatePropertyDefinition.ts - Parse : Not implemented."); }
    ToString(value: any): string { throw new Error("TaskDelegationStatePropertyDefinition.ts - ToString : Not implemented."); }
}

export = TaskDelegationStatePropertyDefinition;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
