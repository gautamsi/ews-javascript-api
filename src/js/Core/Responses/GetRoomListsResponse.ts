import {EmailAddress} from "../../ComplexProperties/EmailAddress";
import {EmailAddressCollection} from "../../ComplexProperties/EmailAddressCollection";
import {EwsServiceJsonReader} from "../EwsServiceJsonReader";
import {ExchangeService} from "../ExchangeService";
import {XmlElementNames} from "../XmlElementNames";

import {ServiceResponse} from "./ServiceResponse";
/**
 * @internal Represents the response to a GetRoomLists operation.
 */
export class GetRoomListsResponse extends ServiceResponse {

    private roomLists: EmailAddressCollection = new EmailAddressCollection();

    /**
     * Gets all room list returned
     */
    public get RoomLists(): EmailAddressCollection {
        return this.roomLists;
    }

    /**
     * @internal Initializes a new instance of the **GetRoomListsResponse** class.
     */
    constructor() {
        super();
    }

    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void {
        this.roomLists.Clear();
        let responses = EwsServiceJsonReader.ReadAsArray(responseObject[XmlElementNames.RoomLists], XmlElementNames.Address);
        for (let response of responses) {
            let emailAddress = new EmailAddress();
            emailAddress.LoadFromXmlJsObject(response, service);
            this.roomLists.Add(emailAddress);
        }
    }
}