import {IPromise, IXHROptions, IPromiseApi} from "./Interfaces";
import Q = require('q');
import {PromiseFactory} from "./PromiseFactory";

function PromiseExport<T>(init?: (completeDispatch: any, errorDispatch: any, progressDispatch: any) => void, onCancel?: Function): IPromise<T> {
	return Q.Promise<T>(init);
}

class QPromiseApi implements IPromiseApi {
	create<T>(init?: (completeDispatch: any, errorDispatch: any, progressDispatch: any) => void, onCancel?: Function): IPromise<T> {
		return Q.Promise<T>(init);
	}
	resolve<U>(value?: U | IPromise<U>): IPromise<U> {
		return Q(value);
	}
    reject<U>(value?: U | IPromise<U>): IPromise<U> {
		return Q.reject(value);
	}
	get type(): string {
		return "Q";
	}
}

export var QPromise: IPromiseApi = new QPromiseApi();

PromiseFactory.switchPromise(new QPromiseApi()); 
export function setPromise(): void {} //just to keep the require statement in file, typescript strips them if not used.
