import {IPromise, IXHROptions, IPromiseApi} from "./Interfaces";
//import {PromiseExport} from "./Promise_WinJS";

// export function Promise<T>(init?: (completeDispatch: any, errorDispatch: any, progressDispatch: any) => void, onCancel?: Function): IPromise<T> {
// 	return PromiseExport<T>(init);
// }
class promiseApi implements IPromiseApi {
	create<T>(init?: (completeDispatch: any, errorDispatch: any, progressDispatch: any) => void, onCancel?: Function): IPromise<T> {
		throw new Error("PromiseApi - stub method, must be bootstrapped");
	}
	resolve<U>(value?: U): IPromise<U> {
		throw new Error("PromiseApi - stub method, must be bootstrapped");
	}
    reject<U>(value?: U): IPromise<U>{
		throw new Error("PromiseApi - stub method, must be bootstrapped");        
    }
	get type(): string {
		return "none";
	}
}

var promiseApiObj = new promiseApi();

export class PromiseFactory {
	static create<T>(init?: (completeDispatch: any, errorDispatch: any, progressDispatch: any) => void, onCancel?: Function): IPromise<T> {
		return promiseApiObj.create(init, onCancel);
	}
	static resolve<U>(value?: U): IPromise<U> {
		return promiseApiObj.resolve(value);
	}
    static reject<U>(value?: U): IPromise<U> {
		return promiseApiObj.reject(value);
	} 
	static get type(): string {
		return promiseApiObj.type;
	}
	static get Promise(): IPromiseApi { return promiseApiObj; }
	static set Promise(value: IPromiseApi) { promiseApiObj = value; }
	static switchPromise(newPromiseObject: IPromiseApi) {
		promiseApiObj = newPromiseObject;
	}
}
