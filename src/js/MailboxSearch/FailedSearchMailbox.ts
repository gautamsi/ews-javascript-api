import { Convert } from '../ExtensionMethods';
import { EwsServiceJsonReader } from "../Core/EwsServiceJsonReader";
import { ExchangeService } from '../Core/ExchangeService';
import { XmlElementNames } from "../Core/XmlElementNames";
import { XmlNamespace } from "../Enumerations/XmlNamespace";

/**
 * Represents failed mailbox to be searched
 * 
 * @sealed
 */
export class FailedSearchMailbox {


    Mailbox: string = null;
    ErrorCode: number = 0;
    ErrorMessage: string = null;
    IsArchive: boolean = false;

    /**
     * Constructor
     *
     * @param   {string}    mailbox        Mailbox identifier
     * @param   {number}    errorCode      Error code
     * @param   {string}    errorMessage   Error message
     */
    constructor(mailbox: string, errorCode: number, errorMessage: string);
    /**
     * Constructor
     *
     * @param   {string}    mailbox        Mailbox identifier
     * @param   {number}    errorCode      Error code
     * @param   {string}    errorMessage   Error message
     * @param   {boolean}   isArchive      True if it is mailbox archive
     */
    constructor(mailbox: string, errorCode: number, errorMessage: string, isArchive: boolean);
    constructor(mailbox: string, errorCode: number, errorMessage: string, isArchive: boolean = false) {
        this.Mailbox = mailbox;
        this.ErrorCode = errorCode;
        this.ErrorMessage = errorMessage;
        this.IsArchive = isArchive;
    }


    /**
     * @internal Load failed mailboxes xml
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     * @return  {FailedSearchMailbox[]}       Failed search mailboxes.
     */
    static LoadFromXmlJsObject(jsObject: any, service: ExchangeService): FailedSearchMailbox[] {

        let failedMailboxes: FailedSearchMailbox[] = [];
        for (let failedMailboxObject of EwsServiceJsonReader.ReadAsArray(jsObject, XmlElementNames.FailedMailbox)) {

            let mailbox: string = null, errorCode: number = 0, errorMessage: string = null, isArchive: boolean = false;

            if (failedMailboxObject[XmlElementNames.Mailbox]) {
                mailbox = failedMailboxObject[XmlElementNames.Mailbox];
            }

            if (failedMailboxObject[XmlElementNames.ErrorCode]) {
                errorCode = Convert.toNumber(failedMailboxObject[XmlElementNames.ErrorCode]);
            }

            if (failedMailboxObject[XmlElementNames.ErrorMessage]) {
                errorMessage = failedMailboxObject[XmlElementNames.ErrorMessage];
            }

            if (failedMailboxObject[XmlElementNames.IsArchive]) {
                isArchive = Convert.toBool(failedMailboxObject[XmlElementNames.IsArchive]);
            }

            failedMailboxes.push(new FailedSearchMailbox(mailbox, errorCode, errorMessage, isArchive));
        }
        return failedMailboxes.length === 0 ? null : failedMailboxes;
    }
}