import ServiceResponse = require("./ServiceResponse");
import DiscoverySearchConfiguration = require("../../MailboxSearch/DiscoverySearchConfiguration");
import JsonObject = require("../JsonObject");
import ExchangeService = require("../ExchangeService");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
class GetDiscoverySearchConfigurationResponse extends ServiceResponse {
    DiscoverySearchConfigurations: DiscoverySearchConfiguration[];
    private configurations: any[];//System.Collections.Generic.List<T>;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
}
export = GetDiscoverySearchConfigurationResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
