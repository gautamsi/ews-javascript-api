import ExchangeService = require("./ExchangeService");
import JsonObject = require("./JsonObject");
import PropertySet = require("./PropertySet");
import {GetObjectInstanceDelegate} from "../Misc/DelegateTypes";
class EwsServiceJsonReader {
	Service: ExchangeService;
	constructor(service: ExchangeService){
		this.Service = service;
	}
	ReadServiceObjectsCollectionFromJson<TServiceObject>(jsonResponse: JsonObject, collectionJsonElementName: string, getObjectInstanceDelegate: GetObjectInstanceDelegate<TServiceObject>, clearPropertyBag: boolean, requestedPropertySet: PropertySet, summaryPropertiesOnly: boolean): TServiceObject[] /*System.Collections.Generic.List<TServiceObject>*/ { throw new Error("Not implemented."); }
}
export = EwsServiceJsonReader;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
