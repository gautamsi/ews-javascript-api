import { ExchangeService } from "../ExchangeService";
import { TimeZoneInfo } from "../../TimeZoneInfo";

import { ServiceResponse } from "./ServiceResponse";
import { XmlElementNames } from "../XmlElementNames";
import { EwsServiceJsonReader } from "../EwsServiceJsonReader";
import { TimeZoneDefinition } from "../../ComplexProperties/TimeZones/TimeZoneDefinition";
/**
 * internal Represents the response to a GetServerTimeZones request.
 */
export class GetServerTimeZonesResponse extends ServiceResponse {

    private timeZones: TimeZoneInfo[] = [];

    /**
     * Gets the time zones returned by the associated GetServerTimeZones request.
     * @value   The time zones.
     */
    get TimeZones(): TimeZoneInfo[] {
        return this.timeZones;
    }

    /**
	 * @internal Initializes a new instance of the **GetServerTimeZonesResponse** class.
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
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void {
        if (responseObject[XmlElementNames.TimeZoneDefinitions]) {
            for (let tzObject of EwsServiceJsonReader.ReadAsArray(responseObject[XmlElementNames.TimeZoneDefinitions], XmlElementNames.TimeZoneDefinition)) {
                let timeZoneDefinition: TimeZoneDefinition = new TimeZoneDefinition();
                timeZoneDefinition.LoadFromXmlJsObject(tzObject, service)

                this.timeZones.push(timeZoneDefinition.ToTimeZoneInfo(service, true));
            }
        }
    }
}
