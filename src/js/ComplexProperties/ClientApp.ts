import {ClientAppMetadata} from "./ClientAppMetadata";
import {ExchangeService} from "../Core/ExchangeService";
import {XmlElementNames} from "../Core/XmlElementNames";
import {XmlNamespace} from "../Enumerations/XmlNamespace";

import {ComplexProperty} from "./ComplexProperty";
/**
 * Represents a app in GetAppManifests response.
 * 
 * @sealed
 */
export class ClientApp extends ComplexProperty {

    /**
     * The manifest for the app.
     * 
     * internal set
     */
    Manifest: string;// System.Xml.XmlDocument; // base64 data from xml document

    /**
     * Metadata related to the app.
     * 
     * internal set
     */
    Metadata: ClientAppMetadata;

    /**
     * Initializes a new instance of the **ClientApp** class.
     */
    constructor() {
        super();
        this.Namespace = XmlNamespace.Types;
    }

    //ReadToXmlDocument(reader: EwsServiceXmlReader): any { throw new Error("ClientApp.ts - ReadToXmlDocument : Not implemented."); } //not needed.

    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        if (jsObject[XmlElementNames.Manifest]) {
            this.Manifest = jsObject[XmlElementNames.Manifest];
        }
        if (jsObject[XmlElementNames.Metadata]) {
            this.Metadata = new ClientAppMetadata();
            this.Metadata.LoadFromXmlJsObject(jsObject[XmlElementNames.Metadata], service);
        }
    }
}