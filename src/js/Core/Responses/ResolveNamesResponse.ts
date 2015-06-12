import {ServiceResponse} from "./ServiceResponse";
import {NameResolutionCollection} from "../../Misc/NameResolutionCollection";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class ResolveNamesResponse extends ServiceResponse {
    Resolutions: NameResolutionCollection;
    private resolutions: NameResolutionCollection;
    InternalThrowIfNecessary(): any { throw new Error("ResolveNamesResponse.ts - InternalThrowIfNecessary : Not implemented."); }
    ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("ResolveNamesResponse.ts - ReadElementsFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("ResolveNamesResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}


//}



