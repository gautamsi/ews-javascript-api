import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
			
 class AddressEntity extends ExtractedEntity {
	Address: string;
	TryReadElementFromXml(reader: EwsServiceXmlReader): boolean{ throw new Error("Not implemented.");}
}
export = AddressEntity;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
