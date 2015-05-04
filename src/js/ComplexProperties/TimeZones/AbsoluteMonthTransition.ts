import TimeZoneTransition = require("./TimeZoneTransition");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../../Core/EwsServiceXmlWriter");

    class AbsoluteMonthTransition extends TimeZoneTransition {
        TimeOffset: System.TimeSpan;
        Month: number;
        private timeOffset: System.TimeSpan;
        private month: number;
        InitializeFromTransitionTime(transitionTime: any): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
export = AbsoluteMonthTransition;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

