import EmailAddress = require("./EmailAddress");
import ComplexPropertyCollection = require("./ComplexPropertyCollection");
class EmailAddressCollection extends ComplexPropertyCollection<EmailAddress> {
    private collectionItemXmlElementName: string;
    Add(emailAddress: EmailAddress): any { throw new Error("EmailAddressCollection.ts - Add : Not implemented."); }
    //Add(smtpAddress: string): EmailAddress { throw new Error("EmailAddressCollection.ts - Add : Not implemented."); }
    //Add(name: string, smtpAddress: string): EmailAddress { throw new Error("EmailAddressCollection.ts - Add : Not implemented."); }
    AddRange(emailAddresses: any[]/*System.Collections.Generic.IEnumerable<T>*/): any { throw new Error("EmailAddressCollection.ts - AddRange : Not implemented."); }
    //AddRange(smtpAddresses: string[]/*System.Collections.Generic.IEnumerable<string>*/): any { throw new Error("EmailAddressCollection.ts - AddRange : Not implemented."); }
    Clear(): any { throw new Error("EmailAddressCollection.ts - Clear : Not implemented."); }
    CreateComplexProperty(xmlElementName: string): EmailAddress { throw new Error("EmailAddressCollection.ts - CreateComplexProperty : Not implemented."); }
    CreateDefaultComplexProperty(): EmailAddress { throw new Error("EmailAddressCollection.ts - CreateDefaultComplexProperty : Not implemented."); }
    GetCollectionItemXmlElementName(emailAddress: EmailAddress): string { throw new Error("EmailAddressCollection.ts - GetCollectionItemXmlElementName : Not implemented."); }
    Remove(emailAddress: EmailAddress): boolean { throw new Error("EmailAddressCollection.ts - Remove : Not implemented."); }
    RemoveAt(index: number): any { throw new Error("EmailAddressCollection.ts - RemoveAt : Not implemented."); }
    ShouldWriteToRequest(): boolean { throw new Error("EmailAddressCollection.ts - ShouldWriteToRequest : Not implemented."); }
}
export = EmailAddressCollection;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
