import { IXHROptions, IXHRApi, IXHRProgress } from "./Interfaces";
import { ConfigurationApi } from "./ConfigurationApi";
declare var Office: { context: { mailbox: { makeEwsRequestAsync: (data: string, callback: (asyncResult: { value: string, asyncContext?: any, status?: string, error?: Error }) => void) => void } } };

export class XHROutlook implements IXHRApi {
	xhr(xhroptions: IXHROptions, progressDelegate?: (progressData: IXHRProgress) => void): Promise<XMLHttpRequest> {
		return new Promise<XMLHttpRequest>((resolve, reject) => {
			Office.context.mailbox.makeEwsRequestAsync(xhroptions.data, (result) => {
				let res: XMLHttpRequest = <any>{
					status: 200,
					responseText: result.value,
					getAllResponseHeaders: () => [],
					getResponseHeader: (str: string) => ""
				}
				if (result.status === 'succeeded') {
					resolve(res)
				}
				else {
					(<any>res).message = result.error.message;
					(<any>res).status = 500;
					reject(res);
				}
			})
		});
	}

	xhrStream(xhroptions: IXHROptions, progressDelegate: (progressData: IXHRProgress) => void): Promise<XMLHttpRequest> {

		return new Promise((resolve, reject) => {
			reject(new Error("not implemented/ not used"))
		});
	}

	disconnect() {

	}

	get apiName(): string {
		return "outlook";
	}

	constructor() {
	}
}

export function ConfigureForOutlook() {
    ConfigurationApi.ConfigureXHR(new XHROutlook());
}