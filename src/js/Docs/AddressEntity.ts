import ExtractedEntity = require("../ComplexProperties/ExtractedEntity");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
			
 class AddressEntity extends ExtractedEntity {
	Address: string;
	TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("Not implemented.");}
}
export = AddressEntity;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
