import {ExchangeService} from "../Core/ExchangeService";
import {ArgumentOutOfRangeException} from "../Exceptions/ArgumentException";
import {NameResolution} from "./NameResolution";
import {EwsLogging} from "../Core/EwsLogging";
import {XmlAttributeNames} from "../Core/XmlAttributeNames";
import {XmlElementNames} from "../Core/XmlElementNames";
import {EwsServiceJsonReader} from "../Core/EwsServiceJsonReader";
import {Strings} from "../Strings";
import {Convert} from "../ExtensionMethods";
export class NameResolutionCollection { //IEnumerable<NameResolution>
    get Items(): NameResolution[] { return this.items; }
    private service: ExchangeService = null;
    private includesAllResolutions: boolean = false;
    private items: NameResolution[] = [];
    get Session(): ExchangeService {
        return this.service;
    }
    get Count(): number {
        return this.items.length;
    }
    get IncludesAllResolutions(): boolean {
        return this.includesAllResolutions;
    }
    constructor(service: ExchangeService) {
        EwsLogging.Assert(service !== null, "NameResolutionSet.ctor", "service is null.");
        this.service = service;
    }

    _getItem(index: number): NameResolution {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentOutOfRangeException("index", Strings.IndexIsOutOfRange);
        }
        return this.items[index];
    }
    GetEnumerator(): any { throw new Error("NameResolutionCollection.ts - GetEnumerator : Not implemented."); }
    LoadFromJson(jsonProperty: any, service: ExchangeService): any { throw new Error("NameResolutionCollection.ts - LoadFromJson : Not implemented."); }
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