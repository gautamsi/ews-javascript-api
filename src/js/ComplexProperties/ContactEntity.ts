import {ExtractedEntity} from "./ExtractedEntity";
import {ContactPhoneEntityCollection} from "./ContactPhoneEntityCollection";
import {StringList} from "./StringList";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";

export class ContactEntity extends ExtractedEntity {
    PersonName: string;
    BusinessName: string;
    PhoneNumbers: ContactPhoneEntityCollection;
    Urls: StringList;
    EmailAddresses: StringList;
    Addresses: StringList;
    ContactString: string;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("ContactEntity.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}
