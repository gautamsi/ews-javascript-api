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
 * Represents a response object created to supress read receipts for an item.
 *
 */
var SuppressReadReceipt = /** @class */ (function (_super) {
    __extends(SuppressReadReceipt, _super);
    /**
     * Initializes a new instance of the **SuppressReadReceipt** class.
     *
     * @param   {Item}   referenceItem   The reference item.
     */
    function SuppressReadReceipt(referenceItem) {
        var _this = _super.call(this, referenceItem.Service) || this;
        _this.referenceItem = null;
        EwsLogging_1.EwsLogging.Assert(referenceItem !== null, "SuppressReadReceipt.ctor", "referenceItem is null");
        referenceItem.ThrowIfThisIsNew();
        _this.referenceItem = referenceItem;
        return _this;
    }
    /**
     * Gets the minimum required server version.
     *
     * @return  {ExchangeVersion}      Earliest Exchange version in which this service object type is supported.
     */
    SuppressReadReceipt.prototype.GetMinimumRequiredServerVersion = function () { return ExchangeVersion_1.ExchangeVersion.Exchange2007_SP1; };
    /**
     * Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    SuppressReadReceipt.prototype.GetSchema = function () { return Schemas_1.Schemas.ResponseObjectSchema.Instance; };
    SuppressReadReceipt.prototype.GetXmlElementName = function () { return XmlElementNames_1.XmlElementNames.SuppressReadReceipt; };
    /**
     * Create the response object.
     *
     * @param   {FolderId}            parentFolderId       The parent folder id.
     * @param   {MessageDisposition}  messageDisposition   The message disposition.
     */
    SuppressReadReceipt.prototype.InternalCreate = function (parentFolderId, messageDisposition) {
        this.PropertyBag._getItem(Schemas_1.Schemas.ResponseObjectSchema.ReferenceItemId).Assign(this.referenceItem.Id);
        return this.Service.InternalCreateResponseObject(this, parentFolderId, messageDisposition);
    };
    /**
     * Deletes the object.
     *
     * @param   {DeleteMode}              deleteMode                The deletion mode.
     * @param   {SendCancellationsMode}   sendCancellationsMode     Indicates whether meeting cancellation messages should be sent.
     * @param   {AffectedTaskOccurrence}  affectedTaskOccurrences   Indicate which occurrence of a recurring task should be deleted.
     */
    SuppressReadReceipt.prototype.InternalDelete = function (deleteMode, sendCancellationsMode, affectedTaskOccurrences) {
        throw new NotSupportedException_1.NotSupportedException();
    };
    /**
     * Loads the specified set of properties on the object.
     *
     * @param   {PropertySet}   propertySet   The properties to load.
     */
    SuppressReadReceipt.prototype.InternalLoad = function (propertySet) {
        throw new NotSupportedException_1.NotSupportedException();
    };
    return SuppressReadReceipt;
}(ServiceObject_1.ServiceObject));
exports.SuppressReadReceipt = SuppressReadReceipt;
