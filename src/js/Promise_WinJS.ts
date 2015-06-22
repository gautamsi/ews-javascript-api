/// <reference path="../../typings/winjs/winjs.d.ts" />

import {IPromise, IXHROptions} from "./Interfaces";
import WinJS = require('winjs-node');

export function PromiseExport<T>(init?: (completeDispatch: any, errorDispatch: any, progressDispatch: any) => void, onCancel?: Function): IPromise<T> {
	return new WinJS.Promise<T>(init);
}

