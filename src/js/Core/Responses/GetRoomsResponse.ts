import {ServiceResponse} from "./ServiceResponse";
import {EmailAddress} from "../../ComplexProperties/EmailAddress";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class GetRoomsResponse extends ServiceResponse {
    Rooms: EmailAddress[];//System.Collections.ObjectModel.Collection<EmailAddress>;
    private rooms: EmailAddress[];//System.Collections.ObjectModel.Collection<EmailAddress>;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("GetRoomsResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}



//}



