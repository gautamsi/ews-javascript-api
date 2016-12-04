import { FetchStream, fetchUrl } from 'fetch';
import { Promise } from "./Promise";
import { IXHROptions, IXHRApi, IXHRProgress } from "./Interfaces";


export class XHRDefaults implements IXHRApi {
	static FetchStream: new () => FetchStream = null;
	static fetchUrl: typeof fetchUrl = null;

	private stream: FetchStream;

	xhr(xhroptions: IXHROptions, progressDelegate?: (progressData: IXHRProgress) => void): Promise<XMLHttpRequest> {
		if (XHRDefaults.fetchUrl === null) {
			throw new Error("xhrApi - stub method, must be bootstrapped");
		}
		//setup xhr for github.com/andris9/fetch options
		let options = {
			url: xhroptions.url,
			payload: xhroptions.data,
			headers: xhroptions.headers,
			method: <any>xhroptions.type
		}
		// xhroptions["payload"] = xhroptions.data;
		// delete xhroptions["data"];
		// xhroptions["method"] = xhroptions.type;
		// delete xhroptions["type"];

		return new Promise<XMLHttpRequest>((resolve, reject) => {
			XHRDefaults.fetchUrl(xhroptions.url, options, (error, meta, body) => {
				if (error) {
					reject(error);
				}
				let xhrResponse: XMLHttpRequest = <any>{
					response: body.toString(),
					status: meta.status,
					redirectCount: meta.redirectCount,
					headers: meta.responseHeaders,
					finalUrl: meta.finalUrl,
					responseType: '',
					statusText: undefined,
				};
				if (xhrResponse.status === 200) {
					resolve(setupXhrResponse(xhrResponse));
				}
				else {
					reject(setupXhrResponse(xhrResponse));
				}
			});
		})
	}

	xhrStream(xhroptions: IXHROptions, progressDelegate: (progressData: IXHRProgress) => void): Promise<XMLHttpRequest> {
		if (XHRDefaults.FetchStream === null) {
			throw new Error("xhrApi - stub method, must be bootstrapped");
		}

		//setup xhr for github.com/andris9/fetch options
		let options = {
			payload: xhroptions.data,
			headers: xhroptions.headers,
			method: <any>xhroptions.type
		}
		// xhroptions["payload"] = xhroptions.data;
		// delete xhroptions["data"];
		// xhroptions["method"] = xhroptions.type;
		// delete xhroptions["type"];

		return new Promise((resolve, reject) => {
			this.stream = new FetchStream(xhroptions.url, options);

			this.stream.on("data", (chunk) => {
				//console.log(chunk.toString());
				progressDelegate({ type: "data", data: chunk.toString() });
			});

			this.stream.on("meta", (meta) => {
				progressDelegate({ type: "header", headers: meta["responseHeaders"] });
			});

			this.stream.on("end", () => {
				progressDelegate({ type: "end" });
				resolve();
			});

			this.stream.on('error', (error) => {
				progressDelegate({ type: "error", error: error });
				this.disconnect();
				reject(error);
			});
		});
	}

	disconnect() {
		if (this.stream) {
			try {
				this.stream.destroy();
			}
			catch (e) { }
		}
	}

	get apiName(): string {
		return "default";
	}

	constructor() {
		try {
			let fetch = require("fetch");
			XHRDefaults.FetchStream = fetch.FetchStream;
			XHRDefaults.fetchUrl = fetch.fetchUrl;
		}
		catch (e) { }
	}
}

function setupXhrResponse(xhrResponse: XMLHttpRequest): XMLHttpRequest {
	xhrResponse[<any>"responseText"] = xhrResponse.response;
	delete xhrResponse["response"];
	xhrResponse.getAllResponseHeaders = function () {
		var header = "";
		if ((<any>xhrResponse).headers) {
			for (var key in (<any>xhrResponse).headers) {
				header += key + " : " + (<any>xhrResponse).headers[key] + "\r\n";
			}
		}
		return header;
	};

	xhrResponse.getResponseHeader = (header: string) => {
		if ((<any>xhrResponse).headers && (<any>xhrResponse).headers[header]) {
			return (<any>xhrResponse).headers[header];
		}
		return null;
	}

	return xhrResponse;
}