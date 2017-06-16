import { ExtendedPropertyDefinition } from "./PropertyDefinitions/ExtendedPropertyDefinition";
import { IndexedPropertyDefinition } from "./PropertyDefinitions/IndexedPropertyDefinition";

import { ServiceObjectSchemaStatic } from "./Core/ServiceObjects/Schemas/ServiceObjectSchema";

import { AbsoluteDateTransition } from "./ComplexProperties/TimeZones/AbsoluteDateTransition";
import { AbsoluteDayOfMonthTransition } from "./ComplexProperties/TimeZones/AbsoluteDayOfMonthTransition";
import { RelativeDayOfMonthTransition } from "./ComplexProperties/TimeZones/RelativeDayOfMonthTransition";

/**
 * @internal TypeContainer  - contains Type as properties. Required to evade circular dependency. Initilized in ExchangeWebService.ts which is going to weave type objects.
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
     * Type object of ContactsFolder (not instance)
     */
    public static ContactsFolder: any;
    /**
     * Type object of SearchFolder (not instance)
     */
    public static SearchFolder: any;
    /**
     * Type object of TasksFolder (not instance)
     */
    public static TasksFolder: any;
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
    public static IndexedPropertyDefinition: typeof IndexedPropertyDefinition;

    /**
     * ExtendedPropertyDefinition
     */
    public static ExtendedPropertyDefinition: typeof ExtendedPropertyDefinition;


    /**
     * TimeZone
     */

    /**
     * Type object of AbsoluteDateTransition (not instance)
     */
    public static AbsoluteDateTransition: typeof AbsoluteDateTransition;

    /** 
     * Type object of AbsoluteDayOfMonthTransition (not instance)
    */
    public static AbsoluteDayOfMonthTransition: typeof AbsoluteDayOfMonthTransition;

    /** 
     * Type object of RelativeDayOfMonthTransition (not instance)
    */
    public static RelativeDayOfMonthTransition: typeof RelativeDayOfMonthTransition;
}
