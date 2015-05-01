class GetRoomListsResponse extends ServiceResponse {
    RoomLists: EmailAddressCollection;
    private roomLists: EmailAddressCollection;
    ReadElementsFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
}
export = GetRoomListsResponse;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
