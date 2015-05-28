import ExchangeVersion = require("../Enumerations/ExchangeVersion");
import PropertyDefinitionFlags = require("../Enumerations/PropertyDefinitionFlags");
import PropertyBag = require("../Core/PropertyBag");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

import PropertyDefinition = require("./PropertyDefinition");
class TypedPropertyDefinition extends PropertyDefinition {
    get IsNullable(): boolean { return this.isNullable; };
    private isNullable: boolean;

    constructor(
        propertyName: string,
        xmlElementName: string,
        version: ExchangeVersion,
        uri?: string,
        flags?: PropertyDefinitionFlags,
        isNullable: boolean = true) {

        super(propertyName, xmlElementName, version, uri, flags);
        this.isNullable = isNullable;
    }
    LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("TypedPropertyDefinition.ts - LoadPropertyValueFromJson : Not implemented."); }
    LoadPropertyValueFromXmlJsObject(jsObject: any, propertyBag: PropertyBag): any {
        var stringValue = <string>jsObject;

        if (typeof jsObject === 'string' || jsObject instanceof String) {
            propertyBag._propSet(this, this.Parse(jsObject));
        }
        else if (jsObject != null || typeof jsObject !== 'undefined') {
            propertyBag._propSet(this, this.Parse(jsObject.toString()));
        }
    }
    Parse(value: string): any { throw new Error("abstract method in TypedPropertyDefinition.ts, Not implemented."); }
    ToString(value?: any): string {
        if (value)
            return value.toString();
        throw new Error("TypedPropertydefinition: incorrect call of ToString()");
    }
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("TypedPropertyDefinition.ts - WritePropertyValueToXml : Not implemented."); }
}

export = TypedPropertyDefinition;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
