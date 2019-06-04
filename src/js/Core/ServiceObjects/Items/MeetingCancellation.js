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
var CalendarActionResults_1 = require("../../../Misc/CalendarActionResults");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var PropertySet_1 = require("../../PropertySet");
var RemoveFromCalendar_1 = require("../ResponseObjects/RemoveFromCalendar");
var Schemas_1 = require("../Schemas/Schemas");
var XmlElementNames_1 = require("../../XmlElementNames");
var MeetingMessage_1 = require("./MeetingMessage");
/**
 * Represents a meeting cancellation message. Properties available on meeting messages are defined in the MeetingMessageSchema class.
 */
var MeetingCancellation = /** @class */ (function (_super) {
    __extends(MeetingCancellation, _super);
    function MeetingCancellation(serviceOrParentAttachment) {
        return _super.call(this, serviceOrParentAttachment) || this;
    }
    Object.defineProperty(MeetingCancellation.prototype, "Start", {
        /**
         * Gets the start time of the appointment.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.MeetingCancellationSchema.Start);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingCancellation.prototype, "End", {
        /**
         * Gets the end time of the appointment.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.MeetingCancellationSchema.End);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingCancellation.prototype, "Location", {
        /**
         * Gets the location of this appointment.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.MeetingCancellationSchema.Location);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingCancellation.prototype, "Recurrence", {
        /**
         * Gets the recurrence pattern for this meeting request.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.AppointmentSchema.Recurrence);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MeetingCancellation.prototype, "EnhancedLocation", {
        /**
         * Gets the Enhanced location object.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.MeetingCancellationSchema.EnhancedLocation);
        },
        enumerable: true,
        configurable: true
    });
    MeetingCancellation.Bind = function (service, id, propertySet) {
        if (propertySet === void 0) { propertySet = PropertySet_1.PropertySet.FirstClassProperties; }
        return service.BindToItem(id, propertySet, MeetingCancellation);
    };
    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    MeetingCancellation.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
    };
    /**
     * @internal Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    MeetingCancellation.prototype.GetSchema = function () {
        return Schemas_1.Schemas.MeetingCancellationSchema.Instance;
    };
    /**
     * @internal Gets the element name of item in XML
     *
     * @return  {string} name of elelment
     */
    MeetingCancellation.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.MeetingCancellation;
    };
    /**
     * Removes the meeting associated with the cancellation message from the user's calendar.
     *
     * @return  {Promise<CalendarActionResults>}      A CalendarActionResults object containing the various items that were created or modified as a results of this operation.
     */
    MeetingCancellation.prototype.RemoveMeetingFromCalendar = function () {
        var removeFromCalendar = new RemoveFromCalendar_1.RemoveFromCalendar(this);
        return removeFromCalendar.InternalCreate(null, null).then(function (items) {
            return new CalendarActionResults_1.CalendarActionResults(items);
        });
    };
    return MeetingCancellation;
}(MeetingMessage_1.MeetingMessage));
exports.MeetingCancellation = MeetingCancellation;
