import ProtocolConnection = require("./ProtocolConnection");
import EwsXmlReader = require("../Core/EwsXmlReader");

class ProtocolConnectionCollection {
    Connections: ProtocolConnection[];//System.Collections.Generic.List<ProtocolConnection>;
    private connections: ProtocolConnection[];//System.Collections.Generic.List<ProtocolConnection>;
    static LoadFromXml(reader: EwsXmlReader): ProtocolConnectionCollection { throw new Error("Not implemented."); }
}

export = ProtocolConnectionCollection

//module Microsoft.Exchange.WebServices.Autodiscover {
//}
//import _export = Microsoft.Exchange.WebServices.Autodiscover;
//export = _export;
