import { EwsServiceXmlWriter } from "../Core/EwsServiceXmlWriter";
import { IEnumerable } from "../Interfaces/IEnumerable";
import { IOutParam } from "../Interfaces/IOutParam";
import { KeyValuePair } from "../AltDictionary";
import { PropertyDefinitionBase } from "../PropertyDefinitions/PropertyDefinitionBase";
import { ServiceLocalException } from "../Exceptions/ServiceLocalException";
import { SortDirection } from "../Enumerations/SortDirection";
import { StringHelper } from "../ExtensionMethods";
import { Strings } from "../Strings";
import { XmlAttributeNames } from "../Core/XmlAttributeNames";
import { XmlElementNames } from "../Core/XmlElementNames";
import { XmlNamespace } from "../Enumerations/XmlNamespace";

export type PropertyDefinitionSortDirectionPair = KeyValuePair<PropertyDefinitionBase, SortDirection>;

/**
 * Represents an ordered collection of property definitions qualified with a sort direction.
 * 
 * @sealed
 */
export class OrderByCollection implements IEnumerable<PropertyDefinitionSortDirectionPair> {  //: IJsonSerializable

    private propDefSortOrderPairList: PropertyDefinitionSortDirectionPair[];

    /**
     * Gets the number of elements contained in the collection.
     */
    get Count(): number {
        return this.propDefSortOrderPairList.length;
    }

    /**
     * @internal Initializes a new instance of the **OrderByCollection** class.
     */
    constructor() {
        this.propDefSortOrderPairList = [];
    }

    /**
     * Gets the element at the specified index from the collection.
     *
     * @param   {number}   index   Index.
     */
    _getItem(index: number): PropertyDefinitionSortDirectionPair {
        return this.propDefSortOrderPairList[index];
    }

    /**
     * Adds the specified property definition / sort direction pair to the collection.
     *
     * @param   {PropertyDefinitionBase}    propertyDefinition   The property definition.
     * @param   {SortDirection}             sortDirection        The sort direction.
     */
    Add(propertyDefinition: PropertyDefinitionBase, sortDirection: SortDirection): void {
        if (this.Contains(propertyDefinition)) {
            throw new ServiceLocalException(StringHelper.Format(Strings.PropertyAlreadyExistsInOrderByCollection, propertyDefinition.GetPrintableName()));
        }

        this.propDefSortOrderPairList.push({ key: propertyDefinition, value: sortDirection }); //new PropertyDefinitionSortDirectionPair() not seamless in javascript
    }

    /**
     * Removes all elements from the collection.
     */
    Clear(): void {
        this.propDefSortOrderPairList.splice(0);
    }

    /**
     * @internal Determines whether the collection contains the specified property definition.
     *
     * @param   {PropertyDefinitionBase}   propertyDefinition   The property definition.
     * @return  {boolean}   True if the collection contains the specified property definition; otherwise, false.
     */
    Contains(propertyDefinition: PropertyDefinitionBase): boolean {
        this.propDefSortOrderPairList.forEach((pair, index) => {
            debugger;// check if equality works or need to use any property
            if (pair.key === propertyDefinition)
                return true;
        });
        return false;
    }

    /**
     *  Returns an enumerator that iterates through the collection. this case this.propDefSortOrderPairList
     */
    GetEnumerator(): PropertyDefinitionSortDirectionPair[] {
        return this.propDefSortOrderPairList;
    }

    /**
     * @internal Removes the specified property definition from the collection.
     *
     * @param   {PropertyDefinitionBase}   propertyDefinition   The property definition.
     * @return  {boolean}   True if the property definition is successfully removed; otherwise, false
     */
    Remove(propertyDefinition: PropertyDefinitionBase): boolean {
        var oldCount = this.Count;
        this.propDefSortOrderPairList = this.propDefSortOrderPairList.filter((value) => { return value.key !== propertyDefinition; });
        return oldCount > this.Count;
    }

    /**
     * @internal Removes the element at the specified index from the collection.
     *
     * @param   {number}   index   The index.
     */
    RemoveAt(index: number): void {
        this.propDefSortOrderPairList.splice(index, 1);
    }

    /**
     * Tries to get the value for a property definition in the collection.
     *
     * @param   {PropertyDefinitionBase}    propertyDefinition   The property definition.
     * @param   {IOutParam<SortDirection>}  sortDirection        The sort direction.
     * @return  {boolean}                   True if collection contains property definition, otherwise false.
     */
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

    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     * @param   {string}                xmlElementName   Name of the XML element.
     */
    WriteToXml(writer: EwsServiceXmlWriter, xmlElementName: string): void {
        if (this.Count > 0) {
            writer.WriteStartElement(XmlNamespace.Messages, xmlElementName);

            for (var keyValuePair of this.propDefSortOrderPairList) {
                writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.FieldOrder);

                writer.WriteAttributeValue(XmlAttributeNames.Order, keyValuePair.value);
                keyValuePair.key.WriteToXml(writer);

                writer.WriteEndElement(); // FieldOrder
            }
            writer.WriteEndElement();
        }
    }
}