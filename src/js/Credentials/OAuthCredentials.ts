import {ExchangeCredentials} from "./ExchangeCredentials";
export class OAuthCredentials extends ExchangeCredentials {
    private static BearerAuthenticationType: string = "Bearer";
    private token: string;
    private credentials: /*System.Net.ICredentials*/any;
    private static validTokenPattern: any;
    //PrepareWebRequest(request: IEwsHttpWebRequest): any { throw new Error("OAuthCredentials.ts - PrepareWebRequest : Not implemented.");}
}