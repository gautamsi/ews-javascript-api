import {Conversation} from "../ServiceObjects/Items/Conversation";
import {Convert} from "../../ExtensionMethods";
import {EwsLogging} from "../EwsLogging";
import {EwsServiceJsonReader} from "../EwsServiceJsonReader";
import {ExchangeService} from "../ExchangeService";
import {FindConversationResults} from "../../Search/FindConversationResults";
import {HighlightTerm} from "../../ComplexProperties/HighlightTerm";
import {ItemInfo} from "../ServiceObjects/Items/ItemInfo";
import {XmlElementNames} from "../XmlElementNames";

import {ServiceResponse} from "./ServiceResponse";
/**
 * @internal Represents the response to a Conversation search operation.
 * 
 * @sealed
 */
export class FindConversationResponse extends ServiceResponse {

    /**
     * @internal Gets FindConversation results.
     * 
     * @private set()     * 
     * @returns FindConversation results.
     * 
     */
    Results: FindConversationResults;

    /**
     * @internal Gets the collection of conversations in results.
     */
    get Conversations(): Conversation[] {
        return this.Results.Conversations;
    }

    /**
     * @internal Initializes a new instance of the **FindConversationResponse** class.
     */
    constructor() {
        super();
        this.Results = new FindConversationResults();
    }

    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    ReadElementsFromXmlJsObject(responseObject: any, service: ExchangeService): void {
        EwsLogging.Assert(
            this.Results.Conversations != null,
            "FindConversationResponse.ReadElementsFromXml",
            "conversations is null.");

        EwsLogging.Assert(
            this.Results.HighlightTerms != null,
            "FindConversationResponse.ReadElementsFromXml",
            "highlightTerms is null.");

        if (responseObject[XmlElementNames.Conversations]) {
            for (let conversationObject of EwsServiceJsonReader.ReadAsArray(responseObject[XmlElementNames.Conversations], XmlElementNames.Conversation)) {
                let jsonConversation: any = conversationObject;// as JsonObject;

                let item: Conversation = (new ItemInfo()).CreateEwsObjectFromXmlElementName<Conversation>(service, XmlElementNames.Conversation);

                if (item != null) {
                    item.LoadFromXmlJsObject(
                        jsonConversation,
                        service,
                        true,
                        null,
                        false);

                    this.Conversations.push(item);
                }
            }
        }

        if (responseObject[XmlElementNames.HighlightTerms]) {

            let highlightTermObjects: any[] = EwsServiceJsonReader.ReadAsArray(responseObject[XmlElementNames.HighlightTerms], XmlElementNames.HighlightTerm);
            if (highlightTermObjects != null) {
                for (let highlightTermObject of highlightTermObjects) {
                    let jsonHighlightTerm: any = highlightTermObject;// as JsonObject;
                    let term: HighlightTerm = new HighlightTerm();

                    term.LoadFromXmlJsObject(jsonHighlightTerm, service);
                    this.Results.HighlightTerms.push(term);
                }
            }
        }

        if (responseObject[XmlElementNames.TotalConversationsInView]) {
            this.Results.TotalCount = Convert.toNumber(responseObject[XmlElementNames.TotalConversationsInView]);
        }

        if (responseObject[XmlElementNames.IndexedOffset]) {
            this.Results.IndexedOffset = Convert.toNumber(responseObject[XmlElementNames.IndexedOffset]);
        }
    }
}