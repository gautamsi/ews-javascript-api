import { Promise } from "./Promise";
import { IXHROptions, IXHRApi } from "./Interfaces";
import { XHRDefaults } from "./XHRDefaults"

var xhrHelper: IXHRApi;

export class XHRFactory {
	static get XHRApi() {
		if (typeof xhrHelper === 'undefined' || xhrHelper === null) {
			xhrHelper = new XHRDefaults();
		}
		return xhrHelper;
	}
	static switchXhr(newXHR: IXHRApi) {
		xhrHelper = newXHR;
	}
}

export function ConfigureXHR(xhrApi: IXHRApi) {
	xhrHelper = xhrApi;
}
