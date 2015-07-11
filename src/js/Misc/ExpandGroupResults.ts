import {EmailAddress} from "../ComplexProperties/EmailAddress";
import {Convert} from "../ExtensionMethods";
import {XmlAttributeNames} from "../Core/XmlAttributeNames";
import {XmlElementNames} from "../Core/XmlElementNames";
import {EwsServiceJsonReader} from "../Core/EwsServiceJsonReader";
import {ExchangeService} from "../Core/ExchangeService";
export class ExpandGroupResults { //IEnumerable<EmailAddress>
	private includesAllMembers: boolean = false;
	private members: EmailAddress[] = [];
	get Count(): number {
		return this.members.length;
	}
	get IncludesAllMembers(): boolean {
		return this.includesAllMembers;
	}
	get Members(): EmailAddress[] {
		return this.members;
	}
	constructor() {
	}
	
	//GetEnumerator(): EmailAddress[] /*System.Collections.Generic.IEnumerator<EmailAddress>*/ { throw new Error("ExpandGroupResults.ts - GetEnumerator : Not implemented."); }
	LoadFromXmlJsObject(responseObject: any, service: ExchangeService): void {

		var dlResponse = responseObject[XmlElementNames.DLExpansion];
		var mailboxes = EwsServiceJsonReader.ReadAsArray(dlResponse, XmlElementNames.Mailbox);
		this.includesAllMembers = Convert.toBool(dlResponse[XmlAttributeNames.IncludesLastItemInRange]);
		var mailboxCount = Convert.toNumber(dlResponse[XmlAttributeNames.TotalItemsInView]);

		for (var mailbox of mailboxes) {
			var emailAddress = new EmailAddress();
			emailAddress.LoadFromXmlJsObject(mailbox, service);
			this.members.push(emailAddress);
		}
	}
}