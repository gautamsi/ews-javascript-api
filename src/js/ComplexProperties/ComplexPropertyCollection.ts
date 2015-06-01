import Strings = require("../Strings");
import ServiceObject = require("../Core/ServiceObjects/ServiceObject");
import PropertyDefinition = require("../PropertyDefinitions/PropertyDefinition");
import ExchangeService = require("../Core/ExchangeService");
import XmlNamespace = require("../Enumerations/XmlNamespace");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
import {ArrayHelper, StringHelper} from "../ExtensionMethods";
import {EwsLogging} from "../Core/EwsLogging";

import ComplexProperty = require("./ComplexProperty");
class ComplexPropertyCollection<TComplexProperty extends ComplexProperty> extends ComplexProperty {
    ___implementsInterface: string[] = ["ISelfValidate", "IJsonSerializable", "IEnumerable<TComplexProperty>", "ICustomUpdateSerializer", "IJsonCollectionDeserialize"];
    ___typeName: string = "ComplexPropertyCollection";
    ___typeGenerics: string[] = ["ComplexProperty"];

    get Items(): TComplexProperty[] { return this.items; }  //System.Collections.Generic.List<TComplexProperty>;
    get AddedItems(): TComplexProperty[] { return this.addedItems; }  //System.Collections.Generic.List<TComplexProperty>;
    get ModifiedItems(): TComplexProperty[] { return this.modifiedItems; }  //System.Collections.Generic.List<TComplexProperty>;
    get RemovedItems(): TComplexProperty[] { return this.removedItems; }  //System.Collections.Generic.List<TComplexProperty>;
    get Count(): number { return this.items.length; }
    //Item: TComplexProperty;
    private items: TComplexProperty[];  //System.Collections.Generic.List<TComplexProperty>;
    private addedItems: TComplexProperty[];  //System.Collections.Generic.List<TComplexProperty>;
    private modifiedItems: TComplexProperty[];  //System.Collections.Generic.List<TComplexProperty>;
    private removedItems: TComplexProperty[];  //System.Collections.Generic.List<TComplexProperty>;
    
    __thisIndexer(index: number): TComplexProperty {
        if (index < 0 || index >= this.Count) {
            throw new Error("ComplexPropertyCollection[index] (__thisIndexer) : " + Strings.IndexIsOutOfRange);// ArgumentOutOfRangeException("index", Strings.IndexIsOutOfRange);
        }
        return this.items[index];
    }

    ClearChangeLog(): void {
        this.removedItems.splice(0);
        this.addedItems.splice(0);
        this.modifiedItems.splice(0);
    }
    Contains(complexProperty: TComplexProperty): boolean { return this.items.indexOf(complexProperty) >= 0; }
    CreateComplexProperty(xmlElementName: string): TComplexProperty { throw new Error("abstract - ComplexPropertyCollection.ts - CreateComplexProperty : Not implemented."); }
    CreateDefaultComplexProperty(): TComplexProperty { throw new Error("abstract - ComplexPropertyCollection.ts - CreateDefaultComplexProperty : Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: TComplexProperty): string { throw new Error("abstract - ComplexPropertyCollection.ts - GetCollectionItemXmlElementName : Not implemented."); }
    //GetEnumerator(): any { throw new Error("ComplexPropertyCollection.ts - GetEnumerator : Not implemented."); }
    IndexOf(complexProperty: TComplexProperty): number { return this.items.indexOf(complexProperty); }
    //InternalAdd(complexProperty: TComplexProperty): any { throw new Error("ComplexPropertyCollection.ts - InternalAdd : Not implemented."); }
    InternalAdd(complexProperty: TComplexProperty, loading: boolean = false): void {
        EwsLogging.Assert(
            complexProperty != null,
            "ComplexPropertyCollection.InternalAdd",
            "complexProperty is null");

        if (this.items.indexOf(complexProperty) < 0) {
            this.items.push(complexProperty);
            if (!loading) {
                ArrayHelper.RemoveEntry(this.removedItems, complexProperty);// this.removedItems.Remove(complexProperty);
                this.addedItems.push(complexProperty);
            }
            complexProperty.OnChange.push(this.ItemChanged);
            this.Changed();
        }
    }
    InternalClear(): void {
        while (this.Count > 0) {
            this.InternalRemoveAt(0);
        }
    }
    InternalRemove(complexProperty: TComplexProperty): boolean {
        EwsLogging.Assert(
            complexProperty != null,
            "ComplexPropertyCollection.InternalRemove",
            "complexProperty is null");

        if (ArrayHelper.RemoveEntry(this.items, complexProperty)) { // this.items.Remove(complexProperty))
            
            ArrayHelper.RemoveEntry(complexProperty.OnChange, this.ItemChanged);// complexProperty.OnChange -= this.ItemChanged;

            if (this.addedItems.indexOf(complexProperty) < 0) {
                this.removedItems.push(complexProperty);
            }
            else {
                ArrayHelper.RemoveEntry(this.addedItems, complexProperty);// this.addedItems.Remove(complexProperty);
            }
            ArrayHelper.RemoveEntry(this.modifiedItems, complexProperty);// this.modifiedItems.Remove(complexProperty);
            this.Changed();
            return true;
        }
        else {
            return false;
        }
    }
    InternalRemoveAt(index: number): void {
        EwsLogging.Assert(
            index >= 0 && index < this.Count,
            "ComplexPropertyCollection.InternalRemoveAt",
            "index is out of range.");

        this.InternalRemove(this.items[index]);
    }
    InternalToJson(service: ExchangeService): any { throw new Error("ComplexPropertyCollection.ts - InternalToJson : Not implemented."); }
    ItemChanged(complexProperty: ComplexProperty): void {
        //TComplexProperty property = complexProperty as TComplexProperty;
        var property = complexProperty;
        // EwsLogging.Assert(
        //     property != null,
        //     "ComplexPropertyCollection.ItemChanged",
        //     StringHelper.Format("ComplexPropertyCollection.ItemChanged: the type of the complexProperty argument ({0}) is not supported.", complexProperty.___typeName));

        if (this.addedItems.indexOf(<TComplexProperty>property) < 0) {
            if (this.modifiedItems.indexOf(<TComplexProperty>property) < 0) {
                this.modifiedItems.push(<TComplexProperty>property);
                this.Changed();
            }
        }
    }
    LoadFromXmlJsObject(reader: EwsServiceXmlReader, localElementName: string, xmlNamespace: XmlNamespace = XmlNamespace.Types): any { throw new Error("ComplexPropertyCollection.ts - LoadFromXmlJsObject : Not implemented."); }
    //LoadFromXml(reader: EwsServiceXmlReader, localElementName: string): any { throw new Error("ComplexPropertyCollection.ts - LoadFromXml : Not implemented."); }
    RemoveFromChangeLog(complexProperty: TComplexProperty): void {
        ArrayHelper.RemoveEntry(this.removedItems, complexProperty);     //this.removedItems.Remove(complexProperty);
        ArrayHelper.RemoveEntry(this.modifiedItems, complexProperty);    //this.modifiedItems.Remove(complexProperty);
        ArrayHelper.RemoveEntry(this.addedItems, complexProperty);       //this.addedItems.Remove(complexProperty);
    }
    ShouldWriteToRequest(): boolean {
        // Only write collection if it has at least one element.
        return this.Count > 0;
    }
    UpdateFromXmlJsObject(reader: EwsServiceXmlReader, xmlElementName: string, xmlNamespace?: XmlNamespace): any { throw new Error("ComplexPropertyCollection.ts - UpdateFromXmlJsObject : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        for (var complexProperty of this.items) {
            complexProperty.WriteToXml(writer, this.GetCollectionItemXmlElementName(complexProperty));
        }
    }
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string, xmlNamespace: XmlNamespace = XmlNamespace.Types): void {
        if (this.ShouldWriteToRequest()) {
            super.WriteToXml(
                writer,
                xmlElementName,
                xmlNamespace);
        }
    }
    
    
    //ICustomUpdateSerializer
    WriteSetUpdateToXml(
        writer: EwsServiceXmlWriter,
        ewsObject: ServiceObject,
        propertyDefinition: PropertyDefinition): boolean {
        // If the collection is empty, delete the property.
        if (this.Count == 0) {
            writer.WriteStartElement(XmlNamespace.Types, ewsObject.GetDeleteFieldXmlElementName());
            propertyDefinition.WriteToXml(writer);
            writer.WriteEndElement();
            return true;
        }
        // Otherwise, use the default XML serializer.
        else {
            return false;
        }
    }
    WriteDeleteUpdateToXml(writer: EwsServiceXmlWriter, ewsObject: ServiceObject): boolean {
        // Use the default XML serializer.
        return false;
    }
}
export = ComplexPropertyCollection;



//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
