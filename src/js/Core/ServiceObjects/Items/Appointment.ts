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
export class Appointment extends Item implements ICalendarActionProvider {
    //todo: attachable attribute missing. 
    get DefaultSendCancellationsMode(): SendCancellationsMode {
        return SendCancellationsMode.SendToAllAndSaveCopy;
    }
    get DefaultSendInvitationsMode(): SendInvitationsMode {
        return SendInvitationsMode.SendToAllAndSaveCopy;
    }
    get DefaultSendInvitationsOrCancellationsMode(): SendInvitationsOrCancellationsMode {
        return SendInvitationsOrCancellationsMode.SendToAllAndSaveCopy;
    }
    get Start(): DateTime {
        return <DateTime>this.PropertyBag._getItem(AppointmentSchema.Instance.Start);
    }
    set Start(value: DateTime) {
        this.PropertyBag._setItem(AppointmentSchema.Instance.Start, value);
    }
    get End(): DateTime {
        return <DateTime>this.PropertyBag._getItem(AppointmentSchema.Instance.End);
    }
    set End(value: DateTime) {
        this.PropertyBag._setItem(AppointmentSchema.Instance.End, value);
    }
    get OriginalStart(): DateTime {
        return <DateTime>this.PropertyBag._getItem(AppointmentSchema.Instance.OriginalStart);
    }
    get IsAllDayEvent(): boolean {
        return <boolean>this.PropertyBag._getItem(AppointmentSchema.Instance.IsAllDayEvent);
    }
    set IsAllDayEvent(value: boolean) {
        this.PropertyBag._setItem(AppointmentSchema.Instance.IsAllDayEvent, value);
    }
    get LegacyFreeBusyStatus(): LegacyFreeBusyStatus {
        return <LegacyFreeBusyStatus>this.PropertyBag._getItem(AppointmentSchema.Instance.LegacyFreeBusyStatus);
    }
    set LegacyFreeBusyStatus(value: LegacyFreeBusyStatus) {
        this.PropertyBag._setItem(AppointmentSchema.Instance.LegacyFreeBusyStatus, value);
    }
    get Location(): string {
        return <string>this.PropertyBag._getItem(AppointmentSchema.Instance.Location);
    }
    set Location(value: string) {
        this.PropertyBag._setItem(AppointmentSchema.Instance.Location, value);
    }
    get When(): string {
        return <string>this.PropertyBag._getItem(AppointmentSchema.Instance.When);
    }
    get IsMeeting(): boolean {
        return <boolean>this.PropertyBag._getItem(AppointmentSchema.Instance.IsMeeting);
    }
    get IsCancelled(): boolean {
        return <boolean>this.PropertyBag._getItem(AppointmentSchema.Instance.IsCancelled);
    }
    get IsRecurring(): boolean {
        return <boolean>this.PropertyBag._getItem(AppointmentSchema.Instance.IsRecurring);
    }
    get MeetingRequestWasSent(): boolean {
        return <boolean>this.PropertyBag._getItem(AppointmentSchema.Instance.MeetingRequestWasSent);
    }
    set IsResponseRequested(value: boolean) {
        this.PropertyBag._setItem(AppointmentSchema.Instance.IsResponseRequested, value);
    }
    get IsResponseRequested(): boolean {
        return <boolean>this.PropertyBag._getItem(AppointmentSchema.Instance.IsResponseRequested);
    }
    get AppointmentType(): AppointmentType {
        return <AppointmentType>this.PropertyBag._getItem(AppointmentSchema.Instance.AppointmentType);
    }
    get MyResponseType(): MeetingResponseType {
        return <MeetingResponseType>this.PropertyBag._getItem(AppointmentSchema.Instance.MyResponseType);
    }
    get Organizer(): EmailAddress {
        return <EmailAddress>this.PropertyBag._getItem(AppointmentSchema.Instance.Organizer);
    }
    get RequiredAttendees(): AttendeeCollection {
        return <AttendeeCollection>this.PropertyBag._getItem(AppointmentSchema.Instance.RequiredAttendees);
    }
    get OptionalAttendees(): AttendeeCollection {
        return <AttendeeCollection>this.PropertyBag._getItem(AppointmentSchema.Instance.OptionalAttendees);
    }
    get Resources(): AttendeeCollection {
        return <AttendeeCollection>this.PropertyBag._getItem(AppointmentSchema.Instance.Resources);
    }
    get ConflictingMeetingCount(): number {
        return <number>this.PropertyBag._getItem(AppointmentSchema.Instance.ConflictingMeetingCount);
    }
    get AdjacentMeetingCount(): number {
        return <number>this.PropertyBag._getItem(AppointmentSchema.Instance.AdjacentMeetingCount);
    }
    get ConflictingMeetings(): ItemCollection<Appointment> {
        return <ItemCollection<Appointment>>this.PropertyBag._getItem(AppointmentSchema.Instance.ConflictingMeetings);
    }
    get AdjacentMeetings(): ItemCollection<Appointment> {
        return <ItemCollection<Appointment>>this.PropertyBag._getItem(AppointmentSchema.Instance.AdjacentMeetings);
    }
    get Duration(): TimeSpan {
        return <TimeSpan>this.PropertyBag._getItem(AppointmentSchema.Instance.Duration);
    }
    get TimeZone(): string {
        return <string>this.PropertyBag._getItem(AppointmentSchema.Instance.TimeZone);
    }
    get AppointmentReplyTime(): DateTime {
        return <DateTime>this.PropertyBag._getItem(AppointmentSchema.Instance.AppointmentReplyTime);
    }
    get AppointmentSequenceNumber(): number {
        return <number>this.PropertyBag._getItem(AppointmentSchema.Instance.AppointmentSequenceNumber);
    }
    get AppointmentState(): number {
        return <number>this.PropertyBag._getItem(AppointmentSchema.Instance.AppointmentState);
    }
    get Recurrence(): Recurrence {
        return <Recurrence>this.PropertyBag._getItem(AppointmentSchema.Instance.Recurrence);
    }
    set Recurrence(value: Recurrence) {
        if (value !== null && value.IsRegenerationPattern) {
            throw new ServiceLocalException(Strings.RegenerationPatternsOnlyValidForTasks);
        }
        this.PropertyBag._setItem(AppointmentSchema.Instance.Recurrence, value);
    }
    get FirstOccurrence(): OccurrenceInfo {
        return <OccurrenceInfo>this.PropertyBag._getItem(AppointmentSchema.Instance.FirstOccurrence);
    }
    get LastOccurrence(): OccurrenceInfo {
        return <OccurrenceInfo>this.PropertyBag._getItem(AppointmentSchema.Instance.LastOccurrence);
    }
    get ModifiedOccurrences(): OccurrenceInfoCollection {
        return <OccurrenceInfoCollection>this.PropertyBag._getItem(AppointmentSchema.Instance.ModifiedOccurrences);
    }
    get DeletedOccurrences(): DeletedOccurrenceInfoCollection {
        return <DeletedOccurrenceInfoCollection>this.PropertyBag._getItem(AppointmentSchema.Instance.DeletedOccurrences);
    }
    get StartTimeZone(): TimeZoneInfo {
        return <TimeZoneInfo>this.PropertyBag._getItem(AppointmentSchema.Instance.StartTimeZone);
    }
    set StartTimeZone(value: TimeZoneInfo) {
        this.PropertyBag._setItem(AppointmentSchema.Instance.StartTimeZone, value);
    }
    get EndTimeZone(): TimeZoneInfo {
        return <TimeZoneInfo>this.PropertyBag._getItem(AppointmentSchema.Instance.EndTimeZone);
    }
    set EndTimeZone(value: TimeZoneInfo) {
        this.PropertyBag._setItem(AppointmentSchema.Instance.EndTimeZone, value);
    }
    get ConferenceType(): number {
        return <number>this.PropertyBag._getItem(AppointmentSchema.Instance.ConferenceType);
    }
    set ConferenceType(value: number) {
        this.PropertyBag._setItem(AppointmentSchema.Instance.ConferenceType, value);
    }
    get AllowNewTimeProposal(): boolean {
        return <boolean>this.PropertyBag._getItem(AppointmentSchema.Instance.AllowNewTimeProposal);
    }
    set AllowNewTimeProposal(value: boolean) {
        this.PropertyBag._setItem(AppointmentSchema.Instance.AllowNewTimeProposal, value);
    }
    get IsOnlineMeeting(): boolean {
        return <boolean>this.PropertyBag._getItem(AppointmentSchema.Instance.IsOnlineMeeting);
    }
    set IsOnlineMeeting(value: boolean) {
        this.PropertyBag._setItem(AppointmentSchema.Instance.IsOnlineMeeting, value);
    }
    get MeetingWorkspaceUrl(): string {
        return <string>this.PropertyBag._getItem(AppointmentSchema.Instance.MeetingWorkspaceUrl);
    }
    set MeetingWorkspaceUrl(value: string) {
        this.PropertyBag._setItem(AppointmentSchema.Instance.MeetingWorkspaceUrl, value);
    }
    get NetShowUrl(): string {
        return <string>this.PropertyBag._getItem(AppointmentSchema.Instance.NetShowUrl);
    }
    set NetShowUrl(value: string) {
        this.PropertyBag._setItem(AppointmentSchema.Instance.NetShowUrl, value);
    }
    get ICalUid(): string {
        return <string>this.PropertyBag._getItem(AppointmentSchema.Instance.ICalUid);
    }
    set ICalUid(value: string) {
        this.PropertyBag._setItem(AppointmentSchema.Instance.ICalUid, value);
    }
    get ICalRecurrenceId(): DateTime {
        return <DateTime>this.PropertyBag._getItem(AppointmentSchema.Instance.ICalRecurrenceId);
    }
    get ICalDateTimeStamp(): DateTime {
        return <DateTime>this.PropertyBag._getItem(AppointmentSchema.Instance.ICalDateTimeStamp);
    }
    get EnhancedLocation(): EnhancedLocation {
        return <EnhancedLocation>this.PropertyBag._getItem(AppointmentSchema.Instance.EnhancedLocation);
    }
    set EnhancedLocation(value: EnhancedLocation) {
        this.PropertyBag._setItem(AppointmentSchema.Instance.EnhancedLocation, value);
    }
    get JoinOnlineMeetingUrl(): string {
        return <string>this.PropertyBag._getItem(AppointmentSchema.Instance.JoinOnlineMeetingUrl);
    }
    get OnlineMeetingSettings(): OnlineMeetingSettings {
        return <OnlineMeetingSettings>this.PropertyBag._getItem(AppointmentSchema.Instance.OnlineMeetingSettings);
    }

    constructor(svc: ExchangeService);
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
     * @param   {[boolean]}   sendResponse   Indicates whether to send a response to the organizer.
     * @return  {[CalendarActionResults]}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
     */
    Accept(sendResponse: boolean): CalendarActionResults { return this.InternalAccept(false, sendResponse); }
    /**
     * Tentatively accepts the meeting. Calling this method results in a call to EWS.
     *
     * @param   {[boolean]}   sendResponse   Indicates whether to send a response to the organizer.
     * @return  {[CalendarActionResults]}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
     */
    AcceptTentatively(sendResponse: boolean): CalendarActionResults { return this.InternalAccept(true, sendResponse); }

    /**
     * Binds to an existing appointment and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {[ExchangeService]}     service       The service to use to bind to the appointment.
     * @param   {[ItemId]}              id            The Id of the appointment to bind to.
     * @return  {[IPromise<Appointment>]}   An Appointment instance representing the appointment corresponding to the specified Id.
     */
    static Bind(service: ExchangeService, id: ItemId): IPromise<Appointment>;
    /**
    * Binds to an existing appointment and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {[ExchangeService]}     service       The service to use to bind to the appointment.
     * @param   {[ItemId]}              id            The Id of the appointment to bind to.
     * @param   {[PropertySet]}         propertySet   The set of properties to load.     
     * @return  {[IPromise<Appointment>]}   An Appointment instance representing the appointment corresponding to the specified Id.
     */
    static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet): IPromise<Appointment>;
    static Bind(service: ExchangeService, id: ItemId, propertySet: PropertySet = PropertySet.FirstClassProperties): IPromise<Appointment> { return service.BindToItem<Appointment>(id, propertySet, Appointment); }

    /**
     * Binds to an occurence of an existing appointment and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {[ExchangeService]}  service             The service to use to bind to the appointment.
     * @param   {[ItemId]}           recurringMasterId   The Id of the recurring master that the index represents an occurrence of.
     * @param   {[number]}           occurenceIndex      The index of the occurrence.
     * @return  {[IPromise<Appointment>]}                An Appointment instance representing the appointment occurence corresponding to the specified occurence index.
     */
    static BindToOccurrence(service: ExchangeService, recurringMasterId: ItemId, occurenceIndex: number): IPromise<Appointment>;
    /**
     * Binds to an occurence of an existing appointment and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {[ExchangeService]}  service             The service to use to bind to the appointment.
     * @param   {[ItemId]}           recurringMasterId   The Id of the recurring master that the index represents an occurrence of.
     * @param   {[number]}           occurenceIndex      The index of the occurrence.
     * @param   {[PropertySet]}      propertySet         The set of properties to load.
     * @return  {[IPromise<Appointment>]}                An Appointment instance representing the appointment occurence corresponding to the specified occurence index.
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
     * @param   {[ExchangeService]}     service        The service to use to bind to the appointment.
     * @param   {[ItemId]}              occurrenceId   The Id of one of the occurrences in the series.
     * @return  {[IPromise<Appointment>]}   An Appointment instance representing the master appointment of the recurring series to which the specified occurrence belongs.
     */
    static BindToRecurringMaster(service: ExchangeService, occurrenceId: ItemId): IPromise<Appointment>;
    /**
     * Binds to the master appointment of a recurring series and loads the specified set of properties. Calling this method results in a call to EWS.
     *
     * @param   {[ExchangeService]}     service        The service to use to bind to the appointment.
     * @param   {[ItemId]}              occurrenceId   The Id of one of the occurrences in the series.
     * @param   {[PropertySet]}         propertySet    The set of properties to load.
     * @return  {[IPromise<Appointment>]}   An Appointment instance representing the master appointment of the recurring series to which the specified occurrence belongs.
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
     * @return  {[CalendarActionResults]}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
     */
    CancelMeeting(): CalendarActionResults;
    /**
     * Cancels the meeting and sends cancellation messages to all attendees. Calling this method results in a call to EWS.
     *
     * @param   {[string]}   cancellationMessageText   Cancellation message text sent to all attendees.
     * @return  {[CalendarActionResults]}   A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
     */
    CancelMeeting(cancellationMessageText: string): CalendarActionResults;
    CancelMeeting(cancellationMessageText?: string): CalendarActionResults {
        if (arguments.length === 0) {
            return this.CreateCancelMeetingMessage().SendAndSaveCopy();
        }

        var cancelMsg: CancelMeetingMessage = this.CreateCancelMeetingMessage();
        cancelMsg.Body = new MessageBody(cancellationMessageText); //todo:fix - cant use implicit operator of c#, using explicit. Assumed HTML body
        return cancelMsg.SendAndSaveCopy();
    }

    /**
     * Creates a local meeting acceptance message that can be customized and sent.
     *
     * @param   {[boolean]}   tentative   Specifies whether the meeting will be tentatively accepted.
     * @return  {[AcceptMeetingInvitationMessage]}  An AcceptMeetingInvitationMessage representing the meeting acceptance message.
     */
    CreateAcceptMessage(tentative: boolean): AcceptMeetingInvitationMessage { return new AcceptMeetingInvitationMessage(this, tentative); }
    /**
     * Creates a local meeting cancellation message that can be customized and sent.
     *
     * @return  {[CancelMeetingMessage]}    A CancelMeetingMessage representing the meeting cancellation message.
     */
    CreateCancelMeetingMessage(): CancelMeetingMessage { return new CancelMeetingMessage(this); }
    /**
     * Creates a local meeting declination message that can be customized and sent.
     *
     * @return  {[DeclineMeetingInvitationMessage]}      A DeclineMeetingInvitation representing the meeting declination message.
     */
    CreateDeclineMessage(): DeclineMeetingInvitationMessage { return new DeclineMeetingInvitationMessage(this); }
    /**
     * Creates a forward message from this appointment.
     *
     * @return  {[ResponseMessage]} A ResponseMessage representing the forward response that can subsequently be modified and sent.
     */
    CreateForward(): ResponseMessage {
        this.ThrowIfThisIsNew();

        return new ResponseMessage(this, ResponseMessageType.Forward);
    }
    /**
     * Creates a reply response to the organizer and/or attendees of the meeting.
     *
     * @param   {[boolean]}   replyAll   Indicates whether the reply should go to the organizer only or to all the attendees.
     * @return  {[ResponseMessage]} A ResponseMessage representing the reply response that can subsequently be modified and sent.
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
     * @param   {[boolean]}   sendResponse   Indicates whether to send a response to the organizer.
     * @return  {[CalendarActionResults]}   A CalendarActionResults object containing the various items that were created or modified as aresults of this operation.
     */
    Decline(sendResponse: boolean): CalendarActionResults {
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
     * @param   {[DeleteMode]}   deleteMode              The deletion mode.
     * @param   {[SendCancellationsMode]}   sendCancellationsMode   Specifies if and how cancellations should be sent if this appointment is a meeting.
     */
    Delete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode): IPromise<void> {
        return this.InternalDelete(
            deleteMode,
            sendCancellationsMode,
            null);
    }
    /**
     * Forwards the appointment. Calling this method results in a call to EWS.
     *
     * @param   {[MessageBody]}     bodyPrefix     The prefix to prepend to the original body of the message.
     * @param   {[EmailAddress[]]}  toRecipients   The recipients to forward the appointment to.
     */
    //Forward(bodyPrefix: MessageBody, toRecipients: System.Collections.Generic.IEnumerable<T>): void;
    Forward(bodyPrefix: MessageBody, toRecipients: EmailAddress[]): void {
        var responseMessage: ResponseMessage = this.CreateForward();

        responseMessage.BodyPrefix = bodyPrefix;
        responseMessage.ToRecipients.AddRange(toRecipients);

        responseMessage.SendAndSaveCopy();
    }
    //@internal 
    /**
     * Determines whether properties defined with ScopedDateTimePropertyDefinition require custom time zone scoping.
     *
     * @return  {[boolean]}      true if this item type requires custom scoping for scoped date/time properties; otherwise, false.
     */
    GetIsCustomDateTimeScopingRequired(): boolean { return true; }
    /**
     * Gets a value indicating whether a time zone SOAP header should be emitted in a CreateItem or UpdateItem request so this item can be property saved or updated.
     *
     * @param   {[boolean]}   isUpdateOperation   Indicates whether the operation being petrformed is an update operation.
     * @return  {[boolean]}                       true if a time zone SOAP header should be emitted; otherwise, false.
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
     * Gets the minimum required server version.
     *
     * @return  {[ExchangeVersion]}      Earliest Exchange version in which this service object type is supported.
     */
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
    /**
     * Internal method to return the schema associated with this type of object.
     *
     * @return  {[ServiceObjectSchema]}      The schema associated with this type of object.
     */
    GetSchema(): ServiceObjectSchema { return AppointmentSchema.Instance; }
    /**
     * Gets the element name of item in XML
     * 
     * @return  {[string]} name of elelment
     */
    GetXmlElementName(): string { return XmlElementNames.CalendarItem; }
    /**
     * Accepts the meeting.
     *
     * @param   {[boolean]}   tentative      True if tentative accept.
     * @param   {[boolean]}   sendResponse   Indicates whether to send a response to the organizer.
     * @return  {[CalendarActionResults]}    A CalendarActionResults object containing the various items that were created or modified as aresults of this operation.
     */
    InternalAccept(tentative: boolean, sendResponse: boolean): CalendarActionResults {
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
     * @param   {[MessageBody]}     bodyPrefix   The prefix to prepend to the body of the meeting.
     * @param   {[boolean]}         replyAll     Indicates whether the reply should go to the organizer only or to all the attendees.
     */
    Reply(bodyPrefix: MessageBody, replyAll: boolean): void {
        var responseMessage: ResponseMessage = this.CreateReply(replyAll);

        responseMessage.BodyPrefix = bodyPrefix;

        responseMessage.SendAndSaveCopy();
    }
    Save(sendInvitationsMode: SendInvitationsMode): IPromise<void>;
    Save(destinationFolderName: WellKnownFolderName, sendInvitationsMode: SendInvitationsMode): IPromise<void>;
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
                sendInvitationsMode);
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
     * @param   {[ConflictResolutionMode]}   conflictResolutionMode               Specifies how conflicts should be resolved.
     * @param   {[SendInvitationsOrCancellationsMode]}   sendInvitationsOrCancellationsMode   Specifies if and how invitations or cancellations should be sent if this appointment is a meeting.
     */
    Update(conflictResolutionMode: ConflictResolutionMode, sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode): IPromise<void> {
        return this.InternalUpdate(
            null,
            conflictResolutionMode,
            null,
            sendInvitationsOrCancellationsMode).then(() => {
                return;
            });
    }
    /**
     * Validates this instance.
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
