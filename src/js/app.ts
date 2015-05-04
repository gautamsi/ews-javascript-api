
import AutodiscoverService = require("./Autodiscover/AutodiscoverService");
import ExchangeVersion = require("./Enumerations/ExchangeVersion");
import ExchangeCredentials = require("./Credentials/ExchangeCredentials");
import UserSettingName = require("./Enumerations/UserSettingName");
import DomainSettingName = require("./Enumerations/DomainSettingName");
import ExchangeService = require("./Core/ExchangeService");
import BasePropertySet = require("./Enumerations/BasePropertySet");
import PropertySet = require("./Core/PropertySet");

import {EnumHelper, btoa, DOMParser, stringFormatting} from "./ExtensionMethods";

import ext = require("./ExtensionMethods");
class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    div: HTMLElement
    timerToken: number;
    identity: <T>(arg: T[]) => T;
    loggingIdentity: <T extends string>(arg: T) => T


    start() {

        //var dd = new ext.DOMParser()
        //var domdata = dd.parseFromString('<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> <soap:Body> <soap:Fault> <faultcode>soap:Client</faultcode> <faultstring>Invalid input</faultstring> <faultactor >http://sseely2/AYS17Sept2002/Service1.asmx</faultactor> <detail> <PersonErrorInfo xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> <ItemInError TextValue="FirstError"></ItemInError> <CorrectRegularExpression >^([A-Z])([a-z])+</CorrectRegularExpression> </PersonErrorInfo> <PersonErrorInfo xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> <ItemInError>LastName</ItemInError> <CorrectRegularExpression >^([A-Z])([a-z])+</CorrectRegularExpression> </PersonErrorInfo> <PersonErrorInfo xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> <ItemInError>EmailAddress</ItemInError> <CorrectRegularExpression >^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$</CorrectRegularExpression> </PersonErrorInfo> </detail> </soap:Fault> </soap:Body></soap:Envelope>', "text/xml");
        //var objdata = ext.Parsers.xml2js.parseXMLNode(domdata.documentElement, true);

        //var vv = objdata;
        //return;
        var colorName: string = Color[2];
        var cname = Object.prototype.toString.call(Color).slice(8, -1);;
        var exch = new ExchangeService(ExchangeVersion.Exchange2010);
        


        //var autod = new Microsoft.Exchange.WebServices.Autodiscover.AutodiscoverService("https://autodiscover-s.coutlook.com/autodiscover/autodiscover.svc", "singhspro.onmicrosoft.com", Microsoft.Exchange.WebServices.Data.ExchangeVersion.Exchange2013);
        //var autod = new AutodiscoverService();//"https://pod51045.outlook.com/autodiscover/autodiscover.svc", "singhspro.onmicrosoft.com", ExchangeVersion.Exchange2013);
        //autod.RedirectionUrlValidationCallback = (val) => { return true };
        //var autod = new AutodiscoverService("https://pod51045.outlook.com/autodiscover/autodiscover.svc", "microsoft.com", ExchangeVersion.Exchange2013);
        //var x = new Microsoft.Exchange.WebServices.Data.ExchangeService(Microsoft.Exchange.WebServices.Data.ExchangeVersion.Exchange2010_SP2);
        //autod.Credentials = new ExchangeCredentials("gstest@singhspro.onmicrosoft.com", "test@P@ssw0rd");
        exch.Credentials = new ExchangeCredentials("gstest@singhspro.onmicrosoft.com", "--------");
        var util = require('util');
        exch.AutodiscoverUrl("gs@singhspro.onmicrosoft.com",(url) => { return true; }).then((resp) => {
            console.log(util.inspect(exch.Url, { showHidden: false, depth: null, colors: true }));
            exch.BindToFolder
            console.log("------------");
        },(err) => {
                
                console.log(util.inspect(err, { showHidden: false, depth: null, colors: true }));
                console.log("------------");

            });

        return;

        var s: UserSettingName[] = [];
        s.push(UserSettingName.InternalEwsUrl);
        s.push(UserSettingName.ExternalEwsUrl);

        ////s.push(UserSettingName.UserDisplayName);
        ////s.push(UserSettingName.UserDN);
        ////s.push(UserSettingName.EwsPartnerUrl);
        ////s.push(UserSettingName.DocumentSharingLocations);
        ////s.push(UserSettingName.MailboxDN);
        ////s.push(UserSettingName.ActiveDirectoryServer);
        ////s.push(UserSettingName.CasVersion);
        ////s.push(UserSettingName.ExternalWebClientUrls);
        ////s.push(UserSettingName.ExternalImap4Connections );
        ////s.push(UserSettingName.AlternateMailboxes);
        //autod.GetUserSettings(["gstest@singhspro.onmicrosoft.com", "Thament@Singhs.pro"], s).then((sr) => {
        //autod.GetUserSettings("gstest@singhspro.onmicrosoft.com", UserSettingName.InternalEwsUrl, UserSettingName.ExternalEwsUrl)
        //    .then((sr) => {
        //    var util = require('util');
        //    console.log(util.inspect(sr, { showHidden: false, depth: null, colors: true }));
        //    console.log(autod.Url);
        //    //console.log(sr);
        //    console.log("------------");
        //},(e: any) => {
        //        var util = require('util');
        //        console.log(util.inspect(e, { showHidden: false, depth: null, colors: true }));
        //        console.log("------------");
        //    });
        //return;
        ////var d: DomainSettingName[] = [];
        //////return;
        ////d.push(DomainSettingName.ExternalEwsUrl);
        ////d.push(DomainSettingName.ExternalEwsVersion);
        ////autod.GetDomainSettings("singhspro.onmicrosoft.com", d).then((dr) => {
        ////    var util = require('util');
        ////    console.log(util.inspect(dr, { showHidden: false, depth: null, colors: true }));
        ////    console.log("------------");
        ////},(e: any) => {
        ////        console.log(e);
        ////        console.log("------------");
        ////    });


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
