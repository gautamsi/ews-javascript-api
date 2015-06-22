import {ComplexProperty} from "./ComplexProperty";
import {LocationSource} from "../Enumerations/LocationSource";
import {ExchangeService} from "../Core/ExchangeService";
import {JsonObject} from "../Core/JsonObject";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
export class PersonaPostalAddress extends ComplexProperty {
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
    InternalToJson(service: ExchangeService): any { throw new Error("PersonaPostalAddress.ts - InternalToJson : Not implemented."); }
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("PersonaPostalAddress.ts - LoadFromJson : Not implemented."); }
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): any { throw new Error("PersonaPostalAddress.ts - LoadFromXmlJsObject : Not implemented."); }
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("PersonaPostalAddress.ts - TryReadElementFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("PersonaPostalAddress.ts - WriteElementsToXml : Not implemented."); }
    WriteToXml(writer: EwsServiceXmlWriter): any { throw new Error("PersonaPostalAddress.ts - WriteToXml : Not implemented."); }
}


//}



