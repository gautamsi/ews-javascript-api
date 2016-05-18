import {EmailAddress} from "../../ComplexProperties/EmailAddress";
import {ExchangeService} from "../ExchangeService";
import {EwsServiceJsonReader} from "../EwsServiceJsonReader";
import {XmlElementNames} from "../XmlElementNames";

import {ServiceResponse} from "./ServiceResponse";
/**
 * @internal Represents the response to a GetRooms operation.
 * 
 * @sealed
 */
export class GetRoomsResponse extends ServiceResponse {

    private rooms: EmailAddress[] = [];

    /**
     * Gets collection for all rooms returned
     */
    get Rooms(): EmailAddress[] {
        return this.rooms;
    }

    /**
     * @internal Initializes a new instance of the **GetRoomsResponse** class.
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
        this.rooms.splice(0);
        let responses = EwsServiceJsonReader.ReadAsArray(responseObject[XmlElementNames.Rooms], XmlElementNames.Room);
        for (let response of responses) {
            let emailAddress = new EmailAddress();
            emailAddress.LoadFromXmlJsObject(response[XmlElementNames.RoomId], service);
            this.rooms.push(emailAddress);
        }
    }
}