import EmailAddress = require("../ComplexProperties/EmailAddress");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
			
 class ExpandGroupResults {
	Count: number;
	IncludesAllMembers: boolean;
	Members: EmailAddress[] /*System.Collections.ObjectModel.Collection<EmailAddress>*/;
	private includesAllMembers: boolean;
	private members: EmailAddress[] /*System.Collections.ObjectModel.Collection<EmailAddress>*/;
	GetEnumerator(): EmailAddress[] /*System.Collections.Generic.IEnumerator<EmailAddress>*/{ throw new Error("ExpandGroupResults.ts - GetEnumerator : Not implemented.");}
	LoadFromXml(reader: EwsServiceXmlReader): void{ throw new Error("ExpandGroupResults.ts - LoadFromXml : Not implemented.");}
}
export = ExpandGroupResults;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
