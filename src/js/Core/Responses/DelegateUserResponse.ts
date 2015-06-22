import {ServiceResponse} from "./ServiceResponse";
import {DelegateUser} from "../../ComplexProperties/DelegateUser";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
export class DelegateUserResponse extends ServiceResponse {
    DelegateUser: DelegateUser;
    private readDelegateUser: boolean;
    private delegateUser: DelegateUser;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("DelegateUserResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}



//}



