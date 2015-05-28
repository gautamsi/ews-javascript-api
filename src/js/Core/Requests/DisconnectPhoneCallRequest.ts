import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
import PhoneCallId = require("../../UnifiedMessaging/PhoneCallId");
import ServiceResponse = require("../Responses/ServiceResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class DisconnectPhoneCallRequest extends SimpleServiceRequestBase {
    Id: PhoneCallId;
    private id: PhoneCallId;
    Execute(): ServiceResponse { throw new Error("DisconnectPhoneCallRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("DisconnectPhoneCallRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("DisconnectPhoneCallRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("DisconnectPhoneCallRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("DisconnectPhoneCallRequest.ts - ParseResponse : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("DisconnectPhoneCallRequest.ts - WriteElementsToXml : Not implemented."); }
}
export = DisconnectPhoneCallRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
