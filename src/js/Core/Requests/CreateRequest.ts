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
    AddJsonProperties(jsonRequest: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
    GetObjectCollectionXmlElementName(): string { throw new Error("Not implemented."); }
    GetParentFolderXmlElementName(): string { throw new Error("Not implemented."); }
    Validate(): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = CreateRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
