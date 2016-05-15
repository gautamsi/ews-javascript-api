import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
import {PropertySet} from "../PropertySet";
import {FolderId} from "../../ComplexProperties/FolderId";
import {SyncFolderItemsScope} from "../../Enumerations/SyncFolderItemsScope";
import {ItemIdWrapperList} from "../../Misc/ItemIdWrapperList";
import {ExchangeService} from "../ExchangeService";
import {SyncFolderItemsResponse} from "../Responses/SyncFolderItemsResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
/**
 * ## @internal *Not Implemented* 
 */
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
	CreateServiceResponse(service: ExchangeService, responseIndex: number): SyncFolderItemsResponse{ throw new Error("SyncFolderItemsRequest.ts - CreateServiceResponse : Not implemented.");}
	GetExpectedResponseMessageCount(): number{ throw new Error("SyncFolderItemsRequest.ts - GetExpectedResponseMessageCount : Not implemented.");}
	GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("SyncFolderItemsRequest.ts - GetMinimumRequiredServerVersion : Not implemented.");}
	GetResponseMessageXmlElementName(): string{ throw new Error("SyncFolderItemsRequest.ts - GetResponseMessageXmlElementName : Not implemented.");}
	GetResponseXmlElementName(): string{ throw new Error("SyncFolderItemsRequest.ts - GetResponseXmlElementName : Not implemented.");}
	GetXmlElementName(): string{ throw new Error("SyncFolderItemsRequest.ts - GetXmlElementName : Not implemented.");}
	Validate(): void{ throw new Error("SyncFolderItemsRequest.ts - Validate : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("SyncFolderItemsRequest.ts - WriteElementsToXml : Not implemented.");}
}