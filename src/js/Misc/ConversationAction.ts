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
    GetXmlElementName(): string { throw new Error("Not implemented."); }
    ToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    Validate(): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = ConversationAction;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
