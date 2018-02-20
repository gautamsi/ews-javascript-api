declare module 'fetch' {
    export interface Meta {
        status: number;
        responseHeaders: any
        finalUrl: URL;
        redirectCount: number;
        cookieJar: any
    }

    export interface FetchOptions {
        /** how many redirects allowed, defaults to 10 */
        maxRedirects?: number;
        /** set to true if redirects are not allowed, defaults to false */
        disableRedirects?: boolean;
        /** optional header fields, in the form of {'Header-Field':'value'} */
        headers?: { [key: string]: (any) };
        /** maximum allowd length for the file, the remainder is cut off. Defaults to Infinity */
        maxResponseLength?: number | "infinity";
        /** defaults to GET */
        method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS';
        /** request body */
        payload?: string;
        /** set to false, to disable content gzipping, needed for Node v0.5.9 which has buggy zlib */
        disableGzip?: boolean;
        /** an array of cookie definitions in the form of ['name=val'] */
        cookies?: any;
        /** for sharing cookies between requests, see below */
        cookieJar?: any;
        /** valid for fetchUrl */
        outputEncoding?: any;
        /** valid for fetchUrl, set to true to disable automatic charset decoding to utf-8 */
        disableDecoding?: any;
        /** valid for fetchUrl, set input encoding */
        overrideCharset?: any;
        /** use high performance asyncronous DNS resolution based on c-ares instead of a thread pool calling getaddrinfo(3) */
        asyncDnsLoookup?: any;
        /** set a timeout in ms */
        timeout?: number;
        /** pass-through http.request agent parameter for https */
        agentHttps?: any;
        /** pass-through http.request agent parameter for http */
        agentHttp?: any;
        /** pass-through http.request agent parameter as fallback, if agentHttps or agentHttp are not specified */
        agent?: any;
        /** whether to reject self-signed certificates (true, default behavior), or ignore and allow them (false) */
        rejectUnauthorized?: boolean;
        /** is the username for Basic auth */
        user?: string;
        /** is the password for Basic auth */
        pass?: string;
    }

    export class FetchStream {
        constructor(url: string, options: FetchOptions);
        destroy(): void;
        on: (event: 'data' | 'meta' | 'end' | 'error', callback?: (data?: string) => void) => void;
    }

    export function fetchUrl(url: string, callback: (error: Error, meta: Meta, body: string) => void): void;
    export function fetchUrl(url: string, options: FetchOptions, callback: (error: Error, meta: Meta, body: string) => void): void;
}