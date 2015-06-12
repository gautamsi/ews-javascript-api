import {ConversationNode} from "./ConversationNode";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
import {PropertySet} from "../Core/PropertySet";
export class ConversationNodeCollection extends ComplexPropertyCollection<ConversationNode> {
    private propertySet: PropertySet;
    CreateComplexProperty(xmlElementName: string): ConversationNode { throw new Error("ConversationNodeCollection.ts - CreateComplexProperty : Not implemented."); }
    CreateDefaultComplexProperty(): ConversationNode { throw new Error("ConversationNodeCollection.ts - CreateDefaultComplexProperty : Not implemented."); }
    GetCollectionItemXmlElementName(complexProperty: ConversationNode): string { throw new Error("ConversationNodeCollection.ts - GetCollectionItemXmlElementName : Not implemented."); }
}


