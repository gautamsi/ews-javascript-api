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
var ArgumentException_1 = require("../../Exceptions/ArgumentException");
var EwsUtilities_1 = require("../../Core/EwsUtilities");
var OofExternalAudience_1 = require("../../Enumerations/OofExternalAudience");
var OofReply_1 = require("../../Misc/Availability/OofReply");
var OofState_1 = require("../../Enumerations/OofState");
var Strings_1 = require("../../Strings");
var TimeWindow_1 = require("../../Misc/Availability/TimeWindow");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("../ComplexProperty");
/**
 * Represents a user's Out of Office (OOF) settings.
 */
var OofSettings = /** @class */ (function (_super) {
    __extends(OofSettings, _super);
    /**
     * Initializes a new instance of OofSettings.
     */
    function OofSettings() {
        var _this = _super.call(this) || this;
        _this.state = 0;
        _this.externalAudience = 0;
        _this.allowExternalOof = 0;
        _this.duration = null;
        _this.internalReply = null;
        _this.externalReply = null;
        return _this;
    }
    Object.defineProperty(OofSettings.prototype, "State", {
        /**
         * Gets or sets the user's OOF state.
         *
         * @value The user's OOF state.
         */
        get: function () {
            return this.state;
        },
        set: function (value) {
            this.state = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OofSettings.prototype, "ExternalAudience", {
        /**
         * Gets or sets a value indicating who should receive external OOF messages.
         */
        get: function () {
            return this.externalAudience;
        },
        set: function (value) {
            this.externalAudience = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OofSettings.prototype, "Duration", {
        /**
         * Gets or sets the duration of the OOF status when State is set to OofState.Scheduled.
         */
        get: function () {
            return this.duration;
        },
        set: function (value) {
            this.duration = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OofSettings.prototype, "InternalReply", {
        /**
         * Gets or sets the OOF response sent other users in the user's domain or trusted domain.
         */
        get: function () {
            return this.internalReply;
        },
        set: function (value) {
            this.internalReply = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OofSettings.prototype, "ExternalReply", {
        /**
         * Gets or sets the OOF response sent to addresses outside the user's domain or trusted domain.
         */
        get: function () {
            return this.externalReply;
        },
        set: function (value) {
            this.externalReply = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OofSettings.prototype, "AllowExternalOof", {
        /**
         * Gets a value indicating the authorized external OOF notifications.
         */
        get: function () {
            return this.allowExternalOof;
        },
        set: function (value) {
            this.allowExternalOof = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Loads from xmlJsObject.
     *
     * @param   {any}               jsObject   The json property.
     * @param   {ExchangeService}   service        [description]
     */
    OofSettings.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.OofState:
                    this.state = OofState_1.OofState[jsObject[key]];
                    break;
                case XmlElementNames_1.XmlElementNames.ExternalAudience:
                    this.externalAudience = OofExternalAudience_1.OofExternalAudience[jsObject[key]];
                    break;
                case XmlElementNames_1.XmlElementNames.Duration:
                    this.duration = new TimeWindow_1.TimeWindow();
                    this.duration.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.InternalReply:
                    this.internalReply = new OofReply_1.OofReply();
                    this.internalReply.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames_1.XmlElementNames.ExternalReply:
                    this.externalReply = new OofReply_1.OofReply();
                    this.externalReply.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                default:
                    break;
            }
        }
    };
    /**
     * Serializes an OofReply. Emits an empty OofReply in case the one passed in is null.
     *
     * @param   {OofReply}              oofReply         The oof reply.
     * @param   {EwsServiceXmlWriter}   writer           The writer.
     * @param   {string}                xmlElementName   Name of the XML element.
     */
    OofSettings.prototype.SerializeOofReply = function (oofReply, writer, xmlElementName) {
        if (oofReply != null) {
            oofReply.WriteToXml(writer, xmlElementName);
        }
        else {
            OofReply_1.OofReply.WriteEmptyReplyToXml(writer, xmlElementName);
        }
    };
    /**
     * Validates this instance.
     */
    OofSettings.prototype.Validate = function () {
        if (this.State == OofState_1.OofState.Scheduled) {
            if (this.Duration == null) {
                throw new ArgumentException_1.ArgumentException(Strings_1.Strings.DurationMustBeSpecifiedWhenScheduled);
            }
            EwsUtilities_1.EwsUtilities.ValidateParam(this.Duration, "Duration");
        }
    };
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    OofSettings.prototype.WriteElementsToXml = function (writer) {
        _super.prototype.WriteElementsToXml.call(this, writer);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.OofState, OofState_1.OofState[this.State]);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.ExternalAudience, OofExternalAudience_1.OofExternalAudience[this.ExternalAudience]);
        if (this.Duration != null && this.State == OofState_1.OofState.Scheduled) {
            this.Duration.WriteToXml(writer, XmlElementNames_1.XmlElementNames.Duration);
        }
        this.SerializeOofReply(this.InternalReply, writer, XmlElementNames_1.XmlElementNames.InternalReply);
        this.SerializeOofReply(this.ExternalReply, writer, XmlElementNames_1.XmlElementNames.ExternalReply);
    };
    return OofSettings;
}(ComplexProperty_1.ComplexProperty));
exports.OofSettings = OofSettings;
