
/**
 * The consent states enumeration
 */
export enum ConsentState {

    /**
     * User has closed the consent page or has not responded yet.
     */
    NotResponded = 0,


    /**
     * User has requested to disable the extension.
     */
    NotConsented = 1,


    /**
     * User has requested to enable the extension.
     */
    Consented = 2
}