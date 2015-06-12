import {ExtractedEntity} from "./ExtractedEntity";
import {EmailUserEntityCollection} from "./EmailUserEntityCollection";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class TaskSuggestion extends ExtractedEntity {
    TaskString: string;
    Assignees: EmailUserEntityCollection;
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("TaskSuggestion.ts - TryReadElementFromXmlJsObject : Not implemented."); }
}


//}



