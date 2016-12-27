
/**
 * Defines the type of Id of a ConnectingId object.
 */
export enum ConnectingIdType {

    /**
     * The connecting Id is a principal name.
     */
    PrincipalName = 0,

    /**
     * The Id is an SID.
     */
    SID = 1,

    /**
     * The Id is an SMTP address.
     */
    SmtpAddress = 2
}