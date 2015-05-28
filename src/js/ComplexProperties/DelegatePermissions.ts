import ComplexProperty = require("./ComplexProperty");
import DelegateFolderPermissionLevel = require("../Enumerations/DelegateFolderPermissionLevel");
import ExchangeService = require("../Core/ExchangeService");
import JsonObject = require("../Core/JsonObject");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
class DelegatePermissions extends ComplexProperty {
    CalendarFolderPermissionLevel: DelegateFolderPermissionLevel;
    TasksFolderPermissionLevel: DelegateFolderPermissionLevel;
    InboxFolderPermissionLevel: DelegateFolderPermissionLevel;
    ContactsFolderPermissionLevel: DelegateFolderPermissionLevel;
    NotesFolderPermissionLevel: DelegateFolderPermissionLevel;
    JournalFolderPermissionLevel: DelegateFolderPermissionLevel;
    private delegateFolderPermissions: any;// System.Collections.Generic.Dictionary<TKey, TValue>;
    InternalToJson(service: ExchangeService): any { throw new Error("DelegatePermissions.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("DelegatePermissions.ts - LoadFromJson : Not implemented."); }
    Reset(): any { throw new Error("DelegatePermissions.ts - Reset : Not implemented."); }
    TryReadElementFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("DelegatePermissions.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    ValidateAddDelegate(): any { throw new Error("DelegatePermissions.ts - ValidateAddDelegate : Not implemented."); }
    ValidateUpdateDelegate(): any { throw new Error("DelegatePermissions.ts - ValidateUpdateDelegate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("DelegatePermissions.ts - WriteElementsToXml : Not implemented."); }
    WritePermissionToJson(jsonProperty: JsonObject, elementName: string): any { throw new Error("DelegatePermissions.ts - WritePermissionToJson : Not implemented."); }
    WritePermissionToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any { throw new Error("DelegatePermissions.ts - WritePermissionToXml : Not implemented."); }
}
export = DelegatePermissions;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

