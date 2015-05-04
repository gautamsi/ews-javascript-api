import Attendee = require("./Attendee");
import ComplexPropertyCollection = require("./ComplexPropertyCollection");

class AttendeeCollection extends ComplexPropertyCollection<Attendee> {
    Add(attendee: Attendee): any { throw new Error("Not implemented."); }
    //Add(smtpAddress: string): Attendee { throw new Error("Not implemented."); }
    //Add(name: string, smtpAddress: string): Attendee { throw new Error("Not implemented."); }
    Clear(): any { throw new Error("Not implemented."); }
    CreateComplexProperty(xmlElementName: string): Attendee { throw new Error("Not implemented."); }
    CreateDefaultComplexProperty(): Attendee { throw new Error("Not implemented."); }
    GetCollectionItemXmlElementName(attendee: Attendee): string { throw new Error("Not implemented."); }
    Remove(attendee: Attendee): boolean { throw new Error("Not implemented."); }
    RemoveAt(index: number): any { throw new Error("Not implemented."); }
}
export = AttendeeCollection;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
