"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid = require("uuid");
var EwsLogging_1 = require("./Core/EwsLogging");
var ExtensionMethods_1 = require("./ExtensionMethods");
/** Guid proxy class */
var Guid = /** @class */ (function () {
    function Guid(str) {
        this.guid = '00000000-0000-0000-0000-000000000000';
        var regxStrict = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        var regxRelax = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        if (arguments.length > 0) {
            if (ExtensionMethods_1.StringHelper.IsNullOrEmpty(str) || str === null) {
                throw new TypeError("Guid.ctor - invalid input");
            }
            //str = str.replace("-", "").replace("{", "").replace("}", "").toLowerCase();
            str = str.replace("{", "").replace("}", "").toLowerCase();
            if (regxStrict.test(str)) {
                this.guid = str;
            }
            else {
                if (!Guid.ParseStrict && regxRelax.test(str)) {
                    EwsLogging_1.EwsLogging.DebugLog("info: Guid.ctor - guid is in generic format. if you want to error on non uuid v4 format, set `Guid.ParseStrict = true`");
                    this.guid = str;
                }
                else {
                    throw new TypeError("Guid.ctor - invalid input, input not of type uuid v4");
                }
            }
        }
    }
    Guid.prototype.ToString = function () {
        return this.guid;
    };
    Guid.prototype.toString = function () {
        return this.guid;
    };
    Guid.NewGuid = function () {
        return new Guid(uuid.v4());
    };
    Guid.Parse = function (str) {
        return new Guid(str);
    };
    Guid.TryParse = function (str, _parsed_output) {
        if (_parsed_output === void 0) { _parsed_output = { guid: null }; }
        try {
            _parsed_output.guid = new Guid(str);
            return true;
        }
        catch (error) {
            return false;
        }
    };
    Guid.ParseStrict = false;
    Guid.Empty = new Guid();
    return Guid;
}());
exports.Guid = Guid;
