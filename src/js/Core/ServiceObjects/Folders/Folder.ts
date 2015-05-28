import PolicyTag = require("../../../ComplexProperties/PolicyTag");
import ArchiveTag = require("../../../ComplexProperties/ArchiveTag");
import ManagedFolderInformation = require("../../../ComplexProperties/ManagedFolderInformation");
import FolderPermissionCollection = require("../../../ComplexProperties/FolderPermissionCollection");
import SearchFilter = require("../../../Search/Filters/SearchFilter");
import GroupedFindItemsResults = require("../../../Search/GroupedFindItemsResults");
import ItemView = require("../../../Search/ItemView");
import Item = require("../Items/Item");
import ServiceResponseCollection = require("../../Responses/ServiceResponseCollection");
import Grouping = require("../../../Search/Grouping");
import AffectedTaskOccurrence = require("../../../Enumerations/AffectedTaskOccurrence");
import ViewBase = require("../../../Search/ViewBase");
import ExtendedPropertyDefinition = require("../../../PropertyDefinitions/ExtendedPropertyDefinition");
import PropertyDefinition = require("../../../PropertyDefinitions/PropertyDefinition");
import ServiceObjectSchema = require("../Schemas/ServiceObjectSchema");
import ServiceResponse = require("../../Responses/ServiceResponse");
import SendCancellationsMode = require("../../../Enumerations/SendCancellationsMode");
import ExchangeVersion = require("../../../Enumerations/ExchangeVersion");
import FindFoldersResults = require("../../../Search/FindFoldersResults");
import PropertySet = require("../../PropertySet");
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

import ServiceObject = require("../ServiceObject");
class Folder extends ServiceObject {
    get Id(): FolderId { return <FolderId>this.PropertyBag._propGet(this.GetIdPropertyDefinition()); }
    get ParentFolderId(): FolderId { return <FolderId>this.PropertyBag._propGet(FolderSchema.ParentFolderId); }
    get ChildFolderCount(): number { return <number>this.PropertyBag._propGet(FolderSchema.ChildFolderCount); }
    get DisplayName(): string { return <string>this.PropertyBag._propGet(FolderSchema.DisplayName); }
    set DisplayName(value: string) { this.PropertyBag._propSet(FolderSchema.DisplayName, value); }
    get FolderClass(): string { return <string>this.PropertyBag._propGet(FolderSchema.FolderClass); }
    set FolderClass(value: string) { this.PropertyBag._propSet(FolderSchema.FolderClass, value); }
    get TotalCount(): number { return <number>this.PropertyBag._propGet(FolderSchema.TotalCount); }
    get ExtendedProperties(): ExtendedPropertyCollection { return <ExtendedPropertyCollection>this.PropertyBag._propGet(FolderSchema.ExtendedProperties); }
    get ManagedFolderInformation(): ManagedFolderInformation { return <ManagedFolderInformation>this.PropertyBag._propGet(FolderSchema.ManagedFolderInformation); }
    get EffectiveRights(): EffectiveRights { return <EffectiveRights>this.PropertyBag._propGet(FolderSchema.EffectiveRights); }
    get Permissions(): FolderPermissionCollection { return <FolderPermissionCollection>this.PropertyBag._propGet(FolderSchema.Permissions); }
    get UnreadCount(): number { return <number>this.PropertyBag._propGet(FolderSchema.UnreadCount); }
    get PolicyTag(): PolicyTag { return <PolicyTag>this.PropertyBag._propGet(FolderSchema.PolicyTag); }
    set PolicyTag(value: PolicyTag) { this.PropertyBag._propSet(FolderSchema.PolicyTag, value); }
    get ArchiveTag(): ArchiveTag { return <ArchiveTag>this.PropertyBag._propGet(FolderSchema.ArchiveTag); }
    set ArchiveTag(value) { this.PropertyBag._propSet(FolderSchema.ArchiveTag, value); }
    get WellKnownFolderName(): WellKnownFolderName { return <WellKnownFolderName>this.PropertyBag._propGet(FolderSchema.WellKnownFolderName); }
    //Bind(service: ExchangeService, id: FolderId): Folder{ throw new Error("Folder.ts - Bind : Not implemented.");}
    
    
    constructor(service: ExchangeService) {
        super(service);
    }

    BindWithId(service: ExchangeService, id: FolderId, propertySet?: PropertySet): IPromise<Folder> {
        return service.BindToFolderAs<Folder>(id, propertySet);
    }
    //Bind(service: ExchangeService, name: WellKnownFolderName): Folder{ throw new Error("Folder.ts - Bind : Not implemented.");}
    BindWithName(service: ExchangeService, name: WellKnownFolderName, propertySet: PropertySet): Folder { throw new Error("Folder.ts - BindWithName : Not implemented."); }
    //Copy(destinationFolderName: WellKnownFolderName): Folder { throw new Error("Folder.ts - Copy : Not implemented."); }
    //Copy(destinationFolderId: FolderId): Folder { throw new Error("Folder.ts - Copy : Not implemented."); }
    Copy(destinationFolderIdOrName: FolderId | WellKnownFolderName): Folder {
        this.ThrowIfThisIsNew();

        //EwsUtilities.ValidateParam(destinationFolderId, "destinationFolderId");
        if (destinationFolderIdOrName instanceof FolderId) {
            return this.Service.CopyFolder(this.Id, destinationFolderIdOrName);
        }
        else if (typeof destinationFolderIdOrName === 'number') {

            return this.Copy(new FolderId(destinationFolderIdOrName));
        }
        EwsLogging.Assert(true, "Folder.Copy", "unknown paramete type");
        throw new Error("unknow parameter type. this should nobe  reached");
    }
    Delete(deleteMode: DeleteMode): any { throw new Error("Folder.ts - Delete : Not implemented."); }
    Empty(deleteMode: DeleteMode, deleteSubFolders: boolean): any { throw new Error("Folder.ts - Empty : Not implemented."); }
    FindFolders(view: FolderView): FindFoldersResults { throw new Error("Folder.ts - FindFolders : Not implemented."); }
    //FindFolders(searchFilter: SearchFilter, view: FolderView): FindFoldersResults { throw new Error("Folder.ts - FindFolders : Not implemented."); }
    FindItems<TItem extends Item>(view: ItemView, groupBy: Grouping): GroupedFindItemsResults<TItem> { throw new Error("Folder.ts - FindItems<TItem extends Item> : Not implemented."); }
    //FindItems(searchFilter: SearchFilter, view: ItemView, groupBy: Grouping): GroupedFindItemsResults<TItem> { throw new Error("Folder.ts - FindItems : Not implemented."); }
    //FindItems(view: ItemView): FindItemsResults<TItem> { throw new Error("Folder.ts - FindItems : Not implemented."); }
    //FindItems(queryString: string, view: ItemView): FindItemsResults<TItem> { throw new Error("Folder.ts - FindItems : Not implemented."); }
    //FindItems(searchFilter: SearchFilter, view: ItemView): FindItemsResults<TItem> { throw new Error("Folder.ts - FindItems : Not implemented."); }
    //FindItems(queryString: string, view: ItemView, groupBy: Grouping): GroupedFindItemsResults<TItem> { throw new Error("Folder.ts - FindItems : Not implemented."); }
    GetChangeXmlElementName(): string { throw new Error("Folder.ts - GetChangeXmlElementName : Not implemented."); }
    GetDeleteFieldXmlElementName(): string { throw new Error("Folder.ts - GetDeleteFieldXmlElementName : Not implemented."); }
    GetExtendedProperties(): ExtendedPropertyCollection { return this.ExtendedProperties; }
    GetIdPropertyDefinition(): PropertyDefinition { throw new Error("Folder.ts - GetIdPropertyDefinition : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Folder.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetSchema(): ServiceObjectSchema { return FolderSchema.Instance;}
    GetSetFieldXmlElementName(): string { throw new Error("Folder.ts - GetSetFieldXmlElementName : Not implemented."); }
    InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any { throw new Error("Folder.ts - InternalDelete : Not implemented."); }
    //InternalFindItems(queryString: string, view: ViewBase, groupBy: Grouping): ServiceResponseCollection<TResponse> { throw new Error("Folder.ts - InternalFindItems : Not implemented."); }
    InternalFindItems<TResponse extends ServiceResponse>(searchFilter: SearchFilter, view: ViewBase, groupBy: Grouping): ServiceResponseCollection<TResponse> { throw new Error("Folder.ts - InternalFindItems<TResponse extends ServiceResponse> : Not implemented."); }
    InternalLoad(propertySet: PropertySet): any { throw new Error("Folder.ts - InternalLoad : Not implemented."); }
    MarkAllItemsAsRead(suppressReadReceipts: boolean): any { throw new Error("Folder.ts - MarkAllItemsAsRead : Not implemented."); }
    MarkAllItemsAsUnread(suppressReadReceipts: boolean): any { throw new Error("Folder.ts - MarkAllItemsAsUnread : Not implemented."); }
    //Move(destinationFolderId: FolderId): Folder { throw new Error("Folder.ts - Move : Not implemented."); }
    Move(destinationFolderName: WellKnownFolderName): Folder { throw new Error("Folder.ts - Move : Not implemented."); }
    RemoveExtendedProperty(extendedPropertyDefinition: ExtendedPropertyDefinition): boolean { throw new Error("Folder.ts - RemoveExtendedProperty : Not implemented."); }
    //Save(parentFolderName: WellKnownFolderName): any { throw new Error("Folder.ts - Save : Not implemented."); }
    Save(parentFolderId: FolderId): any { throw new Error("Folder.ts - Save : Not implemented."); }
    SetExtendedProperty(extendedPropertyDefinition: ExtendedPropertyDefinition, value: any): any { throw new Error("Folder.ts - SetExtendedProperty : Not implemented."); }
    Update(): any { throw new Error("Folder.ts - Update : Not implemented."); }
    Validate(): any { throw new Error("Folder.ts - Validate : Not implemented."); }

    //created this to keep item and folder object away frmo here. modularization would fail and create a larger file
    IsFolderInstance(): boolean { return true; }//only folder instance returns true.
}

export = Folder;




//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export
