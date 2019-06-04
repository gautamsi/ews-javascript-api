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
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents an EmailUserEntity object.
 */
var EmailUserEntity = /** @class */ (function (_super) {
    __extends(EmailUserEntity, _super);
    /**
     * Initializes a new instance of the **EmailUserEntity** class.
     */
    function EmailUserEntity() {
        var _this = _super.call(this) || this;
        _this.Namespace = XmlNamespace_1.XmlNamespace.Types;
        return _this;
    }
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    EmailUserEntity.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.NlgName:
                    this.Name = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.NlgUserId:
                    this.UserId = jsObject[key];
                    break;
                default:
                    break;
            }
        }
    };
    return EmailUserEntity;
}(ComplexProperty_1.ComplexProperty));
exports.EmailUserEntity = EmailUserEntity;
