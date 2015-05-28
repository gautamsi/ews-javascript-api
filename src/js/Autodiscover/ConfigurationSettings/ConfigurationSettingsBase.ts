import AutodiscoverResponseType = require("../../Enumerations/AutodiscoverResponseType");
import AutodiscoverError = require("../AutodiscoverError");
import UserSettingName = require("../../Enumerations/UserSettingName");
import EwsXmlReader = require("../../Core/EwsXmlReader");
import GetUserSettingsResponse = require("../Responses/GetUserSettingsResponse");

class ConfigurationSettingsBase {
    ResponseType: AutodiscoverResponseType;
    RedirectTarget: string;
    Error: AutodiscoverError;
    private error: AutodiscoverError;
    ConvertSettings(smtpAddress: string, requestedSettings: UserSettingName[]): GetUserSettingsResponse { throw new Error("ConfigurationSettingsBase.ts - ConvertSettings : Not implemented."); }
    GetNamespace(): string { throw new Error("ConfigurationSettingsBase.ts - GetNamespace : Not implemented."); }
    LoadFromXml(reader: EwsXmlReader): any { throw new Error("ConfigurationSettingsBase.ts - LoadFromXml : Not implemented."); }
    MakeRedirectionResponse(redirectUrl: string /*System.Uri*/): any { throw new Error("ConfigurationSettingsBase.ts - MakeRedirectionResponse : Not implemented."); }
    TryReadCurrentXmlElement(reader: EwsXmlReader): boolean { throw new Error("ConfigurationSettingsBase.ts - TryReadCurrentXmlElement : Not implemented."); }
}
export = ConfigurationSettingsBase;

//module Microsoft.Exchange.WebServices.Autodiscover {
//}
//import _export = Microsoft.Exchange.WebServices.Autodiscover;
//export = _export;
