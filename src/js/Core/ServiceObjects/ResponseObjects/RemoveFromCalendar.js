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
var EwsLogging_1 = require("../../EwsLogging");
var ExchangeVersion_1 = require("../../../Enumerations/ExchangeVersion");
var NotSupportedException_1 = require("../../../Exceptions/NotSupportedException");
var Schemas_1 = require("../Schemas/Schemas");
var XmlElementNames_1 = require("../../XmlElementNames");
var ServiceObject_1 = require("../ServiceObject");
/**
 * @internal Represents a response object created to remove a calendar item from a meeting cancellation.
 *
 * @sealed
 */
var RemoveFromCalendar = /** @class */ (function (_super) {
    __extends(RemoveFromCalendar, _super);
    /**
     * Initializes a new instance of the **RemoveFromCalendar** class.
     *
     * @param   {Item}   referenceItem   The reference item.
     */
    function RemoveFromCalendar(referenceItem) {
        var _this = _super.call(this, referenceItem.Service) || this;
        EwsLogging_1.EwsLogging.Assert(referenceItem != null, "RemoveFromCalendar.ctor", "referenceItem is null");
        referenceItem.ThrowIfThisIsNew();
        _this.referenceItem = referenceItem;
        return _this;
    }
    /**
     * @internal Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    RemoveFromCalendar.prototype.GetMinimumRequiredServerVersion = function () {
        return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1;
    };
    /**
     * @internal Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    RemoveFromCalendar.prototype.GetSchema = function () {
        return Schemas_1.Schemas.ResponseObjectSchema.Instance;
    };
    /**
     * @internal Gets the element name of item in XML
     *
     * @return  {string} name of elelment
     */
    RemoveFromCalendar.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.RemoveItem;
    };
    /**
     * @internal Create response object.
     *
     * @param   {FolderId}              parentFolderId       The parent folder id.
     * @param   {MessageDisposition}    messageDisposition   The message disposition.
     * @return  {Item[]}                A list of items that were created or modified as a results of this operation.
     */
    RemoveFromCalendar.prototype.InternalCreate = function (parentFolderId, messageDisposition) {
        this.PropertyBag._getItem(Schemas_1.Schemas.ResponseObjectSchema.ReferenceItemId).Assign(this.referenceItem.Id);
        return this.Service.InternalCreateResponseObject(this, parentFolderId, messageDisposition);
    };
    /**
     * @internal Deletes the object.
     *
     * @param   {DeleteMode}                deleteMode                The deletion mode.
     * @param   {SendCancellationsMode}     sendCancellationsMode     Indicates whether meeting cancellation messages should be sent.
     * @param   {AffectedTaskOccurrence}    affectedTaskOccurrences   Indicate which occurrence of a recurring task should be deleted.
     * @return  {Promise<void>}            :Promise.
     */
    RemoveFromCalendar.prototype.InternalDelete = function (deleteMode, sendCancellationsMode, affectedTaskOccurrences) {
        throw new NotSupportedException_1.NotSupportedException();
    };
    /**
     * @internal Loads the specified set of properties on the object.
     *
     * @param   {PropertySet}   propertySet   The properties to load.
     * @return  {Promise<void>}              :Promise.
     */
    RemoveFromCalendar.prototype.InternalLoad = function (propertySet) {
        throw new NotSupportedException_1.NotSupportedException();
    };
    return RemoveFromCalendar;
}(ServiceObject_1.ServiceObject));
exports.RemoveFromCalendar = RemoveFromCalendar;
