import ExchangeVersion = require("../Enumerations/ExchangeVersion");
import AbstractFolderIdWrapper = require("./AbstractFolderIdWrapper");
import Folder = require("../Core/ServiceObjects/Folders/Folder");
import FolderId = require("../ComplexProperties/FolderId");
//import FolderWrapper = require("./FolderWrapper");

class FolderIdWrapperList { //IEnumerable<AbstractFolderIdWrapper>
    get Count(): number { return this.ids.length; }
    //Item: AbstractFolderIdWrapper;
    private ids: AbstractFolderIdWrapper[] = [];// System.Collections.Generic.List<AbstractFolderIdWrapper>;
    //Add(folder: Folder): void;// { this.ids.push(new FolderWrapper(folder)) }
    //Add(folderId: FolderId): void;// { throw new Error("Not implemented."); }
    Add(folderOrId: Folder | FolderId): void {

        if (folderOrId instanceof Folder || folderOrId instanceof FolderId)
            this.ids.push(new FolderWrapper(folderOrId))
        else if (folderOrId instanceof FolderId)
            this.ids.push(new FolderIdWrapper(folderOrId));
        else
            throw new Error("should not be seeing this. inside FolderIDWrapperList.Add, trying to overload methods.");
    }
    AddRange(folders: Folder[] /*System.Collections.Generic.IEnumerable<Folder>*/): void;// { throw new Error("Not implemented."); }
    AddRange(folderIds: FolderId[] /*System.Collections.Generic.IEnumerable<T>*/): void;// { throw new Error("Not implemented."); }
    AddRange(foldersOrIds: any[]): void {
        if (foldersOrIds != null) {
            for (var folderOrId in foldersOrIds) {
                /*FolderId folderId*/this.Add(folderOrId);
            }
        }
    }
    //GetEnumerator(): any { throw new Error("Not implemented."); }
    //InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    Validate(version: ExchangeVersion): void {
        for (var item in this.ids) {
            var folderIdWrapper: AbstractFolderIdWrapper = item;
            folderIdWrapper.Validate(version);
        }
    }
    WriteToXml(writer: EwsServiceXmlWriter, ewsNamesapce: XmlNamespace, xmlElementName: string): void {
        if (this.Count > 0) {
            writer.WriteStartElement(ewsNamesapce, xmlElementName);

            for (var item in this.ids) {
                var folderIdWrapper: AbstractFolderIdWrapper = item;
                folderIdWrapper.WriteToXml(writer);
            }

            writer.WriteEndElement();
        }
    }

    _propGet(index: number): AbstractFolderIdWrapper {
        return this.ids[index];
    }
}

export = FolderIdWrapperList;




//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;