import {DictionaryProperty} from "./DictionaryProperty";
import {PhoneNumberEntry} from "./PhoneNumberEntry";
import {PhoneNumberKey} from "../Enumerations/PhoneNumberKey";
export class PhoneNumberDictionary extends DictionaryProperty<PhoneNumberKey, PhoneNumberEntry> {
    Item: string;
    CreateEntryInstance(): PhoneNumberEntry { throw new Error("PhoneNumberDictionary.ts - CreateEntryInstance : Not implemented."); }
    GetFieldURI(): string { throw new Error("PhoneNumberDictionary.ts - GetFieldURI : Not implemented."); }
    TryGetValue(key: PhoneNumberKey, phoneNumber: any): boolean { throw new Error("PhoneNumberDictionary.ts - TryGetValue : Not implemented."); }
}


//}



