module Microsoft.Exchange.WebServices.Data {
    export class ConvertIdRequest extends MultiResponseServiceRequest<ConvertIdResponse> {
        DestinationFormat: IdFormat;
        Ids: AlternateIdBase[];//System.Collections.Generic.List<AlternateIdBase>;
        private destinationFormat: IdFormat;
        private ids: AlternateIdBase[];//System.Collections.Generic.List<AlternateIdBase>;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ConvertIdResponse { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    //not implemented in ews api form i have - ExpandDL Operation
    //not implemented in ews api form i have - GetUserPhoto Operation

    export class MarkAsJunkRequest extends MultiResponseServiceRequest<MarkAsJunkResponse> {
        ItemIds: ItemIdWrapperList;
        IsJunk: boolean;
        MoveItem: boolean;
        private itemIds: ItemIdWrapperList;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): MarkAsJunkResponse { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class ResolveNamesRequest extends MultiResponseServiceRequest<ResolveNamesResponse> {
        NameToResolve: string;
        ReturnFullContactData: boolean;
        SearchLocation: ResolveNameSearchLocation;
        ContactDataPropertySet: PropertySet;
        ParentFolderIds: FolderIdWrapperList;
        private nameToResolve: string;
        private returnFullContactData: boolean;
        private searchLocation: ResolveNameSearchLocation;
        private contactDataPropertySet: PropertySet;
        private parentFolderIds: FolderIdWrapperList;
        private static searchScopeMap: LazyMember<any/*T*/>;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): ResolveNamesResponse { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class GetPasswordExpirationDateRequest extends SimpleServiceRequestBase {
        MailboxSmtpAddress: string;
        private mailboxSmtpAddress: string;
        Execute(): GetPasswordExpirationDateResponse { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
        //ParseResponse(jsonBody: JsonObject): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }


    export class ConvertIdResponse extends ServiceResponse {
        ConvertedId: AlternateIdBase;
        private convertedId: AlternateIdBase;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class MarkAsJunkResponse extends ServiceResponse {
        MovedItemId: ItemId;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class ResolveNamesResponse extends ServiceResponse {
        Resolutions: NameResolutionCollection;
        private resolutions: NameResolutionCollection;
        InternalThrowIfNecessary(): any { throw new Error("Not implemented."); }
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class GetPasswordExpirationDateResponse extends ServiceResponse {
        PasswordExpirationDate: Date;
        private passwordExpirationDate: Date;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }


    export class NameResolution {
        Mailbox: EmailAddress;
        Contact: Contact;
        private owner: NameResolutionCollection;
        private mailbox: EmailAddress;
        private contact: Contact;
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any{ throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader): any{ throw new Error("Not implemented.");}
    }
    export class NameResolutionCollection {
        Session: ExchangeService;
        Count: number;
        IncludesAllResolutions: boolean;
        Item: NameResolution;
        private service: ExchangeService;
        private includesAllResolutions: boolean;
        private items: any[];//System.Collections.Generic.List<T>;
        GetEnumerator(): any{ throw new Error("Not implemented.");}
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any{ throw new Error("Not implemented.");}
        LoadFromXml(reader: EwsServiceXmlReader): any{ throw new Error("Not implemented.");}
    }

    export class AlternateIdBase {
        Format: IdFormat;
        GetXmlElementName(): string{ throw new Error("Not implemented.");}
        InternalToJson(jsonObject: JsonObject): any{ throw new Error("Not implemented.");}
        InternalValidate(): any{ throw new Error("Not implemented.");}
        LoadAttributesFromJson(responseObject: JsonObject): any{ throw new Error("Not implemented.");}
        LoadAttributesFromXml(reader: EwsServiceXmlReader): any{ throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any{ throw new Error("Not implemented.");}
        WriteToXml(writer: EwsServiceXmlWriter): any{ throw new Error("Not implemented.");}
    }
    export class AlternateId extends AlternateIdBase {
        UniqueId: string;
        Mailbox: string;
        IsArchive: boolean;
        GetXmlElementName(): string{ throw new Error("Not implemented.");}
        InternalToJson(jsonObject: JsonObject): any{ throw new Error("Not implemented.");}
        InternalValidate(): any{ throw new Error("Not implemented.");}
        LoadAttributesFromJson(responseObject: JsonObject): any{ throw new Error("Not implemented.");}
        LoadAttributesFromXml(reader: EwsServiceXmlReader): any{ throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any{ throw new Error("Not implemented.");}
    }
    export class AlternatePublicFolderId extends AlternateIdBase {
        FolderId: string;
        GetXmlElementName(): string{ throw new Error("Not implemented.");}
        InternalToJson(jsonObject: JsonObject): any{ throw new Error("Not implemented.");}
        LoadAttributesFromJson(responseObject: JsonObject): any{ throw new Error("Not implemented.");}
        LoadAttributesFromXml(reader: EwsServiceXmlReader): any{ throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any{ throw new Error("Not implemented.");}
    }
    export class AlternatePublicFolderItemId extends AlternatePublicFolderId {
        ItemId: string;
        private itemId: string;
        GetXmlElementName(): string{ throw new Error("Not implemented.");}
        InternalToJson(jsonObject: JsonObject): any{ throw new Error("Not implemented.");}
        LoadAttributesFromJson(responseObject: JsonObject): any{ throw new Error("Not implemented.");}
        LoadAttributesFromXml(reader: EwsServiceXmlReader): any{ throw new Error("Not implemented.");}
        WriteAttributesToXml(writer: EwsServiceXmlWriter): any{ throw new Error("Not implemented.");}
    }

}