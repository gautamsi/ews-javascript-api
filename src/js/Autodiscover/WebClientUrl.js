"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var XmlElementNames_1 = require("../Core/XmlElementNames");
var WebClientUrl = /** @class */ (function () {
    function WebClientUrl() {
    }
    //private authenticationMethods: string;
    //private url: string;
    WebClientUrl.LoadFromJson = function (obj) {
        var webClientUrl = new WebClientUrl();
        webClientUrl.AuthenticationMethods = obj[XmlElementNames_1.XmlElementNames.AuthenticationMethods];
        webClientUrl.Url = obj[XmlElementNames_1.XmlElementNames.Url];
        return webClientUrl;
    };
    /**@internal */
    WebClientUrl.LoadFromXml = function (reader) {
        var webClientUrl = new WebClientUrl();
        var parent = reader.CurrentNode;
        do {
            reader.Read();
            if (reader.NodeType == Node.ELEMENT_NODE) {
                switch (reader.LocalName) {
                    case XmlElementNames_1.XmlElementNames.AuthenticationMethods:
                        webClientUrl.AuthenticationMethods = reader.ReadElementValue();
                        break;
                    case XmlElementNames_1.XmlElementNames.Url:
                        webClientUrl.Url = reader.ReadElementValue();
                        break;
                }
            }
        } while (reader.HasRecursiveParentNode(parent, parent.localName));
        //reader.SeekLast();// fix xml treewalker to go back last node, next do..while loop will come back to current node.
        return webClientUrl;
    };
    return WebClientUrl;
}());
exports.WebClientUrl = WebClientUrl;
