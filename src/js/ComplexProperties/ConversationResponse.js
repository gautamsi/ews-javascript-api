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
var ConversationId_1 = require("./ConversationId");
var ConversationNodeCollection_1 = require("./ConversationNodeCollection");
var EwsServiceJsonReader_1 = require("../Core/EwsServiceJsonReader");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 *
 *
 * @sealed
 */
var ConversationResponse = /** @class */ (function (_super) {
    __extends(ConversationResponse, _super);
    /**
     * @internal Initializes a new instance of the **ConversationResponse** class.
     *
     * @param   {PropertySet}   propertySet   The property set.
     */
    function ConversationResponse(propertySet) {
        var _this = _super.call(this) || this;
        /**
         * Property set used to fetch items in the conversation.
         */
        _this.propertySet = null;
        /**
         * Gets the conversation id.
         *
         * internal set
         */
        _this.ConversationId = null;
        /**
         * Gets the sync state.
         *
         * internal set
         */
        _this.SyncState = null;
        /**
         * Gets the conversation nodes.
         *
         * internal set
         */
        _this.ConversationNodes = null;
        _this.propertySet = propertySet;
        return _this;
    }
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    ConversationResponse.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        this.ConversationId = new ConversationId_1.ConversationId();
        this.ConversationId.LoadFromXmlJsObject(jsObject[XmlElementNames_1.XmlElementNames.ConversationId], service);
        if (jsObject[XmlElementNames_1.XmlElementNames.SyncState]) {
            this.SyncState = jsObject[XmlElementNames_1.XmlElementNames.SyncState];
        }
        this.ConversationNodes = new ConversationNodeCollection_1.ConversationNodeCollection(this.propertySet);
        if (jsObject[XmlElementNames_1.XmlElementNames.ConversationNodes]) {
            this.ConversationNodes.LoadFromXmlJsObject(EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsObject[XmlElementNames_1.XmlElementNames.ConversationNodes], XmlElementNames_1.XmlElementNames.ConversationNode), service);
        }
    };
    return ConversationResponse;
}(ComplexProperty_1.ComplexProperty));
exports.ConversationResponse = ConversationResponse;
