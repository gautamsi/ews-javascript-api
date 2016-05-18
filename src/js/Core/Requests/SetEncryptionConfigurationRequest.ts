import {SimpleServiceRequestBase} from "./SimpleServiceRequestBase";
import {ServiceResponse} from "../Responses/ServiceResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
/**
 * ## @internal *Not Implemented* 
 */
export class SetEncryptionConfigurationRequest extends SimpleServiceRequestBase {
    ImageBase64: string;
    EmailText: string;
    PortalText: string;
    DisclaimerText: string;
    private imageBase64: string;
    private emailText: string;
    private portalText: string;
    private disclaimerText: string;
    Execute(): ServiceResponse { throw new Error("SetEncryptionConfigurationRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("SetEncryptionConfigurationRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("SetEncryptionConfigurationRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("SetEncryptionConfigurationRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("SetEncryptionConfigurationRequest.ts - ParseResponse : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("SetEncryptionConfigurationRequest.ts - WriteElementsToXml : Not implemented."); }
}