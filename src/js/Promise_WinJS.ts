/// <reference path="../../typings/winjs/winjs.d.ts" />

import {IPromise, IXHROptions, IPromiseApi} from "./Interfaces";
import WinJS = require('winjs-node');
import {PromiseFactory} from "./PromiseFactory";

function PromiseExport<T>(init?: (completeDispatch: any, errorDispatch: any, progressDispatch: any) => void, onCancel?: Function): IPromise<T> {
	return new WinJS.Promise<T>(init, onCancel);
}

class WinJSPromiseApi implements IPromiseApi {
	create<T>(init?: (completeDispatch: any, errorDispatch: any, progressDispatch: any) => void, onCancel?: Function): IPromise<T> {
		return new WinJS.Promise<T>(init, onCancel);
	}
	resolve<U>(value?: U | IPromise<U>): IPromise<U> {
		return WinJS.Promise.as(value);
	}
    reject<U>(value?: U | IPromise<U>): IPromise<U> {
		return WinJS.Promise.wrapError(value);
	}
	get type(): string {
		return "WinJS";
	}
}

PromiseFactory.switchPromise(new WinJSPromiseApi());
export function setPromise(): void { } //just to keep the require statement in file, typescript strips them if not used.
