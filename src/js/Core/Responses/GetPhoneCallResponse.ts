import {ServiceResponse} from "./ServiceResponse";
import {PhoneCall} from "../../UnifiedMessaging/PhoneCall";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class GetPhoneCallResponse extends ServiceResponse {
    PhoneCall: PhoneCall;
    private phoneCall: PhoneCall;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("GetPhoneCallResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}


//}



