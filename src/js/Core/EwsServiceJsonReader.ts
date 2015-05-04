import ExchangeService = require("./ExchangeService");
import JsonObject = require("./JsonObject");
import PropertySet = require("./PropertySet");
			
 class EwsServiceJsonReader {
	Service: ExchangeService;
	ReadServiceObjectsCollectionFromJson(jsonResponse: JsonObject, collectionJsonElementName: string, getObjectInstanceDelegate: GetObjectInstanceDelegate<TServiceObject>, clearPropertyBag: boolean, requestedPropertySet: PropertySet, summaryPropertiesOnly: boolean): TServiceObject[] /*System.Collections.Generic.List<TServiceObject>*/{ throw new Error("Not implemented.");}
}
export = EwsServiceJsonReader;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
