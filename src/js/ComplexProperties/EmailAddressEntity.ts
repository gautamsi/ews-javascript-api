import {ExchangeService} from "../Core/ExchangeService";
import {XmlElementNames} from "../Core/XmlElementNames";

import {ExtractedEntity} from "./ExtractedEntity";
/**
 * Represents an EmailAddressEntity object.
 */
export class EmailAddressEntity extends ExtractedEntity {
    
    /**
     * Gets the meeting suggestion Location.
     */
    EmailAddress: string;

    /**
     * @internal Initializes a new instance of the **EmailAddressEntity** class.
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
                case XmlElementNames.NlgEmailAddress:
                    this.EmailAddress = jsObject[key];
                    break;
                default:
                    break;
            }
        }
    }
}