"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AutodiscoverResponse_1 = require("./Responses/AutodiscoverResponse");
var AutodiscoverResponseCollection = /** @class */ (function (_super) {
    __extends(AutodiscoverResponseCollection, _super);
    //private responses: TResponse[];//System.Collections.Generic.List<TResponse>;
    function AutodiscoverResponseCollection() {
        var _this = _super.call(this) || this;
        _this.Responses = []; //System.Collections.Generic.List<TResponse>;
        return _this;
    }
    Object.defineProperty(AutodiscoverResponseCollection.prototype, "Count", {
        get: function () { return this.Responses.length; },
        enumerable: true,
        configurable: true
    });
    ;
    AutodiscoverResponseCollection.prototype.__thisIndexer = function (index) {
        return this.Responses[index];
    };
    AutodiscoverResponseCollection.prototype.CreateResponseInstance = function () { throw new Error("AutodiscoverResponseCollection.ts - CreateResponseInstance : Not implemented."); };
    AutodiscoverResponseCollection.prototype.GetEnumerator = function () { throw new Error("AutodiscoverResponseCollection.ts - GetEnumerator : Not implemented."); };
    AutodiscoverResponseCollection.prototype.GetResponseCollectionXmlElementName = function () { throw new Error("AutodiscoverResponseCollection.ts - GetResponseCollectionXmlElementName : Not implemented."); };
    AutodiscoverResponseCollection.prototype.GetResponseInstanceXmlElementName = function () { throw new Error("AutodiscoverResponseCollection.ts - GetResponseInstanceXmlElementName : Not implemented."); };
    /**@internal */
    AutodiscoverResponseCollection.prototype.LoadFromXml = function (reader, endElementName) {
        do {
            reader.Read();
            if (reader.NodeType == 1 /*Node.ELEMENT_NODE*/) {
                if (reader.LocalName == this.GetResponseCollectionXmlElementName()) {
                    this.LoadResponseCollectionFromXml(reader);
                }
                else {
                    _super.prototype.LoadFromXml.call(this, reader, endElementName);
                }
            }
        } while (reader.HasRecursiveParent(endElementName));
        //while (!reader.IsEndElement(XmlNamespace.Autodiscover, endElementName));
    };
    AutodiscoverResponseCollection.prototype.LoadFromJson = function (obj) {
        var element = this.GetResponseCollectionXmlElementName();
        _super.prototype.LoadFromJson.call(this, obj);
        this.LoadResponseCollectionFromJson(obj[element]);
    };
    AutodiscoverResponseCollection.prototype.LoadResponseCollectionFromJson = function (obj) {
        var element = this.GetResponseInstanceXmlElementName();
        var responses = undefined;
        if (Object.prototype.toString.call(obj[element]) === "[object Array]")
            responses = obj[element];
        else
            responses = [obj[element]];
        for (var i = 0; i < responses.length; i++) {
            var response = this.CreateResponseInstance();
            response.LoadFromJson(responses[i]);
            this.Responses.push(response);
        }
    };
    /**@internal */
    AutodiscoverResponseCollection.prototype.LoadResponseCollectionFromXml = function (reader) {
        if (!reader.IsEmptyElement) {
            do {
                reader.Read();
                if ((reader.NodeType == 1 /*Node.ELEMENT_NODE*/ /*System.Xml.XmlNodeType.Element*/) && (reader.LocalName == this.GetResponseInstanceXmlElementName())) {
                    var response = this.CreateResponseInstance();
                    response.LoadFromXml(reader, this.GetResponseInstanceXmlElementName());
                    this.Responses.push(response);
                }
            } while (reader.HasRecursiveParent(this.GetResponseCollectionXmlElementName()));
            //while (!reader.IsEndElement(XmlNamespace.Autodiscover, this.GetResponseCollectionXmlElementName()));
        }
    };
    return AutodiscoverResponseCollection;
}(AutodiscoverResponse_1.AutodiscoverResponse));
exports.AutodiscoverResponseCollection = AutodiscoverResponseCollection;
