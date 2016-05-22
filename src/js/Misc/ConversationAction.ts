import {ConversationId} from "../ComplexProperties/ConversationId";
import {StringList} from "../ComplexProperties/StringList";
import {Flag} from "../ComplexProperties/Flag";
import {ConversationActionType} from "../Enumerations/ConversationActionType";
import {DeleteMode} from "../Enumerations/DeleteMode";
import {FolderIdWrapper} from "./FolderIdWrapper";
import {RetentionType} from "../Enumerations/RetentionType";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class ConversationAction {//IJsonSerializable
    Action: ConversationActionType;
    ConversationId: ConversationId;
    ProcessRightAway: boolean;
    Categories: StringList;
    EnableAlwaysDelete: boolean;
    IsRead: boolean;
    SuppressReadReceipts: boolean;
    DeleteType: DeleteMode;
    Flag: Flag;
    ConversationLastSyncTime: DateTime;
    ContextFolderId: FolderIdWrapper;
    DestinationFolderId: FolderIdWrapper;
    RetentionPolicyType: RetentionType;
    RetentionPolicyTagId: any;//System.Guid;
    GetXmlElementName(): string { throw new Error("ConversationAction.ts - GetXmlElementName : Not implemented."); }
    ToJson(service: ExchangeService): any { throw new Error("ConversationAction.ts - ToJson : Not implemented."); }
    Validate(): any { throw new Error("ConversationAction.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("ConversationAction.ts - WriteElementsToXml : Not implemented."); }
}


//}



