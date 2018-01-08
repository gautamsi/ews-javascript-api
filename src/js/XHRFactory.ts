import { Promise } from "./Promise";
import { IXHROptions, IXHRApi } from "./Interfaces";
import { XHRDefaults } from "./XHRDefaults"

export class XHRFactory {

	static xhrHelper: IXHRApi;
	static get XHRApi() {
		if (typeof this.xhrHelper === 'undefined' || this.xhrHelper === null) {
			this.xhrHelper = new XHRDefaults();
		}
		return this.xhrHelper;
	}

	public static newXHRApi() {
		return new XHRDefaults();
	}
}