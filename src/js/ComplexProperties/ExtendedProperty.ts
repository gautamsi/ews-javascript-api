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

    Equals(obj: any): boolean { throw new Error("Not implemented."); }
    GetHashCode(): number { throw new Error("Not implemented."); }
    GetStringValue(): string { throw new Error("Not implemented."); }
    //InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    LoadFromJson(jsonProperty: any /*JsonObject*/, service: ExchangeService): any { throw new Error("Not implemented."); }
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean {
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
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}

export = ExtendedProperty;

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;


