import {WebClientUrl} from "./WebClientUrl";
import {EwsXmlReader} from "../Core/EwsXmlReader";
import {XmlElementNames} from "../Core/XmlElementNames";

export class WebClientUrlCollection {
    Urls: WebClientUrl[] = [];// new Array<WebClientUrl>();// System.Collections.Generic.List<WebClientUrl>;
    //private urls: WebClientUrl[];// System.Collections.Generic.List<WebClientUrl>;
    static LoadFromJson(obj: any): WebClientUrlCollection {
        var instance = new WebClientUrlCollection();

        var element = XmlElementNames.WebClientUrl;
        var responses = undefined;
        if (Object.prototype.toString.call(obj[element]) === "[object Array]")
            responses = obj[element];
        else
            responses = [obj[element]];

        for (var i = 0; i < responses.length; i++) {
            instance.Urls.push(responses[i]);
            //var response: = this.CreateResponseInstance();
            //response.LoadFromObject(responses[i], this.GetResponseInstanceXmlElementName());
            //instance.Urls.push(responses);
        }

        return instance;
    }
    /**@internal */
    static LoadFromXml(reader: EwsXmlReader): WebClientUrlCollection {
        var instance = new WebClientUrlCollection();
        var parent = reader.CurrentNode;
        do {
            reader.Read();

            if ((reader.NodeType == 1/*Node.ELEMENT_NODE*/) && (reader.LocalName == XmlElementNames.WebClientUrl)) {
                instance.Urls.push(WebClientUrl.LoadFromXml(reader));
            }
        }
        while (reader.HasRecursiveParentNode(parent, parent.localName));
        reader.SeekLast();// fix xml treewalker to go back last node, next do..while loop will come back to current node.

        return instance;
    }
}


