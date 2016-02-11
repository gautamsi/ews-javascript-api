import {ItemId} from "../../ComplexProperties/ItemId";
import {SimpleServiceRequestBase} from "./SimpleServiceRequestBase";
import {PlayOnPhoneResponse} from "../Responses/PlayOnPhoneResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
/**
 * ## *Not Implemented* 
 */
export class PlayOnPhoneRequest extends SimpleServiceRequestBase {//IJsonSerializable
    ItemId: ItemId;
    DialString: string;
    private itemId: ItemId;
    private dialString: string;
    Execute(): PlayOnPhoneResponse { throw new Error("PlayOnPhoneRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("PlayOnPhoneRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("PlayOnPhoneRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("PlayOnPhoneRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("PlayOnPhoneRequest.ts - ParseResponse : Not implemented."); }
    //ParseResponse(jsonBody: JsonObject): any { throw new Error("PlayOnPhoneRequest.ts - ParseResponse : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("PlayOnPhoneRequest.ts - WriteElementsToXml : Not implemented."); }
}