import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
import Mailbox = require("../../ComplexProperties/Mailbox");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class DelegateManagementRequestBase<TResponse> extends SimpleServiceRequestBase {
    Mailbox: Mailbox;
    private mailbox: Mailbox;
    CreateResponse(): TResponse { throw new Error("Not implemented."); }
    Execute(): TResponse { throw new Error("Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    Validate(): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = DelegateManagementRequestBase;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
