import {ArgumentException} from '../Exceptions/ArgumentException';
import {ConversationActionType} from "../Enumerations/ConversationActionType";
import {ConversationId} from "../ComplexProperties/ConversationId";
import {DateTime} from "../DateTime";
import {DeleteMode} from "../Enumerations/DeleteMode";
import {EwsLogging} from "../Core/EwsLogging";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {EwsUtilities} from "../Core/EwsUtilities";
import {ExchangeService} from "../Core/ExchangeService";
import {Flag} from "../ComplexProperties/Flag";
import {FolderIdWrapper} from "./FolderIdWrapper";
import {Guid} from "../Guid";
import {RetentionType} from "../Enumerations/RetentionType";
import {StringHelper} from "../ExtensionMethods";
import {StringList} from "../ComplexProperties/StringList";
import {XmlElementNames} from "../Core/XmlElementNames";
import {XmlNamespace} from "../Enumerations/XmlNamespace";

/**
 * @internal ConversationAction class that represents ConversationActionType in the request XML.
 * This class really is meant for representing single ConversationAction that needs to be taken on a conversation.
 */
export class ConversationAction {//IJsonSerializable

    /**
     * @internal Gets or sets conversation action
     */
    Action: ConversationActionType = ConversationActionType.AlwaysCategorize;

    /**
     * @internal Gets or sets conversation id
     */
    ConversationId: ConversationId = null;

    /**
     * @internal Gets or sets ProcessRightAway
     */
    ProcessRightAway: boolean = false;

    /**
     * @internal Gets or set conversation categories for Always Categorize action
     */
    Categories: StringList = null;

    /**
     * @internal Gets or sets Enable Always Delete value for Always Delete action
     */
    EnableAlwaysDelete: boolean = false;

    /**
     * @internal Gets or sets the IsRead state. :Nullable
     */
    IsRead: boolean = null; //Nullable

    /**
     * @internal Gets or sets the SuppressReadReceipts flag.
     */
    SuppressReadReceipts: boolean = null; //Nullable

    /**
     * @internal Gets or sets the Deletion mode.
     */
    DeleteType: DeleteMode = null; //Nullable

    /**
     * @internal Gets or sets the flag.
     */
    Flag: Flag = null;

    /**
     * @internal ConversationLastSyncTime is used in one time action to determine the items on which to take the action.
     */
    ConversationLastSyncTime: DateTime = null; //Nullable

    /**
     * @internal Gets or sets folder id ContextFolder
     */
    ContextFolderId: FolderIdWrapper = null;

    /**
     * @internal Gets or sets folder id for Move action
     */
    DestinationFolderId: FolderIdWrapper = null;

    /**
     * @internal Gets or sets the retention policy type.
     */
    RetentionPolicyType: RetentionType = null; //Nullable

    /**
     * @internal Gets or sets the retention policy tag id.
     */
    RetentionPolicyTagId: Guid = null; //Nullable

    /**
     * @internal Gets the name of the XML element.
     *
     * @return  {string}      XML element name.
     */
    GetXmlElementName(): string {
        return XmlElementNames.ApplyConversationAction;
    }

    /**
     * @internal Validate request.
     */
    Validate(): void {
        EwsUtilities.ValidateParam(this.ConversationId, "conversationId");
    }

    /**
     * @internal Writes XML elements.
     *
     * @param   {EwsServiceXmlWriter}   writer   The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteStartElement(
            XmlNamespace.Types,
            XmlElementNames.ConversationAction);
        try {
            let actionValue: string = StringHelper.Empty;
            switch (this.Action) {
                case ConversationActionType.AlwaysCategorize:
                    actionValue = XmlElementNames.AlwaysCategorize;
                    break;
                case ConversationActionType.AlwaysDelete:
                    actionValue = XmlElementNames.AlwaysDelete;
                    break;
                case ConversationActionType.AlwaysMove:
                    actionValue = XmlElementNames.AlwaysMove;
                    break;
                case ConversationActionType.Delete:
                    actionValue = XmlElementNames.Delete;
                    break;
                case ConversationActionType.Copy:
                    actionValue = XmlElementNames.Copy;
                    break;
                case ConversationActionType.Move:
                    actionValue = XmlElementNames.Move;
                    break;
                case ConversationActionType.SetReadState:
                    actionValue = XmlElementNames.SetReadState;
                    break;
                case ConversationActionType.SetRetentionPolicy:
                    actionValue = XmlElementNames.SetRetentionPolicy;
                    break;
                case ConversationActionType.Flag:
                    actionValue = XmlElementNames.Flag;
                    break;
                default:
                    throw new ArgumentException("ConversationAction");
            }

            // Emit the action element
            writer.WriteElementValue(
                XmlNamespace.Types,
                XmlElementNames.Action,
                actionValue);

            // Emit the conversation id element
            this.ConversationId.WriteToXml(
                writer,
                XmlElementNames.ConversationId,
                XmlNamespace.Types
            );

            if (this.Action == ConversationActionType.AlwaysCategorize ||
                this.Action == ConversationActionType.AlwaysDelete ||
                this.Action == ConversationActionType.AlwaysMove) {
                // Emit the ProcessRightAway element
                writer.WriteElementValue(
                    XmlNamespace.Types,
                    XmlElementNames.ProcessRightAway,
                    EwsUtilities.BoolToXSBool(this.ProcessRightAway));
            }

            if (this.Action == ConversationActionType.AlwaysCategorize) {
                // Emit the categories element
                if (this.Categories != null && this.Categories.Count > 0) {
                    this.Categories.WriteToXml(
                        writer,
                        XmlElementNames.Categories,
                        XmlNamespace.Types);
                }
            }
            else if (this.Action == ConversationActionType.AlwaysDelete) {
                // Emit the EnableAlwaysDelete element
                writer.WriteElementValue(
                    XmlNamespace.Types,
                    XmlElementNames.EnableAlwaysDelete,
                    EwsUtilities.BoolToXSBool(this.EnableAlwaysDelete));
            }
            else if (this.Action == ConversationActionType.AlwaysMove) {
                // Emit the Move Folder Id
                if (this.DestinationFolderId != null) {
                    writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.DestinationFolderId);
                    this.DestinationFolderId.WriteToXml(writer);
                    writer.WriteEndElement();
                }
            }
            else {
                if (this.ContextFolderId != null) {
                    writer.WriteStartElement(
                        XmlNamespace.Types,
                        XmlElementNames.ContextFolderId);

                    this.ContextFolderId.WriteToXml(writer);

                    writer.WriteEndElement();
                }

                if (this.ConversationLastSyncTime) {
                    writer.WriteElementValue(
                        XmlNamespace.Types,
                        XmlElementNames.ConversationLastSyncTime,
                        this.ConversationLastSyncTime);
                }

                if (this.Action == ConversationActionType.Copy) {
                    EwsLogging.Assert(
                        this.DestinationFolderId != null,
                        "ApplyconversationActionRequest",
                        "DestinationFolderId should be set when performing copy action");

                    writer.WriteStartElement(
                        XmlNamespace.Types,
                        XmlElementNames.DestinationFolderId);
                    this.DestinationFolderId.WriteToXml(writer);
                    writer.WriteEndElement();
                }
                else if (this.Action == ConversationActionType.Move) {
                    EwsLogging.Assert(
                        this.DestinationFolderId != null,
                        "ApplyconversationActionRequest",
                        "DestinationFolderId should be set when performing move action");

                    writer.WriteStartElement(
                        XmlNamespace.Types,
                        XmlElementNames.DestinationFolderId);
                    this.DestinationFolderId.WriteToXml(writer);
                    writer.WriteEndElement();
                }
                else if (this.Action == ConversationActionType.Delete) {
                    EwsLogging.Assert(
                        this.DeleteType != null,
                        "ApplyconversationActionRequest",
                        "DeleteType should be specified when deleting a conversation.");

                    writer.WriteElementValue(
                        XmlNamespace.Types,
                        XmlElementNames.DeleteType,
                        DeleteMode[this.DeleteType]);
                }
                else if (this.Action == ConversationActionType.SetReadState) {
                    EwsLogging.Assert(
                        this.IsRead != null,
                        "ApplyconversationActionRequest",
                        "IsRead should be specified when marking/unmarking a conversation as read.");

                    writer.WriteElementValue(
                        XmlNamespace.Types,
                        XmlElementNames.IsRead,
                        this.IsRead);

                    if (this.SuppressReadReceipts) {
                        writer.WriteElementValue(
                            XmlNamespace.Types,
                            XmlElementNames.SuppressReadReceipts,
                            this.SuppressReadReceipts);
                    }
                }
                else if (this.Action == ConversationActionType.SetRetentionPolicy) {
                    EwsLogging.Assert(
                        this.RetentionPolicyType != null,
                        "ApplyconversationActionRequest",
                        "RetentionPolicyType should be specified when setting a retention policy on a conversation.");

                    writer.WriteElementValue(
                        XmlNamespace.Types,
                        XmlElementNames.RetentionPolicyType,
                        RetentionType[this.RetentionPolicyType]);

                    if (this.RetentionPolicyTagId) {
                        writer.WriteElementValue(
                            XmlNamespace.Types,
                            XmlElementNames.RetentionPolicyTagId,
                            this.RetentionPolicyTagId.ToString());
                    }
                }
                else if (this.Action == ConversationActionType.Flag) {
                    EwsLogging.Assert(
                        this.Flag != null,
                        "ApplyconversationActionRequest",
                        "Flag should be specified when flagging conversation items.");

                    writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.Flag);
                    this.Flag.WriteElementsToXml(writer);
                    writer.WriteEndElement();
                }
            }
        }
        finally {
            writer.WriteEndElement();
        }
    }
}