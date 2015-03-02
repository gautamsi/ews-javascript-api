module Microsoft.Exchange.WebServices.Data {
    export class CreateUserConfigurationRequest extends MultiResponseServiceRequest<ServiceResponse> {
        UserConfiguration: UserConfiguration;
        userConfiguration: UserConfiguration;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class DeleteUserConfigurationRequest extends MultiResponseServiceRequest<ServiceResponse> {
        Name: string;
        ParentFolderId: FolderId;
        private name: string;
        private parentFolderId: FolderId;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class GetUserConfigurationRequest extends MultiResponseServiceRequest<GetUserConfigurationResponse> {
        private static EnumDelimiter: string = ",";

        Name: string;
        ParentFolderId: FolderId;
        UserConfiguration: UserConfiguration;
        Properties: UserConfigurationProperties;
        private name: string;
        private parentFolderId: FolderId;
        private properties: UserConfigurationProperties;
        private userConfiguration: UserConfiguration;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): GetUserConfigurationResponse { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class UpdateUserConfigurationRequest extends MultiResponseServiceRequest<ServiceResponse> {
        UserConfiguration: UserConfiguration;
        userConfiguration: UserConfiguration;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class GetUserConfigurationResponse extends ServiceResponse {
        UserConfiguration: UserConfiguration;
        private userConfiguration: UserConfiguration;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }

    export class UserConfiguration {
        private static ObjectVersion: ExchangeVersion = ExchangeVersion.Exchange2010;
        private static PropertiesAvailableForNewObject: UserConfigurationProperties = null;//UserConfigurationProperties.Dictionary, UserConfigurationProperties.XmlData, BinaryData;
        private static NoProperties: UserConfigurationProperties = 0;

        Name: string;
        ParentFolderId: FolderId;
        ItemId: ItemId;
        Dictionary: UserConfigurationDictionary;
        XmlData: any[];//System.Byte[];
        BinaryData: any[];//System.Byte[];
        IsDirty: boolean;
        private service: ExchangeService;
        private name: string;
        private parentFolderId: FolderId;
        private itemId: ItemId;
        private dictionary: UserConfigurationDictionary;
        private xmlData: any[];//System.Byte[];
        private binaryData: any[];//System.Byte[];
        private propertiesAvailableForAccess: UserConfigurationProperties;
        private updatedProperties: UserConfigurationProperties;
        private isNew: boolean;
        Bind(service: ExchangeService, name: string, parentFolderId: FolderId, properties: UserConfigurationProperties): UserConfiguration{ throw new Error("Not implemented.");}
        //Bind(service: ExchangeService, name: string, parentFolderName: WellKnownFolderName, properties: UserConfigurationProperties): UserConfiguration{ throw new Error("Not implemented.");}
        Delete(): any{ throw new Error("Not implemented.");}
        GetBase64PropertyValue(bytes: any[]/*System.Byte[]*/): string{ throw new Error("Not implemented.");}
        GetJsonUserConfigName(service: ExchangeService): JsonObject{ throw new Error("Not implemented.");}
        //GetJsonUserConfigName(service: ExchangeService, parentFolderId: FolderId, name: string): JsonObject{ throw new Error("Not implemented.");}
        InitializeProperties(requestedProperties: UserConfigurationProperties): any{ throw new Error("Not implemented.");}
        IsPropertyUpdated(property: UserConfigurationProperties): boolean{ throw new Error("Not implemented.");}
        Load(properties: UserConfigurationProperties): any{ throw new Error("Not implemented.");}
        LoadFromJson(responseObject: JsonObject, service: ExchangeService): any{ throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader): any{ throw new Error("Not implemented.");}
        MarkPropertyForUpdate(property: UserConfigurationProperties): any{ throw new Error("Not implemented.");}
        ResetIsDirty(): any{ throw new Error("Not implemented.");}
        Save(name: string, parentFolderName: WellKnownFolderName): any{ throw new Error("Not implemented.");}
        //Save(name: string, parentFolderId: FolderId): any{ throw new Error("Not implemented.");}
        Update(): any{ throw new Error("Not implemented.");}
        ValidatePropertyAccess(property: UserConfigurationProperties): any{ throw new Error("Not implemented.");}
        WriteBinaryDataToXml(writer: EwsServiceXmlWriter): any{ throw new Error("Not implemented.");}
        WriteByteArrayToXml(writer: EwsServiceXmlWriter, byteArray: any[]/*System.Byte[]*/, xmlElementName: string): any{ throw new Error("Not implemented.");}
        WriteToXml(writer: EwsServiceXmlWriter, xmlNamespace: XmlNamespace, xmlElementName: string): any{ throw new Error("Not implemented.");}
        WriteUserConfigurationNameToXml(writer: EwsServiceXmlWriter, xmlNamespace: XmlNamespace, name: string, parentFolderId: FolderId): any{ throw new Error("Not implemented.");}
        WriteXmlDataToXml(writer: EwsServiceXmlWriter): any{ throw new Error("Not implemented.");}
    }
    export class UserConfigurationDictionary extends ComplexProperty {
        Item: any;
        Count: number;
        IsDirty: boolean;
        private dictionary: any;// System.Collections.Generic.Dictionary<TKey, TValue>;
        private isDirty: boolean;
        Add(key: any, value: any): any { throw new Error("Not implemented."); }
        Changed(): any { throw new Error("Not implemented."); }
        Clear(): any { throw new Error("Not implemented."); }
        ConstructObject(type: UserConfigurationDictionaryObjectType, value: string[] /*System.Collections.Generic.List<string>*/, service: ExchangeService): any { throw new Error("Not implemented."); }
        ContainsKey(key: any): boolean { throw new Error("Not implemented."); }
        CreateFromJsonCollection(jsonCollection: any, service: ExchangeService): any { throw new Error("Not implemented."); }
        //GetDictionaryObject(jsonObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        GetDictionaryObject(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        GetEnumerator(): any { throw new Error("Not implemented."); }
        GetJsonObject(dictionaryObject: any, service: ExchangeService): JsonObject { throw new Error("Not implemented."); }
        GetObjectType(reader: EwsServiceXmlReader): UserConfigurationDictionaryObjectType { throw new Error("Not implemented."); }
        //GetObjectType(type: string): UserConfigurationDictionaryObjectType { throw new Error("Not implemented."); }
        GetObjectValue(valueArray: any): string[] /*System.Collections.Generic.List<string>*/ { throw new Error("Not implemented."); }
        //GetObjectValue(reader: EwsServiceXmlReader, type: UserConfigurationDictionaryObjectType): string[] /*System.Collections.Generic.List<string>*/ { throw new Error("Not implemented."); }
        GetTypeCode(service: ExchangeServiceBase, dictionaryObject: any, dictionaryObjectType: any, valueAsString: any): any { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadEntry(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        LoadFromXml(reader: EwsServiceXmlReader, xmlElementName: string, xmlNamespace: XmlNamespace): void { throw new Error("Not implemented."); }
        Remove(key: any): boolean { throw new Error("Not implemented."); }
        TryGetValue(key: any, value: any): boolean { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        UpdateFromJsonCollection(jsonCollection: any, service: ExchangeService): any { throw new Error("Not implemented."); }
        ValidateArrayObject(dictionaryObjectAsArray: Array<any> /*System.Array*/): any { throw new Error("Not implemented."); }
        ValidateEntry(key: any, value: any): any { throw new Error("Not implemented."); }
        ValidateObject(dictionaryObject: any): any { throw new Error("Not implemented."); }
        ValidateObjectType(type: any/*System.Type*/): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteEntryTypeToXml(writer: EwsServiceXmlWriter, dictionaryObjectType: UserConfigurationDictionaryObjectType): any { throw new Error("Not implemented."); }
        WriteEntryValueToXml(writer: EwsServiceXmlWriter, value: string): any { throw new Error("Not implemented."); }
        WriteObjectToXml(writer: EwsServiceXmlWriter, xmlElementName: string, dictionaryObject: any): any { throw new Error("Not implemented."); }
        WriteObjectValueToXml(writer: EwsServiceXmlWriter, dictionaryObject: any): any { throw new Error("Not implemented."); }
    }

}

//export module UserConfiguration {
//    export var /*private static*/ ObjectVersion: Microsoft.Exchange.WebServices.Data.ExchangeVersion = ExchangeVersion.Exchange2010;
//    export var /*private static*/ PropertiesAvailableForNewObject: Microsoft.Exchange.WebServices.Data.UserConfigurationProperties = UserConfigurationProperties.Dictionary, UserConfigurationProperties.XmlData, BinaryData;
//    export var /*private static*/ NoProperties: Microsoft.Exchange.WebServices.Data.UserConfigurationProperties = 0;
//}