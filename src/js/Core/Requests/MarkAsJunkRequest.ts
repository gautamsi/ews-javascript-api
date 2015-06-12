import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
import {ItemIdWrapperList} from "../../Misc/ItemIdWrapperList";
import {ExchangeService} from "../ExchangeService";
import {MarkAsJunkResponse} from "../Responses/MarkAsJunkResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
export class MarkAsJunkRequest extends MultiResponseServiceRequest<MarkAsJunkResponse> {//IJsonSerializable
    ItemIds: ItemIdWrapperList;
    IsJunk: boolean;
    MoveItem: boolean;
    private itemIds: ItemIdWrapperList;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): MarkAsJunkResponse { throw new Error("MarkAsJunkRequest.ts - CreateServiceResponse : Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("MarkAsJunkRequest.ts - GetExpectedResponseMessageCount : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("MarkAsJunkRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("MarkAsJunkRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("MarkAsJunkRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("MarkAsJunkRequest.ts - GetXmlElementName : Not implemented."); }
    Validate(): any { throw new Error("MarkAsJunkRequest.ts - Validate : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("MarkAsJunkRequest.ts - WriteAttributesToXml : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("MarkAsJunkRequest.ts - WriteElementsToXml : Not implemented."); }
}


//}



