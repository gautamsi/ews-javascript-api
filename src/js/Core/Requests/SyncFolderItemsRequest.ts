			
 class SyncFolderItemsRequest extends MultiResponseServiceRequest<SyncFolderItemsResponse> {
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
	CreateServiceResponse(service: ExchangeService, responseIndex: number): SyncFolderItemsResponse{ throw new Error("Not implemented.");}
	GetExpectedResponseMessageCount(): number{ throw new Error("Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
	GetResponseMessageXmlElementName(): string{ throw new Error("Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("Not implemented.");}
	GetXmlElementName(): string{ throw new Error("Not implemented.");}
	Validate(): void{ throw new Error("Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
}
export = SyncFolderItemsRequest;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			