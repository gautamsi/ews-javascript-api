import { AbsoluteDateTransition } from "./AbsoluteDateTransition";
import { DateTime } from "../../DateTime";
import { Dictionary, DictionaryWithStringKey } from "../../AltDictionary";
import { EwsLogging } from "../../Core/EwsLogging";
import { EwsServiceJsonReader } from "../../Core/EwsServiceJsonReader";
import { EwsServiceXmlWriter } from "../../Core/EwsServiceXmlWriter";
import { ExchangeService } from "../../Core/ExchangeService";
import { ExchangeVersion } from "../../Enumerations/ExchangeVersion";
import { ServiceLocalException } from "../../Exceptions/ServiceLocalException";
import { StringHelper } from "../../ExtensionMethods";
import { Strings } from "../../Strings";
import { TimeSpan } from "../../TimeSpan";
import { TimeZoneInfo } from "../../TimeZoneInfo";
import { TimeZonePeriod } from "./TimeZonePeriod";
import { TimeZoneTransition } from "./TimeZoneTransition";
import { TimeZoneTransitionGroup } from "./TimeZoneTransitionGroup";
import { TraceFlags } from "../../Enumerations/TraceFlags";
import { XmlAttributeNames } from "../../Core/XmlAttributeNames";
import { XmlElementNames } from "../../Core/XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { ComplexProperty } from "../ComplexProperty";
/**
 * @internal Represents a time zone period as defined in the EWS schema.
 */
export class TimeZoneDefinition extends ComplexProperty {

    /**
     * Prefix for generated ids.
     */
    private static readonly NoIdPrefix: string = "NoId_";

    private periods: Dictionary<string, TimeZonePeriod> = new DictionaryWithStringKey<TimeZonePeriod>();
    private transitionGroups: Dictionary<string, TimeZoneTransitionGroup> = new DictionaryWithStringKey<TimeZoneTransitionGroup>();
    private transitions: TimeZoneTransition[] = [];

    /**
     * @internal Gets or sets the name of this time zone definition.
     */
    Name: string;

    /**
     * @internal Gets or sets the Id of this time zone definition.
     */
    Id: string;

    /**
     * @internal Gets the periods associated with this time zone definition, indexed by Id.
     */
    get Periods(): Dictionary<string, TimeZonePeriod> {
        return this.periods;
    }

    /**
     * @internal Gets the transition groups associated with this time zone definition, indexed by Id.
     */
    get TransitionGroups(): Dictionary<string, TimeZoneTransitionGroup> {
        return this.transitionGroups;
    }

    /**
     * @internal Initializes a new instance of the **TimeZoneDefinition** class.
     */
    constructor();
    /**
     * @internal Initializes a new instance of the **TimeZoneDefinition** class.
     *
     * @param   {TimeZoneInfo}   timeZoneInfo   The time zone info used to initialize this definition.
     */
    constructor(timeZoneInfo: TimeZoneInfo);
    constructor(timeZoneInfo: TimeZoneInfo = null) {
        super()
        if (timeZoneInfo != null && typeof timeZoneInfo !== 'undefined') {
            this.Id = timeZoneInfo.Id;
            this.Name = timeZoneInfo.DisplayName;

            // TimeZoneInfo only supports one standard period, which bias is the time zone's base
            // offset to UTC.
            let standardPeriod: TimeZonePeriod = new TimeZonePeriod();
            standardPeriod.Id = TimeZonePeriod.StandardPeriodId;
            standardPeriod.Name = TimeZonePeriod.StandardPeriodName;
            standardPeriod.Bias = new TimeSpan(-timeZoneInfo.BaseUtcOffset.TotalMilliseconds);

            //ref: very complex to calculate timezone rules and transitions. it works without adding those elements as they are optional, need to find scenario where it is mandatory.

            // let adjustmentRules: TimeZoneInfo.AdjustmentRule[] = []; // = timeZoneInfo.GetAdjustmentRules();

            // let transitionToStandardPeriod: TimeZoneTransition = new TimeZoneTransition(this, standardPeriod);

            // if (adjustmentRules.length == 0) {
            //     this.periods.Add(standardPeriod.Id, standardPeriod);

            //     // If the time zone info doesn't support Daylight Saving Time, we just need to
            //     // create one transition to one group with one transition to the standard period.
            //     let transitionGroup: TimeZoneTransitionGroup = new TimeZoneTransitionGroup(this, "0");
            //     transitionGroup.Transitions.push(transitionToStandardPeriod);

            //     this.transitionGroups.Add(transitionGroup.Id, transitionGroup);

            //     let initialTransition: TimeZoneTransition = new TimeZoneTransition(this, transitionGroup);

            //     this.transitions.push(initialTransition);
            // }
            // else {
            //     for (let i = 0; i < adjustmentRules.length; i++) {
            //         let transitionGroup: TimeZoneTransitionGroup = new TimeZoneTransitionGroup(this, this.transitionGroups.Count.toString());
            //         transitionGroup.InitializeFromAdjustmentRule(adjustmentRules[i], standardPeriod);

            //         this.transitionGroups.Add(transitionGroup.Id, transitionGroup);

            //         let transition: TimeZoneTransition;

            //         if (i == 0) {
            //             // If the first adjustment rule's start date in not undefined (DateTime.MinValue)
            //             // we need to add a dummy group with a single, simple transition to the Standard
            //             // period and a group containing the transitions mapping to the adjustment rule.
            //             if (adjustmentRules[i].DateStart > DateTime.MinValue.Date) {
            //                 let transitionToDummyGroup: TimeZoneTransition = new TimeZoneTransition(
            //                     this,
            //                     this.CreateTransitionGroupToPeriod(standardPeriod));

            //                 this.transitions.push(transitionToDummyGroup);

            //                 let absoluteDateTransition: AbsoluteDateTransition = new AbsoluteDateTransition(this, transitionGroup);
            //                 absoluteDateTransition.DateTime = adjustmentRules[i].DateStart;

            //                 transition = absoluteDateTransition;
            //                 this.periods.Add(standardPeriod.Id, standardPeriod);
            //             }
            //             else {
            //                 transition = new TimeZoneTransition(this, transitionGroup);
            //             }
            //         }
            //         else {
            //             let absoluteDateTransition: AbsoluteDateTransition = new AbsoluteDateTransition(this, transitionGroup);
            //             absoluteDateTransition.DateTime = adjustmentRules[i].DateStart;

            //             transition = absoluteDateTransition;
            //         }

            //         this.transitions.push(transition);
            //     }

            //     // If the last adjustment rule's end date is not undefined (DateTime.MaxValue),
            //     // we need to create another absolute date transition that occurs the date after
            //     // the last rule's end date. We target this additional transition to a group that
            //     // contains a single simple transition to the Standard period.
            //     let lastAdjustmentRuleEndDate: DateTime = adjustmentRules[adjustmentRules.length - 1].DateEnd;

            //     if (lastAdjustmentRuleEndDate < DateTime.MaxValue.Date) {
            //         let transitionToDummyGroup: AbsoluteDateTransition = new AbsoluteDateTransition(
            //             this,
            //             this.CreateTransitionGroupToPeriod(standardPeriod));
            //         transitionToDummyGroup.DateTime = lastAdjustmentRuleEndDate.AddDays(1);

            //         this.transitions.push(transitionToDummyGroup);
            //     }
            // }
        }
    }

    /**
     * Compares the transitions.
     *
     * @param   {TimeZoneTransition}   x   The first transition.
     * @param   {TimeZoneTransition}   y   The second transition.
     * @return  {number}       A negative number if x is less than y, 0 if x and y are equal, a positive number if x is greater than y.
     */
    private CompareTransitions(x: TimeZoneTransition, y: TimeZoneTransition): number {
        if (x == y) {
            return 0;
        }
        else if (x instanceof TimeZoneTransition) {
            return -1;
        }
        else if (y instanceof TimeZoneTransition) {
            return 1;
        }
        else {
            let firstTransition: AbsoluteDateTransition = <AbsoluteDateTransition>x;
            let secondTransition: AbsoluteDateTransition = <AbsoluteDateTransition>y;

            return DateTime.Compare(firstTransition.DateTime, secondTransition.DateTime);
        }
    }

    /**
     * Adds a transition group with a single transition to the specified period.
     *
     * @param   {TimeZonePeriod}   timeZonePeriod   The time zone period.
     * @return  {TimeZoneTransitionGroup}           A TimeZoneTransitionGroup.
     */
    private CreateTransitionGroupToPeriod(timeZonePeriod: TimeZonePeriod): TimeZoneTransitionGroup {
        let transitionToPeriod: TimeZoneTransition = new TimeZoneTransition(this, timeZonePeriod);

        let transitionGroup: TimeZoneTransitionGroup = new TimeZoneTransitionGroup(this, this.transitionGroups.Count.toString());
        transitionGroup.Transitions.push(transitionToPeriod);

        this.transitionGroups.Add(transitionGroup.Id, transitionGroup);

        return transitionGroup;
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {

        for (var key in jsObject) {
            switch (key) {
                case XmlAttributeNames.Name:
                    this.Name = jsObject[key];
                    break;
                case XmlAttributeNames.Id:
                    this.Id = jsObject[key];
                    break;
                case XmlElementNames.Periods:
                    var jsperiods: any[] = EwsServiceJsonReader.ReadAsArray(jsObject[key], XmlElementNames.Period);
                    for (var jsPeriod of jsperiods) {
                        var period: TimeZonePeriod = new TimeZonePeriod();
                        period.LoadFromXmlJsObject(jsPeriod, service);

                        // OM:1648848 Bad timezone data from clients can include duplicate rules
                        // for one year, with duplicate ID. In that case, let the first one win.
                        if (!this.periods.containsKey(period.Id)) {
                            this.periods.Add(period.Id, period);
                        }
                        else {
                            service.TraceMessage(
                                TraceFlags.EwsTimeZones,
                                StringHelper.Format(
                                    "An entry with the same key (Id) '{0}' already exists in Periods. Cannot add another one. Existing entry: [Name='{1}', Bias='{2}']. Entry to skip: [Name='{3}', Bias='{4}'].",
                                    period.Id,
                                    this.Periods.get(period.Id).Name,
                                    this.Periods.get(period.Id).Bias,
                                    period.Name,
                                    period.Bias));
                        }
                    }
                    break;

                case XmlElementNames.TransitionsGroups:
                    var arrayOfTransitionsType: any[] = EwsServiceJsonReader.ReadAsArray(jsObject[key], XmlElementNames.TransitionsGroup);
                    for (var arrayOfTransitionsTypeInstance of arrayOfTransitionsType) {
                        var transitionGroup: TimeZoneTransitionGroup = new TimeZoneTransitionGroup(this);
                        transitionGroup.LoadFromXmlJsObject(arrayOfTransitionsTypeInstance, service);

                        this.transitionGroups.addUpdate(transitionGroup.Id, transitionGroup);
                    }
                    break;

                case XmlElementNames.Transitions:

                    for (let _key in jsObject[key]) {
                        if (TimeZoneTransitionGroup.transitionTypes.indexOf(_key) >= 0) {
                            let transitions: string[] = EwsServiceJsonReader.ReadAsArray(jsObject[key], _key);
                            for (let item of transitions) {
                                let transition: TimeZoneTransition = TimeZoneTransition.Create(this, _key);
                                transition.LoadFromXmlJsObject(item, service);
                                this.transitions.push(transition);
                            }
                        }
                    }
                    break;
                default:
                    break;
            }
        }

        // EWS can return a TimeZone definition with no Id. Generate a new Id in this case.
        if (StringHelper.IsNullOrEmpty(this.Id)) {
            let nameValue: string = StringHelper.IsNullOrEmpty(this.Name) ? StringHelper.Empty : this.Name;
            //this.Id = TimeZoneDefinition.NoIdPrefix + Math.abs(nameValue.GetHashCode()).ToString();
            this.Id = TimeZoneDefinition.NoIdPrefix + nameValue;
        }

        this.transitions.sort(this.CompareTransitions);
    }

    /**
     * @internal Converts this time zone definition into a TimeZoneInfo structure.
     *
     * @param   {ExchangeService}   service   The service.
     * @return  {TimeZoneInfo}      A TimeZoneInfo representing the same time zone as this definition.
     */
    ToTimeZoneInfo(service?: ExchangeService, parse: boolean = false): TimeZoneInfo {
        this.Validate();

        if (!parse) {
            try {
                //ref: skipped creation based on server data, directly creating using TimeZone Mapping data. complex to translate Windows TimeZoneInfo subclasses to javascript.
                return TimeZoneInfo.FindSystemTimeZoneById(this.Id);
            }
            catch {
                EwsLogging.DebugLog(`Could not resolve a system timezone with Id "${this.Id}"`);
            }
        }
        let result: TimeZoneInfo;

        // Retrieve the base offset to UTC, standard and daylight display names from
        // the last transition group, which is the one that currently applies given that
        // transitions are ordered chronologically.
        let creationParams: TimeZoneTransitionGroup.CustomTimeZoneCreateParams =
            this.transitions[this.transitions.length - 1].TargetGroup.GetCustomTimeZoneCreationParams();

        let adjustmentRules: TimeZoneInfo.AdjustmentRule[] = [];

        let startDate: DateTime = DateTime.MinValue;
        let endDate: DateTime;
        let effectiveEndDate: DateTime;

        for (let i = 0; i < this.transitions.length; i++) {
            if (i < this.transitions.length - 1) {
                endDate = (this.transitions[i + 1] as AbsoluteDateTransition).DateTime;
                effectiveEndDate = endDate.AddDays(-1);
            }
            else {
                endDate = DateTime.MaxValue;
                effectiveEndDate = endDate;
            }

            // OM:1648848 Due to bad timezone data from clients the 
            // startDate may not always come before the effectiveEndDate
            if (startDate < effectiveEndDate) {
                let adjustmentRule: TimeZoneInfo.AdjustmentRule = this.transitions[i].TargetGroup.CreateAdjustmentRule(startDate, effectiveEndDate);

                if (adjustmentRule != null) {
                    adjustmentRules.push(adjustmentRule);
                }

                startDate = endDate;
            }
            else {
                // service.TraceMessage(
                //     TraceFlags.EwsTimeZones,
                //         string.Format(
                //             "The startDate '{0}' is not before the effectiveEndDate '{1}'. Will skip creating adjustment rule.",
                //             startDate,
                //             effectiveEndDate));
            }
        }

        if (adjustmentRules.length == 0) {
            // If there are no adjustment rule, the time zone does not support Daylight
            // saving time.
            result = TimeZoneInfo.CreateCustomTimeZone(
                this.Id,
                creationParams.BaseOffsetToUtc,
                this.Name,
                creationParams.StandardDisplayName);
        }
        else {
            result = TimeZoneInfo.CreateCustomTimeZone(
                this.Id,
                creationParams.BaseOffsetToUtc,
                this.Name,
                creationParams.StandardDisplayName,
                creationParams.DaylightDisplayName,
                adjustmentRules);
        }

        return result;
    }

    /**
     * @internal Validates this time zone definition.
     */
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
        for (let transition of this.transitions) {
            //Type transitionType = transition.GetType();

            if (!(transition instanceof TimeZoneTransition) && !(<any>transition instanceof AbsoluteDateTransition)) {
                throw new ServiceLocalException(Strings.InvalidOrUnsupportedTimeZoneDefinition);
            }

            if (transition.TargetGroup == null) {
                throw new ServiceLocalException(Strings.InvalidOrUnsupportedTimeZoneDefinition);
            }
        }

        // All transition groups must be valid.
        for (let transitionGroup of this.transitionGroups.Values) {
            transitionGroup.Validate();
        }
    }

    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        // The Name attribute is only supported in Exchange 2010 and above.
        if (writer.Service.RequestedServerVersion != ExchangeVersion.Exchange2007_SP1) {
            writer.WriteAttributeValue(XmlAttributeNames.Name, this.Name);
        }

        writer.WriteAttributeValue(XmlAttributeNames.Id, this.Id);
    }

    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        // We only emit the full time zone definition against Exchange 2010 servers and above.
        if (writer.Service.RequestedServerVersion != ExchangeVersion.Exchange2007_SP1) {
            if (this.periods.Count > 0) {
                writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.Periods);

                for (let keyValuePair of this.periods.Items) {
                    keyValuePair.value.WriteToXml(writer);
                }

                writer.WriteEndElement(); // Periods
            }

            if (this.transitionGroups.Count > 0) {
                writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.TransitionsGroups);

                for (let transitionPair of this.transitionGroups.Items) {
                    transitionPair.value.WriteToXml(writer);
                }

                writer.WriteEndElement(); // TransitionGroups
            }

            if (this.transitions.length > 0) {
                writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.Transitions);

                for (let transition of this.transitions) {
                    transition.WriteToXml(writer);
                }

                writer.WriteEndElement(); // Transitions
            }
        }
    }

    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     * @param   {string}                xmlElementName   Name of the XML element.
     */
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName?: string): void {
        super.WriteToXml(writer, xmlElementName || XmlElementNames.TimeZoneDefinition);
    }
}
