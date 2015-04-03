import AutodiscoverService = require("./Autodiscover/AutodiscoverService");
import ExchangeVersion = require("./Enumerations/ExchangeVersion");
import ExchangeCredentials = require("./Credentials/ExchangeCredentials");
import UserSettingName = require("./Enumerations/UserSettingName");
import DomainSettingName = require("./Enumerations/DomainSettingName");

class Greeter<T extends { new () }> {
    element: HTMLElement;
    span: HTMLElement;
    div: HTMLElement
    timerToken: number;
    identity: <T>(arg: T[]) => T;
    loggingIdentity: <T extends string>(arg: T) => T


    start() {
        //return;
        var colorName: string = Color[2];
        var cname = Object.prototype.toString.call(Color).slice(8, -1);;

        //var autod = new Microsoft.Exchange.WebServices.Autodiscover.AutodiscoverService("https://autodiscover-s.coutlook.com/autodiscover/autodiscover.svc", "singhspro.onmicrosoft.com", Microsoft.Exchange.WebServices.Data.ExchangeVersion.Exchange2013);
        var autod = new AutodiscoverService("https://pod51045.outlook.com/autodiscover/autodiscover.svc", "singhspro.onmicrosoft.com", ExchangeVersion.Exchange2013);
        //var x = new Microsoft.Exchange.WebServices.Data.ExchangeService(Microsoft.Exchange.WebServices.Data.ExchangeVersion.Exchange2010_SP2);
        autod.Credentials = new ExchangeCredentials("gstest@singhspro.onmicrosoft.com", "testP@ssw0rd");
        var s: UserSettingName[] = [];

        s.push(UserSettingName.UserDisplayName);
        s.push(UserSettingName.UserDN);
        s.push(UserSettingName.EwsPartnerUrl);
        s.push(UserSettingName.InternalMailboxServer);
        s.push(UserSettingName.MailboxDN);
        s.push(UserSettingName.ActiveDirectoryServer);
        s.push(UserSettingName.CasVersion);
        s.push(UserSettingName.ExternalWebClientUrls);
        s.push(UserSettingName.ExternalEwsUrl);
        s.push(UserSettingName.PublicFolderServer);
        autod.GetUserSettings(["gstest@singhspro.onmicrosoft.com", "Thament@Singhs.pro"], s).then((sr) => {
            //console.log(sr);
            console.log("------------");
        },(e: any) => {
                console.log(e);
                console.log("------------");
            });
        //return;
        var d: DomainSettingName[] = [];
        return;
        d.push(DomainSettingName.ExternalEwsUrl);
        d.push(DomainSettingName.ExternalEwsVersion);
        autod.GetDomainSettings("singhspro.onmicrosoft.com", d).then((dr) => {
            console.log(dr);
            console.log("------------");
        },(e: any) => {
                console.log(e);
                console.log("------------");
            });


        //this.span.innerHTML = "";
        //this.div.innerHTML = "";
        //this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString() + " " + colorName + " " + cname, 500);
    }

    stop() {
        clearTimeout(this.timerToken);

    }

}

enum Color { Red = 1, Green, Blue };
var greeter = new Greeter();
greeter.start();