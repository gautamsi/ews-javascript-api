"use strict";
//todo: ix this - import Xml = require("System.Xml");
Object.defineProperty(exports, "__esModule", { value: true });
var EwsUtilities_1 = require("./EwsUtilities");
var EwsLogging_1 = require("./EwsLogging");
var ExtensionMethods_1 = require("../ExtensionMethods");
/** @internal */
var EwsXmlReader = /** @class */ (function () {
    //#endregion
    //#region Constructor
    function EwsXmlReader(rawXML) {
        this.eof = false;
        var parser = new ExtensionMethods_1.DOMParser();
        this.xmlDoc = parser.parseFromString(rawXML, "text/xml");
        //this.treeWalker = this.xmlDoc.createTreeWalker(this.xmlDoc, NodeFilter.SHOW_ELEMENT, null, false);
        //this.currentNode = this.treeWalker.root;
        var xml2js = new ExtensionMethods_1.xml2JsObject();
        this.jsObject = xml2js.parseXMLNode(this.xmlDoc.documentElement, true);
        EwsLogging_1.EwsLogging.DebugLog(this.JsObject, true);
    }
    Object.defineProperty(EwsXmlReader.prototype, "HasAttributes", {
        get: function () { return this.currentNode ? this.currentNode.hasAttributes() : false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EwsXmlReader.prototype, "IsEmptyElement", {
        get: function () { return this.currentNode.nodeType == Node.ELEMENT_NODE /*System.Xml.XmlNodeType.Element*/ && !this.currentNode.hasChildNodes(); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EwsXmlReader.prototype, "LocalName", {
        get: function () { return this.currentNode ? this.currentNode.localName : undefined; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EwsXmlReader.prototype, "NamespacePrefix", {
        get: function () { return this.currentNode ? this.currentNode.prefix : undefined; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EwsXmlReader.prototype, "NamespaceUri", {
        get: function () { return this.currentNode ? this.currentNode.namespaceURI : undefined; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EwsXmlReader.prototype, "NodeType", {
        get: function () { return this.currentNode ? this.currentNode.nodeType : undefined; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EwsXmlReader.prototype, "IsRoot", {
        //get PrevNodeType(): System.Xml.XmlNodeType { return this.prevNodeType; }
        get: function () { return this.currentNode == this.treeWalker.root; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EwsXmlReader.prototype, "ParentNode", {
        get: function () { return this.currentNode ? this.currentNode.parentNode : undefined; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EwsXmlReader.prototype, "CurrentNode", {
        get: function () { return this.currentNode; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EwsXmlReader.prototype, "Eof", {
        get: function () { return this.eof; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EwsXmlReader.prototype, "JsObject", {
        //#region xml2JS logic
        get: function () { return this.jsObject; },
        enumerable: true,
        configurable: true
    });
    //#endregion
    EwsXmlReader.prototype.EnsureCurrentNodeIsEndElement = function (xmlNamespace, localName) { throw new Error("EwsXmlReader.ts - EnsureCurrentNodeIsEndElement : Not implemented."); };
    //EnsureCurrentNodeIsStartElement(xmlNamespace: XmlNamespace, localName: string): any { throw new Error("EwsXmlReader.ts - EnsureCurrentNodeIsStartElement : Not implemented."); }
    //EnsureCurrentNodeIsStartElement(): any { throw new Error("EwsXmlReader.ts - EnsureCurrentNodeIsStartElement : Not implemented."); }
    EwsXmlReader.prototype.FormatElementName = function (namespacePrefix, localElementName) { throw new Error("EwsXmlReader.ts - FormatElementName : Not implemented."); };
    EwsXmlReader.prototype.GetXmlReaderForNode = function () { throw new Error("EwsXmlReader.ts - GetXmlReaderForNode : Not implemented."); };
    EwsXmlReader.prototype.InitializeXmlReader = function (stream /*System.IO.Stream*/) { throw new Error("EwsXmlReader.ts - InitializeXmlReader : Not implemented."); };
    //InternalReadElement(namespacePrefix: string, localName: string, nodeType: System.Xml.XmlNodeType): any;// { throw new Error("EwsXmlReader.ts - InternalReadElement : Not implemented."); }
    EwsXmlReader.prototype.InternalReadElement = function (xmlNamespace, localName, nodeType /*Xml.XmlNodeType*/) {
        if (this.LocalName === localName && this.NamespaceUri == EwsUtilities_1.EwsUtilities.GetNamespaceUri(xmlNamespace))
            return;
        this.Read(nodeType);
        if (localName && nodeType)
            if ((this.LocalName != localName) || (this.NamespaceUri != EwsUtilities_1.EwsUtilities.GetNamespaceUri(xmlNamespace))) {
                throw new Error(ExtensionMethods_1.StringHelper.Format("unexpected element, {0}:{1}, {2}, {3}, {4}", EwsUtilities_1.EwsUtilities.GetNamespacePrefix(xmlNamespace), localName, nodeType, this.xmlReader.Name, this.NodeType));
            }
    };
    EwsXmlReader.prototype.HasRecursiveParent = function (localName, node) {
        if (node === void 0) { node = this.currentNode; }
        if (node === null || node.parentNode === null)
            return false;
        if (node.parentNode.localName == localName)
            return true;
        else
            return this.HasRecursiveParent(localName, node.parentNode);
    };
    EwsXmlReader.prototype.HasRecursiveParentNode = function (parentNode, parentName, node) {
        if (node === void 0) { node = this.currentNode; }
        if (node === null || node.parentNode === null)
            return false;
        if (node.parentNode.localName == parentName && node.parentNode != parentNode)
            return false;
        if (node.parentNode == parentNode)
            return true;
        else
            return this.HasRecursiveParentNode(parentNode, parentName, node.parentNode);
    };
    //IsEndElement(xmlNamespace: XmlNamespace, localName: string): boolean { throw new Error("EwsXmlReader.ts - IsEndElement : Not implemented."); }
    //IsEndElement(namespacePrefix: string, localName: string): boolean { throw new Error("EwsXmlReader.ts - IsEndElement : Not implemented."); }
    //IsStartElement(namespacePrefix: string, localName: string): boolean { throw new Error("EwsXmlReader.ts - IsStartElement : Not implemented."); }
    //IsStartElement(): boolean { throw new Error("EwsXmlReader.ts - IsStartElement : Not implemented."); }
    //IsStartElement(xmlNamespace: XmlNamespace, localName: string): boolean { throw new Error("EwsXmlReader.ts - IsStartElement : Not implemented."); }
    EwsXmlReader.prototype.IsElement = function (xmlNamespace, localName) {
        return (this.LocalName == localName) &&
            ((this.NamespacePrefix == EwsUtilities_1.EwsUtilities.GetNamespacePrefix(xmlNamespace)) ||
                (this.NamespaceUri == EwsUtilities_1.EwsUtilities.GetNamespaceUri(xmlNamespace)));
    };
    //Read(): any { throw new Error("EwsXmlReader.ts - Read : Not implemented."); }
    EwsXmlReader.prototype.Read = function (nodeType /*Xml.XmlNodeType*/) {
        this.currentNode = this.treeWalker.nextNode();
        if (this.currentNode == null)
            this.eof = true;
        if (nodeType) {
            if (this.NodeType !== nodeType)
                throw new Error("unexpected element type");
        }
        return this.currentNode != null;
    };
    //ReadAttributeValue(attributeName: string): string;// { throw new Error("EwsXmlReader.ts - ReadAttributeValue : Not implemented."); }
    //ReadAttributeValue(attributeName: string): any { throw new Error("EwsXmlReader.ts - ReadAttributeValue : Not implemented."); }
    EwsXmlReader.prototype.ReadAttributeValue = function (xmlNamespace, attributeName) {
        if (this.currentNode == null || this.currentNode.nodeType != this.currentNode.ELEMENT_NODE || !this.currentNode.hasAttributes())
            return null;
        var elem = this.currentNode;
        var val = elem.getAttributeNS(EwsUtilities_1.EwsUtilities.GetNamespaceUri(xmlNamespace), attributeName);
        return val;
    };
    //ReadBase64ElementValue(outputStream: System.IO.Stream): any { throw new Error("EwsXmlReader.ts - ReadBase64ElementValue : Not implemented."); }
    EwsXmlReader.prototype.ReadBase64ElementValue = function () { throw new Error("EwsXmlReader.ts - ReadBase64ElementValue : Not implemented."); };
    EwsXmlReader.prototype.ReadElementValue = function () {
        return this.currentNode.textContent;
    };
    //ReadElementValue(): any { throw new Error("EwsXmlReader.ts - ReadElementValue : Not implemented."); }
    //ReadElementValue(xmlNamespace: XmlNamespace, localName: string): any { throw new Error("EwsXmlReader.ts - ReadElementValue : Not implemented."); }
    //ReadElementValue(namespacePrefix: string, localName: string): string { throw new Error("EwsXmlReader.ts - ReadElementValue : Not implemented."); }
    //ReadElementValue(xmlNamespace: XmlNamespace, localName: string): string { throw new Error("EwsXmlReader.ts - ReadElementValue : Not implemented."); }
    //ReadEndElement(namespacePrefix: string, elementName: string): any { throw new Error("EwsXmlReader.ts - ReadEndElement : Not implemented."); }
    EwsXmlReader.prototype.ReadEndElement = function (xmlNamespace, localName) {
        this.InternalReadElement(xmlNamespace, localName, Node.ELEMENT_NODE /*System.Xml.XmlNodeType.Element*/);
    };
    EwsXmlReader.prototype.ReadEndElementIfNecessary = function (xmlNamespace, localName) {
        if (!(this.IsElement(xmlNamespace, localName) && this.IsEmptyElement)) {
            //if (!this.IsEndElement(xmlNamespace, localName)) {
            this.ReadEndElement(xmlNamespace, localName);
            //}
        }
    };
    EwsXmlReader.prototype.ReadInnerXml = function () { throw new Error("EwsXmlReader.ts - ReadInnerXml : Not implemented."); };
    EwsXmlReader.prototype.ReadNullableAttributeValue = function (attributeName) { throw new Error("EwsXmlReader.ts - ReadNullableAttributeValue : Not implemented."); };
    EwsXmlReader.prototype.ReadOuterXml = function () { throw new Error("EwsXmlReader.ts - ReadOuterXml : Not implemented."); };
    //ReadStartElement(namespacePrefix: string, localName: string): any { throw new Error("EwsXmlReader.ts - ReadStartElement : Not implemented."); }
    EwsXmlReader.prototype.ReadStartElement = function (xmlNamespace, localName) {
        this.InternalReadElement(xmlNamespace, localName, Node.ELEMENT_NODE /*System.Xml.XmlNodeType.Element*/);
    };
    EwsXmlReader.prototype.ReadToDescendant = function (xmlNamespace, localName) { throw new Error("EwsXmlReader.ts - ReadToDescendant : Not implemented."); };
    EwsXmlReader.prototype.ReadValue = function () { throw new Error("EwsXmlReader.ts - ReadValue : Not implemented."); };
    //ReadValue(): any { throw new Error("EwsXmlReader.ts - ReadValue : Not implemented."); }
    EwsXmlReader.prototype.SeekLast = function () {
        if (!this.eof)
            this.currentNode = this.treeWalker.previousNode();
    };
    EwsXmlReader.prototype.SkipCurrentElement = function () {
        //debug:
        var parentNode = this.CurrentNode;
        do {
            this.Read();
        } while (this.HasRecursiveParentNode(parentNode, parentNode.localName));
        this.SeekLast();
    };
    EwsXmlReader.prototype.SkipElement = function (xmlNamespace, localName) { throw new Error("EwsXmlReader.ts - SkipElement : Not implemented."); };
    //SkipElement(namespacePrefix: string, localName: string): any { throw new Error("EwsXmlReader.ts - SkipElement : Not implemented."); }
    EwsXmlReader.prototype.TryReadValue = function (value) { throw new Error("EwsXmlReader.ts - TryReadValue : Not implemented."); };
    EwsXmlReader.ReadWriteBufferSize = 4096;
    return EwsXmlReader;
}());
exports.EwsXmlReader = EwsXmlReader;
