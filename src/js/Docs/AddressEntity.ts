import {ExtractedEntity} from "../ComplexProperties/ExtractedEntity";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class AddressEntity extends ExtractedEntity {
	Address: string;
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("AddressEntity.ts - TryReadElementFromXmlJsObject : Not implemented.");}
}






			

