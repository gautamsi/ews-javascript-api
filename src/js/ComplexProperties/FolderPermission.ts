import { ArrayHelper, Convert, StringHelper } from "../ExtensionMethods";
import { EwsServiceXmlWriter } from "../Core/EwsServiceXmlWriter";
import { ExchangeService } from "../Core/ExchangeService";
import { FolderPermissionLevel } from "../Enumerations/FolderPermissionLevel";
import { FolderPermissionReadAccess } from "../Enumerations/FolderPermissionReadAccess";
import { IRefParam } from "../Interfaces/IRefParam";
import { IndexerWithEnumKey } from "../AltDictionary";
import { LazyMember } from "../Core/LazyMember";
import { PermissionScope } from "../Enumerations/PermissionScope";
import { ServiceLocalException } from "../Exceptions/ServiceLocalException";
import { ServiceValidationException } from "../Exceptions/ServiceValidationException";
import { StandardUser } from "../Enumerations/StandardUser";
import { Strings } from "../Strings";
import { UserId } from "./UserId";
import { XmlElementNames } from "../Core/XmlElementNames";
import { XmlNamespace } from "../Enumerations/XmlNamespace";

import { ComplexProperty } from "./ComplexProperty";
/**
 * Represents a permission on a folder.
 * 
 * @sealed
 */
export class FolderPermission extends ComplexProperty {

    private static defaultPermissions: LazyMember<IndexerWithEnumKey<FolderPermissionLevel, FolderPermission>> = new LazyMember<IndexerWithEnumKey<FolderPermissionLevel, FolderPermission>>(
        () => {
            var result: IndexerWithEnumKey<FolderPermissionLevel, FolderPermission> = {};// new Dictionary<FolderPermissionLevel, FolderPermission>();

            var permission: FolderPermission = new FolderPermission();
            permission.canCreateItems = false;
            permission.canCreateSubFolders = false;
            permission.deleteItems = PermissionScope.None;
            permission.editItems = PermissionScope.None;
            permission.isFolderContact = false;
            permission.isFolderOwner = false;
            permission.isFolderVisible = false;
            permission.readItems = FolderPermissionReadAccess.None;

            result[FolderPermissionLevel.None] = permission;

            permission = new FolderPermission();
            permission.canCreateItems = true;
            permission.canCreateSubFolders = false;
            permission.deleteItems = PermissionScope.None;
            permission.editItems = PermissionScope.None;
            permission.isFolderContact = false;
            permission.isFolderOwner = false;
            permission.isFolderVisible = true;
            permission.readItems = FolderPermissionReadAccess.None;

            result[FolderPermissionLevel.Contributor] = permission;

            permission = new FolderPermission();
            permission.canCreateItems = false;
            permission.canCreateSubFolders = false;
            permission.deleteItems = PermissionScope.None;
            permission.editItems = PermissionScope.None;
            permission.isFolderContact = false;
            permission.isFolderOwner = false;
            permission.isFolderVisible = true;
            permission.readItems = FolderPermissionReadAccess.FullDetails;

            result[FolderPermissionLevel.Reviewer] = permission;

            permission = new FolderPermission();
            permission.canCreateItems = true;
            permission.canCreateSubFolders = false;
            permission.deleteItems = PermissionScope.Owned;
            permission.editItems = PermissionScope.None;
            permission.isFolderContact = false;
            permission.isFolderOwner = false;
            permission.isFolderVisible = true;
            permission.readItems = FolderPermissionReadAccess.FullDetails;

            result[FolderPermissionLevel.NoneditingAuthor] = permission;

            permission = new FolderPermission();
            permission.canCreateItems = true;
            permission.canCreateSubFolders = false;
            permission.deleteItems = PermissionScope.Owned;
            permission.editItems = PermissionScope.Owned;
            permission.isFolderContact = false;
            permission.isFolderOwner = false;
            permission.isFolderVisible = true;
            permission.readItems = FolderPermissionReadAccess.FullDetails;

            result[FolderPermissionLevel.Author] = permission;

            permission = new FolderPermission();
            permission.canCreateItems = true;
            permission.canCreateSubFolders = true;
            permission.deleteItems = PermissionScope.Owned;
            permission.editItems = PermissionScope.Owned;
            permission.isFolderContact = false;
            permission.isFolderOwner = false;
            permission.isFolderVisible = true;
            permission.readItems = FolderPermissionReadAccess.FullDetails;

            result[FolderPermissionLevel.PublishingAuthor] = permission;

            permission = new FolderPermission();
            permission.canCreateItems = true;
            permission.canCreateSubFolders = false;
            permission.deleteItems = PermissionScope.All;
            permission.editItems = PermissionScope.All;
            permission.isFolderContact = false;
            permission.isFolderOwner = false;
            permission.isFolderVisible = true;
            permission.readItems = FolderPermissionReadAccess.FullDetails;

            result[FolderPermissionLevel.Editor] = permission;

            permission = new FolderPermission();
            permission.canCreateItems = true;
            permission.canCreateSubFolders = true;
            permission.deleteItems = PermissionScope.All;
            permission.editItems = PermissionScope.All;
            permission.isFolderContact = false;
            permission.isFolderOwner = false;
            permission.isFolderVisible = true;
            permission.readItems = FolderPermissionReadAccess.FullDetails;

            result[FolderPermissionLevel.PublishingEditor] = permission;

            permission = new FolderPermission();
            permission.canCreateItems = true;
            permission.canCreateSubFolders = true;
            permission.deleteItems = PermissionScope.All;
            permission.editItems = PermissionScope.All;
            permission.isFolderContact = true;
            permission.isFolderOwner = true;
            permission.isFolderVisible = true;
            permission.readItems = FolderPermissionReadAccess.FullDetails;

            result[FolderPermissionLevel.Owner] = permission;

            permission = new FolderPermission();
            permission.canCreateItems = false;
            permission.canCreateSubFolders = false;
            permission.deleteItems = PermissionScope.None;
            permission.editItems = PermissionScope.None;
            permission.isFolderContact = false;
            permission.isFolderOwner = false;
            permission.isFolderVisible = false;
            permission.readItems = FolderPermissionReadAccess.TimeOnly;

            result[FolderPermissionLevel.FreeBusyTimeOnly] = permission;

            permission = new FolderPermission();
            permission.canCreateItems = false;
            permission.canCreateSubFolders = false;
            permission.deleteItems = PermissionScope.None;
            permission.editItems = PermissionScope.None;
            permission.isFolderContact = false;
            permission.isFolderOwner = false;
            permission.isFolderVisible = false;
            permission.readItems = FolderPermissionReadAccess.TimeAndSubjectAndLocation;

            result[FolderPermissionLevel.FreeBusyTimeAndSubjectAndLocation] = permission;

            return result;
        });

    /**
     * Variants of pre-defined permission levels that Outlook also displays with the same levels.
     */
    private static levelVariants: LazyMember<FolderPermission[]> = new LazyMember<FolderPermission[]>(
        () => {
            var results: FolderPermission[] = [];// new List<FolderPermission>();

            var permissionNone: FolderPermission = FolderPermission.defaultPermissions.Member[FolderPermissionLevel.None];
            var permissionOwner: FolderPermission = FolderPermission.defaultPermissions.Member[FolderPermissionLevel.Owner];

            // PermissionLevelNoneOption1
            var permission: FolderPermission = permissionNone.Clone();
            permission.isFolderVisible = true;
            results.push(permission);

            // PermissionLevelNoneOption2
            permission = permissionNone.Clone();
            permission.isFolderContact = true;
            results.push(permission);

            // PermissionLevelNoneOption3
            permission = permissionNone.Clone();
            permission.isFolderContact = true;
            permission.isFolderVisible = true;
            results.push(permission);

            // PermissionLevelOwnerOption1
            permission = permissionOwner.Clone();
            permission.isFolderContact = false;
            results.push(permission);

            return results;
        });

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


    /**
     * Gets the Id of the user the permission applies to.
     */
    get UserId(): UserId {
        return this.userId;
    }
    set UserId(value) {
        if (this.userId != null) {
            ArrayHelper.RemoveEntry(this.userId.OnChange, this.PropertyChanged);
        }
        this.SetFieldValue<UserId>({ getValue: () => this.userId, setValue: (id) => this.userId = id }, value);
        if (this.userId != null) {
            this.userId.OnChange.push(this.PropertyChanged.bind(this));
        }
    }

    /**
     * Gets or sets a value indicating whether the user can create new items.
     */
    get CanCreateItems(): boolean {
        return this.canCreateItems;
    }
    set CanCreateItems(value) {
        this.SetFieldValue<boolean>({ getValue: () => this.canCreateItems, setValue: (data) => this.canCreateItems = data }, value);
        this.AdjustPermissionLevel();
    }

    /**
     * Gets or sets a value indicating whether the user can create sub-folders.
     */
    get CanCreateSubFolders(): boolean {
        return this.canCreateSubFolders;
    }
    set CanCreateSubFolders(value) {
        this.SetFieldValue<boolean>({ getValue: () => this.canCreateSubFolders, setValue: (data) => this.canCreateSubFolders = data }, value);
        this.AdjustPermissionLevel();
    }

    /**
     * Gets or sets a value indicating whether the user owns the folder.
     */
    get IsFolderOwner(): boolean {
        return this.isFolderOwner;
    }
    set IsFolderOwner(value) {
        this.SetFieldValue<boolean>({ getValue: () => this.isFolderOwner, setValue: (data) => this.isFolderOwner = data }, value);
        this.AdjustPermissionLevel();
    }

    /**
     * Gets or sets a value indicating whether the folder is visible to the user.
     */
    get IsFolderVisible(): boolean {
        return this.isFolderVisible;
    }
    set IsFolderVisible(value) {
        this.SetFieldValue<boolean>({ getValue: () => this.isFolderVisible, setValue: (data) => this.isFolderVisible = data }, value);
        this.AdjustPermissionLevel();
    }

    /**
     * Gets or sets a value indicating whether the user is a contact for the folder.
     */
    get IsFolderContact(): boolean {
        return this.isFolderContact;
    }
    set IsFolderContact(value) {
        this.SetFieldValue<boolean>({ getValue: () => this.isFolderContact, setValue: (data) => this.isFolderContact = data }, value);
        this.AdjustPermissionLevel();
    }

    /**
     * Gets or sets a value indicating if/how the user can edit existing items.
     */
    get EditItems(): PermissionScope {
        return this.editItems;
    }
    set EditItems(value) {
        this.SetFieldValue<PermissionScope>({ getValue: () => this.editItems, setValue: (data) => this.editItems = data }, value);
        this.AdjustPermissionLevel();
    }

    /**
     * Gets or sets a value indicating if/how the user can delete existing items.
     */
    get DeleteItems(): PermissionScope {
        return this.deleteItems;
    }
    set DeleteItems(value) {
        this.SetFieldValue<PermissionScope>({ getValue: () => this.deleteItems, setValue: (data) => this.deleteItems = data }, value);
        this.AdjustPermissionLevel();
    }

    /**
     * Gets or sets the read items access permission.
     */
    get ReadItems(): FolderPermissionReadAccess {
        return this.readItems;
    }
    set ReadItems(value) {
        this.SetFieldValue<FolderPermissionReadAccess>({ getValue: () => this.readItems, setValue: (data) => this.readItems = data }, value);
        this.AdjustPermissionLevel();
    }

    /**
     * Gets or sets the permission level.
     */
    get PermissionLevel(): FolderPermissionLevel {
        return this.permissionLevel;
    }
    set PermissionLevel(value) {
        if (this.permissionLevel != value) {
            if (value == FolderPermissionLevel.Custom) {
                throw new ServiceLocalException(Strings.CannotSetPermissionLevelToCustom);
            }
            this.AssignIndividualPermissions(FolderPermission.defaultPermissions.Member[value]);
            this.SetFieldValue<FolderPermissionLevel>({ getValue: () => this.permissionLevel, setValue: (data) => this.permissionLevel = data }, value);
        }
    }

    /**
     * Gets the permission level that Outlook would display for this folder permission.
     */
    get DisplayPermissionLevel(): FolderPermissionLevel {
        // If permission level is set to Custom, see if there's a variant
        // that Outlook would map to the same permission level.
        if (this.permissionLevel == FolderPermissionLevel.Custom) {
            for (var variant of FolderPermission.levelVariants.Member) {
                if (this.IsEqualTo(variant)) {
                    return variant.PermissionLevel;
                }
            }
        }
        return this.permissionLevel;
    }

    /**
     * Initializes a new instance of the **FolderPermission** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **FolderPermission** class.
     *
     * @param   {UserId}                    userId            The Id of the user  the permission applies to.
     * @param   {FolderPermissionLevel}     permissionLevel   The level of the permission.
     */
    constructor(userId: UserId, permissionLevel: FolderPermissionLevel);
    /**
     * Initializes a new instance of the **FolderPermission** class.
     *
     * @param   {string}                    primarySmtpAddress  The primary SMTP address of the user the permission applies to.
     * @param   {FolderPermissionLevel}     permissionLevel     The level of the permission.
     */
    constructor(primarySmtpAddress: string, permissionLevel: FolderPermissionLevel);
    /**
     * Initializes a new instance of the **FolderPermission** class.
     *
     * @param   {StandardUser}              standardUser        The standard user the permission applies to.
     * @param   {FolderPermissionLevel}     permissionLevel     The level of the permission.
     */
    constructor(standardUser: StandardUser, permissionLevel: FolderPermissionLevel);
    constructor(userIdOrStandardUserOrSmtpAddress?: UserId | StandardUser | string, permissionLevel?: FolderPermissionLevel) {
        super();
        if (typeof userIdOrStandardUserOrSmtpAddress !== 'undefined' && typeof permissionLevel === 'undefined')
            throw new Error("FolderPermission - Constructor: permission level parameter cant be undefined or null when userid/smtpaddress/standarduser is provided in first place.");

        if (typeof userIdOrStandardUserOrSmtpAddress === 'undefined') {
            this.userId = new UserId();
        }
        else {
            this.permissionLevel = permissionLevel;
            if (typeof userIdOrStandardUserOrSmtpAddress === 'string' || typeof userIdOrStandardUserOrSmtpAddress === 'number') {
                this.userId = new UserId(userIdOrStandardUserOrSmtpAddress);
            }
            else {
                this.userId = userIdOrStandardUserOrSmtpAddress;
            }
        }
    }

    /**
     * Determines the permission level of this folder permission based on its individual settings, and sets the PermissionLevel property accordingly.
     */
    private AdjustPermissionLevel(): void {
        for (var key in FolderPermission.defaultPermissions.Member) {
            var value = FolderPermission.defaultPermissions.Member[key];
            if (this.IsEqualTo(value)) {
                this.permissionLevel = <FolderPermissionLevel><any>key;
                return;
            }
        }

        this.permissionLevel = FolderPermissionLevel.Custom;
    }

    /**
     * Copies the values of the individual permissions of the specified folder permission to this folder permissions.
     *
     * @param   {FolderPermission}   permission   The folder permission to copy the values from.
     */
    private AssignIndividualPermissions(permission: FolderPermission): void {
        this.canCreateItems = permission.CanCreateItems;
        this.canCreateSubFolders = permission.CanCreateSubFolders;
        this.isFolderContact = permission.IsFolderContact;
        this.isFolderOwner = permission.IsFolderOwner;
        this.isFolderVisible = permission.IsFolderVisible;
        this.editItems = permission.EditItems;
        this.deleteItems = permission.DeleteItems;
        this.readItems = permission.ReadItems;
    }

    /**
     * Create a copy of this FolderPermission instance.
     *
     * @return  {FolderPermission}      Clone of this instance.
     */
    private Clone(): FolderPermission {
        var res = new FolderPermission();
        res.canCreateItems = this.canCreateItems;
        res.canCreateSubFolders = this.canCreateSubFolders;
        res.deleteItems = this.deleteItems;
        res.editItems = this.editItems;
        res.isFolderContact = this.isFolderContact;
        res.isFolderOwner = this.isFolderOwner;
        res.isFolderVisible = this.isFolderVisible;
        res.permissionLevel = this.permissionLevel;
        res.readItems = this.readItems;
        res.userId = this.userId;
        return res;
    }

    /**
     * Determines whether the specified folder permission is the same as this one. The comparison does not take UserId and PermissionLevel into consideration.
     *
     * @param   {FolderPermission}  permission   The folder permission to compare with this folder permission.
     * @return  {boolean}           True is the specified folder permission is equal to this one, false otherwise.
     */
    private IsEqualTo(permission: FolderPermission): boolean {
        return this.CanCreateItems == permission.CanCreateItems &&
            this.CanCreateSubFolders == permission.CanCreateSubFolders &&
            this.IsFolderContact == permission.IsFolderContact &&
            this.IsFolderVisible == permission.IsFolderVisible &&
            this.IsFolderOwner == permission.IsFolderOwner &&
            this.EditItems == permission.EditItems &&
            this.DeleteItems == permission.DeleteItems &&
            this.ReadItems == permission.ReadItems;
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     */
    LoadFromXmlJsObject(jsObject: any/*JsonObject*/, service: ExchangeService): void {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames.UserId:
                    this.UserId = new UserId();
                    this.UserId.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames.CanCreateItems:
                    this.canCreateItems = Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames.CanCreateSubFolders:
                    this.canCreateSubFolders = Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames.IsFolderOwner:
                    this.isFolderOwner = Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames.IsFolderVisible:
                    this.isFolderVisible = Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames.IsFolderContact:
                    this.isFolderContact = Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames.EditItems:
                    //debugger;//check for assignable enumeration type
                    this.editItems = <PermissionScope><any>PermissionScope[jsObject[key]];
                    break;
                case XmlElementNames.DeleteItems:
                    //debugger;//check for assignable enumeration type
                    this.deleteItems = <PermissionScope><any>PermissionScope[jsObject[key]];
                    break;
                case XmlElementNames.ReadItems:
                    //debugger;//check for assignable enumeration type
                    this.readItems = <FolderPermissionReadAccess><any>FolderPermissionReadAccess[jsObject[key]]
                    break;
                case XmlElementNames.PermissionLevel:
                case XmlElementNames.CalendarPermissionLevel:
                    //debugger;//check for assignable enumeration type
                    this.permissionLevel = <FolderPermissionLevel><any>FolderPermissionLevel[jsObject[key]];
                    break;
                default:
                    break;
            }
        }

        this.AdjustPermissionLevel();
    }

    /**
     * Property was changed.
     *
     * @param   {ComplexProperty}   complexProperty   The complex property.
     */
    private PropertyChanged(complexProperty: ComplexProperty): void {
        this.Changed();
    }

    //Validate(isCalendarFolder: boolean, permissionIndex: number): void { throw new Error("FolderPermission.ts - Validate : Not implemented."); }

    /**
     * @internal Validates this instance.
     * ## parameters not optional: Typescript inheritance issue if not set as optional in code.
     *
     * @param   {boolean}   isCalendarFolder   if set to true calendar permissions are allowed.
     * @param   {number}    permissionIndex    Index of the permission.
     */
    Validate(isCalendarFolder?: boolean, permissionIndex?: number): void { //ref: inheritance issue if parameters are not optional

        if (typeof isCalendarFolder === 'undefined' || typeof permissionIndex === 'undefined')
            throw new Error("FolderPermission - Validate: incorrect call to validate, without the isCalendar or permissionIndex pearameter. this signature makes it optional to comply with typescript inheritance system and to avoid compiletime error.");
        // Check UserId
        if (!this.UserId.IsValid()) {
            throw new ServiceValidationException(
                StringHelper.Format(
                    Strings.FolderPermissionHasInvalidUserId,
                    permissionIndex));
        }

        // If this permission is to be used for a non-calendar folder make sure that read access and permission level aren't set to Calendar-only values
        if (!isCalendarFolder) {
            if ((this.readItems == FolderPermissionReadAccess.TimeAndSubjectAndLocation) ||
                (this.readItems == FolderPermissionReadAccess.TimeOnly)) {
                throw new ServiceLocalException(
                    StringHelper.Format(
                        Strings.ReadAccessInvalidForNonCalendarFolder,
                        this.readItems));
            }

            if ((this.permissionLevel == FolderPermissionLevel.FreeBusyTimeAndSubjectAndLocation) ||
                (this.permissionLevel == FolderPermissionLevel.FreeBusyTimeOnly)) {
                throw new ServiceLocalException(
                    StringHelper.Format(
                        Strings.PermissionLevelInvalidForNonCalendarFolder,
                        this.permissionLevel));
            }
        }
    }

    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer             The writer.
     * @param   {boolean}               isCalendarFolder   If true, this permission is for a calendar folder.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter, isCalendarFolder: boolean = false): void {
        if (this.UserId != null) {
            this.UserId.WriteToXml(writer, XmlElementNames.UserId);
        }

        if (this.PermissionLevel == FolderPermissionLevel.Custom) {
            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.CanCreateItems,
                this.CanCreateItems);

            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.CanCreateSubFolders,
                this.CanCreateSubFolders);

            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.IsFolderOwner,
                this.IsFolderOwner);

            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.IsFolderVisible,
                this.IsFolderVisible);

            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.IsFolderContact,
                this.IsFolderContact);

            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.EditItems,
                this.EditItems);

            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.DeleteItems,
                this.DeleteItems);

            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.ReadItems,
                this.ReadItems);
        }

        writer.WriteElementValue(
            XmlNamespace.Types,
            isCalendarFolder ? XmlElementNames.CalendarPermissionLevel : XmlElementNames.PermissionLevel,
            this.PermissionLevel);
    }

    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer             The writer.
     * @param   {string}                xmlElementName     Name of the XML element.
     * @param   {XmlNamespace}          xmlNamespace       
     * @param   {isCalendarFolder}      isCalendarFolder   If true, this permission is for a calendar folder.
     */
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string, xmlNamespace?: XmlNamespace, isCalendarFolder: boolean = false): void { //ref: XmlNamespace - incorrect inheritance error with typesctipt in folderpermission class if removed xmlnamespace parameter
        writer.WriteStartElement(this.Namespace, xmlElementName);
        this.WriteAttributesToXml(writer);
        this.WriteElementsToXml(writer, isCalendarFolder);
        writer.WriteEndElement();
    }
}

