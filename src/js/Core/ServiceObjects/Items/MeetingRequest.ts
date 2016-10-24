import { AcceptMeetingInvitationMessage } from "../ResponseObjects/AcceptMeetingInvitationMessage";
import { Appointment } from "./Appointment";
import { AppointmentType } from "../../../Enumerations/AppointmentType";
import { AttachableAttribute } from "../../../Attributes/AttachableAttribute";
import { AttendeeCollection } from "../../../ComplexProperties/AttendeeCollection";
import { CalendarActionResults } from "../../../Misc/CalendarActionResults";
import { ChangeHighlights } from "../../../ComplexProperties/ChangeHighlights";
import { DateTime, TimeSpan, TimeZoneInfo } from "../../../DateTime";
import { DeclineMeetingInvitationMessage } from "../ResponseObjects/DeclineMeetingInvitationMessage";
import { DeletedOccurrenceInfoCollection } from "../../../ComplexProperties/DeletedOccurrenceInfoCollection";
import { EmailAddress } from "../../../ComplexProperties/EmailAddress";
import { EnhancedLocation } from "../../../ComplexProperties/EnhancedLocation";
import { ExchangeService } from "../../ExchangeService";
import { ExchangeVersion } from "../../../Enumerations/ExchangeVersion";
import { ICalendarActionProvider } from "../../../Interfaces/ICalendarActionProvider";
import { IPromise } from "../../../Interfaces";
import { ItemAttachment } from "../../../ComplexProperties/ItemAttachment";
import { ItemCollection } from "../../../ComplexProperties/ItemCollection";
import { ItemId } from "../../../ComplexProperties/ItemId";
import { LegacyFreeBusyStatus } from "../../../Enumerations/LegacyFreeBusyStatus";
import { MeetingRequestType } from "../../../Enumerations/MeetingRequestType";
import { MeetingResponseType } from "../../../Enumerations/MeetingResponseType";
import { OccurrenceInfo } from "../../../ComplexProperties/OccurrenceInfo";
import { OccurrenceInfoCollection } from "../../../ComplexProperties/OccurrenceInfoCollection";
import { PropertySet } from "../../PropertySet";
import { Recurrence } from "../../../ComplexProperties/Recurrence/Patterns/Recurrence";
import { Schemas } from "../Schemas/Schemas";
import { ServiceObjectSchema } from "../Schemas/ServiceObjectSchema";
import { XmlElementNames } from "../../XmlElementNames";

import { MeetingMessage } from "./MeetingMessage";
/**
 * Represents a meeting request that an attendee can accept or decline. Properties available on meeting requests are defined in the MeetingRequestSchema class.
 */
@AttachableAttribute(true)
export class MeetingRequest extends MeetingMessage implements ICalendarActionProvider {

    /**
     * Gets the type of this meeting request.
     */
    get MeetingRequestType(): MeetingRequestType {
        return <MeetingRequestType>this.PropertyBag._getItem(Schemas.MeetingRequestSchema.MeetingRequestType);
    }

    /**
     * Gets the a value representing the intended free/busy status of the meeting.
     */
    get IntendedFreeBusyStatus(): LegacyFreeBusyStatus {
        return <LegacyFreeBusyStatus>this.PropertyBag._getItem(Schemas.MeetingRequestSchema.IntendedFreeBusyStatus);
    }

    /**
     * Gets the change highlights of the meeting request.
     */
    get ChangeHighlights(): ChangeHighlights {
        return <ChangeHighlights>this.PropertyBag._getItem(Schemas.MeetingRequestSchema.ChangeHighlights);
    }

    /**
     * Gets the Enhanced location object.
     */
    get EnhancedLocation(): EnhancedLocation {
        return <EnhancedLocation>this.PropertyBag._getItem(Schemas.MeetingRequestSchema.EnhancedLocation);
    }

    /**
     * Gets the start time of the appointment.
     */
    get Start(): DateTime {
        return <DateTime>this.PropertyBag._getItem(Schemas.AppointmentSchema.Start);
    }

    /**
     * Gets the end time of the appointment.
     */
    get End(): DateTime {
        return <DateTime>this.PropertyBag._getItem(Schemas.AppointmentSchema.End);
    }

    /**
     * Gets the original start time of this appointment.
     */
    get OriginalStart(): DateTime {
        return <DateTime>this.PropertyBag._getItem(Schemas.AppointmentSchema.OriginalStart);
    }

    /**
     * Gets a value indicating whether this appointment is an all day event.
     */
    get IsAllDayEvent(): boolean {
        return <boolean>this.PropertyBag._getItem(Schemas.AppointmentSchema.IsAllDayEvent);
    }

    /**
     * Gets a value indicating the free/busy status of the owner of this appointment. 
     */
    get LegacyFreeBusyStatus(): LegacyFreeBusyStatus {
        return <LegacyFreeBusyStatus>this.PropertyBag._getItem(Schemas.AppointmentSchema.LegacyFreeBusyStatus);
    }

    /**
     * Gets the location of this appointment.
     */
    get Location(): string {
        return <string>this.PropertyBag._getItem(Schemas.AppointmentSchema.Location);
    }

    /**
     * Gets a text indicating when this appointment occurs. The text returned by When is localized using the Exchange Server culture or using the culture specified in the PreferredCulture property of the ExchangeService object this appointment is bound to.
     */
    get When(): string {
        return <string>this.PropertyBag._getItem(Schemas.AppointmentSchema.When);
    }

    /**
     * Gets a value indicating whether the appointment is a meeting.
     */
    get IsMeeting(): boolean {
        return <boolean>this.PropertyBag._getItem(Schemas.AppointmentSchema.IsMeeting);
    }

    /**
     * Gets a value indicating whether the appointment has been cancelled.
     */
    get IsCancelled(): boolean {
        return <boolean>this.PropertyBag._getItem(Schemas.AppointmentSchema.IsCancelled);
    }

    /**
     * Gets a value indicating whether the appointment is recurring.
     */
    get IsRecurring(): boolean {
        return <boolean>this.PropertyBag._getItem(Schemas.AppointmentSchema.IsRecurring);
    }

    /**
     * Gets a value indicating whether the meeting request has already been sent.
     */
    get MeetingRequestWasSent(): boolean {
        return <boolean>this.PropertyBag._getItem(Schemas.AppointmentSchema.MeetingRequestWasSent);
    }

    /**
     * Gets a value indicating the type of this appointment.
     */
    get AppointmentType(): AppointmentType {
        return <AppointmentType>this.PropertyBag._getItem(Schemas.AppointmentSchema.AppointmentType);
    }

    /**
     * Gets a value indicating what was the last response of the user that loaded this meeting.
     */
    get MyResponseType(): MeetingResponseType {
        return <MeetingResponseType>this.PropertyBag._getItem(Schemas.AppointmentSchema.MyResponseType);
    }

    /**
     * Gets the organizer of this meeting.
     */
    get Organizer(): EmailAddress {
        return <EmailAddress>this.PropertyBag._getItem(Schemas.AppointmentSchema.Organizer);
    }

    /**
     * Gets a list of required attendees for this meeting.
     */
    get RequiredAttendees(): AttendeeCollection {
        return <AttendeeCollection>this.PropertyBag._getItem(Schemas.AppointmentSchema.RequiredAttendees);
    }

    /**
     * Gets a list of optional attendeed for this meeting.
     */
    get OptionalAttendees(): AttendeeCollection {
        return <AttendeeCollection>this.PropertyBag._getItem(Schemas.AppointmentSchema.OptionalAttendees);
    }

    /**
     * Gets a list of resources for this meeting.
     */
    get Resources(): AttendeeCollection {
        return <AttendeeCollection>this.PropertyBag._getItem(Schemas.AppointmentSchema.Resources);
    }

    /**
     * Gets the number of calendar entries that conflict with this appointment in the authenticated user's calendar.
     */
    get ConflictingMeetingCount(): number {
        return <number>this.PropertyBag._getItem(Schemas.AppointmentSchema.ConflictingMeetingCount);
    }

    /**
     * Gets the number of calendar entries that are adjacent to this appointment in the authenticated user's calendar.
     */
    get AdjacentMeetingCount(): number {
        return <number>this.PropertyBag._getItem(Schemas.AppointmentSchema.AdjacentMeetingCount);
    }

    /**
     * Gets a list of meetings that conflict with this appointment in the authenticated user's calendar.
     */
    get ConflictingMeetings(): ItemCollection<Appointment> {
        return <ItemCollection<Appointment>>this.PropertyBag._getItem(Schemas.AppointmentSchema.ConflictingMeetings);
    }

    /**
     * Gets a list of meetings that are adjucent to this appointment in the authenticated user's calendar.
     */
    get AdjacentMeetings(): ItemCollection<Appointment> {
        return <ItemCollection<Appointment>>this.PropertyBag._getItem(Schemas.AppointmentSchema.AdjacentMeetings);
    }

    /**
     * Gets the duration of this appointment.
     */
    get Duration(): TimeSpan {
        return <TimeSpan>this.PropertyBag._getItem(Schemas.AppointmentSchema.Duration);
    }

    /**
     * Gets the name of the time zone this appointment is defined in.
     */
    get TimeZone(): string {
        return <string>this.PropertyBag._getItem(Schemas.AppointmentSchema.TimeZone);
    }

    /**
     * Gets the time when the attendee replied to the meeting request.
     */
    get AppointmentReplyTime(): DateTime {
        return <DateTime>this.PropertyBag._getItem(Schemas.AppointmentSchema.AppointmentReplyTime);
    }

    /**
     * Gets the sequence number of this appointment.
     */
    get AppointmentSequenceNumber(): number {
        return <number>this.PropertyBag._getItem(Schemas.AppointmentSchema.AppointmentSequenceNumber);
    }

    /**
     * Gets the state of this appointment.
     */
    get AppointmentState(): number {
        return <number>this.PropertyBag._getItem(Schemas.AppointmentSchema.AppointmentState);
    }

    /**
     * Gets the recurrence pattern for this meeting request.
     */
    get Recurrence(): Recurrence {
        return <Recurrence>this.PropertyBag._getItem(Schemas.AppointmentSchema.Recurrence);
    }

    /**
     * Gets an OccurrenceInfo identifying the first occurrence of this meeting.
     */
    get FirstOccurrence(): OccurrenceInfo {
        return <OccurrenceInfo>this.PropertyBag._getItem(Schemas.AppointmentSchema.FirstOccurrence);
    }

    /**
     * Gets an OccurrenceInfo identifying the last occurrence of this meeting.
     */
    get LastOccurrence(): OccurrenceInfo {
        return <OccurrenceInfo>this.PropertyBag._getItem(Schemas.AppointmentSchema.LastOccurrence);
    }

    /**
     * Gets a list of modified occurrences for this meeting.
     */
    get ModifiedOccurrences(): OccurrenceInfoCollection {
        return <OccurrenceInfoCollection>this.PropertyBag._getItem(Schemas.AppointmentSchema.ModifiedOccurrences);
    }

    /**
     * Gets a list of deleted occurrences for this meeting.
     */
    get DeletedOccurrences(): DeletedOccurrenceInfoCollection {
        return <DeletedOccurrenceInfoCollection>this.PropertyBag._getItem(Schemas.AppointmentSchema.DeletedOccurrences);
    }

    /**
     * Gets time zone of the start property of this meeting request.
     */
    get StartTimeZone(): TimeZoneInfo {
        return <TimeZoneInfo>this.PropertyBag._getItem(Schemas.AppointmentSchema.StartTimeZone);
    }

    /**
     * Gets time zone of the end property of this meeting request.
     */
    get EndTimeZone(): TimeZoneInfo {
        return <TimeZoneInfo>this.PropertyBag._getItem(Schemas.AppointmentSchema.EndTimeZone);
    }

    /**
     * Gets the type of conferencing that will be used during the meeting.
     */
    get ConferenceType(): number {
        return <number>this.PropertyBag._getItem(Schemas.AppointmentSchema.ConferenceType);
    }

    /**
     * Gets a value indicating whether new time proposals are allowed for attendees of this meeting.
     */
    get AllowNewTimeProposal(): boolean {
        return <boolean>this.PropertyBag._getItem(Schemas.AppointmentSchema.AllowNewTimeProposal);
    }

    /**
     * Gets a value indicating whether this is an online meeting.
     */
    get IsOnlineMeeting(): boolean {
        return <boolean>this.PropertyBag._getItem(Schemas.AppointmentSchema.IsOnlineMeeting);
    }

    /**
     * Gets the URL of the meeting workspace. A meeting workspace is a shared Web site for planning meetings and tracking results.
     */
    get MeetingWorkspaceUrl(): string {
        return <string>this.PropertyBag._getItem(Schemas.AppointmentSchema.MeetingWorkspaceUrl);
    }

    /**
     * Gets the URL of the Microsoft NetShow online meeting.
     */
    get NetShowUrl(): string {
        return <string>this.PropertyBag._getItem(Schemas.AppointmentSchema.NetShowUrl);
    }

    /**
     * @internal Initializes a new instance of the **MeetingRequest** class.
     *
     * @param   {ItemAttachment}   parentAttachment   The parent attachment.
     */
    constructor(parentAttachment: ItemAttachment);
    /**
     * @internal Initializes a new instance of the **MeetingRequest** class.
     *
     * @param   {ExchangeService}   service   EWS service to which this object belongs.
     */
    constructor(service: ExchangeService);
    constructor(parentAttachmentOrService: any) {
        super(parentAttachmentOrService);
    }

    /**
     * Accepts the meeting. Calling this method results in a call to EWS.
     *
     * @param   {boolean}   sendResponse   Indicates whether to send a response to the organizer.
     * @return  {IPromise<CalendarActionResults>}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation    :Promise.
     */
    Accept(sendResponse: boolean): IPromise<CalendarActionResults> {
        return this.InternalAccept(false, sendResponse);
    }

    /**
     * Tentatively accepts the meeting. Calling this method results in a call to EWS.
     *
     * @param   {boolean}   sendResponse   Indicates whether to send a response to the organizer.
     * @return  {IPromise<CalendarActionResults>}       A CalendarActionResults object containing the various items that were created or modified as a results of this operation    :Promise.
     */
    AcceptTentatively(sendResponse: boolean): IPromise<CalendarActionResults> { throw new Error("MeetingRequest.ts - AcceptTentatively : Not implemented."); }

    /**
     * Binds to an existing meeting request and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the meeting request.
     * @param   {ItemId}            id            The Id of the meeting request to bind to.
     * @param   {PropertySet}       propertySet   The set of properties to load.
     * @return  {IPromise<MeetingRequest>}        A MeetingRequest instance representing the meeting request corresponding to the specified Id  :Promise.
     */
    public static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): IPromise<MeetingRequest>;
    /**
     * Binds to an existing meeting request and loads its first class properties.
     *
     * @param   {ExchangeService}   service       The service to use to bind to the meeting request.
     * @param   {ItemId}            id            The Id of the meeting request to bind to.
     * @return  {IPromise<MeetingRequest>}        A MeetingRequest instance representing the meeting request corresponding to the specified Id  :Promise.
     */
    public static Bind(service: ExchangeService, id: ItemId): IPromise<MeetingRequest>;
    public static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet = PropertySet.FirstClassProperties): IPromise<MeetingRequest> {
        return service.BindToItem<MeetingRequest>(id, propertySet, MeetingRequest);
    }

    /**
     * Creates a local meeting acceptance message that can be customized and sent.
     *
     * @param   {boolean}   tentative   Specifies whether the meeting will be tentatively accepted.
     * @return  {AcceptMeetingInvitationMessage}        An AcceptMeetingInvitationMessage representing the meeting acceptance message.
     */
    CreateAcceptMessage(tentative: boolean): AcceptMeetingInvitationMessage {
        return new AcceptMeetingInvitationMessage(this, tentative);
    }

    /**
     * Creates a local meeting declination message that can be customized and sent.
     *
     * @return  {DeclineMeetingInvitationMessage}      A DeclineMeetingInvitation representing the meeting declination message.
     */
    CreateDeclineMessage(): DeclineMeetingInvitationMessage {
        return new DeclineMeetingInvitationMessage(this);
    }

    /**
     * Declines the meeting invitation. Calling this method results in a call to EWS.
     *
     * @param   {boolean}   sendResponse   Indicates whether to send a response to the organizer.
     * @return  {IPromise<CalendarActionResults>}       A CalendarActionResults object containing the various items that were created or modified as a results of this operation    :Promise.
     */
    Decline(sendResponse: boolean): IPromise<CalendarActionResults> {
        let decline: DeclineMeetingInvitationMessage = this.CreateDeclineMessage();

        if (sendResponse) {
            return decline.SendAndSaveCopy();
        }
        else {
            return decline.Save();
        }
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
        return Schemas.MeetingRequestSchema.Instance;
    }

    /**
     * @internal Gets the element name of item in XML
     * 
     * @return  {string} name of elelment
     */
    GetXmlElementName(): string {
        return XmlElementNames.MeetingRequest;
    }

    /**
     * @internal Accepts the meeting.
     *
     * @param   {boolean}   tentative      True if tentative accept.
     * @param   {boolean}   sendResponse   Indicates whether to send a response to the organizer.
     * @return  {IPromise<CalendarActionResults>}       A CalendarActionResults object containing the various items that were created or modified as a results of this operation    :Promise.
     */
    InternalAccept(tentative: boolean, sendResponse: boolean): IPromise<CalendarActionResults> {
        let accept: AcceptMeetingInvitationMessage = this.CreateAcceptMessage(tentative);

        if (sendResponse) {
            return accept.SendAndSaveCopy();
        }
        else {
            return accept.Save();
        }
    }
}