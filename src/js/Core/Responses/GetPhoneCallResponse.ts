import ServiceResponse = require("./ServiceResponse");
import PhoneCall = require("../../UnifiedMessaging/PhoneCall");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
class GetPhoneCallResponse extends ServiceResponse {
    PhoneCall: PhoneCall;
    private phoneCall: PhoneCall;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
}
export = GetPhoneCallResponse;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
