import {IPromise, IXHROptions, IXHRApi} from "./Interfaces";

class XHRApi implements IXHRApi {
	xhr(xhroptions: IXHROptions): IPromise<XMLHttpRequest> {
		throw new Error("xhrApi - stub method, must be bootstrapped");
	}
	get type(): string {
		return "none";
	}
}

var xhrApiObj: IXHRApi = new XHRApi();

export class XHRFactory {
	static xhr(xhroptions: IXHROptions): IPromise<XMLHttpRequest> {
		return xhrApiObj.xhr(xhroptions);
	}
	static get type(): string {
		return xhrApiObj.type;
	}
	static switchXhr(newXHR: IXHRApi) {
		xhrApiObj = newXHR;
	}
}
