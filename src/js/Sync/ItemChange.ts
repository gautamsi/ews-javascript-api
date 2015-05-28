import ItemId = require("../ComplexProperties/ItemId");
import Change = require("./Change");
import Item = require("../Core/ServiceObjects/Items/Item");
import ServiceId = require("../ComplexProperties/ServiceId");
			
 class ItemChange extends Change {
	Item: Item;
	IsRead: boolean;
	ItemId: ItemId;
	private isRead: boolean;
	CreateId(): ServiceId{ throw new Error("ItemChange.ts - CreateId : Not implemented.");}
}
export = ItemChange;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
