import Strings = require("../Strings");
import EwsUtilities = require("../Core/EwsUtilities");
import XmlElementNames = require("../Core/XmlElementNames");
import ExtendedProperty = require("./ExtendedProperty");
import ExtendedPropertyDefinition = require("../PropertyDefinitions/ExtendedPropertyDefinition");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import IOutParam = require("../Interfaces/IOutParam");
import {StringHelper, ArrayHelper} from "../ExtensionMethods";

import ComplexPropertyCollection = require("./ComplexPropertyCollection");
class ExtendedPropertyCollection extends ComplexPropertyCollection<ExtendedProperty> {
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
    LoadFromXmlJsObject(jsObject: any,service:ExchangeService ): void {//localElementName: string
        var extendedProperty = new ExtendedProperty();
        debugger; //todo: check for need of local elementnot tested
        extendedProperty.LoadFromXmlJsObject(jsObject, service);
        this.InternalAdd(extendedProperty);
    }
    RemoveExtendedProperty(propertyDefinition: ExtendedPropertyDefinition): boolean {
        //EwsUtilities.ValidateParam(propertyDefinition, "propertyDefinition");

        var extendedProperty: ExtendedProperty = null;
        if (this.TryGetProperty(propertyDefinition, extendedProperty)) {
            return this.InternalRemove(extendedProperty);
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
            //debugger;
            throw new Error("ExtendedPropertyCollection.ts - TryGetValue - some type of implementation needed for TypeSystem - ExtendedPropertyCollection.ts - TryGetValue");
            //if (!typeof (T).IsAssignableFrom(propertyDefinition.Type)) {
            var errorMessage = StringHelper.Format(
                Strings.PropertyDefinitionTypeMismatch,
                EwsUtilities.GetPrintableTypeName(propertyDefinition.Type),
                EwsUtilities.GetPrintableTypeName("Y"));
            throw new Error(errorMessage +  " - propertyDefinition");//ArgumentException
            //}

            propertyValue = <T>extendedProperty.outValue.Value;
            return true
        }
        else {
            propertyValue = null;// default(T);
            return false;
        }
    }
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): void {
        for (var extendedProperty of this.Items) {
            extendedProperty.WriteToXml(writer, XmlElementNames.ExtendedProperty);
        }
    }
}
export = ExtendedPropertyCollection;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
