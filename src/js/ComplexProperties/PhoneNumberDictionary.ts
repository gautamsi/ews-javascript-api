import DictionaryProperty = require("./DictionaryProperty");
import PhoneNumberEntry = require("./PhoneNumberEntry");
import PhoneNumberKey = require("../Enumerations/PhoneNumberKey");

class PhoneNumberDictionary extends DictionaryProperty<PhoneNumberKey, PhoneNumberEntry> {
    Item: string;
    CreateEntryInstance(): PhoneNumberEntry { throw new Error("PhoneNumberDictionary.ts - CreateEntryInstance : Not implemented."); }
    GetFieldURI(): string { throw new Error("PhoneNumberDictionary.ts - GetFieldURI : Not implemented."); }
    TryGetValue(key: PhoneNumberKey, phoneNumber: any): boolean { throw new Error("PhoneNumberDictionary.ts - TryGetValue : Not implemented."); }
}
export = PhoneNumberDictionary;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
