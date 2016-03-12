import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {XmlAttributeNames} from "../Core/XmlAttributeNames";
import {XmlElementNames} from "../Core/XmlElementNames";

import {EwsLogging} from "../Core/EwsLogging";
import {StringHelper} from "../ExtensionMethods";

import {PropertyDefinitionBase} from "./PropertyDefinitionBase";
/**
 * Represents a property definition for a service object.
 */
export abstract class ServiceObjectPropertyDefinition extends PropertyDefinitionBase {

    private uri: string = null;

    /**
     * Gets the minimum Exchange version that supports this property.
     *
     * @value {ExchangeVersion} The version.
     */
    get Version(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }

    /**
     * @internal Gets the URI of the property definition.
     */
    get Uri(): string { return this.uri; }

    /**
     * @internal Initializes a new instance of the **ServiceObjectPropertyDefinition** class.
     */
    constructor();
    /**
     * @internal Initializes a new instance of the **ServiceObjectPropertyDefinition** class.
     *
     * @param   {string}   uri   The URI.
     */
    constructor(uri: string);
    constructor(uri: string = null) {
        super();
        if (arguments.length == 1) {
            EwsLogging.Assert(
                !StringHelper.IsNullOrEmpty(uri),
                "ServiceObjectPropertyDefinition.ctor",
                "uri is null or empty");

            this.uri = uri;
        }
    }

    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetXmlElementName(): string { return XmlElementNames.FieldURI; }

    /**
     * @internal Writes the attributes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteAttributeValue(XmlAttributeNames.FieldURI, this.Uri);
    }
}


