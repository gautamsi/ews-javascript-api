import { IXHRApi } from "./Interfaces";
import { XhrApi } from "@ewsjs/xhr";
export class XHRFactory {

    static xhrHelper: IXHRApi;
    static get XHRApi() {
        if (typeof this.xhrHelper === 'undefined' || this.xhrHelper === null) {
            this.xhrHelper = new XhrApi();
        }
        return this.xhrHelper;
    }
}
