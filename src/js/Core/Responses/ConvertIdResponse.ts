import {ServiceResponse} from "./ServiceResponse";
import {AlternateIdBase} from "../../Misc/IdConversion/AlternateIdBase";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
/**
 * ## *Not Implemented* 
 */
export class ConvertIdResponse extends ServiceResponse {
    ConvertedId: AlternateIdBase;
    private convertedId: AlternateIdBase;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("ConvertIdResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("ConvertIdResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}