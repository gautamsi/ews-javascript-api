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
var FolderId_1 = require("../../../ComplexProperties/FolderId");
var MessageDisposition_1 = require("../../../Enumerations/MessageDisposition");
var NotSupportedException_1 = require("../../../Exceptions/NotSupportedException");
var Schemas_1 = require("../Schemas/Schemas");
var ServiceObject_1 = require("../ServiceObject");
/**
 * Represents the base class for all responses that can be sent.
 *
 * @typeparam   {TMessage}     Type of message.
 */
var ResponseObject = /** @class */ (function (_super) {
    __extends(ResponseObject, _super);
    /**
     * @internal Initializes a new instance of the **ResponseObject** class.
     *
     * @param   {type}   referenceItem   The reference item.
     */
    function ResponseObject(referenceItem) {
        var _this = _super.call(this, referenceItem.Service) || this;
        _this.referenceItem = null;
        EwsLogging_1.EwsLogging.Assert(referenceItem !== null, "ResponseObject.ctor", "referenceItem is null");
        referenceItem.ThrowIfThisIsNew();
        _this.referenceItem = referenceItem;
        return _this;
    }
    Object.defineProperty(ResponseObject.prototype, "IsReadReceiptRequested", {
        /**
         * Gets or sets a value indicating whether read receipts will be requested from recipients of this response.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.EmailMessageSchema.IsReadReceiptRequested);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.EmailMessageSchema.IsReadReceiptRequested, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponseObject.prototype, "IsDeliveryReceiptRequested", {
        /**
         * Gets or sets a value indicating whether delivery receipts should be sent to the sender.
         */
        get: function () {
            return this.PropertyBag._getItem(Schemas_1.Schemas.EmailMessageSchema.IsDeliveryReceiptRequested);
        },
        set: function (value) {
            this.PropertyBag._setItem(Schemas_1.Schemas.EmailMessageSchema.IsDeliveryReceiptRequested, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @internal Internal method to return the schema associated with this type of object.
     *
     * @return  {ServiceObjectSchema}      The schema associated with this type of object.
     */
    ResponseObject.prototype.GetSchema = function () { return Schemas_1.Schemas.ResponseObjectSchema.Instance; };
    /**
    * @internal Create the response object.
    *
    * @param   {FolderId}             destinationFolderId   The destination folder id.
    * @param   {MessageDisposition}   messageDisposition    The message disposition.
    * @return  {Promise<Item[]>}               The list of items returned by EWS.
    */
    ResponseObject.prototype.InternalCreate = function (destinationFolderId, messageDisposition) {
        this.PropertyBag._getItem(Schemas_1.Schemas.ResponseObjectSchema.ReferenceItemId).Assign(this.referenceItem.Id);
        return this.Service.InternalCreateResponseObject(this, destinationFolderId, messageDisposition);
    };
    /**
     * @internal Deletes the object.
     *
     * @param   {DeleteMode}                  deleteMode                The deletion mode.
     * @param   {SendCancellationsMode}       sendCancellationsMode     Indicates whether meeting cancellation messages should be sent.
     * @param   {affectedTaskOccurrences}     affectedTaskOccurrences   Indicate which occurrence of a recurring task should be deleted.
     */
    ResponseObject.prototype.InternalDelete = function (deleteMode, sendCancellationsMode, affectedTaskOccurrences) {
        throw new NotSupportedException_1.NotSupportedException();
    };
    /**
     * @internal Loads the specified set of properties on the object.
     *
     * @param   {PropertySet}   propertySet   The properties to load.
     */
    ResponseObject.prototype.InternalLoad = function (propertySet) {
        throw new NotSupportedException_1.NotSupportedException();
    };
    ResponseObject.prototype.Save = function (destinationFolderIdOrName) {
        var destinationFolderId = null;
        if (arguments.length === 1) {
            if (typeof destinationFolderIdOrName === "number") {
                destinationFolderId = new FolderId_1.FolderId(destinationFolderIdOrName);
            }
            else {
                //EwsUtilities.ValidateParam(destinationFolderIdOrName, "destinationFolderId");
                destinationFolderId = destinationFolderIdOrName;
            }
        }
        return this.InternalCreate(destinationFolderId, MessageDisposition_1.MessageDisposition.SaveOnly).then(function (result) {
            return result[0];
        });
    };
    /**
     * Sends this response without saving a copy. Calling this method results in a call to EWS.
     */
    ResponseObject.prototype.Send = function () {
        return this.InternalCreate(null, MessageDisposition_1.MessageDisposition.SendOnly);
    };
    ResponseObject.prototype.SendAndSaveCopy = function (destinationFolderIdOrName) {
        var destinationFolderId = null;
        if (arguments.length === 1) {
            if (typeof destinationFolderIdOrName === "number") {
                destinationFolderId = new FolderId_1.FolderId(destinationFolderIdOrName);
            }
            else {
                //EwsUtilities.ValidateParam(destinationFolderIdOrName, "destinationFolderId");
                destinationFolderId = destinationFolderIdOrName;
            }
        }
        return this.InternalCreate(destinationFolderId, MessageDisposition_1.MessageDisposition.SendAndSaveCopy);
    };
    return ResponseObject;
}(ServiceObject_1.ServiceObject));
exports.ResponseObject = ResponseObject;
