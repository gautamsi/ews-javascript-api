import {SimpleServiceRequestBase} from "./SimpleServiceRequestBase";
import {PhoneCallId} from "../../UnifiedMessaging/PhoneCallId";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
/**
 * ## @internal *Not Implemented* 
 */
export class DisconnectPhoneCallRequest extends SimpleServiceRequestBase {
    Id: PhoneCallId;
    private id: PhoneCallId;
    Execute(): ServiceResponse { throw new Error("DisconnectPhoneCallRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("DisconnectPhoneCallRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("DisconnectPhoneCallRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("DisconnectPhoneCallRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("DisconnectPhoneCallRequest.ts - ParseResponse : Not implemented."); }
    /**@internal */
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("DisconnectPhoneCallRequest.ts - WriteElementsToXml : Not implemented."); }
}