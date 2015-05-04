			
 interface ICalendarActionProvider {
	Accept(sendResponse: boolean): CalendarActionResults;
	AcceptTentatively(sendResponse: boolean): CalendarActionResults;
	CreateAcceptMessage(tentative: boolean): AcceptMeetingInvitationMessage;
	CreateDeclineMessage(): DeclineMeetingInvitationMessage;
	Decline(sendResponse: boolean): CalendarActionResults;
}
export = ICalendarActionProvider;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			