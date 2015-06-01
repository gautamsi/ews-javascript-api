import DictionaryEntryProperty = require("./DictionaryEntryProperty");
import PhysicalAddressKey = require("../Enumerations/PhysicalAddressKey");
import SimplePropertyBag = require("../Core/SimplePropertyBag");
import ExchangeService = require("../Core/ExchangeService");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import ServiceObject = require("../Core/ServiceObjects/ServiceObject");
import JsonObject = require("../Core/JsonObject");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import PropertyDefinition = require("../PropertyDefinitions/PropertyDefinition");

class PhysicalAddressSchema {
	static Street: string = "Street";
	static City: string = "City";
	static State: string = "State";
	static CountryOrRegion: string = "CountryOrRegion";
	static PostalCode: string = "PostalCode";
}

/**
 * PhysicalAddressEntry class
 */
class PhysicalAddressEntry extends DictionaryEntryProperty<PhysicalAddressKey> {
	Street: string;
	City: string;
	State: string;
	CountryOrRegion: string;
	PostalCode: string;
	private propertyBag: SimplePropertyBag<string>;

	ClearChangeLog(): void { throw new Error("PhysicalAddressEntry.ts - ClearChangeLog : Not implemented."); }
	GetFieldUri(xmlElementName: string): string { throw new Error("PhysicalAddressEntry.ts - GetFieldUri : Not implemented."); }
	InternalToJson(service: ExchangeService): any { throw new Error("PhysicalAddressEntry.ts - InternalToJson : Not implemented."); }
	InternalWriteDeleteFieldToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject, fieldXmlElementName: string): void { throw new Error("PhysicalAddressEntry.ts - InternalWriteDeleteFieldToXml : Not implemented."); }
	InternalWriteDeleteUpdateToJson(ewsObject: ServiceObject, propertyName: string, updates: JsonObject[] /*System.Collections.Generic.List<JsonObject>*/): void { throw new Error("PhysicalAddressEntry.ts - InternalWriteDeleteUpdateToJson : Not implemented."); }
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void { throw new Error("PhysicalAddressEntry.ts - LoadFromJson : Not implemented."); }
	PropertyBagChanged(): void { throw new Error("PhysicalAddressEntry.ts - PropertyBagChanged : Not implemented."); }
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean { throw new Error("PhysicalAddressEntry.ts - TryReadElementFromXmlJsObject : Not implemented."); }
	WriteDeleteUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, updates: JsonObject[] /*System.Collections.Generic.List<JsonObject>*/): boolean { throw new Error("PhysicalAddressEntry.ts - WriteDeleteUpdateToJson : Not implemented."); }
	WriteDeleteUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject): boolean { throw new Error("PhysicalAddressEntry.ts - WriteDeleteUpdateToXml : Not implemented."); }
	WriteElementsToXml(writer: EwsServiceXmlWriter): void { throw new Error("PhysicalAddressEntry.ts - WriteElementsToXml : Not implemented."); }
	WriteSetUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, propertyDefinition: PropertyDefinition, updates: JsonObject[] /*System.Collections.Generic.List<JsonObject>*/): boolean { throw new Error("PhysicalAddressEntry.ts - WriteSetUpdateToJson : Not implemented."); }
	WriteSetUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject, ownerDictionaryXmlElementName: string): boolean { throw new Error("PhysicalAddressEntry.ts - WriteSetUpdateToXml : Not implemented."); }
}

//module PhysicalAddressEntry {
//    export module PhysicalAddressSchema {
//        export var /* static*/ Street: string = "Street";
//        export var /* static*/ City: string = "City";
//        export var /* static*/ State: string = "State";
//        export var /* static*/ CountryOrRegion: string = "CountryOrRegion";
//        export var /* static*/ PostalCode: string = "PostalCode";
//    }
//}
export = PhysicalAddressEntry;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
