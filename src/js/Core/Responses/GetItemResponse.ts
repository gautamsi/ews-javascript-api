import {ServiceResponse} from "./ServiceResponse";
import {Item} from "../ServiceObjects/Items/Item";
import {PropertySet} from "../PropertySet";
import {ExchangeService} from "../ExchangeService";
import {JsonObject} from "../JsonObject";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class GetItemResponse extends ServiceResponse {
    Item: Item;
    private item: Item;
    private propertySet: PropertySet;
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item { throw new Error("GetItemResponse.ts - GetObjectInstance : Not implemented."); }
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("GetItemResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("GetItemResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}


//}



