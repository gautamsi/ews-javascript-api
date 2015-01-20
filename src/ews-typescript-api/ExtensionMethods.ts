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

    static GetObjectByClassName(className: string):any {
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

interface IOutParam<T> {
    value?: T;
    exception?: any;
    success?: boolean;

}
interface IRefParam<T> {
    value?: T;    
}



