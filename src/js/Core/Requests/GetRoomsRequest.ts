import SimpleServiceRequestBase = require("./SimpleServiceRequestBase");
import EmailAddress = require("../../ComplexProperties/EmailAddress");
import GetRoomsResponse = require("../Responses/GetRoomsResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class GetRoomsRequest extends SimpleServiceRequestBase {
    RoomList: EmailAddress;
    private roomList: EmailAddress;
    Execute(): GetRoomsResponse { throw new Error("GetRoomsRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("GetRoomsRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("GetRoomsRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("GetRoomsRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("GetRoomsRequest.ts - ParseResponse : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("GetRoomsRequest.ts - WriteElementsToXml : Not implemented."); }
}
export = GetRoomsRequest;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
