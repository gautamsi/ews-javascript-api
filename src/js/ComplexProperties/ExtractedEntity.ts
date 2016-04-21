import {EmailPosition} from "../Enumerations/EmailPosition";
import {ExchangeService} from "../Core/ExchangeService";
import {XmlElementNames} from "../Core/XmlElementNames";
import {XmlNamespace} from "../Enumerations/XmlNamespace";

import {ComplexProperty} from "./ComplexProperty";
/**
 * Represents an ExtractedEntity object.
 */
export abstract class ExtractedEntity extends ComplexProperty {

    /**
     * Gets the Position.
     */
    Position: EmailPosition = EmailPosition.LatestReply;

    /**
     * Initializes a new instance of the **ExtractedEntity** class.
     */
    constructor() {
        super();
        this.Namespace = XmlNamespace.Types;
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        if (jsObject[XmlElementNames.NlgEmailPosition]) {
            this.Position = EmailPosition[<string>jsObject[XmlElementNames.NlgEmailPosition]] || this.Position;
        }
        // for (let key in jsObject) {
        //     switch (key) {
        //         case XmlElementNames.NlgEmailPosition:
        //             this.Position = EmailPosition[<string>jsObject[key]] || this.Position;
        //             break;
        //         default:
        //             break;
        //     }
        // }
    }
}