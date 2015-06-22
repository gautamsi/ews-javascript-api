import {Appointment} from "../Core/ServiceObjects/Items/Appointment";
import {Item} from "../Core/ServiceObjects/Items/Item";
import {EwsUtilities} from "../Core/EwsUtilities";
import {MeetingRequest} from "../Core/ServiceObjects/Items/MeetingRequest";
import {MeetingResponse} from "../Core/ServiceObjects/Items/MeetingResponse";
import {MeetingCancellation} from "../Core/ServiceObjects/Items/MeetingCancellation";
export class CalendarActionResults {
	get Appointment(): Appointment { return this.appointment; }
	get MeetingRequest(): MeetingRequest { return this.meetingRequest; }
	get MeetingResponse(): MeetingResponse { return this.meetingResponse; }
	get MeetingCancellation(): MeetingCancellation { return this.meetingCancellation; }
	private appointment: Appointment;
	private meetingRequest: MeetingRequest;
	private meetingResponse: MeetingResponse;
	private meetingCancellation: MeetingCancellation;
	constructor(items: Item[]) {
		this.appointment = EwsUtilities.FindFirstItemOfType<Appointment>(items, Appointment);
		this.meetingRequest = EwsUtilities.FindFirstItemOfType<MeetingRequest>(items, MeetingRequest);
		this.meetingResponse = EwsUtilities.FindFirstItemOfType<MeetingResponse>(items, MeetingResponse);
		this.meetingCancellation = EwsUtilities.FindFirstItemOfType<MeetingCancellation>(items, MeetingCancellation);
	}
}