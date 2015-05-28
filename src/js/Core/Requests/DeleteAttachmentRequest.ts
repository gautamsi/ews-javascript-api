import MultiResponseServiceRequest = require("./MultiResponseServiceRequest");
import Attachment = require("../../ComplexProperties/Attachment");
import ExchangeService = require("../ExchangeService");
import DeleteAttachmentResponse = require("../Responses/DeleteAttachmentResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class DeleteAttachmentRequest extends MultiResponseServiceRequest<DeleteAttachmentResponse> {//IJsonSerializable
    Attachments: Attachment[];//System.Collections.Generic.List<Attachment>;
    private attachments: Attachment[];//System.Collections.Generic.List<Attachment>;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): DeleteAttachmentResponse { throw new Error("DeleteAttachmentRequest.ts - CreateServiceResponse : Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("DeleteAttachmentRequest.ts - GetExpectedResponseMessageCount : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("DeleteAttachmentRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("DeleteAttachmentRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("DeleteAttachmentRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("DeleteAttachmentRequest.ts - GetXmlElementName : Not implemented."); }
    Validate(): any { throw new Error("DeleteAttachmentRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("DeleteAttachmentRequest.ts - WriteElementsToXml : Not implemented."); }
}
export = DeleteAttachmentRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
