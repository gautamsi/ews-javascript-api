import {StringHelper} from "../ExtensionMethods";
declare var window: any;
var isNode = (typeof window === 'undefined')
var util: any = undefined;

declare var require: any;

if (isNode) {
    util = require('util');
}
else {
    util = {
        inspect: (obj: any, option: any) => { return obj; }
    }
}


export class EwsLogging {
    static DebugLogEnabled: boolean = true;
    static Assert(condition: boolean, caller: string, message: string): void {
        if (this.DebugLogEnabled && !condition)
            console.log(StringHelper.Format("[{0}] {1}", caller, message));
    }

    static Log(message: any, always: boolean = false, expandObject: boolean = false): void {
        if (this.DebugLogEnabled || always) {
            if (expandObject)
                console.log(util.inspect(message, { showHidden: false, depth: null, colors: true }));
            else
                console.log(message);
        }
    }

    static DebugLog(message: any, expandObject: boolean = false): void {
        if (this.DebugLogEnabled) {
            if (expandObject)
                console.log(util.inspect(message, { showHidden: false, depth: null, colors: true }));
            else
                console.log(message);
        }
    }
}