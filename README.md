ews-javascript-api 
==================
## Exchange Web Service in JavaScript/TypeScript.

## Support
Contact @gautamsi for support. Use [![Gitter](https://badges.gitter.im/gautamsi/ews-javascript-api.svg)](https://gitter.im/gautamsi/ews-javascript-api?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) for 1:1 support and paid support. Also looking for sponsors to fund remaining development on this. 

===========================================================================================    

## July 2019 Update:  
You can now use this in Ionic, Cordova, Browser based process (where CORS is disabled), Outlook Add-in or Mail apps. see [`ews-js-api-browser`](https://github.com/gautamsi/ews-js-api-browser) for more detail

>(planning to rename this to @ewsjs/ewsjs);

# Current State:
* Almost all methods in ExchangeService class is comple with respect to c# counterpart ([based on commit#31951f4 ](https://github.com/OfficeDev/ews-managed-api/commit/31951f456519786e41232fa9ff6a3ab20b56cac3)
    * some method skipped as they are not for client side code or are diaognostic methods. 
* Roadmap to 1.0 Beta:
    * ~~ReWrite XHR/Request and Promise see #94~~ done
    * ~~Rewrite Autodiscover code with fresh Promise approach, this code was my work in very beginning and poorly written, strategy and TypeScript features improved over time which this code isn't taking any advantage of.~~ done
    * use `async/await` and move to `@ewsjs/*` namespace
    * chain `@ewsjs/xhr` to wrap all exports from `@ewsjs/ews`
    * Add jsdoc comment to remaining exported class
* Roadmap to 1.0
    * fix bugs from Beta
    * complete code improvement based on diff from original snapshot
    * basic tests to be introduced to prevent breaking changes
    * Add documentation with sample code for each operation in ExchangeService methods
    * Integrate ntlm and cookies authentication code in main library 
* Beyond 1.0 
    * ~Add npm based typings support for lates TypeScript based workflow~ completed in `0.9.0`
    * minified version for any developer need 
    * String Null check to improve reliability, TypeScript 2.0 feature
    * Complete jsdoc comment in 
    * Complete code for new features introduced after the snapshot I was working on
    * Add OAuth authentication with Azure AD (needs admin created APP in Azure AD)
    * Break into components to have better performance and download
    * enable non Node scenarios
    * trimmed version for Outlook Mail APP supported EWS calls  

===========================================================================================

# Whats new v0.10.0
* new/fix: #324 Autodiscover is back again, improved and supports DNS fallback using Autodiscover SRV records
* new: #320 Allow access to `HttpResponseHeaders`, you can use `<ExchangeService Instance>.HttpResponseHeaders` to get fresh header from last call to ews service.
  *  you can also add a delegate (callback) for `<ExchangeService Instance>.OnResponseHeadersCaptured` which is called after each call to service and when headers are returned.

* **Breaking Changes**:  `<ExchangeService>.HttpHeaders` is now Disctionary instance, compatible with c# disctionary. you can no longer do `service.HttpHeaders[<header>] = value`. do this instead `service.HttpHeaders.Add("header", "value"); `

* fix: #322 you can now delete tasks properly


[See older change in CHANGELOG.md](./CHANGELOG.md)

===========================================================================================

EWS managed API for TypeScript/JavaScript - code ported from OfficeDev/ews-managed-api. availbale for nodejs, browser and mobile devices (cordova).  

Pluggable XHRApi adapter to replace client (browser) based XHR call with server brokered call (example coming soon). Example Ruby on rails, PHP or any server side framework where c# or nodejs is not available

Works with **Office 365/Exchange Online** and on-premises Exchange (2007 - 2016)

## Authentication
* Basic - inbuilt
* OAuth - inbuilt (see https://stackoverflow.com/a/43785262/5884960 for more details on how to use.)
* NTLM and NTLMv2 - using [@ewsjs/xhr](https://github.com/ewsjs/xhr) 
* Cookies/FBA Authentication with TMG/ISA - using [@ewsjs/xhr](https://github.com/ewsjs/xhr) 

> use SSL for basic authentication  
NTLM and Cookies Authentication works with nodejs only

> **NTLM** issue with `invalid tagName` gibrish character is due to gzip encoding, see #334. 
> 
> **Solution** use `gzip: true` in `XhrApi({ gzip: true })` constructor options of `@ewsjs/xhr`.

## Modules
* commonjs module for NodeJs
* AMD module for other scenarios* (not documented yet)

All http call is wrapped in promise using default BlueBird promise.  You can also interchange compatible promise api.  
Code sample from [EWS Managed API 2.1.](https://msdn.microsoft.com/en-us/library/office/jj536567.aspx) should work with little modificaion to Promise format   

## async/await latest nodejs
You can also leverage new async/await feature of nodejs (>7.0.6) or in TypeScript transpilation with es5/es6 code.  


## Documentation
Api document generated using TypeDoc and is hosted at [ews-javascript-api.github.io/api](http://ews-javascript-api.github.io/api).  ** outdated
Check [Wiki](https://github.com/gautamsi/ews-javascript-api/wiki) for more details

keep track of what is coming in [backlog](https://github.com/gautamsi/ews-javascript-api/milestones/backlog), keep eye on [milestones](https://github.com/gautamsi/ews-javascript-api/milestones) when I start working on it 


# Getting Started
## install
```shell
[sudo] npm install ews-javascript-api
``` 

## use
```javascript
//classic Javascript style
var ews = require('ews-javascript-api');
var exch = new ews.ExchangeService(ews.ExchangeVersion.Exchange2013);
//ES6 TypeScript style
import {ExchangeService, AutodiscoverService, Folder, Item, ExchangeVersion} from "ews-javascript-api";
var exch = new ExchangeService(ExchangeVersion.Exchange2013);
```
## Autodiscover user settings (** Working again as of 0.10 **)
```javascript
//import ews module
var ews = require('ews-javascript-api');
//create AutodiscoverService object
var autod = new ews.AutodiscoverService(new ews.Uri("https://autodiscover-s.outlook.com/autodiscover/autodiscover.svc"), ews.ExchangeVersion.Exchange2010);
//you can omit url and it will autodiscover the url, version helps throw error on client side for unsupported operations.example - //var autod = new ews.AutodiscoverService(ews.ExchangeVersion.Exchange2010);
//set credential for service
autod.Credentials = new ews.WebCredentials("userName", "password");
//create array to include list of desired settings
var settings = [
ews.UserSettingName.InternalEwsUrl,
ews.UserSettingName.ExternalEwsUrl,
ews.UserSettingName.UserDisplayName,
ews.UserSettingName.UserDN,
ews.UserSettingName.EwsPartnerUrl,
ews.UserSettingName.DocumentSharingLocations,
ews.UserSettingName.MailboxDN,
ews.UserSettingName.ActiveDirectoryServer,
ews.UserSettingName.CasVersion,
ews.UserSettingName.ExternalWebClientUrls,
ews.UserSettingName.ExternalImap4Connections,
ews.UserSettingName.AlternateMailboxes
];
//get the setting
autod.GetUserSettings(["email1@domain.com", "email2@domain.com"], settings)
.then(function (response) {
    //do what you want with user settings    
    var tabcount = 0;
    var tabs = function () { return ews.StringHelper.Repeat("\t", tabcount); };
    console.log(autod.Url.ToString());
	//uncoment next line to see full response from autodiscover, you will need to add var util = require('util');
	//console.log(util.inspect(response, { showHidden: false, depth: null, colors: true }));
    for (var _i = 0, _a = response.Responses; _i < _a.length; _i++) {
        var resp = _a[_i];
        console.log(ews.StringHelper.Format("{0}settings for email: {1}", tabs(), resp.SmtpAddress));
        tabcount++;
        for (var setting in resp.Settings) {
            console.log(ews.StringHelper.Format("{0}{1} = {2}", tabs(), ews.UserSettingName[setting], resp.Settings[setting]));
        }
        tabcount--;
    }
}, function (e) {
    //log errors or do something with errors
});
```

## Example EWS operations
Example of user availability
```javascript
var ews = require('ews-javascript-api');
//create ExchangeService object
var exch = new ews.ExchangeService(ews.ExchangeVersion.Exchange2013);
exch.Credentials = new ews.WebCredentials("userName", "password");
//set ews endpoint url to use
exch.Url = new ews.Uri("https://outlook.office365.com/Ews/Exchange.asmx"); // you can also use exch.AutodiscoverUrl

var attendee =[ new ews.AttendeeInfo("email1@domain.com"), new ews.AttendeeInfo("email2@domain.com")];
//create timewindow object o request avaiability suggestions for next 48 hours, DateTime and TimeSpan object is created to mimic portion of .net datetime/timespan object using momentjs
var timeWindow = new ews.TimeWindow(ews.DateTime.Now, ews.DateTime.Now.AddDays(2)); 
exch.GetUserAvailability(attendee, timeWindow, ews.AvailabilityData.FreeBusyAndSuggestions)
.then(function (availabilityResponse) {
    //do what you want with user availability
}, function (errors) {
    //log errors or do something with errors
});
        
```

# Use with React Native

there is some issues with how react native exposes native browser methods, here are changes needs to be done to us `ews-js-api-browser` with react native. 
    Add following lines to some place before requiring `ews-js-api-browser`. you need to use `xmldom` and `base-64` packages.
```js
if (!global.DOMParser) {
    global.DOMParser = require('xmldom').DOMParser;
}
if (!global.atob || !global.btoa) {
    global.atob = require('base-64').decode;
    global.btoa = require('base-64').encode;
}
```

# Porting status

Review Core/ExchangeService methods in api document, Any method not marked private oe internal (internal marker is in description of method) is posted and can be used, open issue if it doe snot work

## List of ExchangeService methods available  
> ArchiveItems  
AutodiscoverUrl  
BindToGroupItems  
BindToItems  
ConvertId   
ConvertIds   
CopyItems  
CreateItems  
DeleteItems  
ExpandGroup  
FindAppointments  
FindFolders  
FindItems  
GetAttachments  
GetClientAccessToken   
GetPasswordExpirationDate  
GetRoomLists  
GetRooms   
GetUserAvailability  
GetUserOofSettings  
GetUserOofSettings   
LoadPropertiesForItems  
MarkAsJunk  
MoveItems  
ResolveName  
SetTeamMailbox   
SetUserOofSettings 
SetUserOofSettings   
SubscribeToPullNotifications   
SubscribeToStreamingNotifications   
SubscribeToStreamingNotificationsOnAllFolders  
SyncFolderHierarchy   
SyncFolderItems  
UnpinTeamMailbox   
UpdateItems  
GetInboxRules   
UpdateInboxRules   
AddDelegates   
GetDelegates  
RemoveDelegates   
UpdateDelegates   
GetUserRetentionPolicyTags    
FindConversation   
FindGroupConversation   
GetConversationItems   
GetGroupConversationItems   
EnableAlwaysCategorizeItemsInConversations   
DisableAlwaysCategorizeItemsInConversations   
EnableAlwaysDeleteItemsInConversations   
DisableAlwaysDeleteItemsInConversations   
EnableAlwaysMoveItemsInConversations   
DisableAlwaysMoveItemsInConversations   
MoveItemsInConversations   
CopyItemsInConversations   
DeleteItemsInConversations   
SetReadStateForItemsInConversations   
SetRetentionPolicyForItemsInConversations   
SetFlagStatusForItemsInConversations    
GetAppManifests    
GetAppMarketplaceUrl   
DisableApp   
InstallApp   
UninstallApp   
GetDiscoverySearchConfiguration   
GetHoldOnMailboxes   
GetNonIndexableItemDetails   
GetNonIndexableItemStatistics   
GetSearchableMailboxes   
SearchMailboxes   
SetHoldOnMailboxes   


## List of Folder object methods available

> BindToFolder  
CopyFolder  
CreateFolder  
DeleteFolder  
EmptyFolder  
FindFolders  
FindItems  
Load  
LoadPropertiesForFolder  
MarkAllItemsAsRead  
MarkAllItemsAsUnread  
RemoveExtendedProperty  
SetExtendedProperty  
MoveFolder  
Save  
UpdateFolder 

## List of Item object methods available

>ArchiveItem  
BindToItem  
CopyItem[s]  
CreateItem  
DeleteItem[s]  
FindAppointments  
FindItems  
LoadPropertiesForItems  
MarkAsJunk  
MoveItem  
SendItem  
Save  
UpdateItem[s]   
RemoveExtendedProperty  
SetExtendedProperty  
AcceptTentatively  *[Appointment]*  
AcceptTentatively  *[Appointment]*  
Decline            *[Appointment]*   


## Use in Cordova
AMD module for require.js to be included in build system, bower module and related documentation will be published.


# Tests
in progress....


# License
Licensed under MIT
