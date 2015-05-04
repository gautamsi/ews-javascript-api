import PhysicalAddressKey = require("../Enumerations/PhysicalAddressKey");

class PhysicalAddressDictionary extends DictionaryProperty<PhysicalAddressKey, PhysicalAddressEntry> {
    Item: PhysicalAddressEntry;
    CreateEntryInstance(): PhysicalAddressEntry { throw new Error("Not implemented."); }
    TryGetValue(key: PhysicalAddressKey, physicalAddress: any): boolean { throw new Error("Not implemented."); }
}


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
