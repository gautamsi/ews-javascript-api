import {IPromise, IXHROptions} from "./Interfaces";
import {PromiseExport} from "./Promise_WinJS";

export function Promise<T>(init?: (completeDispatch: any, errorDispatch: any, progressDispatch: any) => void, onCancel?: Function): IPromise<T> {
	return PromiseExport<T>(init);
}

