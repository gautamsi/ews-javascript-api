import TimeZoneTransition = require("./TimeZoneTransition");
import TimeZoneDefinition = require("./TimeZoneDefinition");
import TimeZonePeriod = require("./TimeZonePeriod");
import ComplexProperty = require("../ComplexProperty");
import ExchangeService = require("../../Core/ExchangeService");
import JsonObject = require("../../Core/JsonObject");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../../Core/EwsServiceXmlWriter");
import {StringHelper} from "../../ExtensionMethods";
class TimeZoneTransitionGroup extends ComplexProperty {
    SupportsDaylight: boolean;
    private TransitionToDaylight: TimeZoneTransition;
    private TransitionToStandard: TimeZoneTransition;
    Id: string;
    Transitions: TimeZoneTransition[];//System.Collections.Generic.List<TimeZoneTransition>;
    private timeZoneDefinition: TimeZoneDefinition;
    private id: string;
    private transitions: TimeZoneTransition[];//System.Collections.Generic.List<TimeZoneTransition>;
    private transitionToStandard: TimeZoneTransition;
    private transitionToDaylight: TimeZoneTransition;
    CreateAdjustmentRule(startDate: Date, endDate: Date): any { throw new Error("Not implemented."); }
    GetCustomTimeZoneCreationParams(): TimeZoneTransitionGroup.CustomTimeZoneCreateParams { throw new Error("Not implemented."); }
    GetDaylightDelta(): any /*System.TimeSpan*/ { throw new Error("Not implemented."); }
    InitializeFromAdjustmentRule(adjustmentRule: any, standardPeriod: TimeZonePeriod): any { throw new Error("Not implemented."); }
    InitializeTransitions(): any { throw new Error("Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    LoadFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    Validate(): any { throw new Error("Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}

module TimeZoneTransitionGroup{
    export class CustomTimeZoneCreateParams {
        private baseOffsetToUtc: any = null;//TimeSpan = null;
        private standardDisplayName: string = null;
        private daylightDisplayName: string = null;
        set BaseOffsetToUtc(value){;//TimeSpan) {
            this.baseOffsetToUtc = value;
        }
        get BaseOffsetToUtc(): any {//TimeSpan {
            return this.baseOffsetToUtc;
        }
        set StandardDisplayName(value: string) {
            this.standardDisplayName = value;
        }
        get StandardDisplayName(): string {
            return this.standardDisplayName;
        }
        set DaylightDisplayName(value: string) {
            this.daylightDisplayName = value;
        }
        get DaylightDisplayName(): string {
            return this.daylightDisplayName;
        }
        get HasDaylightPeriod(): boolean {
            return !StringHelper.IsNullOrEmpty(this.daylightDisplayName);
        }
        constructor() {
            
        }
    }
}
export = TimeZoneTransitionGroup;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
