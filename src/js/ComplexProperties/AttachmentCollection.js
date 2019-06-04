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
var ArgumentException_1 = require("../Exceptions/ArgumentException");
var ExtensionMethods_1 = require("../ExtensionMethods");
var CreateAttachmentException_1 = require("../Exceptions/CreateAttachmentException");
var DeleteAttachmentException_1 = require("../Exceptions/DeleteAttachmentException");
var EwsLogging_1 = require("../Core/EwsLogging");
var EwsUtilities_1 = require("../Core/EwsUtilities");
var ExchangeVersion_1 = require("../Enumerations/ExchangeVersion");
var FileAttachment_1 = require("./FileAttachment");
var ItemAttachment_1 = require("./ItemAttachment");
var ItemAttachmentOf_1 = require("./ItemAttachmentOf");
var ItemInfo_1 = require("../Core/ServiceObjects/Items/ItemInfo");
var Promise_1 = require("../Promise");
var ServiceResult_1 = require("../Enumerations/ServiceResult");
var ServiceValidationException_1 = require("../Exceptions/ServiceValidationException");
var Strings_1 = require("../Strings");
var TypeContainer_1 = require("../TypeContainer");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var Attachment_1 = require("./Attachment");
var ComplexPropertyCollection_1 = require("./ComplexPropertyCollection");
/**
 * Represents an item's attachment collection.
 */
var AttachmentCollection = /** @class */ (function (_super) {
    __extends(AttachmentCollection, _super);
    /**
     * @internal Initializes a new instance of AttachmentCollection.
     */
    function AttachmentCollection() {
        var _this = _super.call(this) || this;
        _this.___typeGenerics = ["ComplexProperty"];
        /**
         * The item owner that owns this attachment collection
         */
        _this.owner = null;
        return _this;
    }
    Object.defineProperty(AttachmentCollection.prototype, "Owner", {
        /**
         * @interface:IOwnedProperty The owner of this attachment collection.
         */
        get: function () { return this.owner; },
        set: function (value) {
            EwsLogging_1.EwsLogging.Assert(value != null && (value instanceof TypeContainer_1.TypeContainer.Item), // instanceof Item), //info: can not check instanceof to avoid circular dependency in js. TypeContainer is workaround
            "AttachmentCollection.IOwnedProperty.set_Owner", "value is not a descendant of ItemBase");
            this.owner = value;
        },
        enumerable: true,
        configurable: true
    });
    ;
    AttachmentCollection.prototype.AddFileAttachmentXXXXX = function (nameOrFileName, fileNameOrContent, isContent) {
        if (isContent === void 0) { isContent = false; }
        var argsLength = arguments.length;
        if (argsLength == 1) {
            var name_1 = nameOrFileName.split('\\').pop().split('/').pop();
            return this.AddFileAttachment(name_1, fileNameOrContent);
        }
        if (argsLength === 2) {
            throw new Error("AttachmentCollection.ts - Can only use this method with base64 content");
            var fileAttachment = new FileAttachment_1.FileAttachment(this.owner);
            fileAttachment.Name = name;
            fileAttachment.FileName = fileNameOrContent;
            this.InternalAdd(fileAttachment);
            return fileAttachment;
        }
        if (argsLength == 3) {
            if (isContent === true) {
                var fileAttachment = new FileAttachment_1.FileAttachment(this.owner);
                fileAttachment.Name = name;
                fileAttachment.Base64Content = fileNameOrContent;
                this.InternalAdd(fileAttachment);
                return fileAttachment;
            }
            else {
                return this.AddFileAttachment(nameOrFileName, fileNameOrContent);
            }
        }
        new Error("AttachmentCollection.ts - AddFileAttachment - incorrect count of parameters");
    };
    /**
     * Adds a file attachment to the collection. - isContent parameter is required to be true to be able to use bas64 content directly
     *
     * @param   {string}    name       The display name of the new attachment.
     * @param   {string}    fileContent   base64 ontent of the file representing the content of the attachment.
     * @return  {FileAttachment}      A FileAttachment instance.
     */
    AttachmentCollection.prototype.AddFileAttachment = function (name, content) {
        var fileAttachment = new FileAttachment_1.FileAttachment(this.owner);
        fileAttachment.Name = name;
        fileAttachment.Base64Content = content;
        this.InternalAdd(fileAttachment);
        return fileAttachment;
    };
    /**
     * Adds an item attachment to the collection
     *
     * @type <TItem>    The type of the item to attach.
     *
     * @param   {any*}      TItem    Item type, not instance
     * @param   {string}    TItemElementName    XML Element Name of the Item class
     * @return  {ItemAttachmentOf<TItem>}      An ItemAttachment instance.
     */
    AttachmentCollection.prototype.AddItemAttachment = function (TItem, TItemElementName) {
        if (typeof TItem.Attachable === 'undefined' || TItem.Attachable === false) {
            throw new Error(ExtensionMethods_1.StringHelper.Format("Items of type {0} are not supported as attachments.", TItem["name"])); //InvalidOperationException
        }
        var itemAttachment = new ItemAttachmentOf_1.ItemAttachmentOf(this.owner); //ref: //info: ItemAttachment can not be generic when same name non generic version exhist. TypeScript limitation
        itemAttachment.Item = (new ItemInfo_1.ItemInfo()).CreateItemFromItemClass(itemAttachment, TItemElementName, true); //todo: needs to implement Reflector metadata for Type to class creation map
        this.InternalAdd(itemAttachment);
        return itemAttachment;
    };
    /**
     * Removes all attachments from this collection.
     */
    AttachmentCollection.prototype.Clear = function () { this.InternalClear(); };
    /**
     * @internal Disables the change log clearing mechanism. Attachment collections are saved separately from the items they belong to.
     */
    AttachmentCollection.prototype.ClearChangeLog = function () { };
    /**
     * @internal Instantiate the appropriate attachment type depending on the current XML element name.
     *
     * @param   {string}   xmlElementName   The XML element name from which to determine the type of attachment to create.
     * @return  {Attachment}        An Attachment instance.
     */
    AttachmentCollection.prototype.CreateComplexProperty = function (xmlElementName) {
        switch (xmlElementName) {
            case XmlElementNames_1.XmlElementNames.FileAttachment:
                return new FileAttachment_1.FileAttachment(this.owner);
            case XmlElementNames_1.XmlElementNames.ItemAttachment:
                return new ItemAttachment_1.ItemAttachment(this.owner);
            default:
                return null;
        }
    };
    //JsonDeserializationNotImplementedException
    AttachmentCollection.prototype.CreateDefaultComplexProperty = function () { EwsLogging_1.EwsLogging.DebugLog("AttachmentCollection.ts - CreateDefaultComplexProperty : Not implemented."); return null; };
    /**
     * @internal Determines the name of the XML element associated with the complexProperty parameter.
     *
     * @param   {Attachment}   complexProperty   The attachment object for which to determine the XML element name with.
     * @return  {string}        The XML element name associated with the complexProperty parameter.
     */
    AttachmentCollection.prototype.GetCollectionItemXmlElementName = function (complexProperty) {
        if (complexProperty instanceof FileAttachment_1.FileAttachment) {
            return XmlElementNames_1.XmlElementNames.FileAttachment;
        }
        else {
            return XmlElementNames_1.XmlElementNames.ItemAttachment;
        }
    };
    /**
     * @internal Determines whether there are any unsaved attachment collection changes.
     *
     * @return  {boolean}      True if attachment adds or deletes haven't been processed yet.
     */
    AttachmentCollection.prototype.HasUnprocessedChanges = function () {
        for (var _i = 0, _a = this.Items; _i < _a.length; _i++) {
            var attachment = _a[_i];
            if (attachment.IsNew) {
                return true;
            }
        }
        // Any pending deletions?
        for (var _b = 0, _c = this.RemovedItems; _b < _c.length; _b++) {
            var attachment = _c[_b];
            if (!attachment.IsNew) {
                return true;
            }
        }
        // Recurse: process item attachments to check for new or deleted sub-attachments.
        for (var _d = 0, _e = ExtensionMethods_1.ArrayHelper.OfType(this.Items, function (attach) { return attach instanceof ItemAttachment_1.ItemAttachment; }); _d < _e.length; _d++) {
            var itemAttachment = _e[_d];
            if (itemAttachment.Item != null) {
                if (itemAttachment.Item.Attachments.HasUnprocessedChanges()) {
                    return true;
                }
            }
        }
        return false;
    };
    /**
     * Calls the CreateAttachment web method to create a list of attachments.
     *
     * @param   {string}        parentItemId   The Id of the parent item of the new attachments.
     * @param   {Attachment[]}  attachments    The attachments to create.
     */
    AttachmentCollection.prototype.InternalCreateAttachments = function (parentItemId, attachments) {
        var _this = this;
        return this.owner.Service.CreateAttachments(parentItemId, attachments)
            .then(function (responses) {
            for (var _i = 0, _a = responses.Responses; _i < _a.length; _i++) {
                var response = _a[_i];
                // We remove all attachments that were successfully deleted from the change log. We should never
                // receive a warning from EWS, so we ignore them.
                if (response.Result != ServiceResult_1.ServiceResult.Error) {
                    _this.RemoveFromChangeLog(response.Attachment);
                }
            }
            // TODO : Should we throw for warnings as well?
            if (responses.OverallResult == ServiceResult_1.ServiceResult.Error) {
                throw new CreateAttachmentException_1.CreateAttachmentException(responses, Strings_1.Strings.AttachmentCreationFailed);
            }
        });
    };
    /**
     * Calls the DeleteAttachment web method to delete a list of attachments.
     *
     * @param   {Attachment[]}   attachments   The attachments to delete.
     */
    AttachmentCollection.prototype.InternalDeleteAttachments = function (attachments) {
        var _this = this;
        return this.owner.Service.DeleteAttachments(attachments)
            .then(function (responses) {
            for (var _i = 0, _a = responses.Responses; _i < _a.length; _i++) {
                var response = _a[_i];
                // We remove all attachments that were successfully deleted from the change log. We should never
                // receive a warning from EWS, so we ignore them.
                if (response.Result != ServiceResult_1.ServiceResult.Error) {
                    _this.RemoveFromChangeLog(response.Attachment);
                }
            }
            // TODO : Should we throw for warnings as well?
            if (responses.OverallResult == ServiceResult_1.ServiceResult.Error) {
                throw new DeleteAttachmentException_1.DeleteAttachmentException(responses, Strings_1.Strings.AtLeastOneAttachmentCouldNotBeDeleted);
            }
        });
    };
    /**
     * Removes the specified attachment.
     *
     * @param   {Attachment}    attachment   The attachment to remove.
     * @return  {boolean}       True if the attachment was successfully removed from the collection, false otherwise.
     */
    AttachmentCollection.prototype.Remove = function (attachment) {
        EwsUtilities_1.EwsUtilities.ValidateParam(attachment, "attachment");
        return this.InternalRemove(attachment);
    };
    /**
     * Removes the attachment at the specified index.
     *
     * @param   {number}   index   Index of the attachment to remove.
     */
    AttachmentCollection.prototype.RemoveAt = function (index) {
        if (index < 0 || index >= this.Count) {
            throw new ArgumentException_1.ArgumentOutOfRangeException("index", Strings_1.Strings.IndexIsOutOfRange);
        }
        this.InternalRemoveAt(index);
    };
    /**
     * @internal Saves this collection by creating new attachment and deleting removed ones.
     */
    AttachmentCollection.prototype.Save = function () {
        var _this = this;
        var attachments = [];
        // Retrieve a list of attachments that have to be deleted.
        for (var _i = 0, _a = this.RemovedItems; _i < _a.length; _i++) {
            var attachment = _a[_i];
            if (!attachment.IsNew) {
                attachments.push(attachment);
            }
        }
        // If any, delete them by calling the DeleteAttachment web method.
        //promise resolves with null to keep chaining
        return Promise_1.Promise.resolve(attachments.length > 0 ? this.InternalDeleteAttachments(attachments) : void 0)
            .then(function () {
            attachments.splice(0);
        })
            .then(function () {
            // Retrieve a list of attachments that have to be created.
            for (var _i = 0, _a = _this.Items; _i < _a.length; _i++) {
                var attachment = _a[_i];
                if (attachment.IsNew) {
                    attachments.push(attachment);
                }
            }
            // If there are any, create them by calling the CreateAttachment web method.
            if (attachments.length > 0) {
                var parentId = _this.owner.IsAttachment ? _this.owner.ParentAttachment.Id : _this.owner.Id.UniqueId;
                return _this.InternalCreateAttachments(parentId, attachments);
            }
            else {
                return Promise_1.Promise.resolve();
            }
        }).then(function () {
            // Process all of the item attachments in this collection.
            var itemAttachments = ExtensionMethods_1.ArrayHelper.OfType(attachments, function (attachment) { return attachment instanceof ItemAttachment_1.ItemAttachment; });
            return itemAttachments.reduce(function (prev, curr, index) {
                return prev.then(function () {
                    return curr.Item.Attachments.Save().then(function () {
                        curr.Item.ClearChangeLog();
                    });
                });
            }, Promise_1.Promise.resolve());
        }).then(function () {
            _super.prototype.ClearChangeLog.call(_this);
        });
    };
    /**
     * @internal Validates this instance.
     */
    AttachmentCollection.prototype.Validate = function () {
        // Validate all added attachments
        var contactPhotoFound = false;
        for (var attachmentIndex = 0; attachmentIndex < this.AddedItems.length; attachmentIndex++) {
            var attachment = this.AddedItems[attachmentIndex];
            if (attachment.IsNew) {
                // At the server side, only the last attachment with IsContactPhoto is kept, all other IsContactPhoto
                // attachments are removed. CreateAttachment will generate AttachmentId for each of such attachments (although
                // only the last one is valid).
                // 
                // With E14 SP2 CreateItemWithAttachment, such request will only return 1 AttachmentId; but the client
                // expects to see all, so let us prevent such "invalid" request in the first place. 
                // 
                // The IsNew check is to still let CreateAttachmentRequest allow multiple IsContactPhoto attachments.
                // 
                if (this.owner.IsNew && this.owner.Service.RequestedServerVersion >= ExchangeVersion_1.ExchangeVersion.Exchange2010_SP2) {
                    var fileAttachment = attachment;
                    if (fileAttachment instanceof Attachment_1.Attachment && fileAttachment.IsContactPhoto) {
                        if (contactPhotoFound) {
                            throw new ServiceValidationException_1.ServiceValidationException(Strings_1.Strings.MultipleContactPhotosInAttachment);
                        }
                        contactPhotoFound = true;
                    }
                }
                attachment.Validate(attachmentIndex);
            }
        }
    };
    /**
     * @internal Validates and saves this instance. **Not in official EWS source, to workaround some promise errors with validate and save**
     */
    AttachmentCollection.prototype.ValidateAndSave = function () {
        this.Validate();
        return this.Save();
    };
    return AttachmentCollection;
}(ComplexPropertyCollection_1.ComplexPropertyCollection));
exports.AttachmentCollection = AttachmentCollection;
