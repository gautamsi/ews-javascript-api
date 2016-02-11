import {XmlElementNames} from "../../XmlElementNames";
import {MeetingCancellation} from "../Items/MeetingCancellation";
import {MessageBody} from "../../../ComplexProperties/MessageBody";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {ServiceObjectSchema} from "../Schemas/ServiceObjectSchema";
import {CancelMeetingMessageSchema} from "../Schemas/CancelMeetingMessageSchema";
import {Item} from "../Items/Item";


import {CalendarResponseMessageBase} from "./CalendarResponseMessageBase";
/**
 * Represents a meeting cancellation message.
 *
 */
export class CancelMeetingMessage extends CalendarResponseMessageBase<MeetingCancellation> {
    /**
     * Gets or sets the body of the response.
     *
     */
    get Body(): MessageBody {
        return <MessageBody>this.PropertyBag._getItem(CancelMeetingMessageSchema.Body);
    }
    set Body(value: MessageBody) {
        this.PropertyBag._setItem(CancelMeetingMessageSchema.Body, value);
    }
    /**
     * Initializes a new instance of the  class.
     *
     * @param   {Item}   referenceItem   The reference item.
     */
    constructor(referenceItem: Item) {
        super(referenceItem);
    }
    /**
     * Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
    /**
     * Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    GetSchema(): ServiceObjectSchema { return CancelMeetingMessageSchema.Instance; }
    /**
     * Gets the element name of item in XML
     * 
     * @return  {string} name of elelment
     */
    GetXmlElementName(): string { return XmlElementNames.CancelCalendarItem; }
}