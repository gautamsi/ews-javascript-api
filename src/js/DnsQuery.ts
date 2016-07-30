import {StringHelper} from "./ExtensionMethods";
import {PromiseFactory} from "./PromiseFactory";
import {IPromise} from "./Interfaces";
import * as dns from "dns";

/**
* DnsQuery: to resolve srv records in nodejs autodiscover call
*/
export class DnsQuery {

    /**
     * resolve srv record
     */
    static ResolveSrvRecord(address: string): IPromise<SrvRecord[]> {
        return PromiseFactory.create((successDelegate, errorDelegate, progressDelegate) => {

            dns.resolveSrv(address, (err: Error, addresses: string[]) => {
                if (err) {
                    if (errorDelegate) errorDelegate(err);
                }
                else {

                    if (successDelegate)
                        successDelegate(addresses);
                }
            });
        });
    }
}

export interface SrvRecord {
    location: string;
    port: number;
    priority: number;
    weight: number;
}