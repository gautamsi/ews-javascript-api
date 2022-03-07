[![Gitter](https://badges.gitter.im/gautamsi/ews-javascript-api.svg)](https://gitter.im/gautamsi/ews-javascript-api?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
ews-javascript-api 
==================
# CHANGELOG

# Whats new v0.11.0
* **BREAKING** dependencies upgraded to latest version of commonjs module (still avoiding pure esm modules). The code is now compiled to es6 target, must use nodejs version >= 10
* Security update: updated all dependency to latest version.

# Whats new v0.10.0
* new/fix: #324 Autodiscover is back again, improved and supports DNS fallback using Autodiscover SRV records

# Whats new v0.9.6
* fix: #316 fixed issue where Update Item operation was failing.

# Whats new v0.9.5
* fix: #276 You can now use `FolderId` with `uniqueId` string parameter
* fix: #300 fix issue with `LegacyfreeBusyStatus` serialization, this also fixes lots of other enum attribute failing to serialize/de-serialize properly.
* fix - general: better detection of enum value in if condition for a value. default enum value of 0 is neglected earlier.

# Whats new v0.9.4 (no 0.9.3)

* new: you can now use ContactGroup for private DL functionality, `GroupMember` and `GroupMemberCollection` classes are implemented 
* new: added code for passing options to underlying Fetch library. most requested option was allowing use of untrusted certificate.  
* fix: #241 `ExtendedPropertyCollection` code updated, was not letting changes in Email or Phone number in contact object. 
* fix: #242 `SimpleServiceRequestBase` code improved, should prevent unhandled rejection in case of response status 200 and local parsing errors. 
* fix: #250 fixed writing logic for `ExtendedPropertyDefinition` propertyset in output xml. 
* fix: #256 `ServiceResponseCollection.GetEnumerator()` is now returning `Responses` array rather than throwing error. 
* fix: #261 added skipLibCheck option in tsconfig, otherwise building from source would be throwing some error for type checking in dependency libs. 
* fix: #274 fixed array initialization in `DeleteAttachmentRequest`, it was preventing any request to DeleteAttachment in EWS. 
* fix: #277 fixed an issue where setting `Contact.FileAsMapping` would not work and cause unhandled Excepttion 

## snippet for 0.9.4

### how to provide fetch options:
```ts
import {....., ConfigurationApi, .......} from 'ews-javascript-api';
// use this before instantiating ExchangeService 
ConfigurationApi.SetXHROptions({rejectUnauthorized : false});
```

for more details on which all options supported, see https://github.com/gautamsi/ews-javascript-api/blob/6618c29c08a5ad087abe9636c3128bef9837d4ae/src/js/XHRDefault.ts#L159 and https://github.com/andris9/fetch


# Whats new v0.9.2

* new: `ExchangeService.GetServerTimeZones()` can be used to get Windows TimeZone information from server
* fix: #207 fewer debugger statements. less annoyment when debugging code.
* DateTme and TimeZone related fixes, see #186, #187, #198, #209 

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

