import {DateTime} from "../DateTime";
import {EventType} from "../Enumerations/EventType";
import {EwsServiceJsonReader} from "../Core/EwsServiceJsonReader";
import {ExchangeService} from "../Core/ExchangeService";
import {FolderEvent} from "./FolderEvent";
import {GetEventsResults} from "./GetEventsResults";
import {ItemEvent} from "./ItemEvent";
import {NotificationEvent} from "./NotificationEvent";
import {NotificationGroup} from "./NotificationGroup";
import {XmlElementNames} from "../Core/XmlElementNames";

/**
 * @internal Represents a collection of notification events.
 * 
 * @sealed
 */
export class GetStreamingEventsResults {

	/**
	 * Collection of notification events.
	 */
	private events: NotificationGroup[] = [];

	/**
	 * @internal Gets the notification collection.
	 * 
	 * @value	The notification collection.
	 */
	get Notifications(): NotificationGroup[] { return this.events; }

	/**
	 * @internal Initializes a new instance of the **GetStreamingEventsResults** class.
	 */
	constructor() {
	}

	/**
     * Loads the events from XML.
     *
     * @param   {any[]}               	jsEventsArray         	The json events array.
     * @param   {string}     		  	xmlElementName			Name of the element.    
     * @param   {NotificationGroup}		notifications			Collection of notifications.    
     * @param   {ExchangeService}     	service               	The service.    
     */
	private LoadNotificationEventFromXmlJsObject(jsEventsArray: any[], eventElementName: string, notifications: NotificationGroup, service: ExchangeService): void {
		for (let jsEvent of jsEventsArray) {
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

			notifications.Events.push(notificationEvent);
		}
	}

	/**
     * @internal Loads from XML.
     *
     * @param   {any}                 eventsResponse         The events response Object converted from XML.
     * @param   {ExchangeService}     service                The service.    
     */
	LoadFromXmlJsObject(eventsResponse: any, service: ExchangeService): void {

		let streamingNotifications: any[] = EwsServiceJsonReader.ReadAsArray(eventsResponse, XmlElementNames.Notification)
		for (let streamingNotification of streamingNotifications) {

			let notifications: NotificationGroup = new NotificationGroup();
			notifications.SubscriptionId = streamingNotification[XmlElementNames.SubscriptionId];
			notifications.Events = [];

			this.events.push(notifications);

			for (let key in streamingNotification) {
				switch (key) {
					default:
						if (GetEventsResults.XmlElementNameToEventTypeMap.containsKey(key)) {
							this.LoadNotificationEventFromXmlJsObject(EwsServiceJsonReader.ReadAsArray(streamingNotification, key), key, notifications, service);
						}
						break;
				}
			}
		}
	}
}