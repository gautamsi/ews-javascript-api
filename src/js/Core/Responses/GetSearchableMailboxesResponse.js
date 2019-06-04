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
var EwsServiceJsonReader_1 = require("../EwsServiceJsonReader");
var FailedSearchMailbox_1 = require("../../MailboxSearch/FailedSearchMailbox");
var SearchableMailbox_1 = require("../../MailboxSearch/SearchableMailbox");
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * Represents the GetSearchableMailboxes response.
 *
 * @sealed
 */
var GetSearchableMailboxesResponse = /** @class */ (function (_super) {
    __extends(GetSearchableMailboxesResponse, _super);
    /**
     * @internal Initializes a new instance of the **GetSearchableMailboxesResponse** class.
     */
    function GetSearchableMailboxesResponse() {
        var _this = _super.call(this) || this;
        _this.searchableMailboxes = [];
        /**
         * Failed mailboxes
         */
        _this.FailedMailboxes = null;
        return _this;
    }
    Object.defineProperty(GetSearchableMailboxesResponse.prototype, "SearchableMailboxes", {
        /**
         * Searchable mailboxes result
         */
        get: function () {
            return this.searchableMailboxes;
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
    GetSearchableMailboxesResponse.prototype.ReadElementsFromXmlJsObject = function (jsObject, service) {
        this.searchableMailboxes.splice(0);
        //super.ReadElementsFromXmlJsObject(jsObject, service);
        if (jsObject[XmlElementNames_1.XmlElementNames.SearchableMailboxes]) {
            for (var _i = 0, _a = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsObject[XmlElementNames_1.XmlElementNames.SearchableMailboxes], XmlElementNames_1.XmlElementNames.SearchableMailbox); _i < _a.length; _i++) {
                var searchableMailboxObject = _a[_i];
                this.searchableMailboxes.push(SearchableMailbox_1.SearchableMailbox.LoadFromXmlJsObject(searchableMailboxObject, service));
            }
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.FailedMailboxes]) {
            this.FailedMailboxes = FailedSearchMailbox_1.FailedSearchMailbox.LoadFromXmlJsObject(jsObject[XmlElementNames_1.XmlElementNames.FailedMailboxes], service);
        }
    };
    return GetSearchableMailboxesResponse;
}(ServiceResponse_1.ServiceResponse));
exports.GetSearchableMailboxesResponse = GetSearchableMailboxesResponse;
