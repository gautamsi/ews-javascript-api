import {UserId} from "../../ComplexProperties/UserId";
import {DelegateManagementRequestBase} from "./DelegateManagementRequestBase";
import {GetDelegateResponse} from "../Responses/GetDelegateResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
export class GetDelegateRequest extends DelegateManagementRequestBase<GetDelegateResponse> {
    UserIds: UserId[];//System.Collections.Generic.List<UserId>;
    IncludePermissions: boolean;
    private userIds: UserId[];//System.Collections.Generic.List<UserId>;
    private includePermissions: boolean;
    CreateResponse(): GetDelegateResponse { throw new Error("GetDelegateRequest.ts - CreateResponse : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("GetDelegateRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("GetDelegateRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("GetDelegateRequest.ts - GetXmlElementName : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("GetDelegateRequest.ts - WriteAttributesToXml : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("GetDelegateRequest.ts - WriteElementsToXml : Not implemented."); }
}



//}



