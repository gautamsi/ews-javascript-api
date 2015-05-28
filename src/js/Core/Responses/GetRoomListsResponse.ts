import ServiceResponse = require("./ServiceResponse");
import EmailAddressCollection = require("../../ComplexProperties/EmailAddressCollection");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
class GetRoomListsResponse extends ServiceResponse {
    RoomLists: EmailAddressCollection;
    private roomLists: EmailAddressCollection;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("GetRoomListsResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}
export = GetRoomListsResponse;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
