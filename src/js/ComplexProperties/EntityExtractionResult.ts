import {AddressEntityCollection} from "./AddressEntityCollection";
import {MeetingSuggestionCollection} from "./MeetingSuggestionCollection";
import {TaskSuggestionCollection} from "./TaskSuggestionCollection";
import {EmailAddressEntityCollection} from "./EmailAddressEntityCollection";
import {ContactEntityCollection} from "./ContactEntityCollection";
import {UrlEntityCollection} from "./UrlEntityCollection";
import {PhoneEntityCollection} from "./PhoneEntityCollection";
import {ComplexProperty} from "./ComplexProperty";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class EntityExtractionResult extends ComplexProperty {
    Addresses: AddressEntityCollection;
    MeetingSuggestions: MeetingSuggestionCollection;
    TaskSuggestions: TaskSuggestionCollection;
    EmailAddresses: EmailAddressEntityCollection;
    Contacts: ContactEntityCollection;
    Urls: UrlEntityCollection;
    PhoneNumbers: PhoneEntityCollection;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("EntityExtractionResult.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}


//}



