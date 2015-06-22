import {ServiceResponse} from "./ServiceResponse";
import {EmailAddressCollection} from "../../ComplexProperties/EmailAddressCollection";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class GetRoomListsResponse extends ServiceResponse {
    RoomLists: EmailAddressCollection;
    private roomLists: EmailAddressCollection;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("GetRoomListsResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}



//}



