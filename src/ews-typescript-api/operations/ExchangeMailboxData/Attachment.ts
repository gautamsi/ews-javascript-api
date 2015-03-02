module Microsoft.Exchange.WebServices.Data {
    export class CreateAttachmentRequest extends MultiResponseServiceRequest<CreateAttachmentResponse> {
        EmitTimeZoneHeader: boolean;
        Attachments: Attachment[];//System.Collections.Generic.List<Attachment>;
        ParentItemId: string;
        private parentItemId: string;
        private attachments: Attachment[];//System.Collections.Generic.List<Attachment>;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): CreateAttachmentResponse { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class GetAttachmentRequest extends MultiResponseServiceRequest<GetAttachmentResponse> {
        Attachments: Attachment[];//System.Collections.Generic.List<Attachment>;
        AttachmentIds: string[];//System.Collections.Generic.List<string>;
        AdditionalProperties: PropertyDefinitionBase[];//System.Collections.Generic.List<PropertyDefinitionBase>;
        BodyType: BodyType;
        EmitTimeZoneHeader: boolean;
        private attachments: Attachment[];//System.Collections.Generic.List<Attachment>;
        private attachmentIds: string[];//System.Collections.Generic.List<string>;
        private additionalProperties: PropertyDefinitionBase[];//System.Collections.Generic.List<PropertyDefinitionBase>;
        private bodyType: BodyType;
        AddJsonAttachmentIdToList(attachmentIds: any[]/*System.Collections.Generic.List<T>*/, attachmentId: string): any { throw new Error("Not implemented."); }
        CreateServiceResponse(service: ExchangeService, responseIndex: number): GetAttachmentResponse { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteAttachmentIdXml(writer: EwsServiceXmlWriter, attachmentId: string): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }
    export class DeleteAttachmentRequest extends MultiResponseServiceRequest<DeleteAttachmentResponse> {
        Attachments: Attachment[];//System.Collections.Generic.List<Attachment>;
        private attachments: Attachment[];//System.Collections.Generic.List<Attachment>;
        CreateServiceResponse(service: ExchangeService, responseIndex: number): DeleteAttachmentResponse { throw new Error("Not implemented."); }
        GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
        GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
        GetResponseMessageXmlElementName(): string { throw new Error("Not implemented."); }
        GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        Validate(): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

    export class CreateAttachmentResponse extends ServiceResponse {
        Attachment: Attachment;
        private attachment: Attachment;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class GetAttachmentResponse extends ServiceResponse {
        Attachment: Attachment;
        private attachment: Attachment;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }
    export class DeleteAttachmentResponse extends ServiceResponse {
        Attachment: Attachment;
        private attachment: Attachment;
        ReadElementsFromJson(responseObject: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    }

    export class Attachment extends ComplexProperty {
        Id: string;
        Name: string;
        ContentType: string;
        ContentId: string;
        ContentLocation: string;
        Size: number;
        LastModifiedTime: Date;
        IsInline: boolean;
        IsNew: boolean;
        Owner: Item;
        Service: ExchangeService;
        private owner: Item;
        private id: string;
        private name: string;
        private contentType: string;
        private contentId: string;
        private contentLocation: string;
        private size: number;
        private lastModifiedTime: Date;
        private isInline: boolean;
        private service: ExchangeService;
        GetXmlElementName(): string { throw new Error("Not implemented."); }
        InternalLoad(bodyType: BodyType, additionalProperties: any[] /*System.Collections.Generic.IEnumerable<T>*/): any { throw new Error("Not implemented."); }
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        Load(): any { throw new Error("Not implemented."); }
        LoadAttachmentIdFromJson(jsonObject: JsonObject): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        SetFieldValue(field: any, value: any): any { throw new Error("Not implemented."); }
        ThrowIfThisIsNotNew(): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        //Validate(attachmentIndex: number): any { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

}