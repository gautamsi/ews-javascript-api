//todo: ix this - import Xml = require("System.Xml");

import {XmlNamespace} from "../Enumerations/XmlNamespace";
import {EwsUtilities} from "./EwsUtilities";
import {EwsLogging} from "./EwsLogging";
import {StringHelper, DOMParser, xml2JsObject} from "../ExtensionMethods";
export class EwsXmlReader {
    private static ReadWriteBufferSize: number = 4096;

    get HasAttributes(): boolean { return this.currentNode ? this.currentNode.hasAttributes() : false; }
    get IsEmptyElement(): boolean { return this.currentNode.nodeType == Node.ELEMENT_NODE /*System.Xml.XmlNodeType.Element*/ && !this.currentNode.hasChildNodes(); }
    get LocalName(): string { return this.currentNode ? this.currentNode.localName : undefined; }
    get NamespacePrefix(): string { return this.currentNode ? (<any>this.currentNode).prefix : undefined; }
    get NamespaceUri(): string { return this.currentNode ? this.currentNode.namespaceURI : undefined; }
    get NodeType(): number /*Xml.XmlNodeType*/ { return this.currentNode ? this.currentNode.nodeType : undefined; }
    //get PrevNodeType(): System.Xml.XmlNodeType { return this.prevNodeType; }
    get IsRoot(): boolean { return this.currentNode == this.treeWalker.root; }
    get ParentNode(): Node { return this.currentNode ? this.currentNode.parentNode : undefined; }
    get CurrentNode(): Node { return this.currentNode; }
    private prevNodeType: number /*Xml.XmlNodeType*/;
    private xmlReader: any;
    get Eof(): boolean { return this.eof; }
    private eof: boolean = false;
    protected xmlDoc: XMLDocument;
    protected currentNode: Node;
    protected treeWalker: TreeWalker;


    //#region xml2JS logic
    get JsObject(): any { return this.jsObject; }
    private jsObject: any;
    //#endregion


    //#region Constructor
    constructor(rawXML: string) {
        var parser = new DOMParser();
        this.xmlDoc = parser.parseFromString(rawXML, "text/xml");
        //this.treeWalker = this.xmlDoc.createTreeWalker(this.xmlDoc, NodeFilter.SHOW_ELEMENT, null, false);
        //this.currentNode = this.treeWalker.root;
        var xml2js = new xml2JsObject();
        this.jsObject = xml2js.parseXMLNode(this.xmlDoc.documentElement, true);
        EwsLogging.DebugLog(this.JsObject, true);

    }
    //#endregion


    EnsureCurrentNodeIsEndElement(xmlNamespace: XmlNamespace, localName: string): any { throw new Error("EwsXmlReader.ts - EnsureCurrentNodeIsEndElement : Not implemented."); }
    //EnsureCurrentNodeIsStartElement(xmlNamespace: XmlNamespace, localName: string): any { throw new Error("EwsXmlReader.ts - EnsureCurrentNodeIsStartElement : Not implemented."); }
    //EnsureCurrentNodeIsStartElement(): any { throw new Error("EwsXmlReader.ts - EnsureCurrentNodeIsStartElement : Not implemented."); }
    FormatElementName(namespacePrefix: string, localElementName: string): string { throw new Error("EwsXmlReader.ts - FormatElementName : Not implemented."); }
    GetXmlReaderForNode(): any { throw new Error("EwsXmlReader.ts - GetXmlReaderForNode : Not implemented."); }
    InitializeXmlReader(stream: any /*System.IO.Stream*/): any { throw new Error("EwsXmlReader.ts - InitializeXmlReader : Not implemented."); }
    //InternalReadElement(namespacePrefix: string, localName: string, nodeType: System.Xml.XmlNodeType): any;// { throw new Error("EwsXmlReader.ts - InternalReadElement : Not implemented."); }
    InternalReadElement(xmlNamespace: XmlNamespace, localName: string, nodeType: number /*Xml.XmlNodeType*/): any {

        if (this.LocalName === localName && this.NamespaceUri == EwsUtilities.GetNamespaceUri(xmlNamespace)) return;
        this.Read(nodeType);

        if (localName && nodeType)
            if ((this.LocalName != localName) || (this.NamespaceUri != EwsUtilities.GetNamespaceUri(xmlNamespace))) {
                throw new Error(StringHelper.Format(
                    "unexpected element, {0}:{1}, {2}, {3}, {4}",
                    EwsUtilities.GetNamespacePrefix(xmlNamespace),
                    localName,
                    nodeType,
                    this.xmlReader.Name,
                    this.NodeType));
            }


    }
    HasRecursiveParent(localName: string, node: Node = this.currentNode): boolean {
        if (node === null || node.parentNode === null) return false;
        if (node.parentNode.localName == localName) return true;
        else
            return this.HasRecursiveParent(localName, node.parentNode);
    }
    HasRecursiveParentNode(parentNode: Node, parentName: string, node: Node = this.currentNode): boolean {
        if (node === null || node.parentNode === null) return false;
        if (node.parentNode.localName == parentName && node.parentNode != parentNode) return false;

        if (node.parentNode == parentNode) return true;
        else
            return this.HasRecursiveParentNode(parentNode, parentName, node.parentNode);
    }
    //IsEndElement(xmlNamespace: XmlNamespace, localName: string): boolean { throw new Error("EwsXmlReader.ts - IsEndElement : Not implemented."); }
    //IsEndElement(namespacePrefix: string, localName: string): boolean { throw new Error("EwsXmlReader.ts - IsEndElement : Not implemented."); }
    //IsStartElement(namespacePrefix: string, localName: string): boolean { throw new Error("EwsXmlReader.ts - IsStartElement : Not implemented."); }
    //IsStartElement(): boolean { throw new Error("EwsXmlReader.ts - IsStartElement : Not implemented."); }
    //IsStartElement(xmlNamespace: XmlNamespace, localName: string): boolean { throw new Error("EwsXmlReader.ts - IsStartElement : Not implemented."); }
    IsElement(xmlNamespace: XmlNamespace, localName: string): boolean {
        return (this.LocalName == localName) &&
            ((this.NamespacePrefix == EwsUtilities.GetNamespacePrefix(xmlNamespace)) ||
                (this.NamespaceUri == EwsUtilities.GetNamespaceUri(xmlNamespace)));
    }

    //Read(): any { throw new Error("EwsXmlReader.ts - Read : Not implemented."); }
    Read(nodeType?: number /*Xml.XmlNodeType*/): boolean {
        this.currentNode = this.treeWalker.nextNode();
        if (this.currentNode == null) this.eof = true;
        if (nodeType) {
            if (this.NodeType !== nodeType) throw new Error("unexpected element type");
        }

        return this.currentNode != null;
    }


    //ReadAttributeValue(attributeName: string): string;// { throw new Error("EwsXmlReader.ts - ReadAttributeValue : Not implemented."); }
    //ReadAttributeValue(attributeName: string): any { throw new Error("EwsXmlReader.ts - ReadAttributeValue : Not implemented."); }
    ReadAttributeValue(xmlNamespace: XmlNamespace, attributeName: string): string {
        if (this.currentNode == null || this.currentNode.nodeType != this.currentNode.ELEMENT_NODE || !this.currentNode.hasAttributes()) return null;
        var elem = <Element>this.currentNode;

        var val = elem.getAttributeNS(EwsUtilities.GetNamespaceUri(xmlNamespace), attributeName);
        return val;
    }

    //ReadBase64ElementValue(outputStream: System.IO.Stream): any { throw new Error("EwsXmlReader.ts - ReadBase64ElementValue : Not implemented."); }
    ReadBase64ElementValue(): any[] /*System.Byte[]*/ { throw new Error("EwsXmlReader.ts - ReadBase64ElementValue : Not implemented."); }

    ReadElementValue(): string {
        return this.currentNode.textContent;
    }
    //ReadElementValue(): any { throw new Error("EwsXmlReader.ts - ReadElementValue : Not implemented."); }
    //ReadElementValue(xmlNamespace: XmlNamespace, localName: string): any { throw new Error("EwsXmlReader.ts - ReadElementValue : Not implemented."); }
    //ReadElementValue(namespacePrefix: string, localName: string): string { throw new Error("EwsXmlReader.ts - ReadElementValue : Not implemented."); }
    //ReadElementValue(xmlNamespace: XmlNamespace, localName: string): string { throw new Error("EwsXmlReader.ts - ReadElementValue : Not implemented."); }

    //ReadEndElement(namespacePrefix: string, elementName: string): any { throw new Error("EwsXmlReader.ts - ReadEndElement : Not implemented."); }
    ReadEndElement(xmlNamespace: XmlNamespace, localName: string): void {
        this.InternalReadElement(xmlNamespace, localName, Node.ELEMENT_NODE /*System.Xml.XmlNodeType.Element*/);

    }

    ReadEndElementIfNecessary(xmlNamespace: XmlNamespace, localName: string): void {
        if (!(this.IsElement(xmlNamespace, localName) && this.IsEmptyElement)) {
            //if (!this.IsEndElement(xmlNamespace, localName)) {
            this.ReadEndElement(xmlNamespace, localName);
            //}
        }
    }

    ReadInnerXml(): string { throw new Error("EwsXmlReader.ts - ReadInnerXml : Not implemented."); }

    ReadNullableAttributeValue(attributeName: string): any { throw new Error("EwsXmlReader.ts - ReadNullableAttributeValue : Not implemented."); }
    ReadOuterXml(): string { throw new Error("EwsXmlReader.ts - ReadOuterXml : Not implemented."); }
    //ReadStartElement(namespacePrefix: string, localName: string): any { throw new Error("EwsXmlReader.ts - ReadStartElement : Not implemented."); }
    ReadStartElement(xmlNamespace: XmlNamespace, localName: string): void {
        this.InternalReadElement(xmlNamespace, localName, Node.ELEMENT_NODE /*System.Xml.XmlNodeType.Element*/);
    }
    ReadToDescendant(xmlNamespace: XmlNamespace, localName: string): any { throw new Error("EwsXmlReader.ts - ReadToDescendant : Not implemented."); }
    ReadValue(): string { throw new Error("EwsXmlReader.ts - ReadValue : Not implemented."); }
    //ReadValue(): any { throw new Error("EwsXmlReader.ts - ReadValue : Not implemented."); }
    SeekLast(): void {
        if (!this.eof) this.currentNode = this.treeWalker.previousNode();
    }
    SkipCurrentElement(): void {
        //debug:
        var parentNode = this.CurrentNode;
        do {
            this.Read();
        }
        while (this.HasRecursiveParentNode(parentNode, parentNode.localName));
        this.SeekLast();
    }
    SkipElement(xmlNamespace: XmlNamespace, localName: string): any { throw new Error("EwsXmlReader.ts - SkipElement : Not implemented."); }
    //SkipElement(namespacePrefix: string, localName: string): any { throw new Error("EwsXmlReader.ts - SkipElement : Not implemented."); }
    TryReadValue(value: any): boolean { throw new Error("EwsXmlReader.ts - TryReadValue : Not implemented."); }
}

