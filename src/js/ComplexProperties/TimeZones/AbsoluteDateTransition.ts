import {DateTime} from "../../DateTime";
import {EwsServiceXmlReader} from "../../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
import {TimeZoneTransition} from "./TimeZoneTransition";
export class AbsoluteDateTransition extends TimeZoneTransition {
    DateTime: DateTime;
    private dateTime: DateTime;
    GetXmlElementName(): string { throw new Error("AbsoluteDateTransition.ts - GetXmlElementName : Not implemented."); }
    InitializeFromTransitionTime(transitionTime: any): any { throw new Error("AbsoluteDateTransition.ts - InitializeFromTransitionTime : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("AbsoluteDateTransition.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("AbsoluteDateTransition.ts - WriteElementsToXml : Not implemented."); }
}

