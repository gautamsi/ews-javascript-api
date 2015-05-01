   class EnhancedLocation extends ComplexProperty {
        DisplayName: string;
        Annotation: string;
        PersonaPostalAddress: PersonaPostalAddress;
        private displayName: string;
        private annotation: string;
        private personaPostalAddress: PersonaPostalAddress;
        InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
        InternalValidate(): any { throw new Error("Not implemented."); }
        LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
        PersonaPostalAddress_OnChange(complexProperty: ComplexProperty): any { throw new Error("Not implemented."); }
        TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
        WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    }

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
