import ServiceResponse = require("./ServiceResponse");
import DelegateUser = require("../../ComplexProperties/DelegateUser");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
class DelegateUserResponse extends ServiceResponse {
    DelegateUser: DelegateUser;
    private readDelegateUser: boolean;
    private delegateUser: DelegateUser;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("DelegateUserResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}
export = DelegateUserResponse;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
