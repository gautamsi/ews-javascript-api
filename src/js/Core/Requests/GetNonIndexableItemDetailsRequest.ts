import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
import SearchPageDirection = require("../../Enumerations/SearchPageDirection");
import GetNonIndexableItemDetailsResponse = require("../Responses/GetNonIndexableItemDetailsResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class GetNonIndexableItemDetailsRequest extends SimpleServiceRequestBase {
    Mailboxes: string[];
    PageSize: number;
    PageItemReference: string;
    PageDirection: SearchPageDirection;
    SearchArchiveOnly: boolean;
    Execute(): GetNonIndexableItemDetailsResponse { throw new Error("Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
    GetXmlElementName(): string { throw new Error("Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    Validate(): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = GetNonIndexableItemDetailsRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
