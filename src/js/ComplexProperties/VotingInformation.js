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
var EwsServiceJsonReader_1 = require("../Core/EwsServiceJsonReader");
var VotingOptionData_1 = require("./VotingOptionData");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents voting information.
 * @sealed
 */
var VotingInformation = /** @class */ (function (_super) {
    __extends(VotingInformation, _super);
    /**
     * @internal Initializes a new instance of the **VotingInformation** class.
     */
    function VotingInformation() {
        var _this = _super.call(this) || this;
        _this.userOptions = [];
        _this.votingResponse = null;
        return _this;
    }
    Object.defineProperty(VotingInformation.prototype, "UserOptions", {
        /**
         * Gets the list of user options.
         */
        get: function () {
            return this.userOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VotingInformation.prototype, "VotingResponse", {
        /**
         * Gets the voting response.
         */
        get: function () {
            return this.votingResponse;
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
    VotingInformation.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        if (jsObject[XmlElementNames_1.XmlElementNames.UserOptions]) {
            var votingOptionObjects = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsObject, XmlElementNames_1.XmlElementNames.UserOptions);
            for (var _i = 0, votingOptionObjects_1 = votingOptionObjects; _i < votingOptionObjects_1.length; _i++) {
                var votingOptionObject = votingOptionObjects_1[_i];
                var option = new VotingOptionData_1.VotingOptionData();
                option.LoadFromXmlJsObject(votingOptionObject, service);
                this.userOptions.push(option);
            }
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.VotingResponse]) {
            this.votingResponse = jsObject[XmlElementNames_1.XmlElementNames.VotingResponse];
        }
    };
    return VotingInformation;
}(ComplexProperty_1.ComplexProperty));
exports.VotingInformation = VotingInformation;
