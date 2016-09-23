import {Appointment} from "../Core/ServiceObjects/Items/Appointment";
import {EwsUtilities} from "../Core/EwsUtilities";
import {Item} from "../Core/ServiceObjects/Items/Item";
import {MeetingCancellation} from "../Core/ServiceObjects/Items/MeetingCancellation";
import {MeetingRequest} from "../Core/ServiceObjects/Items/MeetingRequest";
import {MeetingResponse} from "../Core/ServiceObjects/Items/MeetingResponse";
import {TypeContainer} from "../TypeContainer";

/**
 * Represents the results of an action performed on a calendar item or meeting message, such as accepting, tentatively accepting or declining a meeting request.
 * 
 * @sealed
 */
export class CalendarActionResults {
	
	/**
 	 * Gets the meeting that was accepted, tentatively accepted or declined.
	 *
 	 * Remark - When a meeting is accepted or tentatively accepted via an Appointment object,
     * EWS recreates the meeting, and Appointment represents that new version.
     * When a meeting is accepted or tentatively accepted via a MeetingRequest object,
     * EWS creates an associated meeting in the attendee's calendar and Appointment
     * represents that meeting.
     * When declining a meeting via an Appointment object, EWS moves the appointment to
     * the attendee's Deleted Items folder and Appointment represents that moved copy.
     * When declining a meeting via a MeetingRequest object, EWS creates an associated
     * meeting in the attendee's Deleted Items folder, and Appointment represents that
     * meeting.
     * When a meeting is declined via either an Appointment or a MeetingRequest object
     * from the Deleted Items folder, Appointment is null.
 	 */
	get Appointment(): Appointment { return this.appointment; }
	
	/**
	 * Gets the meeting request that was moved to the Deleted Items folder as a result of an attendee accepting, tentatively accepting or declining a meeting request. If the meeting request is accepted, tentatively accepted or declined from the Deleted Items folder, it is permanently deleted and MeetingRequest is null.
	 *
	 */
	get MeetingRequest(): MeetingRequest { return this.meetingRequest; }
	
	/**
	 * Gets the copy of the response that is sent to the organizer of a meeting when the meeting is accepted, tentatively accepted or declined by an attendee. MeetingResponse is null if the attendee chose not to send a response.
	 *
	 */
	get MeetingResponse(): MeetingResponse { return this.meetingResponse; }
	
	/**
	 * Gets the copy of the meeting cancellation message sent by the organizer to the attendees of a meeting when the meeting is cancelled.
	 *
	 */
	get MeetingCancellation(): MeetingCancellation { return this.meetingCancellation; }
	
	private appointment: Appointment;
	private meetingRequest: MeetingRequest;
	private meetingResponse: MeetingResponse;
	private meetingCancellation: MeetingCancellation;

	/**
	 * @internal Initializes a new instance of the  class.
	 *
	 * @param   {Item[]}   items   Collection of items that were created or modified as a result of a calendar action.
	 */	
	constructor(items: Item[]) {
		this.appointment = EwsUtilities.FindFirstItemOfType<Appointment>(items, TypeContainer.Appointment);
		this.meetingRequest = EwsUtilities.FindFirstItemOfType<MeetingRequest>(items, TypeContainer.MeetingRequest);
		this.meetingResponse = EwsUtilities.FindFirstItemOfType<MeetingResponse>(items, TypeContainer.MeetingResponse);
		this.meetingCancellation = EwsUtilities.FindFirstItemOfType<MeetingCancellation>(items, TypeContainer.MeetingCancellation);
	}
}