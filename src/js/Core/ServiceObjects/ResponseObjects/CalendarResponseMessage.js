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
var Schemas_1 = require("../Schemas/Schemas");
var CalendarResponseMessageBase_1 = require("./CalendarResponseMessageBase");
/**
 * Represents the base class for accept, tentatively accept and decline response messages.
 *
 * @typeparam   {TMessage}     The type of message that is created when this response message is saved.
 */
var CalendarResponseMessage = /** @class */ (function (_super) {
    __extends(CalendarResponseMessage, _super);
    /**
     * @internal Initializes a new instance of the **CalendarResponseMessage** class.
     *
     * @param   {Item}   referenceItem   The reference item.
     */
    function CalendarResponseMessage(referenceItem) {
        return _super.call(this, referenceItem) || this;
    }
    Object.defineProperty(CalendarResponseMessage.prototype, "Body", {
        /**
         * Gets or sets the body of the response.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.Body);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ItemSchema.Body, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarResponseMessage.prototype, "ToRecipients", {
        /**
         * Gets a list of recipients the response will be sent to.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.EmailMessageSchema.ToRecipients);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarResponseMessage.prototype, "CcRecipients", {
        /**
         * Gets a list of recipients the response will be sent to as Cc.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.EmailMessageSchema.CcRecipients);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarResponseMessage.prototype, "BccRecipients", {
        /**
         * Gets a list of recipients this response will be sent to as Bcc.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.EmailMessageSchema.BccRecipients);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarResponseMessage.prototype, "ItemClass", {
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.ItemClass);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ItemSchema.ItemClass, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarResponseMessage.prototype, "Sensitivity", {
        /**
         * Gets or sets the sensitivity of this response.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.Sensitivity);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.ItemSchema.Sensitivity, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarResponseMessage.prototype, "Attachments", {
        /**
         * Gets a list of attachments to this response.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.Attachments);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarResponseMessage.prototype, "InternetMessageHeaders", {
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.ItemSchema.InternetMessageHeaders);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CalendarResponseMessage.prototype, "Sender", {
        /**
         * Gets or sets the sender of this response.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.EmailMessageSchema.Sender);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.EmailMessageSchema.Sender, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    CalendarResponseMessage.prototype.GetSchema = function () { return Schemas_1.Schemas.CalendarResponseObjectSchema.Instance; };
    return CalendarResponseMessage;
}(CalendarResponseMessageBase_1.CalendarResponseMessageBase));
exports.CalendarResponseMessage = CalendarResponseMessage;
