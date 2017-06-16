import { EwsServiceXmlWriter } from "../Core/EwsServiceXmlWriter";
import { EwsUtilities } from "../Core/EwsUtilities";
import { ExchangeService } from "../Core/ExchangeService";
import { StringHelper } from "../ExtensionMethods";
import { TimeChange } from "./TimeChange";
import { TimeSpan } from "../TimeSpan";
import { TimeZoneInfo } from "../TimeZoneInfo";
import { XmlAttributeNames } from "../Core/XmlAttributeNames";
import { XmlElementNames } from "../Core/XmlElementNames";
import { XmlNamespace } from "../Enumerations/XmlNamespace";

import { ComplexProperty } from "./ComplexProperty";
/**
 * @internal Represents a time zone in which a meeting is defined.
 * @sealed
 */
export class MeetingTimeZone extends ComplexProperty {

    private name: string = null;
    private baseOffset: TimeSpan = null;
    private standard: TimeChange = null;
    private daylight: TimeChange = null;

    /**
     * Gets or sets the name of the time zone.
     */
    get Name(): string {
        return this.name;
    }
    set Name(value: string) {
        this.SetFieldValue<string>({ getValue: () => this.name, setValue: (fieldValue) => { this.name = fieldValue } }, value);
    }

    /**
     * Gets or sets the base offset of the time zone from the UTC time zone.
     */
    get BaseOffset(): TimeSpan {
        return this.baseOffset;
    }
    set BaseOffset(value: TimeSpan) {
        this.SetFieldValue<TimeSpan>({ getValue: () => this.baseOffset, setValue: (fieldValue) => { this.baseOffset = fieldValue } }, value);
    }

    /**
     * Gets or sets a TimeChange defining when the time changes to Standard Time.
     */
    get Standard(): TimeChange {
        return this.standard;
    }
    set Standard(value: TimeChange) {
        this.SetFieldValue<TimeChange>({ getValue: () => this.standard, setValue: (fieldValue) => { this.standard = fieldValue } }, value);
    }

    /**
     * Gets or sets a TimeChange defining when the time changes to Daylight Saving Time.
     */
    get Daylight(): TimeChange {
        return this.daylight;
    }
    set Daylight(value: TimeChange) {
        this.SetFieldValue<TimeChange>({ getValue: () => this.daylight, setValue: (fieldValue) => { this.daylight = fieldValue } }, value);
    }

    /**
     * Initializes a new instance of the **MeetingTimeZone** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **MeetingTimeZone** class.
     *
     * @param   {TimeZoneInfo}   timeZone   The time zone used to initialize this instance.
     */
    constructor(timeZone: TimeZoneInfo);
    /**
     * Initializes a new instance of the **MeetingTimeZone** class.
     *
     * @param   {string}   name   The name of the time zone.
     */
    constructor(name: string);
    constructor(timeZoneOrName: TimeZoneInfo | string = null) {
        super();
        if (arguments.length === 1) {
            if (timeZoneOrName instanceof TimeZoneInfo) {
                // Unfortunately, MeetingTimeZone does not support all the time transition types
                // supported by TimeZoneInfo. That leaves us unable to accurately convert TimeZoneInfo
                // into MeetingTimeZone. So we don't... Instead, we emit the time zone's Id and
                // hope the server will find a match (which it should).
                this.Name = timeZoneOrName.Id;
            }
            else {
                this.name = timeZoneOrName;
            }
        }
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.    
     */
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void {
        for (let key in jsonProperty) {
            switch (key) {
                case XmlElementNames.BaseOffset:
                    this.baseOffset = EwsUtilities.XSDurationToTimeSpan(jsonProperty[key]);
                    break;
                case XmlElementNames.Standard:
                    this.standard = new TimeChange();
                    this.standard.LoadFromXmlJsObject(jsonProperty[key], service);
                    break;
                case XmlElementNames.Daylight:
                    this.daylight = new TimeChange();
                    this.daylight.LoadFromXmlJsObject(jsonProperty[key], service);
                    break;
                case XmlAttributeNames.TimeZoneName:
                    this.name = jsonProperty[key];
                    break;
                default:
                    break;
            }
        }
    }

    /**
     * @internal Converts this meeting time zone into a TimeZoneInfo structure.
    */
    ToTimeZoneInfo(): TimeZoneInfo {
        // MeetingTimeZone.ToTimeZoneInfo throws ArgumentNullException if name is null
        // TimeZoneName is optional, may not show in the response.
        if (StringHelper.IsNullOrEmpty(this.Name)) {
            return null;
        }

        let result: TimeZoneInfo = null;

        try {
            result = TimeZoneInfo.FindSystemTimeZoneById(this.Name);
        }
        catch (exception) {
            // Could not find a time zone with that Id on the local system.
        }

        // Again, we cannot accurately convert MeetingTimeZone into TimeZoneInfo
        // because TimeZoneInfo doesn't support absolute date transitions. So if
        // there is no system time zone that has a matching Id, we return null.
        return result;
    }

    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteAttributeValue(XmlAttributeNames.TimeZoneName, this.Name);
    }

    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        if (this.BaseOffset) {
            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.BaseOffset,
                EwsUtilities.TimeSpanToXSDuration(this.BaseOffset));
        }

        if (this.Standard != null) {
            this.Standard.WriteToXml(writer, XmlElementNames.Standard);
        }

        if (this.Daylight != null) {
            this.Daylight.WriteToXml(writer, XmlElementNames.Daylight);
        }
    }
}
