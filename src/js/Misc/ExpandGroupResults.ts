import { Convert } from "../ExtensionMethods";
import { EmailAddress } from "../ComplexProperties/EmailAddress";
import { EwsServiceJsonReader } from "../Core/EwsServiceJsonReader";
import { ExchangeService } from "../Core/ExchangeService";
import { IEnumerable } from "../Interfaces/IEnumerable";
import { XmlAttributeNames } from "../Core/XmlAttributeNames";
import { XmlElementNames } from "../Core/XmlElementNames";

/**
 * Represents the results of an ExpandGroup operation.
 * 
 * @sealed
 */
export class ExpandGroupResults implements IEnumerable<EmailAddress> {

	/**
	 * True, if all members are returned.
	 * EWS always returns true on ExpandDL, i.e. all members are returned. 
	 */
	private includesAllMembers: boolean = false;

	/**
	 * DL members.
	 */
	private members: EmailAddress[] = [];

	/**
	 * Gets the number of members that were returned by the ExpandGroup operation. 
	 * Count might be less than the total number of members in the group, in which case the value of the IncludesAllMembers is false.
	 */
	get Count(): number {
		return this.members.length;
	}

	/**
	 * Gets a value indicating whether all the members of the group have been returned by ExpandGroup.
	 */
	get IncludesAllMembers(): boolean {
		return this.includesAllMembers;
	}

	/**
	 * Gets the members of the expanded group.
	 */
	get Members(): EmailAddress[] {
		return this.members;
	}

	/**
	 * @internal Initializes a new instance of the **ExpandGroupResults** class.
	 */
	constructor() {
	}

	/**
     *  Returns an enumerator that iterates through the collection. this case this.members
     */
	GetEnumerator(): EmailAddress[] {
		return this.members;
	}

	/**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     */
	LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {

		var dlResponse = jsObject[XmlElementNames.DLExpansion];
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