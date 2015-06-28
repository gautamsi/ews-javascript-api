import {PropertyDefinition} from "../PropertyDefinitions/PropertyDefinition";
import {ServiceVersionException} from "../Exceptions/ServiceVersionException";
import {Strings} from "../Strings";
import {DictionaryKeyType} from "../Enumerations/DictionaryKeyType";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {PropertyDefinitionFlags} from "../Enumerations/PropertyDefinitionFlags";
import {IOutParam} from "../Interfaces/IOutParam";
import {XmlElementNames} from "../Core/XmlElementNames";
import {ServiceObjectPropertyException} from "../Exceptions/ServiceObjectPropertyException";
import {ComplexProperty} from "./ComplexProperty";
import {PropertyBag} from "../Core/PropertyBag";
import {EmailAddress} from "./EmailAddress";
import {EmailAddressEntry} from "./EmailAddressEntry";
import {EmailAddressKey} from "../Enumerations/EmailAddressKey";
import {DictionaryProperty} from "./DictionaryProperty";
export class EmailAddressDictionary extends DictionaryProperty<EmailAddressKey, EmailAddressEntry> {
    
    constructor() {
        super(DictionaryKeyType.EmailAddressKey);
    }

    _getItem(key: EmailAddressKey): EmailAddress {
        return this.Entries.get(key).EmailAddress;
    }

    _setItem(key: EmailAddressKey, value: EmailAddress) {
        if (value == null) {
            this.InternalRemove(key);
        }
        else {
            var entry: IOutParam<EmailAddressEntry> = { outValue: null };

            if (this.Entries.tryGetValue(key, entry)) {
                entry.outValue.EmailAddress = value;
                this.Changed();
            }
            else {
                entry = new EmailAddressEntry(key, value);
                this.InternalAdd(entry.outValue);
            }
        }
    }
    CreateEntryInstance(): EmailAddressEntry { return new EmailAddressEntry(); }
    GetFieldURI(): string { throw new Error("EmailAddressDictionary.ts - GetFieldURI : Not implemented."); }
    TryGetValue(key: EmailAddressKey, emailAddress: any): boolean { throw new Error("EmailAddressDictionary.ts - TryGetValue : Not implemented."); }
}
