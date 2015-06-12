import {ServiceResponse} from "./ServiceResponse";
import {Item} from "../ServiceObjects/Items/Item";
import {ExchangeService} from "../ExchangeService";
import {JsonObject} from "../JsonObject";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class CreateItemResponseBase extends ServiceResponse {
    Items: Item[];//System.Collections.Generic.List<Item>;
    private items: Item[];//System.Collections.Generic.List<Item>;
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item { throw new Error("CreateItemResponseBase.ts - GetObjectInstance : Not implemented."); }
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("CreateItemResponseBase.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("CreateItemResponseBase.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}


//}



