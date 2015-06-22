import {RecurrenceRange} from "./RecurrenceRange";
import {Recurrence} from "../Patterns/Recurrence";
export class NoEndRecurrenceRange extends RecurrenceRange {
    XmlElementName: string;
    SetupRecurrence(recurrence: Recurrence): any { throw new Error("NoEndRecurrenceRange.ts - SetupRecurrence : Not implemented."); }
}


//}




