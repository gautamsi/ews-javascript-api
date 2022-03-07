import { IXHROptions, IXHRApi } from "../src/js/Interfaces";
export class MockXHRApi implements IXHRApi {
	public xhrData = {};
	requestXml: string[] = [];
	responseXml: string[] = [];
	constructor() {
	}
	xhr(xhroptions: IXHROptions): Promise<XMLHttpRequest> {
		this.xhrData = xhroptions;
		return new Promise((successDelegate, errorDelegate) => {
			var result = {
				response: null,
				readyState: 4,
				responseText: null,
				status: 200,
			}
			result.response = this.responseXml.splice(0, 1).pop();
			result.responseText = result.response;
			successDelegate(<any>result);
		});
	}
	xhrStream(x: any, y: any): Promise<XMLHttpRequest> {
		throw new Error();
	}
	disconnect():void{}
	get apiName(): string {
		return "mockXHR";
	}
}
