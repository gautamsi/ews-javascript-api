import ServiceResponse = require("./ServiceResponse");
import JsonObject = require("../JsonObject");
import ExchangeService = require("../ExchangeService");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
class SubscribeResponse<TSubscription> extends ServiceResponse {
    Subscription: TSubscription;
    private subscription: TSubscription;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("SubscribeResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("SubscribeResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}

export = SubscribeResponse;



//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;


