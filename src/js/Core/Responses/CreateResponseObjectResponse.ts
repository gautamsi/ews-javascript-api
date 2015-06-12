import {CreateItemResponseBase} from "./CreateItemResponseBase";
import {ExchangeService} from "../ExchangeService";
import {Item} from "../ServiceObjects/Items/Item";
export class CreateResponseObjectResponse extends CreateItemResponseBase {
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item { throw new Error("CreateResponseObjectResponse.ts - GetObjectInstance : Not implemented."); }
}


//}



