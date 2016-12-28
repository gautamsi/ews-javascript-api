import {OutlookProtocol} from "./OutlookProtocol";
import {OutlookUser} from "./OutlookUser";
import {OutlookAccount} from "./OutlookAccount";
import {AutodiscoverResponseType} from "../../../Enumerations/AutodiscoverResponseType";
import {EwsXmlReader} from "../../../Core/EwsXmlReader";
import {UserSettingName} from "../../../Enumerations/UserSettingName";
import {GetUserSettingsResponse} from "../../Responses/GetUserSettingsResponse";
import {LazyMember} from "../../../Core/LazyMember";
import {ArrayHelper} from "../../../ExtensionMethods";
import {Uri} from "../../../Uri";
import {ConfigurationSettingsBase} from "../ConfigurationSettingsBase";

/** @internal  */
export class OutlookConfigurationSettings extends ConfigurationSettingsBase {
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
    MakeRedirectionResponse(redirectUrl: Uri): any { throw new Error("OutlookConfigurationSettings.ts - MakeRedirectionResponse : Not implemented."); }
    ReportUnsupportedSettings(requestedSettings: UserSettingName[], response: GetUserSettingsResponse): any { throw new Error("OutlookConfigurationSettings.ts - ReportUnsupportedSettings : Not implemented."); }
    //TryReadCurrentXmlElement(reader: EwsXmlReader): boolean { throw new Error("OutlookConfigurationSettings.ts - TryReadCurrentXmlElement : Not implemented."); }
}


