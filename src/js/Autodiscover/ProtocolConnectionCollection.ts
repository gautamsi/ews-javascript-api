import ProtocolConnection = require("./ProtocolConnection");
import EwsXmlReader = require("../Core/EwsXmlReader");
import XmlElementNames = require("../Core/XmlElementNames");

class ProtocolConnectionCollection {
    Connections: ProtocolConnection[] = [];//System.Collections.Generic.List<ProtocolConnection>;
    //private connections: ProtocolConnection[];//System.Collections.Generic.List<ProtocolConnection>;
    constructor() { }
    static LoadFromXml(reader: EwsXmlReader): ProtocolConnectionCollection { throw new Error("Not implemented. - depricated for JS api, use LoadFromJson"); }
    static LoadFromJson(obj: any): ProtocolConnectionCollection {
        var instance = new ProtocolConnectionCollection();

        var element = XmlElementNames.ProtocolConnection;
        var responses = undefined;
        if (Object.prototype.toString.call(obj[element]) === "[object Array]")
            responses = obj[element];
        else
            responses = [obj[element]];

        for (var i = 0; i < responses.length; i++) {
            instance.Connections.push(responses[i]);
            //var response: = this.CreateResponseInstance();
            //response.LoadFromObject(responses[i], this.GetResponseInstanceXmlElementName());
            //instance.Urls.push(responses);
        }

        return instance;
    }

}

export = ProtocolConnectionCollection

//module Microsoft.Exchange.WebServices.Autodiscover {
//}
//import _export = Microsoft.Exchange.WebServices.Autodiscover;
//export = _export;
