import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
import GetPasswordExpirationDateResponse = require("../Responses/GetPasswordExpirationDateResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class GetPasswordExpirationDateRequest extends SimpleServiceRequestBase {//IJsonSerializable
    MailboxSmtpAddress: string;
    private mailboxSmtpAddress: string;
    Execute(): GetPasswordExpirationDateResponse { throw new Error("GetPasswordExpirationDateRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("GetPasswordExpirationDateRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("GetPasswordExpirationDateRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("GetPasswordExpirationDateRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("GetPasswordExpirationDateRequest.ts - ParseResponse : Not implemented."); }
    //ParseResponse(jsonBody: JsonObject): any { throw new Error("GetPasswordExpirationDateRequest.ts - ParseResponse : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("GetPasswordExpirationDateRequest.ts - WriteElementsToXml : Not implemented."); }
}
export = GetPasswordExpirationDateRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
