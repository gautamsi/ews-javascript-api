import ExtractedEntity = require("../ComplexProperties/ExtractedEntity");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
			
 class AddressEntity extends ExtractedEntity {
	Address: string;
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("AddressEntity.ts - TryReadElementFromXmlJsObject : Not implemented.");}
}
export = AddressEntity;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
