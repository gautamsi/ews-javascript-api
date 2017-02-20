import { DateTime } from "../../../DateTime";
import { ExchangeService } from "../../ExchangeService";
import { ExchangeVersion } from "../../../Enumerations/ExchangeVersion";
import { ItemAttachment } from "../../../ComplexProperties/ItemAttachment";
import { ItemId } from "../../../ComplexProperties/ItemId";
import { MeetingResponseType } from "../../../Enumerations/MeetingResponseType";
import { Promise } from "../../../Promise";
import { PropertySet } from "../../PropertySet";
import { Schemas } from "../Schemas/Schemas";
import { ServiceObjectSchema } from "../Schemas/ServiceObjectSchema";
import { XmlElementNames } from "../../XmlElementNames";

import { EmailMessage } from "./EmailMessage";
/**
 * Represents a meeting-related message. Properties available on meeting messages are defined in the MeetingMessageSchema class.
 */
export class MeetingMessage extends EmailMessage {

    /**
     * Gets the Id of the appointment associated with the meeting message.
     */
    get AssociatedAppointmentId(): ItemId {
        return <ItemId>this.PropertyBag._getItem(Schemas.MeetingMessageSchema.AssociatedAppointmentId);
    }

    /**
     * Gets a value indicating whether the meeting message is delegated.
     */
    get IsDelegated(): boolean {
        return <boolean>this.PropertyBag._getItem(Schemas.MeetingMessageSchema.IsDelegated);
    }

    /**
     * Gets a value indicating whether the meeting message is out of date.
     */
    get IsOutOfDate(): boolean {
        return <boolean>this.PropertyBag._getItem(Schemas.MeetingMessageSchema.IsOutOfDate);
    }

    /**
     * Gets a value indicating whether the meeting message has been processed by Exchange (i.e. Exchange has noted the arrival of a meeting request and has created the associated meeting item in the calendar).
     */
    get HasBeenProcessed(): boolean {
        return <boolean>this.PropertyBag._getItem(Schemas.MeetingMessageSchema.HasBeenProcessed);
    }

    /**
     * Gets the isorganizer property for this meeting
     * 
     * @Nullable
     */
    get IsOrganizer(): boolean {
        return <boolean>this.PropertyBag._getItem(Schemas.MeetingMessageSchema.IsOrganizer);
    }

    /**
     * Gets the type of response the meeting message represents.
     */
    get ResponseType(): MeetingResponseType {
        return <MeetingResponseType>this.PropertyBag._getItem(Schemas.MeetingMessageSchema.ResponseType);
    }

    /**
     * Gets the ICalendar Uid.
     */
    get ICalUid(): string {
        return <string>this.PropertyBag._getItem(Schemas.MeetingMessageSchema.ICalUid);
    }

    /**
     * Gets the ICalendar RecurrenceId.
     * 
     * @Nullable
     */
    get ICalRecurrenceId(): DateTime {
        return <DateTime>this.PropertyBag._getItem(Schemas.MeetingMessageSchema.ICalRecurrenceId);
    }

    /**
     * Gets the ICalendar DateTimeStamp.
     */
    get ICalDateTimeStamp(): DateTime {
        return <DateTime>this.PropertyBag._getItem(Schemas.MeetingMessageSchema.ICalDateTimeStamp);
    }

    /**
     * @internal Initializes a new instance of the **MeetingMessage** class.
     *
     * @param   {ExchangeService}   service   EWS service to which this object belongs.
     */
    constructor(service: ExchangeService);
    /**
     * @internal Initializes a new instance of the **MeetingMessage** class.
     *
     * @param   {ItemAttachment}   parentAttachment   The parent attachment.
     */
    constructor(parentAttachment: ItemAttachment);
    /**
     * @internal ~~**used for super call, easier to manage, do not use in Actual code. //todo:fix - [ ] remove from d.ts file**~~.
     */
    constructor(obj: ExchangeService | ItemAttachment)
    constructor(serviceOrParentAttachment: ExchangeService | ItemAttachment) {
        super(serviceOrParentAttachment);
    }

    /**
     * Binds to an existing meeting message and loads the specified set of properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the meeting message.
     * @param   {ItemId}            id            The Id of the meeting message to bind to.
     * @param   {PropertySet}       propertySet   The set of properties to load.
     * @return  {Promise<MeetingMessage>}  A MeetingMessage instance representing the meeting message corresponding to the specified Id    :Promise.
     */
    public static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): Promise<MeetingMessage>;
    /**
     * Binds to an existing meeting message and loads its first class properties.
     * Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the meeting message.
     * @param   {ItemId}            id            The Id of the meeting message to bind to.
     * @param   {PropertySet}       propertySet   The set of properties to load.
     * @return  {Promise<MeetingMessage>}  A MeetingMessage instance representing the meeting message corresponding to the specified Id    :Promise.
     */
    public static Bind(service: ExchangeService, id: ItemId): Promise<MeetingMessage>;
    public static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet = PropertySet.FirstClassProperties): Promise<MeetingMessage> {
        return service.BindToItem<MeetingMessage>(id, propertySet, MeetingMessage);
    }

    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion {
        return ExchangeVersion.Exchange2007_SP1;
    }

    /**
     * @internal Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    GetSchema(): ServiceObjectSchema {
        return Schemas.MeetingMessageSchema.Instance;
    }

    /**
     * @internal Gets the element name of item in XML
     * 
     * @return  {string} name of elelment
     */
    GetXmlElementName(): string {
        return XmlElementNames.MeetingMessage;
    }
}