import { Promise } from "./Promise";
import { IXHROptions, IXHRApi, IXHRProgress } from "./Interfaces";

let schemeRegex = /^(\w+)\:\/\//;

/** @internal */
export class XHRBrowser implements IXHRApi {
	req: XMLHttpRequest;
	private _canceled: boolean = false;
	xhr(xhroptions: IXHROptions, progressDelegate?: (progressData: IXHRProgress) => void): Promise<XMLHttpRequest> {
		return new Promise<XMLHttpRequest>((resolve, reject) => {
			this.req = new XMLHttpRequest();
			var isLocalRequest = false;
			var schemeMatch = schemeRegex.exec(xhroptions.url.toLowerCase());
			if (schemeMatch) {
				if (schemeMatch[1] === 'file') {
					isLocalRequest = true;
				}
			} else if (window.location.protocol === 'file:') {
				isLocalRequest = true;
			}

			this.req.onreadystatechange = () => {
				if (this._canceled) {
					this.req.onreadystatechange = noop;
					return;
				}

				if (this.req.readyState === 4) {
					if ((this.req.status >= 200 && this.req.status < 300) || (isLocalRequest && this.req.status === 0)) {
						resolve(this.req);
					} else {
						reject(this.req);
					}
					this.req.onreadystatechange = noop;
				}
			};

			this.req.addEventListener('error', x => {
				this.disconnect();
				reject(x);
			});

			this.req.open(
				xhroptions.type || "GET",
				xhroptions.url
			);
			// this.req.responseType = xhroptions.responseType || "";

			Object.keys(xhroptions.headers || {}).forEach((k) => {
				this.req.setRequestHeader(k, xhroptions.headers[k]);
			});

			if (xhroptions.customRequestInitializer) {
				xhroptions.customRequestInitializer(this.req);
			}

			if (xhroptions.data === undefined) {
				this.req.send();
			} else {
				this.req.send(xhroptions.data);
			}
		});
	}

	xhrStream(xhroptions: IXHROptions, progressDelegate: (progressData: IXHRProgress) => void): Promise<XMLHttpRequest> {

		return new Promise((resolve, reject) => {
			this.req = new XMLHttpRequest();
			var isLocalRequest = false;
			var schemeMatch = schemeRegex.exec(xhroptions.url.toLowerCase());
			if (schemeMatch) {
				if (schemeMatch[1] === 'file') {
					isLocalRequest = true;
				}
			} else if (window.location.protocol === 'file:') {
				isLocalRequest = true;
			}
			let lastChunk = '';
			this.req.onreadystatechange = () => {
				if (this._canceled) {
					this.req.onreadystatechange = noop;
					return;
				}

				if (this.req.readyState === 4) {
					if ((this.req.status >= 200 && this.req.status < 300) || (isLocalRequest && this.req.status === 0)) {
						resolve(this.req);
					} else {
						reject(this.req);
					}
					this.req.onreadystatechange = noop;
				} else if (this.req.readyState === 2) { // HEADERS_RECEIVED
					progressDelegate({ type: "header", headers: this.req.getAllResponseHeaders() });
				} else if (this.req.readyState === 3) { // LOADING - partial text, for streaming
					let chunk = this.req.responseText.substr(lastChunk.length);
					lastChunk = this.req.responseText;
					progressDelegate({ type: "data", data: chunk });
				}
			};
			this.req.addEventListener('error', error => {
				this.disconnect();
				progressDelegate({ type: "error", error: error });
				reject(error);
			});

			this.req.open(
				xhroptions.type || "GET",
				xhroptions.url
			);
			// this.req.responseType = xhroptions.responseType || "";

			Object.keys(xhroptions.headers || {}).forEach( (k) => {
				this.req.setRequestHeader(k, xhroptions.headers[k]);
			});

			if (xhroptions.customRequestInitializer) {
				xhroptions.customRequestInitializer(this.req);
			}

			if (xhroptions.data === undefined) {
				this.req.send();
			} else {
				this.req.send(xhroptions.data);
			}
		});
	}

	disconnect() {

		if (this.req) {
			try {
				this.req.onreadystatechange = noop;
				this._canceled = true;
				this.req.abort();
				setImmediate(() => { this.req = null })
			}
			catch (e) { }
		}
	}

	get apiName(): string {
		return "browser";
	}

	constructor() {
	}
}

function noop() {
}
