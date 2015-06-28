import {XmlAttributeNames} from "../Core/XmlAttributeNames";
import {XmlElementNames} from "../Core/XmlElementNames";
import {XmlNamespace} from "../Enumerations/XmlNamespace";
import {SimplePropertyBag} from "../Core/SimplePropertyBag";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {ServiceObject} from "../Core/ServiceObjects/ServiceObject";
import {LazyMember} from "../Core/LazyMember";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {PropertyDefinition} from "../PropertyDefinitions/PropertyDefinition";

import {PhysicalAddressKey} from "../Enumerations/PhysicalAddressKey";
import {DictionaryEntryProperty} from "./DictionaryEntryProperty";

class PhysicalAddressSchema {
	static Street: string = "Street";
	static City: string = "City";
	static State: string = "State";
	static CountryOrRegion: string = "CountryOrRegion";
	static PostalCode: string = "PostalCode";
	private static xmlElementNames: LazyMember<string[]> = new LazyMember<string[]>(() => {
		var list: string[] = [];
		list.push("Street");
		list.push("City");
		list.push("State");
		list.push("CountryOrRegion");
		list.push("PostalCode");
		return list;
	});

	static get XmlElementNames(): string[] {
		return PhysicalAddressSchema.xmlElementNames.Member;
	}
}

/**
 * PhysicalAddressEntry class
 */
export class PhysicalAddressEntry extends DictionaryEntryProperty<PhysicalAddressKey> {

	private propertyBag: SimplePropertyBag<string> = null;
	get Street(): string {
		return <string>this.propertyBag._getItem("Street");
	}
	set Street(value: string) {
		this.propertyBag._setItem("Street", value);
	}
	get City(): string {
		return <string>this.propertyBag._getItem("City");
	}
	set City(value: string) {
		this.propertyBag._setItem("City", value);
	}
	get State(): string {
		return <string>this.propertyBag._getItem("State");
	}
	set State(value: string) {
		this.propertyBag._setItem("State", value);
	}
	get CountryOrRegion(): string {
		return <string>this.propertyBag._getItem("CountryOrRegion");
	}
	set CountryOrRegion(value: string) {
		this.propertyBag._setItem("CountryOrRegion", value);
	}
	get PostalCode(): string {
		return <string>this.propertyBag._getItem("PostalCode");
	}
	set PostalCode(value: string) {
		this.propertyBag._setItem("PostalCode", value);
	}

	constructor() {
		super();
		this.propertyBag = new SimplePropertyBag<string>((key: string) => key);
		this.propertyBag.OnChange.push(this.PropertyBagChanged);
	}
	ClearChangeLog(): void { this.propertyBag.ClearChangeLog(); }
	private GetFieldUri(xmlElementName: string): string { return "contacts:PhysicalAddress:" + xmlElementName; }
	InternalToJson(service: ExchangeService): any { throw new Error("PhysicalAddressEntry.ts - InternalToJson : Not implemented."); }
	InternalWriteDeleteFieldToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject, fieldXmlElementName: string): void {
		writer.WriteStartElement(XmlNamespace.Types, ewsObject.GetDeleteFieldXmlElementName());
		writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.IndexedFieldURI);
		writer.WriteAttributeValue(null, XmlAttributeNames.FieldURI, this.GetFieldUri(fieldXmlElementName));
		writer.WriteAttributeValue(null, XmlAttributeNames.FieldIndex, PhysicalAddressKey[this.Key]);
		writer.WriteEndElement(); // IndexedFieldURI
		writer.WriteEndElement(); // ewsObject.GetDeleteFieldXmlElementName()
	}
	InternalWriteDeleteUpdateToJson(ewsObject: ServiceObject, propertyName: string, updates: any[] /*System.Collections.Generic.List<any>*/): void { throw new Error("PhysicalAddressEntry.ts - InternalWriteDeleteUpdateToJson : Not implemented."); }
	LoadFromJson(jsonProperty: any, service: ExchangeService): void { throw new Error("PhysicalAddressEntry.ts - LoadFromJson : Not implemented."); }
	PropertyBagChanged(): void { this.Changed(); }
	LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void {
		this.Key = <PhysicalAddressKey><any>PhysicalAddressKey[jsonProperty[XmlAttributeNames.Key]];
		this.Street = jsonProperty[XmlElementNames.Street];
		this.City = jsonProperty[XmlElementNames.City];
		this.State = jsonProperty[XmlElementNames.State];
		this.Street = jsonProperty[XmlElementNames.Street];
		this.CountryOrRegion = jsonProperty[XmlElementNames.CountryOrRegion];
		this.PostalCode = jsonProperty[XmlElementNames.PostalCode];
	}
	WriteDeleteUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, updates: any[] /*System.Collections.Generic.List<any>*/): boolean { throw new Error("PhysicalAddressEntry.ts - WriteDeleteUpdateToJson : Not implemented."); }
	WriteDeleteUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject): boolean {
		for (var xmlElementName of PhysicalAddressSchema.XmlElementNames) {
			this.InternalWriteDeleteFieldToXml(
				writer,
				ewsObject,
				xmlElementName);
		}
		return true;
	}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void {
		for (var xmlElementName of PhysicalAddressSchema.XmlElementNames) {
			writer.WriteElementValue(
				XmlNamespace.Types,
				xmlElementName,
				this.propertyBag[xmlElementName]);
		}
	}
	WriteSetUpdateToJson(service: ExchangeService, ewsObject: ServiceObject, propertyDefinition: PropertyDefinition, updates: any[] /*System.Collections.Generic.List<JsonObject>*/): boolean { throw new Error("PhysicalAddressEntry.ts - WriteSetUpdateToJson : Not implemented."); }
	WriteSetUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject, ownerDictionaryXmlElementName: string): boolean {
		var fieldsToSet: string[] = [];

		for (var xmlElementName of this.propertyBag.AddedItems) {
			fieldsToSet.push(xmlElementName);
		}

		for (var xmlElementName of this.propertyBag.ModifiedItems) {
			fieldsToSet.push(xmlElementName);
		}

		for (var xmlElementName of fieldsToSet) {
			writer.WriteStartElement(XmlNamespace.Types, ewsObject.GetSetFieldXmlElementName());

			writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.IndexedFieldURI);
			writer.WriteAttributeValue(null, XmlAttributeNames.FieldURI, this.GetFieldUri(xmlElementName));
			writer.WriteAttributeValue(null, XmlAttributeNames.FieldIndex, PhysicalAddressKey[this.Key]);
			writer.WriteEndElement(); // IndexedFieldURI

			writer.WriteStartElement(XmlNamespace.Types, ewsObject.GetXmlElementName());
			writer.WriteStartElement(XmlNamespace.Types, ownerDictionaryXmlElementName);
			writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.Entry);
			this.WriteAttributesToXml(writer);
			writer.WriteElementValue(
				XmlNamespace.Types,
				xmlElementName,
				this.propertyBag[xmlElementName]);
			writer.WriteEndElement(); // Entry
			writer.WriteEndElement(); // ownerDictionaryXmlElementName
			writer.WriteEndElement(); // ewsObject.GetXmlElementName()

			writer.WriteEndElement(); // ewsObject.GetSetFieldXmlElementName()
		}

		for (var xmlElementName of this.propertyBag.RemovedItems) {
			this.InternalWriteDeleteFieldToXml(
				writer,
				ewsObject,
				xmlElementName);
		}

		return true;
	}
}