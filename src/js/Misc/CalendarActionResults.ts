import Appointment = require("../Core/ServiceObjects/Items/Appointment");
import Item = require("../Core/ServiceObjects/Items/Item");
import EwsUtilities = require("../Core/EwsUtilities");
import MeetingRequest = require("../Core/ServiceObjects/Items/MeetingRequest");
import MeetingResponse = require("../Core/ServiceObjects/Items/MeetingResponse");
import MeetingCancellation = require("../Core/ServiceObjects/Items/MeetingCancellation");

class CalendarActionResults {
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
export = CalendarActionResults;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
