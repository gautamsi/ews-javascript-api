import Item = require("./Item");
class Task extends Item {
    //////ActualWork: number;
    //////AssignedTime: Date;
    //////BillingInformation: string;
    //////ChangeCount: number;
    //////Companies: StringList;
    //////CompleteDate: Date;
    //////Contacts: StringList;
    //////DelegationState: TaskDelegationState;
    //////Delegator: string;
    //////DueDate: Date;
    //////Mode: TaskMode;
    //////IsComplete: boolean;
    //////IsRecurring: boolean;
    //////IsTeamTask: boolean;
    //////Mileage: string;
    //////Owner: string;
    //////PercentComplete: number;
    //////Recurrence: Recurrence;
    //////StartDate: Date;
    //////Status: TaskStatus;
    //////StatusDescription: string;
    //////TotalWork: number;
    //////DefaultAffectedTaskOccurrences: AffectedTaskOccurrence;
    //////Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): Task { throw new Error("Not implemented."); }
    //////Bind(service: ExchangeService, id: ItemId): Task { throw new Error("Not implemented."); }
    //////DeleteCurrentOccurrence(deleteMode: DeleteMode): any { throw new Error("Not implemented."); }
    //////GetIsTimeZoneHeaderRequired(isUpdateOperation: boolean): boolean { throw new Error("Not implemented."); }
    //////GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    //////GetSchema(): ServiceObjectSchema { throw new Error("Not implemented."); }
    //////Update(conflictResolutionMode: ConflictResolutionMode): Task { throw new Error("Not implemented."); }
}
export = Task;




//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
