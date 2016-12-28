import {IOutParam} from "../Interfaces/IOutParam";
import {DictionaryKeyType} from "../Enumerations/DictionaryKeyType";
import {ImAddressEntry} from "./ImAddressEntry";
import {ImAddressKey} from "../Enumerations/ImAddressKey";
import {DictionaryProperty} from "./DictionaryProperty";
export class ImAddressDictionary extends DictionaryProperty<ImAddressKey, ImAddressEntry> {
    constructor() {
        super(DictionaryKeyType.ImAddressKey);
    }
    _getItem(key: ImAddressKey): string {
        return this.Entries.get(key).ImAddress;
    }

    _setItem(key: ImAddressKey, value: string) {
        if (value == null) {
            this.InternalRemove(key);
        }
        else {
            var entry: IOutParam<ImAddressEntry> = { outValue: null };

            if (this.Entries.tryGetValue(key, entry)) {
                entry.outValue.ImAddress = value;
                this.Changed();
            }
            else {
                let newEntry = new ImAddressEntry(key, value);
                this.InternalAdd(newEntry);
            }
        }
    }
    CreateEntryInstance(): ImAddressEntry { return new ImAddressEntry(); }
    GetFieldURI(): string { return "contacts:ImAddress"; }
    TryGetValue(key: ImAddressKey, imAddress: IOutParam<string>): boolean {
        var entry: IOutParam<ImAddressEntry> = { outValue: null };

        if (this.Entries.tryGetValue(key, entry)) {
            imAddress.outValue = entry.outValue.ImAddress;
            return true;
        }
        else {
            imAddress.outValue = null;
            return false;
        }
    }
}