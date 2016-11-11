import { EwsServiceJsonReader } from '../Core/EwsServiceJsonReader';
import { ExchangeService } from '../Core/ExchangeService';
import { HoldStatus } from "../Enumerations/HoldStatus";
import { MailboxHoldStatus } from "./MailboxHoldStatus";
import { XmlElementNames } from "../Core/XmlElementNames";

/**
 * Represents mailbox hold result
 * 
 * @sealed
 */
export class MailboxHoldResult {

    /**
     * Hold id
     */
    HoldId: string = null;

    /**
     * Query
     */
    Query: string = null;

    /**
     * Collection of mailbox status
     */
    Statuses: MailboxHoldStatus[] = null;

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     * @return  {MailboxHoldResult}              Mailbox hold object
     */
    static LoadFromXmlJsObject(jsObject: any, service: ExchangeService): MailboxHoldResult {
        let statuses: MailboxHoldStatus[] = [];
        let holdResult: MailboxHoldResult = new MailboxHoldResult();

        if (jsObject[XmlElementNames.HoldId]) {
            holdResult.HoldId = jsObject[XmlElementNames.HoldId];
        }

        if (jsObject[XmlElementNames.Query]) {
            holdResult.Query = jsObject[XmlElementNames.Query];
        }

        if (jsObject[XmlElementNames.MailboxHoldStatuses]) {
            for (let statusObject of EwsServiceJsonReader.ReadAsArray(jsObject[XmlElementNames.MailboxHoldStatuses], XmlElementNames.MailboxHoldStatus)) {

                let status: MailboxHoldStatus = new MailboxHoldStatus();

                if (statusObject[XmlElementNames.Mailbox]) {
                    status.Mailbox = statusObject[XmlElementNames.Mailbox];
                }
                if (statusObject[XmlElementNames.Status]) {
                    status.Status = HoldStatus[<string>statusObject[XmlElementNames.Status]];
                }

                if (statusObject[XmlElementNames.AdditionalInfo]) {
                    status.AdditionalInfo = statusObject[XmlElementNames.AdditionalInfo];
                }

                statuses.push(status);
            }
        }

        holdResult.Statuses = statuses.length == 0 ? null : statuses;

        return holdResult;
    }
}