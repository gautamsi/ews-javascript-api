"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArgumentException_1 = require("../../Exceptions/ArgumentException");
var EwsLogging_1 = require("../EwsLogging");
var ServiceResult_1 = require("../../Enumerations/ServiceResult");
var Strings_1 = require("../../Strings");
/**
 * Represents a strogly typed list of service responses.
 * @sealed
 * @typeparam   {TResponse}     The type of response stored in the list.
 */
var ServiceResponseCollection = /** @class */ (function () {
    /**
     * @internal Initializes a new instance of the **ServiceResponseCollection<TResponse>** class.
     */
    function ServiceResponseCollection() {
        this.responses = [];
        this.overallResult = ServiceResult_1.ServiceResult.Success;
    }
    Object.defineProperty(ServiceResponseCollection.prototype, "Count", {
        /**
         * Gets the total number of responses in the list.
         */
        get: function () {
            return this.responses.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceResponseCollection.prototype, "Responses", {
        get: function () { return this.responses; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServiceResponseCollection.prototype, "OverallResult", {
        /**
         * Gets a value indicating the overall result of the request that generated this response collection.
         * If all of the responses have their Result property set to Success, OverallResult returns Success.
         * If at least one response has its Result property set to Warning and all other responses have their Result property set to Success, OverallResult returns Warning.
         * If at least one response has a its Result set to Error, OverallResult returns Error.
         */
        get: function () { return this.overallResult; },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Adds specified response.
     *
     * @param   {TResponse}   response   The response.
     */
    ServiceResponseCollection.prototype.Add = function (response) {
        EwsLogging_1.EwsLogging.Assert(response != null, "EwsResponseList.Add", "response is null");
        if (response.Result > this.overallResult) {
            this.overallResult = response.Result;
        }
        this.responses.push(response);
    };
    /**
     * Gets an enumerator that iterates through the elements of the collection.
     *
     * @return  {TResponse[]}      An IEnumerator for the collection.
     */
    ServiceResponseCollection.prototype.GetEnumerator = function () {
        return this.responses;
    };
    /**
     * Gets the response at the specified index.
     *
     * @param   {number}        index   The zero-based index of the response to get.
     * @return  {TResponse}     The response at the specified index.
     */
    ServiceResponseCollection.prototype.__thisIndexer = function (index) {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentException_1.ArgumentOutOfRangeException("index", Strings_1.Strings.IndexIsOutOfRange);
        }
        return this.responses[index];
    };
    return ServiceResponseCollection;
}());
exports.ServiceResponseCollection = ServiceResponseCollection;
