import ExchangeService = require("../Core/ExchangeService");
import ServiceObject = require("../Core/ServiceObjects/ServiceObject");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import PropertyDefinition = require("../PropertyDefinitions/PropertyDefinition");
interface ICustomUpdateSerializer {
    WriteDeleteUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, updates: /*System.Collections.Generic.List<T>*/any): boolean;
    WriteDeleteUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject): boolean;
    WriteSetUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, propertyDefinition: PropertyDefinition, updates: /*System.Collections.Generic.List<T>*/any): boolean;
    WriteSetUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject, propertyDefinition: PropertyDefinition): boolean;
}
export = ICustomUpdateSerializer;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
