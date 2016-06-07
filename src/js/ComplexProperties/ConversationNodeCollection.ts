import {ArrayHelper, StringHelper, TypeSystem} from "../ExtensionMethods";
import {ExchangeService} from "../Core/ExchangeService";
import {PropertySet} from "../Core/PropertySet";

import {ConversationNode} from "./ConversationNode";
import {ComplexPropertyCollection} from "./ComplexPropertyCollection";
/**
 * Represents a collection of conversation items.
 * 
 * @sealed
 */
export class ConversationNodeCollection extends ComplexPropertyCollection<ConversationNode> {

    private propertySet: PropertySet = null;

    /**
     * @internal Initializes a new instance of the **ConversationNodeCollection** class.
     *
     * @param   {PropertySet}   propertySet   The property set.
     */
    constructor(propertySet: PropertySet) {
        super();
        this.propertySet = propertySet;
    }

    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {string}   complexProperty   The complex property.
     * @return  {ConversationNode}           XML element name.
     */
    CreateComplexProperty(xmlElementName: string): ConversationNode {
        return new ConversationNode(this.propertySet);
    }

    /**
     * @internal Creates the default complex property.
     *
     * @return  {ConversationNode}      ConversationItem.
     */
    CreateDefaultComplexProperty(): ConversationNode {
        return new ConversationNode(this.propertySet);
    }

    // /**
    //  * @internal Loads from XMLjsObject.
    //  *
    //  * @interface   IJsonCollectionDeserializer
    //  * 
    //  * @param   {any}               jsObjectCollection   The json collection.
    //  * @param   {ExchangeService}   service          The service.
    //  */
    // LoadFromXmlJsObject(jsObjectCollection: any, service: ExchangeService): void {
    //     let jsCollection: any[] = jsObjectCollection;
    //     if (!ArrayHelper.isArray(jsCollection)) {
    //         jsCollection = [jsObjectCollection];
    //     }

    //     for (let jsObject of jsCollection) {
    //         let jsEntry = jsObject;

    //         if (jsEntry != null) {
    //             let node: ConversationNode = new ConversationNode(this.propertySet);
    //             node.LoadFromXmlJsObject(jsEntry, service);
    //             this.InternalAdd(node);
    //         }
    //     }
    // }

    /**
     * @internal Gets the name of the collection item XML element.
     *
     * @param   {ConversationNode}  complexProperty   The complex property.
     * @return  {string}            XML element name.
     */
    GetCollectionItemXmlElementName(complexProperty: ConversationNode): string {
        return complexProperty.GetXmlElementName();
    }
}