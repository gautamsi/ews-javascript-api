import ServiceObjectSchema = require("../Core/ServiceObjects/Schemas/ServiceObjectSchema");
import ExchangeService = require("../Core/ExchangeService");
import ExchangeVersion = require("../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import XmlElementNames = require("../Core/XmlElementNames");
import PropertyDefinitionFlags = require("../Enumerations/PropertyDefinitionFlags");
import PropertyBag = require("../Core/PropertyBag");


import {StringHelper} from "../ExtensionMethods";

import ServiceObjectPropertyDefinition = require("./ServiceObjectPropertyDefinition");

//should be done
class PropertyDefinition extends ServiceObjectPropertyDefinition {
    get Version(): ExchangeVersion { return this.version; }
    get IsNullable(): boolean { return true; }
    get XmlElementName(): string { return this.xmlElementName; }
    get Name(): string {
        if (StringHelper.IsNullOrEmpty(this.name)) {
            throw new Error("incorrectly registered propertynames - info: fixed by initializing names in respective serviceobjectschema static properties. fix if receive this error");
            //todo:fix: can not use this to initialize names, ServiceObjectSchema creates circular loops in modules.
            //ServiceObjectSchema.InitializeSchemaPropertyNames(); //info: fixed by initializing names in respective serviceobjectschema static properties. fix if receive this error
        }
        return this.name;
    }
    set Name(value: string) { this.name = value; }
    private xmlElementName: string;
    private flags: PropertyDefinitionFlags;
    private name: string;
    private version: ExchangeVersion;

    constructor(xmlElementName: string,
        version: ExchangeVersion,
        uri?: string,
        flags?: PropertyDefinitionFlags) {

        super(uri);
        this.flags = flags;
        this.xmlElementName = xmlElementName;
        this.version = version;
    }

    GetAssociatedInternalProperties(): PropertyDefinition[] /*System.Collections.Generic.List<PropertyDefinition>*/ {
        var properties: PropertyDefinition[] = [];

        this.RegisterAssociatedInternalProperties(properties);

        return properties;
    }
    GetPrintableName(): string { return this.Name; }
    //HasFlag(flag: PropertyDefinitionFlags): boolean { throw new Error("Not implemented."); }
    HasFlag(flag: PropertyDefinitionFlags, version?: ExchangeVersion): boolean {
        return (this.flags & flag) == flag;
    }
    LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
    LoadPropertyValueFromXmlJsObject(jsObject: any, propertyBag: PropertyBag): void { /*throw new Error("abstract method, must implement");*/ }
    RegisterAssociatedInternalProperties(properties: PropertyDefinition[]/* System.Collections.Generic.List<PropertyDefinition>*/): any {
    }
    WriteJsonValue(jsonObject: any, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void {
        throw new Error("abstract method, must implement.");
    }
}

export = PropertyDefinition;




//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
