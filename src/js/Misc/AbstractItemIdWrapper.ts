import {Item} from "../Core/ServiceObjects/Items/Item";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class AbstractItemIdWrapper {//IJsonSerializable
    GetItem(): Item { return null;}
    IternalToJson(service: ExchangeService): any { throw new Error("AbstractItemIdWrapper.ts - IternalToJson : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter): void {}
}
