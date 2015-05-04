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
    AddIdsToJson(jsonObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ArchiveItemResponse { throw new Error("Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
    GetXmlElementName(): string { throw new Error("Not implemented."); }
    Validate(): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    WriteIdsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = ArchiveItemRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
