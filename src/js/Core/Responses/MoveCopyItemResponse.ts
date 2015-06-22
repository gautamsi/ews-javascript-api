import {ServiceResponse} from "./ServiceResponse";
import {Item} from "../ServiceObjects/Items/Item";
import {ExchangeService} from "../ExchangeService";
import {JsonObject} from "../JsonObject";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class MoveCopyItemResponse extends ServiceResponse {
    Item: Item;
    private item: Item;
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item { throw new Error("MoveCopyItemResponse.ts - GetObjectInstance : Not implemented."); }
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("MoveCopyItemResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("MoveCopyItemResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}


//}



