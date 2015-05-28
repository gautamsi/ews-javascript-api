import UserId = require("../../ComplexProperties/UserId");
import DelegateManagementRequestBase = require("./DelegateManagementRequestBase");
import DelegateManagementResponse = require("../Responses/DelegateManagementResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class RemoveDelegateRequest extends DelegateManagementRequestBase<DelegateManagementResponse> {
    UserIds: UserId[];//System.Collections.Generic.List<UserId>;
    private userIds: UserId[];//System.Collections.Generic.List<UserId>;
    CreateResponse(): DelegateManagementResponse { throw new Error("RemoveDelegateRequest.ts - CreateResponse : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("RemoveDelegateRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("RemoveDelegateRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("RemoveDelegateRequest.ts - GetXmlElementName : Not implemented."); }
    Validate(): any { throw new Error("RemoveDelegateRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("RemoveDelegateRequest.ts - WriteElementsToXml : Not implemented."); }
}
export = RemoveDelegateRequest;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
