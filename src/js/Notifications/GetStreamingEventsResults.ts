import {NotificationGroup} from "./NotificationGroup";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EventType} from "../Enumerations/EventType";
export class GetStreamingEventsResults {
	Notifications: NotificationGroup[] /*System.Collections.ObjectModel.Collection<NotificationGroup>*/;
	private events: NotificationGroup[] /*System.Collections.ObjectModel.Collection<NotificationGroup>*/;
	LoadFromXml(reader: EwsServiceXmlReader): void { throw new Error("GetStreamingEventsResults.ts - LoadFromXml : Not implemented."); }
	LoadNotificationEventFromXml(reader: EwsServiceXmlReader, eventElementName: string, eventType: EventType, notifications: NotificationGroup): void { throw new Error("GetStreamingEventsResults.ts - LoadNotificationEventFromXml : Not implemented."); }
}






			

