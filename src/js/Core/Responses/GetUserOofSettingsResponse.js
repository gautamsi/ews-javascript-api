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
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * @internal Represents response to GetUserOofSettings request.
 */
var GetUserOofSettingsResponse = /** @class */ (function (_super) {
    __extends(GetUserOofSettingsResponse, _super);
    /**
     * @internal Initializes a new instance of the **GetUserOofSettingsResponse** class.
     */
    function GetUserOofSettingsResponse() {
        var _this = _super.call(this) || this;
        _this.oofSettings = null;
        return _this;
    }
    Object.defineProperty(GetUserOofSettingsResponse.prototype, "OofSettings", {
        /**
         * Gets or sets the OOF settings.
         *
         * @value The oof settings.
         */
        get: function () {
            return this.oofSettings;
        },
        set: function (value) {
            this.oofSettings = value;
        },
        enumerable: true,
        configurable: true
    });
    return GetUserOofSettingsResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetUserOofSettingsResponse = GetUserOofSettingsResponse;
