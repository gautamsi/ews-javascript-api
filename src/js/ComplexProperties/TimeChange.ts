import {TimeChangeRecurrence} from "./TimeChangeRecurrence";
import {ComplexProperty} from "./ComplexProperty";
import {Time} from "../Misc/Time";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class TimeChange extends ComplexProperty {
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
    /**@internal */
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("TimeChange.ts - ReadAttributesFromXml : Not implemented."); }
    /**@internal */
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("TimeChange.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    /**@internal */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("TimeChange.ts - WriteAttributesToXml : Not implemented."); }
    /**@internal */
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("TimeChange.ts - WriteElementsToXml : Not implemented."); }
}


//}



