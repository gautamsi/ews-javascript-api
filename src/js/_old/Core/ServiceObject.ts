

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



export interface KeyValuePair<TKey, TValue> {
    key: TKey;
    value: TValue;
}
interface StringPropertyDefinitionArray<TKey, TValue> {
    [index: string]: TValue;
}
export class StringPropertyDefinitionBaseDictionary<TKey extends string, TValue extends PropertyDefinitionBase>{
    private keys: string[] = [];
    private objects: StringPropertyDefinitionArray<TKey, TValue> = {};// {[key:string]:TValue};

    //get KeyNames(): string[] { return this.keys; }
    get Keys(): TKey[] {
        var ret: TKey[] = [];
        for (var key in this.objects) {
            ret.push(key);
        }
        return ret;
    }
    get Items(): KeyValuePair<TKey, TValue>[] {
        var all = [];
        for (var obj in this.objects) {
            all.push({ key: this.objects[obj], value: this.objects[obj] });
        }
        return all;
    }
    get Values(): TValue[] {
        var ret: TValue[] = [];
        for (var key in this.objects) {
            ret.push(this.objects[key]);
        }
        return ret;
    }
    get length(): number { return this.keys.length; }
    constructor() {
    }

    add(key: TKey, value: TValue): void {
        if (this.keys.indexOf(<any>key) == -1) {
            this.keys.push(<any>key);
        }
        this.objects[<any>key] = value;
    }
    set(key: TKey, value: TValue): void {
        this.add(key, value);
    }

    get(key: TKey): TValue {
        if (string.IsNullOrEmpty(<any>key))
            throw new Error("invalid operation, object does not have valid Name property");

        //if(this.keys.indexOf(key.Name)>=0)
        return this.objects[<any>key];
    }

    tryGetValue(key: TKey, outValue: IOutParam<TValue>): boolean {
        outValue.value = null;
        outValue.success = false;

        if (string.IsNullOrEmpty(<any>key))
            outValue.exception = new Error("invalid operation, object does not have valid Name property");

        if (this.containsKey(key)) {
            outValue.value = this.objects[<any>key]
            return true;
        }

        return false;
    }

    remove(key: TKey): boolean {
        if (string.IsNullOrEmpty(<any>key)) throw new Error("missing keyString")
        return delete this.objects[<any>key];
    }

    containsKey(key: TKey): boolean {
        if (this.keys.indexOf(<any>key) >= 0 || typeof this.objects[<any>key] !== 'undefined')
            return true;

        return false;
    }

    clear(): void {

        this.keys = [];
        this.objects = {};
    }
}
export class PropertyDefinitionDictionary extends StringPropertyDefinitionBaseDictionary<string, PropertyDefinitionBase>{
}
export interface IndexerWithEnumKey<TKey, TValue> {
    [index: number]: TValue;
}
interface PropDictionaryKey {
    name?: string;
    key?: string;
    id?: string;
}
interface PropDictionaryValue<TKey, TValue> {
    key: string;
    keyObject: TKey;
    value: TValue;

}
interface StringArray<TKey, TValue> {
    [index: string]: PropDictionaryValue<TKey, TValue>;
}
export class PropDictionary<TKey extends { Name?: string }, TValue>{
    private keys: string[] = [];
    private objects: StringArray<TKey, TValue> = {};// {[key:string]:TValue};

    get KeyNames(): string[] { return this.keys; }
    get Keys(): TKey[] {
        var ret: TKey[] = [];
        for (var key in this.objects) {
            ret.push(this.objects[key].keyObject);
        }
        return ret;
    }
    get Items(): KeyValuePair<TKey, TValue>[] {
        var all = [];
        for (var obj in this.objects) {
            all.push({ key: this.objects[obj].keyObject, value: this.objects[obj].value });
        }
        return all;
    }
    get Values(): TValue[] {
        var ret: TValue[] = [];
        for (var key in this.objects) {
            ret.push(this.objects[key].value);
        }
        return ret;
    }
    get length(): number { return this.keys.length; }
    constructor() {
    }

    add(key: TKey, value: TValue): void {
        var keyString = key.Name;
        if (this.keys.indexOf(key.Name) == -1) {
            this.keys.push(keyString);
        }
        this.objects[keyString] = { key: keyString, keyObject: key, value: value };
    }
    set(key: TKey, value: TValue): void {
        this.add(key, value);
    }
    setEntry(oldKeyString: string, oldKey: TKey, value?: TValue, isNull: boolean = false): void {

        if (this.keys.indexOf(oldKeyString) == -1 || typeof this.objects[oldKeyString] === 'undefined') {
            throw new Error("invalid old keystring");
        }
        var oldval = isNull ? null : value || this.objects[oldKeyString].value;
        //oldval =   null:value;
        this.objects[oldKeyString] = { key: oldKey.Name, keyObject: oldKey, value: value || oldval };
    }
    get(key: TKey): TValue {
        if (string.IsNullOrEmpty(key.Name))
            throw new Error("invalid operation, object does not have valid Name property");

        //if(this.keys.indexOf(key.Name)>=0)
        var val = this.objects[key.Name]
        return val ? val.value : undefined;
    }

    tryGet(key: TKey, outValue: IOutParam<TValue>): boolean {
        outValue.value = null;
        outValue.success = false;

        if (string.IsNullOrEmpty(key.Name))
            outValue.exception = new Error("invalid operation, object does not have valid Name property");

        if (this.containsKey(key)) {
            var val = this.objects[key.Name]
            outValue.value = val ? val.value : null;
            return true;
        }

        return false;
    }

    remove(key: TKey): boolean {
        if (string.IsNullOrEmpty(key.Name)) throw new Error("missing keyString")
        return delete this.objects[key.Name];
    }

    containsKey(key: TKey): boolean {
        if (this.keys.indexOf(key.Name) >= 0 || typeof this.objects[key.Name] !== 'undefined')
            return true;

        return false;
    }

    clear(): void {

        this.keys = [];
        this.objects = {};
    }
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


