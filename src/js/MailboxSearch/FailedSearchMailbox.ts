import { Convert } from '../ExtensionMethods';
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
     * @return  {FailedSearchMailbox}       Failed search mailbox.
     */
    static LoadFromXmlJsObject(jsObject: any, service: ExchangeService): FailedSearchMailbox {
        let mailbox: string = null, errorCode: number = 0, errorMessage: string = null, isArchive: boolean = false;

        if (jsObject[XmlElementNames.Mailbox]) {
            mailbox = jsObject[XmlElementNames.Mailbox];
        }

        if (jsObject[XmlElementNames.ErrorCode]) {
            errorCode = Convert.toNumber(jsObject[XmlElementNames.ErrorCode]);
        }

        if (jsObject[XmlElementNames.ErrorMessage]) {
            errorMessage = jsObject[XmlElementNames.ErrorMessage];
        }

        if (jsObject[XmlElementNames.IsArchive]) {
            isArchive = Convert.toBool(jsObject[XmlElementNames.IsArchive]);
        }

        return new FailedSearchMailbox(mailbox, errorCode, errorMessage, isArchive);
    }
}