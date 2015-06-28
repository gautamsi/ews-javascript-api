import {PromiseFactory} from "../src/js/PromiseFactory"
import {IPromise, IXHROptions, IXHRApi} from "../src/js/interfaces";
export class MockXHRApi implements IXHRApi {
	constructor(public responseText:string){    
  }
	xhr(xhroptions: IXHROptions): IPromise<XMLHttpRequest> {
		return PromiseFactory.create((successDelegate, errorDelegate, progressDelegate) => {
			var result = {
				response:null,
				readyState:4,
				responseText:null,
				status:200,				
			}
      result.response = this.responseText;
      result.responseText = this.responseText;
			successDelegate(result);
		});
	}
	get type(): string {
		return "mockXHR";
	}
}