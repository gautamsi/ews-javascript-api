import {DictionaryProperty} from "./DictionaryProperty";
import {EmailAddressEntry} from "./EmailAddressEntry";
import {EmailAddressKey} from "../Enumerations/EmailAddressKey";
import {EmailAddress} from "./EmailAddress";
export class EmailAddressDictionary extends DictionaryProperty<EmailAddressKey, EmailAddressEntry> {
    Item: EmailAddress;
    CreateEntryInstance(): EmailAddressEntry { throw new Error("EmailAddressDictionary.ts - CreateEntryInstance : Not implemented."); }
    GetFieldURI(): string { throw new Error("EmailAddressDictionary.ts - GetFieldURI : Not implemented."); }
    TryGetValue(key: EmailAddressKey, emailAddress: any): boolean { throw new Error("EmailAddressDictionary.ts - TryGetValue : Not implemented."); }
}


