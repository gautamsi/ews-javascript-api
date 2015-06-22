import {ExchangeService} from "../Core/ExchangeService";

import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";

import {ComplexProperty} from "./ComplexProperty";
export class ItemCollection<TItem> extends ComplexProperty { // IEnumerable<TItem>, IJsonCollectionDeserializer
    __implements: string[] = ["ISelfValidate", "IJsonSerializable", "IEnumerable<TItem>", "IJsonCollectionDeserializer"];

    Count: number;
    Item: TItem;
    private items: Array<TItem> = [];// System.Collections.Generic.List<T>;
    GetEnumerator(): any { throw new Error("ItemCollection.ts - GetEnumerator : Not implemented."); }//wil be implementedfor ES6 later with yield
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): any { throw new Error("ItemCollection.ts - LoadFromXmlJsObject : Not implemented."); }
}





//}



