import ServiceObject = require("./ServiceObjects/ServiceObject");
import ServiceLocalException = require("../Exceptions/ServiceLocalException");
import ExchangeService = require("./ExchangeService");
import JsonObject = require("./JsonObject");
import PropertySet = require("./PropertySet");
import {GetObjectInstanceDelegate} from "../Misc/DelegateTypes";
class EwsServiceJsonReader {
	Service: ExchangeService;
	constructor(service: ExchangeService){
		this.Service = service;
	}
	ReadServiceObjectsCollectionFromJson<TServiceObject extends ServiceObject>(jsonResponse: any/*JsonObject*/, collectionJsonElementName: string, getObjectInstanceDelegate: GetObjectInstanceDelegate<TServiceObject>, clearPropertyBag: boolean, requestedPropertySet: PropertySet, summaryPropertiesOnly: boolean): TServiceObject[] /*System.Collections.Generic.List<TServiceObject>*/ { 
	
	var serviceObjects:TServiceObject[] = [];
            var serviceObject:TServiceObject = null;

            var jsonServiceObjects:any[] = jsonResponse[collectionJsonElementName];
            for(var arrayEntry of jsonServiceObjects)
            {
                var jsonServiceObject:any = arrayEntry;

                if (jsonServiceObject != null)
                {
                    serviceObject = getObjectInstanceDelegate(this.Service, jsonServiceObject.ReadTypeString());

                    if (serviceObject != null)
                    {
                        if (string.Compare(jsonServiceObject.ReadTypeString(), serviceObject.GetXmlElementName(), StringComparison.Ordinal) != 0)
                        {
                            throw new ServiceLocalException(
                                string.Format(
                                    "The type of the object in the store ({0}) does not match that of the local object ({1}).",
                                    jsonServiceObject.ReadTypeString(),
                                    serviceObject.GetXmlElementName()));
                        }

                        serviceObject.LoadFromJson(
                                        jsonServiceObject,
                                        this.Service,
                                        clearPropertyBag,
                                        requestedPropertySet,
                                        summaryPropertiesOnly);

                        serviceObjects.Add(serviceObject);
                    }
                }
            }

            return serviceObjects;
	 }
}
export = EwsServiceJsonReader;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
