module System.Xml {
    export class XmlWriter {
        Settings: System.Xml.XmlWriterSettings;
        WriteState: System.Xml.WriteState;
        XmlSpace: System.Xml.XmlSpace;
        XmlLang: string;
        private writeNodeBuffer: any;
        Close(): any{ throw new Error("Not implemented.");}
        //Create(output: System.IO.Stream, settings: System.Xml.XmlWriterSettings): System.Xml.XmlWriter{ throw new Error("Not implemented.");}
        //Create(output: any, settings: System.Xml.XmlWriterSettings): System.Xml.XmlWriter{ throw new Error("Not implemented.");}
        //Create(output: any): System.Xml.XmlWriter{ throw new Error("Not implemented.");}
        //Create(output: System.IO.TextWriter, settings: System.Xml.XmlWriterSettings): System.Xml.XmlWriter{ throw new Error("Not implemented.");}
        //Create(output: System.IO.TextWriter): System.Xml.XmlWriter{ throw new Error("Not implemented.");}
        //Create(output: System.Xml.XmlWriter): System.Xml.XmlWriter{ throw new Error("Not implemented.");}
        //Create(output: System.Xml.XmlWriter, settings: System.Xml.XmlWriterSettings): System.Xml.XmlWriter{ throw new Error("Not implemented.");}
        Create(outputFileName: string, settings: System.Xml.XmlWriterSettings): System.Xml.XmlWriter{ throw new Error("Not implemented.");}
        //Create(outputFileName: string): System.Xml.XmlWriter{ throw new Error("Not implemented.");}
        //Create(output: System.IO.Stream): System.Xml.XmlWriter{ throw new Error("Not implemented.");}
        //Dispose(disposing: boolean): any{ throw new Error("Not implemented.");}
        //Dispose(): any{ throw new Error("Not implemented.");}
        Flush(): any{ throw new Error("Not implemented.");}
        FlushAsync(): any{ throw new Error("Not implemented.");}
        LookupPrefix(ns: string): string{ throw new Error("Not implemented.");}
        WriteAttributes(reader: any, defattr: boolean): any{ throw new Error("Not implemented.");}
        WriteAttributesAsync(reader: any, defattr: boolean): any{ throw new Error("Not implemented.");}
        WriteAttributeString(localName: string, value: string): any{ throw new Error("Not implemented.");}
        //WriteAttributeString(localName: string, ns: string, value: string): any{ throw new Error("Not implemented.");}
        //WriteAttributeString(prefix: string, localName: string, ns: string, value: string): any{ throw new Error("Not implemented.");}
        WriteAttributeStringAsync(prefix: string, localName: string, ns: string, value: string): any{ throw new Error("Not implemented.");}
        WriteAttributeStringAsyncHelper(task: any, value: string): any{ throw new Error("Not implemented.");}
        //WriteBase64(buffer: System.Byte[], index: number, count: number): any{ throw new Error("Not implemented.");}
        //WriteBase64Async(buffer: System.Byte[], index: number, count: number): any{ throw new Error("Not implemented.");}
        //WriteBinHex(buffer: System.Byte[], index: number, count: number): any{ throw new Error("Not implemented.");}
        //WriteBinHexAsync(buffer: System.Byte[], index: number, count: number): any{ throw new Error("Not implemented.");}
        WriteCData(text: string): any{ throw new Error("Not implemented.");}
        WriteCDataAsync(text: string): any{ throw new Error("Not implemented.");}
        WriteCharEntity(ch: string): any{ throw new Error("Not implemented.");}
        WriteCharEntityAsync(ch: string): any{ throw new Error("Not implemented.");}
        WriteChars(buffer: any, index: number, count: number): any{ throw new Error("Not implemented.");}
        WriteCharsAsync(buffer: any, index: number, count: number): any{ throw new Error("Not implemented.");}
        WriteComment(text: string): any{ throw new Error("Not implemented.");}
        WriteCommentAsync(text: string): any{ throw new Error("Not implemented.");}
        WriteDocType(name: string, pubid: string, sysid: string, subset: string): any{ throw new Error("Not implemented.");}
        WriteDocTypeAsync(name: string, pubid: string, sysid: string, subset: string): any{ throw new Error("Not implemented.");}
        WriteElementString(localName: string, value: string): any{ throw new Error("Not implemented.");}
        //WriteElementString(localName: string, ns: string, value: string): any{ throw new Error("Not implemented.");}
        //WriteElementString(prefix: string, localName: string, ns: string, value: string): any{ throw new Error("Not implemented.");}
        WriteElementStringAsync(prefix: string, localName: string, ns: string, value: string): any{ throw new Error("Not implemented.");}
        WriteEndAttribute(): any{ throw new Error("Not implemented.");}
        WriteEndAttributeAsync(): any{ throw new Error("Not implemented.");}
        WriteEndDocument(): any{ throw new Error("Not implemented.");}
        WriteEndDocumentAsync(): any{ throw new Error("Not implemented.");}
        WriteEndElement(): any{ throw new Error("Not implemented.");}
        WriteEndElementAsync(): any{ throw new Error("Not implemented.");}
        WriteEntityRef(name: string): any{ throw new Error("Not implemented.");}
        WriteEntityRefAsync(name: string): any{ throw new Error("Not implemented.");}
        WriteFullEndElement(): any{ throw new Error("Not implemented.");}
        WriteFullEndElementAsync(): any{ throw new Error("Not implemented.");}
        WriteLocalNamespaces(nsNav: any): any{ throw new Error("Not implemented.");}
        WriteLocalNamespacesAsync(nsNav: any): any{ throw new Error("Not implemented.");}
        WriteName(name: string): any{ throw new Error("Not implemented.");}
        WriteNameAsync(name: string): any{ throw new Error("Not implemented.");}
        WriteNmToken(name: string): any{ throw new Error("Not implemented.");}
        WriteNmTokenAsync(name: string): any{ throw new Error("Not implemented.");}
        WriteNode(reader: any, defattr: boolean): any{ throw new Error("Not implemented.");}
        //WriteNode(navigator: any, defattr: boolean): any{ throw new Error("Not implemented.");}
        WriteNodeAsync(reader: any, defattr: boolean): any{ throw new Error("Not implemented.");}
        //WriteNodeAsync(navigator: any, defattr: boolean): any{ throw new Error("Not implemented.");}
        WriteNodeAsync_CallAsyncReader(reader: any, defattr: boolean): any{ throw new Error("Not implemented.");}
        WriteNodeAsync_CallSyncReader(reader: any, defattr: boolean): any{ throw new Error("Not implemented.");}
        WriteProcessingInstruction(name: string, text: string): any{ throw new Error("Not implemented.");}
        WriteProcessingInstructionAsync(name: string, text: string): any{ throw new Error("Not implemented.");}
        WriteQualifiedName(localName: string, ns: string): any{ throw new Error("Not implemented.");}
        WriteQualifiedNameAsync(localName: string, ns: string): any{ throw new Error("Not implemented.");}
        WriteRaw(buffer: any, index: number, count: number): any{ throw new Error("Not implemented.");}
        //WriteRaw(data: string): any{ throw new Error("Not implemented.");}
        WriteRawAsync(buffer: any, index: number, count: number): any{ throw new Error("Not implemented.");}
        //WriteRawAsync(data: string): any{ throw new Error("Not implemented.");}
        WriteStartAttribute(prefix: string, localName: string, ns: string): any{ throw new Error("Not implemented.");}
        //WriteStartAttribute(localName: string, ns: string): any{ throw new Error("Not implemented.");}
        //WriteStartAttribute(localName: string): any{ throw new Error("Not implemented.");}
        //WriteStartAttributeAsync(prefix: string, localName: string, ns: string): any{ throw new Error("Not implemented.");}
        WriteStartDocument(standalone: boolean): any{ throw new Error("Not implemented.");}
        //WriteStartDocument(): any{ throw new Error("Not implemented.");}
        //WriteStartDocumentAsync(standalone: boolean): any{ throw new Error("Not implemented.");}
        WriteStartDocumentAsync(): any{ throw new Error("Not implemented.");}
        WriteStartElement(prefix: string, localName: string, ns: string): any{ throw new Error("Not implemented.");}
        //WriteStartElement(localName: string, ns: string): any{ throw new Error("Not implemented.");}
        //WriteStartElement(localName: string): any{ throw new Error("Not implemented.");}
        WriteStartElementAsync(prefix: string, localName: string, ns: string): any{ throw new Error("Not implemented.");}
        WriteString(text: string): any{ throw new Error("Not implemented.");}
        WriteStringAsync(text: string): any{ throw new Error("Not implemented.");}
        WriteSurrogateCharEntity(lowChar: string, highChar: string): any{ throw new Error("Not implemented.");}
        WriteSurrogateCharEntityAsync(lowChar: string, highChar: string): any{ throw new Error("Not implemented.");}
        WriteValue(value: any): any{ throw new Error("Not implemented.");}
        //WriteValue(value: boolean): any{ throw new Error("Not implemented.");}
        //WriteValue(value: Date): any{ throw new Error("Not implemented.");}
        //WriteValue(value: Date): any{ throw new Error("Not implemented.");}
        //WriteValue(value: number): any{ throw new Error("Not implemented.");}
        //WriteValue(value: number): any{ throw new Error("Not implemented.");}
        //WriteValue(value: number): any{ throw new Error("Not implemented.");}
        //WriteValue(value: number): any{ throw new Error("Not implemented.");}
        //WriteValue(value: number): any{ throw new Error("Not implemented.");}
        //WriteValue(value: string): any{ throw new Error("Not implemented.");}
        WriteWhitespace(ws: string): any{ throw new Error("Not implemented.");}
        WriteWhitespaceAsync(ws: string): any{ throw new Error("Not implemented.");}
    }
    export class XmlWriterSettings {
        Async: boolean;
        Encoding: string;// System.Text.Encoding;
        OmitXmlDeclaration: boolean;
        NewLineHandling: System.Xml.NewLineHandling;
        NewLineChars: string;
        Indent: boolean;
        IndentChars: string;
        NewLineOnAttributes: boolean;
        CloseOutput: boolean;
        ConformanceLevel: System.Xml.ConformanceLevel;
        CheckCharacters: boolean;
        NamespaceHandling: System.Xml.NamespaceHandling;
        WriteEndDocumentOnClose: boolean;
        OutputMethod: System.Xml.XmlOutputMethod;
        CDataSectionElements: any[];//todo  System.Collections.Generic.List<System.Xml.XmlQualifiedName>;
        DoNotEscapeUriAttributes: boolean;
        MergeCDataSections: boolean;
        MediaType: string;
        DocTypeSystem: string;
        DocTypePublic: string;
        Standalone: boolean;//todo  System.Xml.XmlStandalone;
        AutoXmlDeclaration: boolean;
        IndentInternal: any;//todo System.Xml.TriState;
        IsQuerySpecific: boolean;
        ReadOnly: boolean;
        private useAsync: boolean;
        private encoding: string;//System.Text.Encoding;
        private omitXmlDecl: boolean;
        private newLineHandling: System.Xml.NewLineHandling;
        private newLineChars: string;
        private indent: any;//todo System.Xml.TriState;
        private indentChars: string;
        private newLineOnAttributes: boolean;
        private closeOutput: boolean;
        private namespaceHandling: System.Xml.NamespaceHandling;
        private conformanceLevel: System.Xml.ConformanceLevel;
        private checkCharacters: boolean;
        private writeEndDocumentOnClose: boolean;
        private outputMethod: System.Xml.XmlOutputMethod;
        private cdataSections: any[];//todo System.Collections.Generic.List<System.Xml.XmlQualifiedName>;
        private doNotEscapeUriAttributes: boolean;
        private mergeCDataSections: boolean;
        private mediaType: string;
        private docTypeSystem: string;
        private docTypePublic: string;
        private standalone: boolean;//todo System.Xml.XmlStandalone;
        private autoXmlDecl: boolean;
        private isReadOnly: boolean;
        AddConformanceWrapper(baseWriter: System.Xml.XmlWriter): System.Xml.XmlWriter{ throw new Error("Not implemented.");}
        CheckReadOnly(propertyName: string): any{ throw new Error("Not implemented.");}
        Clone(): System.Xml.XmlWriterSettings{ throw new Error("Not implemented.");}
        //CreateWriter(outputFileName: string): System.Xml.XmlWriter{ throw new Error("Not implemented.");}
        //CreateWriter(output: System.IO.Stream): System.Xml.XmlWriter{ throw new Error("Not implemented.");}
        //CreateWriter(output: System.IO.TextWriter): System.Xml.XmlWriter{ throw new Error("Not implemented.");}
        //CreateWriter(output: System.Xml.XmlWriter): System.Xml.XmlWriter{ throw new Error("Not implemented.");}
        GetObjectData(writer: any): any{ throw new Error("Not implemented.");}
        Initialize(): any{ throw new Error("Not implemented.");}
        Reset(): any{ throw new Error("Not implemented.");}
    }

}