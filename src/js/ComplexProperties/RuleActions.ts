import StringList = require("./StringList");
import ItemId = require("./ItemId");
import ComplexProperty = require("./ComplexProperty");
import FolderId = require("./FolderId");
import EmailAddressCollection = require("./EmailAddressCollection");
import MobilePhone = require("../Misc/MobilePhone");
import ExchangeService = require("../Core/ExchangeService");
import JsonObject = require("../Core/JsonObject");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
			
 class RuleActions extends ComplexProperty {
	AssignCategories: StringList;
	CopyToFolder: FolderId;
	Delete: boolean;
	ForwardAsAttachmentToRecipients: EmailAddressCollection;
	ForwardToRecipients: EmailAddressCollection;
	MarkImportance: any /*Nullable<Importance>*/;
	MarkAsRead: boolean;
	MoveToFolder: FolderId;
	PermanentDelete: boolean;
	RedirectToRecipients: EmailAddressCollection;
	SendSMSAlertToRecipients: MobilePhone[] /*System.Collections.ObjectModel.Collection<MobilePhone>*/;
	ServerReplyWithMessage: ItemId;
	StopProcessingRules: boolean;
	private assignCategories: StringList;
	private copyToFolder: FolderId;
	private delete: boolean;
	private forwardAsAttachmentToRecipients: EmailAddressCollection;
	private forwardToRecipients: EmailAddressCollection;
	private markImportance: any /*Nullable<Importance>*/;
	private markAsRead: boolean;
	private moveToFolder: FolderId;
	private permanentDelete: boolean;
	private redirectToRecipients: EmailAddressCollection;
	private sendSMSAlertToRecipients: MobilePhone[] /*System.Collections.ObjectModel.Collection<MobilePhone>*/;
	private serverReplyWithMessage: ItemId;
	private stopProcessingRules: boolean;
	ConvertSMSRecipientsFromEmailAddressCollectionToMobilePhoneCollection(emailCollection: EmailAddressCollection): MobilePhone[] /*System.Collections.ObjectModel.Collection<MobilePhone>*/{ throw new Error("RuleActions.ts - ConvertSMSRecipientsFromEmailAddressCollectionToMobilePhoneCollection : Not implemented.");}
	ConvertSMSRecipientsFromMobilePhoneCollectionToEmailAddressCollection(recipientCollection: MobilePhone[] /*System.Collections.ObjectModel.Collection<MobilePhone>*/): EmailAddressCollection{ throw new Error("RuleActions.ts - ConvertSMSRecipientsFromMobilePhoneCollectionToEmailAddressCollection : Not implemented.");}
	InternalToJson(service: ExchangeService): any{ throw new Error("RuleActions.ts - InternalToJson : Not implemented.");}
	InternalValidate(): void{ throw new Error("RuleActions.ts - InternalValidate : Not implemented.");}
	LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): void{ throw new Error("RuleActions.ts - LoadFromJson : Not implemented.");}
	ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): boolean{ throw new Error("RuleActions.ts - TryReadElementFromXmlJsObject : Not implemented.");}
	WriteElementsToXml(writer: EwsServiceXmlWriter): void{ throw new Error("RuleActions.ts - WriteElementsToXml : Not implemented.");}
}
export = RuleActions;


//------------modulename->Microsoft.Exchange.WebServices.Data------------


			
