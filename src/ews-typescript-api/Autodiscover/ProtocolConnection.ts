import EwsXmlReader = require("../Core/EwsXmlReader");

class ProtocolConnection {
    EncryptionMethod: string;
    Hostname: string;
    Port: number;
    private encryptionMethod: string;
    private hostname: string;
    private port: number;
    LoadFromXml(reader: EwsXmlReader): ProtocolConnection { throw new Error("Not implemented."); }
}
export = ProtocolConnection;


//module Microsoft.Exchange.WebServices.Autodiscover {
//}
//import _export = Microsoft.Exchange.WebServices.Autodiscover;
//export = _export;
