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
var EmailPosition_1 = require("../Enumerations/EmailPosition");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
var ComplexProperty_1 = require("./ComplexProperty");
/**
 * Represents an ExtractedEntity object.
 */
var ExtractedEntity = /** @class */ (function (_super) {
    __extends(ExtractedEntity, _super);
    /**
     * Initializes a new instance of the **ExtractedEntity** class.
     */
    function ExtractedEntity() {
        var _this = _super.call(this) || this;
        /**
         * Gets the Position.
         */
        _this.Position = EmailPosition_1.EmailPosition.LatestReply;
        _this.Namespace = XmlNamespace_1.XmlNamespace.Types;
        return _this;
    }
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     */
    ExtractedEntity.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        if (jsObject[XmlElementNames_1.XmlElementNames.NlgEmailPosition]) {
            this.Position = EmailPosition_1.EmailPosition[jsObject[XmlElementNames_1.XmlElementNames.NlgEmailPosition]] || this.Position;
        }
        // for (let key in jsObject) {
        //     switch (key) {
        //         case XmlElementNames.NlgEmailPosition:
        //             this.Position = EmailPosition[<string>jsObject[key]] || this.Position;
        //             break;
        //         default:
        //             break;
        //     }
        // }
    };
    return ExtractedEntity;
}(ComplexProperty_1.ComplexProperty));
exports.ExtractedEntity = ExtractedEntity;
