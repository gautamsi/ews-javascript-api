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
var SendPrompt_1 = require("../Enumerations/SendPrompt");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents voting option information.
 * @sealed
 */
var VotingOptionData = /** @class */ (function (_super) {
    __extends(VotingOptionData, _super);
    /**
     * @internal Initializes a new instance of the **VotingOptionData** class.
     */
    function VotingOptionData() {
        var _this = _super.call(this) || this;
        _this.displayName = null;
        _this.sendPrompt = SendPrompt_1.SendPrompt.None;
        return _this;
    }
    Object.defineProperty(VotingOptionData.prototype, "DisplayName", {
        /**
         * Gets the display name for the voting option.
         */
        get: function () {
            return this.displayName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VotingOptionData.prototype, "SendPrompt", {
        /**
         * Gets the send prompt.
         */
        get: function () {
            return this.sendPrompt;
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
    VotingOptionData.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.VotingOptionDisplayName:
                    this.displayName = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.SendPrompt:
                    this.sendPrompt = SendPrompt_1.SendPrompt[jsObject[key]];
                    break;
                default:
                    break;
            }
        }
    };
    return VotingOptionData;
}(ComplexProperty_1.ComplexProperty));
exports.VotingOptionData = VotingOptionData;
