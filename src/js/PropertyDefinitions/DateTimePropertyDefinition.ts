import XmlNamespace = require("../Enumerations/XmlNamespace");
import EwsUtilities = require("../Core/EwsUtilities");
import ExchangeVersion = require("../Enumerations/ExchangeVersion");
import PropertyDefinitionFlags = require("../Enumerations/PropertyDefinitionFlags");
import ExchangeServiceBase = require("../Core/ExchangeServiceBase");
import PropertyBag = require("../Core/PropertyBag");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import JsonObject = require("../Core/JsonObject");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");

import PropertyDefinition = require("./PropertyDefinition");
class DateTimePropertyDefinition extends PropertyDefinition {
    get IsNullable(): boolean{return this.isNullable;}
    Type: any;//System.Type;
    private isNullable: boolean = false;
    constructor(
        propertyName: string,
        xmlElementName: string,
        version: ExchangeVersion,
        uri?: string,
        flags?: PropertyDefinitionFlags,
        isNullable: boolean = false) {
        super(propertyName, xmlElementName, version, uri, flags);
    }
    GetConvertedDateTime(service: ExchangeServiceBase, propertyBag: PropertyBag, isUpdateOperation: boolean, value: any): Date { throw new Error("DateTimePropertyDefinition.ts - GetConvertedDateTime : Not implemented."); }
    LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("DateTimePropertyDefinition.ts - LoadPropertyValueFromJson : Not implemented."); }
    LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("DateTimePropertyDefinition.ts - LoadPropertyValueFromXmlJsObject : Not implemented."); }
    ScopeToTimeZone(service: ExchangeServiceBase, dateTime: Date, propertyBag: PropertyBag, isUpdateOperation: boolean): Date { throw new Error("DateTimePropertyDefinition.ts - ScopeToTimeZone : Not implemented."); }
    WriteJsonValue(jsonObject: JsonObject, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("DateTimePropertyDefinition.ts - WriteJsonValue : Not implemented."); }
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void {
        var value = propertyBag._getItem(this);

            if (value != null)
            {
                writer.WriteStartElement(XmlNamespace.Types, this.XmlElementName);

                var convertedDateTime:Date =this.GetConvertedDateTime(writer.Service, propertyBag, isUpdateOperation, value);

                writer.WriteValue(EwsUtilities.DateTimeToXSDateTime(convertedDateTime), this.Name);

                writer.WriteEndElement();
            }
    }
}


export = DateTimePropertyDefinition;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
