import {ExchangeService} from "../Core/ExchangeService";
import {XmlElementNames} from "../Core/XmlElementNames";

import {ComplexProperty} from "./ComplexProperty";
/**
 * Represents an AQS highlight term. 
 * 
 * @sealed
 */
export class HighlightTerm extends ComplexProperty {

    /**
     * Term scope.
     */
    private scope: string = null;

    /**
     * Term value.
     */
    private value: string = null;

    /**
     * Gets term scope.
     */
    get Scope(): string {
        return this.scope;
    }

    /**
     * Gets term value.
     */
    get Value(): string {
        return this.value;
    }

    /**
     * @internal Initializes a new instance of the **HighlightTerm** class.
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
        if (jsObject[XmlElementNames.HighlightTermScope]) {
            this.scope = jsObject[XmlElementNames.HighlightTermScope];
        }

        if (jsObject[XmlElementNames.HighlightTermValue]) {
            this.value = jsObject[XmlElementNames.HighlightTermValue];
        }
    }
}