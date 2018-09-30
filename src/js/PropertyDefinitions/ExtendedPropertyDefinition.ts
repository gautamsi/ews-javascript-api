import { ArgumentOutOfRangeException } from "../Exceptions/ArgumentException";
import { DefaultExtendedPropertySet } from "../Enumerations/DefaultExtendedPropertySet";
import { EwsServiceXmlWriter } from "../Core/EwsServiceXmlWriter";
import { ExchangeVersion } from "../Enumerations/ExchangeVersion";
import { Guid } from "../Guid";
import { MapiPropertyType } from "../Enumerations/MapiPropertyType";
import { PropertyDefinitionBase } from "./PropertyDefinitionBase";
import { StringHelper, Convert } from "../ExtensionMethods";
import { Strings } from "../Strings";
import { XmlAttributeNames } from "../Core/XmlAttributeNames";
import { XmlElementNames } from "../Core/XmlElementNames";
import { isNullOrUndefined } from "util";

/**
 * Represents the definition of an extended property.
 */
export class ExtendedPropertyDefinition extends PropertyDefinitionBase {

    private static FieldFormat: string = "{0}: {1} ";
    private static PropertySetFieldName: string = "PropertySet";
    private static PropertySetIdFieldName: string = "PropertySetId";
    private static TagFieldName: string = "Tag";
    private static NameFieldName: string = "Name";
    private static IdFieldName: string = "Id";
    private static MapiTypeFieldName: string = "MapiType";

    private propertySet: DefaultExtendedPropertySet;
    private propertySetId: Guid;
    private tag: number;
    private name: string;
    private id: number;
    private mapiType: MapiPropertyType;

    /**
     * @Nullable Gets the Id of the extended property.
     */
    get Id(): number { return this.id; }

    /**
     * Gets the MAPI type of the extended property.
     */
    get MapiType(): MapiPropertyType { return this.mapiType; }

    /**
     * Gets the name of the extended property.
     */
    get Name(): string { return this.name || ((typeof this.tag === 'undefined') ? null : this.tag.toString()); }

    /**
     * @Nullable Gets the property set of the extended property.
     */
    get PropertySet(): DefaultExtendedPropertySet { return this.propertySet; }

    /**
     * @Nullable Gets the property set Id or the extended property.
     * */
    get PropertySetId(): Guid { return this.propertySetId; }

    /**
     * @Nullable Gets the extended property's tag.
     */
    get Tag(): number { return this.tag; }

    /**
     * Gets the minimum Exchange version that supports this extended property.
     *
     * @value {ExchangeVersion} The version.     
     */
    get Version(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }

    /**
     * Gets the property type.
     */
    Type: any;// System.Type;

    /**
     * @internal Initializes a new instance of the **ExtendedPropertyDefinition** class.
     */
    constructor();
    /**
     * @internal Initializes a new instance of the **ExtendedPropertyDefinition** class.
     *
     * @param   {MapiPropertyType}  mapiType      The MAPI type of the extended property.
     */
    constructor(mapiType: MapiPropertyType);
    /**
     * Initializes a new instance of the **ExtendedPropertyDefinition** class.
     *
     * @param   {number}            tag        The tag of the extended property.
     * @param   {MapiPropertyType}  mapiType      The MAPI type of the extended property.
     */
    constructor(tag: number, mapiType: MapiPropertyType);
    /**
     * Initializes a new instance of the **ExtendedPropertyDefinition** class.
     *
     * @param   {DefaultExtendedPropertySet}    propertySet   The extended property set of the extended property.
     * @param   {string}                        name          The name of the extended property.
     * @param   {MapiPropertyType}              mapiType      The MAPI type of the extended property.
     */
    constructor(propertySet: DefaultExtendedPropertySet, name: string, mapiType: MapiPropertyType);
    /**
     * Initializes a new instance of the **ExtendedPropertyDefinition** class.
     *
     * @param   {DefaultExtendedPropertySet}    propertySet   The extended property set of the extended property.
     * @param   {number}                        id            The Id of the extended property.
     * @param   {MapiPropertyType}              mapiType      The MAPI type of the extended property.
     */
    constructor(propertySet: DefaultExtendedPropertySet, id: number, mapiType: MapiPropertyType);
    /**
     * Initializes a new instance of the **ExtendedPropertyDefinition** class.
     *
     * @param   {Guid}              propertySetId   The property set Id of the extended property.
     * @param   {string}            name          The name of the extended property.
     * @param   {MapiPropertyType}  mapiType      The MAPI type of the extended property.
     */
    constructor(propertySetId: Guid, name: string, mapiType: MapiPropertyType);
    /**
     * Initializes a new instance of the **ExtendedPropertyDefinition** class.
     *
     * @param   {Guid}              propertySetId   The property set Id of the extended property.
     * @param   {number}            id            The Id of the extended property.
     * @param   {MapiPropertyType}  mapiType      The MAPI type of the extended property.
     */
    constructor(propertySetId: Guid, id: number, mapiType: MapiPropertyType);
    constructor(
        mapiTypeTagPropertySetOrPropertySetId?: MapiPropertyType | number | DefaultExtendedPropertySet | Guid,
        mapiTypeNameOrId?: MapiPropertyType | string | number,
        mapiType?: MapiPropertyType) {
        super();
        var argsLength = arguments.length;
        this.mapiType = MapiPropertyType.String;
        switch (argsLength) {
            case 1:
                this.mapiType = <MapiPropertyType>mapiTypeTagPropertySetOrPropertySetId;
                break;
            case 2:
                this.mapiType = <MapiPropertyType>mapiTypeNameOrId;
                if (<number>mapiTypeTagPropertySetOrPropertySetId < 0 || <number>mapiTypeTagPropertySetOrPropertySetId > 65535 /*UInt16.MaxValue*/) {
                    throw new ArgumentOutOfRangeException("tag", Strings.TagValueIsOutOfRange);
                }
                this.tag = <number>mapiTypeTagPropertySetOrPropertySetId;
                break;
            case 3:
                this.mapiType = mapiType;

                typeof mapiTypeNameOrId === 'string' ? this.name = mapiTypeNameOrId : this.id = mapiTypeNameOrId;
                typeof mapiTypeTagPropertySetOrPropertySetId === 'number' ? this.propertySet = <DefaultExtendedPropertySet>mapiTypeTagPropertySetOrPropertySetId : this.propertySetId = <Guid>mapiTypeTagPropertySetOrPropertySetId;
                break;
            default:
                break;
        }
    }

    /**
     * Determines whether a given extended property definition is equal to this extended property definition.
     *
     * @param   {any}   obj   The object to check for equality.
     * @return  {boolean}         True if the properties definitions define the same extended property.
     */
    Equals(obj: any): boolean {
        var propertyDefinition = <ExtendedPropertyDefinition>obj;
        return ExtendedPropertyDefinition.IsEqualTo(propertyDefinition, this);
    }

    /**
     * @internal Formats the field.
     *
     * @type    <T>        Type of field value. 
     * @param   {string}   name         The name.
     * @param   {string}   fieldValue   The field value.
     * @return  {string}                Formatted value.
     */
    FormatField(name: string, fieldValue: string): string {
        //debugger;
        return (fieldValue != null)
            ? StringHelper.Format(ExtendedPropertyDefinition.FieldFormat, name, fieldValue)
            : "";
    }

    /**
     * Serves as a hash function for a particular type.
     *
     * @return  {number}      A hash code for the current System.Object.
     */
    GetHashCode(): number { throw new Error("ExtendedPropertyDefinition.ts - GetHashCode : Not implemented."); }

    /**
     * @internal Gets the property definition's printable name.
     *
     * @return  {string}      The property definition's printable name.
     */
    GetPrintableName(): string {
        var sb = "";
        sb += "{";
        sb += this.FormatField(ExtendedPropertyDefinition.NameFieldName, this.Name);
        sb += this.FormatField(ExtendedPropertyDefinition.MapiTypeFieldName, MapiPropertyType[this.MapiType]);
        sb += this.FormatField(ExtendedPropertyDefinition.IdFieldName, this.Id.toString());
        sb += this.FormatField(ExtendedPropertyDefinition.PropertySetFieldName, DefaultExtendedPropertySet[this.PropertySet]);
        sb += this.FormatField(ExtendedPropertyDefinition.PropertySetIdFieldName, this.PropertySetId != null ? this.PropertySetId.ToString() : "");
        sb += this.FormatField(ExtendedPropertyDefinition.TagFieldName, this.Tag.toString());
        sb += "}";
        return sb;
    }

    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetXmlElementName(): string { return XmlElementNames.ExtendedFieldURI; }

    /**
     * @internal Determines whether two specified instances of ExtendedPropertyDefinition are equal.
     *
     * @param   {ExtendedPropertyDefinition}    extPropDef1   First extended property definition.
     * @param   {ExtendedPropertyDefinition}    extPropDef2   Second extended property definition.
     * @return  {boolean}                       True if extended property definitions are equal.
     */
    static IsEqualTo(extPropDef1: ExtendedPropertyDefinition, extPropDef2: ExtendedPropertyDefinition): boolean {
        return (extPropDef1 === extPropDef2) ||
            (extPropDef1 && extPropDef2 &&
                (extPropDef1.Id === extPropDef2.Id) &&
                (extPropDef1.MapiType === extPropDef2.MapiType) &&
                (extPropDef1.Tag === extPropDef2.Tag) &&
                (extPropDef1.Name === extPropDef2.Name) &&
                (extPropDef1.PropertySet === extPropDef2.PropertySet) &&
                (String(extPropDef1.propertySetId) === String(extPropDef2.propertySetId)));
    }

    /**
     * @internal Loads from XMLJsObject.
     *
     * @param   {any}   jsObject   The json object.
     */
    LoadPropertyValueFromXmlJsObject(jsObject: any): void {

        for (var key in jsObject) {
            switch (key) {
                case XmlAttributeNames.DistinguishedPropertySetId:
                    //debugger;
                    this.propertySet = isNaN(jsObject[key]) ? DefaultExtendedPropertySet[jsObject[key]] : <any><DefaultExtendedPropertySet>+(jsObject[key]);// jsObject.ReadEnumValue<DefaultExtendedPropertySet>(key);
                    break;
                case XmlAttributeNames.PropertySetId:
                    //debugger;
                    this.propertySetId = new Guid(jsObject[key]);// new Guid(jsObject.ReadAsString(key));
                    break;
                case XmlAttributeNames.PropertyTag:
                    this.tag = Convert.toNumber(jsObject[key]);//Convert.ToUInt16(jsObject.ReadAsString(key), 16);
                    break;
                case XmlAttributeNames.PropertyName:
                    this.name = jsObject[key];//jsObject.ReadAsString(key);
                    break;
                case XmlAttributeNames.PropertyId:
                    this.id = Convert.toInt(jsObject[key]);//jsObject.ReadAsInt(key);
                    break;
                case XmlAttributeNames.PropertyType:
                    this.mapiType = isNaN(jsObject[key]) ? MapiPropertyType[jsObject[key]] : <any><MapiPropertyType>+(jsObject[key]);// jsObject.ReadEnumValue<MapiPropertyType>(key);
                    break;
                default:
                    break;
            }
        }
    }

    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        if (!isNullOrUndefined(this.propertySet)) {
            writer.WriteAttributeValue(XmlAttributeNames.DistinguishedPropertySetId, DefaultExtendedPropertySet[this.propertySet]);
        }
        if (this.propertySetId) {
            writer.WriteAttributeValue(XmlAttributeNames.PropertySetId, this.propertySetId.ToString());
        }
        if (this.tag) {
            writer.WriteAttributeValue(XmlAttributeNames.PropertyTag, this.tag);
        }
        if (!StringHelper.IsNullOrEmpty(this.name)) {
            writer.WriteAttributeValue(XmlAttributeNames.PropertyName, this.name);
        }
        if (this.id) {
            writer.WriteAttributeValue(XmlAttributeNames.PropertyId, this.id);
        }

        writer.WriteAttributeValue(XmlAttributeNames.PropertyType, MapiPropertyType[this.mapiType]);
    }
}

/**
 * ExtendedPropertyDefinition interface to be used with TypeContainer - removes circular dependency
 */
export interface IExtendedPropertyDefinition {
    new(): ExtendedPropertyDefinition;
    new(mapiType: MapiPropertyType): ExtendedPropertyDefinition;
    new(tag: number, mapiType: MapiPropertyType): ExtendedPropertyDefinition;
    new(propertySet: DefaultExtendedPropertySet, name: string, mapiType: MapiPropertyType): ExtendedPropertyDefinition;
    new(propertySet: DefaultExtendedPropertySet, id: number, mapiType: MapiPropertyType): ExtendedPropertyDefinition;
    new(propertySetId: Guid, name: string, mapiType: MapiPropertyType): ExtendedPropertyDefinition;
    new(propertySetId: Guid, id: number, mapiType: MapiPropertyType): ExtendedPropertyDefinition;
}