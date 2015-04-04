import ExchangeVersion = require("../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import XmlAttributeNames = require("../Core/XmlAttributeNames");
import XmlElementNames = require("../Core/XmlElementNames");
import XmlNamespace = require("../Enumerations/XmlNamespace");


class PropertyDefinitionBase {
    Version: ExchangeVersion;
    Type: any; //System.Type;
    //AddJsonProperties(jsonPropertyDefinition: JsonObject, service: ExchangeService): any{ throw new Error("Not implemented.");}
    //GetJsonType(): string{ throw new Error("Not implemented.");}
    GetPrintableName(): string { throw new Error("abstract methos, must implement"); }
    GetXmlElementName(): string { throw new Error("abstract methos, must implement"); }
    ToString(): string { return this.GetPrintableName(); }
    //TryLoadFromJson(jsonObject: JsonObject): PropertyDefinitionBase{ throw new Error("Not implemented.");}
    static TryLoadFromXml(reader: EwsServiceXmlReader, outP: IOutParam<PropertyDefinitionBase> /* propertyDefinition: any*/): boolean {
        //var propertyDefinition = null;
        outP.value = null;
        switch (reader.LocalName) {
            case XmlElementNames.FieldURI:
                debugger;//todo: implement serviceobjectschema method
                outP.value /*propertyDefinition*/ = ServiceObjectSchema.FindPropertyDefinition(reader.ReadAttributeValue(XmlNamespace.NotSpecified, XmlAttributeNames.FieldURI));
                reader.SkipCurrentElement();
                return true;
            case XmlElementNames.IndexedFieldURI:
                outP.value = new IndexedPropertyDefinition(
                    reader.ReadAttributeValue(XmlNamespace.NotSpecified, XmlAttributeNames.FieldURI),
                    reader.ReadAttributeValue(XmlNamespace.NotSpecified, XmlAttributeNames.FieldIndex));
                reader.SkipCurrentElement();
                return true;
            case XmlElementNames.ExtendedFieldURI:
                outP.value = new ExtendedPropertyDefinition();
                (<ExtendedPropertyDefinition>outP.value).LoadFromXml(reader);
                return true;
            default:
                return false;
        }
    }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): void { throw new Error("abstract methos, must implement"); }
    WriteToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteStartElement(XmlNamespace.Types, this.GetXmlElementName());
        this.WriteAttributesToXml(writer);
        writer.WriteEndElement();
    }
}
export = PropertyDefinitionBase;




//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
