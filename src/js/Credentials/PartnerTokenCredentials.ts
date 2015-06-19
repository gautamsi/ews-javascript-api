import {Uri} from "../Uri";
import {WSSecurityBasedCredentials} from "./WSSecurityBasedCredentials";
export class PartnerTokenCredentials extends WSSecurityBasedCredentials {
    private static WsSecuritySymmetricKeyPathSuffix: string = "/wssecurity/symmetrickey";
    NeedSignature: boolean;
    private keyInfoNode: any;
    AdjustUrl(url: Uri): Uri { throw new Error("PartnerTokenCredentials.ts - AdjustUrl : Not implemented."); }
    //PrepareWebRequest(request: IEwsHttpWebRequest): any { throw new Error("PartnerTokenCredentials.ts - PrepareWebRequest : Not implemented.");}
    Sign(memoryStream: any): any { throw new Error("PartnerTokenCredentials.ts - Sign : Not implemented."); }
}