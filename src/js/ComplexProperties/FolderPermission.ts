import UserId = require("./UserId");
import ComplexProperty = require("./ComplexProperty");
import PermissionScope = require("../Enumerations/PermissionScope");
import FolderPermissionReadAccess = require("../Enumerations/FolderPermissionReadAccess");
import FolderPermissionLevel = require("../Enumerations/FolderPermissionLevel");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import XmlNamespace = require("../Enumerations/XmlNamespace");

class FolderPermission extends ComplexProperty {
    UserId: UserId;
    CanCreateItems: boolean;
    CanCreateSubFolders: boolean;
    IsFolderOwner: boolean;
    IsFolderVisible: boolean;
    IsFolderContact: boolean;
    EditItems: PermissionScope;
    DeleteItems: PermissionScope;
    ReadItems: FolderPermissionReadAccess;
    PermissionLevel: FolderPermissionLevel;
    DisplayPermissionLevel: FolderPermissionLevel;
    private userId: UserId;
    private canCreateItems: boolean;
    private canCreateSubFolders: boolean;
    private isFolderOwner: boolean;
    private isFolderVisible: boolean;
    private isFolderContact: boolean;
    private editItems: PermissionScope;
    private deleteItems: PermissionScope;
    private readItems: FolderPermissionReadAccess;
    private permissionLevel: FolderPermissionLevel;
    //private static defaultPermissions: LazyMember<T>;
    //private static levelVariants: LazyMember<T>;
    AdjustPermissionLevel(): any { throw new Error("FolderPermission.ts - AdjustPermissionLevel : Not implemented."); }
    AssignIndividualPermissions(permission: FolderPermission): any { throw new Error("FolderPermission.ts - AssignIndividualPermissions : Not implemented."); }
    Clone(): FolderPermission { throw new Error("FolderPermission.ts - Clone : Not implemented."); }
    InternalToJson(service: ExchangeService, isCalendarFolder: boolean): any { throw new Error("FolderPermission.ts - InternalToJson : Not implemented."); }
    IsEqualTo(permission: FolderPermission): boolean { throw new Error("FolderPermission.ts - IsEqualTo : Not implemented."); }
    LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("FolderPermission.ts - LoadFromJson : Not implemented."); }
    LoadFromXmlJsObject(reader: EwsServiceXmlReader, xmlElementName: string, xmlNamespace: XmlNamespace): void { throw new Error("FolderPermission.ts - LoadFromXmlJsObject : Not implemented."); }
    PropertyChanged(complexProperty: ComplexProperty): any { throw new Error("FolderPermission.ts - PropertyChanged : Not implemented."); }
    TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("FolderPermission.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    //Validate(isCalendarFolder: boolean, permissionIndex: number): void { throw new Error("FolderPermission.ts - Validate : Not implemented."); }
    Validate(): void { throw new Error("FolderPermission.ts - Validate : Not implemented."); }
    //WriteElementsToXml(writer: EwsServiceXmlWriter, isCalendarFolder: boolean): any { throw new Error("FolderPermission.ts - WriteElementsToXml : Not implemented."); }
    //WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string, isCalendarFolder: boolean): any { throw new Error("FolderPermission.ts - WriteToXml : Not implemented."); }
}
export = FolderPermission;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
