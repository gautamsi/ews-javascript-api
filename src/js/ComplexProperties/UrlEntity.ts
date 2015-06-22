import {ExtractedEntity} from "./ExtractedEntity";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class UrlEntity extends ExtractedEntity {
    Url: string;
    ReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("UrlEntity.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}


//}



