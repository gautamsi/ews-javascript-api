/// <reference path="../../typings/winjs/winjs.d.ts" />

import {IPromise, IXHROptions, IXhrApi} from "./interfaces";
import WinJS = require('winjs-node');
import {XhrFactory} from "./XHRFactory";

export class WinJSXhrApi implements IXhrApi {
	xhr(xhroptions: IXHROptions): IPromise<XMLHttpRequest> {
		return WinJS.xhr(xhroptions);
	}
	get type(): string {
		return "WinJS";
	}
}

XhrFactory.switchXhr(new WinJSXhrApi());
export function setXhr(): void { } //just to keep the require statement in file, typescript strips them if not used.
