import {EwsXmlReader} from "../Core/EwsXmlReader";
import {XmlElementNames} from "../Core/XmlElementNames";

export class WebClientUrl {
    AuthenticationMethods: string;
    Url: string;
    //private authenticationMethods: string;
    //private url: string;
    static LoadFromJson(obj: any): WebClientUrl {
        var webClientUrl = new WebClientUrl();
        webClientUrl.AuthenticationMethods = obj[XmlElementNames.AuthenticationMethods];
        webClientUrl.Url = obj[XmlElementNames.Url];
        return webClientUrl;
    }
    /**@internal */
    static LoadFromXml(reader: EwsXmlReader): WebClientUrl {
        var webClientUrl = new WebClientUrl();
        var parent = reader.CurrentNode;
        do {
            reader.Read();

            if (reader.NodeType == Node.ELEMENT_NODE) {
                switch (reader.LocalName) {
                    case XmlElementNames.AuthenticationMethods:
                        webClientUrl.AuthenticationMethods = reader.ReadElementValue();
                        break;
                    case XmlElementNames.Url:
                        webClientUrl.Url = reader.ReadElementValue();
                        break;
                }
            }
        }
        while (reader.HasRecursiveParentNode(parent, parent.localName));
        //reader.SeekLast();// fix xml treewalker to go back last node, next do..while loop will come back to current node.

        return webClientUrl;
    }
}
