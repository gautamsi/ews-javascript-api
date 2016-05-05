import {Convert} from "../ExtensionMethods";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {ExchangeService} from "../Core/ExchangeService";
import {LocationSource} from "../Enumerations/LocationSource";
import {XmlElementNames} from "../Core/XmlElementNames";
import {XmlNamespace} from "../Enumerations/XmlNamespace";

import {ComplexProperty} from "./ComplexProperty";
/**
 * Represents PersonaPostalAddress.
 */
export class PersonaPostalAddress extends ComplexProperty {

    private street: string = null;
    private city: string = null;
    private state: string = null;
    private country: string = null;
    private postalCode: string = null;
    private postOfficeBox: string = null;
    private type: string = null;
    private latitude: number = null;
    private longitude: number = null;
    private accuracy: number = null;
    private altitude: number = null;
    private altitudeAccuracy: number = null;
    private formattedAddress: string = null;
    private uri: string = null;
    private source: LocationSource = 0;

    /**
     * Gets or sets the Street.
     */
    get Street(): string {
        return this.street;
    }
    set Street(value: string) {
        this.SetFieldValue<string>({ getValue: () => this.street, setValue: (fieldValue) => { this.street = fieldValue } }, value);
    }

    /**
     * Gets or sets the City.
     */
    get City(): string {
        return this.city;
    }
    set City(value: string) {
        this.SetFieldValue<string>({ getValue: () => this.city, setValue: (fieldValue) => { this.city = fieldValue } }, value);
    }

    /**
     * Gets or sets the state.
     */
    get State(): string {
        return this.state;
    }
    set State(value: string) {
        this.SetFieldValue<string>({ getValue: () => this.state, setValue: (fieldValue) => { this.state = fieldValue } }, value);
    }

    /**
     * Gets or sets the Country.
     */
    get Country(): string {
        return this.country;
    }
    set Country(value: string) {
        this.SetFieldValue<string>({ getValue: () => this.country, setValue: (fieldValue) => { this.country = fieldValue } }, value);
    }

    /**
     * Gets or sets the PostalCode.
     */
    get PostalCode(): string {
        return this.postalCode;
    }
    set PostalCode(value: string) {
        this.SetFieldValue<string>({ getValue: () => this.postalCode, setValue: (fieldValue) => { this.postalCode = fieldValue } }, value);
    }

    /**
     * Gets or sets the PostOfficeBox.
     */
    get PostOfficeBox(): string {
        return this.postOfficeBox;
    }
    set PostOfficeBox(value: string) {
        this.SetFieldValue<string>({ getValue: () => this.postOfficeBox, setValue: (fieldValue) => { this.postOfficeBox = fieldValue } }, value);
    }

    /**
     * Gets or sets the Type.
     */
    get Type(): string {
        return this.type;
    }
    set Type(value: string) {
        this.SetFieldValue<string>({ getValue: () => this.type, setValue: (fieldValue) => { this.type = fieldValue } }, value);
    }

    /**
     * Gets or sets the location source type.
     */
    get Source(): LocationSource {
        return this.source;
    }
    set Source(value: LocationSource) {
        this.SetFieldValue<LocationSource>({ getValue: () => this.source, setValue: (fieldValue) => { this.source = fieldValue } }, value);
    }

    /**
     * Gets or sets the location Uri.
     */
    get Uri(): string {
        return this.uri;
    }
    set Uri(value: string) {
        this.SetFieldValue<string>({ getValue: () => this.uri, setValue: (fieldValue) => { this.uri = fieldValue } }, value);
    }

    /**
     * Gets or sets a value indicating location latitude.
     */
    get Latitude(): number {
        return this.latitude;
    }
    set Latitude(value: number) {
        this.SetFieldValue<number>({ getValue: () => this.latitude, setValue: (fieldValue) => { this.latitude = fieldValue } }, value);
    }

    /**
     * Gets or sets a value indicating location longitude.
     */
    get Longitude(): number {
        return this.longitude;
    }
    set Longitude(value: number) {
        this.SetFieldValue<number>({ getValue: () => this.longitude, setValue: (fieldValue) => { this.longitude = fieldValue } }, value);
    }

    /**
     * Gets or sets the location accuracy.
     */
    get Accuracy(): number {
        return this.accuracy;
    }
    set Accuracy(value: number) {
        this.SetFieldValue<number>({ getValue: () => this.accuracy, setValue: (fieldValue) => { this.accuracy = fieldValue } }, value);
    }

    /**
     * Gets or sets the location altitude.
     */
    get Altitude(): number {
        return this.altitude;
    }
    set Altitude(value: number) {
        this.SetFieldValue<number>({ getValue: () => this.altitude, setValue: (fieldValue) => { this.altitude = fieldValue } }, value);
    }

    /**
     * Gets or sets the location altitude accuracy.
     */
    get AltitudeAccuracy(): number {
        return this.altitudeAccuracy;
    }
    set AltitudeAccuracy(value: number) {
        this.SetFieldValue<number>({ getValue: () => this.altitudeAccuracy, setValue: (fieldValue) => { this.altitudeAccuracy = fieldValue } }, value);
    }

    /**
     * Gets or sets the street address.
     */
    get FormattedAddress(): string {
        return this.formattedAddress;
    }
    set FormattedAddress(value: string) {
        this.SetFieldValue<string>({ getValue: () => this.formattedAddress, setValue: (fieldValue) => { this.formattedAddress = fieldValue } }, value);
    }

    /**
     * @internal Initializes a new instance of the **PersonaPostalAddress** class.
     */
    constructor();
    /**
     * Initializes a new instance of the **PersonaPostalAddress** class.
     *
     * @param   {string}            street             The Street Address.
     * @param   {string}            city               The City value.
     * @param   {string}            state              The State value.
     * @param   {string}            country            The country value.
     * @param   {string}            postalCode         The postal code value.
     * @param   {string}            postOfficeBox      The Post Office Box.
     * @param   {LocationSource}    locationSource     The location Source.
     * @param   {string}            locationUri        The location Uri.
     * @param   {string}            formattedAddress   The location street Address in formatted address.
     * @param   {number}            latitude           The location latitude.
     * @param   {number}            longitude          The location longitude.
     * @param   {number}            accuracy           The location accuracy.
     * @param   {number}            altitude           The location altitude.
     * @param   {number}            altitudeAccuracy   The location altitude Accuracy.
     */
    constructor(street: string, city: string, state: string, country: string, postalCode: string, postOfficeBox: string, locationSource: LocationSource, locationUri: string, formattedAddress: string, latitude: number, longitude: number, accuracy: number, altitude: number, altitudeAccuracy: number);
    constructor(street?: string, city?: string, state?: string, country?: string, postalCode?: string, postOfficeBox?: string, locationSource?: LocationSource, locationUri?: string, formattedAddress?: string, latitude?: number, longitude?: number, accuracy?: number, altitude?: number, altitudeAccuracy?: number) {
        super();
        if (arguments.length === 0) return;

        this.street = street;
        this.city = city;
        this.state = state;
        this.country = country;
        this.postalCode = postalCode;
        this.postOfficeBox = postOfficeBox;
        this.latitude = latitude;
        this.longitude = longitude;
        this.source = locationSource;
        this.uri = locationUri;
        this.formattedAddress = formattedAddress;
        this.accuracy = accuracy;
        this.altitude = altitude;
        this.altitudeAccuracy = altitudeAccuracy;
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        for (let key in jsObject) {
            switch (key) {
                case XmlElementNames.Street:
                    this.street = jsObject[key];
                    break;
                case XmlElementNames.City:
                    this.city = jsObject[key];
                    break;
                case XmlElementNames.Country:
                    this.country = jsObject[key];
                    break;
                case XmlElementNames.PostalCode:
                    this.postalCode = jsObject[key];
                    break;
                case XmlElementNames.PostOfficeBox:
                    this.postOfficeBox = jsObject[key];
                    break;
                case XmlElementNames.PostalAddressType:
                    this.type = jsObject[key];
                    break;
                case XmlElementNames.Latitude:
                    this.latitude = Convert.toNumber(jsObject[key]);
                    break;
                case XmlElementNames.Longitude:
                    this.longitude = Convert.toNumber(jsObject[key]);
                    break;
                case XmlElementNames.Accuracy:
                    this.accuracy = Convert.toNumber(jsObject[key]);
                    break;
                case XmlElementNames.Altitude:
                    this.altitude = Convert.toNumber(jsObject[key]);
                    break;
                case XmlElementNames.AltitudeAccuracy:
                    this.altitudeAccuracy = Convert.toNumber(jsObject[key]);
                    break;
                case XmlElementNames.FormattedAddress:
                    this.formattedAddress = jsObject[key];
                    break;
                case XmlElementNames.LocationUri:
                    this.uri = jsObject[key];
                    break;
                case XmlElementNames.LocationSource:
                    this.source = LocationSource[<string>jsObject[key]];
                    break;
                default:
                    break;
            }
        }
    }

    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.Street, this.street);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.City, this.city);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.State, this.state);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.Country, this.country);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.PostalCode, this.postalCode);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.PostOfficeBox, this.postOfficeBox);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.PostalAddressType, this.type);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.Latitude, this.latitude);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.Longitude, this.longitude);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.Accuracy, this.accuracy);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.Altitude, this.altitude);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.AltitudeAccuracy, this.altitudeAccuracy);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.FormattedAddress, this.formattedAddress);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.LocationUri, this.uri);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.LocationSource, this.source);
    }

    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.PersonaPostalAddress);

        this.WriteElementsToXml(writer);

        writer.WriteEndElement(); // xmlElementName
    }
}