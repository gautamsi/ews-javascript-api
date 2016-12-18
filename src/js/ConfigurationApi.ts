import { XHRFactory } from "./XHRFactory";
import { Promise, PromiseConstructor, ConfigurePromise } from "./Promise";
import { IXHROptions, IXHRApi } from "./Interfaces";

export class ConfigurationApi {

    static ConfigureXHR(xhrApi: IXHRApi) {
        XHRFactory.xhrHelper = xhrApi;
    }

    static ConfigurePromise(promise: PromiseConstructor) {
        ConfigurePromise(promise);
    }
}