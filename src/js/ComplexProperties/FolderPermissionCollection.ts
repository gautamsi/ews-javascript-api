import XmlNamespace = require("../Enumerations/XmlNamespace");
import Folder = require("../Core/ServiceObjects/Folders/Folder");
//import CalendarFolder = require("../Core/ServiceObjects/Folders/Calendar____Folder");
import FolderPermission = require("./FolderPermission");
import ComplexPropertyCollection = require("./ComplexPropertyCollection");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import XmlElementNames = require("../Core/XmlElementNames");


class FolderPermissionCollection extends ComplexPropertyCollection<FolderPermission> {
    private get InnerCollectionXmlElementName(): string{return this.isCalendarFolder ? XmlElementNames.CalendarPermissions : XmlElementNames.Permissions;}
    private get CollectionItemXmlElementName(): string{return this.isCalendarFolder ? XmlElementNames.CalendarPermission : XmlElementNames.Permission;}
    private isCalendarFolder: boolean;
    private unknownEntries: string[] = [];// System.Collections.ObjectModel.Collection<string>;
    get UnknownEntries(): string[]{return this.unknownEntries;}// System.Collections.ObjectModel.Collection<string>;
    constructor(owner: Folder) {
        super();
        this.isCalendarFolder = owner._FolderType === XmlElementNames.CalendarFolder; //owner instanceof CalendarFolder;
        
    }
    Add(permission: FolderPermission): void { this.InternalAdd(permission); }
    AddRange(permissions: FolderPermission[]/*System.Collections.Generic.IEnumerable<T>*/): void {
        //EwsUtilities.ValidateParam(permissions, "permissions");
            for (var permission of permissions)
            {
                this.Add(permission);
            }
    }
    Clear(): void { this.InternalClear(); }
    CreateComplexProperty(xmlElementName: string): FolderPermission { throw new Error("FolderPermissionCollection.ts - CreateComplexProperty : Not implemented."); }
    CreateDefaultComplexProperty(): FolderPermission { throw new Error("FolderPermissionCollection.ts - CreateDefaultComplexProperty : Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: FolderPermission): string { return this.CollectionItemXmlElementName; }
    InternalToJson(service: ExchangeService): any { throw new Error("FolderPermissionCollection.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("FolderPermissionCollection.ts - LoadFromJson : Not implemented."); }
    LoadFromXmlJsObject(reader: EwsServiceXmlReader, localElementName: string): any { throw new Error("FolderPermissionCollection.ts - LoadFromXmlJsObject : Not implemented."); }
    Remove(permission: FolderPermission): boolean { return this.InternalRemove(permission); }
    RemoveAt(index: number): void { this.InternalRemoveAt(index); }
    Validate(): void {
        for (var permissionIndex = 0; permissionIndex < this.Items.length; permissionIndex++)
            {
                var permission :FolderPermission = this.Items[permissionIndex];
                permission.Validate(this.isCalendarFolder, permissionIndex);
            }
    }
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteStartElement(XmlNamespace.Types, this.InnerCollectionXmlElementName);
            for (var folderPermission of this.Items)
            {
                folderPermission.WriteToXml(
                            writer,
                            this.GetCollectionItemXmlElementName(folderPermission),
                            this.isCalendarFolder);
            }
            writer.WriteEndElement(); // this.InnerCollectionXmlElementName
    }
}
export = FolderPermissionCollection;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
