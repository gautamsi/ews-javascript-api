import {ExchangeService} from "../Core/ExchangeService";
import {XmlElementNames} from "../Core/XmlElementNames";
import {XmlNamespace} from "../Enumerations/XmlNamespace";

import {ComplexProperty} from "./ComplexProperty";
/**
 * Represents a ClientAppMetadata object.
 * 
 * @sealed
 */
export class ClientAppMetadata extends ComplexProperty {

    /**
     * The End node url for the app.
     * 
     * @private set
     */
    EndNodeUrl: string;

    /**
     * The action url for the app.
     * 
     * @private set
     */
    ActionUrl: string;

    /**
     * The app status for the app.
     * 
     * @private set
     */
    AppStatus: string;

    /**
     * Initializes a new instance of the **ClientAppMetadata** class.
     */
    constructor() {
        super();
        this.Namespace = XmlNamespace.Types;
    }

    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {

        for (let key in jsObject) {
            switch (key) {
                case XmlElementNames.EndNodeUrl:
                    this.EndNodeUrl = <string>jsObject[key];
                    break;
                case XmlElementNames.ActionUrl:
                    this.ActionUrl = <string>jsObject[key];
                    break;
                case XmlElementNames.AppStatus:
                    this.AppStatus = <string>jsObject[key];
                    break;
                default:
                    break;
            }
        }
    }
}