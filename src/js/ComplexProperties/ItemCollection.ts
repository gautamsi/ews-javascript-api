import {ArgumentOutOfRangeException} from "../Exceptions/ArgumentException";
import {ArrayHelper, TypeSystem} from "../ExtensionMethods";
import {EwsUtilities} from "../Core/EwsUtilities";
import {ExchangeService} from "../Core/ExchangeService";
import {ItemInfo} from "../Core/ServiceObjects/Items/ItemInfo";
import {Item} from "../Core/ServiceObjects/Items/Item";
import {Strings} from "../Strings";

import {ComplexProperty} from "./ComplexProperty";
/**
 * Represents a collection of items.
 */
export class ItemCollection<TItem extends Item> extends ComplexProperty { // IEnumerable<TItem>, IJsonCollectionDeserializer
    __implements: string[] = ["ISelfValidate", "IJsonSerializable", "IEnumerable<TItem>", "IJsonCollectionDeserializer"];

    private items: Array<TItem> = [];// System.Collections.Generic.List<T>;

    /**
     * Gets the total number of items in the collection.
     */
    get Count(): number {
        return this.items.length;
    }

    /**
     * Gets the item at the specified index.
     *
     * @param   {number}   index   The zero-based index of the item to get.
     * @return  {TItem}     The item at the specified index.
     */
    _getItem(index: number): TItem {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentOutOfRangeException("index", Strings.IndexIsOutOfRange);
        }
        return this.items[index];
    }

    /**
     * Initializes a new instance of the **ItemCollection** class.
     *
     */
    constructor() {
        super();
    }

    GetEnumerator(): any { throw new Error("ItemCollection.ts - GetEnumerator : Not implemented."); }//wil be implementedfor ES6 later with yield

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Jason Object converted from XML.
     * @param   {ExchangeService}     service                 The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {

        let collectionObj = undefined;
        if (ArrayHelper.isArray(jsObject)) {
            collectionObj = jsObject;
        }
        else {
            collectionObj = [jsObject];
        }

        for (let entry of collectionObj) {
            let jsonServiceObject = entry;
            let item: TItem = (new ItemInfo()).CreateEwsObjectFromXmlElementName<Item>(
                service,
                TypeSystem.GetJsObjectTypeName(jsonServiceObject)) as TItem;

            item.LoadFromXmlJsObject(jsonServiceObject, service, true);

            this.items.push(item);
        }

    }
}