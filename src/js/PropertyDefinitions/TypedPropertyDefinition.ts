import {XmlNamespace} from "../Enumerations/XmlNamespace";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {PropertyDefinitionFlags} from "../Enumerations/PropertyDefinitionFlags";
import {PropertyBag} from "../Core/PropertyBag";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";

import {PropertyDefinition} from "./PropertyDefinition";
export class TypedPropertyDefinition extends PropertyDefinition {
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
    LoadPropertyValueFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): any {
        var stringValue = <string>jsObject;

        if (typeof jsObject === 'string' || jsObject instanceof String) {
            propertyBag._setItem(this, this.Parse(jsObject));
        }
        else if (jsObject != null) { //undefined == null returns true, false for === comparison.
            propertyBag._setItem(this, this.Parse(jsObject));
        }
    }
    Parse(value: string): any { throw new Error("abstract TypedPropertyDefinition.ts - Parse : Not implemented."); }
    ToString(value?: any): string {
        if (value)
            return value.toString();
        throw new Error("TypedPropertydefinition: incorrect call of ToString()");
    }
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void {
        var value = propertyBag._getItem(this);

        if (value != null) {
            writer.WriteElementValue(XmlNamespace.Types, this.XmlElementName, this.Name, value);
        }
    }
}