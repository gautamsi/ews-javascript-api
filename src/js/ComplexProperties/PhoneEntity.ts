import {ExchangeService} from "../Core/ExchangeService";
import {XmlElementNames} from "../Core/XmlElementNames";

import {ExtractedEntity} from "./ExtractedEntity";
/**
 * Represents an PhoneEntity object.
 */
export class PhoneEntity extends ExtractedEntity {

    /**
     * Gets the phone entity OriginalPhoneString.
     */
    OriginalPhoneString: string;

    /**
     * Gets the phone entity PhoneString.
     */
    PhoneString: string;

    /**
     * Gets the phone entity Type.
     */
    Type: string;

    /**
     * @internal Initializes a new instance of the **PhoneEntity** class.
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
                case XmlElementNames.NlgOriginalPhoneString:
                    this.OriginalPhoneString = jsObject[key];
                    break;
                case XmlElementNames.NlgPhoneString:
                    this.PhoneString = jsObject[key];
                    break;
                case XmlElementNames.NlgType:
                    this.Type = jsObject[key];
                    break;
                default:
                    break;
            }
        }
    }
}