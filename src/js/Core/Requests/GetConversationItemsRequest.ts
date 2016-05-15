import {FolderIdCollection} from "../../ComplexProperties/FolderIdCollection";
import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
import {ConversationRequest} from "../../ComplexProperties/ConversationRequest";
import {PropertySet} from "../PropertySet";
import {ConversationSortOrder} from "../../Enumerations/ConversationSortOrder";
import {MailboxSearchLocation} from "../../Enumerations/MailboxSearchLocation";
import {ExchangeService} from "../ExchangeService";
import {GetConversationItemsResponse} from "../Responses/GetConversationItemsResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
/**
 * ## @internal *Not Implemented* 
 */
export class GetConversationItemsRequest extends MultiResponseServiceRequest<GetConversationItemsResponse> {//IJsonSerializable
    Conversations: ConversationRequest[];//System.Collections.Generic.List<ConversationRequest>;
    ItemProperties: PropertySet;
    FoldersToIgnore: FolderIdCollection;
    MaxItemsToReturn: number;
    SortOrder: ConversationSortOrder;
    MailboxScope: MailboxSearchLocation;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): GetConversationItemsResponse { throw new Error("GetConversationItemsRequest.ts - CreateServiceResponse : Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("GetConversationItemsRequest.ts - GetExpectedResponseMessageCount : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("GetConversationItemsRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("GetConversationItemsRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("GetConversationItemsRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("GetConversationItemsRequest.ts - GetXmlElementName : Not implemented."); }
    Validate(): any { throw new Error("GetConversationItemsRequest.ts - Validate : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("GetConversationItemsRequest.ts - WriteAttributesToXml : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("GetConversationItemsRequest.ts - WriteElementsToXml : Not implemented."); }
}