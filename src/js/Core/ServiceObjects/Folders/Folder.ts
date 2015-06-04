import ServiceErrorHandling = require("../../../Enumerations/ServiceErrorHandling");
import FindItemsResults = require("../../../Search/FindItemsResults");
import PolicyTag = require("../../../ComplexProperties/PolicyTag");
import ArchiveTag = require("../../../ComplexProperties/ArchiveTag");
import ManagedFolderInformation = require("../../../ComplexProperties/ManagedFolderInformation");
import FolderPermissionCollection = require("../../../ComplexProperties/FolderPermissionCollection");
import SearchFilter = require("../../../Search/Filters/SearchFilter");
import GroupedFindItemsResults = require("../../../Search/GroupedFindItemsResults");
import ItemView = require("../../../Search/ItemView");
import Item = require("../Items/Item");
import ServiceResponseCollection = require("../../Responses/ServiceResponseCollection");
import FindItemResponse = require("../../Responses/FindItemResponse");
import Grouping = require("../../../Search/Grouping");
import AffectedTaskOccurrence = require("../../../Enumerations/AffectedTaskOccurrence");
import ViewBase = require("../../../Search/ViewBase");
import ExtendedPropertyDefinition = require("../../../PropertyDefinitions/ExtendedPropertyDefinition");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");
import ServiceObjectSchema = require("../Schemas/ServiceObjectSchema");
import ServiceResponse = require("../../Responses/ServiceResponse");
import SendCancellationsMode = require("../../../Enumerations/SendCancellationsMode");
import ExchangeVersion = require("../../../Enumerations/ExchangeVersion");
import PropertySet = require("../../PropertySet");
import FindFoldersResults = require("../../../Search/FindFoldersResults");
import FolderView = require("../../../Search/FolderView");
import DeleteMode = require("../../../Enumerations/DeleteMode");
import ExchangeService = require("../../ExchangeService");
import WellKnownFolderName = require("../../../Enumerations/WellKnownFolderName");
import EffectiveRights = require("../../../Enumerations/EffectiveRights");
import ExtendedPropertyCollection = require("../../../ComplexProperties/ExtendedPropertyCollection");
import FolderId = require("../../../ComplexProperties/FolderId");
import FolderSchema = require("../Schemas/FolderSchema");
import {EwsLogging} from "../../EwsLogging";
import {IPromise} from "../../../Interfaces";
import {Promise} from "../../../PromiseFactory"
import XmlElementNames = require("../../XmlElementNames");

import ServiceObject = require("../ServiceObject");
class Folder extends ServiceObject {
    get Id(): FolderId { return <FolderId>this.PropertyBag._getItem(this.GetIdPropertyDefinition()); }
    get ParentFolderId(): FolderId { return <FolderId>this.PropertyBag._getItem(FolderSchema.ParentFolderId); }
    get ChildFolderCount(): number { return <number>this.PropertyBag._getItem(FolderSchema.ChildFolderCount); }
    get DisplayName(): string { return <string>this.PropertyBag._getItem(FolderSchema.DisplayName); }
    set DisplayName(value: string) { this.PropertyBag._setItem(FolderSchema.DisplayName, value); }
    get FolderClass(): string { return <string>this.PropertyBag._getItem(FolderSchema.FolderClass); }
    set FolderClass(value: string) { this.PropertyBag._setItem(FolderSchema.FolderClass, value); }
    get TotalCount(): number { return <number>this.PropertyBag._getItem(FolderSchema.TotalCount); }
    get ExtendedProperties(): ExtendedPropertyCollection { return <ExtendedPropertyCollection>this.PropertyBag._getItem(FolderSchema.ExtendedProperties); }
    get ManagedFolderInformation(): ManagedFolderInformation { return <ManagedFolderInformation>this.PropertyBag._getItem(FolderSchema.ManagedFolderInformation); }
    get EffectiveRights(): EffectiveRights { return <EffectiveRights>this.PropertyBag._getItem(FolderSchema.EffectiveRights); }
    get Permissions(): FolderPermissionCollection { return <FolderPermissionCollection>this.PropertyBag._getItem(FolderSchema.Permissions); }
    get UnreadCount(): number { return <number>this.PropertyBag._getItem(FolderSchema.UnreadCount); }
    get PolicyTag(): PolicyTag { return <PolicyTag>this.PropertyBag._getItem(FolderSchema.PolicyTag); }
    set PolicyTag(value: PolicyTag) { this.PropertyBag._setItem(FolderSchema.PolicyTag, value); }
    get ArchiveTag(): ArchiveTag { return <ArchiveTag>this.PropertyBag._getItem(FolderSchema.ArchiveTag); }
    set ArchiveTag(value) { this.PropertyBag._setItem(FolderSchema.ArchiveTag, value); }
    get WellKnownFolderName(): WellKnownFolderName { return <WellKnownFolderName>this.PropertyBag._getItem(FolderSchema.WellKnownFolderName); }
    
    /**
     * _FolderTYpe -> type of folder, use to avoid folder type detection using instanceof. some cases it has circular loop in nodejs/requirejs
     */
    get _FolderType(): string { return XmlElementNames.Folder; }



    constructor(service: ExchangeService) {
        super(service);
    }

    //WithId
    static Bind(service: ExchangeService, idOrName: FolderId | WellKnownFolderName, propertySet: PropertySet = PropertySet.FirstClassProperties): IPromise<Folder> {
        if (idOrName instanceof FolderId) {
            return service.BindToFolderAs<Folder>(idOrName, propertySet);
        }
        else if (typeof idOrName === 'number') {
            return service.BindToFolderAs<Folder>(new FolderId(idOrName), propertySet);
        }
        EwsLogging.Assert(false, "Folder.Bind", "unknown paramete type");
        throw new Error("unknow parameter type. this should nobe  reached");
    }
    //Bind(service: ExchangeService, id: FolderId): Folder{ throw new Error("Folder.ts - Bind : Not implemented.");}
    //Bind(service: ExchangeService, name: WellKnownFolderName): Folder{ throw new Error("Folder.ts - Bind : Not implemented.");}
    
    //Copy(destinationFolderName: WellKnownFolderName): Folder { }
    Copy(destinationFolderIdOrName: FolderId | WellKnownFolderName): IPromise<Folder> {
        this.ThrowIfThisIsNew();
        //EwsUtilities.ValidateParam(destinationFolderId, "destinationFolderId");
        if (destinationFolderIdOrName instanceof FolderId) {
            return this.Service.CopyFolder(this.Id, destinationFolderIdOrName);
        }
        else if (typeof destinationFolderIdOrName === 'number') {
            return this.Copy(new FolderId(destinationFolderIdOrName));
        }
        EwsLogging.Assert(false, "Folder.Copy", "unknown paramete type");
        throw new Error("unknow parameter type. this should nobe  reached");
    }
    Delete(deleteMode: DeleteMode): IPromise<void> { return this.InternalDelete(deleteMode, null, null); }
    Empty(deleteMode: DeleteMode, deleteSubFolders: boolean): IPromise<void> {
        this.ThrowIfThisIsNew();
        return this.Service.EmptyFolder(
            this.Id,
            deleteMode,
            deleteSubFolders);
    }
    //FindFolders(view: FolderView): FindFoldersResults { }
    //FindFolders(searchFilter: SearchFilter, view: FolderView): FindFoldersResults {}
    FindFolders(view: FolderView, searchFilter?: SearchFilter): IPromise<FindFoldersResults> {
        this.ThrowIfThisIsNew();
        return this.Service.FindFolders(this.Id, view, searchFilter);
    }

    //FindItems(view: ItemView): FindItemsResults<TItem> { throw new Error("Folder.ts - FindItems : Not implemented."); }
    //FindItems(queryString: string, view: ItemView): FindItemsResults<TItem> { throw new Error("Folder.ts - FindItems : Not implemented."); }
    //FindItems(searchFilter: SearchFilter, view: ItemView): FindItemsResults<TItem> { throw new Error("Folder.ts - FindItems : Not implemented."); }
    FindItems(view: ItemView, searchFilterOrQueryString?: SearchFilter | string): IPromise<FindItemsResults<Item>> {
        return this.InternalFindItems<Item>(
            searchFilterOrQueryString,
            view,
            null /* groupBy */)
            .then((res) => {
                return res.__thisIndexer(0).Results;
            });
    }
    //FindItems(queryString: string, view: ItemView, groupBy: Grouping): GroupedFindItemsResults<TItem> { throw new Error("Folder.ts - FindItems : Not implemented."); }
    //FindItems(searchFilter: SearchFilter, view: ItemView, groupBy: Grouping): GroupedFindItemsResults<TItem> { throw new Error("Folder.ts - FindItems : Not implemented."); }
    //FindItems(view: ItemView, groupBy: Grouping): GroupedFindItemsResults<TItem> { throw new Error("Folder.ts - FindItems : Not implemented."); }
    FindItemsWithGroupBy(view: ItemView, groupBy: Grouping, searchFilterOrQueryString?: SearchFilter| string): IPromise<GroupedFindItemsResults<Item>> {
        // if(typeof searchFilterOrQueryString === 'undefined')
        // searchFilterOrQueryString = null;
        return this.InternalFindItems<Item>(searchFilterOrQueryString, view, groupBy).then((res) => {
            return res.__thisIndexer(0).GroupedFindResults;
        });
    }
    GetXmlElementName(): string { return XmlElementNames.Folder; }
    GetChangeXmlElementName(): string { return XmlElementNames.FolderChange; }
    GetDeleteFieldXmlElementName(): string { return XmlElementNames.DeleteFolderField; }
    GetExtendedProperties(): ExtendedPropertyCollection { return this.ExtendedProperties; }
    GetIdPropertyDefinition(): PropertyDefinition { return FolderSchema.Id; }
    GetMinimumRequiredServerVersion(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
    GetSchema(): ServiceObjectSchema { return FolderSchema.Instance; }
    GetSetFieldXmlElementName(): string { return XmlElementNames.SetFolderField; }
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode?: SendCancellationsMode, affectedTaskOccurrences?: AffectedTaskOccurrence): IPromise<void> {
        this.ThrowIfThisIsNew();
        return this.Service.DeleteFolder(this.Id, deleteMode);
    }
    //InternalFindItems(queryString: string, view: ViewBase, groupBy: Grouping): ServiceResponseCollection<TResponse> { throw new Error("Folder.ts - InternalFindItems : Not implemented."); }
    protected InternalFindItems<TItem extends Item>(searchFilterOrQueryString: SearchFilter | string, view: ViewBase, groupBy: Grouping): IPromise<ServiceResponseCollection<FindItemResponse<TItem>>> {
        this.ThrowIfThisIsNew();

        if (searchFilterOrQueryString instanceof SearchFilter) {

            return this.Service.FindItemsAs<TItem>(
                [this.Id], // FolderId[]
                searchFilterOrQueryString,
                null, /* queryString */
                view,
                groupBy,
                ServiceErrorHandling.ThrowOnError);
        }
        else if (typeof searchFilterOrQueryString === 'string') {
            return this.Service.FindItemsAs<TItem>(
                [this.Id], // FolderId[]
                null, /* searchFilter */
                searchFilterOrQueryString,
                view,
                groupBy,
                ServiceErrorHandling.ThrowOnError);
        }
        else {
            debugger;//check: verify if querystring is null
            return this.Service.FindItemsAs<TItem>(
                [this.Id], // FolderId[]
                null, /* searchFilter */
                null, /* queryString */
                view,
                groupBy,
                ServiceErrorHandling.ThrowOnError);
        }

        EwsLogging.Assert(false, "Folder.InternalFindItems", "unknown paramete type - searchfilterorstring");
        throw new Error("unknow parameter type. this should nobe  reached");
    }

    InternalLoad(propertySet: PropertySet): IPromise<void> {
        this.ThrowIfThisIsNew();
        return this.Service.LoadPropertiesForFolder(this, propertySet);
    }
    MarkAllItemsAsRead(suppressReadReceipts: boolean): IPromise<void> {
        this.ThrowIfThisIsNew();
        return this.Service.MarkAllItemsAsRead(
            this.Id,
            true,
            suppressReadReceipts);
    }
    MarkAllItemsAsUnread(suppressReadReceipts: boolean): IPromise<void> {
        this.ThrowIfThisIsNew();
        return this.Service.MarkAllItemsAsRead(
            this.Id,
            false,
            suppressReadReceipts);
    }
    //Move(destinationFolderName: WellKnownFolderName): Folder { }
    Move(destinationFolderIdOrname: FolderId | WellKnownFolderName): IPromise<Folder> {
        this.ThrowIfThisIsNew();

        //EwsUtilities.ValidateParam(destinationFolderId, "destinationFolderId");
        if (destinationFolderIdOrname instanceof FolderId) {
            return this.Service.MoveFolder(this.Id, destinationFolderIdOrname);
        }
        else if (typeof destinationFolderIdOrname === 'number') {
            return this.Move(new FolderId(destinationFolderIdOrname));
        }
        EwsLogging.Assert(false, "Folder.Move", "unknown paramete type");
        throw new Error("unknow parameter type. this should nobe  reached");
    }
    RemoveExtendedProperty(extendedPropertyDefinition: ExtendedPropertyDefinition): boolean { return this.ExtendedProperties.RemoveExtendedProperty(extendedPropertyDefinition); }
    //Save(parentFolderName: WellKnownFolderName): any { }
    Save(parentFolderIdOrname: FolderId | WellKnownFolderName): IPromise<void> {
        this.ThrowIfThisIsNotNew();
        //EwsUtilities.ValidateParam(parentFolderId, "parentFolderId");
        if (parentFolderIdOrname instanceof FolderId) {
            if (this.IsDirty) {
                return this.Service.CreateFolder(this, parentFolderIdOrname);
            }
            else return null;
        }
        else if (typeof parentFolderIdOrname === 'number') {
            return this.Save(new FolderId(parentFolderIdOrname));
        }
        EwsLogging.Assert(false, "Folder.Save", "unknown paramete type");
        throw new Error("unknow parameter type. this should nobe  reached");
    }
    SetExtendedProperty(extendedPropertyDefinition: ExtendedPropertyDefinition, value: any): void { this.ExtendedProperties.SetExtendedProperty(extendedPropertyDefinition, value); }
    Update(): IPromise<void> {
        if (this.IsDirty) {
            if (this.PropertyBag.GetIsUpdateCallNecessary()) {
                return this.Service.UpdateFolder(this);
            }
        }
        return undefined;
    }
    Validate(): void {
        super.Validate();

        // Validate folder permissions
        if (this.PropertyBag.Contains(FolderSchema.Permissions)) {
            this.Permissions.Validate();
        }
    }

    //created this to keep item and folder object away frmo here. modularization would fail and create a larger file
    IsFolderInstance(): boolean { return true; }//only folder instance returns true.
}

export = Folder;




//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export
