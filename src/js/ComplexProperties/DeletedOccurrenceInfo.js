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
 * Encapsulates information on the deleted occurrence of a recurring appointment.
 */
var DeletedOccurrenceInfo = /** @class */ (function (_super) {
    __extends(DeletedOccurrenceInfo, _super);
    /**
     * @internal Initializes a new instance of the **DeletedOccurrenceInfo** class.
     */
    function DeletedOccurrenceInfo() {
        var _this = _super.call(this) || this;
        /**
         * The original start date and time of the deleted occurrence.
         *
         * /remarks/    The EWS schema contains a Start property for deleted occurrences but it's really the original start date and time of the occurrence.
         */
        _this.originalStart = null;
        return _this;
    }
    Object.defineProperty(DeletedOccurrenceInfo.prototype, "OriginalStart", {
        /**
         * Gets the original start date and time of the deleted occurrence.
         */
        get: function () {
            return this.originalStart;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.
     */
    DeletedOccurrenceInfo.prototype.LoadFromXmlJsObject = function (jsObject, service) {
        if (jsObject[XmlElementNames_1.XmlElementNames.Start]) {
            this.originalStart = service.ConvertUniversalDateTimeStringToLocalDateTime(jsObject[XmlElementNames_1.XmlElementNames.Start]);
        }
    };
    return DeletedOccurrenceInfo;
}(ComplexProperty_1.ComplexProperty));
exports.DeletedOccurrenceInfo = DeletedOccurrenceInfo;
