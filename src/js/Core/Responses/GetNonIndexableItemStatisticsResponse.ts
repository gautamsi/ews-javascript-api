import {ServiceResponse} from "./ServiceResponse";
import {NonIndexableItemStatistic} from "../../MailboxSearch/NonIndexableItemStatistic";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class GetNonIndexableItemStatisticsResponse extends ServiceResponse {
    NonIndexableStatistics: NonIndexableItemStatistic[];//System.Collections.Generic.List<NonIndexableItemStatistic>;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("GetNonIndexableItemStatisticsResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("GetNonIndexableItemStatisticsResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}


//}



