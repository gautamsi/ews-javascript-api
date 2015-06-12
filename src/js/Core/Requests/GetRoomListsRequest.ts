import {SimpleServiceRequestBase} from "./SimpleServiceRequestBase";
import {GetRoomListsResponse} from "../Responses/GetRoomListsResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
export class GetRoomListsRequest extends SimpleServiceRequestBase {
    Execute(): GetRoomListsResponse { throw new Error("GetRoomListsRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("GetRoomListsRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("GetRoomListsRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("GetRoomListsRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("GetRoomListsRequest.ts - ParseResponse : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("GetRoomListsRequest.ts - WriteElementsToXml : Not implemented."); }
}