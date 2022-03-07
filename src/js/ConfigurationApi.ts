import { XHRFactory } from "./XHRFactory";
import { PromiseConstructor, ConfigurePromise } from "./Promise";
import { IXHROptions, IXHRApi } from "./Interfaces";
import { FetchOptions } from 'fetch';
import { XHRDefault } from './XHRDefault';

export class ConfigurationApi {

    static ConfigureXHR(xhrApi: IXHRApi) {
        XHRFactory.xhrHelper = xhrApi;
    }

    static SetXHROptions(fetchOptions: FetchOptions) {
        XHRDefault.defaultOptions = fetchOptions;
    }

    static ConfigurePromise(promise: PromiseConstructor) {
        ConfigurePromise(promise);
    }
}
