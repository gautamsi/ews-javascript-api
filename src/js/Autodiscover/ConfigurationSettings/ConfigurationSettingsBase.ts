import {AutodiscoverResponseType} from "../../Enumerations/AutodiscoverResponseType";
import {AutodiscoverError} from "../AutodiscoverError";
import {UserSettingName} from "../../Enumerations/UserSettingName";
import {EwsXmlReader} from "../../Core/EwsXmlReader";
import {GetUserSettingsResponse} from "../Responses/GetUserSettingsResponse";
import {Uri} from "../../Uri";

export class ConfigurationSettingsBase {
    ResponseType: AutodiscoverResponseType;
    RedirectTarget: string;
    Error: AutodiscoverError;
    private error: AutodiscoverError;
    ConvertSettings(smtpAddress: string, requestedSettings: UserSettingName[]): GetUserSettingsResponse { throw new Error("ConfigurationSettingsBase.ts - ConvertSettings : Not implemented."); }
    GetNamespace(): string { throw new Error("ConfigurationSettingsBase.ts - GetNamespace : Not implemented."); }
    LoadFromXml(reader: EwsXmlReader): any { throw new Error("ConfigurationSettingsBase.ts - LoadFromXml : Not implemented."); }
    MakeRedirectionResponse(redirectUrl: Uri): any { throw new Error("ConfigurationSettingsBase.ts - MakeRedirectionResponse : Not implemented."); }
    TryReadCurrentXmlElement(reader: EwsXmlReader): boolean { throw new Error("ConfigurationSettingsBase.ts - TryReadCurrentXmlElement : Not implemented."); }
}

