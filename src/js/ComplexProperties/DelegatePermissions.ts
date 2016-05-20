import {DelegateFolderPermissionLevel} from "../Enumerations/DelegateFolderPermissionLevel";
import {Dictionary, DictionaryWithStringKey} from "../AltDictionary";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {ExchangeService} from "../Core/ExchangeService";
import {ServiceValidationException} from '../Exceptions/ServiceValidationException';
import {Strings} from "../Strings";
import {XmlElementNames} from "../Core/XmlElementNames";
import {XmlNamespace} from "../Enumerations/XmlNamespace";

import {ComplexProperty} from "./ComplexProperty";
/**
 * Represents the permissions of a delegate user.
 * 
 * @sealed
 */
export class DelegatePermissions extends ComplexProperty {

    private delegateFolderPermissions: Dictionary<string, DelegateFolderPermission> = null;

    /**
     * Gets or sets the delegate user's permission on the principal's calendar.
     */
    get CalendarFolderPermissionLevel(): DelegateFolderPermissionLevel {
        return this.delegateFolderPermissions.get(XmlElementNames.CalendarFolderPermissionLevel).PermissionLevel;
    }
    set CalendarFolderPermissionLevel(value: DelegateFolderPermissionLevel) {
        this.delegateFolderPermissions.get(XmlElementNames.CalendarFolderPermissionLevel).PermissionLevel = value;
    }

    /**
     * Gets or sets the delegate user's permission on the principal's tasks folder.
     */
    get TasksFolderPermissionLevel(): DelegateFolderPermissionLevel {
        return this.delegateFolderPermissions.get(XmlElementNames.TasksFolderPermissionLevel).PermissionLevel;
    }
    set TasksFolderPermissionLevel(value: DelegateFolderPermissionLevel) {
        this.delegateFolderPermissions.get(XmlElementNames.TasksFolderPermissionLevel).PermissionLevel = value;
    }

    /**
     * Gets or sets the delegate user's permission on the principal's inbox.
     */
    get InboxFolderPermissionLevel(): DelegateFolderPermissionLevel {
        return this.delegateFolderPermissions.get(XmlElementNames.InboxFolderPermissionLevel).PermissionLevel;
    }
    set InboxFolderPermissionLevel(value: DelegateFolderPermissionLevel) {
        this.delegateFolderPermissions.get(XmlElementNames.InboxFolderPermissionLevel).PermissionLevel = value;
    }

    /**
     * Gets or sets the delegate user's permission on the principal's contacts folder.
     */
    get ContactsFolderPermissionLevel(): DelegateFolderPermissionLevel {
        return this.delegateFolderPermissions.get(XmlElementNames.ContactsFolderPermissionLevel).PermissionLevel;
    }
    set ContactsFolderPermissionLevel(value: DelegateFolderPermissionLevel) {
        this.delegateFolderPermissions.get(XmlElementNames.ContactsFolderPermissionLevel).PermissionLevel = value;
    }

    /**
     * Gets or sets the delegate user's permission on the principal's notes folder.
     */
    get NotesFolderPermissionLevel(): DelegateFolderPermissionLevel {
        return this.delegateFolderPermissions.get(XmlElementNames.NotesFolderPermissionLevel).PermissionLevel;
    }
    set NotesFolderPermissionLevel(value: DelegateFolderPermissionLevel) {
        this.delegateFolderPermissions.get(XmlElementNames.NotesFolderPermissionLevel).PermissionLevel = value;
    }

    /**
     * Gets or sets the delegate user's permission on the principal's journal folder.
     */
    get JournalFolderPermissionLevel(): DelegateFolderPermissionLevel {
        return this.delegateFolderPermissions.get(XmlElementNames.JournalFolderPermissionLevel).PermissionLevel;
    }
    set JournalFolderPermissionLevel(value: DelegateFolderPermissionLevel) {
        this.delegateFolderPermissions.get(XmlElementNames.JournalFolderPermissionLevel).PermissionLevel = value;
    }

    /**
     * @internal Initializes a new instance of the **DelegatePermissions** class.
     */
    constructor() {
        super();
        var dictionary: Dictionary<string, DelegateFolderPermission> = new DictionaryWithStringKey<DelegateFolderPermission>();
        dictionary.Add(XmlElementNames.CalendarFolderPermissionLevel, new DelegateFolderPermission());
        dictionary.Add(XmlElementNames.TasksFolderPermissionLevel, new DelegateFolderPermission());
        dictionary.Add(XmlElementNames.InboxFolderPermissionLevel, new DelegateFolderPermission());
        dictionary.Add(XmlElementNames.ContactsFolderPermissionLevel, new DelegateFolderPermission());
        dictionary.Add(XmlElementNames.NotesFolderPermissionLevel, new DelegateFolderPermission());
        dictionary.Add(XmlElementNames.JournalFolderPermissionLevel, new DelegateFolderPermission());
        this.delegateFolderPermissions = dictionary;
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        for (let key in jsObject) {
            let delegateFolderPermission: DelegateFolderPermission = null;

            if (this.delegateFolderPermissions.containsKey(key)) {
                delegateFolderPermission = this.delegateFolderPermissions.get(key);
                delegateFolderPermission.Initialize(DelegateFolderPermissionLevel[<string>jsObject[key]]);
            }
        }
    }

    /**
     * @internal Resets this instance.
     */
    Reset(): void {
        for (let delegateFolderPermission of this.delegateFolderPermissions.Values) {
            delegateFolderPermission.Reset();
        }
    }

    /**
     * @internal Validates this instance for AddDelegate.
     */
    ValidateAddDelegate(): void {
        // If any folder permission is Custom, throw
        //
        this.delegateFolderPermissions.Values.forEach(permission => {
            if (permission.PermissionLevel == DelegateFolderPermissionLevel.Custom) {
                throw new ServiceValidationException(Strings.CannotSetDelegateFolderPermissionLevelToCustom);
            }
        });
    }

    /**
     * @internal Validates this instance for UpdateDelegate.
     */
    ValidateUpdateDelegate(): void {
        // If any folder permission was changed to custom, throw
        //
        this.delegateFolderPermissions.Values.forEach(permission => {
            if (permission.PermissionLevel == DelegateFolderPermissionLevel.Custom && !permission.IsExistingPermissionLevelCustom) {
                throw new ServiceValidationException(Strings.CannotSetDelegateFolderPermissionLevelToCustom);
            }
        });
    }

    /**
     * @internal Writes the elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        this.WritePermissionToXml(
            writer,
            XmlElementNames.CalendarFolderPermissionLevel);

        this.WritePermissionToXml(
            writer,
            XmlElementNames.TasksFolderPermissionLevel);

        this.WritePermissionToXml(
            writer,
            XmlElementNames.InboxFolderPermissionLevel);

        this.WritePermissionToXml(
            writer,
            XmlElementNames.ContactsFolderPermissionLevel);

        this.WritePermissionToXml(
            writer,
            XmlElementNames.NotesFolderPermissionLevel);

        this.WritePermissionToXml(
            writer,
            XmlElementNames.JournalFolderPermissionLevel);
    }

    /**
     * Write permission to Xml.
     *
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {string}                xmlElementName   The element name.
     */
    private WritePermissionToXml(writer: EwsServiceXmlWriter, xmlElementName: string): void {
        let delegateFolderPermissionLevel: DelegateFolderPermissionLevel = this.delegateFolderPermissions.get(xmlElementName).PermissionLevel;

        // UpdateDelegate fails if Custom permission level is round tripped
        //
        if (delegateFolderPermissionLevel != DelegateFolderPermissionLevel.Custom) {
            writer.WriteElementValue(
                XmlNamespace.Types,
                xmlElementName,
                DelegateFolderPermissionLevel[delegateFolderPermissionLevel]);
        }
    }
}

/**
 * @internal Represents a folder's DelegateFolderPermissionLevel
 */
class DelegateFolderPermission {

    /**
     * @internal Gets or sets the delegate user's permission on a principal's folder.
     */
    PermissionLevel: DelegateFolderPermissionLevel = DelegateFolderPermissionLevel.None;

    /**
     * @internal Gets IsExistingPermissionLevelCustom.
     */
    IsExistingPermissionLevelCustom: boolean = false;

    /**
     * Intializes this DelegateFolderPermission.
     *
     * @param   {DelegateFolderPermissionLevel}   permissionLevel   The DelegateFolderPermissionLevel
     */
    Initialize(permissionLevel: DelegateFolderPermissionLevel): void {
        this.PermissionLevel = permissionLevel;
        this.IsExistingPermissionLevelCustom = (permissionLevel === DelegateFolderPermissionLevel.Custom);
    }

    /**
     * @internal Resets this DelegateFolderPermission.
     */
    Reset(): void {
        this.Initialize(DelegateFolderPermissionLevel.None);
    }
}