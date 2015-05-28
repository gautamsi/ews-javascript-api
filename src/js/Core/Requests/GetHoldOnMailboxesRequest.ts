import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
import GetHoldOnMailboxesResponse = require("../Responses/GetHoldOnMailboxesResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class GetHoldOnMailboxesRequest extends SimpleServiceRequestBase {
    HoldId: string;
    Execute(): GetHoldOnMailboxesResponse { throw new Error("GetHoldOnMailboxesRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("GetHoldOnMailboxesRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("GetHoldOnMailboxesRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("GetHoldOnMailboxesRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("GetHoldOnMailboxesRequest.ts - ParseResponse : Not implemented."); }
    Validate(): any { throw new Error("GetHoldOnMailboxesRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("GetHoldOnMailboxesRequest.ts - WriteElementsToXml : Not implemented."); }
}
export = GetHoldOnMailboxesRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
