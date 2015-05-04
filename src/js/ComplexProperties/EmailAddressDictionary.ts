import DictionaryProperty = require("./DictionaryProperty");
import EmailAddressEntry = require("./EmailAddressEntry");
import EmailAddressKey = require("../Enumerations/EmailAddressKey");
import EmailAddress = require("./EmailAddress");

class EmailAddressDictionary extends DictionaryProperty<EmailAddressKey, EmailAddressEntry> {
    Item: EmailAddress;
    CreateEntryInstance(): EmailAddressEntry { throw new Error("Not implemented."); }
    GetFieldURI(): string { throw new Error("Not implemented."); }
    TryGetValue(key: EmailAddressKey, emailAddress: any): boolean { throw new Error("Not implemented."); }
}
export = EmailAddressDictionary;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
