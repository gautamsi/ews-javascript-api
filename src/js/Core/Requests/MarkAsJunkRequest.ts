import MultiResponseServiceRequest = require("./MultiResponseServiceRequest");
import ItemIdWrapperList = require("../../Misc/ItemIdWrapperList");
import ExchangeService = require("../ExchangeService");
import MarkAsJunkResponse = require("../Responses/MarkAsJunkResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class MarkAsJunkRequest extends MultiResponseServiceRequest<MarkAsJunkResponse> {//IJsonSerializable
    ItemIds: ItemIdWrapperList;
    IsJunk: boolean;
    MoveItem: boolean;
    private itemIds: ItemIdWrapperList;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): MarkAsJunkResponse { throw new Error("Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
    GetXmlElementName(): string { throw new Error("Not implemented."); }
    Validate(): any { throw new Error("Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = MarkAsJunkRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
