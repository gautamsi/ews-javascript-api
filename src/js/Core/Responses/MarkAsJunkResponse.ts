import {ItemId} from "../../ComplexProperties/ItemId";
import {XmlElementNames} from "../XmlElementNames";
import {ExchangeService} from "../ExchangeService";
import {ServiceResponse} from "./ServiceResponse";
export class MarkAsJunkResponse extends ServiceResponse {
    MovedItemId: ItemId = null;
    constructor() {
        super();
    }
    //ReadElementsFromJson(responseObject: any, service: ExchangeService): any { throw new Error("MarkAsJunkResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void {
        
        if (responseObject[XmlElementNames.Token]) {
            this.MovedItemId = new ItemId();
            this.MovedItemId.LoadFromXmlJsObject(responseObject[XmlElementNames.MovedItemId], service);
        }
    }
}