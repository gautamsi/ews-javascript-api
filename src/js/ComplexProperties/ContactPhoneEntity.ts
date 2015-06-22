import {ComplexProperty} from "./ComplexProperty";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class ContactPhoneEntity extends ComplexProperty {
    OriginalPhoneString: string;
    PhoneString: string;
    Type: string;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("ContactPhoneEntity.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}


