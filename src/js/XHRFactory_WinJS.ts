/// <reference path="../../typings/winjs/winjs.d.ts" />

import {IPromise, IXHROptions, IXHRApi} from "./Interfaces";
import WinJS = require('winjs-node');
import {XHRFactory} from "./XHRFactory";

export class WinJSXHRApi implements IXHRApi {
	xhr(xhroptions: IXHROptions): IPromise<XMLHttpRequest> {
		return WinJS.xhr(xhroptions);
	}
	get type(): string {
		return "WinJS";
	}
}

XHRFactory.switchXhr(new WinJSXHRApi());
export function setXhr(): void { } //just to keep the require statement in file, typescript strips them if not used.
