import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
import GetSearchableMailboxesResponse = require("../Responses/GetSearchableMailboxesResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class GetSearchableMailboxesRequest extends SimpleServiceRequestBase {
    SearchFilter: string;
    ExpandGroupMembership: boolean;
    Execute(): GetSearchableMailboxesResponse { throw new Error("GetSearchableMailboxesRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("GetSearchableMailboxesRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("GetSearchableMailboxesRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("GetSearchableMailboxesRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("GetSearchableMailboxesRequest.ts - ParseResponse : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("GetSearchableMailboxesRequest.ts - WriteElementsToXml : Not implemented."); }
}
export = GetSearchableMailboxesRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
