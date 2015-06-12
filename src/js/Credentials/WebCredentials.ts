import {ExchangeCredentials} from "./ExchangeCredentials";
export class WebCredentials extends ExchangeCredentials {
    Credentials: /*System.Net.ICredentials*/any;
    private credentials: /*System.Net.ICredentials*/any;
    AdjustUrl(url: /*System.Uri*/string): /*System.Uri*/string { throw new Error("WebCredentials.ts - AdjustUrl : Not implemented."); }
    //PrepareWebRequest(request: IEwsHttpWebRequest): any { throw new Error("WebCredentials.ts - PrepareWebRequest : Not implemented.");}
}