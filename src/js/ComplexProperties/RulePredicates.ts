import {Convert, hasValue} from "../ExtensionMethods";
import {EmailAddressCollection} from "./EmailAddressCollection";
import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {EwsUtilities} from "../Core/EwsUtilities";
import {ExchangeService} from "../Core/ExchangeService";
import {FlaggedForAction} from "../Enumerations/FlaggedForAction";
import {Importance} from "../Enumerations/Importance";
import {RulePredicateDateRange} from "./RulePredicateDateRange";
import {RulePredicateSizeRange} from "./RulePredicateSizeRange";
import {Sensitivity} from "../Enumerations/Sensitivity";
import {StringList} from "./StringList";
import {XmlElementNames} from "../Core/XmlElementNames";
import {XmlNamespace} from "../Enumerations/XmlNamespace";

import {ComplexProperty} from "./ComplexProperty";
/**
 * Represents the set of conditions and exceptions available for a rule.
 * 
 * @sealed
 */
export class RulePredicates extends ComplexProperty {

	/**
	 * The HasCategories predicate.
	 */
	private categories: StringList = null;
	/**
	 * The ContainsBodyStrings predicate.
	 */
	private containsBodyStrings: StringList = null;
	/**
	 * The ContainsHeaderStrings predicate.
	 */
	private containsHeaderStrings: StringList = null;
	/**
	 * The ContainsRecipientStrings predicate.
	 */
	private containsRecipientStrings: StringList = null;
	/**
	 * The ContainsSenderStrings predicate.
	 */
	private containsSenderStrings: StringList = null;
	/**
	 * The ContainsSubjectOrBodyStrings predicate.
	 */
	private containsSubjectOrBodyStrings: StringList = null;
	/**
	 * The ContainsSubjectStrings predicate.
	 */
	private containsSubjectStrings: StringList = null;
	/**
	 * The FlaggedForAction predicate.
	 */
	private flaggedForAction: FlaggedForAction = null; //Nullable
	/**
	 * The FromAddresses predicate.
	 */
	private fromAddresses: EmailAddressCollection = null;
	/**
	 * The FromConnectedAccounts predicate.
	 */
	private fromConnectedAccounts: StringList = null;
	/**
	 * The HasAttachments predicate.
	 */
	private hasAttachments: boolean = false;
	/**
	 * The Importance predicate.
	 */
	private importance: Importance = null; //Nullable
	/**
	 * The IsApprovalRequest predicate.
	 */
	private isApprovalRequest: boolean = false;
	/**
	 * The IsAutomaticForward predicate.
	 */
	private isAutomaticForward: boolean = false;
	/**
	 * The IsAutomaticReply predicate.
	 */
	private isAutomaticReply: boolean = false;
	/**
	 * The IsEncrypted predicate.
	 */
	private isEncrypted: boolean = false;
	/**
	 * The IsMeetingRequest predicate.
	 */
	private isMeetingRequest: boolean = false;
	/**
	 * The IsMeetingResponse predicate.
	 */
	private isMeetingResponse: boolean = false;
	/**
	 * The IsNDR predicate.
	 */
	private isNonDeliveryReport: boolean = false;
	/**
	 * The IsPermissionControlled predicate.
	 */
	private isPermissionControlled: boolean = false;
	/**
	 * The IsSigned predicate.
	 */
	private isSigned: boolean = false;
	/**
	 * The IsVoicemail predicate.
	 */
	private isVoicemail: boolean = false;
	/**
	 * The IsReadReceipt predicate.
	 */
	private isReadReceipt: boolean = false;
	/**
	 * The ItemClasses predicate.
	 */
	private itemClasses: StringList = null;
	/**
	 * The MessageClassifications predicate.
	 */
	private messageClassifications: StringList = null;
	/**
	 * The NotSentToMe predicate.
	 */
	private notSentToMe: boolean = false;
	/**
	 * The SentCcMe predicate.
	 */
	private sentCcMe: boolean = false;
	/**
	 * The SentOnlyToMe predicate.
	 */
	private sentOnlyToMe: boolean = false;
	/**
	 * The SentToAddresses predicate.
	 */
	private sentToAddresses: EmailAddressCollection = null;
	/**
	 * The SentToMe predicate.
	 */
	private sentToMe: boolean = false;
	/**
	 * The SentToOrCcMe predicate.
	 */
	private sentToOrCcMe: boolean = false;
	/**
	 * The Sensitivity predicate.
	 */
	private sensitivity: Sensitivity = null; //Nullable
	/**
	 * The WithinDateRange predicate.
	 */
	private withinDateRange: RulePredicateDateRange = null;
	/**
	 * The WithinSizeRange predicate.
	 */
	private withinSizeRange: RulePredicateSizeRange = null;

	/**
	 * Gets the categories that an incoming message should be stamped with for the condition or exception to apply. 
	 * To disable this predicate, empty the list.
	 */
	get Categories(): StringList {
		return this.categories;
	}

	/**
	 * Gets the strings that should appear in the body of incoming messages for the condition or exception to apply. 
	 * To disable this predicate, empty the list.
	 */
	get ContainsBodyStrings(): StringList {
		return this.containsBodyStrings;
	}

	/**
	 * Gets the strings that should appear in the headers of incoming messages for the condition or exception to apply. 
	 * To disable this predicate, empty the list.
	 */
	get ContainsHeaderStrings(): StringList {
		return this.containsHeaderStrings;
	}

	/**
	 * Gets the strings that should appear in either the To or Cc fields of incoming messages for the condition or exception to apply. 
	 * To disable this predicate, empty the list.
	 */
	get ContainsRecipientStrings(): StringList {
		return this.containsRecipientStrings;
	}

	/**
	 * Gets the strings that should appear in the From field of incoming messages for the condition or exception to apply. 
	 * To disable this predicate, empty the list.
	 */
	get ContainsSenderStrings(): StringList {
		return this.containsSenderStrings;
	}

	/**
	 * Gets the strings that should appear in either the body or the subject of incoming messages for the condition or exception to apply.
	 * To disable this predicate, empty the list.
	 */
	get ContainsSubjectOrBodyStrings(): StringList {
		return this.containsSubjectOrBodyStrings;
	}

	/**
	 * Gets the strings that should appear in the subject of incoming messages for the condition or exception to apply. 
	 * To disable this predicate, empty the list.
	 */
	get ContainsSubjectStrings(): StringList {
		return this.containsSubjectStrings;
	}

	/**
	 * @Nullable Gets or sets the flag for action value that should appear on incoming messages for the condition or execption to apply. 
	 * To disable this predicate, set it to null. 
	 */
	get FlaggedForAction(): FlaggedForAction {
		return this.flaggedForAction;
	}
	set FlaggedForAction(value: FlaggedForAction) {
		this.SetFieldValue<FlaggedForAction>({ getValue: () => this.flaggedForAction, setValue: (updateValue) => { this.flaggedForAction = updateValue } }, value);
	}

	/**
	 * Gets the e-mail addresses of the senders of incoming messages for the condition or exception to apply. 
	 * To disable this predicate, empty the list.
	 */
	get FromAddresses(): EmailAddressCollection {
		return this.fromAddresses;
	}

	/**
	 * Gets or sets a value indicating whether incoming messages must have attachments for the condition or exception to apply. 
	 */
	get HasAttachments(): boolean {
		return this.hasAttachments;
	}
	set HasAttachments(value: boolean) {
		this.SetFieldValue<boolean>({ getValue: () => this.hasAttachments, setValue: (updateValue) => { this.hasAttachments = updateValue } }, value);
	}

	/**
	 * @Nullable Gets or sets the importance that should be stamped on incoming messages for the condition or exception to apply. 
	 * To disable this predicate, set it to null.
	 */
	get Importance(): Importance {
		return this.importance;
	}
	set Importance(value: Importance) {
		this.SetFieldValue<Importance>({ getValue: () => this.importance, setValue: (updateValue) => { this.importance = updateValue } }, value);
	}

	/**
	 * Gets or sets a value indicating whether incoming messages must be approval requests for the condition or exception to apply. 
	 */
	get IsApprovalRequest(): boolean {
		return this.isApprovalRequest;
	}
	set IsApprovalRequest(value: boolean) {
		this.SetFieldValue<boolean>({ getValue: () => this.isApprovalRequest, setValue: (updateValue) => { this.isApprovalRequest = updateValue } }, value);
	}

	/**
	 * Gets or sets a value indicating whether incoming messages must be automatic forwards for the condition or exception to apply.
	 */
	get IsAutomaticForward(): boolean {
		return this.isAutomaticForward;
	}
	set IsAutomaticForward(value: boolean) {
		this.SetFieldValue<boolean>({ getValue: () => this.isAutomaticForward, setValue: (updateValue) => { this.isAutomaticForward = updateValue } }, value);
	}

	/**
	 * Gets or sets a value indicating whether incoming messages must be automatic replies for the condition or exception to apply. 
	 */
	get IsAutomaticReply(): boolean {
		return this.isAutomaticReply;
	}
	set IsAutomaticReply(value: boolean) {
		this.SetFieldValue<boolean>({ getValue: () => this.isAutomaticReply, setValue: (updateValue) => { this.isAutomaticReply = updateValue } }, value);
	}

	/**
	 * Gets or sets a value indicating whether incoming messages must be S/MIME encrypted for the condition or exception to apply.
	 */
	get IsEncrypted(): boolean {
		return this.isEncrypted;
	}
	set IsEncrypted(value: boolean) {
		this.SetFieldValue<boolean>({ getValue: () => this.isEncrypted, setValue: (updateValue) => { this.isEncrypted = updateValue } }, value);
	}

	/**
	 * Gets or sets a value indicating whether incoming messages must be meeting requests for the condition or exception to apply. 
	 */
	get IsMeetingRequest(): boolean {
		return this.isMeetingRequest;
	}
	set IsMeetingRequest(value: boolean) {
		this.SetFieldValue<boolean>({ getValue: () => this.isMeetingRequest, setValue: (updateValue) => { this.isMeetingRequest = updateValue } }, value);
	}

	/**
	 * Gets or sets a value indicating whether incoming messages must be meeting responses for the condition or exception to apply. 
	 */
	get IsMeetingResponse(): boolean {
		return this.isMeetingResponse;
	}
	set IsMeetingResponse(value: boolean) {
		this.SetFieldValue<boolean>({ getValue: () => this.isMeetingResponse, setValue: (updateValue) => { this.isMeetingResponse = updateValue } }, value);
	}

	/**
	 * Gets or sets a value indicating whether incoming messages must be non-delivery reports (NDR) for the condition or exception to apply.
	 */
	get IsNonDeliveryReport(): boolean {
		return this.isNonDeliveryReport;
	}
	set IsNonDeliveryReport(value: boolean) {
		this.SetFieldValue<boolean>({ getValue: () => this.isNonDeliveryReport, setValue: (updateValue) => { this.isNonDeliveryReport = updateValue } }, value);
	}

	/**
	 * Gets or sets a value indicating whether incoming messages must be permission controlled (RMS protected) for the condition or exception to apply. 
	 */
	get IsPermissionControlled(): boolean {
		return this.isPermissionControlled;
	}
	set IsPermissionControlled(value: boolean) {
		this.SetFieldValue<boolean>({ getValue: () => this.isPermissionControlled, setValue: (updateValue) => { this.isPermissionControlled = updateValue } }, value);
	}

	/**
	 * Gets or sets a value indicating whether incoming messages must be S/MIME signed for the condition or exception to apply. 
	 */
	get IsSigned(): boolean {
		return this.isSigned;
	}
	set IsSigned(value: boolean) {
		this.SetFieldValue<boolean>({ getValue: () => this.isSigned, setValue: (updateValue) => { this.isSigned = updateValue } }, value);
	}

	/**
	 * Gets or sets a value indicating whether incoming messages must be voice mails for the condition or exception to apply. 
	 */
	get IsVoicemail(): boolean {
		return this.isVoicemail;
	}
	set IsVoicemail(value: boolean) {
		this.SetFieldValue<boolean>({ getValue: () => this.isVoicemail, setValue: (updateValue) => { this.isVoicemail = updateValue } }, value);
	}

	/**
	 * Gets or sets a value indicating whether incoming messages must be read receipts for the condition or exception to apply. 
	 */
	get IsReadReceipt(): boolean {
		return this.isReadReceipt;
	}
	set IsReadReceipt(value: boolean) {
		this.SetFieldValue<boolean>({ getValue: () => this.isReadReceipt, setValue: (updateValue) => { this.isReadReceipt = updateValue } }, value);
	}

	/**
	 * Gets the e-mail account names from which incoming messages must have been aggregated for the condition or exception to apply. 
	 * To disable this predicate, empty the list.
	 */
	get FromConnectedAccounts(): StringList {
		return this.fromConnectedAccounts;
	}

	/**
	 * Gets the item classes that must be stamped on incoming messages for the condition or exception to apply. 
	 * To disable this predicate, empty the list.
	 */
	get ItemClasses(): StringList {
		return this.itemClasses;
	}

	/**
	 * Gets the message classifications that must be stamped on incoming messages for the condition or exception to apply. 
	 * To disable this predicate, empty the list.
	 */
	get MessageClassifications(): StringList {
		return this.messageClassifications;
	}

	/**
	 * Gets or sets a value indicating whether the owner of the mailbox must NOT be a To recipient of the incoming messages for the condition or exception to apply.
	 */
	get NotSentToMe(): boolean {
		return this.notSentToMe;
	}
	set NotSentToMe(value: boolean) {
		this.SetFieldValue<boolean>({ getValue: () => this.notSentToMe, setValue: (updateValue) => { this.notSentToMe = updateValue } }, value);
	}

	/**
	 * Gets or sets a value indicating whether the owner of the mailbox must be a Cc recipient of incoming messages for the condition or exception to apply.
	 */
	get SentCcMe(): boolean {
		return this.sentCcMe;
	}
	set SentCcMe(value: boolean) {
		this.SetFieldValue<boolean>({ getValue: () => this.sentCcMe, setValue: (updateValue) => { this.sentCcMe = updateValue } }, value);
	}

	/**
	 * Gets or sets a value indicating whether the owner of the mailbox must be the only To recipient of incoming messages for the condition or exception to apply.
	 */
	get SentOnlyToMe(): boolean {
		return this.sentOnlyToMe;
	}
	set SentOnlyToMe(value: boolean) {
		this.SetFieldValue<boolean>({ getValue: () => this.sentOnlyToMe, setValue: (updateValue) => { this.sentOnlyToMe = updateValue } }, value);
	}

	/**
	 * Gets the e-mail addresses incoming messages must have been sent to for the condition or exception to apply. 
	 * To disable this predicate, empty the list.
	 */
	get SentToAddresses(): EmailAddressCollection {
		return this.sentToAddresses;
	}

	/**
	 * Gets or sets a value indicating whether the owner of the mailbox must be a To recipient of incoming messages for the condition or exception to apply. 
	 */
	get SentToMe(): boolean {
		return this.sentToMe;
	}
	set SentToMe(value: boolean) {
		this.SetFieldValue<boolean>({ getValue: () => this.sentToMe, setValue: (updateValue) => { this.sentToMe = updateValue } }, value);
	}

	/**
	 * Gets or sets a value indicating whether the owner of the mailbox must be either a To or Cc recipient of incoming messages for the condition or exception to apply.
	 */
	get SentToOrCcMe(): boolean {
		return this.sentToOrCcMe;
	}
	set SentToOrCcMe(value: boolean) {
		this.SetFieldValue<boolean>({ getValue: () => this.sentToOrCcMe, setValue: (updateValue) => { this.sentToOrCcMe = updateValue } }, value);
	}

	/**
	 * @Nullable Gets or sets the sensitivity that must be stamped on incoming messages for the condition or exception to apply. 
	 * To disable this predicate, set it to null.
	 */
	get Sensitivity(): Sensitivity {
		return this.sensitivity;
	}
	set Sensitivity(value: Sensitivity) {
		this.SetFieldValue<Sensitivity>({ getValue: () => this.sensitivity, setValue: (updateValue) => { this.sensitivity = updateValue } }, value);
	}

	/**
	 * Gets the date range within which incoming messages must have been received for the condition or exception to apply. 
	 * To disable this predicate, set both its Start and End properties to null.
	 */
	get WithinDateRange(): RulePredicateDateRange {
		return this.withinDateRange;
	}

	/**
	 * Gets the minimum and maximum sizes incoming messages must have for the condition or exception to apply. 
	 * To disable this predicate, set both its MinimumSize and MaximumSize properties to null.
	 */
	get WithinSizeRange(): RulePredicateSizeRange {
		return this.withinSizeRange;
	}

	/**
	 * @internal Initializes a new instance of the **RulePredicates** class.
	 */
	constructor() {
		super();
		this.categories = new StringList();
		this.containsBodyStrings = new StringList();
		this.containsHeaderStrings = new StringList();
		this.containsRecipientStrings = new StringList();
		this.containsSenderStrings = new StringList();
		this.containsSubjectOrBodyStrings = new StringList();
		this.containsSubjectStrings = new StringList();
		this.fromAddresses = new EmailAddressCollection(XmlElementNames.Address);
		this.fromConnectedAccounts = new StringList();
		this.itemClasses = new StringList();
		this.messageClassifications = new StringList();
		this.sentToAddresses = new EmailAddressCollection(XmlElementNames.Address);
		this.withinDateRange = new RulePredicateDateRange();
		this.withinSizeRange = new RulePredicateSizeRange();
	}

	/**
	 * @internal Validates this instance.
	 */
	InternalValidate(): void {
		super.InternalValidate();
		EwsUtilities.ValidateParam(this.fromAddresses, "FromAddresses");
		EwsUtilities.ValidateParam(this.sentToAddresses, "SentToAddresses");
		EwsUtilities.ValidateParam(this.withinDateRange, "WithinDateRange");
		EwsUtilities.ValidateParam(this.withinSizeRange, "WithinSizeRange");
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
				case XmlElementNames.Categories:
                    this.categories.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames.ContainsBodyStrings:
                    this.containsBodyStrings.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames.ContainsHeaderStrings:
                    this.containsHeaderStrings.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames.ContainsRecipientStrings:
                    this.containsRecipientStrings.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames.ContainsSenderStrings:
                    this.containsSenderStrings.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames.ContainsSubjectOrBodyStrings:
                    this.containsSubjectOrBodyStrings.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames.ContainsSubjectStrings:
                    this.containsSubjectStrings.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames.FlaggedForAction:
                    this.flaggedForAction = FlaggedForAction[<string>jsObject[key]];
                    break;
                case XmlElementNames.FromAddresses:
                    this.fromAddresses.CreateFromXmlJsObjectCollection(jsObject[key][XmlElementNames.Address], service);
                    break;
                case XmlElementNames.FromConnectedAccounts:
                    this.fromConnectedAccounts.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames.HasAttachments:
                    this.hasAttachments = Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames.Importance:
                    this.importance = Importance[<string>jsObject[key]];
                    break;
                case XmlElementNames.IsApprovalRequest:
                    this.isApprovalRequest = Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames.IsAutomaticForward:
                    this.isAutomaticForward = Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames.IsAutomaticReply:
                    this.isAutomaticReply = Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames.IsEncrypted:
                    this.isEncrypted = Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames.IsMeetingRequest:
                    this.isMeetingRequest = Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames.IsMeetingResponse:
                    this.isMeetingResponse = Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames.IsNDR:
                    this.isNonDeliveryReport = Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames.IsPermissionControlled:
                    this.isPermissionControlled = Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames.IsSigned:
                    this.isSigned = Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames.IsVoicemail:
                    this.isVoicemail = Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames.IsReadReceipt:
                    this.isReadReceipt = Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames.ItemClasses:
                    this.itemClasses.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames.MessageClassifications:
                    this.messageClassifications.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames.NotSentToMe:
                    this.notSentToMe = Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames.SentCcMe:
                    this.sentCcMe = Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames.SentOnlyToMe:
                    this.sentOnlyToMe = Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames.SentToAddresses:
                    this.sentToAddresses.CreateFromXmlJsObjectCollection(jsObject[key][XmlElementNames.Address], service);
                    break;
                case XmlElementNames.SentToMe:
                    this.sentToMe = Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames.SentToOrCcMe:
                    this.sentToOrCcMe = Convert.toBool(jsObject[key]);
                    break;
                case XmlElementNames.Sensitivity:
                    this.sensitivity = Sensitivity[<string>jsObject[key]];
                    break;
                case XmlElementNames.WithinDateRange:
                    this.withinDateRange.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames.WithinSizeRange:
                    this.withinSizeRange.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                default:
                    break
			}
		}
	}

	/**
	 * @internal Writes the elements to XML writer.
	 *
	 * @param   {EwsServiceXmlWriter}   writer   The writer.
	 */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
		if (this.Categories.Count > 0) {
			this.Categories.WriteToXml(writer, XmlElementNames.Categories);
		}

		if (this.ContainsBodyStrings.Count > 0) {
			this.ContainsBodyStrings.WriteToXml(writer, XmlElementNames.ContainsBodyStrings);
		}

		if (this.ContainsHeaderStrings.Count > 0) {
			this.ContainsHeaderStrings.WriteToXml(writer, XmlElementNames.ContainsHeaderStrings);
		}

		if (this.ContainsRecipientStrings.Count > 0) {
			this.ContainsRecipientStrings.WriteToXml(writer, XmlElementNames.ContainsRecipientStrings);
		}

		if (this.ContainsSenderStrings.Count > 0) {
			this.ContainsSenderStrings.WriteToXml(writer, XmlElementNames.ContainsSenderStrings);
		}

		if (this.ContainsSubjectOrBodyStrings.Count > 0) {
			this.ContainsSubjectOrBodyStrings.WriteToXml(writer, XmlElementNames.ContainsSubjectOrBodyStrings);
		}

		if (this.ContainsSubjectStrings.Count > 0) {
			this.ContainsSubjectStrings.WriteToXml(writer, XmlElementNames.ContainsSubjectStrings);
		}

		if (hasValue(this.FlaggedForAction)) {
			writer.WriteElementValue(
				XmlNamespace.Types,
				XmlElementNames.FlaggedForAction,
				FlaggedForAction[this.FlaggedForAction]);
		}

		if (this.FromAddresses.Count > 0) {
			this.FromAddresses.WriteToXml(writer, XmlElementNames.FromAddresses);
		}

		if (this.FromConnectedAccounts.Count > 0) {
			this.FromConnectedAccounts.WriteToXml(writer, XmlElementNames.FromConnectedAccounts);
		}

		if (this.HasAttachments != false) {
			writer.WriteElementValue(
				XmlNamespace.Types,
				XmlElementNames.HasAttachments,
				this.HasAttachments);
		}

		if (hasValue(this.Importance)) {
			writer.WriteElementValue(
				XmlNamespace.Types,
				XmlElementNames.Importance,
				Importance[this.Importance]);
		}

		if (this.IsApprovalRequest != false) {
			writer.WriteElementValue(
				XmlNamespace.Types,
				XmlElementNames.IsApprovalRequest,
				this.IsApprovalRequest);
		}

		if (this.IsAutomaticForward != false) {
			writer.WriteElementValue(
				XmlNamespace.Types,
				XmlElementNames.IsAutomaticForward,
				this.IsAutomaticForward);
		}

		if (this.IsAutomaticReply != false) {
			writer.WriteElementValue(
				XmlNamespace.Types,
				XmlElementNames.IsAutomaticReply,
				this.IsAutomaticReply);
		}

		if (this.IsEncrypted != false) {
			writer.WriteElementValue(
				XmlNamespace.Types,
				XmlElementNames.IsEncrypted,
				this.IsEncrypted);
		}

		if (this.IsMeetingRequest != false) {
			writer.WriteElementValue(
				XmlNamespace.Types,
				XmlElementNames.IsMeetingRequest,
				this.IsMeetingRequest);
		}

		if (this.IsMeetingResponse != false) {
			writer.WriteElementValue(
				XmlNamespace.Types,
				XmlElementNames.IsMeetingResponse,
				this.IsMeetingResponse);
		}

		if (this.IsNonDeliveryReport != false) {
			writer.WriteElementValue(
				XmlNamespace.Types,
				XmlElementNames.IsNDR,
				this.IsNonDeliveryReport);
		}

		if (this.IsPermissionControlled != false) {
			writer.WriteElementValue(
				XmlNamespace.Types,
				XmlElementNames.IsPermissionControlled,
				this.IsPermissionControlled);
		}

		if (this.isReadReceipt != false) {
			writer.WriteElementValue(
				XmlNamespace.Types,
				XmlElementNames.IsReadReceipt,
				this.IsReadReceipt);
		}

		if (this.IsSigned != false) {
			writer.WriteElementValue(
				XmlNamespace.Types,
				XmlElementNames.IsSigned,
				this.IsSigned);
		}

		if (this.IsVoicemail != false) {
			writer.WriteElementValue(
				XmlNamespace.Types,
				XmlElementNames.IsVoicemail,
				this.IsVoicemail);
		}

		if (this.ItemClasses.Count > 0) {
			this.ItemClasses.WriteToXml(writer, XmlElementNames.ItemClasses);
		}

		if (this.MessageClassifications.Count > 0) {
			this.MessageClassifications.WriteToXml(writer, XmlElementNames.MessageClassifications);
		}

		if (this.NotSentToMe != false) {
			writer.WriteElementValue(
				XmlNamespace.Types,
				XmlElementNames.NotSentToMe,
				this.NotSentToMe);
		}

		if (this.SentCcMe != false) {
			writer.WriteElementValue(
				XmlNamespace.Types,
				XmlElementNames.SentCcMe,
				this.SentCcMe);
		}

		if (this.SentOnlyToMe != false) {
			writer.WriteElementValue(
				XmlNamespace.Types,
				XmlElementNames.SentOnlyToMe,
				this.SentOnlyToMe);
		}

		if (this.SentToAddresses.Count > 0) {
			this.SentToAddresses.WriteToXml(writer, XmlElementNames.SentToAddresses);
		}

		if (this.SentToMe != false) {
			writer.WriteElementValue(
				XmlNamespace.Types,
				XmlElementNames.SentToMe,
				this.SentToMe);
		}

		if (this.SentToOrCcMe != false) {
			writer.WriteElementValue(
				XmlNamespace.Types,
				XmlElementNames.SentToOrCcMe,
				this.SentToOrCcMe);
		}

		if (hasValue(this.Sensitivity)) {
			writer.WriteElementValue(
				XmlNamespace.Types,
				XmlElementNames.Sensitivity,
				Sensitivity[this.Sensitivity]);
		}

		if (this.WithinDateRange.Start || this.WithinDateRange.End) {
			this.WithinDateRange.WriteToXml(writer, XmlElementNames.WithinDateRange);
		}

		if (this.WithinSizeRange.MaximumSize || this.WithinSizeRange.MinimumSize) {
			this.WithinSizeRange.WriteToXml(writer, XmlElementNames.WithinSizeRange);
		}
	}
}