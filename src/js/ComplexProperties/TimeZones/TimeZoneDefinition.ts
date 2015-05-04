import ComplexProperty = require("../ComplexProperty");
import ExchangeService = require("../../Core/ExchangeService");
import JsonObject = require("../../Core/JsonObject");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../../Core/EwsServiceXmlWriter");
import XmlElementNames = require("../../Core/XmlElementNames");

class TimeZoneDefinition extends ComplexProperty {
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
    CompareTransitions(x: TimeZoneTransition, y: TimeZoneTransition): number { throw new Error("Not implemented."); }
    CreateTransitionGroupToPeriod(timeZonePeriod: TimeZonePeriod): TimeZoneTransitionGroup { throw new Error("Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    LoadFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    ToTimeZoneInfo(): any /*System.TimeZoneInfo*/ { throw new Error("Not implemented."); }
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    Validate(): any { throw new Error("Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter): void {
        super.WriteToXml(writer, XmlElementNames.TimeZoneDefinition, this.Namespace);
    }
}

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
