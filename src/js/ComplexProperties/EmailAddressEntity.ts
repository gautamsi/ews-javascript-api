import {ExtractedEntity} from "./ExtractedEntity";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class EmailAddressEntity extends ExtractedEntity {
    EmailAddress: string;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("EmailAddressEntity.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}

