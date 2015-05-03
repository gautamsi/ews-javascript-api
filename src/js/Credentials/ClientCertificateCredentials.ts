import ExchangeCredentials = require("./ExchangeCredentials");
class ClientCertificateCredentials extends ExchangeCredentials {
    ClientCertificates: /*System.Security.Cryptography.X509Certificates.X509CertificateCollection*/any;
    private clientCertificates: /*System.Security.Cryptography.X509Certificates.X509CertificateCollection*/any;
    PrepareWebRequest(request: /*IEwsHttpWebRequest*/any): any { throw new Error("Not implemented."); }
}
export = ClientCertificateCredentials;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
