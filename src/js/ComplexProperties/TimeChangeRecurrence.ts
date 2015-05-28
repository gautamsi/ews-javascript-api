import ComplexProperty = require("./ComplexProperty");
import DayOfTheWeekIndex = require("../Enumerations/DayOfTheWeekIndex");
import DayOfTheWeek = require("../Enumerations/DayOfTheWeek");
import Month = require("../Enumerations/Month");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

class TimeChangeRecurrence extends ComplexProperty {
    DayOfTheWeekIndex: DayOfTheWeekIndex;
    DayOfTheWeek: DayOfTheWeek;
    Month: Month;
    private dayOfTheWeek: DayOfTheWeek;
    private dayOfTheWeekIndex: DayOfTheWeekIndex;
    private month: Month;
    TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("TimeChangeRecurrence.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("TimeChangeRecurrence.ts - WriteElementsToXml : Not implemented."); }
}
export = TimeChangeRecurrence;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
