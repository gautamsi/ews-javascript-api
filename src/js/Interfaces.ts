
export interface IXHROptions {
    type?: string;
    url: string;
    user?: string;
    password?: string;
    headers?: any;
    data?: any;
    responseType?: string;
    customRequestInitializer?: (request: XMLHttpRequest) => void;
}

export interface IPromise<T> {
	cancel?(): void;
	done<U>(onComplete?: (value: T) => any, onError?: (error: any) => any, onProgress?: (progress: any) => void): void;
	then<U>(onComplete?: (value: T) => IPromise<U>, onError?: (error: any) => IPromise<U>, onProgress?: (progress: any) => void): IPromise<U>;
	then<U>(onComplete?: (value: T) => IPromise<U>, onError?: (error: any) => U, onProgress?: (progress: any) => void): IPromise<U>;
	then<U>(onComplete?: (value: T) => IPromise<U>, onError?: (error: any) => void, onProgress?: (progress: any) => void): IPromise<U>;
	then<U>(onComplete?: (value: T) => U, onError?: (error: any) => IPromise<U>, onProgress?: (progress: any) => void): IPromise<U>;
	then<U>(onComplete?: (value: T) => U, onError?: (error: any) => U, onProgress?: (progress: any) => void): IPromise<U>;
	then<U>(onComplete?: (value: T) => U, onError?: (error: any) => void, onProgress?: (progress: any) => void): IPromise<U>;
	then<U>(onComplete?: (value: T) => void, onError?: (error: any) => IPromise<U>, onProgress?: (progress: any) => void): IPromise<U>;
	then<U>(onComplete?: (value: T) => void, onError?: (error: any) => U, onProgress?: (progress: any) => void): IPromise<U>;
	then<U>(onComplete?: (value: T) => void, onError?: (error: any) => void, onProgress?: (progress: any) => void): IPromise<U>;
}

export interface IPromiseApi{
	create<T>(init?: (completeDispatch: any, errorDispatch: any, progressDispatch: any) => void, onCancel?: Function): IPromise<T>;
	wrap<U>(value?: U): IPromise<U>;
	type:string;
}
export interface IXHRApi{
	xhr(xhroptions: IXHROptions): IPromise<XMLHttpRequest>;
	type?:string;
}