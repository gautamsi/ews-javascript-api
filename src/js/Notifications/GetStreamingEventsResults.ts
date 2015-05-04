import NotificationGroup = require("./NotificationGroup");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EventType = require("../Enumerations/EventType");
			
 class GetStreamingEventsResults {
	Notifications: NotificationGroup[] /*System.Collections.ObjectModel.Collection<NotificationGroup>*/;
	private events: NotificationGroup[] /*System.Collections.ObjectModel.Collection<NotificationGroup>*/;
	LoadFromXml(reader: EwsServiceXmlReader): void{ throw new Error("Not implemented.");}
	LoadNotificationEventFromXml(reader: EwsServiceXmlReader, eventElementName: string, eventType: EventType, notifications: NotificationGroup): void{ throw new Error("Not implemented.");}
}
export = GetStreamingEventsResults;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
