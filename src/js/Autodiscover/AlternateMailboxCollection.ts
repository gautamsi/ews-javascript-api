import AlternateMailbox = require("./AlternateMailbox");
import EwsXmlReader = require("../Core/EwsXmlReader");

class AlternateMailboxCollection {
    Entries: AlternateMailbox[]; //System.Collections.Generic.List<AlternateMailbox>;
    static LoadFromXml(reader: EwsXmlReader): AlternateMailboxCollection { throw new Error("Not implemented."); }
}

export = AlternateMailboxCollection;




//module Microsoft.Exchange.WebServices.Autodiscover {
//}
//import _export = Microsoft.Exchange.WebServices.Autodiscover;
//export = _export;