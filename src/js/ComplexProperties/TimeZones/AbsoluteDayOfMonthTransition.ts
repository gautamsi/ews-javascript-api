import AbsoluteMonthTransition = require("./AbsoluteMonthTransition");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../../Core/EwsServiceXmlWriter");
class AbsoluteDayOfMonthTransition extends AbsoluteMonthTransition {
    DayOfMonth: number;
    private dayOfMonth: number;
    CreateTransitionTime(): any { throw new Error("AbsoluteDayOfMonthTransition.ts - CreateTransitionTime : Not implemented."); }
    GetXmlElementName(): string { throw new Error("AbsoluteDayOfMonthTransition.ts - GetXmlElementName : Not implemented."); }
    InitializeFromTransitionTime(transitionTime: any): any { throw new Error("AbsoluteDayOfMonthTransition.ts - InitializeFromTransitionTime : Not implemented."); }
    TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("AbsoluteDayOfMonthTransition.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("AbsoluteDayOfMonthTransition.ts - WriteElementsToXml : Not implemented."); }
}
export = AbsoluteDayOfMonthTransition;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
