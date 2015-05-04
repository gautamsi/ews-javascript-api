import ServiceResponse = require("./ServiceResponse");
import AlternateIdBase = require("../../Misc/IdConversion/AlternateIdBase");
import JsonObject = require("../JsonObject");
import ExchangeService = require("../ExchangeService");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
class ConvertIdResponse extends ServiceResponse {
    ConvertedId: AlternateIdBase;
    private convertedId: AlternateIdBase;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
}
export = ConvertIdResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
