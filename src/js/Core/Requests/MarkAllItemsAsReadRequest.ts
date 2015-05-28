import MultiResponseServiceRequest = require("./MultiResponseServiceRequest");
import FolderIdWrapperList = require("../../Misc/FolderIdWrapperList");
import ExchangeService = require("../ExchangeService");
import ServiceResponse = require("../Responses/ServiceResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class MarkAllItemsAsReadRequest extends MultiResponseServiceRequest<ServiceResponse> {//IJsonSerializable
    FolderIds: FolderIdWrapperList;
    ReadFlag: boolean;
    SuppressReadReceipts: boolean;
    private folderIds: FolderIdWrapperList;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("MarkAllItemsAsReadRequest.ts - CreateServiceResponse : Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("MarkAllItemsAsReadRequest.ts - GetExpectedResponseMessageCount : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("MarkAllItemsAsReadRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("MarkAllItemsAsReadRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("MarkAllItemsAsReadRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("MarkAllItemsAsReadRequest.ts - GetXmlElementName : Not implemented."); }
    Validate(): any { throw new Error("MarkAllItemsAsReadRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("MarkAllItemsAsReadRequest.ts - WriteElementsToXml : Not implemented."); }
}
export = MarkAllItemsAsReadRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
