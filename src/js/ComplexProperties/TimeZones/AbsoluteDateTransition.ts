import TimeZoneTransition = require("./TimeZoneTransition");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../../Core/EwsServiceXmlWriter");

class AbsoluteDateTransition extends TimeZoneTransition {
    DateTime: Date;
    private dateTime: Date;
    GetXmlElementName(): string { throw new Error("AbsoluteDateTransition.ts - GetXmlElementName : Not implemented."); }
    InitializeFromTransitionTime(transitionTime: any): any { throw new Error("AbsoluteDateTransition.ts - InitializeFromTransitionTime : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("AbsoluteDateTransition.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("AbsoluteDateTransition.ts - WriteElementsToXml : Not implemented."); }
}
export = AbsoluteDateTransition;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
