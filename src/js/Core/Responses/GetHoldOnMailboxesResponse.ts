import { ExchangeService } from "../ExchangeService";
import { MailboxHoldResult } from "../../MailboxSearch/MailboxHoldResult";
import { XmlElementNames } from "../XmlElementNames";

import { ServiceResponse } from "./ServiceResponse";
/**
 * Represents the GetHoldOnMailboxes response.
 * 
 * @sealed
 */
export class GetHoldOnMailboxesResponse extends ServiceResponse {

    private holdResult: MailboxHoldResult = null;

    /**
     * Mailbox hold result
     */
    get HoldResult(): MailboxHoldResult {
        return this.holdResult;
    }

    /**
	 * @internal Initializes a new instance of the **GetHoldOnMailboxesResponse** class.
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
    ReadElementsFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        //super.ReadElementsFromXmlJsObject(jsObject, service);

        if (jsObject[XmlElementNames.MailboxHoldResult]) {
            this.holdResult = MailboxHoldResult.LoadFromXmlJsObject(jsObject[XmlElementNames.MailboxHoldResult], service);
        }
    }
}