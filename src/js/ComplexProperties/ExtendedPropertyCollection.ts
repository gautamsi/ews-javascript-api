import { ArgumentException } from "../Exceptions/ArgumentException";
import { ArrayHelper, StringHelper } from "../ExtensionMethods";
import { EwsServiceXmlReader } from "../Core/EwsServiceXmlReader";
import { EwsServiceXmlWriter } from "../Core/EwsServiceXmlWriter";
import { EwsUtilities } from "../Core/EwsUtilities";
import { ExchangeService } from "../Core/ExchangeService";
import { ExtendedProperty } from "./ExtendedProperty";
import { ExtendedPropertyDefinition } from "../PropertyDefinitions/ExtendedPropertyDefinition";
import { IOutParam } from "../Interfaces/IOutParam";
import { ICustomUpdateSerializer } from "../Interfaces/ICustomXmlUpdateSerializer";
import { Strings } from "../Strings";
import { XmlElementNames } from "../Core/XmlElementNames";

import { ComplexPropertyCollection } from "./ComplexPropertyCollection";
export class ExtendedPropertyCollection extends ComplexPropertyCollection<ExtendedProperty> implements ICustomUpdateSerializer {
    CreateComplexProperty(xmlElementName: string): ExtendedProperty { return new ExtendedProperty(); }
    CreateDefaultComplexProperty(): ExtendedProperty { return new ExtendedProperty(); }
    GetCollectionItemXmlElementName(complexProperty: ExtendedProperty): string { return null; }
    GetOrAddExtendedProperty(propertyDefinition: ExtendedPropertyDefinition): ExtendedProperty {
        var extendedProperty: IOutParam<ExtendedProperty> = { outValue: null };
        if (!this.TryGetProperty(propertyDefinition, extendedProperty)) {
            extendedProperty.outValue = new ExtendedProperty(propertyDefinition);
            this.InternalAdd(extendedProperty.outValue);
        }
        return extendedProperty.outValue;
    }
    InternalToJson(service: ExchangeService): any { throw new Error("ExtendedPropertyCollection.ts - InternalToJson : Not implemented."); }
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {//localElementName: string
        var extendedProperty = new ExtendedProperty();
        //debugger; //debug: //todo: check for need of local element -not tested
        extendedProperty.LoadFromXmlJsObject(jsObject, service);
        this.InternalAdd(extendedProperty);
    }
    RemoveExtendedProperty(propertyDefinition: ExtendedPropertyDefinition): boolean {
        //EwsUtilities.ValidateParam(propertyDefinition, "propertyDefinition");

        var extendedProperty: IOutParam<ExtendedProperty> = { outValue: null };
        if (this.TryGetProperty(propertyDefinition, extendedProperty)) {
            return this.InternalRemove(extendedProperty.outValue);
        }
        else {
            return false;
        }
    }
    SetExtendedProperty(propertyDefinition: ExtendedPropertyDefinition, value: any): void {
        var extendedProperty = this.GetOrAddExtendedProperty(propertyDefinition);
        extendedProperty.Value = value;
    }
    TryGetProperty(propertyDefinition: ExtendedPropertyDefinition, extendedProperty: IOutParam<ExtendedProperty>): boolean {
        extendedProperty.outValue = ArrayHelper.Find(this.Items, (prop) => prop.PropertyDefinition.Equals(propertyDefinition));
        return extendedProperty.outValue != null;
    }
    TryGetValue<T>(propertyDefinition: ExtendedPropertyDefinition, propertyValue: IOutParam<T>): boolean {
        var extendedProperty: IOutParam<ExtendedProperty> = { outValue: null };
        if (this.TryGetProperty(propertyDefinition, extendedProperty)) {
            //debug: Verify that the type parameter and property definition's type are compatible.
            //if (!typeof (T).IsAssignableFrom(propertyDefinition.Type)) {
            // var errorMessage = StringHelper.Format(
            //     Strings.PropertyDefinitionTypeMismatch,
            //     EwsUtilities.GetPrintableTypeName(propertyDefinition.Type),
            //     EwsUtilities.GetPrintableTypeName("Y"));
            // throw new ArgumentException(errorMessage +  " - propertyDefinition");
            //}
            propertyValue.outValue = <T>extendedProperty.outValue.Value;
            return true
        }
        else {
            propertyValue.outValue = null;// default(T);
            return false;
        }
    }
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): void {
        for (var extendedProperty of this.Items) {
            extendedProperty.WriteToXml(writer, XmlElementNames.ExtendedProperty);
        }
    }
}

