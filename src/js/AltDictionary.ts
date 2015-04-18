
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
export class StringPropertyDefinitionBaseDictionary<TKey extends string, TValue extends PropertyDefinitionBase>{
    private keys: string[] = [];
    private objects: StringPropertyDefinitionArray<TKey, TValue> = {};// {[key:string]:TValue};

    //get KeyNames(): string[] { return this.keys; }
    get Keys(): TKey[] {
        var ret: TKey[] = [];
        for (var key in this.objects) {
            ret.push(key);
        }
        return ret;
    }
    get Items(): KeyValuePair<TKey, TValue>[] {
        var all = [];
        for (var obj in this.objects) {
            all.push({ key: this.objects[obj], value: this.objects[obj] });
        }
        return all;
    }
    get Values(): TValue[] {
        var ret: TValue[] = [];
        for (var key in this.objects) {
            ret.push(this.objects[key]);
        }
        return ret;
    }
    get length(): number { return this.keys.length; }
    constructor() {
    }

    add(key: TKey, value: TValue): void {
        if (this.keys.indexOf(<any>key) == -1) {
            this.keys.push(<any>key);
        }
        this.objects[<any>key] = value;
    }
    set(key: TKey, value: TValue): void {
        this.add(key, value);
    }

    get(key: TKey): TValue {
        if (string.IsNullOrEmpty(<any>key))
            throw new Error("invalid operation, object does not have valid Name property");

        //if(this.keys.indexOf(key.Name)>=0)
        return this.objects[<any>key];
    }

    tryGetValue(key: TKey, outValue: IOutParam<TValue>): boolean {
        outValue.value = null;
        outValue.success = false;

        if (string.IsNullOrEmpty(<any>key))
            outValue.exception = new Error("invalid operation, object does not have valid Name property");

        if (this.containsKey(key)) {
            outValue.value = this.objects[<any>key]
            return true;
        }

        return false;
    }

    remove(key: TKey): boolean {
        if (string.IsNullOrEmpty(<any>key)) throw new Error("missing keyString")
        return delete this.objects[<any>key];
    }

    containsKey(key: TKey): boolean {
        if (this.keys.indexOf(<any>key) >= 0 || typeof this.objects[<any>key] !== 'undefined')
            return true;

        return false;
    }

    clear(): void {

        this.keys = [];
        this.objects = {};
    }
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
export class PropDictionary<TKey extends { Name?: string }, TValue>{
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
        var all = [];
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
        if (string.IsNullOrEmpty(key.Name))
            throw new Error("invalid operation, object does not have valid Name property");

        //if(this.keys.indexOf(key.Name)>=0)
        var val = this.objects[key.Name]
        return val ? val.value : undefined;
    }

    tryGet(key: TKey, outValue: IOutParam<TValue>): boolean {
        outValue.value = null;
        outValue.success = false;

        if (string.IsNullOrEmpty(key.Name))
            outValue.exception = new Error("invalid operation, object does not have valid Name property");

        if (this.containsKey(key)) {
            var val = this.objects[key.Name]
            outValue.value = val ? val.value : null;
            return true;
        }

        return false;
    }

    remove(key: TKey): boolean {
        if (string.IsNullOrEmpty(key.Name)) throw new Error("missing keyString")
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
