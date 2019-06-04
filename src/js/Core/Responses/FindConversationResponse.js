"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionMethods_1 = require("../../ExtensionMethods");
var EwsLogging_1 = require("../EwsLogging");
var EwsServiceJsonReader_1 = require("../EwsServiceJsonReader");
var FindConversationResults_1 = require("../../Search/FindConversationResults");
var HighlightTerm_1 = require("../../ComplexProperties/HighlightTerm");
var ItemInfo_1 = require("../ServiceObjects/Items/ItemInfo");
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * @internal Represents the response to a Conversation search operation.
 *
 * @sealed
 */
var FindConversationResponse = /** @class */ (function (_super) {
    __extends(FindConversationResponse, _super);
    /**
     * @internal Initializes a new instance of the **FindConversationResponse** class.
     */
    function FindConversationResponse() {
        var _this = _super.call(this) || this;
        _this.Results = new FindConversationResults_1.FindConversationResults();
        return _this;
    }
    Object.defineProperty(FindConversationResponse.prototype, "Conversations", {
        /**
         * @internal Gets the collection of conversations in results.
         */
        get: function () {
            return this.Results.Conversations;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    FindConversationResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        EwsLogging_1.EwsLogging.Assert(this.Results.Conversations != null, "FindConversationResponse.ReadElementsFromXml", "conversations is null.");
        EwsLogging_1.EwsLogging.Assert(this.Results.HighlightTerms != null, "FindConversationResponse.ReadElementsFromXml", "highlightTerms is null.");
        if (responseObject[XmlElementNames_1.XmlElementNames.Conversations]) {
            for (var _i = 0, _a = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(responseObject[XmlElementNames_1.XmlElementNames.Conversations], XmlElementNames_1.XmlElementNames.Conversation); _i < _a.length; _i++) {
                var conversationObject = _a[_i];
                var jsonConversation = conversationObject; // as JsonObject;
                var item = (new ItemInfo_1.ItemInfo()).CreateEwsObjectFromXmlElementName(service, XmlElementNames_1.XmlElementNames.Conversation);
                if (item != null) {
                    item.LoadFromXmlJsObject(jsonConversation, service, true, null, false);
                    this.Conversations.push(item);
                }
            }
        }
        if (responseObject[XmlElementNames_1.XmlElementNames.HighlightTerms]) {
            var highlightTermObjects = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(responseObject[XmlElementNames_1.XmlElementNames.HighlightTerms], XmlElementNames_1.XmlElementNames.HighlightTerm);
            if (highlightTermObjects != null) {
                for (var _b = 0, highlightTermObjects_1 = highlightTermObjects; _b < highlightTermObjects_1.length; _b++) {
                    var highlightTermObject = highlightTermObjects_1[_b];
                    var jsonHighlightTerm = highlightTermObject; // as JsonObject;
                    var term = new HighlightTerm_1.HighlightTerm();
                    term.LoadFromXmlJsObject(jsonHighlightTerm, service);
                    this.Results.HighlightTerms.push(term);
                }
            }
        }
        if (responseObject[XmlElementNames_1.XmlElementNames.TotalConversationsInView]) {
            this.Results.TotalCount = ExtensionMethods_1.Convert.toNumber(responseObject[XmlElementNames_1.XmlElementNames.TotalConversationsInView]);
        }
        if (responseObject[XmlElementNames_1.XmlElementNames.IndexedOffset]) {
            this.Results.IndexedOffset = ExtensionMethods_1.Convert.toNumber(responseObject[XmlElementNames_1.XmlElementNames.IndexedOffset]);
        }
    };
    return FindConversationResponse;
}(ServiceResponse_1.ServiceResponse));
exports.FindConversationResponse = FindConversationResponse;
