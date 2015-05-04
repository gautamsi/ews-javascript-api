import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
import PhoneCallId = require("../../UnifiedMessaging/PhoneCallId");
import GetPhoneCallResponse = require("../Responses/GetPhoneCallResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
 class GetPhoneCallRequest extends SimpleServiceRequestBase {
    Id: PhoneCallId;
    private id: PhoneCallId;
    Execute(): GetPhoneCallResponse { throw new Error("Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
    GetXmlElementName(): string { throw new Error("Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = GetPhoneCallRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
