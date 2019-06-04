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
var ConversationResponse_1 = require("../../ComplexProperties/ConversationResponse");
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * Represents the response to a GetConversationItems operation.
 *
 * @sealed
 */
var GetConversationItemsResponse = /** @class */ (function (_super) {
    __extends(GetConversationItemsResponse, _super);
    /**
     * @internal Initializes a new instance of the **GetConversationItemsResponse** class.
     *
     * @param   {PropertySet}   propertySet   The property set.
     */
    function GetConversationItemsResponse(propertySet) {
        var _this = _super.call(this) || this;
        _this.propertySet = propertySet;
        return _this;
    }
    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    GetConversationItemsResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        this.Conversation = new ConversationResponse_1.ConversationResponse(this.propertySet);
        this.Conversation.LoadFromXmlJsObject(responseObject[XmlElementNames_1.XmlElementNames.Conversation], service);
    };
    return GetConversationItemsResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetConversationItemsResponse = GetConversationItemsResponse;
