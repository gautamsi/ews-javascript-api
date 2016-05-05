import {EmailUserEntityCollection} from "./EmailUserEntityCollection";
import {ExchangeService} from "../Core/ExchangeService";
import {XmlElementNames} from "../Core/XmlElementNames";

import {ExtractedEntity} from "./ExtractedEntity";
/**
 * Represents an TaskSuggestion object.
 */
export class TaskSuggestion extends ExtractedEntity {

    /**
     * Gets the meeting suggestion TaskString.
     */
    TaskString: string;

    /**
     * Gets the meeting suggestion Assignees.
     */
    Assignees: EmailUserEntityCollection;

    /**
     * @internal Initializes a new instance of the **TaskSuggestion** class.
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
                case XmlElementNames.NlgTaskString:
                    this.TaskString = jsObject[key];
                    break;
                case XmlElementNames.NlgAssignees:
                    this.Assignees = new EmailUserEntityCollection();
                    this.Assignees.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                default:
                    break;
            }
        }
    }
}