import { HoldStatus } from "../Enumerations/HoldStatus";

/**
 * Represents mailbox hold status
 * 
 * @sealed
 */
export class MailboxHoldStatus {

    /**
     * Mailbox
     */
    Mailbox: string;

    /**
     * Hold Status
     */
    Status: HoldStatus;

    /**
     * Additional Info
     */
    AdditionalInfo: string;

    /**
     * Constructor
     */
    constructor();
    /**
     * Constructor
     *
     * @param   {string}        mailbox          Mailbox
     * @param   {HoldStatus}    status           Hold status
     * @param   {string}        additionalInfo   Additional info
     */
    constructor(mailbox: string, status: HoldStatus, additionalInfo: string);
    constructor(mailbox: string = null, status: HoldStatus = HoldStatus.NotOnHold, additionalInfo: string = null) {
        this.Mailbox = mailbox;
        this.Status = status;
        this.AdditionalInfo = additionalInfo;
    }
}