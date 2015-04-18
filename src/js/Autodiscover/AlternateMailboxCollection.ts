import AlternateMailbox = require("./AlternateMailbox");
import EwsXmlReader = require("../Core/EwsXmlReader");
import XmlElementNames = require("../Core/XmlElementNames");

class AlternateMailboxCollection {
    Entries: AlternateMailbox[] = []; //System.Collections.Generic.List<AlternateMailbox>;
    static LoadFromXml(reader: EwsXmlReader): AlternateMailboxCollection { throw new Error("Not implemented. depricated use LoadFromJson"); }
    static LoadFromJson(obj: any): AlternateMailboxCollection {
        var instance = new AlternateMailboxCollection();

        var element = XmlElementNames.AlternateMailbox;
        var responses = undefined;
        if (Object.prototype.toString.call(obj[element]) === "[object Array]")
            responses = obj[element];
        else
            responses = [obj[element]];

        for (var i = 0; i < responses.length; i++) {
            instance.Entries.push(responses[i]);
            //AlternateMailbox.LoadFromJson(responses[i]);
            //instance.Entries.push(responses);
        }

        return instance;
    }
}

export = AlternateMailboxCollection;




//module Microsoft.Exchange.WebServices.Autodiscover {
//}
//import _export = Microsoft.Exchange.WebServices.Autodiscover;
//export = _export;