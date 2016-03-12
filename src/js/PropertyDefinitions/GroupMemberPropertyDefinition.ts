import {XmlElementNames} from "../Core/XmlElementNames";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {StringHelper} from "../ExtensionMethods";
import {XmlAttributeNames} from "../Core/XmlAttributeNames";

import {ServiceObjectPropertyDefinition} from "./ServiceObjectPropertyDefinition";
/**
 * @internal Represents the definition of the GroupMember property.
 */
export class GroupMemberPropertyDefinition extends ServiceObjectPropertyDefinition {

    /**
     * FieldUri of IndexedFieldURI for a group member.
     */
    private static FieldUri: string = "distributionlist:Members:Member";

    /**
     * Member key. Maps to the Index attribute of IndexedFieldURI element.
     */
    private key: string = null;

    /**
     * Gets or sets the member's key. 
     */
    get Key(): string {
        return this.key;
    }
    set Key(value: string) {
        this.key = value;
    }

    /**
     * Gets the property type.
     */
    get Type(): any {
        return "String";
    }

    /**
     * Initializes a new instance of the **GroupMemberPropertyDefinition** class without key.
     */
    constructor();
    /**
     * Initializes a new instance of the **GroupMemberPropertyDefinition** class.
     *
     * @param   {string}   key   The member's key.
     */
    constructor(key: string);
    constructor(key?: string) {
        super(GroupMemberPropertyDefinition.FieldUri);
        if (arguments.length === 1) {
            this.key = key;
        }
    }

    /**
     * @internal Gets the property definition's printable name.
     *
     * @return  {string}      The property definition's printable name.
     */
    GetPrintableName(): string { return StringHelper.Format("{0}:{1}", GroupMemberPropertyDefinition.FieldUri, this.Key); }

    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetXmlElementName(): string { return XmlElementNames.IndexedFieldURI; }

    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        super.WriteAttributesToXml(writer);
        writer.WriteAttributeValue(XmlAttributeNames.FieldIndex, this.Key);
    }
}