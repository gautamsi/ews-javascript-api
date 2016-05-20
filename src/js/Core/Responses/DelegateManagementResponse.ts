import {DelegateUser} from "../../ComplexProperties/DelegateUser";
import {DelegateUserResponse} from "./DelegateUserResponse";
import {EwsServiceJsonReader} from "../EwsServiceJsonReader";
import {ExchangeService} from "../ExchangeService";
import {ServiceError} from "../../Enumerations/ServiceError";
import {XmlElementNames} from "../XmlElementNames";

import {ServiceResponse} from "./ServiceResponse";
/**
 * @internal Represents the response to a delegate managent-related operation.
 */
export class DelegateManagementResponse extends ServiceResponse {

    private readDelegateUsers: boolean = false;
    private delegateUsers: DelegateUser[] = null;
    private delegateUserResponses: DelegateUserResponse[] = null;

    /**
     * @internal Gets a collection of responses for each of the delegate users concerned by the operation.
     */
    get DelegateUserResponses(): DelegateUserResponse[] {
        return this.delegateUserResponses;
    }

    /**
     * @internal Initializes a new instance of the **DelegateManagementResponse** class.
     *
     * @param   {boolean}           readDelegateUsers   if set to *true* [read delegate users].
     * @param   {DelegateUser[]}    delegateUsers       List of existing delegate users to load.
     */
    constructor(readDelegateUsers: boolean, delegateUsers: DelegateUser[]) {
        super();
        this.readDelegateUsers = readDelegateUsers;
        this.delegateUsers = delegateUsers;
    }

    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void {
        if (this.ErrorCode === ServiceError.NoError) {
            this.delegateUserResponses = [];
        }
        let jsResponses = responseObject[XmlElementNames.ResponseMessages];
        let delegateUserIndex: number = 0;

        for (let jsResponse of EwsServiceJsonReader.ReadAsArray(jsResponses, XmlElementNames.DelegateUserResponseMessageType)) {
            let delegateUser: DelegateUser = null;
            if (this.readDelegateUsers && (this.delegateUsers != null)) {
                delegateUser = this.delegateUsers[delegateUserIndex];
            }

            let delegateUserResponse: DelegateUserResponse = new DelegateUserResponse(this.readDelegateUsers, delegateUser);

            delegateUserResponse.LoadFromXmlJsObject(jsResponse, service);

            this.delegateUserResponses.push(delegateUserResponse);

            delegateUserIndex++;
        }
    }
} 