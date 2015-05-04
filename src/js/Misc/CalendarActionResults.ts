import Appointment = require("../Core/ServiceObjects/Items/Appointment");
import MeetingRequest = require("../Core/ServiceObjects/Items/MeetingRequest");
import MeetingResponse = require("../Core/ServiceObjects/Items/MeetingResponse");
import MeetingCancellation = require("../Core/ServiceObjects/Items/MeetingCancellation");
			
 class CalendarActionResults {
	Appointment: Appointment;
	MeetingRequest: MeetingRequest;
	MeetingResponse: MeetingResponse;
	MeetingCancellation: MeetingCancellation;
	private appointment: Appointment;
	private meetingRequest: MeetingRequest;
	private meetingResponse: MeetingResponse;
	private meetingCancellation: MeetingCancellation;
}
export = CalendarActionResults;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
