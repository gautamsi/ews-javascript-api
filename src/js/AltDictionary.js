"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionMethods_1 = require("./ExtensionMethods");
var Dictionary = /** @class */ (function () {
    function Dictionary(keyPickerFunc) {
        this.keys = [];
        this.keysToObjs = {};
        this.objects = {}; // {[key:string]:TValue};
        if (typeof keyPickerFunc !== 'function')
            throw new Error("Dictionary - keyPickerFunc must be a function");
        this.keyPicker = keyPickerFunc;
    }
    Object.defineProperty(Dictionary.prototype, "Keys", {
        /** get all keys */
        get: function () {
            var keys = [];
            for (var _i = 0, _a = this.keys; _i < _a.length; _i++) {
                var key = _a[_i];
                keys.push(this.keysToObjs[key]);
            }
            return keys;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dictionary.prototype, "Items", {
        /**get all items in key,value pair array */
        get: function () {
            var items = [];
            for (var _i = 0, _a = this.keys; _i < _a.length; _i++) {
                var k = _a[_i];
                items.push({ key: this.keysToObjs[k], value: this.objects[k] });
            }
            return items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dictionary.prototype, "Values", {
        /** get all values */
        get: function () {
            var ret = [];
            for (var _i = 0, _a = this.keys; _i < _a.length; _i++) {
                var key = _a[_i];
                ret.push(this.objects[key]);
            }
            return ret;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dictionary.prototype, "length", {
        /** get number of objects in dictionary */
        get: function () { return this.keys.length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dictionary.prototype, "Count", {
        /** get number of objects in the dictionary */
        get: function () { return this.length; },
        enumerable: true,
        configurable: true
    });
    /** get string values of all keys */
    Dictionary.prototype.getStringKeys = function () { return this.keys; };
    /** add value or update the value for key */
    Dictionary.prototype.Add = function (key, value) { return this.addUpdate(key, value); };
    /** add value or update the value for key */
    Dictionary.prototype.addUpdate = function (key, value) {
        var strKey = this.keyPicker(key);
        if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(strKey))
            throw new Error("Dictionary - invalid key object, keyPicker return null");
        if (!this.containsKey(strKey)) {
            this.keys.push(strKey);
        }
        this.keysToObjs[strKey] = key;
        this.objects[strKey] = value;
    };
    /** Set value for key */
    Dictionary.prototype.set = function (key, value) {
        this.addUpdate(key, value);
    };
    Dictionary.prototype.setEntry = function (oldKey, newKey) {
        var strKey = oldKey;
        if (typeof oldKey !== 'string')
            strKey = this.keyPicker(oldKey);
        if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(strKey))
            throw new Error("Dictionary - invalid key object, keyPicker return null");
        if (this.containsKey(strKey)) {
            throw new Error("Dictionary - does not contain old key");
        }
        var oldval = this.objects[strKey];
        //oldval =   null:value;
        this.remove(strKey);
        this.addUpdate(newKey, oldval);
    };
    Dictionary.prototype.get = function (key) {
        var strKey = key;
        if (typeof key !== 'string')
            strKey = this.keyPicker(key);
        if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(strKey))
            throw new Error("Dictionary - invalid key object, keyPicker return null");
        return this.objects[strKey];
    };
    Dictionary.prototype.tryGetValue = function (key, outValue) {
        outValue.outValue = null;
        outValue.success = false;
        var strKey = key;
        if (typeof key !== 'string')
            strKey = this.keyPicker(key);
        if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(strKey)) {
            outValue.exception = new Error("Dictionary - invalid key,not a string value or keyPicker return null");
            return false;
        }
        if (this.containsKey(strKey)) {
            outValue.outValue = this.objects[strKey];
            outValue.success = true;
            return true;
        }
        return false;
    };
    Dictionary.prototype.remove = function (key) {
        var strKey = key;
        if (typeof key !== 'string')
            strKey = this.keyPicker(key);
        if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(strKey))
            throw new Error("Dictionary - invalid key,not a string value or keyPicker return null");
        if (!this.containsKey(strKey))
            return false;
        var keyindex = this.keys.indexOf(strKey);
        var delKeyAr = this.keys.splice(keyindex, 1);
        var delkeyObj = delete this.keysToObjs[strKey];
        var delObj = delete this.objects[strKey];
        return delKeyAr.length > 0 && delkeyObj && delObj;
    };
    Dictionary.prototype.containsKey = function (key) {
        var strKey = key;
        if (typeof key !== 'string')
            strKey = this.keyPicker(key);
        if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(strKey))
            throw new Error("Dictionary - invalid key object, keyPicker return null");
        if (this.keys.indexOf(strKey) >= 0)
            return true;
        return false;
    };
    /** clear dictionary */
    Dictionary.prototype.clear = function () {
        this.keys = [];
        this.keysToObjs = {};
        this.objects = {};
    };
    return Dictionary;
}());
exports.Dictionary = Dictionary;
/**@internal */
var StringPropertyDefinitionBaseDictionary = /** @class */ (function (_super) {
    __extends(StringPropertyDefinitionBaseDictionary, _super);
    function StringPropertyDefinitionBaseDictionary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StringPropertyDefinitionBaseDictionary;
}(Dictionary));
exports.StringPropertyDefinitionBaseDictionary = StringPropertyDefinitionBaseDictionary;
/**@internal */
var PropertyDefinitionDictionary = /** @class */ (function (_super) {
    __extends(PropertyDefinitionDictionary, _super);
    function PropertyDefinitionDictionary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PropertyDefinitionDictionary;
}(StringPropertyDefinitionBaseDictionary));
exports.PropertyDefinitionDictionary = PropertyDefinitionDictionary;
/**@internal */
var DictionaryWithStringKey = /** @class */ (function (_super) {
    __extends(DictionaryWithStringKey, _super);
    function DictionaryWithStringKey() {
        return _super.call(this, function (value) { return value; }) || this;
    }
    return DictionaryWithStringKey;
}(Dictionary));
exports.DictionaryWithStringKey = DictionaryWithStringKey;
/**@internal */
var DictionaryWithNumericKey = /** @class */ (function (_super) {
    __extends(DictionaryWithNumericKey, _super);
    function DictionaryWithNumericKey() {
        return _super.call(this, function (value) { return value.toString(); }) || this;
    }
    return DictionaryWithNumericKey;
}(Dictionary));
exports.DictionaryWithNumericKey = DictionaryWithNumericKey;
/**@internal */
var DictionaryWithPropertyDefitionKey = /** @class */ (function (_super) {
    __extends(DictionaryWithPropertyDefitionKey, _super);
    function DictionaryWithPropertyDefitionKey() {
        return _super.call(this, function (value) { return value.Name; }) || this;
    }
    return DictionaryWithPropertyDefitionKey;
}(Dictionary));
exports.DictionaryWithPropertyDefitionKey = DictionaryWithPropertyDefitionKey;
var PropDictionary2 = /** @class */ (function () {
    function PropDictionary2() {
        this.keys = [];
        this.objects = {}; // {[key:string]:TValue};
    }
    Object.defineProperty(PropDictionary2.prototype, "KeyNames", {
        get: function () { return this.keys; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropDictionary2.prototype, "Keys", {
        get: function () {
            var ret = [];
            for (var key in this.objects) {
                ret.push(this.objects[key].keyObject);
            }
            return ret;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropDictionary2.prototype, "Items", {
        get: function () {
            var all = [];
            for (var obj in this.objects) {
                all.push({ key: this.objects[obj].keyObject, value: this.objects[obj].value });
            }
            return all;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropDictionary2.prototype, "Values", {
        get: function () {
            var ret = [];
            for (var key in this.objects) {
                ret.push(this.objects[key].value);
            }
            return ret;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PropDictionary2.prototype, "length", {
        get: function () { return this.keys.length; },
        enumerable: true,
        configurable: true
    });
    PropDictionary2.prototype.add = function (key, value) {
        var keyString = key.Name;
        if (this.keys.indexOf(key.Name) == -1) {
            this.keys.push(keyString);
        }
        this.objects[keyString] = { key: keyString, keyObject: key, value: value };
    };
    PropDictionary2.prototype.set = function (key, value) {
        this.add(key, value);
    };
    PropDictionary2.prototype.setEntry = function (oldKeyString, oldKey, value, isNull) {
        if (isNull === void 0) { isNull = false; }
        if (this.keys.indexOf(oldKeyString) == -1 || typeof this.objects[oldKeyString] === 'undefined') {
            throw new Error("invalid old keystring");
        }
        var oldval = isNull ? null : value || this.objects[oldKeyString].value;
        //oldval =   null:value;
        this.objects[oldKeyString] = { key: oldKey.Name, keyObject: oldKey, value: value || oldval };
    };
    PropDictionary2.prototype.get = function (key) {
        if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(key.Name))
            throw new Error("invalid operation, object does not have valid Name property");
        //if(this.keys.indexOf(key.Name)>=0)
        var val = this.objects[key.Name];
        return val ? val.value : undefined;
    };
    PropDictionary2.prototype.tryGet = function (key, outValue) {
        outValue.outValue = null;
        outValue.success = false;
        if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(key.Name))
            outValue.exception = new Error("invalid operation, object does not have valid Name property");
        if (this.containsKey(key)) {
            var val = this.objects[key.Name];
            outValue.outValue = val ? val.value : null;
            return true;
        }
        return false;
    };
    PropDictionary2.prototype.remove = function (key) {
        if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(key.Name))
            throw new Error("missing keyString");
        return delete this.objects[key.Name];
    };
    PropDictionary2.prototype.containsKey = function (key) {
        if (this.keys.indexOf(key.Name) >= 0 || typeof this.objects[key.Name] !== 'undefined')
            return true;
        return false;
    };
    PropDictionary2.prototype.clear = function () {
        this.keys = [];
        this.objects = {};
    };
    return PropDictionary2;
}());
