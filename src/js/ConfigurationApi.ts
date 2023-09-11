import { XHRFactory } from "./XHRFactory";
import { IXHROptions, IXHRApi } from "./Interfaces";

export class ConfigurationApi {

    static ConfigureXHR(xhrApi: IXHRApi) {
        XHRFactory.xhrHelper = xhrApi;
    }
}
