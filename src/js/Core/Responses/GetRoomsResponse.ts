import ServiceResponse = require("./ServiceResponse");
import EmailAddress = require("../../ComplexProperties/EmailAddress");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
class GetRoomsResponse extends ServiceResponse {
    Rooms: EmailAddress[];//System.Collections.ObjectModel.Collection<EmailAddress>;
    private rooms: EmailAddress[];//System.Collections.ObjectModel.Collection<EmailAddress>;
    ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
}
export = GetRoomsResponse;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
