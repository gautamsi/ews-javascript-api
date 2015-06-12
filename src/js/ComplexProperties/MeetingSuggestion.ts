import {ExtractedEntity} from "./ExtractedEntity";
import {EmailUserEntityCollection} from "./EmailUserEntityCollection";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class MeetingSuggestion extends ExtractedEntity {
    Attendees: EmailUserEntityCollection;
    Location: string;
    Subject: string;
    MeetingString: string;
    StartTime: Date;
    EndTime: Date;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("MeetingSuggestion.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}


//}



