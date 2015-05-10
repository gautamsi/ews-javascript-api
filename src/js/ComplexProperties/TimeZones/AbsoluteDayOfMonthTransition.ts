import AbsoluteMonthTransition = require("./AbsoluteMonthTransition");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../../Core/EwsServiceXmlWriter");
class AbsoluteDayOfMonthTransition extends AbsoluteMonthTransition {
    DayOfMonth: number;
    private dayOfMonth: number;
    CreateTransitionTime(): any { throw new Error("Not implemented."); }
    GetXmlElementName(): string { throw new Error("Not implemented."); }
    InitializeFromTransitionTime(transitionTime: any): any { throw new Error("Not implemented."); }
    TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = AbsoluteDayOfMonthTransition;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
