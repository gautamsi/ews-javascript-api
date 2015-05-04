import RecurrenceRange = require("./RecurrenceRange");
import Recurrence = require("../Patterns/Recurrence");

class NoEndRecurrenceRange extends RecurrenceRange {
    XmlElementName: string;
    SetupRecurrence(recurrence: Recurrence): any { throw new Error("Not implemented."); }
}
export = NoEndRecurrenceRange;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

