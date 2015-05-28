import TimeZoneTransition = require("./TimeZoneTransition");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../../Core/EwsServiceXmlWriter");

    class AbsoluteMonthTransition extends TimeZoneTransition {
        TimeOffset: any;//System.TimeSpan;
        Month: number;
        //private timeOffset: System.TimeSpan;
        private month: number;
        InitializeFromTransitionTime(transitionTime: any): any { throw new Error("AbsoluteMonthTransition.ts - InitializeFromTransitionTime : Not implemented."); }
        TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("AbsoluteMonthTransition.ts - TryReadElementFromXmlJsObject : Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("AbsoluteMonthTransition.ts - WriteElementsToXml : Not implemented."); }
    }
export = AbsoluteMonthTransition;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

