import {DeleteRequest} from "./DeleteRequest";
import {ItemIdWrapperList} from "../../Misc/ItemIdWrapperList";
import {AffectedTaskOccurrence} from "../../Enumerations/AffectedTaskOccurrence";
import {SendCancellationsMode} from "../../Enumerations/SendCancellationsMode";
import {ExchangeService} from "../ExchangeService";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {JsonObject} from "../JsonObject";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
export class DeleteItemRequest extends DeleteRequest<ServiceResponse> {
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


//}



