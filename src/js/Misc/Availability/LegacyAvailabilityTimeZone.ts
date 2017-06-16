import { DateTime } from "../../DateTime";
import { DayOfTheWeek } from "../../Enumerations/DayOfTheWeek";
import { EwsServiceXmlWriter } from "../../Core/EwsServiceXmlWriter";
import { ExchangeService } from "../../Core/ExchangeService";
import { Guid } from "../../Guid";
import { LegacyAvailabilityTimeZoneTime } from "./LegacyAvailabilityTimeZoneTime";
import { TimeSpan } from "../../TimeSpan";
import { TimeZoneInfo } from "../../TimeZoneInfo";
import { XmlElementNames } from "../../Core/XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

import { ComplexProperty } from "../../ComplexProperties/ComplexProperty";
export class LegacyAvailabilityTimeZone extends ComplexProperty {
    private bias: TimeSpan = TimeSpan.Zero;
    private standardTime: LegacyAvailabilityTimeZoneTime;
    private daylightTime: LegacyAvailabilityTimeZoneTime;

    constructor();
    constructor(timeZoneInfo: TimeZoneInfo);
    constructor(timeZoneInfo: TimeZoneInfo = null) {
        super();
        //ref: skipping due to only called when server is 2007 sp1, 10 years later, may be not many cases to handle. 
        
        // if (timeZoneInfo && arguments.length === 1) {

        //     // Availability uses the opposite sign for the bias, e.g. if TimeZoneInfo.BaseUtcOffset = 480 than
        //     // SerializedTimeZone.Bias must be -480.
        //     this.bias = TimeSpan.FromMilliseconds(-timeZoneInfo.BaseUtcOffset.TotalMilliseconds);

        //     // To convert TimeZoneInfo into SerializableTimeZone, we need two time changes: one to Standard
        //     // time, the other to Daylight time. TimeZoneInfo holds a list of adjustment rules that represent
        //     // the different rules that govern time changes over the years. We need to grab one of those rules
        //     // to initialize this instance.
        //     let adjustmentRules: TimeZoneInfo.AdjustmentRule[] = timeZoneInfo.GetAdjustmentRules();

        //     if (adjustmentRules.length == 0) {
        //         // If there are no adjustment rules (which is the case for UTC), we have to come up with two
        //         // dummy time changes which both have a delta of zero and happen at two hard coded dates. This
        //         // simulates a time zone in which there are no time changes.
        //         this.daylightTime = new LegacyAvailabilityTimeZoneTime();
        //         this.daylightTime.Delta = TimeSpan.Zero;
        //         this.daylightTime.DayOrder = 1;
        //         this.daylightTime.DayOfTheWeek = DayOfTheWeek.Sunday;
        //         this.daylightTime.Month = 10;
        //         this.daylightTime.TimeOfDay = TimeSpan.FromHours(2);
        //         this.daylightTime.Year = 0;

        //         this.standardTime = new LegacyAvailabilityTimeZoneTime();
        //         this.standardTime.Delta = TimeSpan.Zero;
        //         this.standardTime.DayOrder = 1;
        //         this.standardTime.DayOfTheWeek = DayOfTheWeek.Sunday;
        //         this.standardTime.Month = 3;
        //         this.standardTime.TimeOfDay = TimeSpan.FromHours(2);
        //         this.daylightTime.Year = 0;
        //     }
        //     else {
        //         // When there is at least one adjustment rule, we need to grab the last one which is the
        //         // one that currently applies (TimeZoneInfo stores adjustment rules sorted from oldest to
        //         // most recent).
        //         let currentRule: TimeZoneInfo.AdjustmentRule = adjustmentRules[adjustmentRules.length - 1];

        //         this.standardTime = new LegacyAvailabilityTimeZoneTime(currentRule.DaylightTransitionEnd, TimeSpan.Zero);

        //         // Again, TimeZoneInfo and SerializableTime use opposite signs for bias.
        //         this.daylightTime = new LegacyAvailabilityTimeZoneTime(currentRule.DaylightTransitionStart, TimeSpan.FromMilliseconds(-currentRule.DaylightDelta.TotalMilliseconds));

        //     }
        // }
    }
    ToTimeZoneInfo(): TimeZoneInfo {
        if (this.daylightTime.HasTransitionTime &&
            this.standardTime.HasTransitionTime) {
            let adjustmentRule: TimeZoneInfo.AdjustmentRule = TimeZoneInfo.AdjustmentRule.CreateAdjustmentRule(
                DateTime.MinValue.Date,
                DateTime.MaxValue.Date,
                TimeSpan.FromMilliseconds(-this.daylightTime.Delta.TotalMilliseconds),
                this.daylightTime.ToTransitionTime(),
                this.standardTime.ToTransitionTime());

            return TimeZoneInfo.CreateCustomTimeZone(
                Guid.NewGuid().ToString(),
                TimeSpan.FromMilliseconds(-this.bias.TotalMilliseconds),
                "Custom time zone",
                "Standard time",
                "Daylight time",
                [adjustmentRule]);
        }
        else {
            // Create no DST time zone
            return TimeZoneInfo.CreateCustomTimeZone(
                Guid.NewGuid().ToString(),
                TimeSpan.FromMilliseconds(-this.bias.TotalMilliseconds),
                "Custom time zone",
                "Standard time");
        }
    }
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames.Bias:
                    this.bias = TimeSpan.FromMinutes(Number(jsonProperty[key]));
                    break;
                case XmlElementNames.StandardTime:
                    this.standardTime = new LegacyAvailabilityTimeZoneTime();
                    this.standardTime.LoadFromXmlJsObject(jsonProperty[key], service);
                    break;
                case XmlElementNames.DaylightTime:
                    this.daylightTime = new LegacyAvailabilityTimeZoneTime();
                    this.daylightTime.LoadFromXmlJsObject(jsonProperty[key], service);
                    break;
                default:
                    break;
            }
        }
    }
    /**@internal */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteElementValue(
            XmlNamespace.Types,
            XmlElementNames.Bias,
            this.bias.TotalMinutes);

        this.standardTime.WriteToXml(writer, XmlElementNames.StandardTime);
        this.daylightTime.WriteToXml(writer, XmlElementNames.DaylightTime);
    }
}
