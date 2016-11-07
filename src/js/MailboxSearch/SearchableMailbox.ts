import { Convert } from './../ExtensionMethods';
import { Guid } from './../Guid';
import { ExchangeService } from './../Core/ExchangeService';
import { XmlElementNames } from "../Core/XmlElementNames";

/**
 * Represents searchable mailbox object
 * 
 * @sealed
 */
export class SearchableMailbox {

    /**
     * Guid
     */
    Guid: Guid = null;

    /**
     * Smtp address
     */
    SmtpAddress: string = null;

    /**
     * If true, this is an external mailbox
     */
    IsExternalMailbox: boolean = false;

    /**
     * External email address for the mailbox
     */
    ExternalEmailAddress: string = null;

    /**
     * Display name
     */
    DisplayName: string = null;

    /**
     * Is a membership group
     */
    IsMembershipGroup: boolean = false;

    /**
     * Reference id
     */
    ReferenceId: string = null;

    /**
     * Constructor
     */
    constructor();
    /**
     * Constructor
     *
     * @param   {Guid}      guid                   Guid
     * @param   {string}    smtpAddress            Smtp address
     * @param   {boolean}   isExternalMailbox      If true, this is an external mailbox
     * @param   {string}    externalEmailAddress   External email address
     * @param   {string}    displayName            Display name
     * @param   {boolean}   isMembershipGroup      Is a membership group
     * @param   {string}    referenceId            Reference id
     */
    constructor(guid: Guid, smtpAddress: string, isExternalMailbox: boolean, externalEmailAddress: string, displayName: string, isMembershipGroup: boolean, referenceId: string);
    constructor(guid?: Guid, smtpAddress?: string, isExternalMailbox?: boolean, externalEmailAddress?: string, displayName?: string, isMembershipGroup?: boolean, referenceId?: string) {
        if (arguments.length === 0) {
            return;
        }
    }

    /**
     * @internal Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     * @return  {SearchableMailbox}              Discovery search configuration object.
     */
    static LoadFromXmlJsObject(jsObject: any, service: ExchangeService): SearchableMailbox {
        let searchableMailbox: SearchableMailbox = new SearchableMailbox();

        if (jsObject[XmlElementNames.Guid]) {
            searchableMailbox.Guid = new Guid(jsObject[XmlElementNames.Guid]);
        }

        if (jsObject[XmlElementNames.DisplayName]) {
            searchableMailbox.DisplayName = jsObject[XmlElementNames.DisplayName];
        }

        if (jsObject[XmlElementNames.PrimarySmtpAddress]) {
            searchableMailbox.SmtpAddress = jsObject[XmlElementNames.PrimarySmtpAddress];
        }

        if (jsObject[XmlElementNames.IsExternalMailbox]) {
            searchableMailbox.IsExternalMailbox = Convert.toBool(jsObject[XmlElementNames.IsExternalMailbox]);
        }

        if (jsObject[XmlElementNames.ExternalEmailAddress]) {
            searchableMailbox.ExternalEmailAddress = jsObject[XmlElementNames.ExternalEmailAddress];
        }

        if (jsObject[XmlElementNames.IsMembershipGroup]) {
            searchableMailbox.IsMembershipGroup = Convert.toBool(jsObject[XmlElementNames.IsMembershipGroup]);
        }

        if (jsObject[XmlElementNames.ReferenceId]) {
            searchableMailbox.ReferenceId = jsObject[XmlElementNames.ReferenceId];
        }

        return searchableMailbox;
    }
}