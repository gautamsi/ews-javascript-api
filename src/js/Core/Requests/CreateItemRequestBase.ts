import {ServiceObject} from "../ServiceObjects/ServiceObject";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {CreateRequest} from "./CreateRequest";
import {MessageDisposition} from "../../Enumerations/MessageDisposition";
import {SendInvitationsMode} from "../../Enumerations/SendInvitationsMode";
import {JsonObject} from "../JsonObject";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
export class CreateItemRequestBase<TServiceObject extends ServiceObject, TResponse extends ServiceResponse> extends CreateRequest<TServiceObject, TResponse> {
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


//}



