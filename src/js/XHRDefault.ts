import { FetchStream, fetchUrl, FetchOptions } from 'fetch';
import { Promise } from "./Promise";
import { IXHROptions, IXHRApi, IXHRProgress } from "./Interfaces";

/** 
 * Default implementation of XHRApi using fetch
 */
export class XHRDefault implements IXHRApi {
	static FetchStream: typeof FetchStream = FetchStream;
	static fetchUrl: typeof fetchUrl = null;
	static defaultOptions: FetchOptions = {};

	fetchOptions: FetchOptions = {};
	private stream: FetchStream;

	xhr(xhroptions: IXHROptions, progressDelegate?: (progressData: IXHRProgress) => void): Promise<XMLHttpRequest> {
		if (XHRDefault.fetchUrl === null) {
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
			XHRDefault.fetchUrl(xhroptions.url, this.getOptions(options), (error, meta, body) => {
				if (error) {
					if (typeof (<any>error).status === 'undefined') {
						(<any>error).status = 0;

					}
					reject(setupXhrResponse(<any>error));
				}
				else {
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
						reject(new Error("Error status: " + xhrResponse.status));
					}
				}
			});
		})
	}

	xhrStream(xhroptions: IXHROptions, progressDelegate: (progressData: IXHRProgress) => void): Promise<XMLHttpRequest> {
		if (XHRDefault.FetchStream === null) {
			throw new Error("xhrApi - stub method, must be bootstrapped");
		}

		//setup xhr for github.com/andris9/fetch options
		let options = {
			payload: xhroptions.data,
			headers: xhroptions.headers,
			method: <any>xhroptions.type
		}

		return new Promise((resolve, reject) => {
			this.stream = new XHRDefault.FetchStream(xhroptions.url, this.getOptions(options));

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

	constructor(fetchOptions: FetchOptions = {}) {
		this.fetchOptions = fetchOptions;
		try {
			let fetch = require("fetch");
			XHRDefault.FetchStream = fetch.FetchStream;
			XHRDefault.fetchUrl = fetch.fetchUrl;
		}
		catch (e) { }
	}

	private getOptions(opts: FetchOptions) {
		let headers = Object.assign({}, (XHRDefault.defaultOptions || {}).headers, (this.fetchOptions || {}).headers, (opts || {}).headers)
		return Object.assign({}, XHRDefault.defaultOptions, this.fetchOptions, opts, { headers });
	}
}

/** @internal */
function setupXhrResponse(xhrResponse: XMLHttpRequest): XMLHttpRequest {
	xhrResponse[<any>"responseText"] = xhrResponse.response;
	delete xhrResponse[<any>"response"];
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
		if (header) {
			if ((<any>xhrResponse).headers) {
				if ((<any>xhrResponse).headers[header]) {
					return (<any>xhrResponse).headers[header];
				}
				if ((<any>xhrResponse).headers[header.toLocaleLowerCase()]) {
					return (<any>xhrResponse).headers[header.toLocaleLowerCase()];
				}
			}
		}
		return null;
	}

	return xhrResponse;
}

export interface xFetchOptions {
	/** how many redirects allowed, defaults to 10 */
	maxRedirects: number;
	/** set to true if redirects are not allowed, defaults to false */
	disableRedirects: boolean;
	/** optional header fields, in the form of {'Header-Field':'value'} */
	headers: { [key: string]: (any) };
	/** maximum allowd length for the file, the remainder is cut off. Defaults to Infinity */
	maxResponseLength: number;
	/** defaults to GET */
	method: string;
	/** request body */
	payload: string;
	/** set to false, to disable content gzipping, needed for Node v0.5.9 which has buggy zlib */
	disableGzip: boolean;
	/** an array of cookie definitions in the form of ['name=val'] */
	cookies: any;
	/** for sharing cookies between requests, see below */
	cookieJar: any;
	/** valid for fetchUrl */
	outputEncoding: string;
	/** valid for fetchUrl, set to true to disable automatic charset decoding to utf-8 */
	disableDecoding: boolean;
	/** valid for fetchUrl, set input encoding */
	overrideCharset: string;
	/** use high performance asyncronous DNS resolution based on c-ares instead of a thread pool calling getaddrinfo(3) */
	asyncDnsLoookup: boolean;
	/** set a timeout in ms */
	timeout: number;
	/** pass-through http.request agent parameter for https */
	agentHttps: any;
	/** pass-through http.request agent parameter for http */
	agentHttp: any;
	/** pass-through http.request agent parameter as fallback, if agentHttps or agentHttp are not specified */
	agent: any;
	/** whether to reject self-signed certificates (true, default behavior), or ignore and allow them (false) */
	rejectUnauthorized: boolean;
	/** is the username for Basic auth */
	user: string;
	/** is the password for Basic auth */
	pass: string;
}
