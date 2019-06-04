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
var LobbyBypass_1 = require("../Enumerations/LobbyBypass");
var OnlineMeetingAccessLevel_1 = require("../Enumerations/OnlineMeetingAccessLevel");
var Presenters_1 = require("../Enumerations/Presenters");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents Lync online meeting settings.
 */
var OnlineMeetingSettings = /** @class */ (function (_super) {
    __extends(OnlineMeetingSettings, _super);
    function OnlineMeetingSettings(lobbyBypassOrOnlineMeetingSettings, accessLevel, presenters) {
        var _this = _super.call(this) || this;
        _this.lobbyBypass = LobbyBypass_1.LobbyBypass.Disabled;
        _this.accessLevel = OnlineMeetingAccessLevel_1.OnlineMeetingAccessLevel.Locked;
        _this.presenters = Presenters_1.Presenters.Disabled;
        switch (arguments.length) {
            case 1:
                var onlineMeetingSettings = lobbyBypassOrOnlineMeetingSettings;
                EwsUtilities_1.EwsUtilities.ValidateParam(lobbyBypassOrOnlineMeetingSettings, "OnlineMeetingSettings");
                _this.LobbyBypass = onlineMeetingSettings.LobbyBypass;
                _this.AccessLevel = onlineMeetingSettings.AccessLevel;
                _this.Presenters = onlineMeetingSettings.Presenters;
                break;
            case 3:
                _this.lobbyBypass = lobbyBypassOrOnlineMeetingSettings;
                _this.accessLevel = accessLevel;
                _this.presenters = presenters;
                break;
            default:
                break;
        }
        return _this;
    }
    Object.defineProperty(OnlineMeetingSettings.prototype, "LobbyBypass", {
        /**
         * Gets or sets the online meeting setting that describes whether users dialing in by phone have to wait in the lobby.
         */
        get: function () {
            return this.lobbyBypass;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.lobbyBypass; }, setValue: function (fieldValue) { _this.LobbyBypass = fieldValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnlineMeetingSettings.prototype, "AccessLevel", {
        /**
         * Gets or sets the online meeting setting that describes access permission to the meeting.
         */
        get: function () {
            return this.accessLevel;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.accessLevel; }, setValue: function (fieldValue) { _this.accessLevel = fieldValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OnlineMeetingSettings.prototype, "Presenters", {
        /**
         * Gets or sets the online meeting setting that defines the meeting leaders.
         */
        get: function () {
            return this.presenters;
        },
        set: function (value) {
            var _this = this;
            this.SetFieldValue({ getValue: function () { return _this.presenters; }, setValue: function (fieldValue) { _this.presenters = fieldValue; } }, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    OnlineMeetingSettings.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.LobbyBypass:
                    this.lobbyBypass = LobbyBypass_1.LobbyBypass[jsObject[key]];
                    break;
                case XmlElementNames_1.XmlElementNames.AccessLevel:
                    this.accessLevel = OnlineMeetingAccessLevel_1.OnlineMeetingAccessLevel[jsObject[key]];
                    break;
                case XmlElementNames_1.XmlElementNames.Presenters:
                    this.presenters = Presenters_1.Presenters[jsObject[key]];
                    break;
                default:
                    break;
            }
        }
    };
    /**
     * @internal Writes elements to XML.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    OnlineMeetingSettings.prototype.WriteElementsToXml = function (writer) {
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.LobbyBypass, this.LobbyBypass);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.AccessLevel, this.AccessLevel);
        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Presenters, this.Presenters);
    };
    return OnlineMeetingSettings;
}(ComplexProperty_1.ComplexProperty));
exports.OnlineMeetingSettings = OnlineMeetingSettings;
