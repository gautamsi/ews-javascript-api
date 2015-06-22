import {CreateItemResponseBase} from "./CreateItemResponseBase";
import {Item} from "../ServiceObjects/Items/Item";
import {ExchangeService} from "../ExchangeService";
export class CreateItemResponse extends CreateItemResponseBase {
    private item: Item;
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item { throw new Error("CreateItemResponse.ts - GetObjectInstance : Not implemented."); }
    Loaded(): any { throw new Error("CreateItemResponse.ts - Loaded : Not implemented."); }
}


//}



