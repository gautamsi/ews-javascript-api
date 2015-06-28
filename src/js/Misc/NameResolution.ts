import {EmailAddress} from "../ComplexProperties/EmailAddress";
import {Contact} from "../Core/ServiceObjects/Items/Contact";
import {NameResolutionCollection} from "./NameResolutionCollection";
import {EwsLogging} from "../Core/EwsLogging";
import {XmlElementNames} from "../Core/XmlElementNames";
import {PropertySet} from "../Core/PropertySet";
import {ExchangeService} from "../Core/ExchangeService";
export class NameResolution {

    private owner: NameResolutionCollection = null;
    private mailbox: EmailAddress = new EmailAddress();
    private contact: Contact = null;
    get Mailbox(): EmailAddress {
        return this.mailbox;
    }
    get Contact(): Contact {
        return this.contact;
    }
    constructor(owner: NameResolutionCollection) {
        EwsLogging.Assert(owner !== null, "NameResolution.ctor", "owner is null.");
        this.owner = owner;
    }
    LoadFromJson(jsonProperty: any, service: ExchangeService): void { throw new Error("NameResolution.ts - LoadFromJson : Not implemented."); }
    LoadFromXmlJsObject(jsonProperty: any, service: ExchangeService): void {
        for (var key in jsonProperty) {
            switch (key) {
                case XmlElementNames.Mailbox:
                    this.mailbox.LoadFromXmlJsObject(jsonProperty[key], service);
                    break;
                case XmlElementNames.Contact:
                    this.contact = new Contact(this.owner.Session);
                    this.contact.LoadFromXmlJsObject(jsonProperty[key], service, true, PropertySet.FirstClassProperties, false);
                    break;
                default:
                    break;
            }
        }
    }
}