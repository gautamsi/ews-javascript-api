import {DictionaryKeyType} from "../Enumerations/DictionaryKeyType";
import {IOutParam} from "../Interfaces/IOutParam";
import {PhysicalAddressEntry} from "./PhysicalAddressEntry";
import {PhysicalAddressKey} from "../Enumerations/PhysicalAddressKey";
import {DictionaryProperty} from "./DictionaryProperty";
export class PhysicalAddressDictionary extends DictionaryProperty<PhysicalAddressKey, PhysicalAddressEntry> {
    constructor() {
        super(DictionaryKeyType.PhysicalAddressKey);
    }
    _getItem(key: PhysicalAddressKey): PhysicalAddressEntry {
        return this.Entries.get(key);
    }

    _setItem(key: PhysicalAddressKey, value: PhysicalAddressEntry) {
        if (value == null) {
            this.InternalRemove(key);
        }
        else {
            value.Key = key;
            this.InternalAddOrReplace(value);
        }
    }
    CreateEntryInstance(): PhysicalAddressEntry { return new PhysicalAddressEntry(); }
    TryGetValue(key: PhysicalAddressKey, physicalAddress: IOutParam<PhysicalAddressEntry>): boolean { return this.Entries.tryGetValue(key, physicalAddress); }
}