import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
import GetNonIndexableItemStatisticsResponse = require("../Responses/GetNonIndexableItemStatisticsResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class GetNonIndexableItemStatisticsRequest extends SimpleServiceRequestBase {
    Mailboxes: string[];
    SearchArchiveOnly: boolean;
    Execute(): GetNonIndexableItemStatisticsResponse { throw new Error("GetNonIndexableItemStatisticsRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("GetNonIndexableItemStatisticsRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("GetNonIndexableItemStatisticsRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("GetNonIndexableItemStatisticsRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("GetNonIndexableItemStatisticsRequest.ts - ParseResponse : Not implemented."); }
    Validate(): any { throw new Error("GetNonIndexableItemStatisticsRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("GetNonIndexableItemStatisticsRequest.ts - WriteElementsToXml : Not implemented."); }
}
export = GetNonIndexableItemStatisticsRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
