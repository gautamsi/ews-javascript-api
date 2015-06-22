import {XmlNamespace} from "../../Enumerations/XmlNamespace";
import {XmlElementNames} from "../../Core/XmlElementNames";
import {ExchangeService} from "../../Core/ExchangeService";
import {Strings} from "../../Strings";
import {TimeSpan, DateTime} from "../../DateTime";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
export class TimeWindow {
    StartTime: DateTime;
    EndTime: DateTime;
    get Duration(): TimeSpan { return this.StartTime.Difference(this.EndTime); }
    //private startTime: Date;
    //private endTime: Date;
    
    constructor();
    constructor(startTime: DateTime, endTime: DateTime);
    constructor(startTime?: DateTime, endTime?: DateTime) {
        this.StartTime = startTime;
        this.EndTime = endTime;
    }
    
    //InternalToJson(service: ExchangeService): any { throw new Error("TimeWindow.ts - InternalToJson : Not implemented."); }
    //LoadFromJson(jsonObject: any, service: ExchangeService): any { throw new Error("TimeWindow.ts - LoadFromJson : Not implemented."); }
    LoadFromXmlJsObject(jsonObject: any, service: ExchangeService): void {
        this.StartTime = service.ConvertUniversalDateTimeStringToLocalDateTime(jsonObject[XmlElementNames.StartTime]);
        this.EndTime = service.ConvertUniversalDateTimeStringToLocalDateTime(jsonObject[XmlElementNames.EndTime]);
    }
    //LoadFromXml(reader: any): any { throw new Error("TimeWindow.ts - LoadFromXml : Not implemented."); }
    Validate(): void {
        if (this.StartTime.CompareTo(this.EndTime) >= 0) {
            throw new Error(Strings.TimeWindowStartTimeMustBeGreaterThanEndTime);//ArgumentException
        }
    }
    //WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any{ throw new Error("TimeWindow.ts - WriteToXml : Not implemented.");}
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string, startTime: any = this.StartTime, endTime: any = this.EndTime): void {
        writer.WriteStartElement(XmlNamespace.Types, xmlElementName);

        writer.WriteElementValue(
            XmlNamespace.Types,
            XmlElementNames.StartTime,
            startTime);

        writer.WriteElementValue(
            XmlNamespace.Types,
            XmlElementNames.EndTime,
            endTime);

        writer.WriteEndElement(); // xmlElementName
    }
    WriteToXmlUnscopedDatesOnly(writer: EwsServiceXmlWriter, xmlElementName: string): void {
        const DateOnlyFormat: string = "YYYY-MM-DDT00:00:00";

        this.WriteToXml(
            writer,
            xmlElementName,
            this.StartTime.Format(DateOnlyFormat),// CultureInfo.InvariantCulture),
            this.EndTime.Format(DateOnlyFormat)// CultureInfo.InvariantCulture));
            );
    }
}


