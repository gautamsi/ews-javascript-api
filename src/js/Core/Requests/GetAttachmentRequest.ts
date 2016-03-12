import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
import {Attachment} from "../../ComplexProperties/Attachment";
import {PropertyDefinitionBase} from "../../PropertyDefinitions/PropertyDefinitionBase";
import {BodyType} from "../../Enumerations/BodyType";
import {ExchangeService} from "../ExchangeService";
import {GetAttachmentResponse} from "../Responses/GetAttachmentResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
/**
 * ## *Not Implemented* 
 */
export class GetAttachmentRequest extends MultiResponseServiceRequest<GetAttachmentResponse> { //IJsonSerializable
    Attachments: Attachment[];//System.Collections.Generic.List<Attachment>;
    AttachmentIds: string[];//System.Collections.Generic.List<string>;
    AdditionalProperties: PropertyDefinitionBase[];//System.Collections.Generic.List<PropertyDefinitionBase>;
    BodyType: BodyType;
    EmitTimeZoneHeader: boolean;
    private attachments: Attachment[];//System.Collections.Generic.List<Attachment>;
    private attachmentIds: string[];//System.Collections.Generic.List<string>;
    private additionalProperties: PropertyDefinitionBase[];//System.Collections.Generic.List<PropertyDefinitionBase>;
    private bodyType: BodyType;
    AddJsonAttachmentIdToList(attachmentIds: any[]/*System.Collections.Generic.List<T>*/, attachmentId: string): any { throw new Error("GetAttachmentRequest.ts - AddJsonAttachmentIdToList : Not implemented."); }
    CreateServiceResponse(service: ExchangeService, responseIndex: number): GetAttachmentResponse { throw new Error("GetAttachmentRequest.ts - CreateServiceResponse : Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("GetAttachmentRequest.ts - GetExpectedResponseMessageCount : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("GetAttachmentRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("GetAttachmentRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("GetAttachmentRequest.ts - GetResponseXmlElementName : Not implemented."); }
    //GetXmlElementName(): string { throw new Error("GetAttachmentRequest.ts - GetXmlElementName : Not implemented."); }
    Validate(): any { throw new Error("GetAttachmentRequest.ts - Validate : Not implemented."); }
    WriteAttachmentIdXml(writer: EwsServiceXmlWriter, attachmentId: string): any { throw new Error("GetAttachmentRequest.ts - WriteAttachmentIdXml : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("GetAttachmentRequest.ts - WriteElementsToXml : Not implemented."); }
}