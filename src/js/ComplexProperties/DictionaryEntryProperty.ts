import { ComplexProperty } from "./ComplexProperty";
import { EwsServiceXmlReader } from "../Core/EwsServiceXmlReader";
import { EwsServiceXmlWriter } from "../Core/EwsServiceXmlWriter";
import { ServiceObject } from "../Core/ServiceObjects/ServiceObject";
import { XmlAttributeNames } from "../Core/XmlAttributeNames";

/**
 * Represents an entry of a DictionaryProperty object.
 * @remarks All descendants of DictionaryEntryProperty must implement a parameterless constructor. That constructor does not have to be public.
 * @typeparam   {TKey}     The type of the key used by this dictionary.
 * [EditorBrowsable(EditorBrowsableState.Never)]
 */
export class DictionaryEntryProperty<TKey> extends ComplexProperty {

    /** ews-javascript-api specific workaround for inheritance */
    protected keyType: any;

    private key: TKey = null;

    /**
     * Gets or sets the key.
     * @value   The key.
     */
    get Key(): TKey {
        return this.key;
    }
    set Key(value: TKey) {
        this.key = value;
    }

    /**
     * @internal Initializes a new instance of the **DictionaryEntryProperty<TKey>** class.
     *
     */
    constructor();
    /**
     * @internal Initializes a new instance of the **DictionaryEntryProperty<TKey>** class.
     *
     * @param   {}   key   The key.
     */
    constructor(key: TKey);
    constructor(key?: TKey) {
        super();
        this.key = key;
    }
    /**@internal */
    ReadAttributesFromXmlJsObject(reader: EwsServiceXmlReader): void { throw new Error("DictionaryEntryProperty.ts - ReadAttributesFromXml : Not used."); }

    /**
     * @internal Writes attributes to XML.
     * @override
     * @param {EwsServiceXmlWriter} writer  The writer.
     */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteAttributeValue(XmlAttributeNames.Key, this.keyType[this.Key]);
    }

    /**
     * @internal Writes the delete update to XML.
     * @virtual
     * @param   {EwsServiceXmlWriter}   writer      The writer.
     * @param   {ServiceObject}         ewsObject   The ews object.
     * @return  {boolean}               True if update XML was written.
     */
    WriteDeleteUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject): boolean {
        return false;
    }

    /**
     * @internal Writes the set update to XML.
     * @virtual
     * @param   {EwsServiceXmlWriter}   writer                          The writer.
     * @param   {ServiceObject}         ewsObject                       The ews object.
     * @param   {string}                ownerDictionaryXmlElementName   Name of the owner dictionary XML element.
     * @return  {boolean}               True if update XML was written.
     */
    WriteSetUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject, ownerDictionaryXmlElementName: string): boolean {
        return false;
    }
}
