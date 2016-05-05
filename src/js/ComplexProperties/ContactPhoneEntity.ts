import {ExchangeService} from "../Core/ExchangeService";
import {XmlElementNames} from "../Core/XmlElementNames";

import {ComplexProperty} from "./ComplexProperty";
/**
 * Represents an ContactPhoneEntity object.
 */
export class ContactPhoneEntity extends ComplexProperty {

    /**
     * Gets the phone entity OriginalPhoneString.
     */
    OriginalPhoneString: string = null;

    /**
     * Gets the phone entity PhoneString.
     */
    PhoneString: string = null;

    /**
     * Gets the phone entity Type.
     */
    Type: string = null;

    /**
     * Initializes a new instance of the **ContactPhoneEntity** class.
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