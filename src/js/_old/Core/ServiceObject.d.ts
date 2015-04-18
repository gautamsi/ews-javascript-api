import enums = require('../Enums');
import XmlNamespace = enums.Data.XmlNamespace;
import ExchangeVersion = enums.Data.ExchangeVersion;
import BodyType = enums.Data.BodyType;
import MapiPropertyType = enums.Data.MapiPropertyType;
import PropertyDefinitionFlags = enums.Data.PropertyDefinitionFlags;
import DefaultExtendedPropertySet = enums.Data.DefaultExtendedPropertySet;
import BasePropertySet = enums.Data.BasePropertySet;
import ServiceObjectType = enums.Data.ServiceObjectType;
import ServiceError = enums.Data.ServiceError;
import DeleteMode = enums.Data.DeleteMode;
import SendCancellationsMode = enums.Data.SendCancellationsMode;
import AffectedTaskOccurrence = enums.Data.AffectedTaskOccurrence;
import serviceBase = require("./ExchangeService");
import ExchangeService = serviceBase.ExchangeService;
import ewsobjestc = require("./EwsServiceObjects");
import EwsServiceXmlReader = ewsobjestc.EwsServiceXmlReader;
import EwsServiceXmlWriter = ewsobjestc.EwsServiceXmlWriter;
import EwsXmlReader = ewsobjestc.EwsXmlReader;
export declare class PropertyBag {
    Owner: ServiceObject;
    IsDirty: boolean;
    Item: any;
    private owner;
    private isDirty;
    private loading;
    private onlySummaryPropertiesRequested;
    private loadedProperties;
    private properties;
    private deletedProperties;
    private modifiedProperties;
    private addedProperties;
    private requestedPropertySet;
    constructor(serviceObject: ServiceObject);
    static AddToChangeList(propertyDefinition: PropertyDefinition, changeList: PropertyDefinition[]): void;
    private Changed();
    Clear(): void;
    ClearChangeLog(): void;
    Contains(propertyDefinition: PropertyDefinition): boolean;
    DeleteProperty(propertyDefinition: PropertyDefinition): void;
    GetIsUpdateCallNecessary(): boolean;
    static GetPropertyUpdateItemName(serviceObject: ServiceObject): string;
    GetPropertyValueOrException(propertyDefinition: PropertyDefinition, exception: IOutParam<any>): any;
    InitComplexProperty(complexProperty: ComplexProperty): void;
    IsPropertyLoaded(propertyDefinition: PropertyDefinition): boolean;
    IsPropertyUpdated(propertyDefinition: PropertyDefinition): boolean;
    IsRequestedProperty(propertyDefinition: PropertyDefinition): boolean;
    LoadFromXml(reader: EwsServiceXmlReader, clear: boolean, requestedPropertySet: PropertySet, onlySummaryPropertiesRequested: boolean): void;
    PropertyChanged(complexProperty: ComplexProperty): void;
    _propGet(propertyDefinition: PropertyDefinition): any;
    _propSet(propertyDefinition: PropertyDefinition, value: any): void;
    TryGetProperty(propertyDefinition: PropertyDefinition, propertyValue: IOutParam<any>): boolean;
    TryGetPropertyAs<T>(propertyDefinition: PropertyDefinition, propertyValue: IOutParam<T>): boolean;
    TryGetValue(propertyDefinition: PropertyDefinition, propertyValue: IOutParam<any>): boolean;
    Validate(): void;
    ValidatePropertyValue(propertyDefinition: PropertyDefinition): void;
    WriteDeleteUpdateToXml(writer: EwsServiceXmlWriter, propertyDefinition: PropertyDefinition, propertyValue: any): void;
    WriteSetUpdateToXml(writer: EwsServiceXmlWriter, propertyDefinition: PropertyDefinition): void;
    WriteToXml(writer: EwsServiceXmlWriter): void;
    WriteToXmlForUpdate(writer: EwsServiceXmlWriter): void;
}
export declare class ServiceObject {
    PropertyBag: PropertyBag;
    Schema: ServiceObjectSchema;
    Item: any;
    Service: ExchangeService;
    IsNew: boolean;
    IsDirty: boolean;
    private lockObject;
    private propertyBag;
    private xmlElementName;
    private OnChange;
    constructor(service: ExchangeService);
    PropertyDefinition(propertyDefinition: PropertyDefinitionBase): any;
    Changed(): void;
    ClearChangeLog(): void;
    GetChangeXmlElementName(): string;
    GetDeleteFieldXmlElementName(): string;
    GetExtendedProperties(): ExtendedPropertyCollection;
    GetId(): ServiceId;
    GetIdPropertyDefinition(): PropertyDefinition;
    GetIsCustomDateTimeScopingRequired(): boolean;
    GetIsTimeZoneHeaderRequired(isUpdateOperation: boolean): boolean;
    GetLoadedPropertyDefinitions(): PropertyDefinitionBase;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetSchema(): ServiceObjectSchema;
    GetSetFieldXmlElementName(): string;
    GetXmlElementName(): string;
    GetXmlElementNameOverride(): string;
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): void;
    InternalLoad(propertySet: PropertySet): void;
    Load(propertySet?: PropertySet): void;
    LoadFromXml(reader: EwsServiceXmlReader, clearPropertyBag: boolean, requestedPropertySet?: PropertySet, summaryPropertiesOnly?: boolean): void;
    ThrowIfThisIsNew(): void;
    ThrowIfThisIsNotNew(): void;
    TryGetExtendedProperty(propertyDefinition: ExtendedPropertyDefinition, propertyValue: any): boolean;
    TryGetProperty<T>(propertyDefinition: PropertyDefinitionBase, propertyValue: any): boolean;
    Validate(): void;
    WriteToXml(writer: EwsServiceXmlWriter): void;
    WriteToXmlForUpdate(writer: EwsServiceXmlWriter): void;
    IsFolderInstance(): boolean;
    IsItemInstance(): boolean;
    IsAttachment: boolean;
}
export declare class Folder extends ServiceObject {
    GetFolderInstance(): Folder;
}
export declare class PropertySet {
    BasePropertySet: BasePropertySet;
    RequestedBodyType: BodyType;
    RequestedUniqueBodyType: BodyType;
    RequestedNormalizedBodyType: BodyType;
    Count: number;
    FilterHtmlContent: boolean;
    ConvertHtmlCodePageToUTF8: boolean;
    InlineImageUrlTemplate: string;
    BlockExternalImages: boolean;
    AddBlankTargetToLinks: boolean;
    MaximumBodySize: number;
    Item(index: number): PropertyDefinitionBase;
    static DefaultPropertySetMap: LazyMember<IndexerWithEnumKey<BasePropertySet, string>>;
    private basePropertySet;
    private additionalProperties;
    private requestedBodyType;
    private requestedUniqueBodyType;
    private requestedNormalizedBodyType;
    private filterHtml;
    private convertHtmlCodePageToUTF8;
    private inlineImageUrlTemplate;
    private blockExternalImages;
    private addTargetToLinks;
    private isReadOnly;
    private maximumBodySize;
    static IdOnly: PropertySet;
    static FirstClassProperties: PropertySet;
    private static defaultPropertySetMap;
    constructor(basePropertySet?: BasePropertySet, additionalProperties?: PropertyDefinitionBase[]);
    Add(property: PropertyDefinitionBase): void;
    AddRange(properties: PropertyDefinitionBase): void;
    Clear(): void;
    Contains(property: PropertyDefinitionBase): boolean;
    static CreateReadonlyPropertySet(basePropertySet: BasePropertySet): PropertySet;
    GetEnumerator(): any;
    GetShapeName(serviceObjectType: ServiceObjectType): string;
    InternalValidate(): void;
    Remove(property: PropertyDefinitionBase): boolean;
    ThrowIfReadonly(): void;
    Validate(): void;
    ValidateForRequest(request: ServiceRequestBase, summaryPropertiesOnly: boolean): void;
    WriteAdditionalPropertiesToXml(writer: EwsServiceXmlWriter, propertyDefinitions: PropertyDefinitionBase[]): void;
    WriteToXml(writer: EwsServiceXmlWriter, serviceObjectType: ServiceObjectType): void;
}
export interface ComplexPropertyChangedDelegate {
    (complexProperty: ComplexProperty): void;
}
export interface GetObjectInstanceDelegate<T> {
    (service: ExchangeService, xmlElementName: string): T;
}
export declare class ServiceObjectSchema {
    FirstClassProperties: PropertyDefinition[];
    FirstClassSummaryProperties: PropertyDefinition[];
    IndexedProperties: IndexedPropertyDefinition[];
    private properties;
    private visibleProperties;
    private firstClassProperties;
    private firstClassSummaryProperties;
    private indexedProperties;
    private static lockObject;
    private static allSchemaTypes;
    private static allSchemaProperties;
    static ExtendedProperties: PropertyDefinition;
    constructor();
    static AddSchemaPropertiesToDictionary(type: string, propDefDictionary: StringPropertyDefinitionBaseDictionary<string, PropertyDefinitionBase>): void;
    private static AddSchemaPropertyNamesToDictionary(type, propertyNameDictionary);
    static FindPropertyDefinition(uri: string): PropertyDefinitionBase;
    static ForeachPublicStaticPropertyFieldInType(type: string, propFieldDelegate: (propertyDefinition: PropertyDefinition, fieldInfo: any) => void): void;
    GetEnumerator(): PropertyDefinition[];
    static InitializeSchemaPropertyNames(): void;
    RegisterIndexedProperty(indexedProperty: IndexedPropertyDefinition): void;
    RegisterInternalProperty(property: PropertyDefinition): void;
    RegisterProperties(): void;
    RegisterProperty(property: PropertyDefinition, isInternal?: boolean): void;
    TryGetPropertyDefinition(xmlElementName: string, propertyDefinition: IOutParam<PropertyDefinition>): boolean;
}
export declare class ServiceRequestBase {
    private static XMLSchemaNamespace;
    private static XMLSchemaInstanceNamespace;
    private static ClientStatisticsRequestHeader;
    private static RequestIdResponseHeaders;
    private static clientStatisticsCache;
    Service: ExchangeService;
    private service;
    SoapFaultDetails: SoapFaultDetails;
    constructor(service: ExchangeService);
    EmitTimeZoneHeader: boolean;
    GetXmlElementName(): string;
    GetMinimumRequiredServerVersion(): ExchangeVersion;
    GetResponseXmlElementName(): string;
    ParseResponse(reader: EwsServiceXmlReader): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
    BuildXHR(): WinJS.IXHROptions;
    EmitRequest(request: WinJS.IXHROptions): void;
    GetEwsHttpWebResponse(request: WinJS.IXHROptions): WinJS.Promise<XMLHttpRequest>;
    GetRequestedServiceVersionString(): string;
    protected ProcessWebException(webException: XMLHttpRequest): void;
    ReadPreamble(ewsXmlReader: EwsServiceXmlReader): void;
    ReadResponse(ewsXmlReader: EwsServiceXmlReader): any;
    ReadSoapFault(reader: EwsServiceXmlReader): SoapFaultDetails;
    ReadSoapHeader(reader: EwsServiceXmlReader): void;
    private ReadXmlDeclaration(reader);
    ThrowIfNotSupportedByRequestedServerVersion(): void;
    Validate(): void;
    ValidateAndEmitRequest(request: WinJS.IXHROptions): WinJS.Promise<XMLHttpRequest>;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteBodyToXml(writer: EwsServiceXmlWriter): void;
    WriteToXml(writer: EwsServiceXmlWriter): void;
}
export declare class ExchangeServerInfo {
    MajorVersion: number;
    MinorVersion: number;
    MajorBuildNumber: number;
    MinorBuildNumber: number;
    VersionString: string;
    static Parse(reader: EwsServiceXmlReader): ExchangeServerInfo;
    ToString(): string;
}
export declare class SoapFaultDetails {
    FaultCode: string;
    FaultString: string;
    FaultActor: string;
    ResponseCode: ServiceError;
    Message: string;
    ErrorCode: ServiceError;
    ExceptionType: string;
    LineNumber: number;
    PositionWithinLine: number;
    ErrorDetails: {
        [index: string]: string;
    };
    static ParseObject(obj: any): SoapFaultDetails;
    static Parse(reader: EwsXmlReader, soapNamespace: XmlNamespace): SoapFaultDetails;
    ParseDetailNodeFromObject(obj: any): void;
    ParseDetailNode(reader: EwsXmlReader): any;
    ParseMessageXml(reader: EwsXmlReader): any;
}
export declare class PropertyDefinitionBase {
    Version: ExchangeVersion;
    Type: any;
    GetPrintableName(): string;
    GetXmlElementName(): string;
    ToString(): string;
    static TryLoadFromXml(reader: EwsServiceXmlReader, outP: IOutParam<PropertyDefinitionBase>): boolean;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteToXml(writer: EwsServiceXmlWriter): void;
}
export declare class ServiceObjectPropertyDefinition extends PropertyDefinitionBase {
    Version: ExchangeVersion;
    Uri: string;
    private uri;
    constructor(uri: string);
    GetXmlElementName(): string;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
}
export declare class IndexedPropertyDefinition extends ServiceObjectPropertyDefinition {
    Index: string;
    Type: string;
    private index;
    constructor(uri: string, index: string);
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetPrintableName(): string;
    GetXmlElementName(): string;
    static IsEqualTo(idxPropDef1: IndexedPropertyDefinition, idxPropDef2: IndexedPropertyDefinition): boolean;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
}
export declare class PropertyDefinition extends ServiceObjectPropertyDefinition {
    Version: ExchangeVersion;
    IsNullable: boolean;
    XmlElementName: string;
    Name: string;
    private xmlElementName;
    private flags;
    private name;
    private version;
    constructor(xmlElementName: string, version: ExchangeVersion, uri?: string, flags?: PropertyDefinitionFlags);
    GetAssociatedInternalProperties(): PropertyDefinition[];
    GetPrintableName(): string;
    HasFlag(flag: PropertyDefinitionFlags, version?: ExchangeVersion): boolean;
    LoadPropertyValueFromXml(reader: EwsServiceXmlReader, propertyBag: PropertyBag): void;
    RegisterAssociatedInternalProperties(properties: PropertyDefinition[]): any;
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void;
}
export declare class ExtendedPropertyDefinition extends PropertyDefinitionBase {
    private static FieldFormat;
    private static PropertySetFieldName;
    private static PropertySetIdFieldName;
    private static TagFieldName;
    private static NameFieldName;
    private static IdFieldName;
    private static MapiTypeFieldName;
    Id: number;
    MapiType: MapiPropertyType;
    Name: string;
    PropertySet: DefaultExtendedPropertySet;
    PropertySetId: any;
    Tag: number;
    Version: ExchangeVersion;
    Type: any;
    private propertySet;
    private propertySetId;
    private tag;
    private name;
    private id;
    private mapiType;
    constructor(tag?: number, name?: string, mapiType?: MapiPropertyType, propertySet?: DefaultExtendedPropertySet);
    Equals(obj: any): boolean;
    FormatField(name: string, fieldValue: string): string;
    GetHashCode(): number;
    GetPrintableName(): string;
    GetXmlElementName(): string;
    static IsEqualTo(extPropDef1: ExtendedPropertyDefinition, extPropDef2: ExtendedPropertyDefinition): boolean;
    LoadFromXml(reader: EwsServiceXmlReader): void;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
}
export declare class ComplexPropertyDefinitionBase extends PropertyDefinition {
    CreatePropertyInstance(owner: ServiceObject): ComplexProperty;
    GetPropertyInstance(propertyBag: PropertyBag, complexProperty: any): boolean;
    InternalLoadCollectionFromJson(jsonCollection: any, service: ExchangeService, propertyBag: PropertyBag): any;
    InternalLoadFromJson(jsonObject: any, service: ExchangeService, propertyBag: PropertyBag): any;
    InternalLoadFromXml(reader: EwsServiceXmlReader, propertyBag: PropertyBag): any;
    LoadPropertyValueFromJson(value: any, service: ExchangeService, propertyBag: PropertyBag): any;
    LoadPropertyValueFromXml(reader: EwsServiceXmlReader, propertyBag: PropertyBag): any;
    WriteJsonValue(jsonObject: any, propertyBag: PropertyBag, service: ExchangeService, isUpdateOperation: boolean): any;
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): any;
}
export declare class ComplexProperty {
    Namespace: XmlNamespace;
    OnChange: ComplexPropertyChangedDelegate[];
    constructor();
    Changed(): void;
    ClearChangeLog(): void;
    InternalLoadFromXml(reader: EwsServiceXmlReader, xmlNamespace: XmlNamespace, xmlElementName: string, readAction: (reader: EwsServiceXmlReader) => boolean): void;
    InternalValidate(): void;
    LoadFromXml(reader: EwsServiceXmlReader, xmlElementName: string, xmlNamespace?: XmlNamespace): void;
    ReadAttributesFromXml(reader: EwsServiceXmlReader): void;
    ReadTextValueFromXml(reader: EwsServiceXmlReader): void;
    SetFieldValue<T>(field: IRefParam<T>, value: T): void;
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean;
    TryReadElementFromXmlToPatch(reader: EwsServiceXmlReader): boolean;
    UpdateFromXml(reader: EwsServiceXmlReader, xmlElementName: string, xmlNamespace?: XmlNamespace): void;
    Validate(): void;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteElementsToXml(writer: EwsServiceXmlWriter): void;
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string, xmlNamespace?: XmlNamespace): void;
}
export declare class ServiceId extends ComplexProperty {
    IsValid: boolean;
    IsValidProxy(): boolean;
    UniqueId: string;
    ChangeKey: string;
    constructor(uniqueId?: string);
    Assign(source: ServiceId): void;
    Equals(obj: any): boolean;
    GetXmlElementName(): string;
    ReadAttributesFromXml(reader: EwsServiceXmlReader): void;
    SameIdAndChangeKey(other: ServiceId): boolean;
    ToString(): string;
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void;
    WriteToXml(writer: EwsServiceXmlWriter): void;
}
export declare class ComplexPropertyCollection<TComplexProperty> extends ComplexProperty {
    Items: TComplexProperty[];
    AddedItems: TComplexProperty[];
    ModifiedItems: TComplexProperty[];
    RemovedItems: TComplexProperty[];
    Count: number;
    Item: TComplexProperty;
    private items;
    private addedItems;
    private modifiedItems;
    private removedItems;
    ClearChangeLog(): any;
    Contains(complexProperty: TComplexProperty): boolean;
    CreateComplexProperty(xmlElementName: string): TComplexProperty;
    CreateDefaultComplexProperty(): TComplexProperty;
    GetCollectionItemXmlElementName(complexProperty: TComplexProperty): string;
    GetEnumerator(): any;
    IndexOf(complexProperty: TComplexProperty): number;
    InternalAdd(complexProperty: TComplexProperty, loading: boolean): any;
    InternalClear(): any;
    InternalRemove(complexProperty: TComplexProperty): boolean;
    InternalRemoveAt(index: number): any;
    InternalToJson(service: ExchangeService): any;
    ItemChanged(complexProperty: ComplexProperty): any;
    LoadFromXml(reader: EwsServiceXmlReader, localElementName: string, xmlNamespace?: XmlNamespace): any;
    RemoveFromChangeLog(complexProperty: TComplexProperty): any;
    ShouldWriteToRequest(): boolean;
    UpdateFromXml(reader: EwsServiceXmlReader, xmlElementName: string, xmlNamespace?: XmlNamespace): any;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string, xmlNamespace?: XmlNamespace): any;
}
export declare class ExtendedProperty extends ComplexProperty {
    PropertyDefinition: ExtendedPropertyDefinition;
    Value: any;
    private propertyDefinition;
    private value;
    constructor(propertyDefinition?: ExtendedPropertyDefinition);
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetStringValue(): string;
    LoadFromJson(jsonProperty: any, service: ExchangeService): any;
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean;
    WriteElementsToXml(writer: EwsServiceXmlWriter): any;
}
export declare class ExtendedPropertyCollection extends ComplexPropertyCollection<ExtendedProperty> {
    CreateComplexProperty(xmlElementName: string): ExtendedProperty;
    CreateDefaultComplexProperty(): ExtendedProperty;
    GetCollectionItemXmlElementName(complexProperty: ExtendedProperty): string;
    GetOrAddExtendedProperty(propertyDefinition: ExtendedPropertyDefinition): ExtendedProperty;
    InternalToJson(service: ExchangeService): any;
    LoadFromXml(reader: EwsServiceXmlReader, localElementName: string): any;
    RemoveExtendedProperty(propertyDefinition: ExtendedPropertyDefinition): boolean;
    SetExtendedProperty(propertyDefinition: ExtendedPropertyDefinition, value: any): any;
    TryGetProperty(propertyDefinition: ExtendedPropertyDefinition, extendedProperty: any): boolean;
    TryGetValue(propertyDefinition: ExtendedPropertyDefinition, propertyValue: any): boolean;
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any;
}
export interface KeyValuePair<TKey, TValue> {
    key: TKey;
    value: TValue;
}
export declare class StringPropertyDefinitionBaseDictionary<TKey extends string, TValue extends PropertyDefinitionBase> {
    private keys;
    private objects;
    Keys: TKey[];
    Items: KeyValuePair<TKey, TValue>[];
    Values: TValue[];
    length: number;
    constructor();
    add(key: TKey, value: TValue): void;
    set(key: TKey, value: TValue): void;
    get(key: TKey): TValue;
    tryGetValue(key: TKey, outValue: IOutParam<TValue>): boolean;
    remove(key: TKey): boolean;
    containsKey(key: TKey): boolean;
    clear(): void;
}
export declare class PropertyDefinitionDictionary extends StringPropertyDefinitionBaseDictionary<string, PropertyDefinitionBase> {
}
export interface IndexerWithEnumKey<TKey, TValue> {
    [index: number]: TValue;
}
export declare class PropDictionary<TKey extends {
    Name?: string;
}, TValue> {
    private keys;
    private objects;
    KeyNames: string[];
    Keys: TKey[];
    Items: KeyValuePair<TKey, TValue>[];
    Values: TValue[];
    length: number;
    constructor();
    add(key: TKey, value: TValue): void;
    set(key: TKey, value: TValue): void;
    setEntry(oldKeyString: string, oldKey: TKey, value?: TValue, isNull?: boolean): void;
    get(key: TKey): TValue;
    tryGet(key: TKey, outValue: IOutParam<TValue>): boolean;
    remove(key: TKey): boolean;
    containsKey(key: TKey): boolean;
    clear(): void;
}
export declare class LazyMember<T> {
    Member: T;
    private lazyMember;
    private initializationDelegate;
    private lockObject;
    private initialized;
    constructor(initializationDelegate: InitializeLazyMember<T>);
}
export interface InitializeLazyMember<T> {
    (): T;
}
