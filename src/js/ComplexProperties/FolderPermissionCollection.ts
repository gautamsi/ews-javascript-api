import Folder = require("../Core/ServiceObjects/Folders/Folder");
import CalendarFolder = require("../Core/ServiceObjects/Folders/CalendarFolder");
import FolderPermission = require("./FolderPermission");
import ComplexPropertyCollection = require("./ComplexPropertyCollection");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");


class FolderPermissionCollection extends ComplexPropertyCollection<FolderPermission> {
    private InnerCollectionXmlElementName: string;
    private CollectionItemXmlElementName: string;
    private isCalendarFolder: boolean;
    private unknownEntries: string[];// System.Collections.ObjectModel.Collection<string>;
    UnknownEntries: string[];// System.Collections.ObjectModel.Collection<string>;
    constructor(owner:Folder){
        super();
        this.isCalendarFolder = owner instanceof CalendarFolder;
    }
    Add(permission: FolderPermission): any { throw new Error("FolderPermissionCollection.ts - Add : Not implemented."); }
    AddRange(permissions: FolderPermission[]/*System.Collections.Generic.IEnumerable<T>*/): any { throw new Error("FolderPermissionCollection.ts - AddRange : Not implemented."); }
    Clear(): any { throw new Error("FolderPermissionCollection.ts - Clear : Not implemented."); }
    CreateComplexProperty(xmlElementName: string): FolderPermission { throw new Error("FolderPermissionCollection.ts - CreateComplexProperty : Not implemented."); }
    CreateDefaultComplexProperty(): FolderPermission { throw new Error("FolderPermissionCollection.ts - CreateDefaultComplexProperty : Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: FolderPermission): string { throw new Error("FolderPermissionCollection.ts - GetCollectionItemXmlElementName : Not implemented."); }
    InternalToJson(service: ExchangeService): any { throw new Error("FolderPermissionCollection.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("FolderPermissionCollection.ts - LoadFromJson : Not implemented."); }
    LoadFromXmlJsObject(reader: EwsServiceXmlReader, localElementName: string): any { throw new Error("FolderPermissionCollection.ts - LoadFromXmlJsObject : Not implemented."); }
    Remove(permission: FolderPermission): boolean { throw new Error("FolderPermissionCollection.ts - Remove : Not implemented."); }
    RemoveAt(index: number): any { throw new Error("FolderPermissionCollection.ts - RemoveAt : Not implemented."); }
    Validate(): any { throw new Error("FolderPermissionCollection.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("FolderPermissionCollection.ts - WriteElementsToXml : Not implemented."); }
}
export = FolderPermissionCollection;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
