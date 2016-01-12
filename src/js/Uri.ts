import {StringHelper, UriHelper, ParsedUrl} from "./ExtensionMethods";
/**
* Uri: c# uri shim for js
*/
export class Uri {
    private url: string
    private m_scheme: string = null;
    /**returns string url component, no transformations yet */
    get AbsoluteUri(): string { return this.url; }
    get Host(): string { return UriHelper.getHost(this.url); }
    get Scheme(): string { return this.m_scheme; }
    constructor(url: string) {
        if (StringHelper.IsNullOrEmpty(url)) {
            throw new Error("Uri - ctor- argument is not string or it is null or empty")
        }
        this.url = url;
        var parsed = UriHelper.parseString(url)
        this.m_scheme = parsed.scheme.toLowerCase();
    }
    ToString(): string {
        return this.url;
    }
    // GetDomain(): string {
    //     return UriHelper.getDomain(this.url);
    // }
    // GetHost(url: string): string {
    //     return this.GetDomain();
    // }
    
    static ParseString(url: string) {
        return UriHelper.parseString(url);
    }

    static UriSchemeHttp: string = "http";
    static UriSchemeHttps: string = "https";

}