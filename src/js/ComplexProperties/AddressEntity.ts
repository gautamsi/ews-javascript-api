import {ExchangeService} from "../Core/ExchangeService";
import {XmlElementNames} from "../Core/XmlElementNames";

import {ExtractedEntity} from "./ExtractedEntity";
/**
 * Represents an AddressEntity object.
 */
export class AddressEntity extends ExtractedEntity {

    /**
     * Gets the meeting suggestion Location.
     */
    Address: string;

    /**
     * Initializes a new instance of the **AddressEntity** class.
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
                case XmlElementNames.NlgAddress:
                    this.Address = jsObject[key];
                    break;
                default:
                    break;
            }
        }
    }
}