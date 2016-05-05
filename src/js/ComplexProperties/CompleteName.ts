import {EwsServiceXmlWriter} from "../Core/EwsServiceXmlWriter";
import {ExchangeService} from "../Core/ExchangeService";
import {XmlElementNames} from "../Core/XmlElementNames";
import {XmlNamespace} from "../Enumerations/XmlNamespace";

import {ComplexProperty} from "./ComplexProperty";
/**
 * Represents the complete name of a contact.
 */
export class CompleteName extends ComplexProperty {

    private title: string = null;
    private givenName: string = null;
    private middleName: string = null;
    private surname: string = null;
    private suffix: string = null;
    private initials: string = null;
    private fullName: string = null;
    private nickname: string = null;
    private yomiGivenName: string = null;
    private yomiSurname: string = null;

    /**
     * Gets the contact's title.
     */
    get Title(): string {
        return this.title;
    }

    /**
     * Gets the given name (first name) of the contact.
     */
    get GivenName(): string {
        return this.givenName;
    }

    /**
     * Gets the middle name of the contact.
     */
    get MiddleName(): string {
        return this.middleName;
    }

    /**
     * Gets the surname (last name) of the contact.
     */
    get Surname(): string {
        return this.surname;
    }

    /**
     * Gets the suffix of the contact.
     */
    get Suffix(): string {
        return this.suffix;
    }

    /**
     * Gets the initials of the contact.
     */
    get Initials(): string {
        return this.initials;
    }

    /**
     * Gets the full name of the contact.
     */
    get FullName(): string {
        return this.fullName;
    }

    /**
     * Gets the nickname of the contact.
     */
    get NickName(): string {
        return this.nickname;
    }

    /**
     * Gets the Yomi given name (first name) of the contact.
     */
    get YomiGivenName(): string {
        return this.yomiGivenName;
    }

    /**
     * Gets the Yomi surname (last name) of the contact.
     */
    get YomiSurname(): string {
        return this.yomiSurname;
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     */
    LoadFromXmlJsObject(jsObject: any, service: ExchangeService): void {
        for (let key in jsObject) {
            switch (key) {
                case XmlElementNames.Title:
                    this.title = jsObject[key];
                    break;
                case XmlElementNames.FirstName:
                    this.givenName = jsObject[key];
                    break;
                case XmlElementNames.MiddleName:
                    this.middleName = jsObject[key];
                    break;
                case XmlElementNames.LastName:
                    this.surname = jsObject[key];
                    break;
                case XmlElementNames.Suffix:
                    this.suffix = jsObject[key];
                    break;
                case XmlElementNames.Initials:
                    this.initials = jsObject[key];
                    break;
                case XmlElementNames.FullName:
                    this.fullName = jsObject[key];
                    break;
                case XmlElementNames.NickName:
                    this.nickname = jsObject[key];
                    break;
                case XmlElementNames.YomiFirstName:
                    this.yomiGivenName = jsObject[key];
                    break;
                case XmlElementNames.YomiLastName:
                    this.yomiSurname = jsObject[key];
                    break;
                default:
                    break;
            }
        }
    }

    /**
     * @internal Writes elements to XML.
     * 
     * @param {EwsServiceXmlWriter} writer  The writer.
     */
    WriteElementsToXml(writer: EwsServiceXmlWriter): void {
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.Title, this.Title);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.FirstName, this.GivenName);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.MiddleName, this.MiddleName);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.LastName, this.Surname);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.Suffix, this.Suffix);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.Initials, this.Initials);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.FullName, this.FullName);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.NickName, this.NickName);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.YomiFirstName, this.YomiGivenName);
        writer.WriteElementValue(XmlNamespace.Types, XmlElementNames.YomiLastName, this.YomiSurname);
    }
}

