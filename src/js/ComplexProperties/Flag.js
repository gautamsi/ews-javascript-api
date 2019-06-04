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
var EwsUtilities_1 = require("../Core/EwsUtilities");
var ItemFlagStatus_1 = require("../Enumerations/ItemFlagStatus");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Encapsulates information on the occurrence of a recurring appointment.
 */
var Flag = /** @class */ (function (_super) {
    __extends(Flag, _super);
    /**
     * Initializes a new instance of the **Flag** class.
     */
    function Flag() {
        var _this = _super.call(this) || this;
        _this.flagStatus = ItemFlagStatus_1.ItemFlagStatus.NotFlagged;
        _this.startDate = null;
        _this.dueDate = null;
        _this.completeDate = null;
        return _this;
    }
    Object.defineProperty(Flag.prototype, "FlagStatus", {
        /**
         * Gets or sets the flag status.
         */
        get: function () {
            return this.flagStatus;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.flagStatus; }, setValue: function (updateValue) { _this.flagStatus = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Flag.prototype, "StartDate", {
        /**
         * Gets the start date.
         */
        get: function () {
            return this.startDate;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.startDate; }, setValue: function (updateValue) { _this.startDate = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Flag.prototype, "DueDate", {
        /**
         * Gets the due date.
         */
        get: function () {
            return this.dueDate;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.dueDate; }, setValue: function (updateValue) { _this.dueDate = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Flag.prototype, "CompleteDate", {
        /**
         * Gets the complete date.
         */
        get: function () {
            return this.completeDate;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.completeDate; }, setValue: function (updateValue) { _this.completeDate = updateValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    Flag.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.FlagStatus:
                    this.flagStatus = ItemFlagStatus_1.ItemFlagStatus[jsObject[key]];
                    break;
                case XmlElementNames_1.XmlElementNames.StartDate:
                    this.startDate = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.DueDate:
                    this.dueDate = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[key]);
                    break;
                case XmlElementNames_1.XmlElementNames.CompleteDate:
                    this.completeDate = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[key]);
                    break;
                default:
                    break;
            }
        }
    };
    /**
     * @internal Validates this instance.
     */
    Flag.prototype.Validate = function () {
        EwsUtilities_1.EwsUtilities.ValidateParam(this.flagStatus, "FlagStatus");
    };
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    Flag.prototype.WriteElementsToXml = function (writer) {
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.FlagStatus, ItemFlagStatus_1.ItemFlagStatus[this.FlagStatus]);
        if (this.FlagStatus == ItemFlagStatus_1.ItemFlagStatus.Flagged && this.StartDate != null && this.DueDate != null) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.StartDate, this.StartDate);
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.DueDate, this.DueDate);
        }
        else if (this.FlagStatus == ItemFlagStatus_1.ItemFlagStatus.Complete && this.CompleteDate != null) {
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.CompleteDate, this.CompleteDate);
        }
    };
    return Flag;
}(ComplexProperty_1.ComplexProperty));
exports.Flag = Flag;
