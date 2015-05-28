import ServiceObject = require("../ServiceObjects/ServiceObject");
import ServiceResponse = require("../Responses/ServiceResponse");
import CreateRequest = require("./CreateRequest");
import MessageDisposition = require("../../Enumerations/MessageDisposition");
import SendInvitationsMode = require("../../Enumerations/SendInvitationsMode");
import JsonObject = require("../JsonObject");
import ExchangeService = require("../ExchangeService");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class CreateItemRequestBase<TServiceObject extends ServiceObject, TResponse extends ServiceResponse> extends CreateRequest<TServiceObject, TResponse> {
    EmitTimeZoneHeader: boolean;
    MessageDisposition: MessageDisposition;
    SendInvitationsMode: SendInvitationsMode;
    Items: TServiceObject[];//System.Collections.Generic.IEnumerable<TServiceObject>;
    private messageDisposition: MessageDisposition;
    private sendInvitationsMode: SendInvitationsMode;
    AddJsonProperties(jsonRequest: JsonObject, service: ExchangeService): any { throw new Error("CreateItemRequestBase.ts - AddJsonProperties : Not implemented."); }
    GetObjectCollectionXmlElementName(): string { throw new Error("CreateItemRequestBase.ts - GetObjectCollectionXmlElementName : Not implemented."); }
    GetParentFolderXmlElementName(): string { throw new Error("CreateItemRequestBase.ts - GetParentFolderXmlElementName : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("CreateItemRequestBase.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("CreateItemRequestBase.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("CreateItemRequestBase.ts - GetXmlElementName : Not implemented."); }
    Validate(): any { throw new Error("CreateItemRequestBase.ts - Validate : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("CreateItemRequestBase.ts - WriteAttributesToXml : Not implemented."); }
}
export = CreateItemRequestBase;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
