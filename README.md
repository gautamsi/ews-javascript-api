[![Gitter](https://badges.gitter.im/gautamsi/ews-javascript-api.svg)](https://gitter.im/gautamsi/ews-javascript-api?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
ews-javascript-api 
==================
## Exchange Web Service in JavaScript/TypeScript.

===========================================================================================
# Current State:
* Almost all methods in ExchangeService class is comple with respect to c# counterpart ([based on commit#31951f4 ](https://github.com/OfficeDev/ews-managed-api/commit/31951f456519786e41232fa9ff6a3ab20b56cac3)
    * some method skipped as they are not for client side code or are diaognostic methods. 
* Roadmap to Beta:
    * ~ReWrite XHR/Request and Promise see #94~ done
    * Rewrite Autodiscover code with fresh Promise approach, this code was my work in very beginning and poorly written, strategy and TypeScript features improved over time which this code isnt taking any advantage of.
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

EWS managed API for TypeScript/JavaScript - code ported from OfficeDev/ews-managed-api. availbale for nodejs, browser and mobile devices (cordova).  

Pluggable XHRApi adapter to replace client (browser) based XHR call with server brokered call (example coming soon). Example Ruby on rails, PHP or any server side framework where c# or nodejs is not available

Works with **Office 365/Exchange Online** and on-premises Exchange (2007 - 2016)

## Authentication
* Basic - inbuilt
* OAuth - inbuilt (see https://stackoverflow.com/a/43785262/5884960 for more details on how to use.)
* NTLM and NTLMv2 - using [ews-javascript-api-auth](https://github.com/gautamsi/ews-javascript-api-auth) 
* Cookies/FBA Authentication with TMG/ISA - using [ews-javascript-api-auth](https://github.com/gautamsi/ews-javascript-api-auth) 

> use SSL for basic authentication  
NTLM and Cookies Authentication works with nodejs only

## Modules
* commonjs module for NodeJs
* AMD module for other scenarios* (not documented yet)

All http call is wrapped in promise using default BlueBird promise.  You can also interchange compatible promise api.  
Code sample from [EWS Managed API 2.1.](https://msdn.microsoft.com/en-us/library/office/jj536567.aspx) should work with little modificaion to Promise format   
You can also leverage new async/await feature of nodejs (>7.0.6) or in TypeScript transpilation with es5/es6 code.  


## Documentation
Api document generated using TypeDoc and is hosted at [ews-javascript-api.github.io/api](http://ews-javascript-api.github.io/api).  ** outdated
Check [Wiki](https://github.com/gautamsi/ews-javascript-api/wiki) for more details

keep track of what is coming in [backlog](https://github.com/gautamsi/ews-javascript-api/milestones/backlog), keep eye on [milestones](https://github.com/gautamsi/ews-javascript-api/milestones) when I start working on it 

# Whats new v0.9.0

* new: [#94](https://github.com/gautamsi/ews-javascript-api/issues/94) new XHR algorithm and BlueBird like Promise support. default is Bluebird. Breaking changes published in #131. how to replace promise api, see pull request comment. This also enabled streaming subscription over ntlm authentication as well as cookies auth. see #65 
* new: [#180](https://github.com/gautamsi/ews-javascript-api/issues/180#issuecomment-302836777) can now use XHR api per `ExchangeService` instance see issue link for how to 
* new: [#148](https://github.com/gautamsi/ews-javascript-api/issues/148) TimeZone implemented, see comment of pull request for known issues and workaround
* new: [#145](https://github.com/gautamsi/ews-javascript-api/issues/145) various `OnChange`tracking is implemented, various array like fields (EmailSddresses, PhoneNumbers etc.)  can now be updated properly. see #137
* new: [#140](https://github.com/gautamsi/ews-javascript-api/issues/140) `DateTime` object is now more compatible with c# counterpart, see issue for more details on which all property and functions are available  
* new: [#131](https://github.com/gautamsi/ews-javascript-api/issues/131) Can this library be used in new Typescript projects - Typing field in package.json published. works as expected in latest typescript.  
* fix: [#181](https://github.com/gautamsi/ews-javascript-api/issues/181) - PropertySet comparison bug
* fix: [#178](https://github.com/gautamsi/ews-javascript-api/issues/178) - Throw error when call folder.FindFolders(folderView)
* fix: [#174](https://github.com/gautamsi/ews-javascript-api/issues/174) - Stop subscribe mailbox with unknown error - This also adds `OnResponseHeader` delegate on `StreamingSubscriptionConnection` object. helps in detemining when connection is established
* fix: [#167](https://github.com/gautamsi/ews-javascript-api/issues/167) - Exception.js does not handle Circular references - fixed issue with Exception Stack Trace when there is circular reference
* fix: [#164](https://github.com/gautamsi/ews-javascript-api/issues/164) - Can't update permissions on calendar folder
* fix: [#163](https://github.com/gautamsi/ews-javascript-api/issues/163) - BUG: FileAttachment.Load does not work, throws error
* fix: [#156](https://github.com/gautamsi/ews-javascript-api/issues/156) - AllDayEvent on Exchange2007_SP1
* fix: [#151](https://github.com/gautamsi/ews-javascript-api/issues/151) - Problems with Recurrence.RelativeMonthlyPattern
* fix: [#150](https://github.com/gautamsi/ews-javascript-api/issues/150) - Impossible to set Interval on Recurrence
* fix: [#143](https://github.com/gautamsi/ews-javascript-api/issues/143) - Get Email Message source - TextBody element was not captured due to the way code is organized.
* fix: [#137](https://github.com/gautamsi/ews-javascript-api/issues/137) - contact.Save not working properly || email adresses, phonenumbers etc. not saved.  #123 is also fixed.
* fix: [#126](https://github.com/gautamsi/ews-javascript-api/issues/126) - Mail attachment problem - wasnt working properly below 2013 version
* fix: [#65](https://github.com/gautamsi/ews-javascript-api/issues/65) - Is StreamingSubscriptionConnection api working on NTLM auth? - now it works
* fix: [#58](https://github.com/gautamsi/ews-javascript-api/issues/58) - Availability is using GMT and not leveraging user's current timezone

# Whats new v0.8.0

* new: [#48](https://github.com/gautamsi/ews-javascript-api/issues/48) ***eDiscovery operations*** availbale, [see MSDN: *eDiscovery in EWS* section on this link](https://msdn.microsoft.com/EN-US/library/office/jj190903(v=exchg.150).aspx#eDisc)
* new: [#120](https://github.com/gautamsi/ews-javascript-api/issues/120) missing method parameters for SetHoldOnMailboxes operation in c# library, but in EWS operation.
* fix: [#99](https://github.com/gautamsi/ews-javascript-api/issues/99) - Can't cancel meeting - TypeError

# Whats new v0.7.0

* new: [#46](https://github.com/gautamsi/ews-javascript-api/issues/46) ***UserConfiguration operations*** availbale, [see MSDN: *Working with user configuration objects by using the EWS Managed API 2.0*](https://msdn.microsoft.com/EN-US/library/office/gg274396(v=exchg.80).aspx)
> Caveat: all binary data and XML data should be converted to base64 string, this library assumes all base64 strings where binary data or c# byte[] is used.

# Whats new v0.6.2

* new: #100 ***More Item Types implemented*** 
* fix: #114 - ConversationQueryTraversal returns a soap fault
* fix: #91 - StreamingSubscriptionConnection.OnDisconnect not called for streaming subscription
* fix: #101 - FindItems() not fulfilled/rejected for an unauthorized request
* fix: #109 - Appointment: Recurrence is always null
* fix: #96 - SearchFilter collection not working
* fix: #99 - Can't cancel meeting - TypeError
* fix: #95 - Message body text not working
* fix/PR: #102 - SendCancellationsMode fix enum serialization
* fix: #86 - Issue with sending meeting responses 


# Whats new v0.6.0 (and fixed in 0.5.1 and 0.5.2)

* new: #41 ***App management operations*** availbale, [see MSDN: *Mail apps for Outlook* section by using EWS in Exchange](https://msdn.microsoft.com/en-us/library/office/jj190903(v=exchg.150).aspx#ewsmailapps)
* fix: #64 - small type fixed to prevent error in typing d.ts file
* fix: #69 - Fixed use of ComplexpropertyCollectioin type objects, there were issues in parsing this complex type with different elements in ews operations
* fix: #71 - Fixed `this` lexical scope in delegate calls when called by xhr promise. 
* fix: #76 - Fixed improper detection of ComplexProperty type and PropertyDefinition type inside PropertySet. 
* fix: #83 - Added `ServiceRequestUnauthorizedException` class to detect "Unauthorized" exception in case of 401 status code in http call.  `SoapFaultDetails.Exception` can be checked for this class type in case of 401 exception in xhr call.


# Whats new v0.5.0 

* new: ***Conversation operations*** availbale, [see MSDN: How to: Work with conversations by using EWS in Exchange](https://msdn.microsoft.com/en-us/library/office/dn610351(v=exchg.150).aspx)
* new: ***MRM operations*** now work, `GetUserRetentionPolicyTags` is ready to use [see MSDN: GetUserRetentionPolicyTags operation](https://msdn.microsoft.com/en-us/library/office/jj191089(v=exchg.150).aspx)
* fix: #60 -  use of `Mailbox` object cause error when used withuot `reoutingType` parameter, which should is `"SMTP"/null` by default. Constructor overloads have now implemented.
* fix: #61 - `AutodiscoverService.GetUserSettings` silently crashs when one of the user is not found in Exchange


# Whats new v0.4.0

* new: ***InboxRule Operations*** now works, `GetInboxRules` and `UpdateInboxRules` methods on ExchangeService now availbale [see MSDN: How to: Manage Inbox rules by using EWS in Exchange](https://msdn.microsoft.com/en-us/library/office/dn481313(v=exchg.150).aspx)
* new: ***Delegate management operations*** now work [see MSDN: Delegate access and EWS in Exchange](https://msdn.microsoft.com/EN-US/library/office/dn641957(v=exchg.150).aspx)

# Whats new v0.3.0 (including 0.2.8)

* new: ***Mailbox synchronization*** now works, `SyncFolderItems` and `SyncFolderHierarchy` ExchangeService now availbale [see MSDN for example](https://msdn.microsoft.com/en-us/library/office/dn440952(v=exchg.150).aspx)
* new: ***Pull Subscription*** should now work [use MSDN example](https://msdn.microsoft.com/en-us/library/office/dn458790(v=exchg.150).aspx)
* new: `SetTeamMailbox` and `UnpinTeamMailbox` ExchangeService methods now availbale. (`SetTeamMailbox` does not work with Office 365, Access Denied error, on-prem test is pending) See official MSDN reference for detail [ExchangeService.UnpinTeamMailbox method](https://msdn.microsoft.com/en-us/library/office/microsoft.exchange.webservices.data.exchangeservice.unpinteammailbox(v=exchg.80).aspx)
* new: `GetRooms` and `GetRoomLists` ExchangeService methods now availbale. See official MSDN reference for detail [ExchangeService.GetRooms method](https://msdn.microsoft.com/en-us/library/office/microsoft.exchange.webservices.data.exchangeservice.getrooms(v=exchg.80).aspx) and [ExchangeService.GetRoomLists method](https://msdn.microsoft.com/en-us/library/office/microsoft.exchange.webservices.data.exchangeservice.getroomlists(v=exchg.80).aspx)
* new: `ConvertId` and `ConvertIds` ExchangeService methods now availbale, see MSDN detail at [EWS Identifiers in Exchange](https://msdn.microsoft.com/EN-US/library/office/dn605828(v=exchg.150).aspx)
* new: `GetClientAccessToken` ExchangeService method now availbale, used with "Mail App" management, App management (#41) coming later
* fix: `ImpersonatedUserId` bug #34

# Whats new v0.2.7 (including 0.2.5 and 0.2.6)

* new: Streaming Notification code updated, see issue #24 for example. More details at [How to: Stream notifications about mailbox events by using EWS in Exchange](https://msdn.microsoft.com/en-us/library/office/dn458792(v=exchg.150).aspx)
* ~~new: Pull Subscription should also work [MSDN](https://msdn.microsoft.com/en-us/library/office/dn458790(v=exchg.150).aspx)~~ not updated yet, pushed to 0.2.8
* new: `SearchFilter` code update. See official MSDN link for examples [How to: Use search filters with EWS in Exchange](https://msdn.microsoft.com/en-us/library/office/dn579422(v=exchg.150).aspx)
* new: Some use of `ExtendedPropertyDefinition` works, see #23 for an example.
* new: `Grouping` class updated, it can be applied on `FindItems`
* new: `AccountLockout` detection in failed conenction. *Does not work with Office 365*
* improvements: `Contact` object related code udpate, fix code errors
* improvement: `SoapFaultDetails` updated for improved error handling, most EWS operation not return instance of `SoapFaultDetails` in case of any failure, it contains `Exception` property with information of failures oe exception in operation.
* fix: `FindItems` improvements
    * bug fixed where code was not updated to handle correct constructor overload
    * SearchFilter can be used
    * Grouping can be used
* 

# Whats new v0.2.3

* Appointment/CalendarItem code update
    * Appointment can be created using `new Appointment()`
    * Appointment can be saved with `Appointment.Save()`
    * Meeting invitation can be send using `Appointment.Save(SendInvitationsMode.SendToAllAndSaveCopy)`
    * issue - HTML Body is not working using `Appointment`
* `GetUserOofSettings` and `SetUserOofSettings` on ExchangeService is ready to be used.
* fix: Autodiscover issue fixed, where it throws exception when redirecting to office 365 using 302 redirect from CNAME dns record


# Whats new v0.2

* Attachment Operations
    * GetAttachment method - load attachment information from Attachemnt or AttachmentId
    * Create email message with attachment, sample code in Wiki


# Getting Started
## install
```shell
[sudo] npm install ews-javascript-api
``` 

## use
```javascript
//classic Javascript style
var ews = require('ews-javascript-api');
var exch = new ews.ExchangeService(ExchangeVersion.Exchange2013);
//ES6 TypeScript style
import {ExchangeService, AutodiscoverService, Folder, Item, ExchangeVersion} from "ews-javascript-api";
var exch = new ExchangeService(ExchangeVersion.Exchange2013);
```
## Autodiscover user settings
```javascript
//import ews module
var ews = require('ews-javascript-api');
//create AutodiscoverService object
var autod = new ews.AutodiscoverService(new ews.Uri("https://autodiscover-s.outlook.com/autodiscover/autodiscover.svc"), ews.ExchangeVersion.Exchange2010);
//you can omit url and it will autodiscover the url, version helps throw error on client side for unsupported operations.example - //var autod = new ews.AutodiscoverService(ews.ExchangeVersion.Exchange2010);
//set credential for service
autod.Credentials = new ews.ExchangeCredentials("userName", "password");
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
exch.Credentials = new ews.ExchangeCredentials("userName", "password");
//set ews endpoint url to use
exch.Url = new ews.Uri("https://outlook.office365.com/Ews/Exchange.asmx"); // you can also use exch.AutodiscoverUrl

var attendee =[ new ews.AttendeeInfo("email1@domain.com"), new ews.AttendeeInfo("email2@domain.com")];
//create timewindow object o request avaiability suggestions for next 48 hours, DateTime and TimeSpan object is created to mimic portion of .net datetime/timespan object using momentjs
var timeWindow = new ews.TimeWindow(ews.DateTime.Now, new ews.DateTime(ews.DateTime.Now.TotalMilliSeconds + ews.TimeSpan.FromHours(48).asMilliseconds())); 
exch.GetUserAvailability(attendee, timeWindow, ews.AvailabilityData.FreeBusyAndSuggestions)
.then(function (availabilityResponse) {
    //do what you want with user availability
}, function (errors) {
    //log errors or do something with errors
});
        
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
