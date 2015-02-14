module Microsoft.Exchange.WebServices.Data {
    export class EwsXmlReader {
        private static ReadWriteBufferSize: number = 4096;

        get HasAttributes(): boolean { return this.currentNode ? this.currentNode.hasAttributes() : false; }
        get IsEmptyElement(): boolean { return this.currentNode.nodeType == System.Xml.XmlNodeType.Element && !this.currentNode.hasChildNodes(); }
        get LocalName(): string { return this.currentNode ? this.currentNode.localName : undefined; }
        get NamespacePrefix(): string { return this.currentNode ? this.currentNode.prefix : undefined; }
        get NamespaceUri(): string { return this.currentNode ? this.currentNode.namespaceURI : undefined; }
        get NodeType(): System.Xml.XmlNodeType { return this.currentNode ? this.currentNode.nodeType : undefined; }
        //get PrevNodeType(): System.Xml.XmlNodeType { return this.prevNodeType; }
        get IsRoot(): boolean { return this.currentNode == this.treeWalker.root; }
        get ParentNode(): Node { return this.currentNode ? this.currentNode.parentNode : undefined; }
        get CurrentNode(): Node { return this.currentNode; }
        private prevNodeType: System.Xml.XmlNodeType;
        private xmlReader: any;
        get Eof(): boolean { return this.eof; }
        private eof: boolean = false;
        protected xmlDoc: XMLDocument;
        protected currentNode: Node;
        protected treeWalker: TreeWalker;

        //#region Constructor
        constructor(rawXML: string) {
            var parser = new DOMParser();
            this.xmlDoc = parser.parseFromString(rawXML, "text/xml");
            this.treeWalker = this.xmlDoc.createTreeWalker(this.xmlDoc, NodeFilter.SHOW_ELEMENT, null, false);
            this.currentNode = this.treeWalker.root;
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
            this.InternalReadElement(xmlNamespace, localName, System.Xml.XmlNodeType.Element);

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
            this.InternalReadElement(xmlNamespace, localName, System.Xml.XmlNodeType.Element);
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

    //export module EwsXmlReader {

    //}

}