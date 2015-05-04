import MultiResponseServiceRequest = require("./MultiResponseServiceRequest");
import Attachment = require("../../ComplexProperties/Attachment");
import ExchangeService = require("../ExchangeService");
import CreateAttachmentResponse = require("../Responses/CreateAttachmentResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class CreateAttachmentRequest extends MultiResponseServiceRequest<CreateAttachmentResponse> {//IJsonSerializable
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
export = CreateAttachmentRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
