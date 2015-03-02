module Microsoft.Exchange.WebServices.Data {
    export class SyncFolderHierarchyRequest extends MultiResponseServiceRequest<SyncFolderHierarchyResponse> {
        PropertySet: PropertySet;
        SyncFolderId: FolderId;
        SyncState: string;
        private propertySet: PropertySet;
        private syncFolderId: FolderId;
        private syncState: string;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): SyncFolderHierarchyResponse { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class SyncFolderItemsRequest extends MultiResponseServiceRequest<SyncFolderItemsResponse> {
        PropertySet: PropertySet;
        SyncFolderId: FolderId;
        SyncScope: SyncFolderItemsScope;
        SyncState: string;
        IgnoredItemIds: ItemIdWrapperList;
        MaxChangesReturned: number;
        private propertySet: PropertySet;
        private syncFolderId: FolderId;
        private syncScope: SyncFolderItemsScope;
        private syncState: string;
        private ignoredItemIds: ItemIdWrapperList;
        private maxChangesReturned: number;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): SyncFolderItemsResponse { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }




    export class SyncResponse<TServiceObject extends ServiceObject, TChange extends Change> extends ServiceResponse {
        Changes: ChangeCollection<TChange>;
        SummaryPropertiesOnly: boolean;
        private changes: ChangeCollection<TChange>;
        private propertySet: PropertySet;
        CreateChangeInstance(): TChange { throw new Error("Not implemented."); }
        GetChangeElementName(): string { throw new Error("Not implemented."); }
        GetChangeIdElementName(): string { throw new Error("Not implemented."); }
        GetIncludesLastInRangeXmlElementName(): string { throw new Error("Not implemented."); }
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class SyncFolderHierarchyResponse extends SyncResponse<Folder, FolderChange> {
        SummaryPropertiesOnly: boolean;
        CreateChangeInstance(): FolderChange { throw new Error("Not implemented."); }
        GetChangeElementName(): string { throw new Error("Not implemented."); }
        GetChangeIdElementName(): string { throw new Error("Not implemented."); }
        GetIncludesLastInRangeXmlElementName(): string { throw new Error("Not implemented."); }
    }
    export class SyncFolderItemsResponse extends SyncResponse<Item, ItemChange> {
        SummaryPropertiesOnly: boolean;
        CreateChangeInstance(): ItemChange { throw new Error("Not implemented."); }
        GetChangeElementName(): string { throw new Error("Not implemented."); }
        GetChangeIdElementName(): string { throw new Error("Not implemented."); }
        GetIncludesLastInRangeXmlElementName(): string { throw new Error("Not implemented."); }
    }

    export class ChangeCollection<TChange extends Change> {
        Count: number;
        Item: TChange;
        SyncState: string;
        MoreChangesAvailable: boolean;
        private changes: any[];//System.Collections.Generic.List<T>;
        private syncState: string;
        private moreChangesAvailable: boolean;
        Add(change: TChange): any{ throw new Error("Not implemented.");}
        GetEnumerator(): any{ throw new Error("Not implemented.");}
    }

    export class Change {
        ChangeType: ChangeType;
        ServiceObject: ServiceObject;
        Id: ServiceId;
        private changeType: ChangeType;
        private serviceObject: ServiceObject;
        private id: ServiceId;
        CreateId(): ServiceId{ throw new Error("Not implemented.");}
    }
    export class FolderChange extends Change {
        Folder: Folder;
        FolderId: FolderId;
        CreateId(): ServiceId{ throw new Error("Not implemented.");}
    }
    export class ItemChange extends Change {
        Item: Item;
        IsRead: boolean;
        ItemId: ItemId;
        private isRead: boolean;
        CreateId(): ServiceId{ throw new Error("Not implemented.");}
    }

}