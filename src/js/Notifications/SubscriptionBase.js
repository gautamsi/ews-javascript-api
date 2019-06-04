"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EwsUtilities_1 = require("../Core/EwsUtilities");
var XmlElementNames_1 = require("../Core/XmlElementNames");
/**
 * Represents the base class for event subscriptions.
 */
var SubscriptionBase = /** @class */ (function () {
    function SubscriptionBase(service, id, watermark) {
        if (id === void 0) { id = null; }
        if (watermark === void 0) { watermark = null; }
        this.service = null;
        this.id = null;
        this.watermark = null;
        EwsUtilities_1.EwsUtilities.ValidateParam(service, "service");
        this.service = service;
        if (arguments.length >= 2) {
            EwsUtilities_1.EwsUtilities.ValidateParam(id, "id");
        }
        this.id = id;
        this.watermark = watermark;
    }
    Object.defineProperty(SubscriptionBase.prototype, "Service", {
        /**
         * Gets the session.
         *
         * @value The session.
         */
        get: function () {
            return this.service;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubscriptionBase.prototype, "Id", {
        /**
         * Gets the Id of the subscription.
         *
         * internal set
         */
        get: function () {
            return this.id;
        },
        set: function (value) {
            this.id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubscriptionBase.prototype, "Watermark", {
        /**
         * Gets the latest watermark of the subscription. Watermark is always null for streaming subscriptions.
         *
         * internal set
         */
        get: function () {
            return this.watermark;
        },
        set: function (value) {
            this.watermark = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SubscriptionBase.prototype, "UsesWatermark", {
        /**
         * Gets whether or not this subscription uses watermarks.
         */
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Loads from XML.
     *
     * @param   {any}                 jsObject               Json Object converted from XML.
     * @param   {ExchangeService}     service                The service.
     */
    SubscriptionBase.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        this.id = jsObject[XmlElementNames_1.XmlElementNames.SubscriptionId];
        if (this.UsesWatermark) {
            this.watermark = jsObject[XmlElementNames_1.XmlElementNames.Watermark];
        }
    };
    return SubscriptionBase;
}());
exports.SubscriptionBase = SubscriptionBase;
