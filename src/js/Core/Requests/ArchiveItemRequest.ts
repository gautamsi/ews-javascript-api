import MultiResponseServiceRequest = require("./MultiResponseServiceRequest");
import FolderId = require("../../ComplexProperties/FolderId");
import ItemIdWrapperList = require("../../Misc/ItemIdWrapperList");
import JsonObject = require("../JsonObject");
import ExchangeService = require("../ExchangeService");
import ArchiveItemResponse = require("../Responses/ArchiveItemResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class ArchiveItemRequest extends MultiResponseServiceRequest<ArchiveItemResponse> {//IJsonSerializable
    SourceFolderId: FolderId;
    Ids: ItemIdWrapperList;
    private sourceFolderId: FolderId;
    private ids: ItemIdWrapperList;
    AddIdsToJson(jsonObject: JsonObject, service: ExchangeService): any { throw new Error("ArchiveItemRequest.ts - AddIdsToJson : Not implemented."); }
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ArchiveItemResponse { throw new Error("ArchiveItemRequest.ts - CreateServiceResponse : Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("ArchiveItemRequest.ts - GetExpectedResponseMessageCount : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("ArchiveItemRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("ArchiveItemRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("ArchiveItemRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("ArchiveItemRequest.ts - GetXmlElementName : Not implemented."); }
    Validate(): any { throw new Error("ArchiveItemRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("ArchiveItemRequest.ts - WriteElementsToXml : Not implemented."); }
    WriteIdsToXml(writer: EwsServiceXmlWriter): any { throw new Error("ArchiveItemRequest.ts - WriteIdsToXml : Not implemented."); }
}
export = ArchiveItemRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
