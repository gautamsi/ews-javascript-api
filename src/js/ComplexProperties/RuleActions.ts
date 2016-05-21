import {Convert} from "../ExtensionMethods";
import {EmailAddress} from "./EmailAddress";
import {EmailAddressCollection} from "./EmailAddressCollection";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {EwsUtilities} from "../Core/EwsUtilities";
import {ExchangeService} from "../Core/ExchangeService";
import {FolderId} from "./FolderId";
import {Importance} from "../Enumerations/Importance";
import {ItemId} from "./ItemId";
import {MobilePhone} from "../Misc/MobilePhone";
import {StringList} from "./StringList";
import {XmlElementNames} from "../Core/XmlElementNames";
import {XmlNamespace} from "../Enumerations/XmlNamespace";

import {ComplexProperty} from "./ComplexProperty";
/**
 * Represents the set of actions available for a rule.
 * 
 * @sealed
 */
export class RuleActions extends ComplexProperty {

	/**
	 * SMS recipient address type.
	 */
	private static MobileType: string = "MOBILE";

	/**
	 * The AssignCategories action.
	 */
	private assignCategories: StringList = null;

	/**
	 * The CopyToFolder action.
	 */
	private copyToFolder: FolderId = null;

	/**
	 * The Delete action.
	 */
	private delete: boolean = false;

	/**
	 * The ForwardAsAttachmentToRecipients action.
	 */
	private forwardAsAttachmentToRecipients: EmailAddressCollection = null;

	/**
	 * The ForwardToRecipients action.
	 */
	private forwardToRecipients: EmailAddressCollection = null;

	/**
	 * The MarkImportance action.
	 */
	private markImportance: Importance = null; //Nullable

	/**
	 * The MarkAsRead action.
	 */
	private markAsRead: boolean = false;

	/**
	 * The MoveToFolder action.
	 */
	private moveToFolder: FolderId = null;

	/**
	 * The PermanentDelete action.
	 */
	private permanentDelete: boolean = false;

	/**
	 * The RedirectToRecipients action.
	 */
	private redirectToRecipients: EmailAddressCollection = null;

	/**
	 * The SendSMSAlertToRecipients action.
	 */
	private sendSMSAlertToRecipients: MobilePhone[] = null;

	/**
	 * The ServerReplyWithMessage action.
	 */
	private serverReplyWithMessage: ItemId = null;

	/**
	 * The StopProcessingRules action.
	 */
	private stopProcessingRules: boolean = false;

	/**
	 * Gets the categories that should be stamped on incoming messages.
	 * To disable stamping incoming messages with categories, set AssignCategories to null.
	 */
	get AssignCategories(): StringList {
		return this.assignCategories;
	}

	/**
	 * Gets or sets the Id of the folder incoming messages should be copied to.
	 * To disable copying incoming messages to a folder, set CopyToFolder to null.
	 */
	get CopyToFolder(): FolderId {
		return this.copyToFolder;
	}
	set CopyToFolder(value: FolderId) {
		this.SetFieldValue<FolderId>({ getValue: () => this.copyToFolder, setValue: (updateValue) => { this.copyToFolder = updateValue } }, value);
	}

	/**
	 * Gets or sets a value indicating whether incoming messages should be automatically moved to the Deleted Items folder.
	 */
	get Delete(): boolean {
		return this.delete;
	}
	set Delete(value: boolean) {
		this.SetFieldValue<boolean>({ getValue: () => this.delete, setValue: (updateValue) => { this.delete = updateValue } }, value);
	}

	/**
	 * Gets the e-mail addresses to which incoming messages should be forwarded as attachments. 
	 * To disable forwarding incoming messages as attachments, empty the ForwardAsAttachmentToRecipients list.
	 */
	get ForwardAsAttachmentToRecipients(): EmailAddressCollection {
		return this.forwardAsAttachmentToRecipients;
	}

	/**
	 * Gets the e-mail addresses to which incoming messages should be forwarded. 
	 * To disable forwarding incoming messages, empty the ForwardToRecipients list.
	 */
	get ForwardToRecipients(): EmailAddressCollection {
		return this.forwardToRecipients;
	}

	/**
	 * @Nullable Gets or sets the importance that should be stamped on incoming messages. 
	 * To disable the stamping of incoming messages with an importance, set MarkImportance to null.
	 */
	get MarkImportance(): Importance {
		return this.markImportance;
	}
	set MarkImportance(value: Importance) {
		this.SetFieldValue<Importance>({ getValue: () => this.markImportance, setValue: (updateValue) => { this.markImportance = updateValue } }, value);
	}

	/**
	 * Gets or sets a value indicating whether incoming messages should be marked as read.
	 */
	get MarkAsRead(): boolean {
		return this.markAsRead;
	}
	set MarkAsRead(value: boolean) {
		this.SetFieldValue<boolean>({ getValue: () => this.markAsRead, setValue: (updateValue) => { this.markAsRead = updateValue } }, value);
	}

	/**
	 * Gets or sets the Id of the folder to which incoming messages should be moved.
	 * To disable the moving of incoming messages to a folder, set CopyToFolder to null.
	 */
	get MoveToFolder(): FolderId {
		return this.moveToFolder;
	}
	set MoveToFolder(value: FolderId) {
		this.SetFieldValue<FolderId>({ getValue: () => this.moveToFolder, setValue: (updateValue) => { this.moveToFolder = updateValue } }, value);
	}

	/**
	 * Gets or sets a value indicating whether incoming messages should be permanently deleted. When a message is permanently deleted, it is never saved into the recipient's mailbox. To delete a message after it has been saved into the recipient's mailbox, use the Delete action.
	 */
	get PermanentDelete(): boolean {
		return this.permanentDelete;
	}
	set PermanentDelete(value: boolean) {
		this.SetFieldValue<boolean>({ getValue: () => this.permanentDelete, setValue: (updateValue) => { this.permanentDelete = updateValue } }, value);
	}

	/**
	 * Gets the e-mail addresses to which incoming messages should be redirecteded. 
	 * To disable redirection of incoming messages, empty the RedirectToRecipients list. Unlike forwarded mail, redirected mail maintains the original sender and recipients. 
	 */
	get RedirectToRecipients(): EmailAddressCollection {
		return this.redirectToRecipients;
	}

	/**
	 * Gets the phone numbers to which an SMS alert should be sent. 
	 * To disable sending SMS alerts for incoming messages, empty the SendSMSAlertToRecipients list.
	 */
	get SendSMSAlertToRecipients(): MobilePhone[] {
		return this.sendSMSAlertToRecipients;
	}

	/**
	 * Gets or sets the Id of the template message that should be sent as a reply to incoming messages. 
	 * To disable automatic replies, set ServerReplyWithMessage to null. 
	 */
	get ServerReplyWithMessage(): ItemId {
		return this.serverReplyWithMessage;
	}
	set ServerReplyWithMessage(value: ItemId) {
		this.SetFieldValue<ItemId>({ getValue: () => this.serverReplyWithMessage, setValue: (updateValue) => { this.serverReplyWithMessage = updateValue } }, value);
	}

	/**
	 * Gets or sets a value indicating whether subsequent rules should be evaluated. 
	 */
	get StopProcessingRules(): boolean {
		return this.stopProcessingRules;
	}
	set StopProcessingRules(value: boolean) {
		this.SetFieldValue<boolean>({ getValue: () => this.stopProcessingRules, setValue: (updateValue) => { this.stopProcessingRules = updateValue } }, value);
	}

	/**
	 * @internal Initializes a new instance of the **RuleActions** class.
	 */
	constructor() {
		super();
		this.assignCategories = new StringList();
		this.forwardAsAttachmentToRecipients = new EmailAddressCollection(XmlElementNames.Address);
		this.forwardToRecipients = new EmailAddressCollection(XmlElementNames.Address);
		this.redirectToRecipients = new EmailAddressCollection(XmlElementNames.Address);
		this.sendSMSAlertToRecipients = [];
	}

	/**
	 * Convert the SMS recipient list from EmailAddressCollection type to MobilePhone collection type.
	 *
	 * @param   {EmailAddressCollection}   emailCollection   Recipient list in EmailAddressCollection type.
	 * @return  {MobilePhone[]}		A MobilePhone collection object containing all SMS recipient in MobilePhone type.
	 */
	private static ConvertSMSRecipientsFromEmailAddressCollectionToMobilePhoneCollection(emailCollection: EmailAddressCollection): MobilePhone[] {
		let mobilePhoneCollection: MobilePhone[] = [];
		for (let emailAddress of emailCollection.Items) {
			mobilePhoneCollection.push(new MobilePhone(emailAddress.Name, emailAddress.Address));
		}

		return mobilePhoneCollection;
	}

	/**
	 * Convert the SMS recipient list from MobilePhone collection type to EmailAddressCollection type.
	 *
	 * @param   {MobilePhone[]}   recipientCollection   Recipient list in a MobilePhone collection type.
	 * @return  {EmailAddressCollection}		An EmailAddressCollection object containing recipients with "MOBILE" address type.
	 */
	private static ConvertSMSRecipientsFromMobilePhoneCollectionToEmailAddressCollection(recipientCollection: MobilePhone[]): EmailAddressCollection {
		let emailCollection: EmailAddressCollection = new EmailAddressCollection(XmlElementNames.Address);
		for (let recipient of recipientCollection) {
			let emailAddress: EmailAddress = new EmailAddress(
				recipient.Name,
				recipient.PhoneNumber,
				RuleActions.MobileType);
			emailCollection.Add(emailAddress);
		}

		return emailCollection;
	}

	/**
	 * @internal Validates this instance.
	 */
	InternalValidate(): void {
		super.InternalValidate();
		EwsUtilities.ValidateParam(this.forwardAsAttachmentToRecipients, "ForwardAsAttachmentToRecipients");
		EwsUtilities.ValidateParam(this.forwardToRecipients, "ForwardToRecipients");
		EwsUtilities.ValidateParam(this.redirectToRecipients, "RedirectToRecipients");
		for (let sendSMSAlertToRecipient of this.sendSMSAlertToRecipients) {
			EwsUtilities.ValidateParam(sendSMSAlertToRecipient, "SendSMSAlertToRecipient");
		}
	}

	/**
     * @internal Loads service object from XML.
     *
     * @param   {any}                 jsObject                Json Object converted from XML.
     * @param   {ExchangeService}     service                 The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
		for (let key in jsObject) {
			switch (key) {
				case XmlElementNames.AssignCategories:
					this.assignCategories.LoadFromXmlJsObject(jsObject[key], service);
					break;
				case XmlElementNames.CopyToFolder:
					this.copyToFolder = new FolderId();
					this.copyToFolder.LoadFromXmlJsObject(jsObject[key][XmlElementNames.FolderId], service);
					break;
				case XmlElementNames.Delete:
					this.delete = Convert.toBool(jsObject[key]);
					break;
				case XmlElementNames.ForwardAsAttachmentToRecipients:
					this.forwardAsAttachmentToRecipients.LoadFromXmlJsObject(jsObject[key][XmlElementNames.Address], service);
					break;
				case XmlElementNames.ForwardToRecipients:
					this.forwardToRecipients.LoadFromXmlJsObject(jsObject[key][XmlElementNames.Address], service);
					break;
				case XmlElementNames.MarkImportance:
					this.markImportance = Importance[<string>jsObject[key]];
					break;
				case XmlElementNames.MarkAsRead:
					this.markAsRead = Convert.toBool(jsObject[key]);
					break;
				case XmlElementNames.MoveToFolder:
					this.moveToFolder = new FolderId();
					this.moveToFolder.LoadFromXmlJsObject(jsObject[key][XmlElementNames.FolderId], service)
					break;
				case XmlElementNames.PermanentDelete:
					this.permanentDelete = Convert.toBool(jsObject[key]);
					break;
				case XmlElementNames.RedirectToRecipients:
					this.redirectToRecipients.LoadFromXmlJsObject(jsObject[key][XmlElementNames.Address], service);
					break;
				case XmlElementNames.SendSMSAlertToRecipients:
					let smsRecipientCollection: EmailAddressCollection = new EmailAddressCollection(XmlElementNames.Address);
					smsRecipientCollection.LoadFromXmlJsObject(jsObject[key][XmlElementNames.Address], service);
					this.sendSMSAlertToRecipients = RuleActions.ConvertSMSRecipientsFromEmailAddressCollectionToMobilePhoneCollection(smsRecipientCollection);
					break;
				case XmlElementNames.ServerReplyWithMessage:
					this.serverReplyWithMessage = new ItemId();
					this.serverReplyWithMessage.LoadFromXmlJsObject(jsObject[key][XmlElementNames.ItemId], service);
					break;
				case XmlElementNames.StopProcessingRules:
					this.stopProcessingRules = Convert.toBool(jsObject[key]);
					break;
				default:
					break;
			}
		}
	}

	/**
	 * @internal Writes the elements to XML writer.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
		if (this.AssignCategories.Count > 0) {
			this.AssignCategories.WriteToXml(writer, XmlElementNames.AssignCategories);
		}

		if (this.CopyToFolder != null) {
			writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.CopyToFolder);
			this.CopyToFolder.WriteToXml(writer);
			writer.WriteEndElement();
		}

		if (this.Delete != false) {
			writer.WriteElementValue(
				XmlNamespace.Types,
				XmlElementNames.Delete,
				this.Delete);
		}

		if (this.ForwardAsAttachmentToRecipients.Count > 0) {
			this.ForwardAsAttachmentToRecipients.WriteToXml(writer, XmlElementNames.ForwardAsAttachmentToRecipients);
		}

		if (this.ForwardToRecipients.Count > 0) {
			this.ForwardToRecipients.WriteToXml(writer, XmlElementNames.ForwardToRecipients);
		}

		if (this.MarkImportance) {
			writer.WriteElementValue(
				XmlNamespace.Types,
				XmlElementNames.MarkImportance,
				Importance[this.MarkImportance]);
		}

		if (this.MarkAsRead != false) {
			writer.WriteElementValue(
				XmlNamespace.Types,
				XmlElementNames.MarkAsRead,
				this.MarkAsRead);
		}

		if (this.MoveToFolder != null) {
			writer.WriteStartElement(XmlNamespace.Types, XmlElementNames.MoveToFolder);
			this.MoveToFolder.WriteToXml(writer);
			writer.WriteEndElement();
		}

		if (this.PermanentDelete != false) {
			writer.WriteElementValue(
				XmlNamespace.Types,
				XmlElementNames.PermanentDelete,
				this.PermanentDelete);
		}

		if (this.RedirectToRecipients.Count > 0) {
			this.RedirectToRecipients.WriteToXml(writer, XmlElementNames.RedirectToRecipients);
		}

		if (this.SendSMSAlertToRecipients.length > 0) {
			let emailCollection: EmailAddressCollection = RuleActions.ConvertSMSRecipientsFromMobilePhoneCollectionToEmailAddressCollection(this.SendSMSAlertToRecipients);
			emailCollection.WriteToXml(writer, XmlElementNames.SendSMSAlertToRecipients);
		}

		if (this.ServerReplyWithMessage != null) {
			this.ServerReplyWithMessage.WriteToXml(writer, XmlElementNames.ServerReplyWithMessage);
		}

		if (this.StopProcessingRules != false) {
			writer.WriteElementValue(
				XmlNamespace.Types,
				XmlElementNames.StopProcessingRules,
				this.StopProcessingRules);
		}
	}
}