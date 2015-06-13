import {ExchangeService} from "../ExchangeService";
import {Item} from "../ServiceObjects/Items/Item";
import {ItemInfo} from "../ServiceObjects/Items/ItemInfo";
import {CreateItemResponseBase} from "./CreateItemResponseBase";
export class CreateResponseObjectResponse extends CreateItemResponseBase {
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item {
        var itemInfo = new ItemInfo();
        return itemInfo.CreateEwsObjectFromXmlElementName<Item>(service, xmlElementName);
        //return EwsUtilities.CreateEwsObjectFromXmlElementName<Item>(service, xmlElementName);
    }
}

