import EwsXmlReader = require("../Core/EwsXmlReader");

import AutodiscoverResponse = require("./Responses/AutodiscoverResponse");

class AutodiscoverResponseCollection<TResponse extends AutodiscoverResponse> extends AutodiscoverResponse { //IEnumerable<TResponse>
    Count: number;
    Item: TResponse;
    Responses: TResponse[];//System.Collections.Generic.List<TResponse>;
    private responses: TResponse[];//System.Collections.Generic.List<TResponse>;

    constructor() {
        super();
        this.Responses = new Array<TResponse>();
    }
    __thisIndexer(index: number): TResponse {
        return this.Responses[index];
    }
    CreateResponseInstance(): TResponse { throw new Error("Not implemented."); }
    GetEnumerator(): any { throw new Error("Not implemented."); }
    GetResponseCollectionXmlElementName(): string { throw new Error("Not implemented."); }
    GetResponseInstanceXmlElementName(): string { throw new Error("Not implemented."); }
    LoadFromXml(reader: EwsXmlReader, endElementName: string): void {
        do {
            reader.Read();

            if (reader.NodeType == 1 /*Node.ELEMENT_NODE*/) {
                if (reader.LocalName == this.GetResponseCollectionXmlElementName()) {
                    this.LoadResponseCollectionFromXml(reader);
                }
                else {
                    super.LoadFromXml(reader, endElementName);
                }
            }
        }

        while (reader.HasRecursiveParent(endElementName));
        //while (!reader.IsEndElement(XmlNamespace.Autodiscover, endElementName));
    }

    LoadFromJson(obj: any): void {

        var element = this.GetResponseCollectionXmlElementName()
        super.LoadFromJson(obj);
        this.LoadResponseCollectionFromJson(obj[element]);
    }

    LoadResponseCollectionFromJson(obj: any): void {
        var element = this.GetResponseInstanceXmlElementName()
        var responses:any = undefined;
        if (Object.prototype.toString.call(obj[element]) === "[object Array]")
            responses = obj[element];
        else
            responses = [obj[element]];

        for (var i = 0; i < responses.length; i++) {
            var response: TResponse = this.CreateResponseInstance();
            response.LoadFromJson(responses[i]);
            this.Responses.push(response);
        }
    }

    LoadResponseCollectionFromXml(reader: EwsXmlReader): void {
        if (!reader.IsEmptyElement) {
            do {
                reader.Read();
                if ((reader.NodeType == 1 /*Node.ELEMENT_NODE*/ /*System.Xml.XmlNodeType.Element*/) && (reader.LocalName == this.GetResponseInstanceXmlElementName())) {
                    var response: TResponse = this.CreateResponseInstance();
                    response.LoadFromXml(reader, this.GetResponseInstanceXmlElementName());
                    this.Responses.push(response);
                }
            }
            while (reader.HasRecursiveParent(this.GetResponseCollectionXmlElementName()));
            //while (!reader.IsEndElement(XmlNamespace.Autodiscover, this.GetResponseCollectionXmlElementName()));
        }
    }
}

export = AutodiscoverResponseCollection;


//module Microsoft.Exchange.WebServices.Autodiscover {
//}
//import _export = Microsoft.Exchange.WebServices.Autodiscover;
//export = _export;
