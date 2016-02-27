/**
 * TypeContainer  - contains Type as properties. Required to evade circular dependency. Initilized in ExchangeWebService.ts which is going to weave type objects.
 */
export class TypeContainer {
    constructor(parameters) {

    }
	/**
	 * Type object of Appointment (not instance)
	 */
    public static Appointment: any;
	/**
	 * Type object of MeetingRequest (not instance)
	 */
    public static MeetingRequest: any;	
	/**
	 * Type object of MeetingResponse (not instance)
	 */
    public static MeetingResponse: any;
	/**
	 * Type object of MeetingCancellation (not instance)
	 */
    public static MeetingCancellation: any;
	/**
	 * Type object of Item (not instance)
	 */
    public static Item: any;
	
    /**
     * Type object of ItemAttachment (not instance)
     */
    public static ItemAttachment: any;

    /**
     * Type object of ExchangeService (not instance)
     */
    public static ExchangeService: any;
}