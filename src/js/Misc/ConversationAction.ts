import ConversationId = require("../ComplexProperties/ConversationId");
import StringList = require("../ComplexProperties/StringList");
import Flag = require("../ComplexProperties/Flag");
import ConversationActionType = require("../Enumerations/ConversationActionType");
import DeleteMode = require("../Enumerations/DeleteMode");
import FolderIdWrapper = require("./FolderIdWrapper");
import RetentionType = require("../Enumerations/RetentionType");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
class ConversationAction {//IJsonSerializable
    Action: ConversationActionType;
    ConversationId: ConversationId;
    ProcessRightAway: boolean;
    Categories: StringList;
    EnableAlwaysDelete: boolean;
    IsRead: boolean;
    SuppressReadReceipts: boolean;
    DeleteType: DeleteMode;
    Flag: Flag;
    ConversationLastSyncTime: Date;
    ContextFolderId: FolderIdWrapper;
    DestinationFolderId: FolderIdWrapper;
    RetentionPolicyType: RetentionType;
    RetentionPolicyTagId: any;//System.Guid;
    GetXmlElementName(): string { throw new Error("ConversationAction.ts - GetXmlElementName : Not implemented."); }
    ToJson(service: ExchangeService): any { throw new Error("ConversationAction.ts - ToJson : Not implemented."); }
    Validate(): any { throw new Error("ConversationAction.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("ConversationAction.ts - WriteElementsToXml : Not implemented."); }
}
export = ConversationAction;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
