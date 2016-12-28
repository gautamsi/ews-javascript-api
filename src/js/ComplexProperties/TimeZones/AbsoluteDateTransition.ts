import {DateTime} from "../../DateTime";
import {TimeZoneDefinition} from "./TimeZoneDefinition";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";
import {XmlElementNames} from "../../Core/XmlElementNames";
import {TimeZoneTransitionGroup} from "./TimeZoneTransitionGroup";
import {Strings} from "../../Strings";
import {ServiceLocalException} from "../../Exceptions/ServiceLocalException";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
import {TimeZoneTransition} from "./TimeZoneTransition";
export class AbsoluteDateTransition extends TimeZoneTransition {
    DateTime: DateTime;
    //private dateTime: DateTime; - backing property not needed.
    constructor(timeZoneDefinition: TimeZoneDefinition);
    constructor(timeZoneDefinition, targetGroup: TimeZoneTransitionGroup);
    constructor(timeZoneDefinition, targetGroup?: TimeZoneTransitionGroup) {
        super(timeZoneDefinition, targetGroup);
    }
    GetXmlElementName(): string { return XmlElementNames.AbsoluteDateTransition; }
    InitializeFromTransitionTime(transitionTime: any): any { throw new ServiceLocalException(Strings.UnsupportedTimeZonePeriodTransitionTarget); }
    //ReadElementsFromXmlJsObject(reader: any): boolean { throw new Error("AbsoluteDateTransition.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    /**@internal */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        super.WriteElementsToXml(writer);

        writer.WriteElementValue(
            XmlNamespace.Types,
            XmlElementNames.DateTime,
            this.DateTime);
    }
}

