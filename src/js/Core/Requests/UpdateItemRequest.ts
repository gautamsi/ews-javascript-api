import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
import {MessageDisposition} from "../../Enumerations/MessageDisposition";
import {ConflictResolutionMode} from "../../Enumerations/ConflictResolutionMode";
import {SendInvitationsOrCancellationsMode} from "../../Enumerations/SendInvitationsOrCancellationsMode";
import {Item} from "../ServiceObjects/Items/Item";
import {FolderId} from "../../ComplexProperties/FolderId";
import {ExchangeService} from "../ExchangeService";
import {UpdateItemResponse} from "../Responses/UpdateItemResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
export class UpdateItemRequest extends MultiResponseServiceRequest<UpdateItemResponse> {//IJsonSerializable
    EmitTimeZoneHeader: boolean;
    MessageDisposition: MessageDisposition;
    ConflictResolutionMode: ConflictResolutionMode;
    SendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode;
    SuppressReadReceipts: boolean;
    Items: Item[]/*System.Collections.Generic.List<Item>*/;
    SavedItemsDestinationFolder: FolderId;
    private items: Item[]/*System.Collections.Generic.List<Item>*/;
    private savedItemsDestinationFolder: FolderId;
    private conflictResolutionMode: ConflictResolutionMode;
    private messageDisposition: MessageDisposition;
    private sendInvitationsOrCancellationsMode: SendInvitationsOrCancellationsMode;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): UpdateItemResponse { throw new Error("UpdateItemRequest.ts - CreateServiceResponse : Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("UpdateItemRequest.ts - GetExpectedResponseMessageCount : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("UpdateItemRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("UpdateItemRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("UpdateItemRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("UpdateItemRequest.ts - GetXmlElementName : Not implemented."); }
    Validate(): any { throw new Error("UpdateItemRequest.ts - Validate : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("UpdateItemRequest.ts - WriteAttributesToXml : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("UpdateItemRequest.ts - WriteElementsToXml : Not implemented."); }
}


//}



