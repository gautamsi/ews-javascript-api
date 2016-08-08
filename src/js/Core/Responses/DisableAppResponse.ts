import {ExchangeService} from "../ExchangeService";

import {ServiceResponse} from "./ServiceResponse";
/**
 * @internal  Represents the response to a DisableApp operation.
 * Today this class doesn't add extra functionality. Keep this class here so future we can return extension info up-on installation complete.
 * 
 * @sealed 
 */
export class DisableAppResponse extends ServiceResponse {

    /**
	 * @internal Initializes a new instance of the **DisableAppResponse** class.
	 */
    constructor() {
        super();
    }

    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    ReadElementsFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        //does nothing, here to supress base class message about ReadElementsFromXmlJsObject when BatchProcessingStopped is false
    }
}