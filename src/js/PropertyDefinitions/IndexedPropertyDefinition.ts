import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {XmlAttributeNames} from "../Core/XmlAttributeNames";
import {XmlElementNames} from "../Core/XmlElementNames";

import {StringHelper} from "../ExtensionMethods";

import {ServiceObjectPropertyDefinition} from "./ServiceObjectPropertyDefinition";
/**
 * Represents an indexed property definition.
 */
export class IndexedPropertyDefinition extends ServiceObjectPropertyDefinition {

    /**
     * Index attribute of IndexedFieldURI element.
     */
    private index: string;

    /**
     * Gets the index of the property.
     */
    get Index(): string { return this.index; }

    get Type(): string { return 'string'; /*return typeof string;*/ } //System.Type;

    /**
     * @internal Initializes a new instance of the **IndexedPropertyDefinition** class.
     *
     * @param   {string}   uri     The FieldURI attribute of the IndexedFieldURI element.
     * @param   {string}   index   The Index attribute of the IndexedFieldURI element.
     */
    constructor(uri: string, index: string) {
        super(uri);
        this.index = index;
    }

    /**
     * Determines whether a given indexed property definition is equal to this indexed property definition.
     *
     * @param   {any}   obj   The object to check for equality.
     * @return  {boolean}         True if the properties definitions define the same indexed property.
     */
    Equals(obj: any): boolean {
        var propertyDefinition = <IndexedPropertyDefinition>obj;
        return IndexedPropertyDefinition.IsEqualTo(propertyDefinition, this);
    }

    /**
     * Serves as a hash function for a particular type.
     *
     * @return  {number}      A hash code for the current System.Object.
     */
    GetHashCode(): number { throw new Error("IndexedPropertyDefinition.ts - GetHashCode : Not implemented."); }

    /**
     * @internal Gets the property definition's printable name.
     *
     * @return  {string}      The property definition's printable name.
     */
    GetPrintableName(): string { return StringHelper.Format("{0}:{1}", this.Uri, this.Index); }

    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetXmlElementName(): string { return XmlElementNames.IndexedFieldURI; }

    /**
     * @internal Determines whether two specified instances of IndexedPropertyDefinition are equal.
     *
     * @param   {IndexedPropertyDefinition}    extPropDef1   First extended property definition.
     * @param   {IndexedPropertyDefinition}    extPropDef2   Second extended property definition.
     * @return  {boolean}                      True if extended property definitions are equal.
     */
    static IsEqualTo(idxPropDef1: IndexedPropertyDefinition, idxPropDef2: IndexedPropertyDefinition): boolean {
        return idxPropDef1 === idxPropDef2 ||
            (idxPropDef1.Uri == idxPropDef2.Uri &&
                idxPropDef1.Index == idxPropDef2.Index);
    }

    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        super.WriteAttributesToXml(writer);
        writer.WriteAttributeValue(XmlAttributeNames.FieldIndex, this.Index);
    }
}

/**
 * IndexedPropertyDefinition interface to be used with TypeContainer - removes circular dependency
 */
export interface IIndexedPropertyDefinition {
    new (uri: string, index: string): IndexedPropertyDefinition;
}