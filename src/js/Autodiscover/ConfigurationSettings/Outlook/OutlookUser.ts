import UserSettingName = require("../../../Enumerations/UserSettingName");
import GetUserSettingsResponse = require("../../Responses/GetUserSettingsResponse");
import EwsXmlReader = require("../../../Core/EwsXmlReader");
import LazyMember = require("../../../Core/LazyMember");
class OutlookUser {
    static AvailableUserSettings: UserSettingName[];
    private displayName: string;
    private legacyDN: string;
    private deploymentId: string;
    private autodiscoverAMTPAddress: string;
    private static converterDictionary: LazyMember<any>;
    ConvertToUserSettings(requestedSettings: UserSettingName[], response: GetUserSettingsResponse): any { throw new Error("Not implemented."); }
    LoadFromXml(reader: EwsXmlReader): any { throw new Error("Not implemented."); }
}
export = OutlookUser;

//module Microsoft.Exchange.WebServices.Autodiscover {
//}
//import _export = Microsoft.Exchange.WebServices.Autodiscover;
//export = _export;