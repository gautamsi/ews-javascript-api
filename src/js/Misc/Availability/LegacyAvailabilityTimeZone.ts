import { LegacyAvailabilityTimeZoneTime } from "./LegacyAvailabilityTimeZoneTime";
import { TimeSpan } from "../../DateTime";
import { ExchangeService } from "../../Core/ExchangeService";
import { DayOfTheWeek } from "../../Enumerations/DayOfTheWeek";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";
import { XmlElementNames } from "../../Core/XmlElementNames";
import { EwsServiceXmlWriter } from "../../Core/EwsServiceXmlWriter";
import { ComplexProperty } from "../../ComplexProperties/ComplexProperty";
export class LegacyAvailabilityTimeZone extends ComplexProperty {
    private bias: any /*System.TimeSpan*/;
    private standardTime: LegacyAvailabilityTimeZoneTime;
    private daylightTime: LegacyAvailabilityTimeZoneTime;
    constructor();
    constructor(timeZone: any /** MomentTimezone */);
    constructor(timeZone?: any /** MomentTimezone */) {
        super();
        if (typeof timeZone !== 'undefined') {

            this.daylightTime = new LegacyAvailabilityTimeZoneTime();
            this.daylightTime.Delta = TimeSpan.Zero;
            this.daylightTime.DayOrder = 1;
            this.daylightTime.DayOfTheWeek = DayOfTheWeek.Sunday;
            this.daylightTime.Month = 10;
            this.daylightTime.TimeOfDay = TimeSpan.FromHours(2);
            this.daylightTime.Year = 0;

            this.standardTime = new LegacyAvailabilityTimeZoneTime();
            this.standardTime.Delta = TimeSpan.Zero;
            this.standardTime.DayOrder = 1;
            this.standardTime.DayOfTheWeek = DayOfTheWeek.Sunday;
            this.standardTime.Month = 3;
            this.standardTime.TimeOfDay = TimeSpan.FromHours(2);
            this.daylightTime.Year = 0;
        }
    }
    InternalToJson(service: ExchangeService): any { throw new Error("LegacyAvailabilityTimeZone.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: any, service: ExchangeService): any { throw new Error("LegacyAvailabilityTimeZone.ts - LoadFromJson : Not implemented."); }
    ToTimeZoneInfo(): any /*System.TimeZoneInfo*/ { throw new Error("LegacyAvailabilityTimeZone.ts - ToTimeZoneInfo : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: any): boolean { throw new Error("LegacyAvailabilityTimeZone.ts - TryReadElementFromXmlJsObject : Not implemented."); }
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
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteElementValue(
            XmlNamespace.Types,
            XmlElementNames.Bias,
            this.bias.TotalMinutes);

        this.standardTime.WriteToXml(writer, XmlElementNames.StandardTime);
        this.daylightTime.WriteToXml(writer, XmlElementNames.DaylightTime);
    }
}


