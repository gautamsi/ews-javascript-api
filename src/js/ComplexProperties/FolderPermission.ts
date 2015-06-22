import {ServiceLocalException} from "../Exceptions/ServiceLocalException";
import {Strings} from "../Strings";
import {StandardUser} from "../Enumerations/StandardUser";
import {ServiceValidationException} from "../Exceptions/ServiceValidationException";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {XmlElementNames} from "../Core/XmlElementNames";
import {UserId} from "./UserId";
import {PermissionScope} from "../Enumerations/PermissionScope";
import {FolderPermissionReadAccess} from "../Enumerations/FolderPermissionReadAccess";
import {FolderPermissionLevel} from "../Enumerations/FolderPermissionLevel";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {LazyMember} from "../Core/LazyMember";
import {Convert, StringHelper} from "../ExtensionMethods";
import {IndexerWithEnumKey} from "../AltDictionary";
import {XmlNamespace} from "../Enumerations/XmlNamespace";
import {IRefParam} from "../Interfaces/IRefParam";

import {ComplexProperty} from "./ComplexProperty";
export class FolderPermission extends ComplexProperty {
    get UserId(): UserId { return this.userId; }
    set UserId(value) {
        if (this.userId != null) {
            var index = this.userId.OnChange.indexOf(this.PropertyChanged);
            if (index >= 0) this.userId.OnChange.splice(index, 1);
        }
        this.SetFieldValue<UserId>({ getValue: () => this.userId, setValue: (id) => this.userId = id }, value);
        if (this.userId != null) {
            this.userId.OnChange.push(this.PropertyChanged);
        }
    }
    get CanCreateItems(): boolean { return this.canCreateItems; }
    set CanCreateItems(value) {
        this.SetFieldValue<boolean>({ getValue: () => this.canCreateItems, setValue: (data) => this.canCreateItems = data }, value);
        this.AdjustPermissionLevel();
    }
    get CanCreateSubFolders(): boolean { return this.canCreateSubFolders; }
    set CanCreateSubFolders(value) {
        this.SetFieldValue<boolean>({ getValue: () => this.canCreateSubFolders, setValue: (data) => this.canCreateSubFolders = data }, value);
        this.AdjustPermissionLevel();
    }
    get IsFolderOwner(): boolean { return this.isFolderOwner; }
    set IsFolderOwner(value) {
        this.SetFieldValue<boolean>({ getValue: () => this.isFolderOwner, setValue: (data) => this.isFolderOwner = data }, value);
        this.AdjustPermissionLevel();
    }
    get IsFolderVisible(): boolean { return this.isFolderVisible; }
    set IsFolderVisible(value) {
        this.SetFieldValue<boolean>({ getValue: () => this.isFolderVisible, setValue: (data) => this.isFolderVisible = data }, value);
        this.AdjustPermissionLevel();
    }
    get IsFolderContact(): boolean { return this.isFolderContact; }
    set IsFolderContact(value) {
        this.SetFieldValue<boolean>({ getValue: () => this.isFolderContact, setValue: (data) => this.isFolderContact = data }, value);
        this.AdjustPermissionLevel();
    }
    get EditItems(): PermissionScope { return this.editItems; }
    set EditItems(value) {
        this.SetFieldValue<PermissionScope>({ getValue: () => this.editItems, setValue: (data) => this.editItems = data }, value);
        this.AdjustPermissionLevel();
    }
    get DeleteItems(): PermissionScope { return this.deleteItems; }
    set DeleteItems(value) {
        this.SetFieldValue<PermissionScope>({ getValue: () => this.deleteItems, setValue: (data) => this.deleteItems = data }, value);
        this.AdjustPermissionLevel();
    }
    get ReadItems(): FolderPermissionReadAccess { return this.readItems; }
    set ReadItems(value) {
        this.SetFieldValue<FolderPermissionReadAccess>({ getValue: () => this.readItems, setValue: (data) => this.readItems = data }, value);
        this.AdjustPermissionLevel();
    }
    get PermissionLevel(): FolderPermissionLevel { return this.permissionLevel; }
    set PermissionLevel(value) {
        if (this.permissionLevel != value) {
            if (value == FolderPermissionLevel.Custom) {
                throw new ServiceLocalException(Strings.CannotSetPermissionLevelToCustom);
            }
            this.AssignIndividualPermissions(FolderPermission.defaultPermissions.Member[value]);
            this.SetFieldValue<FolderPermissionLevel>({ getValue: () => this.permissionLevel, setValue: (data) => this.permissionLevel = data }, value);
        }
    }
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

    constructor();
    constructor(userId: UserId, permissionLevel: FolderPermissionLevel);
    constructor(primarySmtpAddress: string, permissionLevel: FolderPermissionLevel);
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

    AdjustPermissionLevel(): void {
        for (var key in FolderPermission.defaultPermissions.Member) {
            var value = FolderPermission.defaultPermissions.Member[key];
            if (this.IsEqualTo(value)) {
                this.permissionLevel = <FolderPermissionLevel>key;
                return;
            }
        }

        this.permissionLevel = FolderPermissionLevel.Custom;
    }
    AssignIndividualPermissions(permission: FolderPermission): void {
        this.canCreateItems = permission.CanCreateItems;
        this.canCreateSubFolders = permission.CanCreateSubFolders;
        this.isFolderContact = permission.IsFolderContact;
        this.isFolderOwner = permission.IsFolderOwner;
        this.isFolderVisible = permission.IsFolderVisible;
        this.editItems = permission.EditItems;
        this.deleteItems = permission.DeleteItems;
        this.readItems = permission.ReadItems;
    }
    Clone(): FolderPermission {
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
    InternalToJson(service: ExchangeService, isCalendarFolder: boolean): any { throw new Error("FolderPermission.ts - InternalToJson : Not implemented."); }
    private IsEqualTo(permission: FolderPermission): boolean {
        return
        this.CanCreateItems == permission.CanCreateItems &&
        this.CanCreateSubFolders == permission.CanCreateSubFolders &&
        this.IsFolderContact == permission.IsFolderContact &&
        this.IsFolderVisible == permission.IsFolderVisible &&
        this.IsFolderOwner == permission.IsFolderOwner &&
        this.EditItems == permission.EditItems &&
        this.DeleteItems == permission.DeleteItems &&
        this.ReadItems == permission.ReadItems;
    }
    LoadFromJson(jsonProperty: any/*JsonObject*/, service: ExchangeService): any { throw new Error("FolderPermission.ts - LoadFromJson : Not implemented."); }
    LoadFromXmlJsObject(jsonProperty: any/*JsonObject*/, service: ExchangeService): void {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames.UserId:
                    this.UserId = new UserId();
                    this.UserId.LoadFromXmlJsObject(jsonProperty[key], service);
                    break;
                case XmlElementNames.CanCreateItems:
                    this.canCreateItems = Convert.toBool(jsonProperty[key]);
                    break;
                case XmlElementNames.CanCreateSubFolders:
                    this.canCreateSubFolders = Convert.toBool(jsonProperty[key]);
                    break;
                case XmlElementNames.IsFolderOwner:
                    this.isFolderOwner = Convert.toBool(jsonProperty[key]);
                    break;
                case XmlElementNames.IsFolderVisible:
                    this.isFolderVisible = Convert.toBool(jsonProperty[key]);
                    break;
                case XmlElementNames.IsFolderContact:
                    this.isFolderContact = Convert.toBool(jsonProperty[key]);
                    break;
                case XmlElementNames.EditItems:
                    //debugger;//check for assignable enumeration type
                    this.editItems = <PermissionScope><any>PermissionScope[jsonProperty[key]];
                    break;
                case XmlElementNames.DeleteItems:
                    //debugger;//check for assignable enumeration type
                    this.deleteItems = <PermissionScope><any>PermissionScope[jsonProperty[key]];
                    break;
                case XmlElementNames.ReadItems:
                    //debugger;//check for assignable enumeration type
                    this.readItems = <FolderPermissionReadAccess><any>FolderPermissionReadAccess[jsonProperty[key]]
                    break;
                case XmlElementNames.PermissionLevel:
                case XmlElementNames.CalendarPermissionLevel:
                    //debugger;//check for assignable enumeration type
                    this.permissionLevel = <FolderPermissionLevel><any>FolderPermissionLevel[jsonProperty[key]];
                    break;
                default:
                    break;
            }
        }

        this.AdjustPermissionLevel();
    }
    PropertyChanged(complexProperty: ComplexProperty): void { this.Changed(); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("FolderPermission.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    //Validate(isCalendarFolder: boolean, permissionIndex: number): void { throw new Error("FolderPermission.ts - Validate : Not implemented."); }
    Validate(isCalendarFolder?: boolean, permissionIndex?: number): void {

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
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string, xmlNamespace?: XmlNamespace, isCalendarFolder: boolean = false): void {//XmlNamespace - incorrect inheritance error with typesctipt in folderpermission class if removed xmlnamespace parameter
        writer.WriteStartElement(this.Namespace, xmlElementName);
        this.WriteAttributesToXml(writer);
        this.WriteElementsToXml(writer, isCalendarFolder);
        writer.WriteEndElement();
    }
}

