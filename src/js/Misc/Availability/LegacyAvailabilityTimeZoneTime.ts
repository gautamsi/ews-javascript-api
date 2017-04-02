import { DayOfTheWeek } from "../../Enumerations/DayOfTheWeek";
import { ExchangeService } from "../../Core/ExchangeService";
import { TimeSpan } from "../../TimeSpan";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";
import { XmlElementNames } from "../../Core/XmlElementNames";
import { EwsUtilities } from "../../Core/EwsUtilities";
import { EwsServiceXmlWriter } from "../../Core/EwsServiceXmlWriter";
import { ComplexProperty } from "../../ComplexProperties/ComplexProperty";
export class LegacyAvailabilityTimeZoneTime extends ComplexProperty {
    get HasTransitionTime(): boolean { return this.Month >= 1 && this.Month <= 12; }
    Delta: TimeSpan = TimeSpan.Zero /*System.TimeSpan*/;
    TimeOfDay: TimeSpan = TimeSpan.Zero /*System.TimeSpan*/;
    DayOrder: number = 0;
    Month: number = 0;
    DayOfTheWeek: DayOfTheWeek = DayOfTheWeek.Sunday;
    Year: number = 0;
    // private delta: TimeSpan /*System.TimeSpan*/; //backing property not needed
    // private year: number;
    // private month: number;
    // private dayOrder: number;
    // private dayOfTheWeek: DayOfTheWeek;
    // private timeOfDay: TimeSpan /*System.TimeSpan*/;
    constructor() {
        super()
    }
    InternalToJson(service: ExchangeService): any { throw new Error("LegacyAvailabilityTimeZoneTime.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: any, service: ExchangeService): any { throw new Error("LegacyAvailabilityTimeZoneTime.ts - LoadFromJson : Not implemented."); }
    ToTransitionTime(): any { throw new Error("LegacyAvailabilityTimeZoneTime.ts - ToTransitionTime : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: any): boolean { throw new Error("LegacyAvailabilityTimeZoneTime.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames.Bias:
                    this.Delta = TimeSpan.FromMinutes(Number(jsonProperty[key]));
                    break;
                case XmlElementNames.Time:
                    this.TimeOfDay = new TimeSpan(jsonProperty[key]);// momentjs taks care of parsing TimeSpan.Parse(jsonProperty[key]);
                    break;
                case XmlElementNames.DayOrder:
                    this.DayOrder = Number(jsonProperty[key]);
                    break;
                case XmlElementNames.DayOfWeek:
                    this.DayOfTheWeek = <DayOfTheWeek><any>DayOfTheWeek[jsonProperty[key]];
                    break;
                case XmlElementNames.Month:
                    this.Month = Number(jsonProperty[key]);
                    break;
                case XmlElementNames.Year:
                    this.Year = Number(jsonProperty[key]);
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
            this.Delta.TotalMinutes);

        writer.WriteElementValue(
            XmlNamespace.Types,
            XmlElementNames.Time,
            EwsUtilities.TimeSpanToXSTime(this.TimeOfDay));

        writer.WriteElementValue(
            XmlNamespace.Types,
            XmlElementNames.DayOrder,
            this.DayOrder);

        writer.WriteElementValue(
            XmlNamespace.Types,
            XmlElementNames.Month,
            this.Month);

        // Only write DayOfWeek if this is a recurring time change
        if (this.Year == 0) {
            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.DayOfWeek,
                DayOfTheWeek[this.DayOfTheWeek]);  // needs to be string
        }

        // Only emit year if it's non zero, otherwise AS returns "Request is invalid"
        if (this.Year != 0) {
            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.Year,
                this.Year);
        }
    }
}