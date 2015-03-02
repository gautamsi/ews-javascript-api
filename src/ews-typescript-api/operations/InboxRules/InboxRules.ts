module Microsoft.Exchange.WebServices.Data {
    export class GetInboxRulesRequest extends SimpleServiceRequestBase {
        MailboxSmtpAddress: string;
        private mailboxSmtpAddress: string;
        Execute(): GetInboxRulesResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class UpdateInboxRulesResponse extends ServiceResponse {
        Errors: RuleOperationErrorCollection;
        private errors: RuleOperationErrorCollection;
        LoadExtraErrorDetailsFromXml(reader: EwsServiceXmlReader, xmlElementName: string): boolean { throw new Error("Not implemented."); }
    }



    export class GetInboxRulesResponse extends ServiceResponse {
        Rules: RuleCollection;
        private ruleCollection: RuleCollection;
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }





    export class RuleCollection extends ComplexProperty {
        OutlookRuleBlobExists: boolean;
        Count: number;
        Item: Rule;
        private outlookRuleBlobExists: boolean;
        private rules: any[];// System.Collections.Generic.List<T>;
        GetEnumerator(): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class Rule extends ComplexProperty {
        Id: string;
        DisplayName: string;
        Priority: number;
        IsEnabled: boolean;
        IsNotSupported: boolean;
        IsInError: boolean;
        Conditions: RulePredicates;
        Actions: RuleActions;
        Exceptions: RulePredicates;
        private ruleId: string;
        private displayName: string;
        private priority: number;
        private isEnabled: boolean;
        private isNotSupported: boolean;
        private isInError: boolean;
        private conditions: RulePredicates;
        private actions: RuleActions;
        private exceptions: RulePredicates;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        InternalValidate(): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class RuleOperationError extends ComplexProperty {
        Operation: RuleOperation;
        Count: number;
        Item: RuleError;
        private operationIndex: number;
        private operation: RuleOperation;
        private ruleErrors: RuleErrorCollection;
        GetEnumerator(): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        SetOperationByIndex(operations: any): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class RulePredicateDateRange extends ComplexProperty {
        Start: Date;
        End: Date;
        private start: Date;
        private end: Date;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        InternalValidate(): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class RulePredicates extends ComplexProperty {
        Categories: StringList;
        ContainsBodyStrings: StringList;
        ContainsHeaderStrings: StringList;
        ContainsRecipientStrings: StringList;
        ContainsSenderStrings: StringList;
        ContainsSubjectOrBodyStrings: StringList;
        ContainsSubjectStrings: StringList;
        FlaggedForAction: FlaggedForAction;
        FromAddresses: EmailAddressCollection;
        HasAttachments: boolean;
        Importance: Importance;
        IsApprovalRequest: boolean;
        IsAutomaticForward: boolean;
        IsAutomaticReply: boolean;
        IsEncrypted: boolean;
        IsMeetingRequest: boolean;
        IsMeetingResponse: boolean;
        IsNonDeliveryReport: boolean;
        IsPermissionControlled: boolean;
        IsSigned: boolean;
        IsVoicemail: boolean;
        IsReadReceipt: boolean;
        FromConnectedAccounts: StringList;
        ItemClasses: StringList;
        MessageClassifications: StringList;
        NotSentToMe: boolean;
        SentCcMe: boolean;
        SentOnlyToMe: boolean;
        SentToAddresses: EmailAddressCollection;
        SentToMe: boolean;
        SentToOrCcMe: boolean;
        Sensitivity: Sensitivity;
        WithinDateRange: RulePredicateDateRange;
        WithinSizeRange: RulePredicateSizeRange;
        private categories: StringList;
        private containsBodyStrings: StringList;
        private containsHeaderStrings: StringList;
        private containsRecipientStrings: StringList;
        private containsSenderStrings: StringList;
        private containsSubjectOrBodyStrings: StringList;
        private containsSubjectStrings: StringList;
        private flaggedForAction: FlaggedForAction;
        private fromAddresses: EmailAddressCollection;
        private fromConnectedAccounts: StringList;
        private hasAttachments: boolean;
        private importance: Importance;
        private isApprovalRequest: boolean;
        private isAutomaticForward: boolean;
        private isAutomaticReply: boolean;
        private isEncrypted: boolean;
        private isMeetingRequest: boolean;
        private isMeetingResponse: boolean;
        private isNonDeliveryReport: boolean;
        private isPermissionControlled: boolean;
        private isSigned: boolean;
        private isVoicemail: boolean;
        private isReadReceipt: boolean;
        private itemClasses: StringList;
        private messageClassifications: StringList;
        private notSentToMe: boolean;
        private sentCcMe: boolean;
        private sentOnlyToMe: boolean;
        private sentToAddresses: EmailAddressCollection;
        private sentToMe: boolean;
        private sentToOrCcMe: boolean;
        private sensitivity: Sensitivity;
        private withinDateRange: RulePredicateDateRange;
        private withinSizeRange: RulePredicateSizeRange;
        InternalValidate(): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class RulePredicateSizeRange extends ComplexProperty {
        MinimumSize: number;
        MaximumSize: number;
        private minimumSize: number;
        private maximumSize: number;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        InternalValidate(): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class RuleActions extends ComplexProperty {
        private static MobileType: string = "MOBILE";
        AssignCategories: StringList;
        CopyToFolder: FolderId;
        Delete: boolean;
        ForwardAsAttachmentToRecipients: EmailAddressCollection;
        ForwardToRecipients: EmailAddressCollection;
        MarkImportance: Importance;
        MarkAsRead: boolean;
        MoveToFolder: FolderId;
        PermanentDelete: boolean;
        RedirectToRecipients: EmailAddressCollection;
        SendSMSAlertToRecipients: MobilePhone[] /*System.Collections.ObjectModel.Collection<MobilePhone>*/;
        ServerReplyWithMessage: ItemId;
        StopProcessingRules: boolean;
        private assignCategories: StringList;
        private copyToFolder: FolderId;
        private delete: boolean;
        private forwardAsAttachmentToRecipients: EmailAddressCollection;
        private forwardToRecipients: EmailAddressCollection;
        private markImportance: Importance;
        private markAsRead: boolean;
        private moveToFolder: FolderId;
        private permanentDelete: boolean;
        private redirectToRecipients: EmailAddressCollection;
        private sendSMSAlertToRecipients: MobilePhone[] /*System.Collections.ObjectModel.Collection<MobilePhone>*/;
        private serverReplyWithMessage: ItemId;
        private stopProcessingRules: boolean;
        ConvertSMSRecipientsFromEmailAddressCollectionToMobilePhoneCollection(emailCollection: EmailAddressCollection): MobilePhone[] /*System.Collections.ObjectModel.Collection<MobilePhone>*/ { throw new Error("Not implemented."); }
        ConvertSMSRecipientsFromMobilePhoneCollectionToEmailAddressCollection(recipientCollection: MobilePhone[] /*System.Collections.ObjectModel.Collection<MobilePhone>*/): EmailAddressCollection { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        InternalValidate(): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class RuleError extends ComplexProperty {
        RuleProperty: RuleProperty;
        ErrorCode: RuleErrorCode;
        ErrorMessage: string;
        Value: string;
        private ruleProperty: RuleProperty;
        private errorCode: RuleErrorCode;
        private errorMessage: string;
        private value: string;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    }
    export class RuleOperation extends ComplexProperty {
        XmlElementName: string;
    }
    export class RuleErrorCollection extends ComplexPropertyCollection<RuleError> {
        CreateComplexProperty(xmlElementName: string): RuleError { throw new Error("Not implemented."); }
        CreateDefaultComplexProperty(): RuleError { throw new Error("Not implemented."); }
        GetCollectionItemXmlElementName(ruleValidationError: RuleError): string { throw new Error("Not implemented."); }
    }
    export class RuleOperationErrorCollection extends ComplexPropertyCollection<RuleOperationError> {
        CreateComplexProperty(xmlElementName: string): RuleOperationError { throw new Error("Not implemented."); }
        CreateDefaultComplexProperty(): RuleOperationError { throw new Error("Not implemented."); }
        GetCollectionItemXmlElementName(operationError: RuleOperationError): string { throw new Error("Not implemented."); }
    }

}