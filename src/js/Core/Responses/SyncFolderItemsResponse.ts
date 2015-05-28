import Item = require("../ServiceObjects/Items/Item");
import SyncResponse = require("./SyncResponse");
import ItemChange = require("../../Sync/ItemChange");
			
 class SyncFolderItemsResponse extends SyncResponse<Item, ItemChange> {
	SummaryPropertiesOnly: boolean;
	CreateChangeInstance(): ItemChange{ throw new Error("SyncFolderItemsResponse.ts - CreateChangeInstance : Not implemented.");}
	GetChangeElementName(): string{ throw new Error("SyncFolderItemsResponse.ts - GetChangeElementName : Not implemented.");}
	GetChangeIdElementName(): string{ throw new Error("SyncFolderItemsResponse.ts - GetChangeIdElementName : Not implemented.");}
	GetIncludesLastInRangeXmlElementName(): string{ throw new Error("SyncFolderItemsResponse.ts - GetIncludesLastInRangeXmlElementName : Not implemented.");}
}
export = SyncFolderItemsResponse;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
