/// <reference path="../../typings/base64-js.d.ts" />

import * as b64 from 'base64-js';

export module StringHelper {
    export function IsNullOrEmpty(str: string): boolean {
        return str == null || typeof str === 'undefined' || str === '';
    }
    /*
    * @author electricessence / https://github.com/electricessence/
    * Liscensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE
      part System.Text at above library
    */
    export function Format(source: string, ...args: any[]) {
        for (var i = 0; i < args.length; i++)
            source = source.replace("{" + i + "}", args[i]);
        return source;
    }

    export var Empty = "";

    export function Repeat(str: string = "", times: number = 1): string {
        return new Array(times + 1).join(str);
    }
    export function Tabs(times: number = 0): string {
        return Repeat("\t", times);
    }
    export function Compare(lhs: string, rhs: string, ignoreCase: boolean = false): number {
        if (ignoreCase) {
            return lhs.toLocaleLowerCase().localeCompare(rhs.toLocaleLowerCase());
        }
        else {
            return lhs.localeCompare(rhs);
        }
    }
}

export module EnumHelper {
    export function HasFlag(flags: number, checkFlag: number): boolean {
        return (flags & checkFlag) == checkFlag;
    }
    export function ToString(enumObj: any, checkFlag: number, includeZero: boolean = false): string {
        if ((checkFlag & (checkFlag - 1)) == 0)
            return enumObj[checkFlag];
        var result: string[] = [];
        var diff = checkFlag;

        var largestFlag = 0;// = Math.pow(2, Math.floor(Math.pow(checkFlag, (1 / 2))));
        while (diff > 1) {
            largestFlag = Math.pow(2, Math.floor(Math.log(diff) / Math.log(2)));
            diff = diff - largestFlag;
            var largestValue = enumObj[largestFlag];
            if (largestValue === undefined) return undefined;
            result.push(largestValue);
        }
        if (diff == 1) result.push(enumObj[1]);
        if (includeZero && enumObj[0]) result.push(enumObj[0]);

        result.reverse();
        return result.join(",");
    }
}

module object {

    function getPrototypeChain(ctor: Function): any[] {
        //unused
        //http://typescript.codeplex.com/discussions/468576
        var chain: any[] = [];
        var proto = ctor.prototype;
        while (proto) {
            chain.push(proto.constructor)
            proto = Object.getPrototypeOf(proto);
        }
        return chain;
        //var ste = JSON.stringify(ste);
    }
}

export module ArrayHelper {
    export function AddRange<T>(array: Array<T>, items: Array<T>): void {
        if (Object.prototype.toString.call(array) !== "[object Array]")
            throw new Error("input obj is not an array")
        if (Object.prototype.toString.call(items) !== "[object Array]")
            throw new Error("input range is not an array")
        for (var item of items) {
            array.push(item);
        }
    }

    export function RemoveEntry<T>(array: Array<T>, entry: T, comparer: (T) => boolean = null): boolean {
        let index = array.indexOf(entry);
        if (comparer) {
            let entry = ArrayHelper.Find(array, comparer);
            index = array.indexOf(entry);
        }
        let lastLength = array.length;
        if (index >= 0) {
            array.splice(index, 1);
            return lastLength - array.length === 1;
        }
        else {
            return false
        }
    }

    export function Find<T>(array: Array<T>, comparer: (item: T) => boolean): T {
        for (var entry of array) {
            if (comparer(entry)) {
                return entry;
            }
        }
        return null;
    }

    export function IndexOf<T>(array: Array<T>, comparer: (item: T) => boolean): number {
        let item = ArrayHelper.Find(array, comparer);
        return array.indexOf(item);
    }

    export function OfType<T, U>(array: Array<U>, comparer: (item: U) => boolean): T[] {
        var result: T[] = [];
        for (var entry of array) {
            if (comparer(entry)) {
                result.push(<T><any>entry);
            }
        }
        return result;
    }
    /**dirty calculation of max dimension, will return more than one if array contains any array element in first testElementCount items */
    export function Rank(array: any[], testElementCount: number = 4): number {
        var rank: number = 1;
        if (array.length === 0) {
            return rank;
        }
        var length = array.length <= testElementCount ? array.length : testElementCount;
        var maxDepthRank: number = 0;
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
    export function isArray(obj: any): obj is [] {
        return Object.prototype.toString.call(obj) === "[object Array]";
    }
}

export class TypeSystem {
    static GetProperties(obj: any) {
        var props = new Array<string>();

        for (var s in obj) {
            if (typeof (obj[s]) != "function") {
                props[props.length] = s;
            }
        }

        return props;
    }

    static GetMethods(obj: any) {
        var methods = new Array<string>();

        for (var s in obj) {
            if (typeof (obj[s]) == "function") {
                methods[methods.length] = s;
            }
        }

        return methods
    }

    static GetObjectStaticPropertiesByClassName(className: string): string[] {

        var obj = this.GetObjectByClassName(className);

        //if (prototype)
        //    obj = obj.prototype;
        if (obj == null || typeof (obj) == undefined)
            return [];//throw new Error("can not determine type");



        return this.GetProperties(obj);
    }

    static GetObjectMethodsByClassName(className: string, instanceMethod: boolean = true): string[] {
        var obj = this.GetObjectByClassName(className);

        if (obj == null || typeof (obj) == undefined)
            return [];// throw new Error("can not determine type");
        else if (instanceMethod)
            obj = obj.prototype || obj;

        return this.GetMethods(obj);
    }

    static GetObjectByClassName(className: string): any {
        var obj: any;
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
    }

    static GetJsObjectTypeName(obj: any): string {
        var keys = Object.keys(obj);
        if (keys && keys.indexOf("__type") >= 0)
            return obj["__type"];

        return undefined;

    }

    static GetJsObjectOnlyChildName(obj: any): string {
        for (var key in obj) {
            if (key.indexOf("__") >= 0)
                continue;
            return key;
        }
        return null;

    }

    static GetJsObjectTypeName_old(obj: any): string {

        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                var element = obj[key];
                if (element["__type"]) return element["__type"];
            }
        }
        return undefined;

    }

    static IsGenericType(value: any): boolean {
        if (value === null || typeof value === 'undefined') {
            return false;
        }
        let valueType = typeof value;
        return valueType === 'string' || valueType === 'boolean' || valueType === 'number';
    }
}

//use this class to to work with node - https://github.com/jindw/xmldom - tested working with commit f053be7ceb. 
//This library creates DOMParser object like functionality in node.For browsers, skip xmldom library and use inbuilt browser object
//var DOMParser = require('xmldom').DOMParser;
//var dom = new DOMParser().parseFromString("xml data", 'text/xml');
//ewslogging.log(JSON.stringify(xmlToJson(dom.documentElement)));
export class xml2JsObject {
    typeIncludedNS: string[] = [
        "http://schemas.microsoft.com/exchange/services/2006/types",
        "http://schemas.microsoft.com/exchange/services/2006/messages"
    ];

    parseXMLNode(xmlNode: Node, soapMode: boolean = false, xmlnsRoot: any = undefined): any {
        var obj: any = {};
        if (!xmlnsRoot) xmlnsRoot = obj;
        if (typeof (xmlNode) === 'undefined') return obj;
        var textNodeName: any = undefined;
        const PREFIX_STR: string = "__prefix";
        const TYPE_STR: string = "__type";
        const TEXT_STR: string = "__text";
        switch (xmlNode.nodeType) {
            case 1 /*Node.ELEMENT_NODE*/: 
                if ((<Element>xmlNode).prefix && xmlNode.localName !== xmlNode.nodeName)
                    obj[PREFIX_STR] = (<Element>xmlNode).prefix;

                if (this.typeIncludedNS.indexOf(xmlNode.namespaceURI) >= 0) {
                    obj[TYPE_STR] = xmlNode.localName;
                }
                var nonGenericAttributeCount = 0;
                for (var i = 0; i < xmlNode.attributes.length; i++) {
                    nonGenericAttributeCount++;
                    var attr: Attr = xmlNode.attributes.item(i);
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
                    if (xmlNode.childNodes.length === 1 && xmlNode.firstChild.nodeType === 3/*Node.TEXT_NODE*/) {
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
            case 2/*Node.ATTRIBUTE_NODE*/:

                break;
            case 3/*Node.TEXT_NODE*/:
                return xmlNode.nodeValue;
                break;
            default:
                return obj;
        }


        if (xmlNode.childNodes.length > 0) {
            var skip = false;
            if (soapMode && xmlNode.childNodes.length === 1 && xmlNode.firstChild.nodeType === 3/*Node.TEXT_NODE*/)
                skip = true;

            if (!skip) {
                for (var i = 0; i < xmlNode.childNodes.length; i++) {
                    var node: Node = xmlNode.childNodes.item(i);
                    var localName = node.localName || TEXT_STR;
                    if (localName === TEXT_STR && node.nodeValue.trim() === "") continue;
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
    }

    private addXMLNS(xmlnsObj: any, xmlnsName: string, xmlnsValue: string, xmlnsAttrName: string = "__xmlns"): void {
        if (!xmlnsObj[xmlnsAttrName]) xmlnsObj[xmlnsAttrName] = {};
        (xmlnsObj[xmlnsAttrName])[xmlnsName] = xmlnsValue;
    }
    private containsXMLNS(obj: any, xmlnsName: string, xmlnsAttrName: string = "__xmlns"): boolean {
        if (obj[xmlnsAttrName]) return typeof ((obj[xmlnsAttrName])[xmlnsName]) !== 'undefined';
        return false;
    }
}

module Parsers {

}
export interface ParsedUrl {
    scheme: string;
    authority: string;
    path: string;
    query: string;
    fragment: string;
}
export class UriHelper {
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
    static parseString(url: string): ParsedUrl {
        var regex = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
        var parts = url.match(regex);
        return {
            scheme: parts[2],
            authority: parts[4],
            path: parts[5],
            query: parts[7],
            fragment: parts[9]
        };
    }
    static getDomain(url: string): string {
        return this.parseString(url).authority;
    }
    static getHost(url: string): string {
        return this.getDomain(url);
    }

}

declare var window: any;
var isNode = (typeof window === 'undefined')
var dp: any = undefined;

declare var require: any;

if (isNode) {

    var dr: any = require('xmldom');
    dp = dr.DOMParser;
} else {
    dp = window.DOMParser;
}

export var DOMParser = dp;

export class Convert {
    static toInt(value: any, zeroIfError: boolean = true): number {
        var result: number = 0;
        try {
            result = parseInt(value);
        }
        catch (ex) {
            if (!zeroIfError)
                throw ex;
        }
        return result;
    }

    static toNumber(value: any): number {
        return Number(value);
    }
    static toBool(value: any, truefalseString = true, throwIfNotBool = false) {
        if (typeof value === 'boolean') return value;
        var num = Number(value);
        if (!isNaN(num)) {
            return num !== 0;
        }
        if (truefalseString) {
            return (<string>value).toLowerCase() === 'true'
        }

        if (throwIfNotBool) throw new Error("not a boolean");
        return false;
    }
    // static FromBase64String(encodedStr: string): string {
    //     return base64Helper.atob(encodedStr);
    // }
    // static ToBase64String(str: string): string {
    //     return base64Helper.btoa(str);
    // }
    static FromBase64String(encodedStr: string): number[] {
        return b64.toByteArray(encodedStr);
    }
    static ToBase64String(byteArray: number[]): string {
        return b64.fromByteArray(byteArray);
    }
}

export module base64Helper {

    export function btoa(textToEncode: string): string {
        if (isNode) {
            var b = new Buffer(textToEncode);
            return b.toString('base64');
        } else {
            return window.btoa(textToEncode);
        }
    }
    export function atob(textToDecode: string): string {
        if (isNode) {
            var b = new Buffer(textToDecode, 'base64');
            return b.toString();
        } else {
            return window.atob(textToDecode);
        }
    }
}

