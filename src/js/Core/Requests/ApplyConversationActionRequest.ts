import MultiResponseServiceRequest = require("./MultiResponseServiceRequest");
import ConversationAction = require("../../Misc/ConversationAction");
import ExchangeService = require("../ExchangeService");
import ServiceResponse = require("../Responses/ServiceResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class ApplyConversationActionRequest extends MultiResponseServiceRequest<ServiceResponse> {//IJsonSerializable
    ConversationActions: ConversationAction[];//System.Collections.Generic.List<ConversationAction>;
    private conversationActions: ConversationAction[];//System.Collections.Generic.List<ConversationAction>;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): ServiceResponse { throw new Error("ApplyConversationActionRequest.ts - CreateServiceResponse : Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("ApplyConversationActionRequest.ts - GetExpectedResponseMessageCount : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("ApplyConversationActionRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("ApplyConversationActionRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("ApplyConversationActionRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("ApplyConversationActionRequest.ts - GetXmlElementName : Not implemented."); }
    Validate(): any { throw new Error("ApplyConversationActionRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("ApplyConversationActionRequest.ts - WriteElementsToXml : Not implemented."); }
}
export = ApplyConversationActionRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
