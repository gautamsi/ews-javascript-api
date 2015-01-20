module Microsoft.Exchange.WebServices.Autodiscover {
    export class AlternateMailboxCollection {
        Entries: AlternateMailbox[]; //System.Collections.Generic.List<AlternateMailbox>;
        static LoadFromXml(reader: Data.EwsXmlReader): AlternateMailboxCollection { throw new Error("Not implemented."); }
    }

    export class DocumentSharingLocationCollection {
        Entries: DocumentSharingLocation[];//System.Collections.Generic.List<DocumentSharingLocation>;
        static LoadFromXml(reader: Data.EwsXmlReader): DocumentSharingLocationCollection { throw new Error("Not implemented."); }
    }

    export class ProtocolConnectionCollection {
        Connections: ProtocolConnection[];//System.Collections.Generic.List<ProtocolConnection>;
        private connections: ProtocolConnection[];//System.Collections.Generic.List<ProtocolConnection>;
        static LoadFromXml(reader: Data.EwsXmlReader): ProtocolConnectionCollection { throw new Error("Not implemented."); }
    }
    export class WebClientUrl {
        AuthenticationMethods: string;
        Url: string;
        private authenticationMethods: string;
        private url: string;
        static LoadFromXml(reader: Data.EwsXmlReader): WebClientUrl {
            var webClientUrl = new WebClientUrl();
            var parent = reader.CurrentNode;
            do {
                reader.Read();

                if (reader.NodeType == Node.ELEMENT_NODE) {
                    switch (reader.LocalName) {
                        case Data.XmlElementNames.AuthenticationMethods:
                            webClientUrl.AuthenticationMethods = reader.ReadElementValue();
                            break;
                        case Data.XmlElementNames.Url:
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
    export class WebClientUrlCollection {
        Urls: WebClientUrl[] = [];// new Array<WebClientUrl>();// System.Collections.Generic.List<WebClientUrl>;
        //private urls: WebClientUrl[];// System.Collections.Generic.List<WebClientUrl>;
        static LoadFromXml(reader: Data.EwsXmlReader): WebClientUrlCollection {
            var instance = new WebClientUrlCollection();
            var parent = reader.CurrentNode;
            do {
                reader.Read();

                if ((reader.NodeType == Node.ELEMENT_NODE) && (reader.LocalName == Data.XmlElementNames.WebClientUrl)) {
                    instance.Urls.push(WebClientUrl.LoadFromXml(reader));
                }
            }
            while (reader.HasRecursiveParentNode(parent, parent.localName));
            reader.SeekLast();// fix xml treewalker to go back last node, next do..while loop will come back to current node.

            return instance;
        }
    }

}