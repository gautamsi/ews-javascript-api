import ConversationNode = require("./ConversationNode");
import ComplexPropertyCollection = require("./ComplexPropertyCollection");
import PropertySet = require("../Core/PropertySet");

class ConversationNodeCollection extends ComplexPropertyCollection<ConversationNode> {
    private propertySet: PropertySet;
    CreateComplexProperty(xmlElementName: string): ConversationNode { throw new Error("ConversationNodeCollection.ts - CreateComplexProperty : Not implemented."); }
    CreateDefaultComplexProperty(): ConversationNode { throw new Error("ConversationNodeCollection.ts - CreateDefaultComplexProperty : Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: ConversationNode): string { throw new Error("ConversationNodeCollection.ts - GetCollectionItemXmlElementName : Not implemented."); }
}
export =ConversationNodeCollection;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
