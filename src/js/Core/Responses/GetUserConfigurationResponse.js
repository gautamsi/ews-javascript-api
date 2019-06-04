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
var EwsLogging_1 = require("../EwsLogging");
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * @internal Represents a response to a GetUserConfiguration request.
 *
 * @sealed
 */
var GetUserConfigurationResponse = /** @class */ (function (_super) {
    __extends(GetUserConfigurationResponse, _super);
    /**
     * @internal Initializes a new instance of the **GetUserConfigurationResponse** class.
     *
     * @param   {UserConfiguration}   userConfiguration   The userConfiguration.
     */
    function GetUserConfigurationResponse(userConfiguration) {
        var _this = _super.call(this) || this;
        _this.userConfiguration = null;
        EwsLogging_1.EwsLogging.Assert(userConfiguration !== null, "GetUserConfigurationResponse.ctor", "userConfiguration is null");
        _this.userConfiguration = userConfiguration;
        return _this;
    }
    Object.defineProperty(GetUserConfigurationResponse.prototype, "UserConfiguration", {
        /**
         * Gets the user configuration that was created.
         */
        get: function () {
            return this.userConfiguration;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Reads response elements from XML parsed to JS Object.
     *
     * @param   {any}               responseObject   The response object.
     * @param   {ExchangeService}   service          The service.
     */
    GetUserConfigurationResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        this.UserConfiguration.LoadFromXmlJsObject(responseObject[XmlElementNames_1.XmlElementNames.UserConfiguration], service);
    };
    return GetUserConfigurationResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetUserConfigurationResponse = GetUserConfigurationResponse;
