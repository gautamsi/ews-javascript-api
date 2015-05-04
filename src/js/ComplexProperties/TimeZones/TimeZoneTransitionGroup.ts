import ComplexProperty = require("../ComplexProperty");
import TimeZoneTransitionGroup = require("./");
import ExchangeService = require("../../Core/ExchangeService");
import JsonObject = require("../../Core/JsonObject");
import EwsServiceXmlReader = require("../../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../../Core/EwsServiceXmlWriter");

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
        LoadFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        ReadAttributesFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
