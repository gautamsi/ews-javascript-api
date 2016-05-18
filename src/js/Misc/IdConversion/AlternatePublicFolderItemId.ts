import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
import {IdFormat} from "../../Enumerations/IdFormat";
import {XmlAttributeNames} from "../../Core/XmlAttributeNames";
import {XmlElementNames} from "../../Core/XmlElementNames";

import {AlternatePublicFolderId} from "./AlternatePublicFolderId";
/**
 * Represents the Id of a public folder item expressed in a specific format.
 */
export class AlternatePublicFolderItemId extends AlternatePublicFolderId {

    /**
     * @internal Schema type associated with AlternatePublicFolderItemId.
     */
    static SchemaTypeName: string = "AlternatePublicFolderItemIdType";

    /**
     * Item id.
     */
    private itemId: string;

    /**
     * The Id of the public folder item.
     */
    public get ItemId(): string {
        return this.itemId;
    }
    public set ItemId(v: string) {
        this.itemId = v;
    }

    /**
     * Initializes a new instance of the **AlternatePublicFolderItemId** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **AlternatePublicFolderItemId** class.
     *
     * @param   {IdFormat}  format     The format in which the public folder item Id is expressed.
     * @param   {string}    folderId   The Id of the parent public folder of the public folder item.
     * @param   {string}    itemId     The Id of the public folder item.
     */
    constructor(format: IdFormat, folderId: string, itemId: string);
    constructor(format: IdFormat = IdFormat.EwsLegacyId, folderId: string = null, itemId: string = null) {
        super(format, folderId);
        this.itemId = itemId;
    }

    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetXmlElementName(): string {
        return XmlElementNames.AlternatePublicFolderItemId;
    }

    /**
     * @internal Loads the attributes from Xml JsObject.
     *
     * @param   {any}   responseObject   The response object.
     */
    LoadAttributesFromXmlJsObject(responseObject: any): void {
        super.LoadAttributesFromXmlJsObject(responseObject);

        this.itemId = responseObject[XmlAttributeNames.ItemId];
    }

    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        super.WriteAttributesToXml(writer);

        writer.WriteAttributeValue(XmlAttributeNames.ItemId, this.ItemId);
    }
}