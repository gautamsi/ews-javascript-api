import {StringHelper} from "../ExtensionMethods";
import util = require('util');
export class EwsLogging {
    static DebugLogEnabled: boolean = true;
    static Assert(condition: boolean, caller: string, message: string): any {
        if (this.DebugLogEnabled && !condition)
            console.log(StringHelper.Format("[{0}] {1}", caller, message));
    }

    static Log(message: any, always: boolean = false, expandObject: boolean = false): any {
        if (this.DebugLogEnabled || always) {
            if (expandObject)
                console.log(util.inspect(message, { showHidden: false, depth: null, colors: true }));
            else
                console.log(message);
        }
    }
    
    static DebugLog(message: any, expandObject: boolean = false): any {
        if (this.DebugLogEnabled) {
            if (expandObject)
                console.log(util.inspect(message, { showHidden: false, depth: null, colors: true }));
            else
                console.log(message);
        }
    }
}