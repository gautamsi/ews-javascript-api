import {ServiceLocalException} from "../Exceptions/ServiceLocalException";
import {IOutParam} from "../Interfaces/IOutParam";
import {XmlNamespace} from "../Enumerations/XmlNamespace";
import {XmlElementNames} from "../Core/XmlElementNames";
import {XmlAttributeNames} from "../Core/XmlAttributeNames";
import {PropertyDefinitionBase} from "../PropertyDefinitions/PropertyDefinitionBase";
import {SortDirection} from "../Enumerations/SortDirection";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {KeyValuePair} from "../AltDictionary";
import {StringHelper} from "../ExtensionMethods";
import {Strings} from "../Strings";

type PropertyDefinitionSortDirectionPair = KeyValuePair<PropertyDefinitionBase, SortDirection>;
export class OrderByCollection {  //: IEnumerable < PropertyDefinitionSortDirectionPair >, IJsonSerializable
    ___implementsInterface: string[] = ["IEnumerable", "IEnumerable<PropertyDefinitionSortDirectionPair>", "IJsonSerializable"];

    get Count(): number { return this.propDefSortOrderPairList.length; }
    //Item: PropertyDefinitionSortDirectionPair;/*System.Collections.Generic.KeyValuePair<PropertyDefinitionBase, SortDirection>*/
    private propDefSortOrderPairList: PropertyDefinitionSortDirectionPair[] = []; /*System.Collections.Generic.List<T>*/
    __thisIndexer(index: number): PropertyDefinitionSortDirectionPair {
        return this.propDefSortOrderPairList[index];
    }

    Add(propertyDefinition: PropertyDefinitionBase, sortDirection: SortDirection): void {
        if (this.Contains(propertyDefinition)) {
            throw new ServiceLocalException(StringHelper.Format(Strings.PropertyAlreadyExistsInOrderByCollection, propertyDefinition.GetPrintableName()));
        }

        this.propDefSortOrderPairList.push({ key: propertyDefinition, value: sortDirection }); //new PropertyDefinitionSortDirectionPair() not seamless in javascript
    }
    Clear(): void {
        this.propDefSortOrderPairList.splice(0);
    }
    Contains(propertyDefinition: PropertyDefinitionBase): boolean {
        this.propDefSortOrderPairList.forEach((pair, index) => {
            debugger;// check if equality works or need to use any property
            if (pair.key === propertyDefinition)
                return true;
        });
        return false;
    }
    GetEnumerator(): any { throw new Error("OrderByCollection.ts - GetEnumerator : Not implemented."); }
    Remove(propertyDefinition: PropertyDefinitionBase): boolean {
        var oldCount = this.Count;
        this.propDefSortOrderPairList = this.propDefSortOrderPairList.filter((value) => { return value.key !== propertyDefinition; });
        //var count = this.propDefSortOrderPairList.RemoveAll((pair) => pair.Key.Equals(propertyDefinition));
        return oldCount > this.Count;
    }
    RemoveAt(index: number): void {
        this.propDefSortOrderPairList.splice(index, 1);
    }
    TryGetValue(propertyDefinition: PropertyDefinitionBase, sortDirection: IOutParam<SortDirection>): boolean {
        for (var pair of this.propDefSortOrderPairList) {
            if (pair.key == propertyDefinition) { //possible bug - log at Github
                sortDirection.outValue = pair.value;
                return true;
            }
        }

        sortDirection.outValue = SortDirection.Ascending;        // out parameter has to be set to some value.
        return false;
    }
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): void {
        if (this.Count > 0) {
            writer.WriteStartElement(XmlNamespace.Messages, xmlElementName);

            for (var keyValuePair of this.propDefSortOrderPairList) {
                writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.FieldOrder);

                writer.WriteAttributeValue(undefined, XmlAttributeNames.Order, keyValuePair.value);
                keyValuePair.key.WriteToXml(writer);

                writer.WriteEndElement(); // FieldOrder
            }
            writer.WriteEndElement();
        }
    }
}