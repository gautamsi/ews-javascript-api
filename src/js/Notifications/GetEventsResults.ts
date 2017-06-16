import { ArrayHelper, Convert } from "../ExtensionMethods";
import { DateTime } from "../DateTime";
import { Dictionary, DictionaryWithStringKey } from "../AltDictionary";
import { EventType } from "../Enumerations/EventType";
import { EwsServiceJsonReader } from "../Core/EwsServiceJsonReader";
import { ExchangeService } from "../Core/ExchangeService";
import { FolderEvent } from "./FolderEvent";
import { ItemEvent } from "./ItemEvent";
import { LazyMember } from "../Core/LazyMember";
import { NotificationEvent } from "./NotificationEvent";
import { XmlElementNames } from "../Core/XmlElementNames";

/**
 * Represents a collection of notification events.
 */
export class GetEventsResults {

	/**
	 * Map XML element name to notification event type.
	 * 
	 * /remarks/ 	If you add a new notification event type, you'll need to add a new entry to the dictionary here.
	 */
	private static xmlElementNameToEventTypeMap: LazyMember<Dictionary<string, EventType>> = new LazyMember<Dictionary<string, EventType>>(() => {
		var dictionary: Dictionary<string, EventType> = new DictionaryWithStringKey<EventType>();
		dictionary.Add("CopiedEvent", EventType.Copied);
		dictionary.Add("CreatedEvent", EventType.Created);
		dictionary.Add("DeletedEvent", EventType.Deleted);
		dictionary.Add("ModifiedEvent", EventType.Modified);
		dictionary.Add("MovedEvent", EventType.Moved);
		dictionary.Add("NewMailEvent", EventType.NewMail);
		dictionary.Add("StatusEvent", EventType.Status);
		dictionary.Add("FreeBusyChangedEvent", EventType.FreeBusyChanged);
		return dictionary;
	});

	/**
	 * Gets the XML element name to event type mapping.
	 * 
	 * @value	The XML element name to event type mapping.
	 */
	static get XmlElementNameToEventTypeMap(): Dictionary<string, EventType> {
		return GetEventsResults.xmlElementNameToEventTypeMap.Member;
	}

	/**
	 * Watermark in event.
	 */
	private newWatermark: string = null;

	/**
	 * Subscription id.
	 */
	private subscriptionId: string = null;

	/**
	 * Previous watermark.
	 */
	private previousWatermark: string = null;

	/**
	 * True if more events available for this subscription.
	 */
	private moreEventsAvailable: boolean = false;

	/**
	 * Collection of notification events.
	 */
	private events: NotificationEvent[] = [];

	/**
	 * @internal Gets the Id of the subscription the collection is associated with.
	 */
	get SubscriptionId(): string {
		return this.subscriptionId;
	}

	/**
	 * @internal Gets the subscription's previous watermark.
	 */
	get PreviousWatermark(): string {
		return this.previousWatermark;
	}

	/**
	 * @internal Gets the subscription's new watermark.
	 */
	get NewWatermark(): string {
		return this.newWatermark;
	}

	/**
	 * @internal Gets a value indicating whether more events are available on the Exchange server.
	 */
	get MoreEventsAvailable(): boolean {
		return this.moreEventsAvailable;
	}

	/**
	 * Gets the collection of folder events.
	 * 
	 * @value	The folder events.
	 */
	get FolderEvents(): FolderEvent[] {
		return ArrayHelper.OfType<NotificationEvent, FolderEvent>(this.events, (item) => item instanceof FolderEvent);
	}

	/**
	 * Gets the collection of item events.
	 * 
	 * @value	The item events.
	 */
	get ItemEvents(): ItemEvent[] {
		return ArrayHelper.OfType<NotificationEvent, ItemEvent>(this.events, (item) => item instanceof ItemEvent);
	}

	/**
	 * Gets the collection of all events.
	 * 
	 * @value	The events.
	 */
	get AllEvents(): NotificationEvent[] {
		return this.events;
	}

	/**
	 * @internal Initializes a new instance of the **GetEventsResults** class.
	 */
	constructor() {
	}

	/**
     * Loads the events from XML.
     *
     * @param   {any[]}               jsEventsArray         The json events array.
     * @param   {string}     		  xmlElementName		Name of the element.    
     * @param   {ExchangeService}     service               The service.    
     */
	private LoadEventsFromXmlJsObject(jsEventsArray: any[], eventElementName: string, service: ExchangeService): void {
		for (let jsEvent of jsEventsArray) {
			this.newWatermark = jsEvent[XmlElementNames.Watermark];
			let eventType: EventType = GetEventsResults.XmlElementNameToEventTypeMap.get(eventElementName);

			if (eventType == EventType.Status) {
				continue;
			}

			let timeStamp: DateTime = service.ConvertUniversalDateTimeStringToLocalDateTime(jsEvent[XmlElementNames.TimeStamp]);
			let notificationEvent: NotificationEvent;

			if (jsEvent[XmlElementNames.FolderId]) {
				notificationEvent = new FolderEvent(eventType, timeStamp);
			}
			else {
				notificationEvent = new ItemEvent(eventType, timeStamp);
			}

			notificationEvent.LoadFromXmlJsObject(jsEvent, service);

			this.events.push(notificationEvent);
		}
	}

	/**
     * @internal Loads from XML.
     *
     * @param   {any}                 eventsResponse         The events response Object converted from XML.
     * @param   {ExchangeService}     service                The service.    
     */
	LoadFromXmlJsObject(eventsResponse: any, service: ExchangeService): void {
		let response = eventsResponse;
		if (eventsResponse[XmlElementNames.Notification]) {
			response = eventsResponse[XmlElementNames.Notification];
		}
		for (let key in response) {
			switch (key) {
				case XmlElementNames.SubscriptionId:
					this.subscriptionId = response[key];
					break;
				case XmlElementNames.PreviousWatermark:
					this.previousWatermark = response[key];
					break;
				case XmlElementNames.MoreEvents:
					this.moreEventsAvailable = Convert.toBool(response[key]);
					break;
				default:
					if (GetEventsResults.XmlElementNameToEventTypeMap.containsKey(key)) {
						this.LoadEventsFromXmlJsObject(EwsServiceJsonReader.ReadAsArray(response, key), key, service);
					}
					break;
			}
		}
	}
}