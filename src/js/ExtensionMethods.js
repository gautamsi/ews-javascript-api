"use strict";
/// <reference path="../../typings/base64-js.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var b64 = require("base64-js");
var StringHelper;
(function (StringHelper) {
    function IsNullOrEmpty(str) {
        return str == null || typeof str === 'undefined' || str === '';
    }
    StringHelper.IsNullOrEmpty = IsNullOrEmpty;
    /*
    * @author electricessence / https://github.com/electricessence/
    * Liscensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE
      part System.Text at above library
    */
    function Format(source) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        for (var i = 0; i < args.length; i++)
            source = source.replace("{" + i + "}", args[i]);
        return source;
    }
    StringHelper.Format = Format;
    StringHelper.Empty = "";
    function Repeat(str, times) {
        if (str === void 0) { str = ""; }
        if (times === void 0) { times = 1; }
        return new Array(times + 1).join(str);
    }
    StringHelper.Repeat = Repeat;
    function Tabs(times) {
        if (times === void 0) { times = 0; }
        return Repeat("\t", times);
    }
    StringHelper.Tabs = Tabs;
    function Compare(lhs, rhs, ignoreCase) {
        if (ignoreCase === void 0) { ignoreCase = false; }
        if (ignoreCase) {
            return lhs.toLocaleLowerCase().localeCompare(rhs.toLocaleLowerCase());
        }
        else {
            return lhs.localeCompare(rhs);
        }
    }
    StringHelper.Compare = Compare;
})(StringHelper = exports.StringHelper || (exports.StringHelper = {}));
var EnumHelper;
(function (EnumHelper) {
    function HasFlag(flags, checkFlag) {
        return (flags & checkFlag) == checkFlag;
    }
    EnumHelper.HasFlag = HasFlag;
    /**
     * Writes "," separated values from Enumertion anf enum Flags
     *
     * @export
     * @param {*} enumObj The Enumeration Object itself, for example 'ExchangeVersion' as the parameter Value.
     * @param {number} checkFlag Flag value(s) to convert to string
     * @param {boolean} [includeZero=false] include the default 0 value in the string, usually false
     * @returns {string} returns the coma "," separated string representation of Flags
     */
    function ToString(enumObj, checkFlag, includeZero) {
        if (includeZero === void 0) { includeZero = false; }
        if ((checkFlag & (checkFlag - 1)) == 0)
            return enumObj[checkFlag];
        var result = [];
        var diff = checkFlag;
        var largestFlag = 0; // = Math.pow(2, Math.floor(Math.pow(checkFlag, (1 / 2))));
        while (diff > 1) {
            largestFlag = Math.pow(2, Math.floor(Math.log(diff) / Math.log(2)));
            diff = diff - largestFlag;
            var largestValue = enumObj[largestFlag];
            if (largestValue === undefined)
                return undefined;
            result.push(largestValue);
        }
        if (diff == 1)
            result.push(enumObj[1]);
        if (includeZero && enumObj[0])
            result.push(enumObj[0]);
        result.reverse();
        return result.join(", ");
    }
    EnumHelper.ToString = ToString;
})(EnumHelper = exports.EnumHelper || (exports.EnumHelper = {}));
var object;
(function (object) {
    function getPrototypeChain(ctor) {
        //unused
        //http://typescript.codeplex.com/discussions/468576
        var chain = [];
        var proto = ctor.prototype;
        while (proto) {
            chain.push(proto.constructor);
            proto = Object.getPrototypeOf(proto);
        }
        return chain;
        //var ste = JSON.stringify(ste);
    }
})(object || (object = {}));
/**
 * explicitly checks if the obj is null or undefined
 * @param obj input to be checked
 */
function isNullOrUndefined(obj) {
    return typeof obj === 'undefined' || obj === null;
}
exports.isNullOrUndefined = isNullOrUndefined;
var ArrayHelper;
(function (ArrayHelper) {
    function AddRange(array, items, uniqueOnly) {
        if (uniqueOnly === void 0) { uniqueOnly = false; }
        if (Object.prototype.toString.call(array) !== "[object Array]")
            throw new Error("input obj is not an array");
        if (Object.prototype.toString.call(items) !== "[object Array]")
            throw new Error("input range is not an array");
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            if (!(uniqueOnly && array.indexOf(item) >= 0)) {
                array.push(item);
            }
        }
    }
    ArrayHelper.AddRange = AddRange;
    function RemoveEntry(array, entry, comparer) {
        if (comparer === void 0) { comparer = null; }
        var index = array.indexOf(entry);
        if (comparer) {
            var entry_1 = ArrayHelper.Find(array, comparer);
            index = array.indexOf(entry_1);
        }
        var lastLength = array.length;
        if (index >= 0) {
            array.splice(index, 1);
            return lastLength - array.length === 1;
        }
        else {
            return false;
        }
    }
    ArrayHelper.RemoveEntry = RemoveEntry;
    function Find(array, comparer) {
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var entry = array_1[_i];
            if (comparer(entry)) {
                return entry;
            }
        }
        return null;
    }
    ArrayHelper.Find = Find;
    function IndexOf(array, comparer) {
        var item = ArrayHelper.Find(array, comparer);
        return array.indexOf(item);
    }
    ArrayHelper.IndexOf = IndexOf;
    function OfType(array, comparer) {
        var result = [];
        for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
            var entry = array_2[_i];
            if (comparer(entry)) {
                result.push(entry);
            }
        }
        return result;
    }
    ArrayHelper.OfType = OfType;
    /**dirty calculation of max dimension, will return more than one if array contains any array element in first testElementCount items */
    function Rank(array, testElementCount) {
        if (testElementCount === void 0) { testElementCount = 4; }
        var rank = 1;
        if (array.length === 0) {
            return rank;
        }
        var length = array.length <= testElementCount ? array.length : testElementCount;
        var maxDepthRank = 0;
        for (var index = 0; index < length; index++) {
            var element = array[index];
            if (Array.isArray(element)) {
                var _tRank = Rank(element, testElementCount);
                maxDepthRank = _tRank > maxDepthRank ? _tRank : maxDepthRank;
            }
        }
        rank += maxDepthRank;
        return rank;
    }
    ArrayHelper.Rank = Rank;
    function isArray(obj) {
        return Object.prototype.toString.call(obj) === "[object Array]";
    }
    ArrayHelper.isArray = isArray;
})(ArrayHelper = exports.ArrayHelper || (exports.ArrayHelper = {}));
var TypeSystem = /** @class */ (function () {
    function TypeSystem() {
    }
    TypeSystem.GetProperties = function (obj) {
        var props = new Array();
        for (var s in obj) {
            if (typeof (obj[s]) != "function") {
                props[props.length] = s;
            }
        }
        return props;
    };
    TypeSystem.GetMethods = function (obj) {
        var methods = new Array();
        for (var s in obj) {
            if (typeof (obj[s]) == "function") {
                methods[methods.length] = s;
            }
        }
        return methods;
    };
    TypeSystem.GetObjectStaticPropertiesByClassName = function (className) {
        var obj = this.GetObjectByClassName(className);
        //if (prototype)
        //    obj = obj.prototype;
        if (obj == null || typeof (obj) == undefined)
            return []; //throw new Error("can not determine type");
        return this.GetProperties(obj);
    };
    TypeSystem.GetObjectMethodsByClassName = function (className, instanceMethod) {
        if (instanceMethod === void 0) { instanceMethod = true; }
        var obj = this.GetObjectByClassName(className);
        if (obj == null || typeof (obj) == undefined)
            return []; // throw new Error("can not determine type");
        else if (instanceMethod)
            obj = obj.prototype || obj;
        return this.GetMethods(obj);
    };
    TypeSystem.GetObjectByClassName = function (className) {
        var obj;
        if (className.indexOf(".") > 0) {
            var objs = className.split(".");
            obj = window[objs[0]];
            for (var i = 1; i < objs.length; i++) {
                obj = obj[objs[i]];
            }
        }
        else
            obj = window[className];
        //if (prototype)
        //    obj = obj.prototype;
        return obj;
    };
    TypeSystem.GetJsObjectTypeName = function (obj) {
        var keys = Object.keys(obj);
        if (keys && keys.indexOf("__type") >= 0)
            return obj["__type"];
        return undefined;
    };
    TypeSystem.GetJsObjectOnlyChildName = function (obj) {
        for (var key in obj) {
            if (key.indexOf("__") >= 0)
                continue;
            return key;
        }
        return null;
    };
    TypeSystem.GetJsObjectTypeName_old = function (obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                var element = obj[key];
                if (element["__type"])
                    return element["__type"];
            }
        }
        return undefined;
    };
    TypeSystem.IsGenericType = function (value) {
        if (value === null || typeof value === 'undefined') {
            return false;
        }
        var valueType = typeof value;
        return valueType === 'string' || valueType === 'boolean' || valueType === 'number';
    };
    return TypeSystem;
}());
exports.TypeSystem = TypeSystem;
//use this class to to work with node - https://github.com/jindw/xmldom - tested working with commit f053be7ceb. 
//This library creates DOMParser object like functionality in node.For browsers, skip xmldom library and use inbuilt browser object
//var DOMParser = require('xmldom').DOMParser;
//var dom = new DOMParser().parseFromString("xml data", 'text/xml');
//ewslogging.log(JSON.stringify(xmlToJson(dom.documentElement)));
var xml2JsObject = /** @class */ (function () {
    function xml2JsObject() {
        this.typeIncludedNS = [
            "http://schemas.microsoft.com/exchange/services/2006/types",
            "http://schemas.microsoft.com/exchange/services/2006/messages"
        ];
    }
    xml2JsObject.prototype.parseXMLNode = function (xmlNode, soapMode, xmlnsRoot) {
        if (soapMode === void 0) { soapMode = false; }
        if (xmlnsRoot === void 0) { xmlnsRoot = undefined; }
        var obj = {};
        if (!xmlnsRoot)
            xmlnsRoot = obj;
        if (typeof (xmlNode) === 'undefined')
            return obj;
        var textNodeName = undefined;
        var PREFIX_STR = "__prefix";
        var TYPE_STR = "__type";
        var TEXT_STR = "__text";
        switch (xmlNode.nodeType) {
            case 1 /*Node.ELEMENT_NODE*/:
                if (xmlNode.prefix && xmlNode.localName !== xmlNode.nodeName)
                    obj[PREFIX_STR] = xmlNode.prefix;
                if (this.typeIncludedNS.indexOf(xmlNode.namespaceURI) >= 0) {
                    obj[TYPE_STR] = xmlNode.localName;
                }
                var nonGenericAttributeCount = 0;
                for (var i = 0; i < xmlNode["attributes"].length; i++) {
                    nonGenericAttributeCount++;
                    var attr = xmlNode["attributes"].item(i);
                    if (attr.prefix)
                        if (attr.prefix === 'xmlns') {
                            this.addXMLNS(xmlnsRoot, attr.localName, attr.value);
                            nonGenericAttributeCount--;
                        }
                        else if (this.containsXMLNS(xmlnsRoot, attr.prefix))
                            obj[attr.localName] = attr.value;
                        else
                            obj[attr.name] = attr.value;
                    else if (attr.localName === 'xmlns') {
                        if (xmlNode.namespaceURI !== attr.value && typeof obj[TYPE_STR] === 'undefiend') {
                            obj[TYPE_STR] = attr.value;
                        }
                        nonGenericAttributeCount--;
                    }
                    else
                        obj[attr.localName] = attr.value;
                }
                if (soapMode) {
                    if (nonGenericAttributeCount === 0 && xmlNode.childNodes.length === 0)
                        return null;
                    if (xmlNode.childNodes.length === 1 && xmlNode.firstChild.nodeType === 3 /*Node.TEXT_NODE*/) {
                        if (xmlNode.firstChild.nodeValue.trim() !== '') {
                            if (nonGenericAttributeCount === 0) {
                                return xmlNode.firstChild.nodeValue.trim();
                            }
                            else {
                                obj[xmlNode.localName] = xmlNode.firstChild.nodeValue.trim();
                                return obj;
                            }
                        }
                    }
                    if (soapMode && obj["nil"] && obj["nil"] === 'true') {
                        return null;
                    }
                }
                break;
            case 2 /*Node.ATTRIBUTE_NODE*/:
                break;
            case 3 /*Node.TEXT_NODE*/:
                return xmlNode.nodeValue;
                break;
            default:
                return obj;
        }
        if (xmlNode.childNodes.length > 0) {
            var skip = false;
            if (soapMode && xmlNode.childNodes.length === 1 && xmlNode.firstChild.nodeType === 3 /*Node.TEXT_NODE*/)
                skip = true;
            if (!skip) {
                for (var i = 0; i < xmlNode.childNodes.length; i++) {
                    var node = xmlNode.childNodes.item(i);
                    var localName = node.localName || TEXT_STR;
                    if (localName === TEXT_STR && node.nodeValue.trim() === "")
                        continue;
                    var nodeObj = this.parseXMLNode(node, soapMode, xmlnsRoot);
                    if (obj[localName])
                        if (Object.prototype.toString.call(obj[localName]) === "[object Array]")
                            obj[localName].push(nodeObj);
                        else {
                            var old = obj[localName];
                            obj[localName] = [];
                            obj[localName].push(old);
                            obj[localName].push(nodeObj);
                        }
                    else
                        obj[localName] = nodeObj;
                }
            }
        }
        return obj;
    };
    xml2JsObject.prototype.addXMLNS = function (xmlnsObj, xmlnsName, xmlnsValue, xmlnsAttrName) {
        if (xmlnsAttrName === void 0) { xmlnsAttrName = "__xmlns"; }
        if (!xmlnsObj[xmlnsAttrName])
            xmlnsObj[xmlnsAttrName] = {};
        (xmlnsObj[xmlnsAttrName])[xmlnsName] = xmlnsValue;
    };
    xml2JsObject.prototype.containsXMLNS = function (obj, xmlnsName, xmlnsAttrName) {
        if (xmlnsAttrName === void 0) { xmlnsAttrName = "__xmlns"; }
        if (obj[xmlnsAttrName])
            return typeof ((obj[xmlnsAttrName])[xmlnsName]) !== 'undefined';
        return false;
    };
    return xml2JsObject;
}());
exports.xml2JsObject = xml2JsObject;
var UriHelper = /** @class */ (function () {
    function UriHelper() {
    }
    //RFC Appendix B - http://www.ietf.org/rfc/rfc3986.txt 
    /*    Appendix B.  Parsing a URI Reference with a Regular Expression
    
       As the "first-match-wins" algorithm is identical to the "greedy"
       disambiguation method used by POSIX regular expressions, it is
       natural and commonplace to use a regular expression for parsing the
       potential five components of a URI reference.
    
       The following line is the regular expression for breaking-down a
       well-formed URI reference into its components.
    
    
    
    Berners-Lee, et al.         Standards Track                    [Page 50]
     
    RFC 3986                   URI Generic Syntax               January 2005
    
    
          ^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?
           12            3  4          5       6  7        8 9
    
       The numbers in the second line above are only to assist readability;
       they indicate the reference points for each subexpression (i.e., each
       paired parenthesis).  We refer to the value matched for subexpression
       <n> as $<n>.  For example, matching the above expression to
    
          http://www.ics.uci.edu/pub/ietf/uri/#Related
    
       results in the following subexpression matches:
    
          $1 = http:
          $2 = http
          $3 = //www.ics.uci.edu
          $4 = www.ics.uci.edu
          $5 = /pub/ietf/uri/
          $6 = <undefined>
          $7 = <undefined>
          $8 = #Related
          $9 = Related
    
       where <undefined> indicates that the component is not present, as is
       the case for the query component in the above example.  Therefore, we
       can determine the value of the five components as
    
          scheme    = $2
          authority = $4
          path      = $5
          query     = $7
          fragment  = $9
    
       Going in the opposite direction, we can recreate a URI reference from
       its components by using the algorithm of Section 5.3.
    */
    UriHelper.parseString = function (url) {
        var regex = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
        var parts = url.match(regex);
        return {
            scheme: parts[2],
            authority: parts[4],
            path: parts[5],
            query: parts[7],
            fragment: parts[9]
        };
    };
    UriHelper.getDomain = function (url) {
        return this.parseString(url).authority;
    };
    UriHelper.getHost = function (url) {
        return this.getDomain(url);
    };
    return UriHelper;
}());
exports.UriHelper = UriHelper;
var isNode = (typeof window === 'undefined');
var dp = undefined;
if (isNode) {
    var dr = require('xmldom');
    dp = dr.DOMParser;
}
else {
    dp = window.DOMParser;
}
exports.DOMParser = dp;
var Convert = /** @class */ (function () {
    function Convert() {
    }
    Convert.toInt = function (value, zeroIfError) {
        if (zeroIfError === void 0) { zeroIfError = true; }
        var result = 0;
        try {
            result = parseInt(value);
        }
        catch (ex) {
            if (!zeroIfError)
                throw ex;
        }
        return result;
    };
    Convert.toNumber = function (value) {
        return Number(value);
    };
    Convert.toBool = function (value, truefalseString, throwIfNotBool) {
        if (truefalseString === void 0) { truefalseString = true; }
        if (throwIfNotBool === void 0) { throwIfNotBool = false; }
        if (typeof value === 'boolean')
            return value;
        var num = Number(value);
        if (!isNaN(num)) {
            return num !== 0;
        }
        if (truefalseString) {
            return value.toLowerCase() === 'true';
        }
        if (throwIfNotBool)
            throw new Error("not a boolean");
        return false;
    };
    // static FromBase64String(encodedStr: string): string {
    //     return base64Helper.atob(encodedStr);
    // }
    // static ToBase64String(str: string): string {
    //     return base64Helper.btoa(str);
    // }
    Convert.FromBase64String = function (encodedStr) {
        return b64.toByteArray(encodedStr);
    };
    Convert.ToBase64String = function (byteArray) {
        return b64.fromByteArray(byteArray);
    };
    return Convert;
}());
exports.Convert = Convert;
var base64Helper;
(function (base64Helper) {
    function btoa(textToEncode) {
        if (isNode) {
            var b = new Buffer(textToEncode);
            return b.toString('base64');
        }
        else {
            return window.btoa(textToEncode);
        }
    }
    base64Helper.btoa = btoa;
    function atob(textToDecode) {
        if (isNode) {
            var b = new Buffer(textToDecode, 'base64');
            return b.toString();
        }
        else {
            return window.atob(textToDecode);
        }
    }
    base64Helper.atob = atob;
})(base64Helper = exports.base64Helper || (exports.base64Helper = {}));
