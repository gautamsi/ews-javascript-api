import ItemId = require("../ComplexProperties/ItemId");
import ExchangeVersion = require("../Enumerations/ExchangeVersion");
import UserConfigurationProperties = require("../Enumerations/UserConfigurationProperties");
import FolderId = require("../ComplexProperties/FolderId");
import UserConfigurationDictionary = require("../ComplexProperties/UserConfigurationDictionary");
import ExchangeService = require("../Core/ExchangeService");
import JsonObject = require("../Core/JsonObject");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import WellKnownFolderName = require("../Enumerations/WellKnownFolderName");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import XmlNamespace = require("../Enumerations/XmlNamespace");
class UserConfiguration {//IJsonSerializable
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
    Bind(service: ExchangeService, name: string, parentFolderId: FolderId, properties: UserConfigurationProperties): UserConfiguration { throw new Error("UserConfiguration.ts - Bind : Not implemented."); }
    //Bind(service: ExchangeService, name: string, parentFolderName: WellKnownFolderName, properties: UserConfigurationProperties): UserConfiguration{ throw new Error("UserConfiguration.ts - Bind : Not implemented.");}
    Delete(): any { throw new Error("UserConfiguration.ts - Delete : Not implemented."); }
    GetBase64PropertyValue(bytes: any[]/*System.Byte[]*/): string { throw new Error("UserConfiguration.ts - GetBase64PropertyValue : Not implemented."); }
    GetJsonUserConfigName(service: ExchangeService): JsonObject { throw new Error("UserConfiguration.ts - GetJsonUserConfigName : Not implemented."); }
    //GetJsonUserConfigName(service: ExchangeService, parentFolderId: FolderId, name: string): JsonObject{ throw new Error("UserConfiguration.ts - GetJsonUserConfigName : Not implemented.");}
    InitializeProperties(requestedProperties: UserConfigurationProperties): any { throw new Error("UserConfiguration.ts - InitializeProperties : Not implemented."); }
    IsPropertyUpdated(property: UserConfigurationProperties): boolean { throw new Error("UserConfiguration.ts - IsPropertyUpdated : Not implemented."); }
    Load(properties: UserConfigurationProperties): any { throw new Error("UserConfiguration.ts - Load : Not implemented."); }
    LoadFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("UserConfiguration.ts - LoadFromJson : Not implemented."); }
    LoadFromXml(reader: EwsServiceXmlReader): any { throw new Error("UserConfiguration.ts - LoadFromXml : Not implemented."); }
    MarkPropertyForUpdate(property: UserConfigurationProperties): any { throw new Error("UserConfiguration.ts - MarkPropertyForUpdate : Not implemented."); }
    ResetIsDirty(): any { throw new Error("UserConfiguration.ts - ResetIsDirty : Not implemented."); }
    Save(name: string, parentFolderName: WellKnownFolderName): any { throw new Error("UserConfiguration.ts - Save : Not implemented."); }
    //Save(name: string, parentFolderId: FolderId): any{ throw new Error("UserConfiguration.ts - Save : Not implemented.");}
    Update(): any { throw new Error("UserConfiguration.ts - Update : Not implemented."); }
    ValidatePropertyAccess(property: UserConfigurationProperties): any { throw new Error("UserConfiguration.ts - ValidatePropertyAccess : Not implemented."); }
    WriteBinaryDataToXml(writer: EwsServiceXmlWriter): any { throw new Error("UserConfiguration.ts - WriteBinaryDataToXml : Not implemented."); }
    WriteByteArrayToXml(writer: EwsServiceXmlWriter, byteArray: any[]/*System.Byte[]*/, xmlElementName: string): any { throw new Error("UserConfiguration.ts - WriteByteArrayToXml : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter, xmlNamespace: XmlNamespace, xmlElementName: string): any { throw new Error("UserConfiguration.ts - WriteToXml : Not implemented."); }
    WriteUserConfigurationNameToXml(writer: EwsServiceXmlWriter, xmlNamespace: XmlNamespace, name: string, parentFolderId: FolderId): any { throw new Error("UserConfiguration.ts - WriteUserConfigurationNameToXml : Not implemented."); }
    WriteXmlDataToXml(writer: EwsServiceXmlWriter): any { throw new Error("UserConfiguration.ts - WriteXmlDataToXml : Not implemented."); }
}
export = UserConfiguration;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
