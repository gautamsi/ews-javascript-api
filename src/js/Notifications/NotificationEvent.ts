import {DateTime} from "../DateTime";
import {EventType} from "../Enumerations/EventType";
import {ExchangeService} from "../Core/ExchangeService";
import {FolderId} from "../ComplexProperties/FolderId";

/**
 * Represents an event as exposed by push and pull notifications. 
 */
export abstract class NotificationEvent {

	/**
	 * Type of this event.
	 */
	private eventType: EventType = EventType.Status;

	/**
	 * Date and time when the event occurred.
	 */
	private timestamp: DateTime = null;

	/**
	 * Id of parent folder of the item or folder this event applies to.
	 */
	private parentFolderId: FolderId = null;

	/**
	 * Id of the old prarent foldero of the item or folder this event applies to. 
	 * This property is only meaningful when EventType is equal to either EventType.Moved or EventType.Copied. 
	 * For all other event types, oldParentFolderId will be null.
	 */
	private oldParentFolderId: FolderId = null;

	/**
	 * Gets the type of this event.
	 */
	get EventType(): EventType {
		return this.eventType;
	}

	/**
	 * Gets the date and time when the event occurred.
	 */
	get TimeStamp(): DateTime {
		return this.timestamp;
	}

	/**
	 * Gets the Id of the parent folder of the item or folder this event applie to.
	 */
	get ParentFolderId(): FolderId {
		return this.parentFolderId;
	}
	set ParentFolderId(value: FolderId) {
		this.parentFolderId = value;
	}

	/**
	 * Gets the Id of the old parent folder of the item or folder this event applies to. 
	 * OldParentFolderId is only meaningful when EventType is equal to either EventType.Moved or EventType.Copied. 
	 * For all other event types, OldParentFolderId is null.
	 */
	get OldParentFolderId(): FolderId {
		return this.oldParentFolderId;
	}
	set OldParentFolderId(value: FolderId) {
		this.oldParentFolderId = value;
	}

	/**
	 * @internal Initializes a new instance of the **NotificationEvent** class.
	 *
	 * @param   {EventType}		eventType   Type of the event.
	 * @param   {DateTime}   	timestamp   The event timestamp.
	 */
	constructor(eventType: EventType, timestamp: DateTime) {
		this.eventType = eventType;
		this.timestamp = timestamp;
	}

	/**
     * @internal Loads this NotificationEvent from XML.
     *
     * @param   {any}                 jsEvent                Json Object converted from XML.
     * @param   {ExchangeService}     service                The service.    
     */
    abstract LoadFromXmlJsObject(jsEvent: any, service: ExchangeService): void;
}