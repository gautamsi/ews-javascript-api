import { AbstractFolderIdWrapper } from "./AbstractFolderIdWrapper";
import { EwsServiceXmlWriter } from "../Core/EwsServiceXmlWriter";
import { ExchangeVersion } from "../Enumerations/ExchangeVersion";
import { Folder } from "../Core/ServiceObjects/Folders/Folder";
import { FolderId } from "../ComplexProperties/FolderId";
import { FolderIdWrapper } from "./FolderIdWrapper";
import { FolderWrapper } from "./FolderWrapper";
import { IEnumerable } from "../Interfaces/IEnumerable";
import { XmlNamespace } from "../Enumerations/XmlNamespace";

/**
 * @internal Represents a list a abstracted folder Ids.
 */
export class FolderIdWrapperList implements IEnumerable<AbstractFolderIdWrapper> {

    /**
     * List of AbstractFolderIdWrapper.
     */
    private ids: AbstractFolderIdWrapper[] = [];

    /**
     * Gets the id count.
     * 
     * @value   The count.
     */
    get Count(): number {
        return this.ids.length;
    }

    /**
     * @internal Gets the **AbstractFolderIdWrapper** at the specified index.
     *
     * @param   {}   index   the index
     */
    _getItem(index: number): AbstractFolderIdWrapper {
        return this.ids[index];
    }

    /**
     * @internal Adds the specified folder.
     *
     * @param   {Folder}   folder   The folder.
     */
    Add(folder: Folder): void;
    /**
     * @internal Adds the specified folder id.
     *
     * @param   {FolderId}   folderId   The folder id.
     */
    Add(folderId: FolderId): void;
    /** @internal this is to shim add method with easy use within file/module. */
    Add(folderOrId: Folder | FolderId): void;
    Add(folderOrId: Folder | FolderId): void {

        if (folderOrId instanceof Folder)
            this.ids.push(new FolderWrapper(folderOrId))
        else if (folderOrId instanceof FolderId)
            this.ids.push(new FolderIdWrapper(folderOrId));
        else
            throw new Error("FolderIdWrapperList.ts - Add - should not be seeing this.");
    }

    /**
     * Adds the range.
     *
     * @param   {Folder[]}   folders   The folders.
     */
    AddRange(folders: Folder[]): void;
    /**
     * Adds the range of folder ids.
     *
     * @param   {FolderId[]}   folderIds   The folder ids.
     */
    AddRange(folderIds: FolderId[]): void;
    AddRange(foldersOrIds: Folder[] | FolderId[]): void {
        if (foldersOrIds != null) {
            for (var folderOrId of foldersOrIds) {
                this.Add(folderOrId);
            }
        }
    }

    /**
     *  Returns an enumerator that iterates through the collection. this case this.ids
     */
    GetEnumerator(): AbstractFolderIdWrapper[] {
        return this.ids;
    }

    /**
     * @internal Validates list of folderIds against a specified request version.
     *
     * @param   {ExchangeVersion}   version   The version.
     */
    Validate(version: ExchangeVersion): void {
        for (var folderIdWrapper of this.ids) {
            //var folderIdWrapper: AbstractFolderIdWrapper = item;
            folderIdWrapper.Validate(version);
        }
    }

    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {XmlNamespace}          ewsNamesapce     The ews namesapce.
     * @param   {string}                xmlElementName   Name of the XML element.
     */
    WriteToXml(writer: EwsServiceXmlWriter, ewsNamesapce: XmlNamespace, xmlElementName: string): void {
        if (this.Count > 0) {
            writer.WriteStartElement(ewsNamesapce, xmlElementName);

            for (var folderIdWrapper of this.ids) {
                //var folderIdWrapper: AbstractFolderIdWrapper = item;
                folderIdWrapper.WriteToXml(writer);
            }

            writer.WriteEndElement();
        }
    }
}