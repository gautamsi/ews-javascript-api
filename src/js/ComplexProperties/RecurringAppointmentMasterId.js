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
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlAttributeNames_1 = require("../Core/XmlAttributeNames");
var ItemId_1 = require("./ItemId");
var RecurringAppointmentMasterId = /** @class */ (function (_super) {
    __extends(RecurringAppointmentMasterId, _super);
    function RecurringAppointmentMasterId(occurrenceId) {
        return _super.call(this, occurrenceId) || this;
    }
    RecurringAppointmentMasterId.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.RecurringMasterItemId; };
    /**@internal */
    RecurringAppointmentMasterId.prototype.WriteAttributesToXml = function (writer) {
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.OccurrenceId, this.UniqueId);
        writer.WriteAttributeValue(XmlAttributeNames_1.XmlAttributeNames.ChangeKey, this.ChangeKey);
    };
    return RecurringAppointmentMasterId;
}(ItemId_1.ItemId));
exports.RecurringAppointmentMasterId = RecurringAppointmentMasterId;
