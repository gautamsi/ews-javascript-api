import DictionaryProperty = require("./DictionaryProperty");
import EmailAddressEntry = require("./EmailAddressEntry");
import EmailAddressKey = require("../Enumerations/EmailAddressKey");
import EmailAddress = require("./EmailAddress");

class EmailAddressDictionary extends DictionaryProperty<EmailAddressKey, EmailAddressEntry> {
    Item: EmailAddress;
    CreateEntryInstance(): EmailAddressEntry { throw new Error("EmailAddressDictionary.ts - CreateEntryInstance : Not implemented."); }
    GetFieldURI(): string { throw new Error("EmailAddressDictionary.ts - GetFieldURI : Not implemented."); }
    TryGetValue(key: EmailAddressKey, emailAddress: any): boolean { throw new Error("EmailAddressDictionary.ts - TryGetValue : Not implemented."); }
}
export = EmailAddressDictionary;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
