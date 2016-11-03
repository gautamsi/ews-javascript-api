import {TimeZoneTransition} from "./TimeZoneTransition";
import {TimeZoneDefinition} from "./TimeZoneDefinition";
import {TimeZonePeriod} from "./TimeZonePeriod";
import {ExchangeService} from "../../Core/ExchangeService";
import {TimeSpan} from "../../DateTime";
import {XmlElementNames} from "../../Core/XmlElementNames";
import {XmlAttributeNames} from "../../Core/XmlAttributeNames";
import {ServiceLocalException} from "../../Exceptions/ServiceLocalException";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
import {StringHelper} from "../../ExtensionMethods";
import {Strings} from "../../Strings";
import {ComplexProperty} from "../ComplexProperty";

export class CustomTimeZoneCreateParams {
    private baseOffsetToUtc: TimeSpan = null;//TimeSpan = null;
    private standardDisplayName: string = null;
    private daylightDisplayName: string = null;
    set BaseOffsetToUtc(value){;//TimeSpan) {
        this.baseOffsetToUtc = value;
    }
    get BaseOffsetToUtc(): TimeSpan {//TimeSpan {
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

export class TimeZoneTransitionGroup extends ComplexProperty {
    get SupportsDaylight(): boolean{return this.transitions.length == 2;}
    private get TransitionToDaylight(): TimeZoneTransition{this.InitializeTransitions(); return this.TransitionToDaylight;}
    private get TransitionToStandard(): TimeZoneTransition{this.InitializeTransitions(); return this.transitionToStandard;}
    Id: string;
    get Transitions(): TimeZoneTransition[] {return this.transitions;}
    private timeZoneDefinition: TimeZoneDefinition;
    //private id: string;
    private transitions: TimeZoneTransition[] = [];
    private transitionToStandard: TimeZoneTransition;
    private transitionToDaylight: TimeZoneTransition;
    constructor(timeZoneDefinition: TimeZoneDefinition);
    constructor(timeZoneDefinition, id: string);
    constructor(timeZoneDefinition, id?: string) {
        super();
        this.timeZoneDefinition = timeZoneDefinition;
        this.Id = id;
    }
    CreateAdjustmentRule(startDate: Date, endDate: Date): any { 
        throw new Error("TimeZoneTransitionGroup.ts - CreateAdjustmentRule : Not implemented."); 
        // If there is only one transition, we can't create an adjustment rule. We have to assume
            // that the base offset to UTC is unchanged.
            if (this.transitions.length == 1)
            {
                return null;
            }

            // return TimeZoneInfo.AdjustmentRule.CreateAdjustmentRule(
            //     startDate.Date,
            //     endDate.Date,
            //     this.GetDaylightDelta(),
            //     this.TransitionToDaylight.CreateTransitionTime(),
            //     this.TransitionToStandard.CreateTransitionTime());
            
            }
    GetCustomTimeZoneCreationParams(): CustomTimeZoneCreateParams { 
        var result:CustomTimeZoneCreateParams = new CustomTimeZoneCreateParams();

            if (this.TransitionToDaylight != null)
            {
                result.DaylightDisplayName = this.TransitionToDaylight.TargetPeriod.Name;
            }

            result.StandardDisplayName = this.TransitionToStandard.TargetPeriod.Name;

            // Assume that the standard period's offset is the base offset to UTC.
            // EWS returns a positive offset for time zones that are behind UTC, and
            // a negative one for time zones ahead of UTC. TimeZoneInfo does it the other
            // way around.
            result.BaseOffsetToUtc = new TimeSpan(-this.TransitionToStandard.TargetPeriod.Bias);

            return result;
           
            }
    GetDaylightDelta(): TimeSpan {
        if (this.SupportsDaylight)
            {
                // EWS returns a positive offset for time zones that are behind UTC, and
                // a negative one for time zones ahead of UTC. TimeZoneInfo does it the other
                // way around.
                return this.TransitionToStandard.TargetPeriod.Bias.Subtract(this.TransitionToDaylight.TargetPeriod.Bias);
            }
            else
            {
                return TimeSpan.Zero;
            }
    }
    InitializeFromAdjustmentRule(adjustmentRule: any, standardPeriod: TimeZonePeriod): any { throw new Error("TimeZoneTransitionGroup.ts - InitializeFromAdjustmentRule : Not implemented."); }
    InitializeTransitions(): void {
        if (this.transitionToStandard == null)
            {
                for (var transition of this.transitions)
                {
                    if (transition.TargetPeriod.IsStandardPeriod || (this.transitions.length == 1))
                    {
                        this.transitionToStandard = transition;
                    }
                    else
                    {
                        this.transitionToDaylight = transition;
                    }
                }
            }

            // If we didn't find a Standard period, this is an invalid time zone group.
            if (this.transitionToStandard == null)
            {
                throw new ServiceLocalException(Strings.InvalidOrUnsupportedTimeZoneDefinition);
            }
    }
    //InternalToJson(service: ExchangeService): any { throw new Error("TimeZoneTransitionGroup.ts - InternalToJson : Not implemented."); }
    //LoadFromJson(jsonProperty: any, service: ExchangeService): any { throw new Error("TimeZoneTransitionGroup.ts - LoadFromJson : Not implemented."); }
    LoadFromXmlJsObject(reader: any): any { throw new Error("TimeZoneTransitionGroup.ts - LoadFromXmlJsObject : Not implemented."); }
    ReadAttributesFromXmlJsObject(reader: any): any { throw new Error("TimeZoneTransitionGroup.ts - ReadAttributesFromXml : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: any): boolean { throw new Error("TimeZoneTransitionGroup.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    Validate(): void {
        // There must be exactly one or two transitions in the group.
            if (this.transitions.length < 1 || this.transitions.length > 2)
            {
                throw new ServiceLocalException(Strings.InvalidOrUnsupportedTimeZoneDefinition);
            }

            // If there is only one transition, it must be of type TimeZoneTransition
            if (this.transitions.length == 1 && !(this.transitions[0] instanceof TimeZoneTransition))
            {
                throw new ServiceLocalException(Strings.InvalidOrUnsupportedTimeZoneDefinition);
            }

            // If there are two transitions, none of them should be of type TimeZoneTransition
            if (this.transitions.length == 2)
            {
                for (var transition of this.transitions)
                {
                    if (transition instanceof TimeZoneTransition)
                    {
                        throw new ServiceLocalException(Strings.InvalidOrUnsupportedTimeZoneDefinition);
                    }
                }
            }

            // All the transitions in the group must be to a period.
            for (var transition of this.transitions)
            {
                if (transition.TargetPeriod == null)
                {
                    throw new ServiceLocalException(Strings.InvalidOrUnsupportedTimeZoneDefinition);
                }
            }
    }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {writer.WriteAttributeValue(XmlAttributeNames.Id, this.Id); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        for (var transition of this.transitions)
            {
                transition.WriteToXml(writer);
            }
    }
    WriteToXml(writer: EwsServiceXmlWriter): void {super.WriteToXml(writer, XmlElementNames.TransitionsGroup); }
}

    
