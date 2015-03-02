//import enums = require('../Enums');
﻿
module Microsoft.Exchange.WebServices.Data {
    export class EwsXmlReader {
        private static ReadWriteBufferSize: number = 4096;

        get HasAttributes(): boolean { return this.currentNode ? this.currentNode.hasAttributes() : false; }
        get IsEmptyElement(): boolean { return this.currentNode.nodeType == Node.ELEMENT_NODE /*System.Xml.XmlNodeType.Element*/ && !this.currentNode.hasChildNodes(); }
        get LocalName(): string { return this.currentNode ? this.currentNode.localName : undefined; }
        get NamespacePrefix(): string { return this.currentNode ? this.currentNode.prefix : undefined; }
        get NamespaceUri(): string { return this.currentNode ? this.currentNode.namespaceURI : undefined; }
        get NodeType(): System.Xml.XmlNodeType { return this.currentNode ? this.currentNode.nodeType : undefined; }
        //get PrevNodeType(): System.Xml.XmlNodeType { return this.prevNodeType; }
        get IsRoot(): boolean { return this.currentNode == this.treeWalker.root; }
        get ParentNode(): Node { return this.currentNode ? this.currentNode.parentNode : undefined; }
        get CurrentNode(): Node { return this.currentNode; }
        private prevNodeType: System.Xml.XmlNodeType;
        private xmlReader:  any;
        get Eof(): boolean { return this.eof; }
        private eof: boolean = false;
        protected xmlDoc: XMLDocument;
        protected currentNode: Node;
        protected treeWalker: TreeWalker;


        //#region xml2JS logic
        JObject: any;

        //#endregion


        //#region Constructor
        constructor(rawXML: string) {
            var parser = new DOMParser();
            this.xmlDoc = parser.parseFromString(rawXML, "text/xml");
            this.treeWalker = this.xmlDoc.createTreeWalker(this.xmlDoc, NodeFilter.SHOW_ELEMENT, null, false);
            this.currentNode = this.treeWalker.root;

            this.JObject = Parsers.xml2js.parseXMLNode(this.currentNode.firstChild,true);
        }
        //#endregion


        EnsureCurrentNodeIsEndElement(xmlNamespace: XmlNamespace, localName: string): any { throw new Error("Not implemented."); }
        //EnsureCurrentNodeIsStartElement(xmlNamespace: XmlNamespace, localName: string): any { throw new Error("Not implemented."); }
        //EnsureCurrentNodeIsStartElement(): any { throw new Error("Not implemented."); }
        FormatElementName(namespacePrefix: string, localElementName: string): string { throw new Error("Not implemented."); }
        GetXmlReaderForNode(): any { throw new Error("Not implemented."); }
        InitializeXmlReader(stream: any /*System.IO.Stream*/): any { throw new Error("Not implemented."); }
        //InternalReadElement(namespacePrefix: string, localName: string, nodeType: System.Xml.XmlNodeType): any;// { throw new Error("Not implemented."); }
        InternalReadElement(xmlNamespace: XmlNamespace, localName: string, nodeType: System.Xml.XmlNodeType): any {

            if (this.LocalName === localName && this.NamespaceUri == EwsUtilities.GetNamespaceUri(xmlNamespace)) return;
            this.Read(nodeType);

            if (localName && nodeType)
                if ((this.LocalName != localName) || (this.NamespaceUri != EwsUtilities.GetNamespaceUri(xmlNamespace))) {
                    throw new Error(string.Format(
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
        //IsEndElement(xmlNamespace: XmlNamespace, localName: string): boolean { throw new Error("Not implemented."); }
        //IsEndElement(namespacePrefix: string, localName: string): boolean { throw new Error("Not implemented."); }
        //IsStartElement(namespacePrefix: string, localName: string): boolean { throw new Error("Not implemented."); }
        //IsStartElement(): boolean { throw new Error("Not implemented."); }
        //IsStartElement(xmlNamespace: XmlNamespace, localName: string): boolean { throw new Error("Not implemented."); }
        IsElement(xmlNamespace: XmlNamespace, localName: string): boolean {
            return (this.LocalName == localName) &&
                ((this.NamespacePrefix == EwsUtilities.GetNamespacePrefix(xmlNamespace)) ||
                (this.NamespaceUri == EwsUtilities.GetNamespaceUri(xmlNamespace)));
        }

        //Read(): any { throw new Error("Not implemented."); }
        Read(nodeType?: System.Xml.XmlNodeType): boolean {
            this.currentNode = this.treeWalker.nextNode();
            if (this.currentNode == null) this.eof = true;
            if (nodeType) {
                if (this.NodeType !== nodeType) throw new Error("unexpected element type");
            }

            return this.currentNode != null;
        }


        //ReadAttributeValue(attributeName: string): string;// { throw new Error("Not implemented."); }
        //ReadAttributeValue(attributeName: string): any { throw new Error("Not implemented."); }
        ReadAttributeValue(xmlNamespace: XmlNamespace, attributeName: string): string {
            if (this.currentNode == null || this.currentNode.nodeType != this.currentNode.ELEMENT_NODE || !this.currentNode.hasAttributes()) return null;
            var elem = <Element>this.currentNode;

            var val = elem.getAttributeNS(EwsUtilities.GetNamespaceUri(xmlNamespace), attributeName);
            return val;
        }

        //ReadBase64ElementValue(outputStream: System.IO.Stream): any { throw new Error("Not implemented."); }
        ReadBase64ElementValue(): any[] /*System.Byte[]*/ { throw new Error("Not implemented."); }

        ReadElementValue(): string {
            return this.currentNode.textContent;
        }
        //ReadElementValue(): any { throw new Error("Not implemented."); }
        //ReadElementValue(xmlNamespace: XmlNamespace, localName: string): any { throw new Error("Not implemented."); }
        //ReadElementValue(namespacePrefix: string, localName: string): string { throw new Error("Not implemented."); }
        //ReadElementValue(xmlNamespace: XmlNamespace, localName: string): string { throw new Error("Not implemented."); }

        //ReadEndElement(namespacePrefix: string, elementName: string): any { throw new Error("Not implemented."); }
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

        ReadInnerXml(): string { throw new Error("Not implemented."); }

        ReadNullableAttributeValue(attributeName: string): any { throw new Error("Not implemented."); }
        ReadOuterXml(): string { throw new Error("Not implemented."); }
        //ReadStartElement(namespacePrefix: string, localName: string): any { throw new Error("Not implemented."); }
        ReadStartElement(xmlNamespace: XmlNamespace, localName: string): void {
            this.InternalReadElement(xmlNamespace, localName, Node.ELEMENT_NODE /*System.Xml.XmlNodeType.Element*/);
        }
        ReadToDescendant(xmlNamespace: XmlNamespace, localName: string): any { throw new Error("Not implemented."); }
        ReadValue(): string { throw new Error("Not implemented."); }
        //ReadValue(): any { throw new Error("Not implemented."); }
        SeekLast(): void {
            if (!this.eof) this.currentNode = this.treeWalker.previousNode();
        }
        SkipCurrentElement(): void {
            debugger;
            var parentNode = this.CurrentNode;
            do {
                this.Read();
            }
            while (this.HasRecursiveParentNode(parentNode, parentNode.localName));
            this.SeekLast();
        }
        SkipElement(xmlNamespace: XmlNamespace, localName: string): any { throw new Error("Not implemented."); }
        //SkipElement(namespacePrefix: string, localName: string): any { throw new Error("Not implemented."); }
        TryReadValue(value: any): boolean { throw new Error("Not implemented."); }
    }
    export class EwsServiceXmlReader extends EwsXmlReader {
        Service: ExchangeService;
        private service: ExchangeService;
        //#region Constructor
        constructor(rawXML: string, service: ExchangeService) {
            super(rawXML);
        }
        //#endregion
        ConvertStringToDateTime(dateTimeString: string): Date { throw new Error("Not implemented."); }
        ConvertStringToUnspecifiedDate(dateTimeString: string): Date { throw new Error("Not implemented."); }
        ReadElementValueAsDateTime(): Date { throw new Error("Not implemented."); }
        //ReadElementValueAsDateTime(xmlNamespace: XmlNamespace, localName: string): Date { throw new Error("Not implemented."); }
        ReadElementValueAsUnbiasedDateTimeScopedToServiceTimeZone(): Date { throw new Error("Not implemented."); }
        ReadElementValueAsUnspecifiedDate(): Date { throw new Error("Not implemented."); }
        //ReadServiceObjectsCollectionFromXml(collectionXmlNamespace: XmlNamespace, collectionXmlElementName: string, getObjectInstanceDelegate: GetObjectInstanceDelegate<T>, clearPropertyBag: boolean, requestedPropertySet: PropertySet, summaryPropertiesOnly: boolean): System.Collections.Generic.List<T> { throw new Error("Not implemented."); }
        //ReadServiceObjectsCollectionFromXml(collectionXmlElementName: string, getObjectInstanceDelegate: GetObjectInstanceDelegate<T>, clearPropertyBag: boolean, requestedPropertySet: PropertySet, summaryPropertiesOnly: boolean): System.Collections.Generic.List<T> { throw new Error("Not implemented."); }
        ReadServiceObjectsCollectionFromXml<TServiceObject extends ServiceObject>(collectionXmlElementName: string,
            getObjectInstanceDelegate: GetObjectInstanceDelegate<TServiceObject>,
            clearPropertyBag: boolean, requestedPropertySet: PropertySet, summaryPropertiesOnly: boolean,
            collectionXmlNamespace: XmlNamespace = XmlNamespace.Messages): TServiceObject[] /*System.Collections.Generic.List<T>*/ {

            // condensed both overload in one.

            //return this.ReadServiceObjectsCollectionFromXml<TServiceObject>(
            //    XmlNamespace.Messages,
            //    collectionXmlElementName,
            //    getObjectInstanceDelegate,
            //    clearPropertyBag,
            //    requestedPropertySet,
            //    summaryPropertiesOnly);

            var serviceObjects: TServiceObject[] = [];//new List<TServiceObject>();
            var serviceObject: TServiceObject = null;

            if (!this.IsElement(collectionXmlNamespace, collectionXmlElementName)) {
                this.ReadStartElement(collectionXmlNamespace, collectionXmlElementName);
            }

            if (!this.IsEmptyElement) {
                do {
                    this.Read();

                    //if (this.IsStartElement()) { //todo: test for specific startElement if possible - cant check that with javascript XML Node Walker
                        serviceObject = getObjectInstanceDelegate(this.Service, this.LocalName);

                        if (serviceObject == null) {
                            this.SkipCurrentElement();
                        }
                        else {
                            if (this.LocalName.toLowerCase() !== serviceObject.GetXmlElementName().toLowerCase()) {
                                throw new ServiceLocalException(
                                    string.Format(
                                        "The type of the object in the store ({0}) does not match that of the local object ({1}).",
                                        this.LocalName,
                                        serviceObject.GetXmlElementName()));
                            }

                            serviceObject.LoadFromXml(
                                this,
                                clearPropertyBag,
                                requestedPropertySet,
                                summaryPropertiesOnly);

                            serviceObjects.push(serviceObject);
                        }
                    //}
                }
                while (!this.HasRecursiveParent(/*collectionXmlNamespace, */collectionXmlElementName));
                this.SeekLast(); // to let next Read() parse right node.
            }

            return serviceObjects;

        }
    }

    export class EwsServiceXmlWriter {
        //get InternalWriter(): System.Xml.XmlWriter;
        get Service(): ExchangeServiceBase { return this.service }
        static BufferSize: number = 4096;

        IsTimeZoneHeaderEmitted: boolean;
        RequireWSSecurityUtilityNamespace: boolean;
        private isDisposed: boolean;
        private service: ExchangeServiceBase;
        private xmlWriter: any;// System.Xml.XmlWriter;
        private isTimeZoneHeaderEmitted: boolean;
        private requireWSSecurityUtilityNamespace: boolean;
        private static utf8Encoding: any;// System.Text.Encoding;
        Dispose(): any { throw new Error("Not implemented."); }
        Flush(): void { //throw new Error("Not implemented.");
        }

        //#region custome XML writer data;
        private xmlElements: string[] = [];
        private pendingElementData = "";
        private pendingXMLTagClosure = false;
        private soapData: string = "";

        private rootUris: string[] = [];
        private rootLevel: boolean = false;
        private currentLevel: number = 0;
        private uriCache: string[][];

        GetXML(keep: boolean = false): string {
            var returnVal = this.soapData.trim();
            if (!keep) this.soapData = "";
            return returnVal;
        }

        private CloseTag(): void {
            if (this.pendingXMLTagClosure) {
                this.soapData += ">";
                this.pendingXMLTagClosure = false;
                this.rootLevel = false;
            }

        }

        private PushUris(prefix:string, uri: string ): void {

            if (this.rootLevel) {
                this.rootUris.push(prefix + ":" + uri);
            }

        }

        private CheckRootUri(prefix: string, uri: string): boolean {
            return this.rootUris.indexOf(prefix + ":" + uri) >= 0;
        }

        //#endregion

        //TryConvertObjectToString(value: any, strValue: any): boolean { throw new Error("Not implemented."); }
        ConvertObjectToString(value: any): string {
            var strValue: string = null;
            if (typeof (value) == "object" && !(value.GetSearchString /*ISearchStringProvider*/)) throw new Error("value can not be of type object");

            if (value != null) {
                switch (typeof (value)) {
                    case "boolean":
                        strValue = EwsUtilities.BoolToXSBool(<boolean>value);
                        break;
                    case "number":
                        strValue = value;
                        //todo check for datetime
                        //strValue = this.Service.ConvertDateTimeToUniversalDateTimeString((DateTime) value);
                        break;
                    case "string":
                        return value;
                    default:
                        try {
                            if (value.GetSearchString) // checking - ISearchStringProvider
                                strValue = value.GetSearchString();
                        }
                        catch (e) {
                            strValue = value;
                        }

                        break;
                }
                return strValue;
            }

            //return converted;
            return undefined;
        }
        //WriteAttributeString(localName: string, stringValue: string): any { throw new Error("Not implemented."); }

        WriteAttributeString(namespacePrefix: string, localName: string, stringValue: string): void {
            var namespaceprefix = namespacePrefix || "";
            if (namespaceprefix !== "") namespaceprefix += ":";
            this.soapData += " " + namespaceprefix + localName + "=\"" + stringValue + "\"";
            if (namespacePrefix == "xmlns") // push to rootUris cache
                this.PushUris(localName, stringValue);
            //try {
            //    this.xmlWriter.WriteAttributeString(
            //        namespacePrefix,
            //        localName,
            //        null,
            //        stringValue);
            //}
            //catch (ex) {
            //    // XmlTextWriter will throw ArgumentException if string includes invalid characters.
            //    //throw new ServiceXmlSerializationException(
            //    //    string.Format(Strings.InvalidAttributeValue, stringValue, localName),
            //    //    ex);
            //}
        }
        //WriteAttributeValue(localName: string, value: any): any { throw new Error("Not implemented."); }
        //WriteAttributeValue(localName: string, alwaysWriteEmptyString: boolean, value: any): any { throw new Error("Not implemented."); }
        //WriteAttributeValue(namespacePrefix: string, localName: string, value: any): void {}
        WriteAttributeValue(namespacePrefix: string, localName: string, value: any, alwaysWriteEmptyString?: boolean): void {
            var stringValue: string = this.ConvertObjectToString(value);
            if (typeof (stringValue) !== 'undefined' && stringValue !== "") {
                this.WriteAttributeString(
                    namespacePrefix,
                    localName,
                    stringValue);
            }
        }
        //WriteBase64ElementValue(buffer: System.Byte[]): any{ throw new Error("Not implemented.");}
        //WriteBase64ElementValue(stream: System.IO.Stream): any{ throw new Error("Not implemented.");}
        WriteElementValue(xmlNamespace: XmlNamespace, localName: string, displayName: string, value: any): void {
            var stringValue: string = this.ConvertObjectToString(value);
            if (stringValue != undefined) {
                this.WriteStartElement(xmlNamespace, localName);
                this.WriteValue(stringValue, displayName);
                this.WriteEndElement();
            }
            else {
                throw new Error(string.Format(Strings.ElementValueCannotBeSerialized.ToString(), typeof (value), localName));
            }
        }

        //WriteElementValue(xmlNamespace: XmlNamespace, localName: string, value: any): any{ throw new Error("Not implemented.");}

        WriteEndElement(): void {
            //this.xmlWriter.WriteEndElement();
            var element = "</" + this.xmlElements.pop() + ">";
            this.CloseTag();
            this.soapData += element;
        }
        //WriteNode(xmlNode: System.Xml.XmlNode): any{ throw new Error("Not implemented.");}
        WriteStartElement(xmlNamespace: XmlNamespace, localName: string): void {
            this.CloseTag();
            if (this.soapData == "")
                this.rootLevel = true;
            else
                this.soapData += "";//\r\n";
            var prefix = EwsUtilities.GetNamespacePrefix(xmlNamespace);
            this.soapData += "<" + prefix + ":" + localName;

            var uri = EwsUtilities.GetNamespaceUri(xmlNamespace);
            if (!this.CheckRootUri(prefix, uri)) {
                this.soapData += " xmlns:" + prefix + "=\"" + uri + "\"";
            }
            this.PushUris(prefix, uri);

            this.xmlElements.push(prefix + ":" + localName);

            this.pendingXMLTagClosure = true;
            //this.xmlWriter.WriteStartElement(
            //    EwsUtilities.GetNamespacePrefix(xmlNamespace),
            //    localName,
            //    EwsUtilities.GetNamespaceUri(xmlNamespace));
        }
        WriteValue(value: string, name: string): any {
            //var closeElement = this.soapData.charAt(this.soapData.length - 1) !== ">";
            //if (closeElement) this.soapData += ">";
            this.CloseTag();
            this.soapData += value;

            //todo: validate invalid characters
            // name is used for exception with invalid characters
        }
    }

    //export module EwsServiceXmlWriter {
    //    export var BufferSize: number = 4096;
    //}

}

//var _tmp = Microsoft.Exchange.WebServices.Data;
//export=_tmp;
