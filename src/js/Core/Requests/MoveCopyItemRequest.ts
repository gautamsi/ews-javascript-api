import {Item} from "../ServiceObjects/Items/Item";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {MoveCopyRequest} from "./MoveCopyRequest";
import {ItemIdWrapperList} from "../../Misc/ItemIdWrapperList";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
export class MoveCopyItemRequest<TResponse extends ServiceResponse> extends MoveCopyRequest<Item, TResponse> {
    ItemIds: ItemIdWrapperList;
    ReturnNewItemIds: boolean;
    private itemIds: ItemIdWrapperList;
    AddIdsToJson(jsonObject: JsonObject, service: ExchangeService): any { throw new Error("MoveCopyItemRequest.ts - AddIdsToJson : Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("MoveCopyItemRequest.ts - GetExpectedResponseMessageCount : Not implemented."); }
    Validate(): any { throw new Error("MoveCopyItemRequest.ts - Validate : Not implemented."); }
    WriteIdsToXml(writer: EwsServiceXmlWriter): any { throw new Error("MoveCopyItemRequest.ts - WriteIdsToXml : Not implemented."); }
}


//}



