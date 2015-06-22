import {ItemId} from "./ItemId";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
export class ItemIdCollection extends ComplexPropertyCollection<ItemId> {
    CreateComplexProperty(xmlElementName: string): ItemId { throw new Error("ItemIdCollection.ts - CreateComplexProperty : Not implemented."); }
    CreateDefaultComplexProperty(): ItemId { throw new Error("ItemIdCollection.ts - CreateDefaultComplexProperty : Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: ItemId): string { throw new Error("ItemIdCollection.ts - GetCollectionItemXmlElementName : Not implemented."); }
}


//}



