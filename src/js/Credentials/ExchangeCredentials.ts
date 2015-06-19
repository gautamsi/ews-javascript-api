import {base64Helper} from "../ExtensionMethods";
import {Uri} from "../Uri";
import {IXHROptions} from "../Interfaces";
export class ExchangeCredentials {
    //NeedSignature: boolean;
    static WsSecurityPathSuffix: string = "/wssecurity";

    constructor(public UserName: string, public Password: string) {

    }

    AdjustUrl(url: Uri): Uri { return new Uri(ExchangeCredentials.GetUriWithoutSuffix(url)); }
    EmitExtraSoapHeaderNamespaceAliases(writer: any /*System.Xml.XmlWriter*/): void { /*implemented by derived classes*/ }
    static GetUriWithoutSuffix(url: Uri): string {
        var absoluteUri: string = url.AbsoluteUri;
        //ref: can not use WSSecurityBasedCredentials.WsSecurityPathSuffix, creates circular reference.
        var index = absoluteUri.toUpperCase().indexOf(/*WSSecurityBasedCredentials*/ExchangeCredentials.WsSecurityPathSuffix.toUpperCase());//, StringComparison.OrdinalIgnoreCase);
        if (index != -1) {
            return absoluteUri.substring(0, index);
        }

        return absoluteUri;
    }
    //PreAuthenticate(): any{ throw new Error("ExchangeCredentials.ts - PreAuthenticate : Not implemented.");}
    PrepareWebRequest(request: IXHROptions /*IEwsHttpWebRequest*/): void {
        request.headers["Authorization"] = "Basic " + base64Helper.btoa(this.UserName + ":" + this.Password);
    }
    SerializeExtraSoapHeaders(writer: any /*System.Xml.XmlWriter*/, webMethodName: string): void { /*implemented by derived classes*/ }
    //SerializeWSSecurityHeaders(writer: System.Xml.XmlWriter): any{ throw new Error("ExchangeCredentials.ts - SerializeWSSecurityHeaders : Not implemented.");}
    //Sign(memoryStream: any): any{ throw new Error("ExchangeCredentials.ts - Sign : Not implemented.");}
}