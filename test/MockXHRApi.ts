import {PromiseFactory} from "../src/js/PromiseFactory"
import {IPromise, IXHROptions, IXHRApi} from "../src/js/Interfaces";
export class MockXHRApi implements IXHRApi {
	public xhrData = {};
	requestXml: string[] = [];
	responseXml: string[] = [];
	constructor() {
	}
	xhr(xhroptions: IXHROptions): IPromise<XMLHttpRequest> {
		this.xhrData = xhroptions;
		return PromiseFactory.create((successDelegate, errorDelegate, progressDelegate) => {
			var result = {
				response: null,
				readyState: 4,
				responseText: null,
				status: 200,
			}
			result.response = this.responseXml.splice(0,1).pop();
			result.responseText = result.response;
			successDelegate(result);
		});
	}
	get type(): string {
		return "mockXHR";
	}
}
