import {TimeZonePeriod} from "./TimeZonePeriod";
import {TimeZoneTransitionGroup} from "./TimeZoneTransitionGroup";
import {TimeZoneDefinition} from "./TimeZoneDefinition";
import {ComplexProperty} from "../ComplexProperty";
import {ExchangeService} from "../../Core/ExchangeService";
import {JsonObject} from "../../Core/JsonObject";
import {EwsServiceXmlReader} from "../../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
export class TimeZoneTransition extends ComplexProperty {
    private static PeriodTarget: string = "Period";
    private static GroupTarget: string = "Group";

    TargetPeriod: TimeZonePeriod;
    TargetGroup: TimeZoneTransitionGroup;
    private timeZoneDefinition: TimeZoneDefinition;
    private targetPeriod: TimeZonePeriod;
    private targetGroup: TimeZoneTransitionGroup;
    Create(timeZoneDefinition: TimeZoneDefinition, xmlElementName: string): TimeZoneTransition { throw new Error("TimeZoneTransition.ts - Create : Not implemented."); }
    CreateTimeZoneTransition(timeZoneDefinition: TimeZoneDefinition, targetPeriod: TimeZonePeriod, transitionTime: any): TimeZoneTransition { throw new Error("TimeZoneTransition.ts - CreateTimeZoneTransition : Not implemented."); }
    CreateTransitionTime(): any { throw new Error("TimeZoneTransition.ts - CreateTransitionTime : Not implemented."); }
    GetXmlElementName(): string { throw new Error("TimeZoneTransition.ts - GetXmlElementName : Not implemented."); }
    InitializeFromTransitionTime(transitionTime: any): any { throw new Error("TimeZoneTransition.ts - InitializeFromTransitionTime : Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("TimeZoneTransition.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("TimeZoneTransition.ts - LoadFromJson : Not implemented."); }
    LoadFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("TimeZoneTransition.ts - LoadFromXmlJsObject : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("TimeZoneTransition.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("TimeZoneTransition.ts - WriteElementsToXml : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("TimeZoneTransition.ts - WriteToXml : Not implemented."); }
}


//}



