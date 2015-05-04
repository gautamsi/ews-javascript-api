import PropertyBag = require("../Core/PropertyBag");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

import PropertyDefinition = require("./PropertyDefinition");
class TypedPropertyDefinition extends PropertyDefinition {
    IsNullable: boolean;
    private isNullable: boolean;
    LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
    LoadPropertyValueFromXml(reader: EwsServiceXmlReader, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
    Parse(value: string): any { throw new Error("Not implemented."); }
    //ToString(value: any): string { throw new Error("Not implemented."); }
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
}

export = TypedPropertyDefinition;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
