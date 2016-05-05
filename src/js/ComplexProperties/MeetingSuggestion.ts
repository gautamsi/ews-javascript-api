import {DateTime} from "../DateTime";
import {EmailUserEntityCollection} from "./EmailUserEntityCollection";
import {ExchangeService} from "../Core/ExchangeService";
import {XmlElementNames} from "../Core/XmlElementNames";

import {ExtractedEntity} from "./ExtractedEntity";
/**
 * Represents an MeetingSuggestion object.
 */
export class MeetingSuggestion extends ExtractedEntity {

    /**
     * Gets the meeting suggestion Attendees.
     */
    Attendees: EmailUserEntityCollection = null;

    /**
     * Gets the meeting suggestion Location.
     */
    Location: string = null;

    /**
     * Gets the meeting suggestion Subject.
     */
    Subject: string = null;

    /**
     * Gets the meeting suggestion MeetingString.
     */
    MeetingString: string = null;

    /**
     * Gets the meeting suggestion StartTime.
     */
    StartTime: DateTime = null;

    /**
     * Gets the meeting suggestion EndTime.
     */
    EndTime: DateTime = null;

    /**
     * @internal Initializes a new instance of the **MeetingSuggestion** class.
     */
    constructor() {
        super();
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        super.LoadFromXmlJsObject(jsObject, service);

        for (let key in jsObject) {
            switch (key) {
                case XmlElementNames.NlgAttendees:
                    this.Attendees = new EmailUserEntityCollection();
                    this.Attendees.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames.NlgLocation:
                    this.Location = jsObject[key];
                    break;
                case XmlElementNames.NlgSubject:
                    this.Subject = jsObject[key];
                    break;
                case XmlElementNames.NlgMeetingString:
                    this.MeetingString = jsObject[key];
                    break;
                case XmlElementNames.NlgStartTime:
                    this.StartTime = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[key]);
                    break;
                case XmlElementNames.NlgEndTime:
                    this.EndTime = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[key]);
                    break;
                default:
                    break;
            }
        }
    }
}