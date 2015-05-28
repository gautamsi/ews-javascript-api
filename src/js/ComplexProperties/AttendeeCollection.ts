import Attendee = require("./Attendee");
import ComplexPropertyCollection = require("./ComplexPropertyCollection");

class AttendeeCollection extends ComplexPropertyCollection<Attendee> {
    Add(attendee: Attendee): any { throw new Error("AttendeeCollection.ts - Add : Not implemented."); }
    //Add(smtpAddress: string): Attendee { throw new Error("AttendeeCollection.ts - Add : Not implemented."); }
    //Add(name: string, smtpAddress: string): Attendee { throw new Error("AttendeeCollection.ts - Add : Not implemented."); }
    Clear(): any { throw new Error("AttendeeCollection.ts - Clear : Not implemented."); }
    CreateComplexProperty(xmlElementName: string): Attendee { throw new Error("AttendeeCollection.ts - CreateComplexProperty : Not implemented."); }
    CreateDefaultComplexProperty(): Attendee { throw new Error("AttendeeCollection.ts - CreateDefaultComplexProperty : Not implemented."); }
    GetCollectionItemXmlElementName(attendee: Attendee): string { throw new Error("AttendeeCollection.ts - GetCollectionItemXmlElementName : Not implemented."); }
    Remove(attendee: Attendee): boolean { throw new Error("AttendeeCollection.ts - Remove : Not implemented."); }
    RemoveAt(index: number): any { throw new Error("AttendeeCollection.ts - RemoveAt : Not implemented."); }
}
export = AttendeeCollection;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
