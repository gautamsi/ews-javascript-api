import {SimpleServiceRequestBase} from "./SimpleServiceRequestBase";
import {GetDiscoverySearchConfigurationResponse} from "../Responses/GetDiscoverySearchConfigurationResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
/**
 * ## *Not Implemented* 
 */
export class GetDiscoverySearchConfigurationRequest extends SimpleServiceRequestBase {
    SearchId: string;
    ExpandGroupMembership: boolean;
    InPlaceHoldConfigurationOnly: boolean;
    Execute(): GetDiscoverySearchConfigurationResponse { throw new Error("GetDiscoverySearchConfigurationRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("GetDiscoverySearchConfigurationRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("GetDiscoverySearchConfigurationRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("GetDiscoverySearchConfigurationRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("GetDiscoverySearchConfigurationRequest.ts - ParseResponse : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("GetDiscoverySearchConfigurationRequest.ts - WriteElementsToXml : Not implemented."); }
}