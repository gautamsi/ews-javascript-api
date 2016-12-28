import {StringList} from "../../ComplexProperties/StringList";
import {SimpleServiceRequestBase} from "./SimpleServiceRequestBase";
import {GetClientExtensionResponse} from "../Responses/GetClientExtensionResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
/**
 * ## @internal *Not Implemented* 
 */
export class GetClientExtensionRequest extends SimpleServiceRequestBase {
    private requestedExtensionIds: StringList;
    private shouldReturnEnabledOnly: boolean;
    private isUserScope: boolean;
    private userId: string;
    private userEnabledExtensionIds: StringList;
    private userDisabledExtensionIds: StringList;
    private isDebug: boolean;
    Execute(): GetClientExtensionResponse { throw new Error("GetClientExtensionRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("GetClientExtensionRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("GetClientExtensionRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("GetClientExtensionRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("GetClientExtensionRequest.ts - ParseResponse : Not implemented."); }
    /**@internal */
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("GetClientExtensionRequest.ts - WriteElementsToXml : Not implemented."); }
}