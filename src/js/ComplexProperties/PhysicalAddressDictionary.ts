import {DictionaryProperty} from "./DictionaryProperty";
import {PhysicalAddressEntry} from "./PhysicalAddressEntry";
import {PhysicalAddressKey} from "../Enumerations/PhysicalAddressKey";
export class PhysicalAddressDictionary extends DictionaryProperty<PhysicalAddressKey, PhysicalAddressEntry> {
    Item: PhysicalAddressEntry;
    CreateEntryInstance(): PhysicalAddressEntry { throw new Error("PhysicalAddressDictionary.ts - CreateEntryInstance : Not implemented."); }
    TryGetValue(key: PhysicalAddressKey, physicalAddress: any): boolean { throw new Error("PhysicalAddressDictionary.ts - TryGetValue : Not implemented."); }
}



//}



