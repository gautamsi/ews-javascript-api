import {SimpleServiceRequestBase} from "./SimpleServiceRequestBase";
import {GetUserOofSettingsResponse} from "../Responses/GetUserOofSettingsResponse";
import {ExchangeVersion} from "../../Enumerations/ExchangeVersion";
import {EwsServiceXmlReader} from "../EwsServiceXmlReader";
import {EwsServiceXmlWriter} from "../EwsServiceXmlWriter";
export class GetUserOofSettingsRequest extends SimpleServiceRequestBase {
    SmtpAddress: string;
    private smtpAddress: string;
    Execute(): GetUserOofSettingsResponse { throw new Error("GetUserOofSettingsRequest.ts - Execute : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("GetUserOofSettingsRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("GetUserOofSettingsRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("GetUserOofSettingsRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("GetUserOofSettingsRequest.ts - ParseResponse : Not implemented."); }
    Validate(): any { throw new Error("GetUserOofSettingsRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("GetUserOofSettingsRequest.ts - WriteElementsToXml : Not implemented."); }
}



//}



