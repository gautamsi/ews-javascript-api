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
var EmailAddress_1 = require("../../ComplexProperties/EmailAddress");
var EwsServiceJsonReader_1 = require("../EwsServiceJsonReader");
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * @internal Represents the response to a GetRooms operation.
 *
 * @sealed
 */
var GetRoomsResponse = /** @class */ (function (_super) {
    __extends(GetRoomsResponse, _super);
    /**
     * @internal Initializes a new instance of the **GetRoomsResponse** class.
     */
    function GetRoomsResponse() {
        var _this = _super.call(this) || this;
        _this.rooms = [];
        return _this;
    }
    Object.defineProperty(GetRoomsResponse.prototype, "Rooms", {
        /**
         * Gets collection for all rooms returned
         */
        get: function () {
            return this.rooms;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Reads response elements from Xml JsObject.
     *
     * @param   {any}               jsObject   The response object.
     * @param   {ExchangeService}   service    The service.
     */
    GetRoomsResponse.prototype.ReadElementsFromXmlJsObject = function (responseObject, service) {
        this.rooms.splice(0);
        var responses = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(responseObject[XmlElementNames_1.XmlElementNames.Rooms], XmlElementNames_1.XmlElementNames.Room);
        for (var _i = 0, responses_1 = responses; _i < responses_1.length; _i++) {
            var response = responses_1[_i];
            var emailAddress = new EmailAddress_1.EmailAddress();
            emailAddress.LoadFromXmlJsObject(response[XmlElementNames_1.XmlElementNames.RoomId], service);
            this.rooms.push(emailAddress);
        }
    };
    return GetRoomsResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetRoomsResponse = GetRoomsResponse;
