import {IPromise, IXHROptions, IXhrApi} from "./Interfaces";

class xhrApi implements IXhrApi {
	xhr(xhroptions: IXHROptions): IPromise<XMLHttpRequest> {
		throw new Error("xhrApi - stub method, must be bootstrapped");
	}
	get type(): string {
		return "none";
	}
}

var xhrApiObj: IXhrApi = new xhrApi();

export class XhrFactory {
	static xhr(xhroptions: IXHROptions): IPromise<XMLHttpRequest> {
		return xhrApiObj.xhr(xhroptions);
	}
	static get type(): string {
		return xhrApiObj.type;
	}
	static switchXhr(newXhr: IXhrApi) {
		xhrApiObj = newXhr;
	}
}
