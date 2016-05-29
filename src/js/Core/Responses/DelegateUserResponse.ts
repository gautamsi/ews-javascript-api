import {DelegateUser} from "../../ComplexProperties/DelegateUser";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {ExchangeService} from "../ExchangeService";
import {XmlElementNames} from "../XmlElementNames";

import {ServiceResponse} from "./ServiceResponse";
/**
 * Represents the response to an individual delegate user manipulation (add, remove, update) operation.
 * 
 * @sealed 
 */
export class DelegateUserResponse extends ServiceResponse {

    private readDelegateUser: boolean = false;
    private delegateUser: DelegateUser = null;

    /**
     * The delegate user that was involved in the operation.
     */
    get DelegateUser(): DelegateUser {
        return this.delegateUser;
    }

    /**
     * @internal Initializes a new instance of the **DelegateUserResponse** class.
     *
     * @param   {boolean}       readDelegateUsers   if set to *true* [read delegate users].
     * @param   {DelegateUser}  delegateUser        Existing DelegateUser to use (may be null).
     */
    constructor(readDelegateUser: boolean, delegateUser: DelegateUser) {
        super();
        this.readDelegateUser = readDelegateUser;
        this.delegateUser = delegateUser;
    }

    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void {
        if (this.readDelegateUser) {
            if (this.delegateUser == null) {
                this.delegateUser = new DelegateUser();
            }

            this.delegateUser.LoadFromXmlJsObject(responseObject[XmlElementNames.DelegateUser], service);
        }
    }
}