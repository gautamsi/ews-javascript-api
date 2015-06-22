import {ItemId} from "../../ComplexProperties/ItemId";
import {ServiceResponse} from "./ServiceResponse";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class MarkAsJunkResponse extends ServiceResponse {
    MovedItemId: ItemId;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("MarkAsJunkResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("MarkAsJunkResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}


//}



