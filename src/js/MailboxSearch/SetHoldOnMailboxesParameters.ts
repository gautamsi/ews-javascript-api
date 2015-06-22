import {HoldAction} from "../Enumerations/HoldAction";
export class SetHoldOnMailboxesParameters {
	ActionType: HoldAction;
	HoldId: string;
	Query: string;
	Mailboxes: string[];
	Language: string;
	InPlaceHoldIdentity: string;
}






			

