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
var Strings_1 = require("../Strings");
var ArgumentException_1 = require("../Exceptions/ArgumentException");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var ItemId_1 = require("./ItemId");
var AppointmentOccurrenceId = /** @class */ (function (_super) {
    __extends(AppointmentOccurrenceId, _super);
    function AppointmentOccurrenceId(recurringMasterUniqueId, occurrenceIndex) {
        var _this = _super.call(this, recurringMasterUniqueId) || this;
        _this.OccurrenceIndex = occurrenceIndex;
        return _this;
    }
    Object.defineProperty(AppointmentOccurrenceId.prototype, "OccurrenceIndex", {
        get: function () {
            return this.occurrenceIndex;
        },
        set: function (value) {
            if (value < 1) {
                throw new ArgumentException_1.ArgumentException(Strings_1.Strings.OccurrenceIndexMustBeGreaterThanZero);
            }
            this.occurrenceIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    AppointmentOccurrenceId.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.OccurrenceItemId; };
    AppointmentOccurrenceId.prototype.InternalToJson = function (service) { throw new Error("AppointmentOccurrenceId.ts - InternalToJson : Not implemented."); };
    /**@internal */
    AppointmentOccurrenceId.prototype.WriteAttributesToXml = function (writer) {
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.RecurringMasterId, this.UniqueId);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.InstanceIndex, this.OccurrenceIndex);
    };
    return AppointmentOccurrenceId;
}(ItemId_1.ItemId));
exports.AppointmentOccurrenceId = AppointmentOccurrenceId;
