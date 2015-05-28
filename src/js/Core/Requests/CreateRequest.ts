import ServiceObject = require("../ServiceObjects/ServiceObject");
import ServiceResponse = require("../Responses/ServiceResponse");
import MultiResponseServiceRequest = require("./MultiResponseServiceRequest");
import FolderId = require("../../ComplexProperties/FolderId");
import JsonObject = require("../JsonObject");
import ExchangeService = require("../ExchangeService");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class CreateRequest<TServiceObject extends ServiceObject, TResponse extends ServiceResponse> extends MultiResponseServiceRequest<TResponse> {//IJsonSerializable
    Objects: TServiceObject[];//System.Collections.Generic.IEnumerable<TServiceObject>;
    ParentFolderId: FolderId;
    private parentFolderId: FolderId;
    private objects: TServiceObject;//System.Collections.Generic.IEnumerable<TServiceObject>;
    AddJsonProperties(jsonRequest: JsonObject, service: ExchangeService): any { throw new Error("CreateRequest.ts - AddJsonProperties : Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("CreateRequest.ts - GetExpectedResponseMessageCount : Not implemented."); }
    GetObjectCollectionXmlElementName(): string { throw new Error("CreateRequest.ts - GetObjectCollectionXmlElementName : Not implemented."); }
    GetParentFolderXmlElementName(): string { throw new Error("CreateRequest.ts - GetParentFolderXmlElementName : Not implemented."); }
    Validate(): any { throw new Error("CreateRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("CreateRequest.ts - WriteElementsToXml : Not implemented."); }
}
export = CreateRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
