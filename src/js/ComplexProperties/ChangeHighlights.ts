import { Convert } from "../ExtensionMethods";
import { DateTime } from "../DateTime";
import { ExchangeService } from "../Core/ExchangeService";
import { XmlElementNames } from "../Core/XmlElementNames";

import { ComplexProperty } from "./ComplexProperty";
/**
 * Encapsulates information on the changehighlights of a meeting request.
 * 
 * @sealed
 */
export class ChangeHighlights extends ComplexProperty {

    private hasLocationChanged: boolean = false;
    private location: string = null;
    private hasStartTimeChanged: boolean = false;
    private start: DateTime = null;
    private hasEndTimeChanged: boolean = false;
    private end: DateTime = null;

    /**
     * Gets a value indicating whether the location has changed.
     */
    get HasLocationChanged(): boolean {
        return this.hasLocationChanged;
    }

    /**
     * Gets the old location
     */
    get Location(): string {
        return this.location;
    }

    /**
     * Gets a value indicating whether the the start time has changed.
     */
    get HasStartTimeChanged(): boolean {
        return this.hasStartTimeChanged;
    }

    /**
     * Gets the old start date and time of the meeting.
     */
    get Start(): DateTime {
        return this.start;
    }

    /**
     * Gets a value indicating whether the the end time has changed.
     */
    get HasEndTimeChanged(): boolean {
        return this.hasEndTimeChanged;
    }

    /**
     * Gets the old end date and time of the meeting.
     */
    get End(): DateTime {
        return this.end;
    }

    /**
     * @internal Initializes a new instance of the **ChangeHighlights** class.
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
        for (let key in jsObject) {
            switch (key) {
                case XmlElementNames.HasLocationChanged:
                    this.hasLocationChanged = Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames.Location:
                    this.location = jsObject[key];
                    break;
                case XmlElementNames.HasStartTimeChanged:
                    this.hasStartTimeChanged = Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames.Start:
                    this.start = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[key]);
                    break;
                case XmlElementNames.HasEndTimeChanged:
                    this.hasEndTimeChanged = Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames.End:
                    this.end = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[key]);
                    break;
                default:
                    break;
            }
        }
    }
}