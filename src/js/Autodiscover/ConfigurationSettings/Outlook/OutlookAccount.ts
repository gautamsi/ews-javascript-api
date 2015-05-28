import AutodiscoverResponseType = require("../../../Enumerations/AutodiscoverResponseType");
import AlternateMailboxCollection = require("../../AlternateMailboxCollection");
import GetUserSettingsResponse = require("../../Responses/GetUserSettingsResponse");
import UserSettingName = require("../../../Enumerations/UserSettingName");
import EwsXmlReader = require("../../../Core/EwsXmlReader");
class OutlookAccount {
    private static Settings: string = "settings";
    private static RedirectAddr: string = "redirectAddr";
    private static RedirectUrl: string = "redirectUrl";
    AccountType: string;
    ResponseType: AutodiscoverResponseType;
    RedirectTarget: string;
    private protocols:any;// System.Collections.Generic.Dictionary<OutlookProtocolType, OutlookProtocol>;
    private alternateMailboxes: AlternateMailboxCollection;
    ConvertToUserSettings(requestedSettings: UserSettingName[], // System.Collections.Generic.List<Microsoft.Exchange.WebServices.Autodiscover.UserSettingName>,
        response: GetUserSettingsResponse): any { throw new Error("OutlookAccount.ts - response: GetUserSettingsResponse): any { throw new Error : Not implemented."); }
    LoadFromXml(reader: EwsXmlReader): any { throw new Error("OutlookAccount.ts - LoadFromXml : Not implemented."); }
}
export = OutlookAccount;


//module Microsoft.Exchange.WebServices.Autodiscover {
//}
//import _export = Microsoft.Exchange.WebServices.Autodiscover;
//export = _export;
