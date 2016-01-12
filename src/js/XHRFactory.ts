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
	static get XHRApi(){return xhrApiObj;}
	static switchXhr(newXHR: IXHRApi) {
		xhrApiObj = newXHR;
	}
}
