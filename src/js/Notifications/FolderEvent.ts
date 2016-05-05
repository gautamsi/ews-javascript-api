import {Convert} from "../ExtensionMethods";
import {DateTime} from "../DateTime";
import {EventType} from "../Enumerations/EventType";
import {ExchangeService} from "../Core/ExchangeService";
import {FolderId} from "../ComplexProperties/FolderId";
import {JsonNames} from "../Core/JsonNames";
import {XmlElementNames} from "../Core/XmlElementNames";

import {NotificationEvent} from "./NotificationEvent";
/**
 * Represents an event that applies to a folder.
 */
export class FolderEvent extends NotificationEvent {

	private folderId: FolderId = null;
	private oldFolderId: FolderId = null;

	/**
	 * The new number of unread messages. This is is only meaningful when EventType is equal to EventType.Modified. For all other event types, it's null.
	 */
	private unreadCount: number = null;

	/**
	 * Gets the Id of the folder this event applies to.
	 */
	get FolderId(): FolderId {
		return this.folderId;
	}
	
	/**
	 * Gets the Id of the folder that was moved or copied. OldFolderId is only meaningful when EventType is equal to either EventType.Moved or EventType.Copied. For all other event types, OldFolderId is null.
	 */
	get OldFolderId(): FolderId {
		return this.oldFolderId;
	}
	
	/**
	 * Gets the new number of unread messages. This is is only meaningful when EventType is equal to EventType.Modified. For all other event types, UnreadCount is null.
	 */
	get UnreadCount(): number {
		return this.unreadCount;
	}

	/**
	 * @internal Initializes a new instance of the **FolderEvent** class.
	 *
	 * @param   {EventType}		eventType   Type of the event.
	 * @param   {DateTime}   	timestamp   The event timestamp.
	 */
	constructor(eventType: EventType, timestamp: DateTime) {
		super(eventType, timestamp);
	}

	/**
     * @internal Loads from XML.
     *
     * @param   {any}                 jsEvent                Json Object converted from XML.
     * @param   {ExchangeService}     service                The service.    
     */
    LoadFromXmlJsObject(jsEvent: any, service: ExchangeService): void {
		this.folderId = new FolderId();
		this.folderId.LoadFromXmlJsObject(jsEvent[XmlElementNames.FolderId], service);

		this.ParentFolderId = new FolderId();
		this.ParentFolderId.LoadFromXmlJsObject(jsEvent[XmlElementNames.ParentFolderId], service);

		switch (this.EventType) {
			case EventType.Moved:
			case EventType.Copied:

				this.oldFolderId = new FolderId();
				this.oldFolderId.LoadFromXmlJsObject(jsEvent[JsonNames.OldFolderId], service);

				this.OldParentFolderId = new FolderId();
				this.OldParentFolderId.LoadFromXmlJsObject(jsEvent[XmlElementNames.OldParentFolderId], service);
				break;

			case EventType.Modified:
				if (jsEvent[XmlElementNames.UnreadCount]) {
					this.unreadCount = Convert.toNumber(jsEvent[XmlElementNames.UnreadCount]);
				}
				break;

			default:
				break;
		}
	}
}