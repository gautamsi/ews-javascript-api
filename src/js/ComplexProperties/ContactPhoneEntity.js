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
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents an ContactPhoneEntity object.
 */
var ContactPhoneEntity = /** @class */ (function (_super) {
    __extends(ContactPhoneEntity, _super);
    /**
     * Initializes a new instance of the **ContactPhoneEntity** class.
     */
    function ContactPhoneEntity() {
        var _this = _super.call(this) || this;
        /**
         * Gets the phone entity OriginalPhoneString.
         */
        _this.OriginalPhoneString = null;
        /**
         * Gets the phone entity PhoneString.
         */
        _this.PhoneString = null;
        /**
         * Gets the phone entity Type.
         */
        _this.Type = null;
        return _this;
    }
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    ContactPhoneEntity.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.NlgOriginalPhoneString:
                    this.OriginalPhoneString = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.NlgPhoneString:
                    this.PhoneString = jsObject[key];
                    break;
                case XmlElementNames_1.XmlElementNames.NlgType:
                    this.Type = jsObject[key];
                    break;
                default:
                    break;
            }
        }
    };
    return ContactPhoneEntity;
}(ComplexProperty_1.ComplexProperty));
exports.ContactPhoneEntity = ContactPhoneEntity;
