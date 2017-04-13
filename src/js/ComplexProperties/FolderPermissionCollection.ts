import { EwsServiceXmlReader } from "../Core/EwsServiceXmlReader";
import { EwsServiceXmlWriter } from "../Core/EwsServiceXmlWriter";
import { EwsUtilities } from "../ExchangeWebService";
import { ExchangeService } from "../Core/ExchangeService";
import { Folder } from "../Core/ServiceObjects/Folders/Folder";
import { FolderPermission } from "./FolderPermission";
import { TypeContainer } from "../TypeContainer";
import { XmlElementNames } from "../Core/XmlElementNames";
import { XmlNamespace } from "../Enumerations/XmlNamespace";

import { ComplexPropertyCollection } from "./ComplexPropertyCollection";
/**
 * Represents a collection of folder permissions.
 * 
 * @sealed
 */
export class FolderPermissionCollection extends ComplexPropertyCollection<FolderPermission> {

    private isCalendarFolder: boolean;
    private unknownEntries: string[] = [];

    /**
     * Gets the name of the inner collection XML element.
     *
     * @value   XML element name.
     */
    private get InnerCollectionXmlElementName(): string {
        return this.isCalendarFolder ? XmlElementNames.CalendarPermissions : XmlElementNames.Permissions;
    }

    /**
     * Gets the name of the collection item XML element.
     *
     * @value   XML element name.
     */
    private get CollectionItemXmlElementName(): string {
        return this.isCalendarFolder ? XmlElementNames.CalendarPermission : XmlElementNames.Permission;
    }

    /**
     * Gets a list of unknown user Ids in the collection.
     */
    get UnknownEntries(): string[] {
        return this.unknownEntries;
    }

    /**
     * Initializes a new instance of the **FolderPermissionCollection** class.
     *
     * @param   {Folder}   owner   The folder owner.
     */
    constructor(owner: Folder) {
        super();
        this.isCalendarFolder = owner instanceof TypeContainer.CalendarFolder;// owner instanceof CalendarFolder;

    }

    /**
     * Adds a permission to the collection.
     *
     * @param   {FolderPermission}   permission   The permission to add.
     */
    Add(permission: FolderPermission): void {
        this.InternalAdd(permission);
    }

    /**
     * Adds the specified permissions to the collection.
     *
     * @param   {FolderPermission[]}   permissions   The permissions to add.
     */
    AddRange(permissions: FolderPermission[]): void {
        EwsUtilities.ValidateParam(permissions, "permissions");
        for (let permission of permissions) {
            this.Add(permission);
        }
    }

    /**
     * Clears this collection.
     */
    Clear(): void {
        this.InternalClear();
    }

    /**
     * @internal Creates the complex property.
     *
     * @param   {string}   xmlElementName   Name of the XML element.
     * @return  {FolderPermission}          FolderPermission instance.
     */
    CreateComplexProperty(xmlElementName: string): FolderPermission {
        return new FolderPermission();
    }

    /**
     * @internal Creates the default complex property.
     *
     * @return  {FolderPermission}  FolderPermission instance.
     */
    CreateDefaultComplexProperty(): FolderPermission {
        return new FolderPermission();
    }

    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {FolderPermission}      complexProperty   The complex property.
     * @return  {string}                XML element name.
     */
    GetCollectionItemXmlElementName(complexProperty: FolderPermission): string {
        return this.CollectionItemXmlElementName;
    }

    /**
     * @internal Loads from XMLJsObject collection to create a new collection item.
     *
     * @interface   IJsonCollectionDeserializer
     * 
     * @param   {any}               jsObjectCollection   The json collection.
     * @param   {ExchangeService}   service          The service.
     */
    CreateFromXmlJsObjectCollection(jsObjectCollection: any, service: ExchangeService): void {
        let jsonFolderPermissions: any[] = jsObjectCollection[this.InnerCollectionXmlElementName];
        if (jsonFolderPermissions && jsonFolderPermissions[this.CollectionItemXmlElementName])
            jsonFolderPermissions = jsonFolderPermissions[this.CollectionItemXmlElementName];
        if (!Array.isArray(jsonFolderPermissions)) {
            debugger;
            throw new Error("FolderPermissionCollection.ts - LoadFromXmlJsObject - Invalid xml parsing, jsonproperty must contain collectionxmlelementname and collectionitemelementname underneeth");
        }
        for (let jsonFolderPermission of jsonFolderPermissions) {
            let permission: FolderPermission = new FolderPermission();
            permission.LoadFromXmlJsObject(jsonFolderPermission, service);
            this.InternalAdd(permission);
        }
        if (jsObjectCollection[XmlElementNames.UnknownEntries]) {
            let jsonUnknownEntries: any[] = jsObjectCollection[XmlElementNames.UnknownEntries];
            if (typeof jsonUnknownEntries !== 'object' && !Array.isArray(jsonFolderPermissions)) {
                debugger;
                throw new Error("FolderPermissionCollection.ts - LoadFromXmlJsObject - Invalid xml returned - check for consistency, UnknownEntries must be array type");
            }

            for (let jsonUnknownEntry of jsonUnknownEntries) {
                this.unknownEntries.push(jsonUnknownEntry);
            }
        }
    }

    /**
     * Removes a permission from the collection.
     *
     * @param   {FolderPermission}  permission   The permission to remove.
     * @return  {boolean}           True if the folder permission was successfully removed from the collection, false otherwise.
     */
    Remove(permission: FolderPermission): boolean {
        return this.InternalRemove(permission);
    }

    /**
     * Removes a permission from the collection.
     *
     * @param   {number}   index   The zero-based index of the permission to remove.
     */
    RemoveAt(index: number): void {
        this.InternalRemoveAt(index);
    }

    /**
     * @internal Validates this instance.
     */
    Validate(): void {
        for (let permissionIndex = 0; permissionIndex < this.Items.length; permissionIndex++) {
            let permission: FolderPermission = this.Items[permissionIndex];
            permission.Validate(this.isCalendarFolder, permissionIndex);
        }
    }

    /**
     * @internal Writes the elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteStartElement(XmlNamespace.Types, this.InnerCollectionXmlElementName);
        for (let folderPermission of this.Items) {
            folderPermission.WriteToXml(
                writer,
                this.GetCollectionItemXmlElementName(folderPermission),
                undefined,//XmlNamespace - incorrect inheritance error with typesctipt in folderpermission class if removed xmlnamespace parameter
                this.isCalendarFolder);
        }
        writer.WriteEndElement(); // this.InnerCollectionXmlElementName
    }
}


