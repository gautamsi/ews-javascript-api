import Item = require("../Core/ServiceObjects/Items/Item");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
class AbstractItemIdWrapper {//IJsonSerializable
    GetItem(): Item { throw new Error("AbstractItemIdWrapper.ts - GetItem : Not implemented."); }
    IternalToJson(service: ExchangeService): any { throw new Error("AbstractItemIdWrapper.ts - IternalToJson : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("AbstractItemIdWrapper.ts - WriteToXml : Not implemented."); }
}
export = AbstractItemIdWrapper;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
