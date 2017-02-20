import { Convert } from "../ExtensionMethods";
import { ExchangeService } from "../Core/ExchangeService";
import { XmlElementNames } from "../Core/XmlElementNames";

/**
 * Search refiner item
 */
export class SearchRefinerItem {

    /**
     * Refiner name
     */
    Name: string = null;

    /**
     * Refiner value
     */
    Value: string = null;

    /**
     * Refiner count
     */
    Count: number = 0;

    /**
     * Refiner token, essentially comprises of an operator (i.e. ':' or '>') plus the refiner value The caller such as Sharepoint can simply append this to refiner name for query refinement
     */
    Token: string = null;

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     * @return  {SearchRefinerItem}
     */
    static LoadFromXmlJsObject(jsObject: any, service: ExchangeService): SearchRefinerItem {
        let sri: SearchRefinerItem = new SearchRefinerItem();
        sri.Name = jsObject[XmlElementNames.Name];
        sri.Value = jsObject[XmlElementNames.Value];
        sri.Count = Convert.toNumber(jsObject[XmlElementNames.Count]);
        sri.Token = jsObject[XmlElementNames.Token];
        return sri;
    }
}