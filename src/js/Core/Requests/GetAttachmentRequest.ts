class GetAttachmentRequest extends MultiResponseServiceRequest<GetAttachmentResponse> { //IJsonSerializable
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
export = GetAttachmentRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
