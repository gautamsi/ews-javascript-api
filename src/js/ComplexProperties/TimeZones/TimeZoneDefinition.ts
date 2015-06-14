import {TimeZoneTransition} from "./TimeZoneTransition";
import {TimeZonePeriod} from "./TimeZonePeriod";
import {TimeZoneTransitionGroup} from "./TimeZoneTransitionGroup";
import {AbsoluteDateTransition} from "./AbsoluteDateTransition";
import {ServiceLocalException} from "../../Exceptions/ServiceLocalException";
import {Strings} from "../../Strings";
import {DateTime} from "../../DateTime";
import {ExchangeService} from "../../Core/ExchangeService";
import {JsonObject} from "../../Core/JsonObject";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
import {XmlElementNames} from "../../Core/XmlElementNames";
import {XmlAttributeNames} from "../../Core/XmlAttributeNames";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";
import {DictionaryWithStringKey} from "../../AltDictionary";
import {ComplexProperty} from "../ComplexProperty";
export class TimeZoneDefinition extends ComplexProperty {
    private static NoIdPrefix: string = "NoId_";
    Name: string = null;
    Id: string = null;
    get Periods(): DictionaryWithStringKey<TimeZonePeriod> { return this.periods; }// System.Collections.Generic.Dictionary<string, TimeZonePeriod>;
    get TransitionGroups(): DictionaryWithStringKey<TimeZoneTransitionGroup> { return this.transitionGroups; }// System.Collections.Generic.Dictionary<string, TimeZoneTransitionGroup>;
    //private name: string; backing property not needed
    //private id: string;
    private periods: DictionaryWithStringKey<TimeZonePeriod> = new DictionaryWithStringKey<TimeZonePeriod>();// System.Collections.Generic.Dictionary<string, TimeZonePeriod>;
    private transitionGroups: DictionaryWithStringKey<TimeZoneTransitionGroup> = new DictionaryWithStringKey<TimeZoneTransitionGroup>();// System.Collections.Generic.Dictionary<string, TimeZoneTransitionGroup>;
    private transitions: TimeZoneTransition[] = [];//System.Collections.Generic.List<TimeZoneTransition>;
    constructor();
    constructor(timezoneInfo: any);
    constructor(timezoneInfo?: any) {
        super()
        if (typeof timezoneInfo !== 'undefined') {
            throw new Error("TimeZoneDefinition.ts - ctor - timezone not implemented")
        }
    }

    CompareTransitions(x: TimeZoneTransition, y: TimeZoneTransition): number {
        if (x == y)
            {
                return 0;
            }
            else if (x instanceof TimeZoneTransition)
            {
                return -1;
            }
            else if (y instanceof TimeZoneTransition)
            {
                return 1;
            }
            else
            {
                var firstTransition :AbsoluteDateTransition= <AbsoluteDateTransition>x;
                var secondTransition:AbsoluteDateTransition = <AbsoluteDateTransition>y;

                return DateTime.Compare(firstTransition.DateTime, secondTransition.DateTime);
            }
    }
    
    CreateTransitionGroupToPeriod(timeZonePeriod: TimeZonePeriod): TimeZoneTransitionGroup {
        var transitionToPeriod: TimeZoneTransition = new TimeZoneTransition(this, timeZonePeriod);

        var transitionGroup: TimeZoneTransitionGroup = new TimeZoneTransitionGroup(this, this.transitionGroups.Count.ToString());
        transitionGroup.Transitions.push(transitionToPeriod);
        
        this.transitionGroups.addUpdate(transitionGroup.Id, transitionGroup);

        return transitionGroup;
    }
    
    //InternalToJson(service: ExchangeService): any { throw new Error("TimeZoneDefinition.ts - InternalToJson : Not implemented."); }
    //LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("TimeZoneDefinition.ts - LoadFromJson : Not implemented."); }
    LoadFromXmlJsObject(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("TimeZoneDefinition.ts - LoadFromXmlJsObject : Not implemented."); }
    //ReadAttributesFromXmlJsObject(reader: any): any { throw new Error("TimeZoneDefinition.ts - ReadAttributesFromXml : Not implemented."); }
    ToTimeZoneInfo(): any /*System.TimeZoneInfo*/ { throw new Error("TimeZoneDefinition.ts - ToTimeZoneInfo : Not implemented."); }
    //ReadElementsFromXmlJsObject(reader: any): boolean { throw new Error("TimeZoneDefinition.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    
    Validate(): void {
        // The definition must have at least one period, one transition group and one transition,
        // and there must be as many transitions as there are transition groups.
        if (this.periods.Count < 1 || this.transitions.length < 1 || this.transitionGroups.Count < 1 ||
            this.transitionGroups.Count != this.transitions.length) {
            throw new ServiceLocalException(Strings.InvalidOrUnsupportedTimeZoneDefinition);
        }

        // The first transition must be of type TimeZoneTransition.
        if (!(this.transitions[0] instanceof TimeZoneTransition)) {
            throw new ServiceLocalException(Strings.InvalidOrUnsupportedTimeZoneDefinition);
        }

        // All transitions must be to transition groups and be either TimeZoneTransition or
        // AbsoluteDateTransition instances.
        for (var transition of this.transitions) {
            //Type transitionType = transition.GetType();

            if (!(transition instanceof TimeZoneTransition) && !(transition instanceof AbsoluteDateTransition)) {
                throw new ServiceLocalException(Strings.InvalidOrUnsupportedTimeZoneDefinition);
            }

            if (transition.TargetGroup == null) {
                throw new ServiceLocalException(Strings.InvalidOrUnsupportedTimeZoneDefinition);
            }
        }

        // All transition groups must be valid.
        for (var transitionGroup of this.transitionGroups.Values) {
            transitionGroup.Validate();
        }
    }

    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        // The Name attribute is only supported in Exchange 2010 and above.
        if (writer.Service.RequestedServerVersion != ExchangeVersion.Exchange2007_SP1) {
            writer.WriteAttributeValue(null, XmlAttributeNames.Name, this.Name);
        }

        writer.WriteAttributeValue(null, XmlAttributeNames.Id, this.Id);
    }

    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        // We only emit the full time zone definition against Exchange 2010 servers and above.
        if (writer.Service.RequestedServerVersion != ExchangeVersion.Exchange2007_SP1) {
            if (this.periods.Count > 0) {
                writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.Periods);

                for (var keyValuePair of this.periods.Items) {
                    keyValuePair.value.WriteToXml(writer);
                }

                writer.WriteEndElement(); // Periods
            }

            if (this.transitionGroups.Count > 0) {
                writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.TransitionsGroups);

                for (var transitionPair of this.transitionGroups.Items) {
                    transitionPair.value.WriteToXml(writer);
                }

                writer.WriteEndElement(); // TransitionGroups
            }

            if (this.transitions.length > 0) {
                writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.Transitions);

                for (var transition of this.transitions) {
                    transition.WriteToXml(writer);
                }

                writer.WriteEndElement(); // Transitions
            }
        }
    }
    WriteToXml(writer: EwsServiceXmlWriter): void {
        super.WriteToXml(writer, XmlElementNames.TimeZoneDefinition, this.Namespace);
    }
}

