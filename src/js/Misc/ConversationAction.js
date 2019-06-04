"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArgumentException_1 = require("../Exceptions/ArgumentException");
var ConversationActionType_1 = require("../Enumerations/ConversationActionType");
var DeleteMode_1 = require("../Enumerations/DeleteMode");
var EwsLogging_1 = require("../Core/EwsLogging");
var EwsUtilities_1 = require("../Core/EwsUtilities");
var RetentionType_1 = require("../Enumerations/RetentionType");
var ExtensionMethods_1 = require("../ExtensionMethods");
var XmlElementNames_1 = require("../Core/XmlElementNames");
var XmlNamespace_1 = require("../Enumerations/XmlNamespace");
/**
 * @internal ConversationAction class that represents ConversationActionType in the request XML.
 * This class really is meant for representing single ConversationAction that needs to be taken on a conversation.
 */
var ConversationAction = /** @class */ (function () {
    function ConversationAction() {
        /**
         * @internal Gets or sets conversation action
         */
        this.Action = ConversationActionType_1.ConversationActionType.AlwaysCategorize;
        /**
         * @internal Gets or sets conversation id
         */
        this.ConversationId = null;
        /**
         * @internal Gets or sets ProcessRightAway
         */
        this.ProcessRightAway = false;
        /**
         * @internal Gets or set conversation categories for Always Categorize action
         */
        this.Categories = null;
        /**
         * @internal Gets or sets Enable Always Delete value for Always Delete action
         */
        this.EnableAlwaysDelete = false;
        /**
         * @internal Gets or sets the IsRead state. :Nullable
         */
        this.IsRead = null; //Nullable
        /**
         * @internal Gets or sets the SuppressReadReceipts flag.
         */
        this.SuppressReadReceipts = null; //Nullable
        /**
         * @internal Gets or sets the Deletion mode.
         */
        this.DeleteType = null; //Nullable
        /**
         * @internal Gets or sets the flag.
         */
        this.Flag = null;
        /**
         * @internal ConversationLastSyncTime is used in one time action to determine the items on which to take the action.
         */
        this.ConversationLastSyncTime = null; //Nullable
        /**
         * @internal Gets or sets folder id ContextFolder
         */
        this.ContextFolderId = null;
        /**
         * @internal Gets or sets folder id for Move action
         */
        this.DestinationFolderId = null;
        /**
         * @internal Gets or sets the retention policy type.
         */
        this.RetentionPolicyType = null; //Nullable
        /**
         * @internal Gets or sets the retention policy tag id.
         */
        this.RetentionPolicyTagId = null; //Nullable
    }
    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    ConversationAction.prototype.GetXmlElementName = function () {
        return XmlElementNames_1.XmlElementNames.ApplyConversationAction;
    };
    /**
     * @internal Validate request.
     */
    ConversationAction.prototype.Validate = function () {
        EwsUtilities_1.EwsUtilities.ValidateParam(this.ConversationId, "conversationId");
    };
    /**
     * @internal Writes XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    ConversationAction.prototype.WriteElementsToXml = function (writer) {
        writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.ConversationAction);
        try {
            var actionValue = ExtensionMethods_1.StringHelper.Empty;
            switch (this.Action) {
                case ConversationActionType_1.ConversationActionType.AlwaysCategorize:
                    actionValue = XmlElementNames_1.XmlElementNames.AlwaysCategorize;
                    break;
                case ConversationActionType_1.ConversationActionType.AlwaysDelete:
                    actionValue = XmlElementNames_1.XmlElementNames.AlwaysDelete;
                    break;
                case ConversationActionType_1.ConversationActionType.AlwaysMove:
                    actionValue = XmlElementNames_1.XmlElementNames.AlwaysMove;
                    break;
                case ConversationActionType_1.ConversationActionType.Delete:
                    actionValue = XmlElementNames_1.XmlElementNames.Delete;
                    break;
                case ConversationActionType_1.ConversationActionType.Copy:
                    actionValue = XmlElementNames_1.XmlElementNames.Copy;
                    break;
                case ConversationActionType_1.ConversationActionType.Move:
                    actionValue = XmlElementNames_1.XmlElementNames.Move;
                    break;
                case ConversationActionType_1.ConversationActionType.SetReadState:
                    actionValue = XmlElementNames_1.XmlElementNames.SetReadState;
                    break;
                case ConversationActionType_1.ConversationActionType.SetRetentionPolicy:
                    actionValue = XmlElementNames_1.XmlElementNames.SetRetentionPolicy;
                    break;
                case ConversationActionType_1.ConversationActionType.Flag:
                    actionValue = XmlElementNames_1.XmlElementNames.Flag;
                    break;
                default:
                    throw new ArgumentException_1.ArgumentException("ConversationAction");
            }
            // Emit the action element
            writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Action, actionValue);
            // Emit the conversation id element
            this.ConversationId.WriteToXml(writer, XmlElementNames_1.XmlElementNames.ConversationId, XmlNamespace_1.XmlNamespace.Types);
            if (this.Action == ConversationActionType_1.ConversationActionType.AlwaysCategorize ||
                this.Action == ConversationActionType_1.ConversationActionType.AlwaysDelete ||
                this.Action == ConversationActionType_1.ConversationActionType.AlwaysMove) {
                // Emit the ProcessRightAway element
                writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.ProcessRightAway, EwsUtilities_1.EwsUtilities.BoolToXSBool(this.ProcessRightAway));
            }
            if (this.Action == ConversationActionType_1.ConversationActionType.AlwaysCategorize) {
                // Emit the categories element
                if (this.Categories != null && this.Categories.Count > 0) {
                    this.Categories.WriteToXml(writer, XmlElementNames_1.XmlElementNames.Categories, XmlNamespace_1.XmlNamespace.Types);
                }
            }
            else if (this.Action == ConversationActionType_1.ConversationActionType.AlwaysDelete) {
                // Emit the EnableAlwaysDelete element
                writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.EnableAlwaysDelete, EwsUtilities_1.EwsUtilities.BoolToXSBool(this.EnableAlwaysDelete));
            }
            else if (this.Action == ConversationActionType_1.ConversationActionType.AlwaysMove) {
                // Emit the Move Folder Id
                if (this.DestinationFolderId != null) {
                    writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.DestinationFolderId);
                    this.DestinationFolderId.WriteToXml(writer);
                    writer.WriteEndElement();
                }
            }
            else {
                if (this.ContextFolderId != null) {
                    writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.ContextFolderId);
                    this.ContextFolderId.WriteToXml(writer);
                    writer.WriteEndElement();
                }
                if (this.ConversationLastSyncTime) {
                    writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.ConversationLastSyncTime, this.ConversationLastSyncTime);
                }
                if (this.Action == ConversationActionType_1.ConversationActionType.Copy) {
                    EwsLogging_1.EwsLogging.Assert(this.DestinationFolderId != null, "ApplyconversationActionRequest", "DestinationFolderId should be set when performing copy action");
                    writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.DestinationFolderId);
                    this.DestinationFolderId.WriteToXml(writer);
                    writer.WriteEndElement();
                }
                else if (this.Action == ConversationActionType_1.ConversationActionType.Move) {
                    EwsLogging_1.EwsLogging.Assert(this.DestinationFolderId != null, "ApplyconversationActionRequest", "DestinationFolderId should be set when performing move action");
                    writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.DestinationFolderId);
                    this.DestinationFolderId.WriteToXml(writer);
                    writer.WriteEndElement();
                }
                else if (this.Action == ConversationActionType_1.ConversationActionType.Delete) {
                    EwsLogging_1.EwsLogging.Assert(this.DeleteType != null, "ApplyconversationActionRequest", "DeleteType should be specified when deleting a conversation.");
                    writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.DeleteType, DeleteMode_1.DeleteMode[this.DeleteType]);
                }
                else if (this.Action == ConversationActionType_1.ConversationActionType.SetReadState) {
                    EwsLogging_1.EwsLogging.Assert(this.IsRead != null, "ApplyconversationActionRequest", "IsRead should be specified when marking/unmarking a conversation as read.");
                    writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.IsRead, this.IsRead);
                    if (this.SuppressReadReceipts) {
                        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.SuppressReadReceipts, this.SuppressReadReceipts);
                    }
                }
                else if (this.Action == ConversationActionType_1.ConversationActionType.SetRetentionPolicy) {
                    EwsLogging_1.EwsLogging.Assert(this.RetentionPolicyType != null, "ApplyconversationActionRequest", "RetentionPolicyType should be specified when setting a retention policy on a conversation.");
                    writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.RetentionPolicyType, RetentionType_1.RetentionType[this.RetentionPolicyType]);
                    if (this.RetentionPolicyTagId) {
                        writer.WriteElementValue(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.RetentionPolicyTagId, this.RetentionPolicyTagId.ToString());
                    }
                }
                else if (this.Action == ConversationActionType_1.ConversationActionType.Flag) {
                    EwsLogging_1.EwsLogging.Assert(this.Flag != null, "ApplyconversationActionRequest", "Flag should be specified when flagging conversation items.");
                    writer.WriteStartElement(XmlNamespace_1.XmlNamespace.Types, XmlElementNames_1.XmlElementNames.Flag);
                    this.Flag.WriteElementsToXml(writer);
                    writer.WriteEndElement();
                }
            }
        }
        finally {
            writer.WriteEndElement();
        }
    };
    return ConversationAction;
}());
exports.ConversationAction = ConversationAction;
