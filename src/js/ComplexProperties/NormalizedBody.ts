import {BodyType} from "../Enumerations/BodyType";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {ExchangeService} from "../Core/ExchangeService";
import {StringHelper, Convert} from '../ExtensionMethods';
import {XmlAttributeNames} from "../Core/XmlAttributeNames";
import {XmlElementNames} from "../Core/XmlElementNames";

import {ComplexProperty} from "./ComplexProperty";
/**
 * Represents the normalized body of an item - the HTML fragment representation of the body.
 */
export class NormalizedBody extends ComplexProperty {

    private bodyType: BodyType = BodyType.HTML;
    private text: string = null;
    private isTruncated: boolean = false;

    /**
     * Gets the type of the normalized body's text.
     */
    get BodyType(): BodyType {
        return this.bodyType;
    }
    set BodyType(value: BodyType) {
        this.bodyType = value;
    }

    /**
     * Gets the text of the normalized body.
     */
    get Text(): string {
        return this.text;
    }
    set Text(value: string) {
        this.text = value;
    }

    /**
     * Gets whether the body is truncated.
     */
    get IsTruncated(): boolean {
        return this.isTruncated;
    }
    set IsTruncated(value: boolean) {
        this.isTruncated = value;
    }

    /**
     * Initializes a new instance of the **NormalizedBody** class.
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
        for (let key in jsObject) {
            switch (key) {
                case XmlAttributeNames.BodyType:
                    this.bodyType = BodyType[<string>jsObject[key]];
                    break;
                case XmlAttributeNames.IsTruncated:
                    this.isTruncated = Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames.NormalizedBody:
                    this.text = jsObject[key];
                    break;
                default:
                    break;
            }
        }
    }

    /**
     * Returns a **String** that represents the current **Object**.
     *
     * @return  {string}      A **String** that represents the current **Object**.
     */
    ToString(): string { return this.Text || StringHelper.Empty; }
    toString(): string { return this.ToString(); }

    /**
     * @internal Writes attributes to XML.
     * 
     * @param {EwsServiceXmlWriter} writer  The writer.
     */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteAttributeValue(XmlAttributeNames.BodyType, this.BodyType);
    }

    /**
     * @internal Writes elements to XML.
     * 
     * @param {EwsServiceXmlWriter} writer  The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        if (!StringHelper.IsNullOrEmpty(this.Text)) {
            writer.WriteValue(this.Text, XmlElementNames.NormalizedBody);
        }
    }
}