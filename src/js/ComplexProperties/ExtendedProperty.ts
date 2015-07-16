import {EwsServiceJsonReader} from "../Core/EwsServiceJsonReader";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsUtilities} from "../Core/EwsUtilities";
import {XmlNamespace} from "../Enumerations/XmlNamespace";
import {MapiTypeConverter} from "../Misc/MapiTypeConverter";
import {XmlElementNames} from "../Core/XmlElementNames";
import {EwsLogging} from "../Core/EwsLogging";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {ExtendedPropertyDefinition} from "../PropertyDefinitions/ExtendedPropertyDefinition";
import {StringList} from "./StringList";
import {ComplexProperty} from "./ComplexProperty";
export class ExtendedProperty extends ComplexProperty {
    private propertyDefinition: ExtendedPropertyDefinition = null;
    private value: any = null;

    get PropertyDefinition(): ExtendedPropertyDefinition {
        return this.propertyDefinition;
    }

    get Value(): any {
        return this.value;
    }

    set Value(value: any) {
        EwsUtilities.ValidateParam(value, "value");
        this.SetFieldValue<any>({ getValue: () => this.value, setValue: (val) => this.value = val }, value);
    }

    constructor(propertyDefinition?: ExtendedPropertyDefinition) {
        super();
        //EwsUtilities.ValidateParam(propertyDefinition, "propertyDefinition");
        if (typeof propertyDefinition !== 'undefined')
            this.propertyDefinition = propertyDefinition;
    }

    Equals(obj: any): boolean { throw new Error("ExtendedProperty.ts - Equals : Not implemented."); }
    GetHashCode(): number { throw new Error("ExtendedProperty.ts - GetHashCode : Not implemented."); }
    GetStringValue(): string { throw new Error("ExtendedProperty.ts - GetStringValue : Not implemented."); }
    //InternalToJson(service: ExchangeService): any { throw new Error("ExtendedProperty.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: any, service: ExchangeService): any { throw new Error("ExtendedProperty.ts - LoadFromJson : Not implemented."); }
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void {
        if (jsonProperty[XmlElementNames.ExtendedFieldURI]) {
            this.propertyDefinition = new ExtendedPropertyDefinition();
            this.propertyDefinition.LoadPropertyValueFromXmlJsObject(jsonProperty[XmlElementNames.ExtendedFieldURI]);
        }

        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames.ExtendedFieldURI:
                    //pre processed above
                    break;
                case XmlElementNames.Value:
                    EwsLogging.Assert(
                        this.PropertyDefinition != null,
                        "ExtendedProperty.TryReadElementFromXml",
                        "PropertyDefintion is missing");

                    var stringValue: string = jsonProperty[key];
                    this.value = MapiTypeConverter.ConvertToValue(this.PropertyDefinition.MapiType, stringValue);
                    break;
                case XmlElementNames.Values:
                    EwsLogging.Assert(
                        this.PropertyDefinition != null,
                        "ExtendedProperty.TryReadElementFromXml",
                        "PropertyDefintion is missing");

                    var stringList: StringList = new StringList(XmlElementNames.Value);
                    var jsonCollection = EwsServiceJsonReader.ReadAsArray(jsonProperty, key);
                    stringList.CreateFromJsonCollection(jsonCollection, service);
                    this.value = MapiTypeConverter.ConvertToValue(this.PropertyDefinition.MapiType, stringList.Items);
                    break;
                default:
                    break;
            }
        }
    }
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        this.PropertyDefinition.WriteToXml(writer);
        if (MapiTypeConverter.IsArrayType(this.PropertyDefinition.MapiType)) {
            var array: any[] = this.Value;
            writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.Values);
            for (var index = 0; index < array.length; index++) {
                writer.WriteElementValue(
                    XmlNamespace.Types,
                    XmlElementNames.Value,
                    MapiTypeConverter.ConvertToString(this.PropertyDefinition.MapiType, array[index]));
            }
            writer.WriteEndElement();
        }
        else {
            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.Value,
                MapiTypeConverter.ConvertToString(this.PropertyDefinition.MapiType, this.Value));
        }
    }
}