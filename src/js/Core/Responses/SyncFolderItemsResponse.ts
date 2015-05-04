			
 class SyncFolderItemsResponse extends SyncResponse<Item, ItemChange> {
	SummaryPropertiesOnly: boolean;
	CreateChangeInstance(): ItemChange{ throw new Error("Not implemented.");}
	GetChangeElementName(): string{ throw new Error("Not implemented.");}
	GetChangeIdElementName(): string{ throw new Error("Not implemented.");}
	GetIncludesLastInRangeXmlElementName(): string{ throw new Error("Not implemented.");}
}
export = SyncFolderItemsResponse;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			