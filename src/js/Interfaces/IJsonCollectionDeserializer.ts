import ExchangeService = require("../Core/ExchangeService");
			
 interface IJsonCollectionDeserializer {
	CreateFromJsonCollection(jsonCollection: any[], service: ExchangeService): void;
	UpdateFromJsonCollection(jsonCollection: any[], service: ExchangeService): void;
}
export = IJsonCollectionDeserializer;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
