import MultiResponseServiceRequest = require("./MultiResponseServiceRequest");
import Attachment = require("../../ComplexProperties/Attachment");
import PropertyDefinitionBase = require("../../PropertyDefinitions/PropertyDefinitionBase");
import BodyType = require("../../Enumerations/BodyType");
import ExchangeService = require("../ExchangeService");
import GetAttachmentResponse = require("../Responses/GetAttachmentResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
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
    AddJsonAttachmentIdToList(attachmentIds: any[]/*System.Collections.Generic.List<T>*/, attachmentId: string): any { throw new Error("GetAttachmentRequest.ts - AddJsonAttachmentIdToList : Not implemented."); }
    CreateServiceResponse(service: ExchangeService, responseIndex: number): GetAttachmentResponse { throw new Error("GetAttachmentRequest.ts - CreateServiceResponse : Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("GetAttachmentRequest.ts - GetExpectedResponseMessageCount : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("GetAttachmentRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("GetAttachmentRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("GetAttachmentRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("GetAttachmentRequest.ts - GetXmlElementName : Not implemented."); }
    Validate(): any { throw new Error("GetAttachmentRequest.ts - Validate : Not implemented."); }
    WriteAttachmentIdXml(writer: EwsServiceXmlWriter, attachmentId: string): any { throw new Error("GetAttachmentRequest.ts - WriteAttachmentIdXml : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("GetAttachmentRequest.ts - WriteElementsToXml : Not implemented."); }
}
export = GetAttachmentRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
