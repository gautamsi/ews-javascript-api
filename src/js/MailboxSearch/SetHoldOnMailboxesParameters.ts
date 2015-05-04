import HoldAction = require("../Enumerations/HoldAction");
			
 class SetHoldOnMailboxesParameters {
	ActionType: HoldAction;
	HoldId: string;
	Query: string;
	Mailboxes: string[];
	Language: string;
	InPlaceHoldIdentity: string;
}
export = SetHoldOnMailboxesParameters;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
