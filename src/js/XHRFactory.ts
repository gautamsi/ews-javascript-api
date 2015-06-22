import {IPromise, IXHROptions} from "./Interfaces";
import {xhr} from "./XHRFactory_WinJS";

export function XHR(xhroptions:IXHROptions): IPromise<XMLHttpRequest>{
    return xhr(xhroptions);
}


//export interface IPromise<T> {
//	cancel(): void;
//	done<U>(onComplete?: (value: T) => any, onError?: (error: any) => any, onProgress?: (progress: any) => void): void;
//	then<U>(onComplete?: (value: T) => IPromise<U>, onError?: (error: any) => IPromise<U>, onProgress?: (progress: any) => void): IPromise<U>;
//	then<U>(onComplete?: (value: T) => IPromise<U>, onError?: (error: any) => U, onProgress?: (progress: any) => void): IPromise<U>;
//	then<U>(onComplete?: (value: T) => IPromise<U>, onError?: (error: any) => void, onProgress?: (progress: any) => void): IPromise<U>;
//	then<U>(onComplete?: (value: T) => U, onError?: (error: any) => IPromise<U>, onProgress?: (progress: any) => void): IPromise<U>;
//	then<U>(onComplete?: (value: T) => U, onError?: (error: any) => U, onProgress?: (progress: any) => void): IPromise<U>;
//	then<U>(onComplete?: (value: T) => U, onError?: (error: any) => void, onProgress?: (progress: any) => void): IPromise<U>;
//	then<U>(onComplete?: (value: T) => void, onError?: (error: any) => IPromise<U>, onProgress?: (progress: any) => void): IPromise<U>;
//	then<U>(onComplete?: (value: T) => void, onError?: (error: any) => U, onProgress?: (progress: any) => void): IPromise<U>;
//	then<U>(onComplete?: (value: T) => void, onError?: (error: any) => void, onProgress?: (progress: any) => void): IPromise<U>;
//}

