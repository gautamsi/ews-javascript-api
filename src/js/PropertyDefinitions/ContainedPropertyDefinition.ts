import {ExchangeService} from "../Core/ExchangeService";
import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {PropertyDefinitionFlags} from "../Enumerations/PropertyDefinitionFlags";
import {EwsLogging} from "../Core/EwsLogging";
import {ComplexProperty} from "../ComplexProperties/ComplexProperty";
import {PropertyBag} from "../Core/PropertyBag";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {XmlNamespace} from "../Enumerations/XmlNamespace";
import {CreateComplexPropertyDelegate} from "../Misc/DelegateTypes";

import {ComplexPropertyDefinition} from "./ComplexPropertyDefinition";
/**
 * @internal Represents contained property definition.
 * 
 * @type    <TComplexProperty>  ComplexProperty
 */
export class ContainedPropertyDefinition<TComplexProperty extends ComplexProperty> extends ComplexPropertyDefinition<TComplexProperty> {

    private containedXmlElementName: string;

    /**
     * @internal Initializes a new instance of the **ContainedPropertyDefinition<TComplexProperty>** class.
     * 
     * @param   {string}                                            propertyName     Name of the property (added to workaround reflection based initialization of Names).
     * @param   {string}                                            xmlElementName             Name of the XML element.
     * @param   {string}                                            uri                        The URI.
     * @param   {string}                                            containedXmlElementName    Name of the contained XML element.
     * @param   {PropertyDefinitionFlags}                           flags                      The flags.
     * @param   {ExchangeVersion}                                   version                    The version.
     * @param   {CreateComplexPropertyDelegate<TComplexProperty>}   propertyCreationDelegate   Delegate used to create instances of ComplexProperty.
     */
    constructor(
        propertyName: string,
        xmlElementName: string,
        uri: string,
        containedXmlElementName: string,
        flags: PropertyDefinitionFlags,
        version: ExchangeVersion,
        propertyCreationDelegate: CreateComplexPropertyDelegate<TComplexProperty>) {

        super(propertyName, xmlElementName, uri, flags, version, propertyCreationDelegate);
        this.containedXmlElementName = containedXmlElementName;
    }

    /**
     * @internal Load from XMLJsObject.
     *
     * @param   {any}               reader        The reader.
     * @param   {ExchangeService}   service        The Service.
     * @param   {PropertyBag}       propertyBag   The property bag.
     */
    InternalLoadFromXmlJsObject(jsObject: any, service: ExchangeService, propertyBag: PropertyBag): void {
        //debug: //check for correct contained element name
        if (jsObject[this.containedXmlElementName]) {
            jsObject = jsObject[this.containedXmlElementName];
        }
        super.InternalLoadFromXmlJsObject(jsObject, service, propertyBag);
    }

    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer              The writer.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the context is an update operation.
     */
    WritePropertyValueToXml(writer: EwsServiceXmlWriter, propertyBag: PropertyBag, isUpdateOperation: boolean): void {
        var complexProperty: ComplexProperty = <ComplexProperty>propertyBag._getItem(this);
        if (complexProperty) {
            writer.WriteStartElement(XmlNamespace.Types, this.XmlElementName);

            complexProperty.WriteToXml(writer, this.containedXmlElementName);

            writer.WriteEndElement(); // this.XmlElementName
        }
    }
}