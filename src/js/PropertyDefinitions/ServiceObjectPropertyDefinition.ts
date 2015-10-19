import {ExchangeVersion} from "../Enumerations/ExchangeVersion";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {XmlAttributeNames} from "../Core/XmlAttributeNames";
import {XmlElementNames} from "../Core/XmlElementNames";

import {EwsLogging} from "../Core/EwsLogging";
import {StringHelper} from "../ExtensionMethods";

import {PropertyDefinitionBase} from "./PropertyDefinitionBase";

//should be done except JSON
export class ServiceObjectPropertyDefinition extends PropertyDefinitionBase {
    get Version(): ExchangeVersion { return ExchangeVersion.Exchange2007_SP1; }
    get Uri(): string { return this.uri; }
    private uri: string;
    constructor(uri?: string) {
        super();
        if (uri !== undefined) {
            EwsLogging.Assert(
                !StringHelper.IsNullOrEmpty(uri),
                "ServiceObjectPropertyDefinition.ctor",
                "uri is null or empty");

            this.uri = uri;
        }
    }
    //AddJsonProperties(jsonPropertyDefinition: JsonObject, service: ExchangeService): any { jsonPropertyDefinition.Add(XmlAttributeNames.FieldURI, this.Uri); }
    //GetJsonType(): string{ throw new Error("ServiceObjectPropertyDefinition.ts - GetJsonType : Not implemented.");}
    GetXmlElementName(): string { return XmlElementNames.FieldURI; }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteAttributeValue(XmlAttributeNames.FieldURI, this.Uri);
    }
}


