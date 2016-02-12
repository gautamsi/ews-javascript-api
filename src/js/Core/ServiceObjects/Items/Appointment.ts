import {ResponseMessageType} from "../../../Enumerations/ResponseMessageType";
import {IOutParam} from "../../../Interfaces/IOutParam";
import {ICalendarActionProvider} from "../../../Interfaces/ICalendarActionProvider";
import {BodyType} from "../../../Enumerations/BodyType";
import {RecurringAppointmentMasterId} from "../../../ComplexProperties/RecurringAppointmentMasterId";
import {AppointmentOccurrenceId} from "../../../ComplexProperties/AppointmentOccurrenceId";
import {CalendarActionResults} from "../../../Misc/CalendarActionResults";
import {ItemId} from "../../../ComplexProperties/ItemId";
import {PropertySet} from "../../PropertySet";
import {AcceptMeetingInvitationMessage} from "../ResponseObjects/AcceptMeetingInvitationMessage";
import {CancelMeetingMessage} from "../ResponseObjects/CancelMeetingMessage";
import {DeclineMeetingInvitationMessage} from "../ResponseObjects/DeclineMeetingInvitationMessage";
import {ResponseMessage} from "../ResponseObjects/ResponseMessage";
import {DeleteMode} from "../../../Enumerations/DeleteMode";
import {MessageBody} from "../../../ComplexProperties/MessageBody";
import {ServiceObjectSchema} from "../Schemas/ServiceObjectSchema";
import {WellKnownFolderName} from "../../../Enumerations/WellKnownFolderName";
import {FolderId} from "../../../ComplexProperties/FolderId";
import {ConflictResolutionMode} from "../../../Enumerations/ConflictResolutionMode";
import {ExchangeService} from "../../ExchangeService";
import {ItemAttachment} from "../../../ComplexProperties/ItemAttachment";
import {ExchangeVersion} from "../../../Enumerations/ExchangeVersion";
import {SendCancellationsMode} from "../../../Enumerations/SendCancellationsMode";
import {SendInvitationsMode} from "../../../Enumerations/SendInvitationsMode";
import {SendInvitationsOrCancellationsMode} from "../../../Enumerations/SendInvitationsOrCancellationsMode";
import {DateTime, TimeSpan, TimeZoneInfo} from "../../../DateTime";
import {AppointmentSchema} from "../Schemas/AppointmentSchema";
import {LegacyFreeBusyStatus} from "../../../Enumerations/LegacyFreeBusyStatus";
import {AppointmentType} from "../../../Enumerations/AppointmentType";
import {MeetingResponseType} from "../../../Enumerations/MeetingResponseType";
import {EmailAddress} from "../../../ComplexProperties/EmailAddress";
import {AttendeeCollection} from "../../../ComplexProperties/AttendeeCollection";
import {ItemCollection} from "../../../ComplexProperties/ItemCollection";
import {Recurrence} from "../../../ComplexProperties/Recurrence/Patterns/Recurrence";
import {ServiceLocalException} from "../../../Exceptions/ServiceLocalException";
import {Strings} from "../../../Strings";
import {OccurrenceInfo} from "../../../ComplexProperties/OccurrenceInfo";
import {OccurrenceInfoCollection} from "../../../ComplexProperties/OccurrenceInfoCollection";
import {DeletedOccurrenceInfoCollection} from "../../../ComplexProperties/DeletedOccurrenceInfoCollection";
import {EnhancedLocation} from "../../../ComplexProperties/EnhancedLocation";
import {OnlineMeetingSettings} from "../../../ComplexProperties/OnlineMeetingSettings";
import {XmlElementNames} from "../../XmlElementNames";
import {IPromise} from "../../../Interfaces";

import {Item} from "./Item";
/**
 * Represents an **appointment or a meeting**. Properties available on appointments are defined in the *AppointmentSchema* class.
 */
export class Appointment extends Item implements ICalendarActionProvider {
    //todo: attachable attribute missing. 
    
    /**
     * @internal Gets the default setting for sending cancellations on Delete.
     *
     * @return  {SendCancellationsMode}      If Delete() is called on Appointment, we want to send cancellations and save a copy.
     */
    get DefaultSendCancellationsMode(): SendCancellationsMode {
        return SendCancellationsMode.SendToAllAndSaveCopy;
    }
    
    /**
     * @internal Gets the default settings for sending invitations on Save.
     */
    get DefaultSendInvitationsMode(): SendInvitationsMode {
        return SendInvitationsMode.SendToAllAndSaveCopy;
    }
    
    /**
     * @internal Gets the default settings for sending invitations or cancellations on Update.
     */
    get DefaultSendInvitationsOrCancellationsMode(): SendInvitationsOrCancellationsMode {
        return SendInvitationsOrCancellationsMode.SendToAllAndSaveCopy;
    }
    
    /**
     * Gets or sets the start time of the appointment.
     */
    get Start(): DateTime {
        return <DateTime>this.PropertyBag._getItem(AppointmentSchema.Instance.Start);
    }
    set Start(value: DateTime) {
        this.PropertyBag._setItem(AppointmentSchema.Instance.Start, value);
    }
    
    /**
     * Gets or sets the end time of the appointment.
     */
    get End(): DateTime {
        return <DateTime>this.PropertyBag._getItem(AppointmentSchema.Instance.End);
    }
    set End(value: DateTime) {
        this.PropertyBag._setItem(AppointmentSchema.Instance.End, value);
    }
    
    /**
     * Gets the original start time of this appointment.
     */
    get OriginalStart(): DateTime {
        return <DateTime>this.PropertyBag._getItem(AppointmentSchema.Instance.OriginalStart);
    }
    
    /**
     * Gets or sets a value indicating whether this appointment is an all day event.
     */
    get IsAllDayEvent(): boolean {
        return <boolean>this.PropertyBag._getItem(AppointmentSchema.Instance.IsAllDayEvent);
    }
    set IsAllDayEvent(value: boolean) {
        this.PropertyBag._setItem(AppointmentSchema.Instance.IsAllDayEvent, value);
    }
    
    /**
     * Gets or sets a value indicating the free/busy status of the owner of this appointment. 
     */
    get LegacyFreeBusyStatus(): LegacyFreeBusyStatus {
        return <LegacyFreeBusyStatus>this.PropertyBag._getItem(AppointmentSchema.Instance.LegacyFreeBusyStatus);
    }
    set LegacyFreeBusyStatus(value: LegacyFreeBusyStatus) {
        this.PropertyBag._setItem(AppointmentSchema.Instance.LegacyFreeBusyStatus, value);
    }
    
    /**
     * Gets or sets the location of this appointment.
     */
    get Location(): string {
        return <string>this.PropertyBag._getItem(AppointmentSchema.Instance.Location);
    }
    set Location(value: string) {
        this.PropertyBag._setItem(AppointmentSchema.Instance.Location, value);
    }
    
    /**
     * Gets a text indicating when this appointment occurs. The text returned by When is localized using the Exchange Server culture or using the culture specified in the PreferredCulture property of the ExchangeService object this appointment is bound to.
     */
    get When(): string {
        return <string>this.PropertyBag._getItem(AppointmentSchema.Instance.When);
    }
    
    /**
     * Gets a value indicating whether the appointment is a meeting.
     */
    get IsMeeting(): boolean {
        return <boolean>this.PropertyBag._getItem(AppointmentSchema.Instance.IsMeeting);
    }
    
    /**
     * Gets a value indicating whether the appointment has been cancelled.
     */
    get IsCancelled(): boolean {
        return <boolean>this.PropertyBag._getItem(AppointmentSchema.Instance.IsCancelled);
    }
    
    /**
     * Gets a value indicating whether the appointment is recurring.
     */
    get IsRecurring(): boolean {
        return <boolean>this.PropertyBag._getItem(AppointmentSchema.Instance.IsRecurring);
    }
    
    /**
     * Gets a value indicating whether the meeting request has already been sent.
     */
    get MeetingRequestWasSent(): boolean {
        return <boolean>this.PropertyBag._getItem(AppointmentSchema.Instance.MeetingRequestWasSent);
    }
    set IsResponseRequested(value: boolean) {
        this.PropertyBag._setItem(AppointmentSchema.Instance.IsResponseRequested, value);
    }
    
    /**
     * Gets or sets a value indicating whether responses are requested when invitations are sent for this meeting.
     */
    get IsResponseRequested(): boolean {
        return <boolean>this.PropertyBag._getItem(AppointmentSchema.Instance.IsResponseRequested);
    }
    
    /**
     * Gets a value indicating the type of this appointment.
     */
    get AppointmentType(): AppointmentType {
        return <AppointmentType>this.PropertyBag._getItem(AppointmentSchema.Instance.AppointmentType);
    }
    
    /**
     * Gets a value indicating what was the last response of the user that loaded this meeting.
     */
    get MyResponseType(): MeetingResponseType {
        return <MeetingResponseType>this.PropertyBag._getItem(AppointmentSchema.Instance.MyResponseType);
    }
    
    /**
     * Gets the organizer of this meeting. The Organizer property is read-only and is only relevant for attendees.
     * The organizer of a meeting is automatically set to the user that created the meeting.
     */
    get Organizer(): EmailAddress {
        return <EmailAddress>this.PropertyBag._getItem(AppointmentSchema.Instance.Organizer);
    }
    
    /**
     * Gets a list of required attendees for this meeting.
     */
    get RequiredAttendees(): AttendeeCollection {
        return <AttendeeCollection>this.PropertyBag._getItem(AppointmentSchema.Instance.RequiredAttendees);
    }
    
    /**
     * Gets a list of optional attendeed for this meeting.
     */
    get OptionalAttendees(): AttendeeCollection {
        return <AttendeeCollection>this.PropertyBag._getItem(AppointmentSchema.Instance.OptionalAttendees);
    }
    
    /**
     * Gets a list of resources for this meeting.
     */
    get Resources(): AttendeeCollection {
        return <AttendeeCollection>this.PropertyBag._getItem(AppointmentSchema.Instance.Resources);
    }
    
    /**
     * Gets the number of calendar entries that conflict with this appointment in the authenticated user's calendar.
     */
    get ConflictingMeetingCount(): number {
        return <number>this.PropertyBag._getItem(AppointmentSchema.Instance.ConflictingMeetingCount);
    }
    
    /**
     * Gets the number of calendar entries that are adjacent to this appointment in the authenticated user's calendar.
     */
    get AdjacentMeetingCount(): number {
        return <number>this.PropertyBag._getItem(AppointmentSchema.Instance.AdjacentMeetingCount);
    }
    
    /**
     * Gets a list of meetings that conflict with this appointment in the authenticated user's calendar.
     */
    get ConflictingMeetings(): ItemCollection<Appointment> {
        return <ItemCollection<Appointment>>this.PropertyBag._getItem(AppointmentSchema.Instance.ConflictingMeetings);
    }
    
    /**
     * Gets a list of meetings that is adjacent to this appointment in the authenticated user's calendar.
     */
    get AdjacentMeetings(): ItemCollection<Appointment> {
        return <ItemCollection<Appointment>>this.PropertyBag._getItem(AppointmentSchema.Instance.AdjacentMeetings);
    }
    
    /**
     * Gets the duration of this appointment.
     */
    get Duration(): TimeSpan {
        return <TimeSpan>this.PropertyBag._getItem(AppointmentSchema.Instance.Duration);
    }
    
    /**
     * Gets the name of the time zone this appointment is defined in.
     */
    get TimeZone(): string {
        return <string>this.PropertyBag._getItem(AppointmentSchema.Instance.TimeZone);
    }
    
    /**
     * Gets the time when the attendee replied to the meeting request.
     */
    get AppointmentReplyTime(): DateTime {
        return <DateTime>this.PropertyBag._getItem(AppointmentSchema.Instance.AppointmentReplyTime);
    }
    
    /**
     * Gets the sequence number of this appointment.
     */
    get AppointmentSequenceNumber(): number {
        return <number>this.PropertyBag._getItem(AppointmentSchema.Instance.AppointmentSequenceNumber);
    }
    
    /**
     * Gets the state of this appointment.
     */
    get AppointmentState(): number {
        return <number>this.PropertyBag._getItem(AppointmentSchema.Instance.AppointmentState);
    }
    
    /**
     * Gets or sets the recurrence pattern for this appointment. Available recurrence pattern classes include
     * Recurrence.DailyPattern, Recurrence.MonthlyPattern and Recurrence.YearlyPattern.
     */
    get Recurrence(): Recurrence {
        return <Recurrence>this.PropertyBag._getItem(AppointmentSchema.Instance.Recurrence);
    }
    set Recurrence(value: Recurrence) {
        if (value !== null && value.IsRegenerationPattern) {
            throw new ServiceLocalException(Strings.RegenerationPatternsOnlyValidForTasks);
        }
        this.PropertyBag._setItem(AppointmentSchema.Instance.Recurrence, value);
    }
    
    /**
     * Gets an OccurrenceInfo identifying the first occurrence of this meeting.
     */
    get FirstOccurrence(): OccurrenceInfo {
        return <OccurrenceInfo>this.PropertyBag._getItem(AppointmentSchema.Instance.FirstOccurrence);
    }
    
    /**
     * Gets an OccurrenceInfo identifying the last occurrence of this meeting.
     */
    get LastOccurrence(): OccurrenceInfo {
        return <OccurrenceInfo>this.PropertyBag._getItem(AppointmentSchema.Instance.LastOccurrence);
    }
    
    /**
     * Gets a list of modified occurrences for this meeting.
     */
    get ModifiedOccurrences(): OccurrenceInfoCollection {
        return <OccurrenceInfoCollection>this.PropertyBag._getItem(AppointmentSchema.Instance.ModifiedOccurrences);
    }
    
    /**
     * Gets a list of deleted occurrences for this meeting.
     */
    get DeletedOccurrences(): DeletedOccurrenceInfoCollection {
        return <DeletedOccurrenceInfoCollection>this.PropertyBag._getItem(AppointmentSchema.Instance.DeletedOccurrences);
    }
    
    /**
     * Gets or sets time zone of the start property of this appointment.
     */
    get StartTimeZone(): TimeZoneInfo {
        return <TimeZoneInfo>this.PropertyBag._getItem(AppointmentSchema.Instance.StartTimeZone);
    }
    set StartTimeZone(value: TimeZoneInfo) {
        this.PropertyBag._setItem(AppointmentSchema.Instance.StartTimeZone, value);
    }
    
    /**
     * Gets or sets time zone of the end property of this appointment.
     */
    get EndTimeZone(): TimeZoneInfo {
        return <TimeZoneInfo>this.PropertyBag._getItem(AppointmentSchema.Instance.EndTimeZone);
    }
    set EndTimeZone(value: TimeZoneInfo) {
        this.PropertyBag._setItem(AppointmentSchema.Instance.EndTimeZone, value);
    }
    
    /**
     * Gets or sets the type of conferencing that will be used during the meeting.
     */
    get ConferenceType(): number {
        return <number>this.PropertyBag._getItem(AppointmentSchema.Instance.ConferenceType);
    }
    set ConferenceType(value: number) {
        this.PropertyBag._setItem(AppointmentSchema.Instance.ConferenceType, value);
    }
    
    /**
     * Gets or sets a value indicating whether new time proposals are allowed for attendees of this meeting.
     */
    get AllowNewTimeProposal(): boolean {
        return <boolean>this.PropertyBag._getItem(AppointmentSchema.Instance.AllowNewTimeProposal);
    }
    set AllowNewTimeProposal(value: boolean) {
        this.PropertyBag._setItem(AppointmentSchema.Instance.AllowNewTimeProposal, value);
    }
    
    /**
     * Gets or sets a value indicating whether this is an online meeting.
     */
    get IsOnlineMeeting(): boolean {
        return <boolean>this.PropertyBag._getItem(AppointmentSchema.Instance.IsOnlineMeeting);
    }
    set IsOnlineMeeting(value: boolean) {
        this.PropertyBag._setItem(AppointmentSchema.Instance.IsOnlineMeeting, value);
    }
    
    /**
     * Gets or sets the URL of the meeting workspace. A meeting workspace is a shared Web site for planning meetings and tracking results.
     */
    get MeetingWorkspaceUrl(): string {
        return <string>this.PropertyBag._getItem(AppointmentSchema.Instance.MeetingWorkspaceUrl);
    }
    set MeetingWorkspaceUrl(value: string) {
        this.PropertyBag._setItem(AppointmentSchema.Instance.MeetingWorkspaceUrl, value);
    }
    
    /**
     * Gets or sets the URL of the Microsoft NetShow online meeting.
     */
    get NetShowUrl(): string {
        return <string>this.PropertyBag._getItem(AppointmentSchema.Instance.NetShowUrl);
    }
    set NetShowUrl(value: string) {
        this.PropertyBag._setItem(AppointmentSchema.Instance.NetShowUrl, value);
    }
    
    /**
     * Gets or sets the ICalendar Uid.
     */
    get ICalUid(): string {
        return <string>this.PropertyBag._getItem(AppointmentSchema.Instance.ICalUid);
    }
    set ICalUid(value: string) {
        this.PropertyBag._setItem(AppointmentSchema.Instance.ICalUid, value);
    }
    
    /**
     * Gets the ICalendar RecurrenceId.
     */
    get ICalRecurrenceId(): DateTime {
        return <DateTime>this.PropertyBag._getItem(AppointmentSchema.Instance.ICalRecurrenceId);
    }
    
    /**
     * Gets the ICalendar DateTimeStamp.
     */
    get ICalDateTimeStamp(): DateTime {
        return <DateTime>this.PropertyBag._getItem(AppointmentSchema.Instance.ICalDateTimeStamp);
    }
    
    /**
     * Gets or sets the Enhanced location object.
     */
    get EnhancedLocation(): EnhancedLocation {
        return <EnhancedLocation>this.PropertyBag._getItem(AppointmentSchema.Instance.EnhancedLocation);
    }
    set EnhancedLocation(value: EnhancedLocation) {
        this.PropertyBag._setItem(AppointmentSchema.Instance.EnhancedLocation, value);
    }
    
    /**
     * Gets the Url for joining an online meeting
     */
    get JoinOnlineMeetingUrl(): string {
        return <string>this.PropertyBag._getItem(AppointmentSchema.Instance.JoinOnlineMeetingUrl);
    }
    
    /**
     * Gets the Online Meeting Settings
     */
    get OnlineMeetingSettings(): OnlineMeetingSettings {
        return <OnlineMeetingSettings>this.PropertyBag._getItem(AppointmentSchema.Instance.OnlineMeetingSettings);
    }

    /**
     * Initializes an unsaved local instance of . To bind to an existing appointment, use Appointment.Bind() instead.
     *
     * @param   {ExchangeService}   service   The ExchangeService instance to which this appointmtnt is bound.
     */
    constructor(svc: ExchangeService);
    /**
     * @internal Initializes a new instance of Appointment.
     *
     * @param   {ItemAttachment}  parentAttachment   Parent attachment.
     * @param   {boolean}         isNew              If true, attachment is new.
     */
    constructor(parentAttachment: ItemAttachment, isNew: boolean);
    constructor(svcOrAttachment: ExchangeService | ItemAttachment, isNew: boolean = false) {
        super(svcOrAttachment);
        if (svcOrAttachment instanceof ItemAttachment) { //todo:fix -can not user instanceof with exchangeservice, creates circular loop with ewsutility
            var parentAttachment = svcOrAttachment;
            if (parentAttachment.Service.RequestedServerVersion == ExchangeVersion.Exchange2007_SP1) {
                if (isNew) {
                    this.StartTimeZone = parentAttachment.Service.TimeZone;
                }
            }
        }
    }

    /**
     * Accepts the meeting. Calling this method results in a call to EWS.
     *
     * @param   {boolean}   sendResponse   Indicates whether to send a response to the organizer.
     * @return  {IPromise<CalendarActionResults>}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation :Promise.
     */
    Accept(sendResponse: boolean): IPromise<CalendarActionResults> { return this.InternalAccept(false, sendResponse); }
    /**
     * Tentatively accepts the meeting. Calling this method results in a call to EWS.
     *
     * @param   {boolean}   sendResponse   Indicates whether to send a response to the organizer.
     * @return  {IPromise<CalendarActionResults>}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation :Promise.
     */
    AcceptTentatively(sendResponse: boolean): IPromise<CalendarActionResults> { return this.InternalAccept(true, sendResponse); }

    /**
     * Binds to an existing appointment and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}     service       The service to use to bind to the appointment.
     * @param   {ItemId}              id            The Id of the appointment to bind to.
     * @return  {IPromise<Appointment>}   An Appointment instance representing the appointment corresponding to the specified Id :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId): IPromise<Appointment>;
    /**
    * Binds to an existing appointment and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}     service       The service to use to bind to the appointment.
     * @param   {ItemId}              id            The Id of the appointment to bind to.
     * @param   {PropertySet}         propertySet   The set of properties to load.     
     * @return  {IPromise<Appointment>}   An Appointment instance representing the appointment corresponding to the specified Id :Promise.
     */
    static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): IPromise<Appointment>;
    static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet = PropertySet.FirstClassProperties): IPromise<Appointment> { return service.BindToItem<Appointment>(id, propertySet, Appointment); }

    /**
     * Binds to an occurence of an existing appointment and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}  service             The service to use to bind to the appointment.
     * @param   {ItemId}           recurringMasterId   The Id of the recurring master that the index represents an occurrence of.
     * @param   {number}           occurenceIndex      The index of the occurrence.
     * @return  {IPromise<Appointment>}                An Appointment instance representing the appointment occurence corresponding to the specified occurence index :Promise.
     */
    static BindToOccurrence(service: ExchangeService, recurringMasterId: ItemId, occurenceIndex: number): IPromise<Appointment>;
    /**
     * Binds to an occurence of an existing appointment and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}  service             The service to use to bind to the appointment.
     * @param   {ItemId}           recurringMasterId   The Id of the recurring master that the index represents an occurrence of.
     * @param   {number}           occurenceIndex      The index of the occurrence.
     * @param   {PropertySet}      propertySet         The set of properties to load.
     * @return  {IPromise<Appointment>}                An Appointment instance representing the appointment occurence corresponding to the specified occurence index :Promise.
     */
    static BindToOccurrence(service: ExchangeService, recurringMasterId: ItemId, occurenceIndex: number, propertySet: PropertySet): IPromise<Appointment>;
    static BindToOccurrence(service: ExchangeService, recurringMasterId: ItemId, occurenceIndex: number, propertySet: PropertySet = PropertySet.FirstClassProperties): IPromise<Appointment> {
        var occurenceId: AppointmentOccurrenceId = new AppointmentOccurrenceId(recurringMasterId.UniqueId, occurenceIndex);
        return Appointment.Bind(
            service,
            occurenceId,
            propertySet);
    }

    /**
     * Binds to the master appointment of a recurring series and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}     service        The service to use to bind to the appointment.
     * @param   {ItemId}              occurrenceId   The Id of one of the occurrences in the series.
     * @return  {IPromise<Appointment>}   An Appointment instance representing the master appointment of the recurring series to which the specified occurrence belongs :Promise.
     */
    static BindToRecurringMaster(service: ExchangeService, occurrenceId: ItemId): IPromise<Appointment>;
    /**
     * Binds to the master appointment of a recurring series and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {ExchangeService}     service        The service to use to bind to the appointment.
     * @param   {ItemId}              occurrenceId   The Id of one of the occurrences in the series.
     * @param   {PropertySet}         propertySet    The set of properties to load.
     * @return  {IPromise<Appointment>}   An Appointment instance representing the master appointment of the recurring series to which the specified occurrence belongs :Promise.
     */
    static BindToRecurringMaster(service: ExchangeService, occurrenceId: ItemId, propertySet: PropertySet): IPromise<Appointment>;
    static BindToRecurringMaster(service: ExchangeService, occurrenceId: ItemId, propertySet: PropertySet = PropertySet.FirstClassProperties): IPromise<Appointment> {
        var recurringMasterId: RecurringAppointmentMasterId = new RecurringAppointmentMasterId(occurrenceId.UniqueId);
        return Appointment.Bind(
            service,
            recurringMasterId,
            propertySet);
    }

    /**
     * Cancels the meeting and sends cancellation messages to all attendees. Calling this method results in a call to EWS.
     *
     * @return  {IPromise<CalendarActionResults>}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation :Promise.
     */
    CancelMeeting(): IPromise<CalendarActionResults>;
    /**
     * Cancels the meeting and sends cancellation messages to all attendees. Calling this method results in a call to EWS.
     *
     * @param   {string}   cancellationMessageText   Cancellation message text sent to all attendees.
     * @return  {IPromise<CalendarActionResults>}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation :Promise.
     */
    CancelMeeting(cancellationMessageText: string): IPromise<CalendarActionResults>;
    CancelMeeting(cancellationMessageText?: string): IPromise<CalendarActionResults> {
        if (arguments.length === 0) {
            return this.CreateCancelMeetingMessage().SendAndSaveCopy();
        }

        var cancelMsg: CancelMeetingMessage = this.CreateCancelMeetingMessage();
        cancelMsg.Body = new MessageBody(cancellationMessageText); //todo:fix - cant use implicit operator of c#, using explicit. Assumed HTML body used in c# implicit conversion
        return cancelMsg.SendAndSaveCopy();
    }

    /**
     * Creates a local meeting acceptance message that can be customized and sent.
     *
     * @param   {boolean}   tentative   Specifies whether the meeting will be tentatively accepted.
     * @return  {AcceptMeetingInvitationMessage}  An AcceptMeetingInvitationMessage representing the meeting acceptance message.
     */
    CreateAcceptMessage(tentative: boolean): AcceptMeetingInvitationMessage { return new AcceptMeetingInvitationMessage(this, tentative); }
    /**
     * Creates a local meeting cancellation message that can be customized and sent.
     *
     * @return  {CancelMeetingMessage}    A CancelMeetingMessage representing the meeting cancellation message.
     */
    CreateCancelMeetingMessage(): CancelMeetingMessage { return new CancelMeetingMessage(this); }
    /**
     * Creates a local meeting declination message that can be customized and sent.
     *
     * @return  {DeclineMeetingInvitationMessage}      A DeclineMeetingInvitation representing the meeting declination message.
     */
    CreateDeclineMessage(): DeclineMeetingInvitationMessage { return new DeclineMeetingInvitationMessage(this); }
    /**
     * Creates a forward message from this appointment.
     *
     * @return  {ResponseMessage} A ResponseMessage representing the forward response that can subsequently be modified and sent.
     */
    CreateForward(): ResponseMessage {
        this.ThrowIfThisIsNew();

        return new ResponseMessage(this, ResponseMessageType.Forward);
    }
    
    /**
     * Creates a reply response to the organizer and/or attendees of the meeting.
     *
     * @param   {boolean}   replyAll   Indicates whether the reply should go to the organizer only or to all the attendees.
     * @return  {ResponseMessage} A ResponseMessage representing the reply response that can subsequently be modified and sent.
     */
    CreateReply(replyAll: boolean): ResponseMessage {
        this.ThrowIfThisIsNew();

        return new ResponseMessage(
            this,
            replyAll ? ResponseMessageType.ReplyAll : ResponseMessageType.Reply);
    }
    
    /**
     * Declines the meeting invitation. Calling this method results in a call to EWS.
     *
     * @param   {boolean}   sendResponse   Indicates whether to send a response to the organizer.
     * @return  {IPromise<CalendarActionResults>}   A CalendarActionResults object containing the various items that were created or modified as aresults of this operation :Promise.
     */
    Decline(sendResponse: boolean): IPromise<CalendarActionResults> {
        var decline: DeclineMeetingInvitationMessage = this.CreateDeclineMessage();

        if (sendResponse) {
            return decline.SendAndSaveCopy();
        }
        else {
            return decline.Save();
        }
    }
    
    /**
     * Deletes this appointment. Calling this method results in a call to EWS.
     *
     * @param   {DeleteMode}   deleteMode              The deletion mode.
     * @param   {SendCancellationsMode}   sendCancellationsMode   Specifies if and how cancellations should be sent if this appointment is a meeting.
     */
    Delete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode): IPromise<void> {
        return this.InternalDelete(
            deleteMode,
            sendCancellationsMode,
            null);
    }
    
    //Forward(bodyPrefix: MessageBody, toRecipients: System.Collections.Generic.IEnumerable<T>): void;
    /**
     * Forwards the appointment. Calling this method results in a call to EWS.
     *
     * @param   {MessageBody}     bodyPrefix     The prefix to prepend to the original body of the message.
     * @param   {EmailAddress[]}  toRecipients   The recipients to forward the appointment to.
     */
    Forward(bodyPrefix: MessageBody, toRecipients: EmailAddress[]): IPromise<void> {
        var responseMessage: ResponseMessage = this.CreateForward();

        responseMessage.BodyPrefix = bodyPrefix;
        responseMessage.ToRecipients.AddRange(toRecipients);

        return responseMessage.SendAndSaveCopy();
    }
     
    /**
     * @internal Determines whether properties defined with ScopedDateTimePropertyDefinition require custom time zone scoping.
     *
     * @return  {boolean}      true if this item type requires custom scoping for scoped date/time properties; otherwise, false.
     */
    GetIsCustomDateTimeScopingRequired(): boolean { return true; }
    
    /**
     * @internal Gets a value indicating whether a time zone SOAP header should be emitted in a CreateItem or UpdateItem request so this item can be property saved or updated.
     *
     * @param   {boolean}   isUpdateOperation   Indicates whether the operation being petrformed is an update operation.
     * @return  {boolean}                       true if a time zone SOAP header should be emitted; otherwise, false.
     */
    GetIsTimeZoneHeaderRequired(isUpdateOperation: boolean): boolean {
        if (isUpdateOperation) {
            return false;
        }
        else {
            var isStartTimeZoneSetOrUpdated: boolean = this.PropertyBag.IsPropertyUpdated(AppointmentSchema.Instance.StartTimeZone);
            var isEndTimeZoneSetOrUpdated: boolean = this.PropertyBag.IsPropertyUpdated(AppointmentSchema.Instance.EndTimeZone);

            if (isStartTimeZoneSetOrUpdated && isEndTimeZoneSetOrUpdated) {
                // If both StartTimeZone and EndTimeZone have been set or updated and are the same as the service's
                // time zone, we emit the time zone header and StartTimeZone and EndTimeZone are not emitted.
                var startTimeZone: IOutParam<TimeZoneInfo> = { outValue: null };
                var endTimeZone: IOutParam<TimeZoneInfo> = { outValue: null };;

                this.PropertyBag.TryGetPropertyAs<TimeZoneInfo>(AppointmentSchema.Instance.StartTimeZone, startTimeZone);
                this.PropertyBag.TryGetPropertyAs<TimeZoneInfo>(AppointmentSchema.Instance.EndTimeZone, endTimeZone);

                return startTimeZone.outValue == this.Service.TimeZone || endTimeZone.outValue == this.Service.TimeZone;
            }
            else {
                return true;
            }
        }
    }
    
    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
    
    /**
     * @internal Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    GetSchema(): ServiceObjectSchema { return AppointmentSchema.Instance; }
    
    /**
     * @internal Gets the element name of item in XML
     * 
     * @return  {string} name of elelment
     */
    GetXmlElementName(): string { return XmlElementNames.CalendarItem; }
    
    /**
     * @internal Accepts the meeting.
     *
     * @param   {boolean}   tentative      True if tentative accept.
     * @param   {boolean}   sendResponse   Indicates whether to send a response to the organizer.
     * @return  {IPromise<CalendarActionResults>}    A CalendarActionResults object containing the various items that were created or modified as aresults of this operation :Promise.
     */
    InternalAccept(tentative: boolean, sendResponse: boolean): IPromise<CalendarActionResults> {
        var accept: AcceptMeetingInvitationMessage = this.CreateAcceptMessage(tentative);

        if (sendResponse) {
            return accept.SendAndSaveCopy();
        }
        else {
            return accept.Save();
        }
    }
    
    /**
     * Replies to the organizer and/or the attendees of the meeting. Calling this method results in a call to EWS.
     *
     * @param   {MessageBody}     bodyPrefix   The prefix to prepend to the body of the meeting.
     * @param   {boolean}         replyAll     Indicates whether the reply should go to the organizer only or to all the attendees.
     */
    Reply(bodyPrefix: MessageBody, replyAll: boolean): IPromise<void> {
        var responseMessage: ResponseMessage = this.CreateReply(replyAll);

        responseMessage.BodyPrefix = bodyPrefix;

        return responseMessage.SendAndSaveCopy();
    }
    
    /**
     * Saves this appointment in the Calendar folder. Calling this method results in at least one call to EWS. Mutliple calls to EWS might be made if attachments have been added.
     *
     * @param   {SendInvitationsMode}   sendInvitationsMode   Specifies if and how invitations should be sent if this appointment is a meeting.
     */
    Save(sendInvitationsMode: SendInvitationsMode): IPromise<void>;
    /**
     * Saves this appointment in the specified folder. Calling this method results in at least one call to EWS. Mutliple calls to EWS might be made if attachments have been added.
     *
     * @param   {WellKnownFolderName}   destinationFolderName   The name of the folder in which to save this appointment.
     * @param   {SendInvitationsMode}   sendInvitationsMode     Specifies if and how invitations should be sent if this appointment is a meeting.
     */
    Save(destinationFolderName: WellKnownFolderName, sendInvitationsMode: SendInvitationsMode): IPromise<void>;
    /**
     * Saves this appointment in the specified folder. Calling this method results in at least one call to EWS. Mutliple calls to EWS might be made if attachments have been added.
     *
     * @param   {FolderId}                destinationFolderId   The Id of the folder in which to save this appointment.
     * @param   {SendInvitationsMode}     sendInvitationsMode   Specifies if and how invitations should be sent if this appointment is a meeting.
     */
    Save(destinationFolderId: FolderId, sendInvitationsMode: SendInvitationsMode): IPromise<void>;
    Save(destinationFolderNameOrIdOrSendInvitationMode: FolderId | WellKnownFolderName | SendInvitationsMode,
        sendInvitationsMode?: SendInvitationsMode): IPromise<void> {

        var argsLength = arguments.length;
        if (argsLength < 1 || argsLength > 2) {
            throw new Error("Appointment.ts - Save : Invalid number of arguments");
        }
        var simode = sendInvitationsMode;
        if (argsLength === 1) {
            simode = <SendInvitationsMode>destinationFolderNameOrIdOrSendInvitationMode;
            return this.InternalCreate(
                null,
                null,
                simode);
        }
        var destinationFolderId: FolderId = <FolderId>destinationFolderNameOrIdOrSendInvitationMode;
        if (argsLength === 2) {
            if (typeof destinationFolderNameOrIdOrSendInvitationMode === "number") {
                destinationFolderId = new FolderId(<WellKnownFolderName>destinationFolderNameOrIdOrSendInvitationMode);
            }
            return this.InternalCreate(
                destinationFolderId,
                null,
                sendInvitationsMode);
        }
    }
    
    /**
     * Applies the local changes that have been made to this appointment. Calling this method results in at least one call to EWS. Mutliple calls to EWS might be made if attachments have been added or removed.
     *
     * @param   {ConflictResolutionMode}   conflictResolutionMode               Specifies how conflicts should be resolved.
     * @param   {SendInvitationsOrCancellationsMode}   sendInvitationsOrCancellationsMode   Specifies if and how invitations or cancellations should be sent if this appointment is a meeting.
     */
    Update(conflictResolutionMode: ConflictResolutionMode, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode): IPromise<void> {
        return <any>this.InternalUpdate(
            null,
            conflictResolutionMode,
            null,
            sendInvitationsOrCancellationsMode);
    }
    
    /**
     * @internal Validates this instance.
     *
     */
    Validate(): void {
        super.Validate();

        //  Make sure that if we're on the Exchange2007_SP1 schema version, if any of the following
        //  properties are set or updated:
        //      o   Start
        //      o   End
        //      o   IsAllDayEvent
        //      o   Recurrence
        //  ... then, we must send the MeetingTimeZone element (which is generated from StartTimeZone for
        //  Exchange2007_SP1 requests (see StartTimeZonePropertyDefinition.cs).  If the StartTimeZone isn't
        //  in the property bag, then throw, because clients must supply the proper time zone - either by
        //  loading it from a currently-existing appointment, or by setting it directly.  Otherwise, to dirty
        //  the StartTimeZone property, we just set it to its current value.
        if ((this.Service.RequestedServerVersion == ExchangeVersion.Exchange2007_SP1) &&
            !this.Service.Exchange2007CompatibilityMode) {
            if (this.PropertyBag.IsPropertyUpdated(AppointmentSchema.Instance.Start) ||
                this.PropertyBag.IsPropertyUpdated(AppointmentSchema.Instance.End) ||
                this.PropertyBag.IsPropertyUpdated(AppointmentSchema.Instance.IsAllDayEvent) ||
                this.PropertyBag.IsPropertyUpdated(AppointmentSchema.Instance.Recurrence)) {
                //  If the property isn't in the property bag, throw....
                if (!this.PropertyBag.Contains(AppointmentSchema.Instance.StartTimeZone)) {
                    throw new ServiceLocalException(Strings.StartTimeZoneRequired);
                }

                //  Otherwise, set the time zone to its current value to force it to be sent with the request.
                this.StartTimeZone = this.StartTimeZone;
            }
        }
    }
}
