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
var ExtractedEntity_1 = require("./ExtractedEntity");
/**
 * Represents an EmailAddressEntity object.
 */
var EmailAddressEntity = /** @class */ (function (_super) {
    __extends(EmailAddressEntity, _super);
    /**
     * @internal Initializes a new instance of the **EmailAddressEntity** class.
     */
    function EmailAddressEntity() {
        return _super.call(this) || this;
    }
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    EmailAddressEntity.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        _super.prototype.LoadFromXmlJsObject.call(this, jsObject, service);
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.NlgEmailAddress:
                    this.EmailAddress = jsObject[key];
                    break;
                default:
                    break;
            }
        }
    };
    return EmailAddressEntity;
}(ExtractedEntity_1.ExtractedEntity));
exports.EmailAddressEntity = EmailAddressEntity;
