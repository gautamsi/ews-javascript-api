
    class ConversationNodeCollection extends ComplexPropertyCollection<ConversationNode> {
        private propertySet: PropertySet;
        CreateComplexProperty(xmlElementName: string): ConversationNode { throw new Error("Not implemented."); }
        CreateDefaultComplexProperty(): ConversationNode { throw new Error("Not implemented."); }
        GetCollectionItemXmlElementName(complexProperty: ConversationNode): string { throw new Error("Not implemented."); }
    }

//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
