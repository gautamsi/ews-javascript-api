import { DateTime } from "../DateTime";
import { ExchangeService } from "../Core/ExchangeService";
import { XmlElementNames } from "../Core/XmlElementNames";

import { ComplexProperty } from "./ComplexProperty";
/**
 * Encapsulates information on the deleted occurrence of a recurring appointment.
 */
export class DeletedOccurrenceInfo extends ComplexProperty {

    /**
     * The original start date and time of the deleted occurrence.
     *
     * /remarks/    The EWS schema contains a Start property for deleted occurrences but it's really the original start date and time of the occurrence.
     */
    private originalStart: DateTime = null;

    /**
     * Gets the original start date and time of the deleted occurrence.
     */
    get OriginalStart(): DateTime {
        return this.originalStart;
    }

    /**
     * @internal Initializes a new instance of the **DeletedOccurrenceInfo** class.
     */
    constructor() {
        super();
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        if (jsObject[XmlElementNames.Start]) {
            this.originalStart = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[XmlElementNames.Start]);
        }
    }
}