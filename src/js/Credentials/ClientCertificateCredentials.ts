import {ExchangeCredentials} from "./ExchangeCredentials";
export class ClientCertificateCredentials extends ExchangeCredentials {
    ClientCertificates: /*System.Security.Cryptography.X509Certificates.X509CertificateCollection*/any;
    private clientCertificates: /*System.Security.Cryptography.X509Certificates.X509CertificateCollection*/any;
    PrepareWebRequest(request: /*IEwsHttpWebRequest*/any): any { throw new Error("ClientCertificateCredentials.ts - PrepareWebRequest : Not implemented."); }
}
