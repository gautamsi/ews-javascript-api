import ServiceResponse = require("./ServiceResponse");
import NameResolutionCollection = require("../../Misc/NameResolutionCollection");
import JsonObject = require("../JsonObject");
import ExchangeService = require("../ExchangeService");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
class ResolveNamesResponse extends ServiceResponse {
    Resolutions: NameResolutionCollection;
    private resolutions: NameResolutionCollection;
    InternalThrowIfNecessary(): any { throw new Error("ResolveNamesResponse.ts - InternalThrowIfNecessary : Not implemented."); }
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("ResolveNamesResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("ResolveNamesResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}
export = ResolveNamesResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
