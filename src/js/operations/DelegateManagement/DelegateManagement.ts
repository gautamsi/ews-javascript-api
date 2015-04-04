module Microsoft.Exchange.WebServices.Data {

    export class DelegateManagementRequestBase<TResponse> extends SimpleServiceRequestBase {
        Mailbox: Mailbox;
        private mailbox: Mailbox;
        CreateResponse(): TResponse { throw new Error("Not implemented."); }
        Execute(): TResponse { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class AddDelegateRequest extends DelegateManagementRequestBase<DelegateManagementResponse> {
        MeetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;
        DelegateUsers: DelegateUser[];//System.Collections.Generic.List<DelegateUser>;
        private delegateUsers: DelegateUser[];//System.Collections.Generic.List<DelegateUser>;
        private meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;
        CreateResponse(): DelegateManagementResponse{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string{ throw new Error("Not implemented.");}
        GetXmlElementName(): string{ throw new Error("Not implemented.");}
        Validate(): any{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any{ throw new Error("Not implemented.");}
    }
    export class GetDelegateRequest extends DelegateManagementRequestBase<GetDelegateResponse> {
        UserIds: UserId[];//System.Collections.Generic.List<UserId>;
        IncludePermissions: boolean;
        private userIds: UserId[];//System.Collections.Generic.List<UserId>;
        private includePermissions: boolean;
        CreateResponse(): GetDelegateResponse{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string{ throw new Error("Not implemented.");}
        GetXmlElementName(): string{ throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any{ throw new Error("Not implemented.");}
    }
    export class UpdateDelegateRequest extends DelegateManagementRequestBase<DelegateManagementResponse> {
        MeetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;
        DelegateUsers: DelegateUser[];//System.Collections.Generic.List<DelegateUser>;
        private delegateUsers: DelegateUser[];//System.Collections.Generic.List<DelegateUser>;
        private meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;
        CreateResponse(): DelegateManagementResponse{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string{ throw new Error("Not implemented.");}
        GetXmlElementName(): string{ throw new Error("Not implemented.");}
        Validate(): any{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any{ throw new Error("Not implemented.");}
    }
    export class RemoveDelegateRequest extends DelegateManagementRequestBase<DelegateManagementResponse> {
        UserIds: UserId[];//System.Collections.Generic.List<UserId>;
        private userIds: UserId[];//System.Collections.Generic.List<UserId>;
        CreateResponse(): DelegateManagementResponse{ throw new Error("Not implemented.");}
        GetMinimumRequiredServerVersion(): ExchangeVersion{ throw new Error("Not implemented.");}
        GetResponseXmlElementName(): string{ throw new Error("Not implemented.");}
        GetXmlElementName(): string{ throw new Error("Not implemented.");}
        Validate(): any{ throw new Error("Not implemented.");}
        WriteElementsToXml(writer: EwsServiceXmlWriter): any{ throw new Error("Not implemented.");}
    }


    export class DelegateManagementResponse extends ServiceResponse {
        DelegateUserResponses: DelegateUserResponse[];//System.Collections.ObjectModel.Collection<DelegateUserResponse>;
        private readDelegateUsers: boolean;
        private delegateUsers: DelegateUser[];//System.Collections.Generic.List<DelegateUser>;
        private delegateUserResponses: DelegateUserResponse[];//System.Collections.ObjectModel.Collection<DelegateUserResponse>;
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class GetDelegateResponse extends DelegateManagementResponse {
        MeetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;
        private meetingRequestsDeliveryScope: MeetingRequestsDeliveryScope;
        ReadElementsFromXml(reader: EwsServiceXmlReader): any{ throw new Error("Not implemented.");}
    }

    export class DelegateUserResponse extends ServiceResponse {
        DelegateUser: DelegateUser;
        private readDelegateUser: boolean;
        private delegateUser: DelegateUser;
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }


    export class DelegateUser extends ComplexProperty {
        UserId: UserId;
        Permissions: DelegatePermissions;
        ReceiveCopiesOfMeetingMessages: boolean;
        ViewPrivateItems: boolean;
        private userId: UserId;
        private permissions: DelegatePermissions;
        private receiveCopiesOfMeetingMessages: boolean;
        private viewPrivateItems: boolean;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        InternalValidate(): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        ValidateAddDelegate(): any { throw new Error("Not implemented."); }
        ValidateUpdateDelegate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class DelegatePermissions extends ComplexProperty {
        CalendarFolderPermissionLevel: DelegateFolderPermissionLevel;
        TasksFolderPermissionLevel: DelegateFolderPermissionLevel;
        InboxFolderPermissionLevel: DelegateFolderPermissionLevel;
        ContactsFolderPermissionLevel: DelegateFolderPermissionLevel;
        NotesFolderPermissionLevel: DelegateFolderPermissionLevel;
        JournalFolderPermissionLevel: DelegateFolderPermissionLevel;
        private delegateFolderPermissions: any;// System.Collections.Generic.Dictionary<TKey, TValue>;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        Reset(): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        ValidateAddDelegate(): any { throw new Error("Not implemented."); }
        ValidateUpdateDelegate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WritePermissionToJson(jsonProperty: JsonObject, elementName: string): any { throw new Error("Not implemented."); }
        WritePermissionToXml(writer: EwsServiceXmlWriter, xmlElementName: string): any { throw new Error("Not implemented."); }
    }

}