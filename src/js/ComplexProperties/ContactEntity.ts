import {ContactPhoneEntityCollection} from "./ContactPhoneEntityCollection";
import {ExchangeService} from "../Core/ExchangeService";
import {StringList} from "./StringList";
import {XmlElementNames} from "../Core/XmlElementNames";

import {ExtractedEntity} from "./ExtractedEntity";
/**
 * Represents an ContactEntity object.
 */
export class ContactEntity extends ExtractedEntity {

    /**
     * Gets the contact entity PersonName.
     */
    PersonName: string = null;

    /**
     * Gets the contact entity BusinessName.
     */
    BusinessName: string = null;

    /**
     * Gets the contact entity PhoneNumbers.
     */
    PhoneNumbers: ContactPhoneEntityCollection = null;

    /**
     * Gets the contact entity Urls.
     */
    Urls: StringList = null;

    /**
     * Gets the contact entity EmailAddresses.
     */
    EmailAddresses: StringList = null;

    /**
     * Gets the contact entity Addresses.
     */
    Addresses: StringList = null;

    /**
     * Gets the contact entity ContactString.
     */
    ContactString: string = null;

    /**
     * Initializes a new instance of the **ContactEntity** class.
     */
    constructor() {
        super();
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        super.LoadFromXmlJsObject(jsObject, service);

        for (let key in jsObject) {
            switch (key) {
                case XmlElementNames.NlgPersonName:
                    this.PersonName = jsObject[key];
                    break;
                case XmlElementNames.NlgBusinessName:
                    this.BusinessName = jsObject[key];
                    break;
                case XmlElementNames.NlgPhoneNumbers:
                    this.PhoneNumbers = new ContactPhoneEntityCollection();
                    this.PhoneNumbers.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames.NlgUrls:
                    this.Urls = new StringList(XmlElementNames.NlgUrl);
                    this.Urls.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames.NlgEmailAddresses:
                    this.EmailAddresses = new StringList(XmlElementNames.NlgEmailAddress);
                    this.EmailAddresses.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames.NlgAddresses:
                    this.EmailAddresses = new StringList(XmlElementNames.NlgEmailAddress);
                    this.Addresses.LoadFromXmlJsObject(jsObject[key], service);
                    break;
                case XmlElementNames.NlgContactString:
                    this.ContactString = jsObject[key];
                    break;
                default:
                    break;
            }
        }
    }
}