import CreateItemResponseBase = require("./CreateItemResponseBase");
import ExchangeService = require("../ExchangeService");
import Item = require("../ServiceObjects/Items/Item");
class CreateResponseObjectResponse extends CreateItemResponseBase {
    GetObjectInstance(service: ExchangeService, xmlElementName: string): Item { throw new Error("CreateResponseObjectResponse.ts - GetObjectInstance : Not implemented."); }
}
export = CreateResponseObjectResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
