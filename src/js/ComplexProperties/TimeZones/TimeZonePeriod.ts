import {ExchangeService} from "../../Core/ExchangeService";
import {TimeSpan} from "../../DateTime";
import {XmlAttributeNames} from "../../Core/XmlAttributeNames";
import {XmlElementNames} from "../../Core/XmlElementNames";
import {EwsUtilities} from "../../Core/EwsUtilities";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
import {ComplexProperty} from "../ComplexProperty";
export class TimeZonePeriod extends ComplexProperty {
    static StandardPeriodId: string = "Std";
    static StandardPeriodName: string = "Standard";
    static DaylightPeriodId: string = "Dlt";
    static DaylightPeriodName: string = "Daylight";
    get IsStandardPeriod(): boolean {
        return this.Name.toUpperCase() === TimeZonePeriod.StandardPeriodName.toUpperCase();
        // return string.Compare(
        //     this.name,
        //     TimeZonePeriod.StandardPeriodName,
        //     StringComparison.OrdinalIgnoreCase) == 0;
    }
    Bias: TimeSpan;
    Name: string;
    Id: string;
    // private bias: TimeSpan; backing property not needed 
    // private name: string;
    // private id: string;
    constructor() {
        super()
    }
    //InternalToJson(service: ExchangeService): any { throw new Error("TimeZonePeriod.ts - InternalToJson : Not implemented."); }
    //LoadFromJson(jsonProperty: any, service: ExchangeService): any { throw new Error("TimeZonePeriod.ts - LoadFromJson : Not implemented."); }
    LoadFromXmlJsObject(reader: any): any { throw new Error("TimeZonePeriod.ts - LoadFromXmlJsObject : Not implemented."); }
    //ReadAttributesFromXmlJsObject(reader: any): any { throw new Error("TimeZonePeriod.ts - ReadAttributesFromXml : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteAttributeValue(XmlAttributeNames.Bias, EwsUtilities.TimeSpanToXSDuration(this.Bias));
        writer.WriteAttributeValue(XmlAttributeNames.Name, this.Name);
        writer.WriteAttributeValue(XmlAttributeNames.Id, this.Id);
    }
    WriteToXml(writer: EwsServiceXmlWriter): void { super.WriteToXml(writer, XmlElementNames.Period); }
}