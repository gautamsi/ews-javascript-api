import {ServiceResponse} from "./ServiceResponse";
import {DelegateUserResponse} from "./DelegateUserResponse";
import {DelegateUser} from "../../ComplexProperties/DelegateUser";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
/**
 * ## *Not Implemented* 
 */
export class DelegateManagementResponse extends ServiceResponse {
    DelegateUserResponses: DelegateUserResponse[];//System.Collections.ObjectModel.Collection<DelegateUserResponse>;
    private readDelegateUsers: boolean;
    private delegateUsers: DelegateUser[];//System.Collections.Generic.List<DelegateUser>;
    private delegateUserResponses: DelegateUserResponse[];//System.Collections.ObjectModel.Collection<DelegateUserResponse>;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("DelegateManagementResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}