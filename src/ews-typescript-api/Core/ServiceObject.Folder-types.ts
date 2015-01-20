module Microsoft.Exchange.WebServices.Data {

    export class Folder extends ServiceObject {
        get Id(): FolderId { return <FolderId>this.PropertyBag._propGet(this.GetIdPropertyDefinition()); }
        get ParentFolderId(): FolderId { return <FolderId>this.PropertyBag._propGet(FolderSchema.ParentFolderId); }
        get ChildFolderCount(): number { return <number>this.PropertyBag._propGet(FolderSchema.ChildFolderCount); }
        get DisplayName(): string { return <string>this.PropertyBag._propGet(FolderSchema.DisplayName); }
        set DisplayName(value) { this.PropertyBag._propSet(FolderSchema.DisplayName, value); }
        get FolderClass(): string { return <string>this.PropertyBag._propGet(FolderSchema.FolderClass); }
        set FolderClass(value) { this.PropertyBag._propSet(FolderSchema.FolderClass, value); }
        get TotalCount(): number { return <number>this.PropertyBag._propGet(FolderSchema.TotalCount); }
        get ExtendedProperties(): ExtendedPropertyCollection { return <ExtendedPropertyCollection>this.PropertyBag._propGet(FolderSchema.ExtendedProperties); }
        get ManagedFolderInformation(): ManagedFolderInformation { return <ManagedFolderInformation>this.PropertyBag._propGet(FolderSchema.ManagedFolderInformation); }
        get EffectiveRights(): EffectiveRights { return <EffectiveRights>this.PropertyBag._propGet(FolderSchema.EffectiveRights); }
        get Permissions(): FolderPermissionCollection { return <FolderPermissionCollection>this.PropertyBag._propGet(FolderSchema.Permissions); }
        get UnreadCount(): number { return <number>this.PropertyBag._propGet(FolderSchema.UnreadCount); }
        get PolicyTag(): PolicyTag { return <PolicyTag>this.PropertyBag._propGet(FolderSchema.PolicyTag); }
        set PolicyTag(value) { this.PropertyBag._propSet(FolderSchema.PolicyTag, value); }
        get ArchiveTag(): ArchiveTag { return <ArchiveTag>this.PropertyBag._propGet(FolderSchema.ArchiveTag); }
        set ArchiveTag(value) { this.PropertyBag._propSet(FolderSchema.ArchiveTag, value); }
        get WellKnownFolderName(): WellKnownFolderName { return <WellKnownFolderName>this.PropertyBag._propGet(FolderSchema.WellKnownFolderName); }
        //Bind(service: ExchangeService, id: FolderId): Folder{ throw new Error("Not implemented.");}
        BindWithId(service: ExchangeService, id: FolderId, propertySet: PropertySet): Folder {
            return service.BindToFolder<Folder>(id, propertySet);
        }
        //Bind(service: ExchangeService, name: WellKnownFolderName): Folder{ throw new Error("Not implemented.");}
        BindWithName(service: ExchangeService, name: WellKnownFolderName, propertySet: PropertySet): Folder { throw new Error("Not implemented."); }
        CopyById(destinationFolderName: WellKnownFolderName): Folder { throw new Error("Not implemented."); }
        CopyByName(destinationFolderId: FolderId): Folder { throw new Error("Not implemented."); }
        Delete(deleteMode: DeleteMode): any { throw new Error("Not implemented."); }
        Empty(deleteMode: DeleteMode, deleteSubFolders: boolean): any { throw new Error("Not implemented."); }
        FindFolders(view: FolderView): FindFoldersResults { throw new Error("Not implemented."); }
        FindFolders(searchFilter: SearchFilter, view: FolderView): FindFoldersResults { throw new Error("Not implemented."); }
        FindItems(view: ItemView, groupBy: Grouping): GroupedFindItemsResults<TItem> { throw new Error("Not implemented."); }
        FindItems(searchFilter: SearchFilter, view: ItemView, groupBy: Grouping): GroupedFindItemsResults<TItem> { throw new Error("Not implemented."); }
        FindItems(view: ItemView): FindItemsResults<TItem> { throw new Error("Not implemented."); }
        FindItems(queryString: string, view: ItemView): FindItemsResults<TItem> { throw new Error("Not implemented."); }
        FindItems(searchFilter: SearchFilter, view: ItemView): FindItemsResults<TItem> { throw new Error("Not implemented."); }
        FindItems(queryString: string, view: ItemView, groupBy: Grouping): GroupedFindItemsResults<TItem> { throw new Error("Not implemented."); }
        GetChangeXmlElementName(): string { throw new Error("Not implemented."); }
        GetDeleteFieldXmlElementName(): string { throw new Error("Not implemented."); }
        GetExtendedProperties(): ExtendedPropertyCollection { return this.ExtendedProperties; }
        GetIdPropertyDefinition(): PropertyDefinition { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetSchema(): ServiceObjectSchema { throw new Error("Not implemented."); }
        GetSetFieldXmlElementName(): string { throw new Error("Not implemented."); }
        InternalDelete(deleteMode: DeleteMode, sendCancellationsMode: SendCancellationsMode, affectedTaskOccurrences: AffectedTaskOccurrence): any { throw new Error("Not implemented."); }
        InternalFindItems(queryString: string, view: ViewBase, groupBy: Grouping): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        InternalFindItems(searchFilter: SearchFilter, view: ViewBase, groupBy: Grouping): ServiceResponseCollection<TResponse> { throw new Error("Not implemented."); }
        InternalLoad(propertySet: PropertySet): any { throw new Error("Not implemented."); }
        MarkAllItemsAsRead(suppressReadReceipts: boolean): any { throw new Error("Not implemented."); }
        MarkAllItemsAsUnread(suppressReadReceipts: boolean): any { throw new Error("Not implemented."); }
        Move(destinationFolderId: FolderId): Folder { throw new Error("Not implemented."); }
        Move(destinationFolderName: WellKnownFolderName): Folder { throw new Error("Not implemented."); }
        RemoveExtendedProperty(extendedPropertyDefinition: ExtendedPropertyDefinition): boolean { throw new Error("Not implemented."); }
        Save(parentFolderName: WellKnownFolderName): any { throw new Error("Not implemented."); }
        Save(parentFolderId: FolderId): any { throw new Error("Not implemented."); }
        SetExtendedProperty(extendedPropertyDefinition: ExtendedPropertyDefinition, value: any): any { throw new Error("Not implemented."); }
        Update(): any { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
    }

    export class CalendarFolder extends Folder {
        Bind(service: ExchangeService, id: FolderId, propertySet: PropertySet): CalendarFolder { throw new Error("Not implemented."); }
        Bind(service: ExchangeService, id: FolderId): CalendarFolder { throw new Error("Not implemented."); }
        Bind(service: ExchangeService, name: WellKnownFolderName, propertySet: PropertySet): CalendarFolder { throw new Error("Not implemented."); }
        Bind(service: ExchangeService, name: WellKnownFolderName): CalendarFolder { throw new Error("Not implemented."); }
        FindAppointments(view: CalendarView): FindItemsResults<TItem> { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    }
    export class ContactsFolder extends Folder {
        Bind(service: ExchangeService, id: FolderId, propertySet: PropertySet): ContactsFolder { throw new Error("Not implemented."); }
        Bind(service: ExchangeService, id: FolderId): ContactsFolder { throw new Error("Not implemented."); }
        Bind(service: ExchangeService, name: WellKnownFolderName, propertySet: PropertySet): ContactsFolder { throw new Error("Not implemented."); }
        Bind(service: ExchangeService, name: WellKnownFolderName): ContactsFolder { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    }
    export class SearchFolder extends Folder {
        SearchParameters: SearchFolderParameters;
        Bind(service: ExchangeService, id: FolderId, propertySet: PropertySet): SearchFolder { throw new Error("Not implemented."); }
        Bind(service: ExchangeService, id: FolderId): SearchFolder { throw new Error("Not implemented."); }
        Bind(service: ExchangeService, name: WellKnownFolderName, propertySet: PropertySet): SearchFolder { throw new Error("Not implemented."); }
        Bind(service: ExchangeService, name: WellKnownFolderName): SearchFolder { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetSchema(): ServiceObjectSchema { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
    }
    export class TasksFolder extends Folder {
        Bind(service: ExchangeService, id: FolderId, propertySet: PropertySet): TasksFolder { throw new Error("Not implemented."); }
        Bind(service: ExchangeService, id: FolderId): TasksFolder { throw new Error("Not implemented."); }
        Bind(service: ExchangeService, name: WellKnownFolderName, propertySet: PropertySet): TasksFolder { throw new Error("Not implemented."); }
        Bind(service: ExchangeService, name: WellKnownFolderName): TasksFolder { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    }


}