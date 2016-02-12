import {ServiceResponse} from "./ServiceResponse";
import {DiscoverySearchConfiguration} from "../../MailboxSearch/DiscoverySearchConfiguration";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
/**
 * ## *Not Implemented* 
 */
export class GetDiscoverySearchConfigurationResponse extends ServiceResponse {
    DiscoverySearchConfigurations: DiscoverySearchConfiguration[];
    private configurations: any[];//System.Collections.Generic.List<T>;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("GetDiscoverySearchConfigurationResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("GetDiscoverySearchConfigurationResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}