import { AttachableAttribute } from "../../../Attributes/AttachableAttribute";
import { DateTime } from "../../../DateTime";
import { EnhancedLocation } from "../../../ComplexProperties/EnhancedLocation";
import { ExchangeService } from "../../ExchangeService";
import { ExchangeVersion } from "../../../Enumerations/ExchangeVersion";
import { IPromise } from "../../../Interfaces";
import { ItemAttachment } from "../../../ComplexProperties/ItemAttachment";
import { ItemId } from "../../../ComplexProperties/ItemId";
import { PropertySet } from "../../PropertySet";
import { Recurrence } from "../../../ComplexProperties/Recurrence/Patterns/Recurrence";
import { Schemas } from "../Schemas/Schemas";
import { ServiceObjectSchema } from "../Schemas/ServiceObjectSchema";
import { XmlElementNames } from "../../XmlElementNames";

import { MeetingMessage } from "./MeetingMessage";
/**
 * Represents a response to a meeting request. Properties available on meeting messages are defined in the MeetingMessageSchema class.
 */
@AttachableAttribute(true)
export class MeetingResponse extends MeetingMessage {

    /**
     * Gets the start time of the appointment.
     */
    get Start(): DateTime {
        return <DateTime>this.PropertyBag._getItem(Schemas.MeetingResponseSchema.Start);
    }

    /**
     * Gets the end time of the appointment.
     */
    get End(): DateTime {
        return <DateTime>this.PropertyBag._getItem(Schemas.MeetingResponseSchema.End);
    }

    /**
     * Gets the location of this appointment.
     */
    get Location(): string {
        return <string>this.PropertyBag._getItem(Schemas.MeetingResponseSchema.Location);
    }

    /**
     * Gets the recurrence pattern for this meeting request.
     */
    get Recurrence(): Recurrence {
        return <Recurrence>this.PropertyBag._getItem(Schemas.AppointmentSchema.Recurrence);
    }

    /**
     * Gets the proposed start time of the appointment.
     */
    get ProposedStart(): DateTime {
        return <DateTime>this.PropertyBag._getItem(Schemas.MeetingResponseSchema.ProposedStart);
    }

    /**
     * Gets the proposed end time of the appointment.
     */
    get ProposedEnd(): DateTime {
        return <DateTime>this.PropertyBag._getItem(Schemas.MeetingResponseSchema.ProposedEnd);
    }

    /**
     * Gets the Enhanced location object.
     */
    get EnhancedLocation(): EnhancedLocation {
        return <EnhancedLocation>this.PropertyBag._getItem(Schemas.MeetingResponseSchema.EnhancedLocation);
    }

    /**
     * @internal Initializes a new instance of the **MeetingResponse** class.
     *
     * @param   {ItemAttachment}   parentAttachment   The parent attachment.
     */
    constructor(parentAttachment: ItemAttachment);
    /**
     * @internal Initializes a new instance of the **MeetingResponse** class.
     *
     * @param   {ExchangeService}   service   EWS service to which this object belongs.
     */
    constructor(service: ExchangeService);
    constructor(parentAttachmentOrService: any) {
        super(parentAttachmentOrService);
    }

    /**
     * Binds to an existing meeting response and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the meeting response.
     * @param   {ItemId}            id            The Id of the meeting response to bind to.
     * @param   {PropertySet}       propertySet   The set of properties to load.
     * @return  {IPromise<MeetingResponse>}       A MeetingResponse instance representing the meeting response corresponding to the specified Id    :Promise.
     */
    public static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): IPromise<MeetingResponse>;
    /**
     * Binds to an existing meeting response and loads its first class properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the meeting response.
     * @param   {ItemId}            id            The Id of the meeting response to bind to.
     * @return  {IPromise<MeetingResponse>}       A MeetingResponse instance representing the meeting response corresponding to the specified Id    :Promise.
     */
    public static Bind(service: ExchangeService, id: ItemId): IPromise<MeetingResponse>;
    public static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet = PropertySet.FirstClassProperties): IPromise<MeetingResponse> {
        return service.BindToItem<MeetingResponse>(id, propertySet, MeetingResponse);
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
        return Schemas.MeetingResponseSchema.Instance;
    }

    /**
     * @internal Gets the element name of item in XML
     * 
     * @return  {string} name of elelment
     */
    GetXmlElementName(): string { return XmlElementNames.MeetingResponse; }
}