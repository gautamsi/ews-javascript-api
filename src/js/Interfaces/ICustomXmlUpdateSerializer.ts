import {ExchangeService} from "../Core/ExchangeService";
import {ServiceObject} from "../Core/ServiceObjects/ServiceObject";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {PropertyDefinition} from "../PropertyDefinitions/PropertyDefinition";
export interface ICustomUpdateSerializer {
    //WriteDeleteUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, updates: /*System.Collections.Generic.List<T>*/any): boolean;
    /** @internal */
    WriteDeleteUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject): boolean;
    //WriteSetUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, propertyDefinition: PropertyDefinition, updates: /*System.Collections.Generic.List<T>*/any): boolean;
    /** @internal */
    WriteSetUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject, propertyDefinition: PropertyDefinition): boolean;
}