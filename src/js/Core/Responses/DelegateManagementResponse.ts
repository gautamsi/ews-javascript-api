import ServiceResponse = require("./ServiceResponse");
import DelegateUserResponse = require("./DelegateUserResponse");
import DelegateUser = require("../../ComplexProperties/DelegateUser");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
class DelegateManagementResponse extends ServiceResponse {
    DelegateUserResponses: DelegateUserResponse[];//System.Collections.ObjectModel.Collection<DelegateUserResponse>;
    private readDelegateUsers: boolean;
    private delegateUsers: DelegateUser[];//System.Collections.Generic.List<DelegateUser>;
    private delegateUserResponses: DelegateUserResponse[];//System.Collections.ObjectModel.Collection<DelegateUserResponse>;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("DelegateManagementResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}
export = DelegateManagementResponse;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
