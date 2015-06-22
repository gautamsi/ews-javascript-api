import {EmailAddress} from "../ComplexProperties/EmailAddress";
import {Contact} from "../Core/ServiceObjects/Items/Contact";
import {NameResolutionCollection} from "./NameResolutionCollection";
import {JsonObject} from "../Core/JsonObject";
import {ExchangeService} from "../Core/ExchangeService";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
export class NameResolution {
    Mailbox: EmailAddress;
    Contact: Contact;
    private owner: NameResolutionCollection;
    private mailbox: EmailAddress;
    private contact: Contact;
    LoadFromJson(jsonProperty: JsonObject, service: ExchangeService): any { throw new Error("NameResolution.ts - LoadFromJson : Not implemented."); }
    LoadFromXml(reader: EwsServiceXmlReader): any { throw new Error("NameResolution.ts - LoadFromXml : Not implemented."); }
}


//}



