import {TimeZoneTransition} from "./TimeZoneTransition";
import {TimeZonePeriod} from "./TimeZonePeriod";
import {TimeZoneTransitionGroup} from "./TimeZoneTransitionGroup";
import {ComplexProperty} from "../ComplexProperty";
import {ExchangeService} from "../../Core/ExchangeService";
import {JsonObject} from "../../Core/JsonObject";
import {EwsServiceXmlReader} from "../../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
import {XmlElementNames} from "../../Core/XmlElementNames";
import {IndexerWithStringKey} from "../../AltDictionary";
export class TimeZoneDefinition extends ComplexProperty {
    private static NoIdPrefix: string = "NoId_";
    Name: string;
    Id: string;
    Periods: IndexerWithStringKey<TimeZonePeriod>;// System.Collections.Generic.Dictionary<string, TimeZonePeriod>;
    TransitionGroups: IndexerWithStringKey<TimeZoneTransitionGroup>;// System.Collections.Generic.Dictionary<string, TimeZoneTransitionGroup>;
    private name: string;
    private id: string;
    private periods: IndexerWithStringKey<TimeZonePeriod>;// System.Collections.Generic.Dictionary<string, TimeZonePeriod>;
    private transitionGroups: IndexerWithStringKey<TimeZoneTransitionGroup>;// System.Collections.Generic.Dictionary<string, TimeZoneTransitionGroup>;
    private transitions: TimeZoneTransition[];//System.Collections.Generic.List<TimeZoneTransition>;
    CompareTransitions(x: TimeZoneTransition, y: TimeZoneTransition): number { throw new Error("TimeZoneDefinition.ts - CompareTransitions : Not implemented."); }
    CreateTransitionGroupToPeriod(timeZonePeriod: TimeZonePeriod): TimeZoneTransitionGroup { throw new Error("TimeZoneDefinition.ts - CreateTransitionGroupToPeriod : Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("TimeZoneDefinition.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("TimeZoneDefinition.ts - LoadFromJson : Not implemented."); }
    LoadFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("TimeZoneDefinition.ts - LoadFromXmlJsObject : Not implemented."); }
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("TimeZoneDefinition.ts - ReadAttributesFromXml : Not implemented."); }
    ToTimeZoneInfo(): any /*System.TimeZoneInfo*/ { throw new Error("TimeZoneDefinition.ts - ToTimeZoneInfo : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("TimeZoneDefinition.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    Validate(): any { throw new Error("TimeZoneDefinition.ts - Validate : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("TimeZoneDefinition.ts - WriteAttributesToXml : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("TimeZoneDefinition.ts - WriteElementsToXml : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter): void {
        super.WriteToXml(writer, XmlElementNames.TimeZoneDefinition, this.Namespace);
    }
}

