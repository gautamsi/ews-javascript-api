import ServiceResponse = require("./ServiceResponse");
import UserConfiguration = require("../../Misc/UserConfiguration");
import JsonObject = require("../JsonObject");
import ExchangeService = require("../ExchangeService");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
class GetUserConfigurationResponse extends ServiceResponse {
    UserConfiguration: UserConfiguration;
    private userConfiguration: UserConfiguration;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
}
export = GetUserConfigurationResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
