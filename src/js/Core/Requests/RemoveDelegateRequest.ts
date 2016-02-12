import {UserId} from "../../ComplexProperties/UserId";
import {DelegateManagementRequestBase} from "./DelegateManagementRequestBase";
import {DelegateManagementResponse} from "../Responses/DelegateManagementResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
/**
 * ## *Not Implemented* 
 */
export class RemoveDelegateRequest extends DelegateManagementRequestBase<DelegateManagementResponse> {
    UserIds: UserId[];//System.Collections.Generic.List<UserId>;
    private userIds: UserId[];//System.Collections.Generic.List<UserId>;
    CreateResponse(): DelegateManagementResponse { throw new Error("RemoveDelegateRequest.ts - CreateResponse : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("RemoveDelegateRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("RemoveDelegateRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("RemoveDelegateRequest.ts - GetXmlElementName : Not implemented."); }
    Validate(): any { throw new Error("RemoveDelegateRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("RemoveDelegateRequest.ts - WriteElementsToXml : Not implemented."); }
}