import {Convert} from "../../ExtensionMethods";
import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
import {EwsUtilities} from "../../Core/EwsUtilities";
import {IdFormat} from "../../Enumerations/IdFormat";
import {XmlAttributeNames} from "../../Core/XmlAttributeNames";
import {XmlElementNames} from "../../Core/XmlElementNames";

import {AlternateIdBase} from "./AlternateIdBase";
/**
 * Represents an Id expressed in a specific format.
 */
export class AlternateId extends AlternateIdBase {

    /**
     * @internal Name of schema type used for AlternateId.
     */
    static SchemaTypeName: string = "AlternateIdType";

    /**
     * Gets or sets the Id.
     */
    UniqueId: string = null;

    /**
     * Gets or sets the mailbox to which the Id belongs.
     */
    Mailbox: string = null;

    /**
     * Gets or sets the type (primary or archive) mailbox to which the Id belongs.
     */
    IsArchive: boolean = false;

    /**
     * Initializes a new instance of the **AlternateId** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **AlternateId** class.
     *
     * @param   {IdFormat}  format      The format the Id is expressed in.
     * @param   {string}    id          The Id.
     * @param   {string}    mailbox     The SMTP address of the mailbox that the Id belongs to.
     */
    constructor(format: IdFormat, id: string, mailbox: string);
    /**
     * Initializes a new instance of the **AlternateId** class.
     *
     * @param   {IdFormat}  format      The format the Id is expressed in.
     * @param   {string}    id          The Id.
     * @param   {string}    mailbox     The SMTP address of the mailbox that the Id belongs to.
     * @param   {boolean}   isArchive   Primary (false) or archive (true) mailbox.
     */
    constructor(format: IdFormat, id: string, mailbox: string, isArchive: boolean);
    constructor(format: IdFormat = IdFormat.EwsLegacyId, id: string = null, mailbox: string = null, isArchive: boolean = false) {
        super(format);
        this.UniqueId = id;
        this.Mailbox = mailbox;
        this.IsArchive = isArchive;
    }

    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetXmlElementName(): string {
        return XmlElementNames.AlternateId;
    }

    /**
     * @internal Validate this instance.
     */
    InternalValidate(): void {
        EwsUtilities.ValidateParam(this.Mailbox, "mailbox");
    }

    /**
     * @internal Loads the attributes from Xml JsObject.
     *
     * @param   {any}   responseObject   The response object.
     */
    LoadAttributesFromXmlJsObject(responseObject: any): void {
        super.LoadAttributesFromXmlJsObject(responseObject);

        this.UniqueId = responseObject[XmlAttributeNames.Id];
        this.Mailbox = responseObject[XmlAttributeNames.Mailbox];

        if (responseObject[XmlAttributeNames.IsArchive]) {

            this.IsArchive = Convert.toBool(responseObject[XmlAttributeNames.IsArchive]);
        }
    }

    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        super.WriteAttributesToXml(writer);

        writer.WriteAttributeValue(XmlAttributeNames.Id, this.UniqueId);
        writer.WriteAttributeValue(XmlAttributeNames.Mailbox, this.Mailbox);

        // this is optional attribute will default false so we will write
        // it only if it is true
        if (this.IsArchive) {
            writer.WriteAttributeValue(XmlAttributeNames.IsArchive, true);
        }
    }
}