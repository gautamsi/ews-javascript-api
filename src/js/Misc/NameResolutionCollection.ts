import { ArgumentOutOfRangeException } from "../Exceptions/ArgumentException";
import { Convert } from "../ExtensionMethods";
import { EwsLogging } from "../Core/EwsLogging";
import { EwsServiceJsonReader } from "../Core/EwsServiceJsonReader";
import { ExchangeService } from "../Core/ExchangeService";
import { IEnumerable } from "../Interfaces/IEnumerable";
import { NameResolution } from "./NameResolution";
import { Strings } from "../Strings";
import { XmlAttributeNames } from "../Core/XmlAttributeNames";
import { XmlElementNames } from "../Core/XmlElementNames";

/**
 * Represents a list of suggested name resolutions.
 * 
 * @sealed
 */
export class NameResolutionCollection implements IEnumerable<NameResolution> {

    private service: ExchangeService = null;
    private includesAllResolutions: boolean = false;
    private items: NameResolution[] = [];

    /**
     * @internal Gets the session.
     * 
     * @value   The Session.
     */
    get Session(): ExchangeService {
        return this.service;
    }

    /**
     * Gets the total number of elements in the list.
     */
    get Count(): number {
        return this.items.length;
    }

    /**
     * Gets a value indicating whether more suggested resolutions are available. ResolveName only returns a maximum of 100 name resolutions. 
     * When IncludesAllResolutions is false, there were more than 100 matching names on the server. To narrow the search, provide a more precise name to ResolveName. 
     */
    get IncludesAllResolutions(): boolean {
        return this.includesAllResolutions;
    }

    /**
     * @internal Initializes a new instance of the **NameResolutionCollection** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    constructor(service: ExchangeService) {
        EwsLogging.Assert(service !== null, "NameResolutionSet.ctor", "service is null.");
        this.service = service;
    }

    /**
     * Gets the name resolution at the specified index.
     *
     * @param   {number}   index    The index of the name resolution to get.
     * @return  {NameResolution}    The name resolution at the speicfied index.
     */
    _getItem(index: number): NameResolution {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentOutOfRangeException("index", Strings.IndexIsOutOfRange);
        }
        return this.items[index];
    }

    /**
     *  Returns an enumerator that iterates through the collection. this case this.items
     */
    GetEnumerator(): NameResolution[] {
        return this.items
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     */
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void {
        var totalItemsInView: number;
        var resolutions: any[];
        for (var key in jsonProperty) {
            switch (key) {
                case XmlAttributeNames.TotalItemsInView:
                    totalItemsInView = Convert.toNumber(jsonProperty[key]);
                    break;
                case XmlAttributeNames.IncludesLastItemInRange:
                    this.includesAllResolutions = Convert.toBool(jsonProperty[key]);
                    break;

                // This label only exists for Json objects.  The XML doesn't have a "Resolutions"
                // element.  
                // This was necessary becaue of the lack of attributes in JSON
                //
                case XmlElementNames.Resolution:
                    resolutions = EwsServiceJsonReader.ReadAsArray(jsonProperty, key);
                    for (var resolution of resolutions) {
                        var nameResolution: NameResolution = new NameResolution(this);
                        nameResolution.LoadFromXmlJsObject(resolution, service);
                        this.items.push(nameResolution);
                    }
                    break;
                default:
                    break;
            }
        }
    }
}