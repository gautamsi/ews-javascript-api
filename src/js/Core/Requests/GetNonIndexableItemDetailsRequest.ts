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
    Execute(): GetNonIndexableItemDetailsResponse { throw new Error("GetNonIndexableItemDetailsRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("GetNonIndexableItemDetailsRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("GetNonIndexableItemDetailsRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("GetNonIndexableItemDetailsRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("GetNonIndexableItemDetailsRequest.ts - ParseResponse : Not implemented."); }
    Validate(): any { throw new Error("GetNonIndexableItemDetailsRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("GetNonIndexableItemDetailsRequest.ts - WriteElementsToXml : Not implemented."); }
}
export = GetNonIndexableItemDetailsRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
