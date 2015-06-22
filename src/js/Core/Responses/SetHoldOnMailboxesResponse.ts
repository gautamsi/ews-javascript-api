import {ServiceResponse} from "./ServiceResponse";
import {MailboxHoldResult} from "../../MailboxSearch/MailboxHoldResult";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class SetHoldOnMailboxesResponse extends ServiceResponse {
    HoldResult: MailboxHoldResult;
    private holdResult: MailboxHoldResult;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("SetHoldOnMailboxesResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("SetHoldOnMailboxesResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}


//}



