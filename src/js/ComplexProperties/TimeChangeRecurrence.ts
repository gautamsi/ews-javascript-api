import {ComplexProperty} from "./ComplexProperty";
import {DayOfTheWeekIndex} from "../Enumerations/DayOfTheWeekIndex";
import {DayOfTheWeek} from "../Enumerations/DayOfTheWeek";
import {Month} from "../Enumerations/Month";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class TimeChangeRecurrence extends ComplexProperty {
    DayOfTheWeekIndex: DayOfTheWeekIndex;
    DayOfTheWeek: DayOfTheWeek;
    Month: Month;
    private dayOfTheWeek: DayOfTheWeek;
    private dayOfTheWeekIndex: DayOfTheWeekIndex;
    private month: Month;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("TimeChangeRecurrence.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("TimeChangeRecurrence.ts - WriteElementsToXml : Not implemented."); }
}


//}



