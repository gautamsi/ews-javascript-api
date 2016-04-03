import {ServiceObjectSchemaStatic} from "./Core/ServiceObjects/Schemas/ServiceObjectSchema";
import {IIndexedPropertyDefinition} from "./PropertyDefinitions/IndexedPropertyDefinition";
import {IExtendedPropertyDefinition} from "./PropertyDefinitions/ExtendedPropertyDefinition";
/**
 * TypeContainer  - contains Type as properties. Required to evade circular dependency. Initilized in ExchangeWebService.ts which is going to weave type objects.
 */
export class TypeContainer {
    constructor(parameters) {

    }
    /**
	 * Type object of ServiceObject (not instance)
	 */
    public static ServiceObject: any;
    /**
     * Type object of Folder (not instance)
     */
    public static Folder: any;
    /**
     * Type object of CalendarFolder (not instance)
     */
    public static CalendarFolder: any;
    /**
	 * Type object of ServiceObjectSchema (not instance)
	 */
    public static ServiceObjectSchema: ServiceObjectSchemaStatic;
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
     * Type object of ItemAttachmentOf **Generic Version of ItemAttachment** (not instance)
     */
    public static ItemAttachmentOf: any;

    /**
     * Type object of ExchangeService (not instance)
     */
    public static ExchangeService: any;


    /*
     * PropertyDefinitions
     */

    /**
     * IndexedPropertyDefinition
     */
    public static IndexedPropertyDefinition: IIndexedPropertyDefinition;

    /**
     * ExtendedPropertyDefinition
     */
    public static ExtendedPropertyDefinition: IExtendedPropertyDefinition;
}