import { DateTime } from "../../DateTime";
import { TimeSpan } from "../../TimeSpan";
import { TimeZoneInfo } from "../../TimeZoneInfo";
import { EwsServiceJsonReader } from "../../Core/EwsServiceJsonReader";
import { EwsServiceXmlWriter } from "../../Core/EwsServiceXmlWriter";
import { ExchangeService } from "../../Core/ExchangeService";
import { ServiceLocalException } from "../../Exceptions/ServiceLocalException";
import { StringHelper } from "../../ExtensionMethods";
import { Strings } from "../../Strings";
import { TimeZoneDefinition } from "./TimeZoneDefinition";
import { TimeZonePeriod } from "./TimeZonePeriod";
import { TimeZoneTransition } from "./TimeZoneTransition";
import { XmlAttributeNames } from "../../Core/XmlAttributeNames";
import { XmlElementNames } from "../../Core/XmlElementNames";

import { ComplexProperty } from "../ComplexProperty";
/**
 * @internal Represents a group of time zone period transitions.
 */
export class TimeZoneTransitionGroup extends ComplexProperty {

    /** @internal */
    static transitionTypes = [XmlElementNames.AbsoluteDateTransition, XmlElementNames.RecurringDayTransition, XmlElementNames.RecurringDateTransition, XmlElementNames.Transition];

    private timeZoneDefinition: TimeZoneDefinition;
    //private id: string;
    private transitions: TimeZoneTransition[] = [];
    private transitionToStandard: TimeZoneTransition;
    private transitionToDaylight: TimeZoneTransition;

    /**
     * @internal Gets a value indicating whether this group contains a transition to the Daylight period.
     * 
     * @value   *true* if this group contains a transition to daylight; otherwise, *false*.
     */
    get SupportsDaylight(): boolean {
        return this.transitions.length == 2;
    }

    /**
     * Gets the transition to the Daylight period.
     */
    private get TransitionToDaylight(): TimeZoneTransition {
        this.InitializeTransitions();
        return this.transitionToDaylight;
    }

    /**
     * Gets the transition to the Standard period.
     */
    private get TransitionToStandard(): TimeZoneTransition {
        this.InitializeTransitions();
        return this.transitionToStandard;
    }

    /**
     * @internal Gets or sets the id of this group.
     */
    Id: string;

    /**
     * @internal Gets the transitions in this group.
     */
    get Transitions(): TimeZoneTransition[] {
        return this.transitions;
    }

    /**
     * @internal Initializes a new instance of the **TimeZoneTransitionGroup** class.
     *
     * @param   {TimeZoneDefinition}    timeZoneDefinition   The time zone definition.
     * @param   {string}                id                   The Id of the new transition group.
     */
    constructor(timeZoneDefinition: TimeZoneDefinition);
    /**
     * @internal Initializes a new instance of the **TimeZoneTransitionGroup** class.
     *
     * @param   {TimeZoneDefinition}    timeZoneDefinition   The time zone definition.
     * @param   {string}                id                   The Id of the new transition group.
     */
    constructor(timeZoneDefinition: TimeZoneDefinition, id: string);
    constructor(timeZoneDefinition: TimeZoneDefinition, id?: string) {
        super();
        this.timeZoneDefinition = timeZoneDefinition;
        this.Id = id;
    }

    /**
     * @internal Creates a time zone adjustment rule.
     *
     * @param   {DateTime}   startDate   The start date of the adjustment rule.
     * @param   {DateTime}   endDate     The end date of the adjustment rule.
     * @return  {TimeZoneInfo.AdjustmentRule}   An TimeZoneInfo.AdjustmentRule.
     */
    CreateAdjustmentRule(startDate: DateTime, endDate: DateTime): TimeZoneInfo.AdjustmentRule {
        // If there is only one transition, we can't create an adjustment rule. We have to assume
        // that the base offset to UTC is unchanged.
        if (this.transitions.length == 1) {
            return null;
        }

        return TimeZoneInfo.AdjustmentRule.CreateAdjustmentRule(
            startDate.Date,
            endDate.Date,
            this.GetDaylightDelta(),
            this.TransitionToDaylight.CreateTransitionTime(),
            this.TransitionToStandard.CreateTransitionTime());

    }

    /**
     * @internal Gets the offset to UTC based on this group's transitions.
     * 
     * @returns {TimeZoneTransitionGroup.CustomTimeZoneCreateParams}  
     */
    GetCustomTimeZoneCreationParams(): TimeZoneTransitionGroup.CustomTimeZoneCreateParams {
        let result: TimeZoneTransitionGroup.CustomTimeZoneCreateParams = new TimeZoneTransitionGroup.CustomTimeZoneCreateParams();

        if (this.TransitionToDaylight != null) {
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


    /**
     * @internal Gets the delta offset for the daylight.
     * 
     * @returns {TimeSpan}  
     */
    GetDaylightDelta(): TimeSpan {
        if (this.SupportsDaylight) {
            // EWS returns a positive offset for time zones that are behind UTC, and
            // a negative one for time zones ahead of UTC. TimeZoneInfo does it the other
            // way around.
            return this.TransitionToStandard.TargetPeriod.Bias.Subtract(this.TransitionToDaylight.TargetPeriod.Bias);
        }
        else {
            return TimeSpan.Zero;
        }
    }

    /**
     * Initializes this transition group based on the specified asjustment rule.
     *
     * @param   {TimeZoneInfo.AdjustmentRule}   adjustmentRule   The adjustment rule to initialize from.
     * @param   {TimeZonePeriod}                standardPeriod   A reference to the pre-created standard period.
     */
    InitializeFromAdjustmentRule(adjustmentRule: TimeZoneInfo.AdjustmentRule, standardPeriod: TimeZonePeriod): void {
        let daylightPeriod: TimeZonePeriod = new TimeZonePeriod();

        // Generate an Id of the form "Daylight/2008"
        daylightPeriod.Id = StringHelper.Format(
            "{0}/{1}",
            TimeZonePeriod.DaylightPeriodId,
            adjustmentRule.DateStart.Year);
        daylightPeriod.Name = TimeZonePeriod.DaylightPeriodName;
        daylightPeriod.Bias = new TimeSpan(standardPeriod.Bias.TotalMilliseconds - adjustmentRule.DaylightDelta.TotalMilliseconds);

        this.timeZoneDefinition.Periods.Add(daylightPeriod.Id, daylightPeriod);

        this.transitionToDaylight = TimeZoneTransition.CreateTimeZoneTransition(
            this.timeZoneDefinition,
            daylightPeriod,
            adjustmentRule.DaylightTransitionStart);

        let standardPeriodToSet: TimeZonePeriod = new TimeZonePeriod();
        standardPeriodToSet.Id = StringHelper.Format(
            "{0}/{1}",
            standardPeriod.Id,
            adjustmentRule.DateStart.Year);
        standardPeriodToSet.Name = standardPeriod.Name;
        standardPeriodToSet.Bias = standardPeriod.Bias;
        this.timeZoneDefinition.Periods.Add(standardPeriodToSet.Id, standardPeriodToSet);

        this.transitionToStandard = TimeZoneTransition.CreateTimeZoneTransition(
            this.timeZoneDefinition,
            standardPeriodToSet,
            adjustmentRule.DaylightTransitionEnd);

        this.transitions.push(this.transitionToDaylight);
        this.transitions.push(this.transitionToStandard);
    }

    /**
     * Initializes the private members holding references to the transitions to the Daylight and Standard periods.
     */
    private InitializeTransitions(): void {
        if (this.transitionToStandard == null) {
            for (let transition of this.transitions) {
                if (transition.TargetPeriod.IsStandardPeriod || (this.transitions.length == 1)) {
                    this.transitionToStandard = transition;
                }
                else {
                    this.transitionToDaylight = transition;
                }
            }
        }

        // If we didn't find a Standard period, this is an invalid time zone group.
        if (this.transitionToStandard == null) {
            throw new ServiceLocalException(Strings.InvalidOrUnsupportedTimeZoneDefinition);
        }
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        if (jsObject[XmlElementNames.Id]) {
            this.Id = jsObject[XmlElementNames.Id];
        }

        for (let key in jsObject) {
            if (TimeZoneTransitionGroup.transitionTypes.indexOf(key) >= 0) {
                let transitions: string[] = EwsServiceJsonReader.ReadAsArray(jsObject, key);
                for (let item of transitions) {
                    let transition: TimeZoneTransition = TimeZoneTransition.Create(this.timeZoneDefinition, key);
                    transition.LoadFromXmlJsObject(item, service);
                    this.transitions.push(transition);
                }
            }
        }
    }

    /**
     * @internal Validates this transition group.
     */
    Validate(): void {
        // There must be exactly one or two transitions in the group.
        if (this.transitions.length < 1 || this.transitions.length > 2) {
            throw new ServiceLocalException(Strings.InvalidOrUnsupportedTimeZoneDefinition);
        }

        // If there is only one transition, it must be of type TimeZoneTransition
        if (this.transitions.length == 1 && !(this.transitions[0] instanceof TimeZoneTransition)) {
            throw new ServiceLocalException(Strings.InvalidOrUnsupportedTimeZoneDefinition);
        }

        // If there are two transitions, none of them should be of type TimeZoneTransition
        if (this.transitions.length == 2) {
            for (let transition of this.transitions) {
                try {
                    let type = (<any>transition.constructor).name;
                    //if (transition instanceof TimeZoneTransition) { // ref:  can not use due to prototype chain issue
                    if (type === "TimeZoneTransition") {
                        throw new ServiceLocalException(Strings.InvalidOrUnsupportedTimeZoneDefinition);
                    }
                } catch (error) {

                }

            }
        }

        // All the transitions in the group must be to a period.
        for (let transition of this.transitions) {
            if (transition.TargetPeriod == null) {
                throw new ServiceLocalException(Strings.InvalidOrUnsupportedTimeZoneDefinition);
            }
        }
    }

    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteAttributeValue(XmlAttributeNames.Id, this.Id);
    }

    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        for (let transition of this.transitions) {
            transition.WriteToXml(writer);
        }
    }

    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteToXml(writer: EwsServiceXmlWriter): void {
        super.WriteToXml(writer, XmlElementNames.TransitionsGroup);
    }
}

export module TimeZoneTransitionGroup {
    /**
     * @internal Represents custom time zone creation parameters.
     */
    export class CustomTimeZoneCreateParams {
        private baseOffsetToUtc: TimeSpan = null;
        private standardDisplayName: string = null;
        private daylightDisplayName: string = null;

        /**
         * @internal Gets or sets the base offset to UTC.
         */
        get BaseOffsetToUtc(): TimeSpan {
            return this.baseOffsetToUtc;
        }
        set BaseOffsetToUtc(value) {
            this.baseOffsetToUtc = value;
        }

        /**
         * @internal Gets or sets the display name of the standard period.
         */
        get StandardDisplayName(): string {
            return this.standardDisplayName;
        }
        set StandardDisplayName(value: string) {
            this.standardDisplayName = value;
        }

        /**
         * @internal Gets or sets the display name of the daylight period.
         */
        get DaylightDisplayName(): string {
            return this.daylightDisplayName;
        }
        set DaylightDisplayName(value: string) {
            this.daylightDisplayName = value;
        }

        /**
         * @internal Gets a value indicating whether the custom time zone should have a daylight period.
         * 
         * @value   *true* if the custom time zone should have a daylight period; otherwise, *false*.
         */
        get HasDaylightPeriod(): boolean {
            return !StringHelper.IsNullOrEmpty(this.daylightDisplayName);
        }

        /**
         * @internal Initializes a new instance of the **CustomTimeZoneCreateParams** class.
         */
        constructor() {
        }
    }
}
