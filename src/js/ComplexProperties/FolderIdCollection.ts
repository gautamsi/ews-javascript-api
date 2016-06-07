import {ArgumentException, ArgumentOutOfRangeException} from '../Exceptions/ArgumentException';
import {ArrayHelper} from '../ExtensionMethods';
import {EwsUtilities} from "../Core/EwsUtilities";
import {Strings} from "../Strings";
import {WellKnownFolderName} from "../Enumerations/WellKnownFolderName";

import {FolderId} from "./FolderId";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
/**
 * Represents a collection of folder Ids.
 * 
 * @sealed
 */
export class FolderIdCollection extends ComplexPropertyCollection<FolderId> {

    /**
	 * @internal Initializes a new instance of the **FolderIdCollection** class.
	 */
    constructor();
    /**
     * @internal Initializes a new instance of the **FolderIdCollection** class.
     *
     * @param   {FolderId[]}   folderIds   The folder ids to include.
     */
    constructor(folderIds: FolderId[]);
    constructor(folderIds: FolderId[] = null) {
        super();
        if (folderIds != null) {
            folderIds.forEach((folderId) => this.InternalAdd(folderId));
        }
    }

    /**
     * Adds a folder Id to the collection.
     *
     * @param   {FolderId}   folderId   The folder Id to add.
     */
    Add(folderId: FolderId): void;
    /**
     * Adds a well-known folder to the collection.
     *
     * @param   {WellKnownFolderName}   folderName   The well known folder to add.
     * @return  {FolderId}      A FolderId encapsulating the specified Id.
     */
    Add(folderName: WellKnownFolderName): FolderId;
    Add(folderIdOrName: FolderId | WellKnownFolderName): void | FolderId {

        let folderId: FolderId = null;
        if (typeof folderIdOrName === 'number') {
            folderId = new FolderId(folderIdOrName);
            if (ArrayHelper.Find(this.Items, (item) => item.FolderName === folderIdOrName)) { //if (this.Contains(folderIdOrName)) { // can not use in JavaScript
                throw new ArgumentException(Strings.IdAlreadyInList, "folderName");
            }
        }
        else {

            EwsUtilities.ValidateParam(folderId, "folderId");
            folderId = folderIdOrName;
            if (this.Contains(folderId)) {
                throw new ArgumentException(Strings.IdAlreadyInList, "folderId");
            }
        }

        this.InternalAdd(folderId);

        return folderId;
    }

    /**
     * Clears the collection.
     */
    Clear(): void {
        this.InternalClear();
    }

    /**
     * @internal Instantiate the appropriate attachment type depending on the current XML element name.
     *
     * @param   {string}   xmlElementName   Name of the XML element.
     * @return  {FolderId}        FolderId.
     */
    CreateComplexProperty(xmlElementName: string): FolderId {
        return new FolderId();
    }

    /**
     * @internal Creates the default complex property.
     *
     * @return  {FolderId}      FolderId.
     */
    CreateDefaultComplexProperty(): FolderId {
        return new FolderId();
    }

    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {FolderId}  complexProperty   The complex property.
     * @return  {string}    XML element name.
     */
    GetCollectionItemXmlElementName(complexProperty: FolderId): string {
        return complexProperty.GetXmlElementName();
    }

    /**
     * Removes the specified folder Id from the collection.
     *
     * @param   {FolderId}   folderId   The folder Id to remove from the collection.
     * @return  {boolean}    True if the folder id was successfully removed from the collection, false otherwise.
     */
    Remove(folderId: FolderId): boolean;
    /**
     * Removes the specified well-known folder from the collection.
     *
     * @param   {WellKnownFolderName}   folderName   The well-knwon folder to remove from the collection.
     * @return  {boolean}               True if the well-known folder was successfully removed from the collection, false otherwise.
     */
    Remove(folderName: WellKnownFolderName): boolean;
    Remove(folderIdOrName: FolderId | WellKnownFolderName): boolean {
        if (typeof folderIdOrName === 'number') {
            // can not simply use InternalRemove as javascript does not have c# List functionality
            let index = ArrayHelper.IndexOf(this.Items, (item) => item.FolderName === folderIdOrName);
            if (index >= 0) {
                this.InternalRemoveAt(index);
                return true;
            }
        }
        else {
            EwsUtilities.ValidateParam(folderIdOrName, "folderId");

            return this.InternalRemove(folderIdOrName);
        }
        return false;
    }

    /**
     * Removes the folder Id at the specified index.
     *
     * @param   {number}   index   The zero-based index of the folder Id to remove.
     */
    RemoveAt(index: number): void {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentOutOfRangeException("index", Strings.IndexIsOutOfRange);
        }

        this.InternalRemoveAt(index);
    }
}