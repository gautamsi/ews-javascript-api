import DeleteRequest = require("./DeleteRequest");
import ItemIdWrapperList = require("../../Misc/ItemIdWrapperList");
import AffectedTaskOccurrence = require("../../Enumerations/AffectedTaskOccurrence");
import SendCancellationsMode = require("../../Enumerations/SendCancellationsMode");
import ExchangeService = require("../ExchangeService");
import ServiceResponse = require("../Responses/ServiceResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import JsonObject = require("../JsonObject");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class DeleteItemRequest extends DeleteRequest<ServiceResponse> {
    ItemIds: ItemIdWrapperList;
    AffectedTaskOccurrences: AffectedTaskOccurrence;
    SendCancellationsMode: SendCancellationsMode;
    SuppressReadReceipts: boolean;
    private itemIds: ItemIdWrapperList;
    private affectedTaskOccurrences: AffectedTaskOccurrence;
    private sendCancellationsMode: SendCancellationsMode;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("DeleteItemRequest.ts - CreateServiceResponse : Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("DeleteItemRequest.ts - GetExpectedResponseMessageCount : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("DeleteItemRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("DeleteItemRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("DeleteItemRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("DeleteItemRequest.ts - GetXmlElementName : Not implemented."); }
    InternalToJson(body: JsonObject): any { throw new Error("DeleteItemRequest.ts - InternalToJson : Not implemented."); }
    Validate(): any { throw new Error("DeleteItemRequest.ts - Validate : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("DeleteItemRequest.ts - WriteAttributesToXml : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("DeleteItemRequest.ts - WriteElementsToXml : Not implemented."); }
}
export = DeleteItemRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
