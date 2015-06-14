import {IOutParam} from "./Interfaces/IOutParam";
import {PropertyDefinitionBase} from "./PropertyDefinitions/PropertyDefinitionBase";
import {StringHelper} from "./ExtensionMethods";
export interface IndexerWithStringKey<TValue> {
    [index: string]: TValue;
}
export interface IndexerWithNumericKey<TValue> {
    [index: number]: TValue;
}


export interface KeyValuePair<TKey, TValue> {
    key: TKey;
    value: TValue;
}
interface StringPropertyDefinitionArray<TKey, TValue> {
    [index: string]: TValue;
}
interface StringKeyPicker<TValue> {
    (value: TValue): string;
}
export class Dictionary<TKey, TValue>{
    private keys: string[] = [];
    private keysToObjs: IndexerWithStringKey<TKey> = {}
    private objects: IndexerWithStringKey<TValue> = {};// {[key:string]:TValue};
    private keyPicker: StringKeyPicker<TKey>;
    
    
    /** get all keys */
    get Keys(): TKey[] {
        var keys: TKey[] = [];
        for (var key in this.keys) {
            keys.push(this.keysToObjs[key]);
        }
        return keys;
    }
    /**get all items in key,value pair array */
    get Items(): KeyValuePair<TKey, TValue>[] {
        var items: KeyValuePair<TKey, TValue>[] = [];
        for (var k in this.keys) {
            items.push({ key: this.keysToObjs[k], value: this.objects[k] });
        }
        return items;
    }
    
    /** get all values */
    get Values(): TValue[] {
        var ret: TValue[] = [];
        for (var key in this.keys) {
            ret.push(this.objects[key]);
        }
        return ret;
    }
    
    /** get number of objects in dictionary */
    get length(): number { return this.keys.length; }
    /** get number of objects in the dictionary */
    get Count(): number { return this.length; }

    constructor(keyPickerFunc: StringKeyPicker<TKey>) {
        if (typeof keyPickerFunc !== 'function')
            throw new Error("Dictionary - keyPickerFunc must be a function");

        this.keyPicker = keyPickerFunc;

    }
    
    /** get string values of all keys */
    getStringKeys(): string[] { return this.keys; }
    
    
    /** add value or update the value for key */
    addUpdate(key: TKey, value: TValue): void {
        var strKey = this.keyPicker(key);
        if (StringHelper.IsNullOrEmpty(strKey))
            throw new Error("Dictionary - invalid key object, keyPicker return null");

        if (!this.containsKey(strKey)) {
            this.keys.push(strKey);
        }
        this.keysToObjs[strKey] = key;
        this.objects[strKey] = value;
    }
    
    /** Set value for key */
    set(key: TKey, value: TValue): void {
        this.addUpdate(key, value);
    }

    /** sets the new entry with old value or optionally new value, use isnull parameter to make sure you are setting a null value instead of old value */
    setEntry(oldKey: string, newKey: TKey): void;
    setEntry(oldKey: TKey, newKey: TKey): void;
    setEntry(oldKey: string | TKey, newKey: TKey): void {
        var strKey: string = <any>oldKey;
        if (typeof oldKey !== 'string')
            strKey = this.keyPicker(oldKey);

        if (StringHelper.IsNullOrEmpty(strKey))
            throw new Error("Dictionary - invalid key object, keyPicker return null");

        if (this.containsKey(strKey)) {
            throw new Error("Dictionary - does not contain old key");
        }
        var oldval = this.objects[strKey];
        //oldval =   null:value;
        this.remove(strKey);
        this.addUpdate(newKey, oldval);
    }
    /** get value for key */
    get(key: string): TValue;
    get(key: TKey): TValue;
    get(key: string | TKey): TValue {
        var strKey: string = <any>key;
        if (typeof key !== 'string')
            strKey = this.keyPicker(key);

        if (StringHelper.IsNullOrEmpty(strKey))
            throw new Error("Dictionary - invalid key object, keyPicker return null");

        return this.objects[strKey];

    }
    /**try get value for key or return exception in IOutParam.exception */
    tryGetValue(key: string, outValue: IOutParam<TValue>): boolean;
    tryGetValue(key: TKey, outValue: IOutParam<TValue>): boolean;
    tryGetValue(key: string | TKey, outValue: IOutParam<TValue>): boolean {
        outValue.outValue = null;
        outValue.success = false;

        var strKey: string = <any>key;
        if (typeof key !== 'string')
            strKey = this.keyPicker(key);

        if (StringHelper.IsNullOrEmpty(strKey)) {
            outValue.exception = new Error("Dictionary - invalid key,not a string value or keyPicker return null");
            return false;
        }
        if (this.containsKey(strKey)) {
            outValue.outValue = this.objects[strKey]
            outValue.success = true;
            return true;
        }

        return false;
    }
    /**remove key and value for key */
    remove(key: string): boolean;
    remove(key: TKey): boolean;
    remove(key: string | TKey): boolean {
        var strKey: string = <any>key;
        if (typeof key !== 'string')
            strKey = this.keyPicker(key);
        if (StringHelper.IsNullOrEmpty(strKey))
            throw new Error("Dictionary - invalid key,not a string value or keyPicker return null");
        if (!this.containsKey(strKey))
            return false;

        var keyindex = this.keys.indexOf(strKey);
        var delKeyAr: string[] = this.keys.splice(keyindex, 1);

        var delkeyObj: boolean = delete this.keysToObjs[strKey];
        var delObj: boolean = delete this.objects[strKey];
        return delKeyAr.length > 0 && delkeyObj && delObj;
    }
    
    /** check if key exist */
    containsKey(key: string): boolean;
    containsKey(key: TKey): boolean;
    containsKey(key: string | TKey): boolean {
        var strKey: string = <any>key;
        if (typeof key !== 'string')
            strKey = this.keyPicker(key);

        if (StringHelper.IsNullOrEmpty(strKey))
            throw new Error("Dictionary - invalid key object, keyPicker return null");

        if (this.keys.indexOf(strKey) >= 0)
            return true;

        return false;
    }
    /** clear dictionary */
    clear(): void {

        this.keys = [];
        this.keysToObjs = {};
        this.objects = {};
    }
}

export class StringPropertyDefinitionBaseDictionary<TKey extends string, TValue extends PropertyDefinitionBase> extends Dictionary<string, TValue>{
    //private keys: string[] = [];
    //private objects: StringPropertyDefinitionArray<TKey, TValue> = {};// {[key:string]:TValue};

    
}

export class PropertyDefinitionDictionary extends StringPropertyDefinitionBaseDictionary<string, PropertyDefinitionBase>{
}

export interface IndexerWithEnumKey<TKey, TValue> {
    [index: number]: TValue;
}
interface PropDictionaryKey {
    name?: string;
    key?: string;
    id?: string;
}
interface PropDictionaryValue<TKey, TValue> {
    key: string;
    keyObject: TKey;
    value: TValue;

}
interface StringArray<TKey, TValue> {
    [index: string]: PropDictionaryValue<TKey, TValue>;
}

export class DictionaryWithStringKey<TValue> extends Dictionary<string, TValue>{
    constructor() {
        super((value) => value);
    }
}
export class DictionaryWithNumericKey<TValue> extends Dictionary<number, TValue>{
    constructor() {
        super((value) => value.toString());
    }
}
export class DictionaryWithPropertyDefitionKey<TKey extends { Name?: string }, TValue> extends Dictionary<TKey, TValue>{
    constructor() {
        super((value: TKey) => value.Name);
    }
}

class PropDictionary2<TKey extends { Name?: string }, TValue>{
    private keys: string[] = [];
    private objects: StringArray<TKey, TValue> = {};// {[key:string]:TValue};

    get KeyNames(): string[] { return this.keys; }
    get Keys(): TKey[] {
        var ret: TKey[] = [];
        for (var key in this.objects) {
            ret.push(this.objects[key].keyObject);
        }
        return ret;
    }
    get Items(): KeyValuePair<TKey, TValue>[] {
        var all: any[] = [];
        for (var obj in this.objects) {
            all.push({ key: this.objects[obj].keyObject, value: this.objects[obj].value });
        }
        return all;
    }
    get Values(): TValue[] {
        var ret: TValue[] = [];
        for (var key in this.objects) {
            ret.push(this.objects[key].value);
        }
        return ret;
    }
    get length(): number { return this.keys.length; }
    constructor() {
    }

    add(key: TKey, value: TValue): void {
        var keyString = key.Name;
        if (this.keys.indexOf(key.Name) == -1) {
            this.keys.push(keyString);
        }
        this.objects[keyString] = { key: keyString, keyObject: key, value: value };
    }
    set(key: TKey, value: TValue): void {
        this.add(key, value);
    }
    setEntry(oldKeyString: string, oldKey: TKey, value?: TValue, isNull: boolean = false): void {

        if (this.keys.indexOf(oldKeyString) == -1 || typeof this.objects[oldKeyString] === 'undefined') {
            throw new Error("invalid old keystring");
        }
        var oldval = isNull ? null : value || this.objects[oldKeyString].value;
        //oldval =   null:value;
        this.objects[oldKeyString] = { key: oldKey.Name, keyObject: oldKey, value: value || oldval };
    }
    get(key: TKey): TValue {
        if (StringHelper.IsNullOrEmpty(key.Name))
            throw new Error("invalid operation, object does not have valid Name property");

        //if(this.keys.indexOf(key.Name)>=0)
        var val = this.objects[key.Name]
        return val ? val.value : undefined;
    }

    tryGet(key: TKey, outValue: IOutParam<TValue>): boolean {
        outValue.outValue = null;
        outValue.success = false;

        if (StringHelper.IsNullOrEmpty(key.Name))
            outValue.exception = new Error("invalid operation, object does not have valid Name property");

        if (this.containsKey(key)) {
            var val = this.objects[key.Name]
            outValue.outValue = val ? val.value : null;
            return true;
        }

        return false;
    }

    remove(key: TKey): boolean {
        if (StringHelper.IsNullOrEmpty(key.Name)) throw new Error("missing keyString")
        return delete this.objects[key.Name];
    }

    containsKey(key: TKey): boolean {
        if (this.keys.indexOf(key.Name) >= 0 || typeof this.objects[key.Name] !== 'undefined')
            return true;

        return false;
    }

    clear(): void {

        this.keys = [];
        this.objects = {};
    }
}

