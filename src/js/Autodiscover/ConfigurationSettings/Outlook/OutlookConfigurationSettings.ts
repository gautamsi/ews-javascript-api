import OutlookProtocol = require("./OutlookProtocol");
import OutlookUser = require("./OutlookUser");
import OutlookAccount = require("./OutlookAccount");
import ConfigurationSettingsBase = require("../ConfigurationSettingsBase");
import AutodiscoverResponseType = require("../../../Enumerations/AutodiscoverResponseType");
import EwsXmlReader = require("../../../Core/EwsXmlReader");
import UserSettingName = require("../../../Enumerations/UserSettingName");
import GetUserSettingsResponse = require("../../Responses/GetUserSettingsResponse");
import LazyMember = require("../../../Core/LazyMember");
import {ArrayHelper} from "../../../ExtensionMethods";
class OutlookConfigurationSettings extends ConfigurationSettingsBase {
    ResponseType: AutodiscoverResponseType;
    RedirectTarget: string;
    private user: OutlookUser;
    private account: OutlookAccount;
    private static allOutlookProviderSettings: LazyMember<UserSettingName[]> = new LazyMember(()=>{
        var results:UserSettingName[] = [];//new List<UserSettingName>();
                ArrayHelper.AddRange(results, OutlookUser.AvailableUserSettings);
                ArrayHelper.AddRange(results, OutlookProtocol.AvailableUserSettings);
                results.push(UserSettingName.AlternateMailboxes);
                return results;
    });
    ConvertSettings(smtpAddress: string, requestedSettings: UserSettingName[]): GetUserSettingsResponse { throw new Error("OutlookConfigurationSettings.ts - ConvertSettings : Not implemented."); }
    GetNamespace(): string { throw new Error("OutlookConfigurationSettings.ts - GetNamespace : Not implemented."); }
    IsAvailableUserSetting(setting: UserSettingName): boolean { throw new Error("OutlookConfigurationSettings.ts - IsAvailableUserSetting : Not implemented."); }
    MakeRedirectionResponse(redirectUrl: string /*System.Uri*/): any { throw new Error("OutlookConfigurationSettings.ts - MakeRedirectionResponse : Not implemented."); }
    ReportUnsupportedSettings(requestedSettings: UserSettingName[], response: GetUserSettingsResponse): any { throw new Error("OutlookConfigurationSettings.ts - ReportUnsupportedSettings : Not implemented."); }
    TryReadCurrentXmlElement(reader: EwsXmlReader): boolean { throw new Error("OutlookConfigurationSettings.ts - TryReadCurrentXmlElement : Not implemented."); }
}

export = OutlookConfigurationSettings;


//module Microsoft.Exchange.WebServices.Autodiscover {
//}
//import _export = Microsoft.Exchange.WebServices.Autodiscover;
//export = _export;
