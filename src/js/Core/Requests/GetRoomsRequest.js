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
var ExchangeVersion_1 = require("../../Enumerations/ExchangeVersion");
var GetRoomsResponse_1 = require("../Responses/GetRoomsResponse");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var SimpleServiceRequestBase_1 = require("./SimpleServiceRequestBase");
/**
 * @internal Represents a GetRooms request.
 *
 * @sealed
 */
var GetRoomsRequest = /** @class */ (function (_super) {
    __extends(GetRoomsRequest, _super);
    /**
     * @internal Initializes a new instance of the **GetRoomsRequest** class.
     *
     * @param   {service}   service   The service.
     */
    function GetRoomsRequest(service) {
        var _this = _super.call(this, service) || this;
        _this.roomList = null;
        return _this;
    }
    Object.defineProperty(GetRoomsRequest.prototype, "RoomList", {
        /**
         * @internal Gets or sets the room list to retrieve rooms from.
         */
        get: function () {
            return this.roomList;
        },
        set: function (value) {
            this.roomList = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Executes this request.
     *
     * @return  {Promise<GetRoomsResponse>}      Service response  :Promise.
     */
    GetRoomsRequest.prototype.Execute = function () {
        return this.InternalExecute().then(function (serviceResponse) {
            serviceResponse.ThrowIfNecessary();
            return serviceResponse;
        });
    };
    /**
     * @internal Gets the request version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this request is supported.
     */
    GetRoomsRequest.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2010;
    };
    /**
     * @internal Gets the name of the response XML element.
     *
     * @return  {string}      XML element name.
     */
    GetRoomsRequest.prototype.GetResponseXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetRoomsResponse;
    };
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetRoomsRequest.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.GetRoomsRequest;
    };
    /**
     * @internal Parses the response.
     *
     * @param   {any}   jsonBody   The js object response body.
     * @return  {any}              Response object.
     */
    GetRoomsRequest.prototype.ParseResponse = function (jsonBody) {
        var response = new GetRoomsResponse_1.GetRoomsResponse();
        response.LoadFromXmlJsObject(jsonBody, this.Service);
        return response;
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    GetRoomsRequest.prototype.WriteElementsToXml = function (writer) {
        //this.RoomList.WriteToXml(writer, XmlNamespace.Messages, XmlElementNames.RoomList);
        this.RoomList.WriteToXml(writer, XmlElementNames_1.XmlElementNames.RoomList, XmlNamespace_1.XmlNamespace.Messages); //info: temp workaround github #52 
    };
    return GetRoomsRequest;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.GetRoomsRequest = GetRoomsRequest;
