module Microsoft.Exchange.WebServices.Data {

    export interface IEwsHttpWebRequest {
        Accept: string;
        AllowAutoRedirect: boolean;
        ClientCertificates: any;//System.Security.Cryptography.X509Certificates.X509CertificateCollection;
        ContentType: string;
        CookieContainer: any;//System.Net.CookieContainer;
        Credentials: any;//System.Net.ICredentials;
        Headers: any;//System.Net.WebHeaderCollection;
        Method: string;
        PreAuthenticate: boolean;
        Proxy: any;//System.Net.IWebProxy;
        RequestUri: string;//System.Uri;
        Timeout: number;
        UseDefaultCredentials: boolean;
        UserAgent: string;
        KeepAlive: boolean;
        ConnectionGroupName: string;
        Abort(): any;
        //BeginGetRequestStream(callback: System.AsyncCallback, state: any): System.IAsyncResult;
        //BeginGetResponse(callback: System.AsyncCallback, state: any): System.IAsyncResult;
        //EndGetRequestStream(asyncResult: System.IAsyncResult): System.IO.Stream;
        //EndGetResponse(asyncResult: System.IAsyncResult): IEwsHttpWebResponse;
        //GetRequestStream(): System.IO.Stream;
        GetResponse(): IEwsHttpWebResponse;
    }
    export interface IEwsHttpWebRequestFactory {
        CreateExceptionResponse(exception: any): IEwsHttpWebResponse;
        CreateRequest(uri: string//System.Uri
                                ): IEwsHttpWebRequest;
    }
    export interface IEwsHttpWebResponse {
        ContentEncoding: string;
        ContentType: string;
        Headers: System.Net.WebHeaderCollection;
        ResponseUri: System.Uri;
        StatusCode: System.Net.HttpStatusCode;
        StatusDescription: string;
        ProtocolVersion: System.Version;
        Close(): any;
        GetResponseStream(): System.IO.Stream;
    }
}
