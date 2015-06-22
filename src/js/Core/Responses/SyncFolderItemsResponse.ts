import {Item} from "../ServiceObjects/Items/Item";
import {SyncResponse} from "./SyncResponse";
import {ItemChange} from "../../Sync/ItemChange";
export class SyncFolderItemsResponse extends SyncResponse<Item, ItemChange> {
	SummaryPropertiesOnly: boolean;
	CreateChangeInstance(): ItemChange{ throw new Error("SyncFolderItemsResponse.ts - CreateChangeInstance : Not implemented.");}
	GetChangeElementName(): string{ throw new Error("SyncFolderItemsResponse.ts - GetChangeElementName : Not implemented.");}
	GetChangeIdElementName(): string{ throw new Error("SyncFolderItemsResponse.ts - GetChangeIdElementName : Not implemented.");}
	GetIncludesLastInRangeXmlElementName(): string{ throw new Error("SyncFolderItemsResponse.ts - GetIncludesLastInRangeXmlElementName : Not implemented.");}
}






			

