
/**
 * Represents mailbox object for preview item.
 * 
 * @sealed
 */
export class PreviewItemMailbox {

    /**
     * Mailbox id
     */
    MailboxId: string = null;

    /**
     * Primary smtp address
     */
    PrimarySmtpAddress: string = null;

    /**
     * Constructor
     */
    constructor();
    /**
     * Constructor
     *
     * @param   {string}   mailboxId            Mailbox id
     * @param   {string}   primarySmtpAddress   Primary smtp address
     */
    constructor(mailboxId: string, primarySmtpAddress: string);
    constructor(mailboxId: string = null, primarySmtpAddress: string = null) {
        this.MailboxId = mailboxId;
        this.PrimarySmtpAddress = primarySmtpAddress;
    }
}