import {ServiceResponse} from "./ServiceResponse";
import {UserConfiguration} from "../../Misc/UserConfiguration";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class GetUserConfigurationResponse extends ServiceResponse {
    UserConfiguration: UserConfiguration;
    private userConfiguration: UserConfiguration;
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("GetUserConfigurationResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("GetUserConfigurationResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}


//}



