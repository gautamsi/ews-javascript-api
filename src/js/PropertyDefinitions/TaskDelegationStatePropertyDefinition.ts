import GenericPropertyDefinition = require("./GenericPropertyDefinition");
class TaskDelegationStatePropertyDefinition extends GenericPropertyDefinition<TaskDelegationState> {
    private static NoMatch: string = "NoMatch";
    private static OwnNew: string = "OwnNew";
    private static Owned: string = "Owned";
    private static Accepted: string = "Accepted";

    Parse(value: string): any { throw new Error("Not implemented."); }
    ToString(value: any): string { throw new Error("Not implemented."); }
}

export = TaskDelegationStatePropertyDefinition;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
