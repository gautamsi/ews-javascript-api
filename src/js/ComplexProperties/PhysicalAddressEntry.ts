import DictionaryEntryProperty = require("./DictionaryEntryProperty");
import PhysicalAddressKey = require("../Enumerations/PhysicalAddressKey");
import SimplePropertyBag = require("../Core/SimplePropertyBag");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import ServiceObject = require("../Core/ServiceObjects/ServiceObject");
import JsonObject = require("../Core/JsonObject");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import PropertyDefinition = require("../PropertyDefinitions/PropertyDefinition");
			
 class PhysicalAddressEntry extends DictionaryEntryProperty<PhysicalAddressKey> {
	Street: string;
	City: string;
	State: string;
	CountryOrRegion: string;
	PostalCode: string;
	private propertyBag: SimplePropertyBag<string>;
	ClearChangeLog(): void{ throw new Error("Not implemented.");}
	GetFieldUri(xmlElementName: string): string{ throw new Error("Not implemented.");}
	InternalToJson(service: ExchangeService): any{ throw new Error("Not implemented.");}
	InternalWriteDeleteFieldToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject, fieldXmlElementName: string): void{ throw new Error("Not implemented.");}
	InternalWriteDeleteUpdateToJson(ewsObject: ServiceObject, propertyName: string, updates: JsonObject[] /*System.Collections.Generic.List<JsonObject>*/): void{ throw new Error("Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("Not implemented.");}
	PropertyBagChanged(): void{ throw new Error("Not implemented.");}
	TryReadElementFromXml(reader: EwsServiceXmlReader): boolean{ throw new Error("Not implemented.");}
	WriteDeleteUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, updates: JsonObject[] /*System.Collections.Generic.List<JsonObject>*/): boolean{ throw new Error("Not implemented.");}
	WriteDeleteUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject): boolean{ throw new Error("Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("Not implemented.");}
	WriteSetUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, propertyDefinition: PropertyDefinition, updates: JsonObject[] /*System.Collections.Generic.List<JsonObject>*/): boolean{ throw new Error("Not implemented.");}
	WriteSetUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject, ownerDictionaryXmlElementName: string): boolean{ throw new Error("Not implemented.");}
}
export = PhysicalAddressEntry;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
