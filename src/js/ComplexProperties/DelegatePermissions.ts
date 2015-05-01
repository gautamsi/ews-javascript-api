class DelegatePermissions extends ComplexProperty {
    CalendarFolderPermissionLevel: DelegateFolderPermissionLevel;
    TasksFolderPermissionLevel: DelegateFolderPermissionLevel;
    InboxFolderPermissionLevel: DelegateFolderPermissionLevel;
    ContactsFolderPermissionLevel: DelegateFolderPermissionLevel;
    NotesFolderPermissionLevel: DelegateFolderPermissionLevel;
    JournalFolderPermissionLevel: DelegateFolderPermissionLevel;
    private delegateFolderPermissions: any;// System.Collections.Generic.Dictionary<TKey, TValue>;
    InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    Reset(): any { throw new Error("Not implemented."); }
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    ValidateAddDelegate(): any { throw new Error("Not implemented."); }
    ValidateUpdateDelegate(): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    WritePermissionToJson(jsonProperty: JsonObject, elementName: string): any { throw new Error("Not implemented."); }
    WritePermissionToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any { throw new Error("Not implemented."); }
}
export = DelegatePermissions;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;

