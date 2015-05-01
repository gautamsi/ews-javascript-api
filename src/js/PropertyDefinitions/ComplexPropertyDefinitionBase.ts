import ExchangeVersion = require("../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
//import XmlElementNames = require("../Core/XmlElementNames");
import PropertyDefinitionFlags = require("../Enumerations/PropertyDefinitionFlags");
import PropertyBag = require("../Core/PropertyBag");
import ExchangeService = require("../Core/ExchangeService");
import ServiceObject = require("../Core/ServiceObjects/ServiceObject");
import ComplexProperty = require("../ComplexProperties/ComplexProperty");

import PropertyDefinition = require("./PropertyDefinition");
class ComplexPropertyDefinitionBase extends PropertyDefinition {

    constructor(xmlElementName: string,
        version: ExchangeVersion,
        uri?: string,
        flags?: PropertyDefinitionFlags) {
        super(xmlElementName, version, uri, flags);
    }

    CreatePropertyInstance(owner: ServiceObject): ComplexProperty { throw new Error("Not implemented."); }
    GetPropertyInstance(propertyBag: PropertyBag, complexProperty: any): boolean { throw new Error("Not implemented."); }
    InternalLoadCollectionFromJson(jsonCollection: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
    InternalLoadFromJson(jsonObject: any /*JsonObject*/, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
    InternalLoadFromXml(reader: EwsServiceXmlReader, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
    //LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
    LoadPropertyValueFromXml(reader: EwsServiceXmlReader, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
    LoadPropertyValueFromObject(obj: any, propertyBag: PropertyBag): void { throw new Error("abstract method, must implement"); }
    //WriteJsonValue(jsonObject: any /*JsonObject*/, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
}
export = ComplexPropertyDefinitionBase
