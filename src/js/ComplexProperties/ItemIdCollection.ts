import {ArrayHelper, StringHelper, TypeSystem} from "../ExtensionMethods";
import {EwsLogging} from "../Core/EwsLogging";
import {EwsServiceJsonReader} from "../Core/EwsServiceJsonReader";
import {ExchangeService} from "../Core/ExchangeService";
import {XmlElementNames} from "../Core/XmlElementNames";

import {ItemId} from "./ItemId";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
/**
 * Represents a collection of item Ids.
 * 
 * @sealed
 */
export class ItemIdCollection extends ComplexPropertyCollection<ItemId> {

    /**
     * @internal Initializes a new instance of the **ItemIdCollection** class.
     */
    constructor() {
        super();
    }

    /**
     * @internal Creates the complex property.
     *
     * @param   {string}    xmlElementName   Name of the XML element.
     * @return  {ItemId}    ItemId.
     */
    CreateComplexProperty(xmlElementName: string): ItemId {
        return new ItemId();
    }

    /**
     * @internal Creates the default complex property.
     *
     * @return  {ItemId}      ItemId.
     */
    CreateDefaultComplexProperty(): ItemId {
        return new ItemId();
    }

    /**
     * @internal Loads from XMLJsObject collection to create a new collection item.
     *
     * @interface   IJsonCollectionDeserializer
     * 
     * @param   {any}               jsObjectCollection   The json collection.
     * @param   {ExchangeService}   service          The service.
     */
    CreateFromXmlJsObjectCollection(jsObjectCollection: any, service: ExchangeService): void {
        let collection: ItemId[] = jsObjectCollection;
        if (!ArrayHelper.isArray(collection)) {
            if(jsObjectCollection[XmlElementNames.OccurrenceItemId]){
                EwsLogging.Log("Fix needed for ItemIdCollection for element OccurrenceItemId",true,true);
                EwsLogging.Log(jsObjectCollection[XmlElementNames.OccurrenceItemId],true,true);
            }
            if(jsObjectCollection[XmlElementNames.RecurringMasterItemId]){
                EwsLogging.Log("Fix needed for ItemIdCollection for element RecurringMasterItemId",true,true);
                EwsLogging.Log(jsObjectCollection[XmlElementNames.RecurringMasterItemId],true,true);
            }
            collection = EwsServiceJsonReader.ReadAsArray(collection, XmlElementNames.ItemId);
        }

        super.CreateFromXmlJsObjectCollection(collection, service);
    }

    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {ItemId}   complexProperty   The complex property.
     * @return  {string}                     XML element name.
     */
    GetCollectionItemXmlElementName(complexProperty: ItemId): string {
        return complexProperty.GetXmlElementName();
    }

    /**
     * @internal Loads from XMLJsObject collection to update collection Items.
     *
     * @interface   IJsonCollectionDeserializer
     * 
     * @param   {any}               jsObjectCollection   The XMLJsObject collection.
     * @param   {ExchangeService}   service          The service.
     */
    UpdateFromXmlJsObjectCollection(jsObjectCollection: any, service: ExchangeService): void {
        let collection: ItemId[] = jsObjectCollection;
        if (!ArrayHelper.isArray(collection)) {
            collection = EwsServiceJsonReader.ReadAsArray(collection, XmlElementNames.ItemId);
        }

        super.UpdateFromXmlJsObjectCollection(collection, service);
    }
}