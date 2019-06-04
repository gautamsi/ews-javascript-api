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
var ResponseActions_1 = require("../Enumerations/ResponseActions");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var PropertyDefinition_1 = require("./PropertyDefinition");
var ResponseObjectsPropertyDefinition = /** @class */ (function (_super) {
    __extends(ResponseObjectsPropertyDefinition, _super);
    function ResponseObjectsPropertyDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ResponseObjectsPropertyDefinition.prototype, "IsNullable", {
        /**
         * @internal Gets a value indicating whether this property definition is for a nullable type (ref, int?, bool?...).
         */
        get: function () { return false; },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the response action.
     *
     * @param   {string}   responseActionString   The response action string.
     * @return  {ResponseActions}       ResponseActions
     */
    ResponseObjectsPropertyDefinition.GetResponseAction = function (responseActionString) {
        var value = ResponseActions_1.ResponseActions.None;
        switch (responseActionString) {
            case XmlElementNames_1.XmlElementNames.AcceptItem:
                value = ResponseActions_1.ResponseActions.Accept;
                break;
            case XmlElementNames_1.XmlElementNames.TentativelyAcceptItem:
                value = ResponseActions_1.ResponseActions.TentativelyAccept;
                break;
            case XmlElementNames_1.XmlElementNames.DeclineItem:
                value = ResponseActions_1.ResponseActions.Decline;
                break;
            case XmlElementNames_1.XmlElementNames.ReplyToItem:
                value = ResponseActions_1.ResponseActions.Reply;
                break;
            case XmlElementNames_1.XmlElementNames.ForwardItem:
                value = ResponseActions_1.ResponseActions.Forward;
                break;
            case XmlElementNames_1.XmlElementNames.ReplyAllToItem:
                value = ResponseActions_1.ResponseActions.ReplyAll;
                break;
            case XmlElementNames_1.XmlElementNames.CancelCalendarItem:
                value = ResponseActions_1.ResponseActions.Cancel;
                break;
            case XmlElementNames_1.XmlElementNames.RemoveItem:
                value = ResponseActions_1.ResponseActions.RemoveFromCalendar;
                break;
            case XmlElementNames_1.XmlElementNames.SuppressReadReceipt:
                value = ResponseActions_1.ResponseActions.SuppressReadReceipt;
                break;
            case XmlElementNames_1.XmlElementNames.PostReplyItem:
                value = ResponseActions_1.ResponseActions.PostReply;
                break;
        }
        return value;
    };
    /**
     * @internal Loads the property value from json.
     *
     * @param   {any}               jsObject         The JSON value.  Can be a JsonObject, string, number, bool, array, or null.
     * @param   {ExchangeService}   service       The service.
     * @param   {PropertyBag}       propertyBag   The property bag.
     */
    ResponseObjectsPropertyDefinition.prototype.LoadPropertyValueFromXmlJsObject = function (jsObject, service, propertyBag) {
        var responseActionValue = ResponseActions_1.ResponseActions.None;
        for (var key in jsObject) {
            if (key.indexOf("__") === 0) //skip xmljsobject conversion entries like __type and __prefix
                continue;
            if (jsObject.hasOwnProperty(key)) {
                responseActionValue |= ResponseObjectsPropertyDefinition.GetResponseAction(key);
            }
        }
        propertyBag._setItem(this, responseActionValue);
    };
    /**
     * @internal Writes to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer              The writer.
     * @param   {PropertyBag}           propertyBag         The property bag.
     * @param   {boolean}               isUpdateOperation   Indicates whether the context is an update operation.
     */
    ResponseObjectsPropertyDefinition.prototype.WritePropertyValueToXml = function (writer, propertyBag, isUpdateOperation) { };
    return ResponseObjectsPropertyDefinition;
}(PropertyDefinition_1.PropertyDefinition));
exports.ResponseObjectsPropertyDefinition = ResponseObjectsPropertyDefinition;
