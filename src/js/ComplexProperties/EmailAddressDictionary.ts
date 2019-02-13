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

    /**
     * Gets or sets the e-mail address at the specified key.
     *
     * @param   {EmailAddressKey}   key   The key of the e-mail address to get or set.
     * @return  {EmailAddress}         The e-mail address at the specified key.
     */
    _getItem(key: EmailAddressKey): EmailAddress {
        return this.Entries.get(key).EmailAddress;
    }

    /**
     * Gets or sets the e-mail address at the specified key.
     *
     * @param   {EmailAddressKey}   key   The key of the e-mail address to get or set.
     * @return  {EmailAddress}         The e-mail address at the specified key.
     */
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
                let newEntry = new EmailAddressEntry(key, value);
                this.InternalAdd(newEntry);
            }
        }
    }

    /**
     * @internal Creates instance of dictionary entry.
     *
     * @return  {EmailAddressEntry}      New instance.
     */
    CreateEntryInstance(): EmailAddressEntry { return new EmailAddressEntry(); }

    /**
     * @internal Gets the field URI.
     *
     * @return  {string}      Field URI.
     */
    GetFieldURI(): string { return "contacts:EmailAddress"; }

    /**
     * Tries to get the e-mail address associated with the specified key.
     *
     * @param   {EmailAddressKey}   key            The key.
     * @param   {IOutParam<EmailAddress>}   emailAddress   When this method returns, contains the e-mail address associated with the specified key, if the key is found; otherwise, null. This parameter is passed uninitialized.
     * @return  {boolean}                  true if the Dictionary contains an e-mail address associated with the specified key; otherwise, false.
     */
    TryGetValue(key: EmailAddressKey, emailAddress: IOutParam<EmailAddress>): boolean {
        let entry: IOutParam<EmailAddressEntry> = { outValue: null };

        if (this.Entries.tryGetValue(key, entry)) {
            emailAddress.outValue = entry.outValue.EmailAddress;

            return true;
        }
        else {
            emailAddress = null;

            return false;
        }
    }
}
