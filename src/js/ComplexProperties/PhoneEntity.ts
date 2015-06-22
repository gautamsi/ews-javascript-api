import {ExtractedEntity} from "./ExtractedEntity";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class PhoneEntity extends ExtractedEntity {
    OriginalPhoneString: string;
    PhoneString: string;
    Type: string;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("PhoneEntity.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}


//}



