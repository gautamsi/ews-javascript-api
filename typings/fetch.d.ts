declare module 'fetch' {
    export interface Meta {
        status: number;
        responseHeaders: any
        finalUrl: URL;
        redirectCount: number;
        cookieJar: any
    }

    export interface fetchOptions {
        maxRedirects?: number;
        disableRedirects?: boolean;
        headers?: any;
        maxResponseLength?: number | "infinity";
        method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS';
        payload?: string;
        disableGzip?: boolean;
        cookies?: any;
        cookieJar?: any;
        outputEncoding?: any;
        disableDecoding?: any;
        overrideCharset?: any;
        asyncDnsLoookup?: any;
        timeout?: number;
        agentHttps?: any;
        agentHttp?: any;
        agent?: any;
        rejectUnauthorized?: boolean;
    }

    export class FetchStream {
        constructor(url: string, options: fetchOptions);
        destroy(): void;
        on: (event: 'data' | 'meta' | 'end' | 'error', callback?: (data?: string) => void) => void;
    }

    export function fetchUrl(url: string, callback: (error: Error, meta: Meta, body: string) => void): void;
    export function fetchUrl(url: string, options: fetchOptions, callback: (error: Error, meta: Meta, body: string) => void): void;
}