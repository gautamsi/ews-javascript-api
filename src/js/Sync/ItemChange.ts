import {ItemId} from "../ComplexProperties/ItemId";
import {Change} from "./Change";
import {Item} from "../Core/ServiceObjects/Items/Item";
import {ServiceId} from "../ComplexProperties/ServiceId";
export class ItemChange extends Change {
	Item: Item;
	IsRead: boolean;
	ItemId: ItemId;
	private isRead: boolean;
	CreateId(): ServiceId{ throw new Error("ItemChange.ts - CreateId : Not implemented.");}
}






			

