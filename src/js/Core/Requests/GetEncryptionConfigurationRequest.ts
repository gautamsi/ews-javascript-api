import {SimpleServiceRequestBase} from "./SimpleServiceRequestBase";
import {GetEncryptionConfigurationResponse} from "../Responses/GetEncryptionConfigurationResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
/**
 * ## @internal *Not Implemented*   Server to server call - not needed
 */
export class GetEncryptionConfigurationRequest extends SimpleServiceRequestBase {
    Execute(): GetEncryptionConfigurationResponse { throw new Error("GetEncryptionConfigurationRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("GetEncryptionConfigurationRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("GetEncryptionConfigurationRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("GetEncryptionConfigurationRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("GetEncryptionConfigurationRequest.ts - ParseResponse : Not implemented."); }
    /**@internal */
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("GetEncryptionConfigurationRequest.ts - WriteElementsToXml : Not implemented."); }
}