import ExchangeVersion = require("../Enumerations/ExchangeVersion");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import EwsUtilities = require("../Core/EwsUtilities");
import XmlAttributeNames = require("../Core/XmlAttributeNames");
import XmlElementNames = require("../Core/XmlElementNames");

import ExtensionMethods = require("../ExtensionMethods");
import String = ExtensionMethods.stringFormatting;

import PropertyDefinitionBase = require("./PropertyDefinitionBase");

//should be done except JSON
class ServiceObjectPropertyDefinition extends PropertyDefinitionBase {
    get Version(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
    get Uri(): string { return this.uri; }
    private uri: string;
    constructor(uri?: string) {
        super();
        if (uri !== undefined) {
            EwsUtilities.Assert(
                !String.IsNullOrEmpty(uri),
                "ServiceObjectPropertyDefinition.ctor",
                "uri is null or empty");

            this.uri = uri;
        }
    }
    //AddJsonProperties(jsonPropertyDefinition: JsonObject, service: ExchangeService): any { jsonPropertyDefinition.Add(XmlAttributeNames.FieldURI, this.Uri); }
    //GetJsonType(): string{ throw new Error("Not implemented.");}
    GetXmlElementName(): string { return XmlElementNames.FieldURI; }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteAttributeValue("", XmlAttributeNames.FieldURI, this.Uri);
    }
}

export = ServiceObjectPropertyDefinition;
