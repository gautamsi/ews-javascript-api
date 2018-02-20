import { Promise } from "./Promise";
import { IXHROptions, IXHRApi } from "./Interfaces";
import { XHRDefault } from "./XHRDefault"

export class XHRFactory {

	static xhrHelper: IXHRApi;
	static get XHRApi() {
		if (typeof this.xhrHelper === 'undefined' || this.xhrHelper === null) {
			this.xhrHelper = new XHRDefault();
		}
		return this.xhrHelper;
	}

	public static newXHRApi() {
		console.warn("depricated, import and use \"new XHRDefault(options?)\" instead")
		return new XHRDefault();
	}
}