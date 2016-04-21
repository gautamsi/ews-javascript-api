import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {ExchangeService} from "../Core/ExchangeService";
import {StringHelper} from '../ExtensionMethods';
import {XmlAttributeNames} from "../Core/XmlAttributeNames";
import {XmlElementNames} from "../Core/XmlElementNames";

import {ComplexProperty} from "./ComplexProperty";
/**
 * Represents the MIME content of an item.
 */
export abstract class MimeContentBase extends ComplexProperty {

    /**
     * characterSet returned 
     */
    private characterSet: string;

    /**
     * content received
     */
    private content: string;//byte[]

    /**
     * to set XMLElementName when reading XML JsObject value.
     */
    protected xmlElementName: string = XmlElementNames.MimeContent;

    /**
     * Gets or sets the character set of the content.
     */
    get CharacterSet(): string {
        return this.characterSet;
    }
    set CharacterSet(value: string) {
        this.SetFieldValue<string>({ getValue: () => this.characterSet, setValue: (updateValue) => { this.characterSet = updateValue } }, value);
    }

    /**
     * Gets or sets the content.  - ews-javascript-api this is base64 value without encoding applied.
     */
    get Content(): string {
        return this.content;
    }
    set Content(value: string) {
        this.SetFieldValue<string>({ getValue: () => this.content, setValue: (updateValue) => { this.content = updateValue } }, value);
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     */
    LoadFromXmlJsObject(jsObject: any/*JsonObject*/, service: ExchangeService): void {
        for (let key in jsObject) {
            switch (key) {
                case XmlAttributeNames.CharacterSet:
                    this.characterSet = jsObject[key];
                    break;
                case this.xmlElementName: //ref: text value in xml2jsobject
                    this.content = jsObject[key];;
                    break;
                default:
                    break;
            }
        }
    }

    /**
     * @internal Writes attributes to XML.
     * 
     * @param {EwsServiceXmlWriter} writer  The writer.
     */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteAttributeValue(XmlAttributeNames.CharacterSet, this.CharacterSet);
    }

    /**
     * @internal Writes elements to XML.
     * 
     * @param {EwsServiceXmlWriter} writer  The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        if (!StringHelper.IsNullOrEmpty(this.Content)) {
            writer.WriteValue(this.Content, this.xmlElementName);
            //writer.WriteBase64ElementValue(this.Content);
        }
    }
}