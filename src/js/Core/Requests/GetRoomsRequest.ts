import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
import EmailAddress = require("../../ComplexProperties/EmailAddress");
import GetRoomsResponse = require("../Responses/GetRoomsResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class GetRoomsRequest extends SimpleServiceRequestBase {
    RoomList: EmailAddress;
    private roomList: EmailAddress;
    Execute(): GetRoomsResponse { throw new Error("Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("Not implemented."); }
    GetXmlElementName(): string { throw new Error("Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = GetRoomsRequest;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
