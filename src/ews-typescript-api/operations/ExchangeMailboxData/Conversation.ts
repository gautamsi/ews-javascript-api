module Microsoft.Exchange.WebServices.Data {
    export class ApplyConversationActionRequest extends MultiResponseServiceRequest<ServiceResponse> {
        ConversationActions: ConversationAction[];//System.Collections.Generic.List<ConversationAction>;
        private conversationActions: ConversationAction[];//System.Collections.Generic.List<ConversationAction>;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class FindConversationRequest extends SimpleServiceRequestBase {
        View: ViewBase;
        FolderId: FolderIdWrapper;
        QueryString: string;
        ReturnHighlightTerms: boolean;
        MailboxScope: MailboxSearchLocation;
        private view: ViewBase;
        private folderId: FolderIdWrapper;
        private queryString: string;
        private returnHighlightTerms: boolean;
        private mailboxScope: MailboxSearchLocation;
        Execute(): FindConversationResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        //ParseResponse(jsonBody: JsonObject): any { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class GetConversationItemsRequest extends MultiResponseServiceRequest<GetConversationItemsResponse> {
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


    export class ConversationAction {
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
        GetXmlElementName(): string{ throw new Error("Not implemented.");}
        ToJson(service: ExchangeService): any{ throw new Error("Not implemented.");}
        Validate(): any { throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any{ throw new Error("Not implemented.");}
    }

    export class FindConversationResponse extends ServiceResponse {
        Conversations: Conversation[];//System.Collections.ObjectModel.Collection<Conversation>;
        Results: FindConversationResults;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }


    export class GetConversationItemsResponse extends ServiceResponse {
        Conversation: ConversationResponse;
        private propertySet: PropertySet;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }

    export class ConversationRequest extends ComplexProperty {
        ConversationId: ConversationId;
        SyncState: string;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        InternalValidate(): any { throw new Error("Not implemented."); }
        WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any { throw new Error("Not implemented."); }
    }
    export class ConversationResponse extends ComplexProperty {
        ConversationId: ConversationId;
        SyncState: string;
        ConversationNodes: ConversationNodeCollection;
        private propertySet: PropertySet;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }





}