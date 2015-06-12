import {ComplexProperty} from "./ComplexProperty";
import {EmailPosition} from "../Enumerations/EmailPosition";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class ExtractedEntity extends ComplexProperty {
    Position: EmailPosition;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("ExtractedEntity.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}



