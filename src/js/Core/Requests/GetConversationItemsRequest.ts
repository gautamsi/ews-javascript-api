import FolderIdCollection = require("../../ComplexProperties/FolderIdCollection");
import MultiResponseServiceRequest = require("./MultiResponseServiceRequest");
import ConversationRequest = require("../../ComplexProperties/ConversationRequest");
import PropertySet = require("../PropertySet");
import ConversationSortOrder = require("../../Enumerations/ConversationSortOrder");
import MailboxSearchLocation = require("../../Enumerations/MailboxSearchLocation");
import ExchangeService = require("../ExchangeService");
import GetConversationItemsResponse = require("../Responses/GetConversationItemsResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class GetConversationItemsRequest extends MultiResponseServiceRequest<GetConversationItemsResponse> {//IJsonSerializable
    Conversations: ConversationRequest[];//System.Collections.Generic.List<ConversationRequest>;
    ItemProperties: PropertySet;
    FoldersToIgnore: FolderIdCollection;
    MaxItemsToReturn: number;
    SortOrder: ConversationSortOrder;
    MailboxScope: MailboxSearchLocation;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): GetConversationItemsResponse { throw new Error("Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
    GetXmlElementName(): string { throw new Error("Not implemented."); }
    Validate(): any { throw new Error("Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = GetConversationItemsRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
