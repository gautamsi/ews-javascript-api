/// <reference path="../../typings/q/Q.d.ts" />

import {IPromise, IXHROptions} from "./Interfaces";
import Q = require('q');

export function PromiseExport<T>(init?: (completeDispatch: any, errorDispatch: any, progressDispatch: any) => void, onCancel?: Function): IPromise<T> {
	return Q.Promise<T>(init);
}

