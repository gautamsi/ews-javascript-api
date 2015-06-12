import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
import {Item} from "../ServiceObjects/Items/Item";
import {FolderId} from "../../ComplexProperties/FolderId";
import {ExchangeService} from "../ExchangeService";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
export class SendItemRequest extends MultiResponseServiceRequest<ServiceResponse> {//IJsonSerializable
    Items: Item[]/*System.Collections.Generic.IEnumerable<Item>*/;
    SavedCopyDestinationFolderId: FolderId;
    private items: Item[]/*System.Collections.Generic.IEnumerable<Item>;*/
    private savedCopyDestinationFolderId: FolderId;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("SendItemRequest.ts - CreateServiceResponse : Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("SendItemRequest.ts - GetExpectedResponseMessageCount : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("SendItemRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("SendItemRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("SendItemRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("SendItemRequest.ts - GetXmlElementName : Not implemented."); }
    Validate(): any { throw new Error("SendItemRequest.ts - Validate : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("SendItemRequest.ts - WriteAttributesToXml : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("SendItemRequest.ts - WriteElementsToXml : Not implemented."); }
}


//}



