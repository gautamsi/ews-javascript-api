import {ServiceResponse} from "./ServiceResponse";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class GetPasswordExpirationDateResponse extends ServiceResponse {
    PasswordExpirationDate: Date;
    private passwordExpirationDate: Date;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("GetPasswordExpirationDateResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("GetPasswordExpirationDateResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}


//}



