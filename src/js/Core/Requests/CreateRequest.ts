import {ServiceObject} from "../ServiceObjects/ServiceObject";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {MultiResponseServiceRequest} from "./MultiResponseServiceRequest";
import {FolderId} from "../../ComplexProperties/FolderId";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
export class CreateRequest<TServiceObject extends ServiceObject, TResponse extends ServiceResponse> extends MultiResponseServiceRequest<TResponse> {//IJsonSerializable
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


//}



