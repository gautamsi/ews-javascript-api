import {EmailAddress} from "../ComplexProperties/EmailAddress";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class ExpandGroupResults {
	Count: number;
	IncludesAllMembers: boolean;
	Members: EmailAddress[] /*System.Collections.ObjectModel.Collection<EmailAddress>*/;
	private includesAllMembers: boolean;
	private members: EmailAddress[] /*System.Collections.ObjectModel.Collection<EmailAddress>*/;
	GetEnumerator(): EmailAddress[] /*System.Collections.Generic.IEnumerator<EmailAddress>*/{ throw new Error("ExpandGroupResults.ts - GetEnumerator : Not implemented.");}
	LoadFromXml(reader: EwsServiceXmlReader): void{ throw new Error("ExpandGroupResults.ts - LoadFromXml : Not implemented.");}
}






			

