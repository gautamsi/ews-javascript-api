import {CalendarActionResults} from "../Misc/CalendarActionResults";
import {AcceptMeetingInvitationMessage} from "../Core/ServiceObjects/ResponseObjects/AcceptMeetingInvitationMessage";
import {DeclineMeetingInvitationMessage} from "../Core/ServiceObjects/ResponseObjects/DeclineMeetingInvitationMessage";
			
export interface ICalendarActionProvider {
	Accept(sendResponse: boolean): CalendarActionResults;
	AcceptTentatively(sendResponse: boolean): CalendarActionResults;
	CreateAcceptMessage(tentative: boolean): AcceptMeetingInvitationMessage;
	CreateDeclineMessage(): DeclineMeetingInvitationMessage;
	Decline(sendResponse: boolean): CalendarActionResults;
}






			

