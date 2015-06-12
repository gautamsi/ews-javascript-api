import {DictionaryProperty} from "./DictionaryProperty";
import {ImAddressEntry} from "./ImAddressEntry";
import {ImAddressKey} from "../Enumerations/ImAddressKey";
export class ImAddressDictionary extends DictionaryProperty<ImAddressKey, ImAddressEntry> {
    Item: string;
    CreateEntryInstance(): ImAddressEntry { throw new Error("ImAddressDictionary.ts - CreateEntryInstance : Not implemented."); }
    GetFieldURI(): string { throw new Error("ImAddressDictionary.ts - GetFieldURI : Not implemented."); }
    TryGetValue(key: ImAddressKey, imAddress: any): boolean { throw new Error("ImAddressDictionary.ts - TryGetValue : Not implemented."); }
}


//}



