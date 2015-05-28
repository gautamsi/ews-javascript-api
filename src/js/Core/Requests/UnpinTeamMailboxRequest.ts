import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
import EmailAddress = require("../../ComplexProperties/EmailAddress");
import ServiceResponse = require("../Responses/ServiceResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class UnpinTeamMailboxRequest extends SimpleServiceRequestBase {
    private emailAddress: EmailAddress;
    Execute(): ServiceResponse { throw new Error("UnpinTeamMailboxRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("UnpinTeamMailboxRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("UnpinTeamMailboxRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("UnpinTeamMailboxRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("UnpinTeamMailboxRequest.ts - ParseResponse : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("UnpinTeamMailboxRequest.ts - WriteElementsToXml : Not implemented."); }
}

export = UnpinTeamMailboxRequest;


//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
