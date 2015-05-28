import UserId = require("../../ComplexProperties/UserId");
import DelegateManagementRequestBase = require("./DelegateManagementRequestBase");
import GetDelegateResponse = require("../Responses/GetDelegateResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class GetDelegateRequest extends DelegateManagementRequestBase<GetDelegateResponse> {
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
export = GetDelegateRequest;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
