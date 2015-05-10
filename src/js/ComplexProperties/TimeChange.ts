import TimeChangeRecurrence = require("./TimeChangeRecurrence");
import ComplexProperty = require("./ComplexProperty");
import Time = require("../Misc/Time");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

class TimeChange extends ComplexProperty {
    TimeZoneName: string;
    Offset: any /*System.TimeSpan*/;
    Time: Time;
    AbsoluteDate: Date;
    Recurrence: TimeChangeRecurrence;
    private timeZoneName: string;
    private offset: any /*System.TimeSpan*/;
    private time: Time;
    private absoluteDate: Date;
    private recurrence: TimeChangeRecurrence;
    ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = TimeChange;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
