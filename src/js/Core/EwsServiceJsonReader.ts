import ServiceObject = require("./ServiceObjects/ServiceObject");
import ServiceLocalException = require("../Exceptions/ServiceLocalException");
import ExchangeService = require("./ExchangeService");
import JsonObject = require("./JsonObject");
import PropertySet = require("./PropertySet");
import {GetObjectInstanceDelegate} from "../Misc/DelegateTypes";
import {StringHelper, TypeSystem} from "../ExtensionMethods";

class EwsServiceJsonReader {
    //Service: ExchangeService;
    // constructor(service: ExchangeService){
    // 	this.Service = service;
    // }
    static ReadServiceObjectsCollectionFromJson<TServiceObject extends ServiceObject>(jsonResponse: any/*JsonObject*/, service: ExchangeService, collectionJsonElementName: string, getObjectInstanceDelegate: GetObjectInstanceDelegate<TServiceObject>, clearPropertyBag: boolean, requestedPropertySet: PropertySet, summaryPropertiesOnly: boolean): TServiceObject[] /*System.Collections.Generic.List<TServiceObject>*/ {

        var serviceObjects: TServiceObject[] = [];
        var serviceObject: TServiceObject = null;

        var collectionItems: any[] = jsonResponse[collectionJsonElementName];
       
        for (var key in collectionItems) {
            if((<string>key).indexOf("__")===0)
            continue;
            var jsonServiceObjects:any[] = collectionItems[key]; 
            if(!Array.isArray(jsonServiceObjects)){
                jsonServiceObjects = [jsonServiceObjects];
            }
            for(var jsonServiceObject of jsonServiceObjects){               
                if (jsonServiceObject != null) {
                    var typeName = TypeSystem.GetJsObjectTypeName(jsonServiceObject);
                    if (StringHelper.IsNullOrEmpty(typeName)) debugger;//check why typeName is empty - may be invalid xml parsing by xml2js
                    serviceObject = getObjectInstanceDelegate(service, typeName || key);
                    if (serviceObject != null) {
                        if ((typeName || key) !== serviceObject.GetXmlElementName()) { //string.Compare(jsonServiceObject.ReadTypeString(), serviceObject.GetXmlElementName(), StringComparison.Ordinal) != 0)                        
                            throw new ServiceLocalException(
                                StringHelper.Format(
                                    "The type of the object in the store ({0}) does not match that of the local object ({1}).",
                                    typeName,
                                    serviceObject.GetXmlElementName()));
                        }
                        debugger;
                        serviceObject.LoadFromXmlJsObject(
                            jsonServiceObject,
                            service,
                            clearPropertyBag,
                            requestedPropertySet,
                            summaryPropertiesOnly);
                        debugger;
                        serviceObjects.push(serviceObject);
                    }
                    else
                        debugger;
                }
            }
            
        }

        return serviceObjects;
    }
}
export = EwsServiceJsonReader;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
