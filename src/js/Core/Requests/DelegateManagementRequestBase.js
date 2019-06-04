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
var EwsUtilities_1 = require("../EwsUtilities");
var XmlElementNames_1 = require("../XmlElementNames");
var XmlNamespace_1 = require("../../Enumerations/XmlNamespace");
var SimpleServiceRequestBase_1 = require("./SimpleServiceRequestBase");
/**
 * @internal Represents an abstract delegate management request.
 *
 * @typeparam   {TResponse}     The type of the response.
 */
var DelegateManagementRequestBase = /** @class */ (function (_super) {
    __extends(DelegateManagementRequestBase, _super);
    /**
     * @internal Initializes a new instance of the **DelegateManagementRequestBase<TResponse>** class.
     *
     * @param   {ExchangeService}   service   The service.
     */
    function DelegateManagementRequestBase(service) {
        var _this = _super.call(this, service) || this;
        _this.mailbox = null;
        return _this;
    }
    Object.defineProperty(DelegateManagementRequestBase.prototype, "Mailbox", {
        /**
         *  Gets or sets the mailbox.
         *
         * @value    The mailbox.
         */
        get: function () {
            return this.mailbox;
        },
        set: function (value) {
            this.mailbox = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Executes this request.
     *
     * @return  {Promise<TResponse>}      Service response  :Promise.
     */
    DelegateManagementRequestBase.prototype.Execute = function () {
        return this.InternalExecute().then(function (serviceResponse) {
            serviceResponse.ThrowIfNecessary();
            return serviceResponse;
        });
    };
    /**
     * @internal Parses the response.
     *
     * @param   {any}   jsonBody   The js object response body.
     * @return  {any}              Response object.
     */
    DelegateManagementRequestBase.prototype.ParseResponse = function (jsonBody) {
        var response = this.CreateResponse();
        response.LoadFromXmlJsObject(jsonBody, this.Service);
        return response;
    };
    /**
     * @internal Validate request.
     */
    DelegateManagementRequestBase.prototype.Validate = function () {
        _super.prototype.Validate.call(this);
        EwsUtilities_1.EwsUtilities.ValidateParam(this.Mailbox, "Mailbox");
    };
    /**
     * @internal Writes the elements to XML writer.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    DelegateManagementRequestBase.prototype.WriteElementsToXml = function (writer) {
        this.Mailbox.WriteToXml(writer, XmlElementNames_1.XmlElementNames.Mailbox, XmlNamespace_1.XmlNamespace.Messages);
    };
    return DelegateManagementRequestBase;
}(SimpleServiceRequestBase_1.SimpleServiceRequestBase));
exports.DelegateManagementRequestBase = DelegateManagementRequestBase;
