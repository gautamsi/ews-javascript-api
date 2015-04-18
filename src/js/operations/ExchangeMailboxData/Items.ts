module Microsoft.Exchange.WebServices.Data{
    export class ArchiveItemRequest extends MultiResponseServiceRequest<ArchiveItemResponse> {
        SourceFolderId: FolderId;
        Ids: ItemIdWrapperList;
        private sourceFolderId: FolderId;
        private ids: ItemIdWrapperList;
        AddIdsToJson(jsonObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ArchiveItemResponse { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteIdsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class ArchiveItemResponse extends ServiceResponse {
        Item: Item;
        private item: Item;
        GetObjectInstance(service: ExchangeService, xmlElementName: string): Item { throw new Error("Not implemented."); }
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }

    export class CreateItemRequestBase<TServiceObject extends ServiceObject, TResponse extends ServiceResponse> extends CreateRequest<TServiceObject, TResponse> {
        EmitTimeZoneHeader: boolean;
        MessageDisposition: MessageDisposition;
        SendInvitationsMode: SendInvitationsMode;
        Items: TServiceObject[];//System.Collections.Generic.IEnumerable<TServiceObject>;
        private messageDisposition: MessageDisposition;
        private sendInvitationsMode: SendInvitationsMode;
        AddJsonProperties(jsonRequest: JsonObject, service: ExchangeService): any{ throw new Error("Not implemented.");}
        GetObjectCollectionXmlElementName(): string{ throw new Error("Not implemented.");}
        GetParentFolderXmlElementName(): string{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string{ throw new Error("Not implemented.");}
        GetXmlElementName(): string{ throw new Error("Not implemented.");}
        Validate(): any{ throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any{ throw new Error("Not implemented.");}
    }
    export class CreateItemRequest extends CreateItemRequestBase<Item, ServiceResponse> {
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
    }
    export class CreateResponseObjectRequest extends CreateItemRequestBase<ServiceObject, CreateResponseObjectResponse> {
        CreateServiceResponse(service: ExchangeService, responseIndex: number): CreateResponseObjectResponse{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
    }

    export class CreateItemResponseBase extends ServiceResponse {
        Items: Item[];//System.Collections.Generic.List<Item>;
        private items: Item[];//System.Collections.Generic.List<Item>;
        GetObjectInstance(service: ExchangeService, xmlElementName: string): Item { throw new Error("Not implemented."); }
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class CreateItemResponse extends CreateItemResponseBase {
        private item: Item;
        GetObjectInstance(service: ExchangeService, xmlElementName: string): Item { throw new Error("Not implemented."); }
        Loaded(): any { throw new Error("Not implemented."); }
    }
    export class CreateResponseObjectResponse extends CreateItemResponseBase {
        GetObjectInstance(service: ExchangeService, xmlElementName: string): Item { throw new Error("Not implemented."); }
    }

    export class MoveCopyItemRequest<TResponse extends ServiceResponse> extends MoveCopyRequest<Item, TResponse> {
        ItemIds: ItemIdWrapperList;
        ReturnNewItemIds: boolean;
        private itemIds: ItemIdWrapperList;
        AddIdsToJson(jsonObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented.");}
        Validate(): any { throw new Error("Not implemented.");}
        WriteIdsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented.");}
    }



    export class MoveCopyItemResponse extends ServiceResponse {
        Item: Item;
        private item: Item;
        GetObjectInstance(service: ExchangeService, xmlElementName: string): Item { throw new Error("Not implemented."); }
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class CopyItemRequest extends MoveCopyItemRequest<MoveCopyItemResponse> {
        CreateServiceResponse(service: ExchangeService, responseIndex: number): MoveCopyItemResponse{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string{ throw new Error("Not implemented.");}
        GetXmlElementName(): string{ throw new Error("Not implemented.");}
    }


    export class MoveItemRequest extends MoveCopyItemRequest<MoveCopyItemResponse> {
        CreateServiceResponse(service: ExchangeService, responseIndex: number): MoveCopyItemResponse{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string{ throw new Error("Not implemented.");}
        GetXmlElementName(): string{ throw new Error("Not implemented.");}
    }

    export class DeleteItemRequest extends DeleteRequest<ServiceResponse> {
        ItemIds: ItemIdWrapperList;
        AffectedTaskOccurrences: AffectedTaskOccurrence;
        SendCancellationsMode: SendCancellationsMode;
        SuppressReadReceipts: boolean;
        private itemIds: ItemIdWrapperList;
        private affectedTaskOccurrences: AffectedTaskOccurrence;
        private sendCancellationsMode: SendCancellationsMode;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        InternalToJson(body: JsonObject): any { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class FindItemsResults<TItem extends Item> {
        TotalCount: number;
        NextPageOffset: number;
        MoreAvailable: boolean;
        Items: TItem[]/*System.Collections.ObjectModel.Collection<TItem>*/;
        HighlightTerms: HighlightTerm[]/*System.Collections.ObjectModel.Collection<HighlightTerm>*/;
        private totalCount: number;
        private nextPageOffset: number;
        private moreAvailable: boolean;
        private items: TItem[]/*System.Collections.ObjectModel.Collection<TItem>*/;
        private highlightTerms: HighlightTerm[]/*System.Collections.ObjectModel.Collection<HighlightTerm>*/;
        GetEnumerator(): any { throw new Error("Not implemented."); }
    }

    export class FindItemRequest<TItem extends Item> extends FindRequest<FindItemResponse<TItem>> {
        GroupBy: Grouping;
        private groupBy: Grouping;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): FindItemResponse<TItem> { throw new Error("Not implemented."); }
        GetGroupBy(): Grouping { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
    }

    export class FindItemResponse<TItem extends Item> extends ServiceResponse {
        GroupedFindResults: GroupedFindItemsResults<TItem>;
        Results: FindItemsResults<TItem>;
        private results: FindItemsResults<TItem>;
        private isGrouped: boolean;
        private groupedFindResults: GroupedFindItemsResults<TItem>;
        private propertySet: PropertySet;
        CreateItemInstance(service: ExchangeService, xmlElementName: string): TItem { throw new Error("Not implemented."); }
        InternalReadItemsFromJson(jsonObject: JsonObject, propertySet: PropertySet, service: ExchangeService, destinationList: TItem[]/*System.Collections.Generic.IList<TItem>*/): any { throw new Error("Not implemented."); }
        InternalReadItemsFromXml(reader: EwsServiceXmlReader, propertySet: PropertySet, destinationList: TItem[]/*System.Collections.Generic.IList<TItem>*/): any { throw new Error("Not implemented."); }
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }

    export class GetItemResponse extends ServiceResponse {
        Item: Item;
        private item: Item;
        private propertySet: PropertySet;
        GetObjectInstance(service: ExchangeService, xmlElementName: string): Item { throw new Error("Not implemented."); }
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class GetItemRequestBase<TResponse extends ServiceResponse> extends GetRequest<Item, TResponse> {
        ItemIds: ItemIdWrapperList;
        EmitTimeZoneHeader: boolean;
        private itemIds: ItemIdWrapperList;
        AddIdsToRequest(jsonRequest: JsonObject, service: ExchangeService): any{ throw new Error("Not implemented.");}
        GetExpectedResponseMessageCount(): number{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
        GetResponseMessageXmlElementName(): string{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string{ throw new Error("Not implemented.");}
        GetServiceObjectType(): ServiceObjectType{ throw new Error("Not implemented.");}
        GetXmlElementName(): string{ throw new Error("Not implemented.");}
        Validate(): any{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any{ throw new Error("Not implemented.");}
    }

    export class GetItemRequest extends GetItemRequestBase<GetItemResponse> {
        CreateServiceResponse(service: ExchangeService, responseIndex: number): GetItemResponse{ throw new Error("Not implemented.");}
    }

    export class GetItemRequestForLoad extends GetItemRequestBase<ServiceResponse> {
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse{ throw new Error("Not implemented.");}
    }

    export class MarkAllItemsAsReadRequest extends MultiResponseServiceRequest<ServiceResponse> {
        FolderIds: FolderIdWrapperList;
        ReadFlag: boolean;
        SuppressReadReceipts: boolean;
        private folderIds: FolderIdWrapperList;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class SendItemRequest extends MultiResponseServiceRequest<ServiceResponse> {
        Items: Item[]/*System.Collections.Generic.IEnumerable<Item>*/;
        SavedCopyDestinationFolderId: FolderId;
        private items: Item[]/*System.Collections.Generic.IEnumerable<Item>;*/
        private savedCopyDestinationFolderId: FolderId;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class UpdateItemRequest extends MultiResponseServiceRequest<UpdateItemResponse> {
        EmitTimeZoneHeader: boolean;
        MessageDisposition: MessageDisposition;
        ConflictResolutionMode: ConflictResolutionMode;
        SendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode;
        SuppressReadReceipts: boolean;
        Items: Item[]/*System.Collections.Generic.List<Item>*/;
        SavedItemsDestinationFolder: FolderId;
        private items: Item[]/*System.Collections.Generic.List<Item>*/;
        private savedItemsDestinationFolder: FolderId;
        private conflictResolutionMode: ConflictResolutionMode;
        private messageDisposition: MessageDisposition;
        private sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): UpdateItemResponse { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class UpdateItemResponse extends ServiceResponse {
        ReturnedItem: Item;
        ConflictCount: number;
        private item: Item;
        private returnedItem: Item;
        private conflictCount: number;
        GetObjectInstance(service: ExchangeService, xmlElementName: string): Item { throw new Error("Not implemented."); }
        Loaded(): any { throw new Error("Not implemented."); }
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }


    export class ItemIdWrapperList {
        Count: number;
        Item: Item;
        private itemIds: ItemId[];//System.Collections.Generic.List<ItemId>;
        Add(item: Item | ItemId): any { throw new Error("Not implemented."); }
        //Add(itemId: ItemId): any { throw new Error("Not implemented."); }
        AddRange(items: Item[]| ItemId[]/*System.Collections.Generic.IEnumerable<Item>*/): any { throw new Error("Not implemented."); }
        //AddRange(itemIds: ItemId[]/*System.Collections.Generic.IEnumerable<ItemId>*/): any { throw new Error("Not implemented."); }
        GetEnumerator(): any { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter, ewsNamesapce: XmlNamespace, xmlElementName: string): any { throw new Error("Not implemented."); }
    }
    export class AbstractItemIdWrapper {
        GetItem(): Item{ throw new Error("Not implemented.");}
        IternalToJson(service: ExchangeService): any{ throw new Error("Not implemented.");}
        WriteToXml(writer: EwsServiceXmlWriter): any{ throw new Error("Not implemented.");}
    }
    export class ItemIdWrapper extends AbstractItemIdWrapper {
        private itemId: ItemId;
        IternalToJson(service: ExchangeService): any{ throw new Error("Not implemented.");}
        WriteToXml(writer: EwsServiceXmlWriter): any{ throw new Error("Not implemented.");}
    }
    export class ItemWrapper extends AbstractItemIdWrapper {
        private item: Item;
        GetItem(): Item{ throw new Error("Not implemented.");}
        IternalToJson(service: ExchangeService): any{ throw new Error("Not implemented.");}
        WriteToXml(writer: EwsServiceXmlWriter): any{ throw new Error("Not implemented.");}
    }



    export class HighlightTerm extends ComplexProperty {
        Scope: string;
        Value: string;
        private scope: string;
        private value: string;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }

}
