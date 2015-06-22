import {ServiceResponse} from "./ServiceResponse";
import {Item} from "../ServiceObjects/Items/Item";
import {ExchangeService} from "../ExchangeService";
import {JsonObject} from "../JsonObject";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class UpdateItemResponse extends ServiceResponse {
    ReturnedItem: Item;
    ConflictCount: number;
    private item: Item;
    private returnedItem: Item;
    private conflictCount: number;
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item { throw new Error("UpdateItemResponse.ts - GetObjectInstance : Not implemented."); }
    Loaded(): any { throw new Error("UpdateItemResponse.ts - Loaded : Not implemented."); }
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("UpdateItemResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("UpdateItemResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}


//}



