import MultiResponseServiceRequest = require("./MultiResponseServiceRequest");
import MessageDisposition = require("../../Enumerations/MessageDisposition");
import ConflictResolutionMode = require("../../Enumerations/ConflictResolutionMode");
import SendInvitationsOrCancellationsMode = require("../../Enumerations/SendInvitationsOrCancellationsMode");
import Item = require("../ServiceObjects/Items/Item");
import FolderId = require("../../ComplexProperties/FolderId");
import ExchangeService = require("../ExchangeService");
import UpdateItemResponse = require("../Responses/UpdateItemResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class UpdateItemRequest extends MultiResponseServiceRequest<UpdateItemResponse> {//IJsonSerializable
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
    CreateServiceResponse(service: ExchangeService, responseIndex: number): UpdateItemResponse { throw new Error("Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
    GetXmlElementName(): string { throw new Error("Not implemented."); }
    Validate(): any { throw new Error("Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = UpdateItemRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
