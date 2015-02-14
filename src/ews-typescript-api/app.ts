import data = Microsoft.Exchange.WebServices.Data;

class Greeter<T extends { new () }> {
    element: HTMLElement;
    span: HTMLElement;
    div: HTMLElement
    timerToken: number;
    identity: <T>(arg: T[]) => T;
    loggingIdentity: <T extends string>(arg: T) => T

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();

        this.div = document.createElement('div');
        this.element.appendChild(this.div);
        this.div.innerText = ".......";
    }


    start() {
        //return;
        var colorName: string = Color[2];
        var cname = Object.prototype.toString.call(Color).slice(8, -1);;

        //var autod = new Microsoft.Exchange.WebServices.Autodiscover.AutodiscoverService("https://autodiscover-s.coutlook.com/autodiscover/autodiscover.svc", "singhspro.onmicrosoft.com", Microsoft.Exchange.WebServices.Data.ExchangeVersion.Exchange2013);
        var autod = new Microsoft.Exchange.WebServices.Autodiscover.AutodiscoverService("https://pod51045.outlook.com/autodiscover/autodiscover.svc", "singhspro.onmicrosoft.com", Microsoft.Exchange.WebServices.Data.ExchangeVersion.Exchange2013);
        //var x = new Microsoft.Exchange.WebServices.Data.ExchangeService(Microsoft.Exchange.WebServices.Data.ExchangeVersion.Exchange2010_SP2);
        autod.Credentials = new data.ExchangeCredentials("gstest@singhspro.onmicrosoft.com", "testP@ssw0rd");
        var s: Microsoft.Exchange.WebServices.Autodiscover.UserSettingName[] = [];

        s.push(Microsoft.Exchange.WebServices.Autodiscover.UserSettingName.UserDisplayName);
        s.push(Microsoft.Exchange.WebServices.Autodiscover.UserSettingName.UserDN);
        s.push(Microsoft.Exchange.WebServices.Autodiscover.UserSettingName.UserDeploymentId);
        s.push(Microsoft.Exchange.WebServices.Autodiscover.UserSettingName.InternalMailboxServer);
        s.push(Microsoft.Exchange.WebServices.Autodiscover.UserSettingName.MailboxDN);
        s.push(Microsoft.Exchange.WebServices.Autodiscover.UserSettingName.ActiveDirectoryServer);
        s.push(Microsoft.Exchange.WebServices.Autodiscover.UserSettingName.CasVersion);
        s.push(Microsoft.Exchange.WebServices.Autodiscover.UserSettingName.ExternalWebClientUrls);
        s.push(Microsoft.Exchange.WebServices.Autodiscover.UserSettingName.ExternalEwsUrl);
        s.push(Microsoft.Exchange.WebServices.Autodiscover.UserSettingName.PublicFolderServer);
        autod.GetUserSettings("gstest@singhspro.onmicrosoft.com", s).then((sr) => {
            this.div.innerHTML = JSON.stringify(sr);
        }, (e: any) => {
                this.div.innerHTML = JSON.stringify(e);
            });

        var d: Microsoft.Exchange.WebServices.Autodiscover.DomainSettingName[] = [];

        d.push(Microsoft.Exchange.WebServices.Autodiscover.DomainSettingName.ExternalEwsUrl);
        d.push(Microsoft.Exchange.WebServices.Autodiscover.DomainSettingName.ExternalEwsVersion);
        //autod.GetDomainSettings("singhspro.onmicrosoft.com", d).then((dr) => {
        //    this.span.innerHTML = JSON.stringify(dr);
        //}, (e: any) => {
        //        this.span.innerHTML = JSON.stringify(e);
        //    });


        //this.span.innerHTML = "";
        //this.div.innerHTML = "";
        //this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString() + " " + colorName + " " + cname, 500);
    }

    stop() {
        clearTimeout(this.timerToken);
        
    }

}

enum Color { Red = 1, Green, Blue };
window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};

