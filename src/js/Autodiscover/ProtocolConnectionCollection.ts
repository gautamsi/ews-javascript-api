import {ProtocolConnection} from "./ProtocolConnection";
import {EwsXmlReader} from "../Core/EwsXmlReader";
import {XmlElementNames} from "../Core/XmlElementNames";

export class ProtocolConnectionCollection {
    Connections: ProtocolConnection[] = [];//System.Collections.Generic.List<ProtocolConnection>;
    //private connections: ProtocolConnection[];//System.Collections.Generic.List<ProtocolConnection>;
    constructor() { }
    /**@internal */
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
