import {XmlElementNames} from "../../XmlElementNames";
import {Item} from "./Item";
export class Task extends Item {
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
    //////Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): Task { throw new Error("Task.ts - Bind : Not implemented."); }
    //////Bind(service: ExchangeService, id: ItemId): Task { throw new Error("Task.ts - Bind : Not implemented."); }
    //////DeleteCurrentOccurrence(deleteMode: DeleteMode): any { throw new Error("Task.ts - DeleteCurrentOccurrence : Not implemented."); }
    //////GetIsTimeZoneHeaderRequired(isUpdateOperation: boolean): boolean { throw new Error("Task.ts - GetIsTimeZoneHeaderRequired : Not implemented."); }
    //////GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Task.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    //////GetSchema(): ServiceObjectSchema { throw new Error("Task.ts - GetSchema : Not implemented."); }
    GetXmlElementName(): string { return XmlElementNames.Task; }
    //////Update(conflictResolutionMode: ConflictResolutionMode): Task { throw new Error("Task.ts - Update : Not implemented."); }
}