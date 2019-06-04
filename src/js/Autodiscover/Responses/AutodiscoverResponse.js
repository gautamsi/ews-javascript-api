"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AutodiscoverErrorCode_1 = require("../../Enumerations/AutodiscoverErrorCode");
var XmlElementNames_1 = require("../../Core/XmlElementNames");
var AutodiscoverResponse = /** @class */ (function () {
    function AutodiscoverResponse() {
    }
    //private errorCode: AutodiscoverErrorCode;
    //private errorMessage: string;
    //private redirectionUrl: Uri;
    /**@internal */
    AutodiscoverResponse.prototype.LoadFromXml = function (reader, endElementName) {
        switch (reader.LocalName) {
            case XmlElementNames_1.XmlElementNames.ErrorCode:
                var errorstring = reader.ReadElementValue();
                this.ErrorCode = AutodiscoverErrorCode_1.AutodiscoverErrorCode[errorstring];
                break;
            case XmlElementNames_1.XmlElementNames.ErrorMessage:
                this.ErrorMessage = reader.ReadElementValue();
                break;
            default:
                break;
        }
    };
    AutodiscoverResponse.prototype.LoadFromJson = function (obj /*, endElementName: string*/) {
        var errorstring = obj[XmlElementNames_1.XmlElementNames.ErrorCode];
        this.ErrorCode = AutodiscoverErrorCode_1.AutodiscoverErrorCode[errorstring];
        var errmsg = obj[XmlElementNames_1.XmlElementNames.ErrorMessage];
        this.ErrorMessage = errmsg;
    };
    return AutodiscoverResponse;
}());
exports.AutodiscoverResponse = AutodiscoverResponse;
