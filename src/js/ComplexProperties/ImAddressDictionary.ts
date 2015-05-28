import DictionaryProperty = require("./DictionaryProperty");
import ImAddressEntry = require("./ImAddressEntry");
import ImAddressKey = require("../Enumerations/ImAddressKey");

class ImAddressDictionary extends DictionaryProperty<ImAddressKey, ImAddressEntry> {
    Item: string;
    CreateEntryInstance(): ImAddressEntry { throw new Error("ImAddressDictionary.ts - CreateEntryInstance : Not implemented."); }
    GetFieldURI(): string { throw new Error("ImAddressDictionary.ts - GetFieldURI : Not implemented."); }
    TryGetValue(key: ImAddressKey, imAddress: any): boolean { throw new Error("ImAddressDictionary.ts - TryGetValue : Not implemented."); }
}
export = ImAddressDictionary;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
