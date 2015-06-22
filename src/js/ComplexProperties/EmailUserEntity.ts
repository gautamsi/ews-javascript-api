import {ComplexProperty} from "./ComplexProperty";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class EmailUserEntity extends ComplexProperty {
    Name: string;
    UserId: string;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("EmailUserEntity.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}


