import StringList = require("./StringList");
import ComplexProperty = require("./ComplexProperty");
import EmailAddressCollection = require("./EmailAddressCollection");
import RulePredicateDateRange = require("./RulePredicateDateRange");
import RulePredicateSizeRange = require("./RulePredicateSizeRange");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
			
 class RulePredicates extends ComplexProperty {
	Categories: StringList;
	ContainsBodyStrings: StringList;
	ContainsHeaderStrings: StringList;
	ContainsRecipientStrings: StringList;
	ContainsSenderStrings: StringList;
	ContainsSubjectOrBodyStrings: StringList;
	ContainsSubjectStrings: StringList;
	FlaggedForAction: any /*Nullable<FlaggedForAction>*/;
	FromAddresses: EmailAddressCollection;
	HasAttachments: boolean;
	Importance: any /*Nullable<Importance>*/;
	IsApprovalRequest: boolean;
	IsAutomaticForward: boolean;
	IsAutomaticReply: boolean;
	IsEncrypted: boolean;
	IsMeetingRequest: boolean;
	IsMeetingResponse: boolean;
	IsNonDeliveryReport: boolean;
	IsPermissionControlled: boolean;
	IsSigned: boolean;
	IsVoicemail: boolean;
	IsReadReceipt: boolean;
	FromConnectedAccounts: StringList;
	ItemClasses: StringList;
	MessageClassifications: StringList;
	NotSentToMe: boolean;
	SentCcMe: boolean;
	SentOnlyToMe: boolean;
	SentToAddresses: EmailAddressCollection;
	SentToMe: boolean;
	SentToOrCcMe: boolean;
	Sensitivity: any /*Nullable<Sensitivity>*/;
	WithinDateRange: RulePredicateDateRange;
	WithinSizeRange: RulePredicateSizeRange;
	private categories: StringList;
	private containsBodyStrings: StringList;
	private containsHeaderStrings: StringList;
	private containsRecipientStrings: StringList;
	private containsSenderStrings: StringList;
	private containsSubjectOrBodyStrings: StringList;
	private containsSubjectStrings: StringList;
	private flaggedForAction: any /*Nullable<FlaggedForAction>*/;
	private fromAddresses: EmailAddressCollection;
	private fromConnectedAccounts: StringList;
	private hasAttachments: boolean;
	private importance: any /*Nullable<Importance>*/;
	private isApprovalRequest: boolean;
	private isAutomaticForward: boolean;
	private isAutomaticReply: boolean;
	private isEncrypted: boolean;
	private isMeetingRequest: boolean;
	private isMeetingResponse: boolean;
	private isNonDeliveryReport: boolean;
	private isPermissionControlled: boolean;
	private isSigned: boolean;
	private isVoicemail: boolean;
	private isReadReceipt: boolean;
	private itemClasses: StringList;
	private messageClassifications: StringList;
	private notSentToMe: boolean;
	private sentCcMe: boolean;
	private sentOnlyToMe: boolean;
	private sentToAddresses: EmailAddressCollection;
	private sentToMe: boolean;
	private sentToOrCcMe: boolean;
	private sensitivity: any /*Nullable<Sensitivity>*/;
	private withinDateRange: RulePredicateDateRange;
	private withinSizeRange: RulePredicateSizeRange;
	InternalValidate(): void{ throw new Error("RulePredicates.ts - InternalValidate : Not implemented.");}
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("RulePredicates.ts - TryReadElementFromXmlJsObject : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("RulePredicates.ts - WriteElementsToXml : Not implemented.");}
}
export = RulePredicates;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
