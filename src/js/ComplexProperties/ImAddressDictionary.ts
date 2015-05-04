import ImAddressKey = require("../Enumerations/ImAddressKey");

    class ImAddressDictionary extends DictionaryProperty<ImAddressKey, ImAddressEntry> {
        Item: string;
        CreateEntryInstance(): ImAddressEntry { throw new Error("Not implemented."); }
        GetFieldURI(): string { throw new Error("Not implemented."); }
        TryGetValue(key: ImAddressKey, imAddress: any): boolean { throw new Error("Not implemented."); }
    }

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
