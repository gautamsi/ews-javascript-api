import {EwsServiceXmlWriter} from "../../Core/EwsServiceXmlWriter";
import {IdFormat} from "../../Enumerations/IdFormat";
import {XmlAttributeNames} from "../../Core/XmlAttributeNames";
import {XmlElementNames} from "../../Core/XmlElementNames";

import {AlternateIdBase} from "./AlternateIdBase";
/**
 * Represents the Id of a public folder expressed in a specific format.
 */
export class AlternatePublicFolderId extends AlternateIdBase {

    /**
     * @internal Name of schema type used for AlternatePublicFolderId element.
     */
    static SchemaTypeName: string = "AlternatePublicFolderIdType";

    /**
     * The Id of the public folder.
     */
    FolderId: string = null;

    /**
     * Initializes a new instance of **AlternatePublicFolderId** class.
     */
    constructor();
    /**
     * Initializes a new instance of **AlternatePublicFolderId** class.
     *
     * @param   {IdFormat}   format     The format in which the public folder Id is expressed.
     * @param   {string}   folderId   The Id of the public folder.
     */
    constructor(format: IdFormat, folderId: string);
    constructor(format: IdFormat = IdFormat.EwsLegacyId, folderId: string = null) {
        super(format);
        this.FolderId = folderId;
    }

    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetXmlElementName(): string {
        return XmlElementNames.AlternatePublicFolderId;
    }

    /**
     * @internal Loads the attributes from Xml JsObject.
     *
     * @param   {any}   responseObject   The response object.
     */
    LoadAttributesFromXmlJsObject(responseObject: any): void {
        super.LoadAttributesFromXmlJsObject(responseObject);

        this.FolderId = responseObject[XmlAttributeNames.FolderId];
    }

    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        super.WriteAttributesToXml(writer);

        writer.WriteAttributeValue(XmlAttributeNames.FolderId, this.FolderId);
    }
}