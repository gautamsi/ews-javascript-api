import {AddressEntityCollection} from "./AddressEntityCollection";
import {MeetingSuggestionCollection} from "./MeetingSuggestionCollection";
import {TaskSuggestionCollection} from "./TaskSuggestionCollection";
import {EmailAddressEntityCollection} from "./EmailAddressEntityCollection";
import {XmlNamespace} from "../Enumerations/XmlNamespace";
import {ExchangeService} from "../Core/ExchangeService";
import {XmlElementNames} from "../Core/XmlElementNames";
import {ContactEntityCollection} from "./ContactEntityCollection";
import {UrlEntityCollection} from "./UrlEntityCollection";
import {PhoneEntityCollection} from "./PhoneEntityCollection";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";

import {ComplexProperty} from "./ComplexProperty";
/**
 * Represents an EntityExtractionResult object.
 */
export class EntityExtractionResult extends ComplexProperty {

    /**
     * Gets the extracted Addresses.
     */
    Addresses: AddressEntityCollection = null;

    /**
     * Gets the extracted MeetingSuggestions.
     */
    MeetingSuggestions: MeetingSuggestionCollection = null;

    /**
     * Gets the extracted TaskSuggestions.
     */
    TaskSuggestions: TaskSuggestionCollection = null;

    /**
     * Gets the extracted EmailAddresses.
     */
    EmailAddresses: EmailAddressEntityCollection = null;

    /**
     * Gets the extracted Contacts.
     */
    Contacts: ContactEntityCollection = null;

    /**
     * Gets the extracted Urls.
     */
    Urls: UrlEntityCollection = null;

    /**
     * Gets the extracted PhoneNumbers
     */
    PhoneNumbers: PhoneEntityCollection = null;

    /**
     * @internal Initializes a new instance of the **EntityExtractionResult** class.
     */
    constructor() {
        super();
        this.Namespace = XmlNamespace.Types;
    }

    /**
     * @internal Read element from XMLJsObject.
     *
     * @param   {}   jsObject   xmljsonObject
     * @return  {ExchangeService} the ExchangeService
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        for (let key in jsObject) {
            if (jsObject.hasOwnProperty(key)) {
                switch (key) {
                    case XmlElementNames.NlgAddresses:
                        this.Addresses = new AddressEntityCollection();
                        this.Addresses.LoadFromXmlJsObject(jsObject[key], service);
                        break;

                    case XmlElementNames.NlgMeetingSuggestions:
                        this.MeetingSuggestions = new MeetingSuggestionCollection();
                        this.MeetingSuggestions.LoadFromXmlJsObject(jsObject[key], service);
                        break;

                    case XmlElementNames.NlgTaskSuggestions:
                        this.TaskSuggestions = new TaskSuggestionCollection();
                        this.TaskSuggestions.LoadFromXmlJsObject(jsObject[key], service);
                        break;

                    case XmlElementNames.NlgEmailAddresses:
                        this.EmailAddresses = new EmailAddressEntityCollection();
                        this.EmailAddresses.LoadFromXmlJsObject(jsObject[key], service);
                        break;

                    case XmlElementNames.NlgContacts:
                        this.Contacts = new ContactEntityCollection();
                        this.Contacts.LoadFromXmlJsObject(jsObject[key], service);
                        break;

                    case XmlElementNames.NlgUrls:
                        this.Urls = new UrlEntityCollection();
                        this.Urls.LoadFromXmlJsObject(jsObject[key], service);
                        break;

                    case XmlElementNames.NlgPhoneNumbers:
                        this.PhoneNumbers = new PhoneEntityCollection();
                        this.PhoneNumbers.LoadFromXmlJsObject(jsObject[key], service);
                        break;

                    default:
                        break;
                }
            }
        }
    }
}