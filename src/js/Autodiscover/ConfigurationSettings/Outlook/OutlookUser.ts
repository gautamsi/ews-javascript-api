import {UserSettingName} from "../../../Enumerations/UserSettingName";
import {GetUserSettingsResponse} from "../../Responses/GetUserSettingsResponse";
import {EwsXmlReader} from "../../../Core/EwsXmlReader";
import {LazyMember} from "../../../Core/LazyMember";
export class OutlookUser {
    static AvailableUserSettings: UserSettingName[];
    private displayName: string;
    private legacyDN: string;
    private deploymentId: string;
    private autodiscoverAMTPAddress: string;
    private static converterDictionary: LazyMember<any>;
    ConvertToUserSettings(requestedSettings: UserSettingName[], response: GetUserSettingsResponse): any { throw new Error("OutlookUser.ts - ConvertToUserSettings : Not implemented."); }
    //LoadFromXml(reader: EwsXmlReader): any { throw new Error("OutlookUser.ts - LoadFromXml : Not implemented."); }
}