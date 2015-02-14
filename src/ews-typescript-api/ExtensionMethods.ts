/* 
* @author electricessence / https://github.com/electricessence/ 
* Liscensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE 
*/

module nSystem.Text {
    export function format(source: string, ...args: any[]) {
        for (var i = 0; i < args.length; i++)
            source = source.replace("{" + i + "}", args[i]);
        return source;
    }
}

module string {
    export function IsNullOrEmpty(str: string): boolean {
        return str == null || typeof str === 'undefined' || str === '';
    }
    export function Format(source: string, ...args: any[]) {
        for (var i = 0; i < args.length; i++)
            source = source.replace("{" + i + "}", args[i]);
        return source;
    }
    export var Empty = "";
}

module Enumelper {
    export function HasFlag(flags: number, checkFlag: number): boolean {
        return (flags & checkFlag) == checkFlag;
    }
    export function ToString(enumObj: any, checkFlag: number, includeZero: boolean = false): string {
        if ((checkFlag & (checkFlag - 1)) == 0)
            return enumObj[checkFlag];
        var ret: string[] = [];
        var diff = checkFlag;

        var largestFlag = 0;// = Math.pow(2, Math.floor(Math.pow(checkFlag, (1 / 2))));
        while (diff > 1) {
            largestFlag = Math.pow(2, Math.floor(Math.log(diff) / Math.log(2)));
            diff = diff - largestFlag;
            var largestValue = enumObj[largestFlag];
            if (largestValue === undefined) return undefined;
            ret.push(largestValue);
        }
        if (diff == 1) ret.push(enumObj[1]);
        if (includeZero && enumObj[0]) ret.push(enumObj[0]);

        ret.reverse();
        return ret.join(",");
    }
}

module object {



    function getPrototypeChain(ctor: Function): any[] {
        //unused
        //http://typescript.codeplex.com/discussions/468576
        var chain = [];
        var proto = ctor.prototype;
        while (proto) {
            chain.push(proto.constructor)
            proto = Object.getPrototypeOf(proto);
        }
        return chain;
        //var ste = JSON.stringify(ste);
    }
}

class TypeSystem {
    static GetProperties(obj) {
        var props = new Array<string>();

        for (var s in obj) {
            if (typeof (obj[s]) != "function") {
                props[props.length] = s;
            }
        }

        return props;
    }

    static GetMethods(obj) {
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
    }
}

module Parsers {
    export class xml2js {

        static parseXMLNode(xmlNode: Node, parent: any = undefined, xmlnsRoot: any = undefined): any {
            var obj = {};
            if (!xmlnsRoot) xmlnsRoot = obj;
            if (typeof (xmlNode) === 'undefined') return obj;

            switch (xmlNode.nodeType) {
                case Node.ELEMENT_NODE:
                    if (xmlNode.prefix) obj["__prefix"] = xmlNode.prefix;
                    for (var i = 0; i < xmlNode.attributes.length; i++) {
                        var attr: Attr = xmlNode.attributes.item(i);
                        if (attr.prefix)
                            if (attr.prefix === 'xmlns') this.addXMLNS(xmlnsRoot, attr.localName, attr.value);
                            else if(this.containsXMLNS(xmlnsRoot,attr.prefix))
                                obj[attr.localName] = attr.value;
                            else
                                obj[attr.name] = attr.value;
                        else if (attr.localName === 'xmlns' && xmlNode.namespaceURI !== attr.value)
                            obj["__type"] = attr.value;
                        else
                            obj[attr.localName] = attr.value;
                    }
                    if (xmlNode.childNodes.length === 1 && xmlNode.firstChild.nodeType === Node.TEXT_NODE)
                        return xmlNode.firstChild.nodeValue;
                        //obj["__text"] = xmlNode.firstChild.nodeValue;
                    break;
                case Node.ATTRIBUTE_NODE:

                    break;
                case Node.TEXT_NODE:
                    return xmlNode.nodeValue;
                    break;
                default:
                    return obj;
            }

            if (xmlNode.childNodes.length >0) {
                if (xmlNode.firstChild.nodeType !== Node.TEXT_NODE) {
                    for (var i = 0; i < xmlNode.childNodes.length; i++) {
                        var node: Node = xmlNode.childNodes.item(i);
                        var nodeObj = this.parseXMLNode(node, undefined,xmlnsRoot);
                        if (obj[node.localName])
                            if (Object.prototype.toString.call(obj[node.localName]) === "[object Array]")
                                obj[node.localName].push(nodeObj);
                            else {
                                var old = obj[node.localName];
                                obj[node.localName] = [];
                                obj[node.localName].push(old);
                                obj[node.localName].push(nodeObj);
                            }
                        else
                            obj[node.localName] = nodeObj;
                    }
                }
            }

            return obj;
        }

        private static addXMLNS(obj: any, xmlnsName: string, value: string, attributeName: string = "__xmlns"): void {
            if (!obj[attributeName]) obj[attributeName] = {};
            (obj[attributeName])[xmlnsName] = value;
        }
        private static containsXMLNS(obj: any, xmlnsName: string, attributeName: string = "__xmlns"): boolean {
            if (obj[attributeName]) return typeof ((obj[attributeName])[xmlnsName]) !== 'undefined';
            return false;
        }
    }
}

interface IOutParam<T> {
    value?: T;
    exception?: any;
    success?: boolean;

}
interface IRefParam<T> {
    value?: T;
}



