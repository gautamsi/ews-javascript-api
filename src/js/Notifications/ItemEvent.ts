import {DateTime} from "../DateTime";
import {EventType} from "../Enumerations/EventType";
import {ExchangeService} from "../Core/ExchangeService";
import {FolderId} from "../ComplexProperties/FolderId";
import {ItemId} from "../ComplexProperties/ItemId";
import {JsonNames} from "../Core/JsonNames";
import {XmlElementNames} from "../Core/XmlElementNames";

import {NotificationEvent} from "./NotificationEvent";
/**
 * Represents an event that applies to an item.
 */
export class ItemEvent extends NotificationEvent {

	/**
	 * Id of the item this event applies to.
	 */
	private itemId: ItemId = null;

	/**
	 * Id of the item that moved or copied. This is only meaningful when EventType is equal to either EventType.Moved or EventType.Copied. 
	 * For all other event types, it's null.
	 */
	private oldItemId: ItemId = null;

	/**
	 * Gets the Id of the item this event applies to.
	 */
	get ItemId(): ItemId {
		return this.itemId;
	}

	/**
	 * Gets the Id of the item that was moved or copied. OldItemId is only meaningful when EventType is equal to either EventType.Moved or EventType.Copied. 
	 * For all other event types, OldItemId is null.
	 */
	get OldItemId(): ItemId {
		return this.oldItemId;
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
		this.itemId = new ItemId();
		this.itemId.LoadFromXmlJsObject(jsEvent[XmlElementNames.ItemId], service);

		this.ParentFolderId = new FolderId();
		this.ParentFolderId.LoadFromXmlJsObject(jsEvent[XmlElementNames.ParentFolderId], service);

		switch (this.EventType) {
			case EventType.Moved:
			case EventType.Copied:

				this.oldItemId = new ItemId();
				this.oldItemId.LoadFromXmlJsObject(jsEvent[JsonNames.OldItemId], service);

				this.OldParentFolderId = new FolderId();
				this.OldParentFolderId.LoadFromXmlJsObject(jsEvent[XmlElementNames.OldParentFolderId], service);
				break;

			default:
				break;
		}
	}
}