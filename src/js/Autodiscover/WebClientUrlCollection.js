"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WebClientUrl_1 = require("./WebClientUrl");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var WebClientUrlCollection = /** @class */ (function () {
    function WebClientUrlCollection() {
        this.Urls = []; // new Array<WebClientUrl>();// System.Collections.Generic.List<WebClientUrl>;
    }
    //private urls: WebClientUrl[];// System.Collections.Generic.List<WebClientUrl>;
    WebClientUrlCollection.LoadFromJson = function (obj) {
        var instance = new WebClientUrlCollection();
        var element = XmlElementNames_1.XmlElementNames.WebClientUrl;
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
    };
    /**@internal */
    WebClientUrlCollection.LoadFromXml = function (reader) {
        var instance = new WebClientUrlCollection();
        var parent = reader.CurrentNode;
        do {
            reader.Read();
            if ((reader.NodeType == 1 /*Node.ELEMENT_NODE*/) && (reader.LocalName == XmlElementNames_1.XmlElementNames.WebClientUrl)) {
                instance.Urls.push(WebClientUrl_1.WebClientUrl.LoadFromXml(reader));
            }
        } while (reader.HasRecursiveParentNode(parent, parent.localName));
        reader.SeekLast(); // fix xml treewalker to go back last node, next do..while loop will come back to current node.
        return instance;
    };
    return WebClientUrlCollection;
}());
exports.WebClientUrlCollection = WebClientUrlCollection;
