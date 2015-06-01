import ComplexProperty = require("./ComplexProperty");
import ExtendedPropertyDefinition = require("../PropertyDefinitions/ExtendedPropertyDefinition");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
class ExtendedProperty extends ComplexProperty {
    PropertyDefinition: ExtendedPropertyDefinition;
    Value: any;
    private propertyDefinition: ExtendedPropertyDefinition;
    private value: any;

    constructor(propertyDefinition?: ExtendedPropertyDefinition) {
        super();
        //EwsUtilities.ValidateParam(propertyDefinition, "propertyDefinition");
        if (typeof propertyDefinition !== 'undefined')
            this.propertyDefinition = propertyDefinition;
    }

    Equals(obj: any): boolean { throw new Error("ExtendedProperty.ts - Equals : Not implemented."); }
    GetHashCode(): number { throw new Error("ExtendedProperty.ts - GetHashCode : Not implemented."); }
    GetStringValue(): string { throw new Error("ExtendedProperty.ts - GetStringValue : Not implemented."); }
    //InternalToJson(service: ExchangeService): any { throw new Error("ExtendedProperty.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: any /*JsonObject*/, service: ExchangeService): any { throw new Error("ExtendedProperty.ts - LoadFromJson : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean {
        return false;
        //switch (reader.LocalName) {
        //    case XmlElementNames.ExtendedFieldURI:
        //        this.propertyDefinition = new ExtendedPropertyDefinition();
        //        this.propertyDefinition.LoadFromXml(reader);
        //        return true;
        //    case XmlElementNames.Value:
        //        EwsUtilities.Assert(
        //            this.PropertyDefinition != null,
        //            "ExtendedProperty.TryReadElementFromXml",
        //            "PropertyDefintion is missing");

        //        var stringValue: string = reader.ReadElementValue();
        //        this.value = MapiTypeConverter.ConvertToValue(this.PropertyDefinition.MapiType, stringValue);
        //        return true;
        //    case XmlElementNames.Values:
        //        EwsUtilities.Assert(
        //            this.PropertyDefinition != null,
        //            "ExtendedProperty.TryReadElementFromXml",
        //            "PropertyDefintion is missing");

        //        StringList stringList = new StringList(XmlElementNames.Value);
        //        stringList.LoadFromXml(reader, reader.LocalName);
        //        this.value = MapiTypeConverter.ConvertToValue(this.PropertyDefinition.MapiType, stringList);
        //        return true;
        //    default:
        //        return false;
        //}
    }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("ExtendedProperty.ts - WriteElementsToXml : Not implemented."); }
}

export = ExtendedProperty;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;


