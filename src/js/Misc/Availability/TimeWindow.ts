import { DateTime, TimeSpan } from "../../DateTime";
import { EwsServiceXmlWriter } from "../../Core/EwsServiceXmlWriter";
import { ExchangeService } from "../../Core/ExchangeService";
import { ISelfValidate } from "../../Interfaces/ISelfValidate";
import { Strings } from "../../Strings";
import { XmlElementNames } from "../../Core/XmlElementNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";
import { ArgumentException } from "../../Exceptions/ArgumentException";

/**
 * Represents a time period.
 * 
 * @sealed
 */
export class TimeWindow implements ISelfValidate {

    /**
     * Gets or sets the start date and time.
     */
    StartTime: DateTime;

    /**
     * Gets or sets the end date and time.
     */
    EndTime: DateTime;

    /**
     * @internal Gets the duration.
     */
    get Duration(): TimeSpan {
        return this.StartTime.Difference(this.EndTime);
    }

    /**
     * @internal Initializes a new instance of the **TimeWindow** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **TimeWindow** class.
     *
     * @param   {DateTime}   startTime   The start date and time.
     * @param   {DateTime}   endTime     The end date and time.
     */
    constructor(startTime: DateTime, endTime: DateTime);
    constructor(startTime: DateTime = null, endTime: DateTime = null) {
        this.StartTime = startTime;
        this.EndTime = endTime;
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     */
    LoadFromXmlJsObject(jsonObject: any, service: ExchangeService): void {
        this.StartTime = service.ConvertUniversalDateTimeStringToLocalDateTime(jsonObject[XmlElementNames.StartTime]);
        this.EndTime = service.ConvertUniversalDateTimeStringToLocalDateTime(jsonObject[XmlElementNames.EndTime]);
    }

    /**
     * Validates this instance.
     * 
     * ISelfValidate.Validate
     */
    Validate(): void {
        if (this.StartTime.CompareTo(this.EndTime) >= 0) {
            throw new ArgumentException(Strings.TimeWindowStartTimeMustBeGreaterThanEndTime);
        }
    }

    /**
     * Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {string}                xmlElementName   Name of the XML element.
     * @param   {any}                   startTime        The start time.
     * @param   {any}                   endTime          The end time.
     */
    private static WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string, startTime: any, endTime: any): void {
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

    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {string}                xmlElementName   Name of the XML element.
     */
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): void {
        TimeWindow.WriteToXml(
            writer,
            xmlElementName,
            this.StartTime,
            this.EndTime);
    }

    /**
     * @internal Writes to XML without scoping the dates and without emitting times.
     *
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {string}                xmlElementName   Name of the XML element.
     */
    WriteToXmlUnscopedDatesOnly(writer: EwsServiceXmlWriter, xmlElementName: string): void {
        const DateOnlyFormat: string = "YYYY-MM-DDT00:00:00";

        TimeWindow.WriteToXml(
            writer,
            xmlElementName,
            this.StartTime.Format(DateOnlyFormat),// CultureInfo.InvariantCulture),
            this.EndTime.Format(DateOnlyFormat)// CultureInfo.InvariantCulture));
        );
    }
}


