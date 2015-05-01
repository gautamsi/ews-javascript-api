
class PersonaPostalAddress extends ComplexProperty {
    Street: string;
    City: string;
    State: string;
    Country: string;
    PostalCode: string;
    PostOfficeBox: string;
    Type: string;
    Source: LocationSource;
    Uri: string;
    Latitude: number;
    Longitude: number;
    Accuracy: number;
    Altitude: number;
    AltitudeAccuracy: number;
    FormattedAddress: string;
    private street: string;
    private city: string;
    private state: string;
    private country: string;
    private postalCode: string;
    private postOfficeBox: string;
    private type: string;
    private latitude: number;
    private longitude: number;
    private accuracy: number;
    private altitude: number;
    private altitudeAccuracy: number;
    private formattedAddress: string;
    private uri: string;
    private source: LocationSource;
    InternalToJson(service: ExchangeService): any { throw new Error("Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("Not implemented."); }
    LoadFromXml(reader: EwsServiceXmlReader): any { throw new Error("Not implemented."); }
    TryReadElementFromXml(reader: EwsServiceXmlReader): boolean { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
