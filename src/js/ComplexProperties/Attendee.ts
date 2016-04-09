import {DateTime} from "../DateTime";
import {EwsLogging} from "../Core/EwsLogging";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {EwsUtilities} from "../Core/EwsUtilities";
import {ExchangeService} from "../Core/ExchangeService";
import {MeetingResponseType} from "../Enumerations/MeetingResponseType";
import {XmlElementNames} from "../Core/XmlElementNames";

import {EmailAddress} from "./EmailAddress";
/**
 * Represents an attendee to a meeting.
 */
export class Attendee extends EmailAddress {

    private responseType: MeetingResponseType;
    private lastResponseTime: DateTime;

    /**
     * Gets the type of response the attendee gave to the meeting invitation it received.
     */
    get ResponseType(): MeetingResponseType {
        return this.responseType;
    }

    /**
     * Gets the date and time when the attendee last responded to a meeting invitation or update.
     */
    get LastResponseTime(): DateTime {
        return this.lastResponseTime;
    }

    /**
     * Initializes a new instance of the **Attendee** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **Attendee** class.
     *
     * @param   {string}   name          The name used to initialize the Attendee.
     */
    constructor(smtpAddress: string);
    /**
     * Initializes a new instance of the **Attendee** class.
     *
     * @param   {string}   name          The name used to initialize the Attendee.
     * @param   {string}   smtpAddress   The SMTP address used to initialize the Attendee.
     */
    constructor(name: string, smtpAddress: string);
    /**
     * Initializes a new instance of the **Attendee** class.
     *
     * @param   {string}   name          The name used to initialize the Attendee.
     * @param   {string}   smtpAddress   The SMTP address used to initialize the Attendee.
     * @param   {string}   routingType   The routing type used to initialize the Attendee.
     */
    constructor(name: string, smtpAddress: string, routingType: string);
    /**
     * Initializes a new instance of the **Attendee** class from an EmailAddress.
     *
     * @param   {EmailAddress}   mailbox   The mailbox used to initialize the Attendee.
     */
    constructor(mailbox: EmailAddress);
    constructor(smtpAddressOrNameOrMailbox?: string | EmailAddress, smtpAddress?: string, routingType?: string) {
        switch (arguments.length) {
            case 1:
                super(smtpAddressOrNameOrMailbox);
                if (typeof smtpAddressOrNameOrMailbox === 'string') {
                    EwsUtilities.ValidateParam(smtpAddress, "smtpAddress");
                }
                break;
            case 2:
                super(<string>smtpAddressOrNameOrMailbox, smtpAddress);
                break;
            case 3:
                super(<string>smtpAddressOrNameOrMailbox, smtpAddress, routingType);
                break;
            default:
                super();
                break;
        }
        this.responseType = null;
        this.lastResponseTime = null;

    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Jason Object converted from XML.
     * @param   {ExchangeService}     service                 The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        for (let key in jsObject) {
            if (key.indexOf("_") === 0) {
                continue;
            }
            switch (key) {
                case XmlElementNames.Mailbox:
                    super.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames.ResponseType:
                    this.responseType = MeetingResponseType[<string>jsObject[key]];
                    break;
                case XmlElementNames.LastResponseTime:
                    this.lastResponseTime = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[key]);
                    break;
                default:
                    break;
            }
        }
    }

    /**
     * @internal Writes the elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteStartElement(this.Namespace, XmlElementNames.Mailbox);
        super.WriteElementsToXml(writer);
        writer.WriteEndElement();
    }
}


