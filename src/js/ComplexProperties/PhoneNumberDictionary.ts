import {IOutParam} from "../Interfaces/IOutParam";
import {DictionaryKeyType} from "../Enumerations/DictionaryKeyType";
import {PhoneNumberEntry} from "./PhoneNumberEntry";
import {PhoneNumberKey} from "../Enumerations/PhoneNumberKey";
import {DictionaryProperty} from "./DictionaryProperty";
export class PhoneNumberDictionary extends DictionaryProperty<PhoneNumberKey, PhoneNumberEntry> {
    constructor() {
        super(DictionaryKeyType.PhoneNumberKey);
    }
    _getItem(key: PhoneNumberKey): string {
        return this.Entries.get(key).PhoneNumber;
    }

    _setItem(key: PhoneNumberKey, value: string) {
        if (value == null) {
            this.InternalRemove(key);
        }
        else {
            var entry: IOutParam<PhoneNumberEntry> = { outValue: null };

            if (this.Entries.tryGetValue(key, entry)) {
                entry.outValue.PhoneNumber = value;
                this.Changed();
            }
            else {
                let newEntry = new PhoneNumberEntry(key, value);
                this.InternalAdd(newEntry);
            }
        }
    }

    CreateEntryInstance(): PhoneNumberEntry {return new PhoneNumberEntry(); }
    GetFieldURI(): string { return "contacts:PhoneNumber"; }
    TryGetValue(key: PhoneNumberKey, phoneNumber: IOutParam<string>): boolean {
        var entry: IOutParam<PhoneNumberEntry> = { outValue: null };

        if (this.Entries.tryGetValue(key, entry)) {
            phoneNumber.outValue = entry.outValue.PhoneNumber;

            return true;
        }
        else {
            phoneNumber = null;

            return false;
        }
    }
}
