import {CalendarActionResults} from "../Misc/CalendarActionResults";
import {AcceptMeetingInvitationMessage} from "../Core/ServiceObjects/ResponseObjects/AcceptMeetingInvitationMessage";
import {DeclineMeetingInvitationMessage} from "../Core/ServiceObjects/ResponseObjects/DeclineMeetingInvitationMessage";
import {IPromise} from "../Interfaces";
			
export interface ICalendarActionProvider {
	Accept(sendResponse: boolean): IPromise<CalendarActionResults>;
	AcceptTentatively(sendResponse: boolean): IPromise<CalendarActionResults>;
	CreateAcceptMessage(tentative: boolean): AcceptMeetingInvitationMessage;
	CreateDeclineMessage(): DeclineMeetingInvitationMessage;
	Decline(sendResponse: boolean): IPromise<CalendarActionResults>;
}