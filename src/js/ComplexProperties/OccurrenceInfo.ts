import {DateTime} from "../DateTime";
import {ExchangeService} from "../Core/ExchangeService";
import {ItemId} from "./ItemId";
import {XmlElementNames} from "../Core/XmlElementNames";

import {ComplexProperty} from "./ComplexProperty";
/**
 * Encapsulates information on the occurrence of a recurring appointment.
 */
export class OccurrenceInfo extends ComplexProperty {

    private itemId: ItemId = null;
    private start: DateTime = null;
    private end: DateTime = null;
    private originalStart: DateTime = null;

    /**
     * Gets the Id of the occurrence.
     */
    get ItemId(): ItemId {
        return this.itemId;
    }

    /**
     * Gets the start date and time of the occurrence.
     */
    get Start(): DateTime {
        return this.start;
    }

    /**
     * Gets the end date and time of the occurrence.
     */
    get End(): DateTime {
        return this.end;
    }

    /**
     * Gets the original start date and time of the occurrence.
     */
    get OriginalStart(): DateTime {
        return this.originalStart;
    }

    /**
     *  @internal Initializes a new instance of the **OccurrenceInfo** class.
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
                case XmlElementNames.ItemId:
                    this.itemId = new ItemId();
                    this.itemId.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames.Start:
                    this.start = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[key]);
                    break;
                case XmlElementNames.End:
                    this.end = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[key]);
                    break;
                case XmlElementNames.OriginalStart:
                    this.originalStart = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[key]);
                    break;
                default:
                    break;
            }
        }
    }
}