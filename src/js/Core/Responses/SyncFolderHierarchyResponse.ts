			
 class SyncFolderHierarchyResponse extends SyncResponse<Folder, FolderChange> {
	SummaryPropertiesOnly: boolean;
	CreateChangeInstance(): FolderChange{ throw new Error("Not implemented.");}
	GetChangeElementName(): string{ throw new Error("Not implemented.");}
	GetChangeIdElementName(): string{ throw new Error("Not implemented.");}
	GetIncludesLastInRangeXmlElementName(): string{ throw new Error("Not implemented.");}
}
export = SyncFolderHierarchyResponse;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			