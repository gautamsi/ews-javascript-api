import {ExchangeService} from "../Core/ExchangeService";
import {XmlElementNames} from "../Core/XmlElementNames";
import {XmlNamespace} from "../Enumerations/XmlNamespace";

import {ComplexProperty} from "./ComplexProperty";
/**
 * Represents an EmailUserEntity object.
 */
export class EmailUserEntity extends ComplexProperty {

    /**
     * Gets the EmailUser entity Name.
     */
    Name: string;

    /**
     * Gets the EmailUser entity UserId.
     */
    UserId: string;

    /**
     * Initializes a new instance of the **EmailUserEntity** class.
     */
    constructor() {
        super();
        this.Namespace = XmlNamespace.Types;
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
                case XmlElementNames.NlgName:
                    this.Name = jsObject[key]
                    break;
                case XmlElementNames.NlgUserId:
                    this.UserId = jsObject[key];
                    break;
                default:
                    break;
            }
        }
    }
}