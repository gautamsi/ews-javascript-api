import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {EwsUtilities} from "../Core/EwsUtilities";
import {ExchangeService} from "../Core/ExchangeService";
import {Guid} from "../Guid";
import {StringHelper, Convert } from '../ExtensionMethods';
import {XmlAttributeNames} from "../Core/XmlAttributeNames";
import {XmlElementNames} from "../Core/XmlElementNames";

import {ComplexProperty} from "./ComplexProperty";
/**
 * Represents the retention tag of an item.
 */
export class RetentionTagBase extends ComplexProperty {

    /**
     * Xml element name.
     */
    private xmlElementName: string = null;

    /**
     * Is explicit.
     */
    private isExplicit: boolean = false;

    /**
     * Retention id.
     */
    private retentionId: Guid = null;

    /**
     * Gets or sets if the tag is explicit.
     */
    get IsExplicit(): boolean {
        return this.isExplicit;
    }
    set IsExplicit(value: boolean) {
        this.SetFieldValue<boolean>({ getValue: () => this.isExplicit, setValue: (updateValue) => { this.isExplicit = updateValue } }, value);
    }

    /**
     * Gets or sets the retention id.
     */
    get RetentionId(): Guid {
        return this.retentionId;
    }
    set RetentionId(value: Guid) {
        this.SetFieldValue<Guid>({ getValue: () => this.retentionId, setValue: (updateValue) => { this.retentionId = updateValue } }, value);
    }

    /**
     * Initializes a new instance of the **RetentionTagBase** class.
     * 
     * @param {string}  xmlElementName   Xml element name.
     */
    constructor(xmlElementName: string) {
        super();
        this.xmlElementName = xmlElementName;
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
                case XmlAttributeNames.IsExplicit:
                    this.isExplicit = Convert.toBool(jsObject[key]);
                    break;
                case this.xmlElementName:
                    this.retentionId = new Guid(jsObject[key]);
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
    ToString(): string {
        if (this.retentionId == null || this.retentionId == Guid.Empty) {
            return StringHelper.Empty;
        }
        else {
            return this.retentionId.ToString();
        }
    }
    toString(): string { return this.ToString(); }

    /**
     * @internal Writes attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteAttributeValue(XmlAttributeNames.IsExplicit, this.isExplicit);
    }

    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        if (this.retentionId != null && this.retentionId != Guid.Empty) {
            writer.WriteValue(this.retentionId.ToString(), this.xmlElementName);
        }
    }
}