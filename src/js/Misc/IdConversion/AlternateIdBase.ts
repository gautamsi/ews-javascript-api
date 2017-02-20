import { EwsServiceXmlWriter } from "../../Core/EwsServiceXmlWriter";
import { ISelfValidate } from "../../Interfaces/ISelfValidate";
import { IdFormat } from "../../Enumerations/IdFormat";
import { XmlAttributeNames } from "../../Core/XmlAttributeNames";
import { XmlNamespace } from "../../Enumerations/XmlNamespace";

/**
 * Represents the base class for Id expressed in a specific format.
 */
export abstract class AlternateIdBase implements ISelfValidate {//IJsonSerializable

    /**
     * Gets or sets the format in which the Id in expressed.
     */
    Format: IdFormat;

    /**
     * Initializes a new instance of the **AlternateIdBase** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **AlternateIdBase** class.
     *
     * @param   {IdFormat}   format   The format.
     */
    constructor(format: IdFormat);
    constructor(format: IdFormat = IdFormat.EwsLegacyId) {
        this.Format = format;
    }

    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    abstract GetXmlElementName(): string;

    /**
     * @internal Validate this instance.
     */
    InternalValidate(): void { }

    /**
     * @internal Loads the attributes from Xml JsObject.
     *
     * @param   {any}   responseObject   The response object.
     */
    LoadAttributesFromXmlJsObject(responseObject: any): void {
        this.Format = IdFormat[<string>responseObject[XmlAttributeNames.Format]];
    }

    /**
     * Validate this instance.
     * ISelfValidate.Validate
     * 
     */
    Validate(): void {
        this.InternalValidate();
    }

    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteAttributeValue(XmlAttributeNames.Format, IdFormat[this.Format]);
    }

    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteStartElement(XmlNamespace.Types, this.GetXmlElementName());

        this.WriteAttributesToXml(writer);

        writer.WriteEndElement(); // this.GetXmlElementName()
    }
}