import {SimpleServiceRequestBase} from "./SimpleServiceRequestBase";
import {EmailAddress} from "../../ComplexProperties/EmailAddress";
import {GetRoomsResponse} from "../Responses/GetRoomsResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
/**
 * ## @internal *Not Implemented* 
 */
export class GetRoomsRequest extends SimpleServiceRequestBase {
    RoomList: EmailAddress;
    private roomList: EmailAddress;
    Execute(): GetRoomsResponse { throw new Error("GetRoomsRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("GetRoomsRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("GetRoomsRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("GetRoomsRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("GetRoomsRequest.ts - ParseResponse : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("GetRoomsRequest.ts - WriteElementsToXml : Not implemented."); }
}