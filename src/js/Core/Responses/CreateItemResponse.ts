import {ServiceResult} from "../../Enumerations/ServiceResult";
import {Item} from "../ServiceObjects/Items/Item";
import {ExchangeService} from "../ExchangeService";
import {CreateItemResponseBase} from "./CreateItemResponseBase";
export class CreateItemResponse extends CreateItemResponseBase {
    private item: Item = null;
    constructor(item: Item) {
        super();
        this.item = item;
    }
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item { return this.item; }
    Loaded(): void {
        if (this.Result == ServiceResult.Success) {
            this.item.ClearChangeLog();
        }
    }
}