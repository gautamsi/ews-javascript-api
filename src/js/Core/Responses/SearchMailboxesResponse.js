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
var SearchMailboxesResult_1 = require("../../MailboxSearch/SearchMailboxesResult");
var XmlElementNames_1 = require("../XmlElementNames");
var ServiceResponse_1 = require("./ServiceResponse");
/**
 * Represents the SearchMailboxes response.
 *
 * @sealed
 */
var SearchMailboxesResponse = /** @class */ (function (_super) {
    __extends(SearchMailboxesResponse, _super);
    /**
     * @internal Initializes a new instance of the **SearchMailboxesResponse** class.
     */
    function SearchMailboxesResponse() {
        var _this = _super.call(this) || this;
        _this.searchResult = null;
        return _this;
    }
    Object.defineProperty(SearchMailboxesResponse.prototype, "SearchResult", {
        /**
         * Search mailboxes result
         */
        get: function () {
            return this.searchResult;
        },
        /**@internal set*/
        set: function (value) {
            this.searchResult = value;
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
    SearchMailboxesResponse.prototype.ReadElementsFromXmlJsObject = function (jsObject, service) {
        //super.ReadElementsFromXmlJsObject(jsObject, service);
        if (jsObject[XmlElementNames_1.XmlElementNames.SearchMailboxesResult]) {
            this.searchResult = SearchMailboxesResult_1.SearchMailboxesResult.LoadFromXmlJsObject(jsObject[XmlElementNames_1.XmlElementNames.SearchMailboxesResult], service);
        }
    };
    return SearchMailboxesResponse;
}(ServiceResponse_1.ServiceResponse));
exports.SearchMailboxesResponse = SearchMailboxesResponse;
