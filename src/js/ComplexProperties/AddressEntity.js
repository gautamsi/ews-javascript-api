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
 * Represents an AddressEntity object.
 */
var AddressEntity = /** @class */ (function (_super) {
    __extends(AddressEntity, _super);
    /**
     * Initializes a new instance of the **AddressEntity** class.
     */
    function AddressEntity() {
        return _super.call(this) || this;
    }
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    AddressEntity.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        _super.prototype.LoadFromXmlJsObject.call(this, jsObject, service);
        for (var key in jsObject) {
            switch (key) {
                case XmlElementNames_1.XmlElementNames.NlgAddress:
                    this.Address = jsObject[key];
                    break;
                default:
                    break;
            }
        }
    };
    return AddressEntity;
}(ExtractedEntity_1.ExtractedEntity));
exports.AddressEntity = AddressEntity;
