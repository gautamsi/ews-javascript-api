import {ServiceResponse} from "./ServiceResponse";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
/**
 * ## *Not Implemented* 
 */
export class GetEncryptionConfigurationResponse extends ServiceResponse {
    ImageBase64: string;
    EmailText: string;
    PortalText: string;
    DisclaimerText: string;
    private imageBase64: string;
    private emailText: string;
    private portalText: string;
    private disclaimerText: string;
    /**@internal */
    ReadElementsFromXmlJsObject(reader: EwsServiceXmlReader): any { throw new Error("GetEncryptionConfigurationResponse.ts - ReadElementsFromXmlJsObject : Not implemented."); }
}