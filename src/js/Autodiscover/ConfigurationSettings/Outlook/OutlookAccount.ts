import {AutodiscoverResponseType} from "../../../Enumerations/AutodiscoverResponseType";
import {AlternateMailboxCollection} from "../../AlternateMailboxCollection";
import {GetUserSettingsResponse} from "../../Responses/GetUserSettingsResponse";
import {UserSettingName} from "../../../Enumerations/UserSettingName";
import {EwsXmlReader} from "../../../Core/EwsXmlReader";
export class OutlookAccount {
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