

export class ComplexPropertyDefinitionBase extends PropertyDefinition {
    CreatePropertyInstance(owner: ServiceObject): ComplexProperty { throw new Error("Not implemented."); }
    GetPropertyInstance(propertyBag: PropertyBag, complexProperty: any): boolean { throw new Error("Not implemented."); }
    InternalLoadCollectionFromJson(jsonCollection: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
    InternalLoadFromJson(jsonObject: any /*JsonObject*/, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
    InternalLoadFromXml(reader: EwsServiceXmlReader, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
    LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
    LoadPropertyValueFromXml(reader: EwsServiceXmlReader, propertyBag: PropertyBag): any { throw new Error("Not implemented."); }
    WriteJsonValue(jsonObject: any /*JsonObject*/, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any { throw new Error("Not implemented."); }
}



export class ComplexPropertyCollection<TComplexProperty> extends ComplexProperty {
    Items: TComplexProperty[];  //System.Collections.Generic.List<TComplexProperty>;
    AddedItems: TComplexProperty[];  //System.Collections.Generic.List<TComplexProperty>;
    ModifiedItems: TComplexProperty[];  //System.Collections.Generic.List<TComplexProperty>;
    RemovedItems: TComplexProperty[];  //System.Collections.Generic.List<TComplexProperty>;
    Count: number;
    Item: TComplexProperty;
    private items: TComplexProperty[];  //System.Collections.Generic.List<TComplexProperty>;
    private addedItems: TComplexProperty[];  //System.Collections.Generic.List<TComplexProperty>;
    private modifiedItems: TComplexProperty[];  //System.Collections.Generic.List<TComplexProperty>;
    private removedItems: TComplexProperty[];  //System.Collections.Generic.List<TComplexProperty>;
    ClearChangeLog(): any { throw new Error("Not implemented."); }
    Contains(complexProperty: TComplexProperty): boolean { throw new Error("Not implemented."); }
    CreateComplexProperty(xmlElementName: string): TComplexProperty { throw new Error("Not implemented."); }
    CreateDefaultComplexProperty(): TComplexProperty { throw new Error("Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: TComplexProperty): string { throw new Error("Not implemented."); }
    GetEnumerator(): any { throw new Error("Not implemented."); }
    IndexOf(complexProperty: TComplexProperty): number { throw new Error("Not implemented."); }
    //InternalAdd(complexProperty: TComplexProperty): any { throw new Error("Not implemented."); }
    InternalAdd(complexProperty: TComplexProperty, loading: boolean): any { throw new Error("Not implemented."); }
    InternalClear(): any { throw new Error("Not implemented."); }
    InternalRemove(complexProperty: TComplexProperty): boolean { throw new Error("Not implemented."); }
    InternalRemoveAt(index: number): any { throw new Error("Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    ItemChanged(complexProperty: ComplexProperty): any { throw new Error("Not implemented."); }
    LoadFromXml(reader: EwsServiceXmlReader, localElementName: string, xmlNamespace?: XmlNamespace): any { throw new Error("Not implemented."); }
    //LoadFromXml(reader: EwsServiceXmlReader, localElementName: string): any { throw new Error("Not implemented."); }
    RemoveFromChangeLog(complexProperty: TComplexProperty): any { throw new Error("Not implemented."); }
    ShouldWriteToRequest(): boolean { throw new Error("Not implemented."); }
    UpdateFromXml(reader: EwsServiceXmlReader, xmlElementName: string, xmlNamespace?: XmlNamespace): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string, xmlNamespace?: XmlNamespace): any { throw new Error("Not implemented."); }
}
export class ExtendedProperty extends ComplexProperty {
    PropertyDefinition: ExtendedPropertyDefinition;
    Value: any;
    private propertyDefinition: ExtendedPropertyDefinition;
    private value: any;

    constructor(propertyDefinition?: ExtendedPropertyDefinition) {
        super();
        //EwsUtilities.ValidateParam(propertyDefinition, "propertyDefinition");
        if (typeof propertyDefinition !== 'undefined')
            this.propertyDefinition = propertyDefinition;
    }

    Equals(obj: any): boolean { throw new Error("Not implemented."); }
    GetHashCode(): number { throw new Error("Not implemented."); }
    GetStringValue(): string { throw new Error("Not implemented."); }
    //InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    LoadFromJson(jsonProperty: any /*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean {
        return false;
        //switch (reader.LocalName) {
        //    case XmlElementNames.ExtendedFieldURI:
        //        this.propertyDefinition = new ExtendedPropertyDefinition();
        //        this.propertyDefinition.LoadFromXml(reader);
        //        return true;
        //    case XmlElementNames.Value:
        //        EwsUtilities.Assert(
        //            this.PropertyDefinition != null,
        //            "ExtendedProperty.TryReadElementFromXml",
        //            "PropertyDefintion is missing");

        //        var stringValue: string = reader.ReadElementValue();
        //        this.value = MapiTypeConverter.ConvertToValue(this.PropertyDefinition.MapiType, stringValue);
        //        return true;
        //    case XmlElementNames.Values:
        //        EwsUtilities.Assert(
        //            this.PropertyDefinition != null,
        //            "ExtendedProperty.TryReadElementFromXml",
        //            "PropertyDefintion is missing");

        //        StringList stringList = new StringList(XmlElementNames.Value);
        //        stringList.LoadFromXml(reader, reader.LocalName);
        //        this.value = MapiTypeConverter.ConvertToValue(this.PropertyDefinition.MapiType, stringList);
        //        return true;
        //    default:
        //        return false;
        //}
    }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}

export class ExtendedPropertyCollection extends ComplexPropertyCollection<ExtendedProperty> {
    CreateComplexProperty(xmlElementName: string): ExtendedProperty { throw new Error("Not implemented."); }
    CreateDefaultComplexProperty(): ExtendedProperty { throw new Error("Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: ExtendedProperty): string { throw new Error("Not implemented."); }
    GetOrAddExtendedProperty(propertyDefinition: ExtendedPropertyDefinition): ExtendedProperty { throw new Error("Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    LoadFromXml(reader: EwsServiceXmlReader, localElementName: string): any { throw new Error("Not implemented."); }
    RemoveExtendedProperty(propertyDefinition: ExtendedPropertyDefinition): boolean { throw new Error("Not implemented."); }
    SetExtendedProperty(propertyDefinition: ExtendedPropertyDefinition, value: any): any { throw new Error("Not implemented."); }
    TryGetProperty(propertyDefinition: ExtendedPropertyDefinition, extendedProperty: any): boolean { throw new Error("Not implemented."); }
    TryGetValue(propertyDefinition: ExtendedPropertyDefinition, propertyValue: any): boolean { throw new Error("Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any { throw new Error("Not implemented."); }
}







interface ICustomUpdateSerializer {
    WriteDeleteUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, updates: /*System.Collections.Generic.List<T>*/any): boolean;
    WriteDeleteUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject): boolean;
    WriteSetUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, propertyDefinition: PropertyDefinition, updates: /*System.Collections.Generic.List<T>*/any): boolean;
    WriteSetUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject, propertyDefinition: PropertyDefinition): boolean;
}
interface IOwnedProperty {
    Owner: ServiceObject;
}

class MapiTypeConverter {
    static MapiTypeConverterMap: /*System.Collections.Generic.Dictionary<MapiPropertyType, MapiTypeConverterMapEntry>*/any;
    private static mapiTypeConverterMap: LazyMember</*T*/any>;
    ChangeType(mapiType: MapiPropertyType, value: any): any { throw new Error("Not implemented."); }
    ConvertToString(mapiPropType: MapiPropertyType, value: any): string { throw new Error("Not implemented."); }
    ConvertToValue(mapiPropType: MapiPropertyType, stringValue: string): any { throw new Error("Not implemented."); }
    //ConvertToValue(mapiPropType: MapiPropertyType, strings: System.Collections.Generic.IEnumerable<string>): System.Array { throw new Error("Not implemented.");}
    IsArrayType(mapiType: MapiPropertyType): boolean { throw new Error("Not implemented."); }
    ParseMapiIntegerValue(s: string): any { throw new Error("Not implemented."); }
}
class MapiTypeConverterMapEntry {
    Parse: /*System.Func<string, any>*/any;
    ConvertToString: /*System.Func<any, string>*/any;
    Type: /*System.Type*/any;
    IsArray: boolean;
    DefaultValue: any;
    private static defaultValueMap: /*LazyMember<T>*/any;
    ChangeType(value: any): any { throw new Error("Not implemented."); }
    ConvertToValue(stringValue: string): any { throw new Error("Not implemented."); }
    ConvertToValueOrDefault(stringValue: string): any { throw new Error("Not implemented."); }
    ValidateValueAsArray(value: any): any { throw new Error("Not implemented."); }
}


