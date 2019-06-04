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
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var PropertySet_1 = require("../../PropertySet");
var Schemas_1 = require("../Schemas/Schemas");
var XmlElementNames_1 = require("../../XmlElementNames");
var MeetingMessage_1 = require("./MeetingMessage");
/**
 * Represents a response to a meeting request. Properties available on meeting messages are defined in the MeetingMessageSchema class.
 */
var MeetingResponse = /** @class */ (function (_super) {
    __extends(MeetingResponse, _super);
    function MeetingResponse(parentAttachmentOrService) {
        return _super.call(this, parentAttachmentOrService) || this;
    }
    Object.defineProperty(MeetingResponse.prototype, "Start", {
        /**
         * Gets the start time of the appointment.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.MeetingResponseSchema.Start);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingResponse.prototype, "End", {
        /**
         * Gets the end time of the appointment.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.MeetingResponseSchema.End);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingResponse.prototype, "Location", {
        /**
         * Gets the location of this appointment.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.MeetingResponseSchema.Location);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingResponse.prototype, "Recurrence", {
        /**
         * Gets the recurrence pattern for this meeting request.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.Recurrence);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingResponse.prototype, "ProposedStart", {
        /**
         * Gets the proposed start time of the appointment.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.MeetingResponseSchema.ProposedStart);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingResponse.prototype, "ProposedEnd", {
        /**
         * Gets the proposed end time of the appointment.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.MeetingResponseSchema.ProposedEnd);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingResponse.prototype, "EnhancedLocation", {
        /**
         * Gets the Enhanced location object.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.MeetingResponseSchema.EnhancedLocation);
        },
        enumerable: true,
        configurable: true
    });
    MeetingResponse.Bind = function (service, id, propertySet) {
        if (propertySet === void 0) { propertySet = PropertySet_1.PropertySet.FirstClassProperties; }
        return service.BindToItem(id, propertySet, MeetingResponse);
    };
    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    MeetingResponse.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
    };
    /**
     * @internal Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    MeetingResponse.prototype.GetSchema = function () {
        return Schemas_1.Schemas.MeetingResponseSchema.Instance;
    };
    /**
     * @internal Gets the element name of item in XML
     *
     * @return  {string} name of elelment
     */
    MeetingResponse.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.MeetingResponse; };
    return MeetingResponse;
}(MeetingMessage_1.MeetingMessage));
exports.MeetingResponse = MeetingResponse;
