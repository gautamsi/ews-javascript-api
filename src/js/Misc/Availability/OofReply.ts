import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
import {ExchangeService} from "../../Core/ExchangeService";
import {XmlElementNames} from "../../Core/XmlElementNames";
import {XmlNamespace} from "../../Enumerations/XmlNamespace";

/**
 * Represents an Out of Office response.
 */
export class OofReply {

    private culture: string = ''; //todo: implement CultureInfo //  CultureInfo.CurrentCulture.Name;
    private message: string = null;
    
    /**
     * Gets or sets the culture of the reply.
     */
    get Culture(): string {
        return this.culture;
    }
    set Culture(value: string) {
        this.culture = value;
    }
    
    /**
     * Gets or sets the culture of the reply.
     */
    get Message(): string {
        return this.message;
    }
    set Message(value: string) {
        this.message = value;
    }

    /**
     * Initializes a new instance of the **OofReply** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **OofReply** class.
     *
     * @param   {string}   message   The reply message.
     */
    constructor(message: string);
    constructor(message: string = null) {
        this.message = message;
    }

    /**
     * @internal Loads from xmlJsObject.
     *
     * @param   {any}   jsObject   The xmlJsObject object.
     * @param   {ExchangeService}   service      The service.
     */
    LoadFromXmlJsObject(jsonObject: any, service: ExchangeService): void {
        if (jsonObject["xml:lang"]) {
            this.culture = jsonObject["xml:lang"];
        }
        this.message = jsonObject[XmlElementNames.Message];
    }

    /**
     * Obtains a string representation of the reply.
     *
     * @return  {string}      A string containing the reply message.
     */
    ToString(): string { return this.Message; }
    toString(): string { return this.Message; }

    /**
     * @internal Writes an empty OofReply to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {string}                xmlElementName   Name of the XML element.
     */
    static WriteEmptyReplyToXml(writer: EwsServiceXmlWriter, xmlElementName: string): void {
        writer.WriteStartElement(XmlNamespace.Types, xmlElementName);
        writer.WriteEndElement(); // xmlElementName
    }

    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {string}                xmlElementName   Name of the XML element.
     */
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): void {
        writer.WriteStartElement(XmlNamespace.Types, xmlElementName);

        if (this.Culture != null) {
            writer.WriteAttributeValue(
                "xml",
                "lang",
                this.Culture);
        }

        writer.WriteElementValue(
            XmlNamespace.Types,
            XmlElementNames.Message,
            this.Message);

        writer.WriteEndElement(); // xmlElementName
    }
}