import {useCustomPromise, useCustomXhr, Uri, AttendeeInfo, TimeZoneDefinition, TimeWindow, DateTime, TimeSpan, DateTimeKind, TimeZoneInfo, AvailabilityData, EmailMessageSchema, ItemSchema, AggregateType, SortDirection, AutodiscoverService, ExchangeVersion, ExchangeCredentials, ExchangeService,
    UserSettingName, DomainSettingName, BasePropertySet, PropertySet, EnumHelper, FolderId, WellKnownFolderName, DOMParser, ItemView, Grouping, EmailMessage,
    EwsLogging, AppointmentSchema, CalendarActionResults, EwsUtilities, MeetingCancellation, MeetingRequest, MeetingResponse, Appointment, Item, StringHelper,
    ResolveNameSearchLocation, ExtendedPropertyDefinition, MapiPropertyType, ConflictResolutionMode, Guid, DefaultExtendedPropertySet, SendInvitationsMode, MessageBody,
    CalendarView, OofSettings, OofState, OofExternalAudience, OofReply, BodyType} from "../../src/js/ExchangeWebService";

import {MockXHRApi} from "../MockXHRApi";
import {MockXHRData} from "../MockXHRData";
    
var credentials: any = undefined;
if (typeof window === 'undefined') {
    credentials = require("./credentials");
}
else {
    credentials = { username: "username", password: "password" }
}
export class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    div: HTMLElement
    timerToken: number;
    identity: <T>(arg: T[]) => T;
    loggingIdentity: <T extends string>(arg: T) => T


    start() {

        var exch = new ExchangeService(ExchangeVersion.Exchange2013);
        exch.Credentials = new ExchangeCredentials(credentials.userName, credentials.password);
        exch.Url = new Uri("https://outlook.office365.com/Ews/Exchange.asmx");
        EwsLogging.DebugLogEnabled = true;

        var appt = new Appointment(exch);
        appt.Start = new DateTime().Add(48, 'hour');
        appt.End = new DateTime().Add(49, 'hour');
        appt.Subject = "some subject";
        appt.Location = "Plot 371 2nd floor";
        appt.Body = new MessageBody(BodyType.HTML, "Some body text");
        appt.RequiredAttendees.Add("gs@mysupport.in");
        appt.RequiredAttendees.Add("mailtosinghs@gmail.com");

        appt.Save(SendInvitationsMode.SendToAllAndSaveCopy).then(() => {
            console.log("------------");
        }, (ei) => {
            console.log(ei.stack, ei.stack.split("\n"));
            console.log("error");
        });

        return;



        var mockXhr = new MockXHRApi();
        //exch.XHRApi = mockXhr;

        var oof = new OofSettings();
        oof.State = OofState.Enabled;
        oof.InternalReply = new OofReply("internal message");
        oof.ExternalReply = new OofReply("external message");
        //oof.AllowExternalOof = OofExternalAudience.All;        
        oof.ExternalAudience = OofExternalAudience.All;

        exch.SetUserOofSettings("grouptest@mysupport.in", oof).then((resp) => {
            //EwsLogging.Log(resp,true, true);
            console.log("------------");
        }, (ei) => {
            EwsLogging.Log(ei, true, true);
            console.log(ei.stack, ei.stack.split("\n"));
            console.log("------------");
        });

        return;
        exch.GetUserOofSettings("grouptest@mysupport.in").then((resp) => {
            EwsLogging.Log(resp, true, true);
            console.log("------------");
        }, (ei) => {
            EwsLogging.Log(ei, true, true);
            console.log(ei.stack, ei.stack.split("\n"));
            console.log("------------");
        });




        return;
        mockXhr.requestXml.push(MockXHRData.Operations.CalendarOperations.FindAppointmentRequest);
        mockXhr.responseXml.push(MockXHRData.Operations.CalendarOperations.FindAppointmentRequestResponseWith3results);
        exch.FindAppointments(WellKnownFolderName.Calendar, new CalendarView(DateTime.Now.Add(-7, "days"), DateTime.Now)).then((resp) => {
            EwsLogging.Log(resp, true, true);
            console.log("------------");
        }, (ei) => {
            EwsLogging.Log(ei, true, true);
            console.log(ei.stack, ei.stack.split("\n"));
            console.log("------------");
        });


        return;
        var msgattach = new EmailMessage(exch);
        msgattach.Subject = "Dentist Appointment";
        msgattach.Body = new MessageBody("The appointment is with Dr. Smith.");
        msgattach.ToRecipients.Add("grouptest@mysupport.in")
        var file = msgattach.Attachments.AddFileAttachment("filename to attach.txt", "c29tZSB0ZXh0");
        //file.
        msgattach.Send().then(() => {
            console.log("------------");
        }, (ei) => {
            EwsLogging.Log(ei, true, true);
            console.log(ei.stack, ei.stack.split("\n"));
            console.log("------------");
        });
        return;

        var appointment = new Appointment(exch);
        appointment.Subject = "Dentist Appointment";
        appointment.Body = new MessageBody("The appointment is with Dr. Smith.");
        appointment.Start = new DateTime(new Date(2016, 3, 1, 9, 0, 0));
        appointment.End = appointment.Start.Add(2, "hour");
        appointment.Save(SendInvitationsMode.SendToNone).then(() => {
            console.log("------------");
        }, (ei) => {
            EwsLogging.Log(ei, true, true);
            console.log(ei.stack, ei.stack.split("\n"));
            console.log("------------");
        });
        return;


        //exch.TimeZoneDefinition = new TimeZoneDefinition();


        var att1 = new AttendeeInfo("gs@singhspro.onmicrosoft.com");
        var att2 = new AttendeeInfo("gstest@singhspro.onmicrosoft.com");
        // var att1 = new AttendeeInfo("gautamsi@microsoft.com");
        // var att2 = new AttendeeInfo("abhijitp@microsoft.com");
        // var att3 = new AttendeeInfo("pardeb@microsoft.com");
        // var att4 = new AttendeeInfo("bakul.jais@microsoft.com");
        var tmw = new TimeWindow(DateTime.Now, new DateTime(DateTime.Now.TotalMilliSeconds + TimeSpan.FromHours(48).asMilliseconds()));
        var ats = [att1, att2];//, att3, att4];
        exch.GetUserAvailability(ats, tmw, AvailabilityData.FreeBusyAndSuggestions)
            .then((fi) => {
                //console.log("------found folder------" + fi.DisplayName + "--" + WellKnownFolderName[sr.ParentFolderId.FolderName]);
                EwsLogging.Log(fi, true, true);
                console.log("------------");
            }, (ei: any) => {
                EwsLogging.Log(ei, true, true);
                console.log(ei.stack, ei.stack.split("\n"));
                console.log("------------");
            });
        console.log("------------");
        return;


        var mockXhr = new MockXHRApi();
        exch.XHRApi = mockXhr
        mockXhr.requestXml = [MockXHRData.Operations.ItemOperations.FindItemRequest1ItemView];
        mockXhr.responseXml = [MockXHRData.Operations.ItemOperations.FindItemRequest1ItemViewResponse];
        var PR_TRANSPORT_MESSAGE_HEADERS = new ExtendedPropertyDefinition(MapiPropertyType.String, 0x007D);
        var EX_normalized_Subject = new ExtendedPropertyDefinition(MapiPropertyType.String, 0x0E1D); //https://willcode4foodblog.wordpress.com/2012/04/14/understanding-sharing-invitation-requests-ews-managed-api-1-2-part-2/
        var EX_prop2 = new ExtendedPropertyDefinition(DefaultExtendedPropertySet.InternetHeaders, "Content-Class", MapiPropertyType.String);
        var psPropSet = new PropertySet(BasePropertySet.IdOnly, [PR_TRANSPORT_MESSAGE_HEADERS, EX_normalized_Subject]);
        exch.FindItems(WellKnownFolderName.Inbox, new ItemView(1))
            .then((response) => {
                for (var item of response.Items) {
                    mockXhr.requestXml = [MockXHRData.Operations.ItemOperations.GetItemRequestWithIDandExtendedPropertyHeader];
                    mockXhr.responseXml = [MockXHRData.Operations.ItemOperations.GetItemRequestWithIDandExtendedPropertyHeaderResponse];

                    var MyPropertySetId: Guid = new Guid("{C11FF724-AA03-4555-9952-8FA248A11C3E}");
                    var extendedPropertyDefinition: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(MyPropertySetId, "Expiration Date", MapiPropertyType.String);
                    item.SetExtendedProperty(extendedPropertyDefinition, DateTime.Now.Add(2, "days").ToISOString());

                    item.Update(ConflictResolutionMode.AutoResolve)
                    item.Load(psPropSet)
                        .then((loadResp) => {
                            var outval = { outValue: null };
                            //EwsLogging.Log(item,true,true);
                            if (item.TryGetExtendedProperty(PR_TRANSPORT_MESSAGE_HEADERS, outval)) {
                                EwsLogging.Log(outval.outValue, true, true);
                            }
                        }, (err) => {
                            EwsLogging.Log(err, true, true);
                            EwsLogging.Log("-------------- error in loading item ----------", true, true);
                        });
                }
            }, (err) => {
                EwsLogging.Log(err, true, true);
                EwsLogging.Log("-------------- error in finditem ----------", true, true);
            });




        return;
        mockXhr.requestXml = [MockXHRData.Operations.ADOperations.DLExpansionRequest];
        mockXhr.responseXml = [MockXHRData.Operations.ADOperations.DLExpansionMultipleMembersSMTPtypeResponse];
        exch.ExpandGroup("group@contoso.com").then((response) => {
            EwsLogging.Log(response, true, true);
            EwsLogging.Log("-------------- request complete ----------", true, true);
        });

        return;




        mockXhr.requestXml = [MockXHRData.Operations.ADOperations.GetPasswordExpirationRequest];
        mockXhr.responseXml = [MockXHRData.Operations.ADOperations.GetPasswordExpirationResponse_NeverExpire];
        exch.GetPasswordExpirationDate("gstest@singhs.pro").then((response) => {
            EwsLogging.Log(response, true, true);
            EwsLogging.Log("-------------- request complete ----------", true, true);
        });

        return;


        exch.ResolveName("gstest", ResolveNameSearchLocation.DirectoryOnly, true, PropertySet.IdOnly)
            .then((response) => {
                EwsLogging.Log(response.Items[0].Mailbox.MailboxType, true, true);
                console.log(response._getItem(0).Contact.DirectoryPhoto);
                EwsLogging.Log("-------------- request complete ----------", true, true);
            });
        return;

        var items: Item[] = [];
        var item0: Item = null;
        exch.FindItems(WellKnownFolderName.SentItems, new ItemView(3))
            .then((response) => {
                items = response.Items;
                EwsLogging.Log(items[0], true, true);
            })
            .then(() => {
                exch.BindToItem(items[0].Id, PropertySet.IdOnly).then((response) => {
                    item0 = response;
                    EwsLogging.Log(item0, true, true);
                });
            })
            .then(() => {
                item0.Load()
                    .then((response) => {
                        EwsLogging.Log(item0, true, true);
                    });
            });

        return;
        //EwsLogging.DebugLogEnabled = true;
        //var dd = new ext.DOMParser()
        //var domdata = dd.parseFromString('<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"> <soap:Body> <soap:Fault> <faultcode>soap:Client</faultcode> <faultstring>Invalid input</faultstring> <faultactor >http://sseely2/AYS17Sept2002/Service1.asmx</faultactor> <detail> <PersonErrorInfo xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> <ItemInError TextValue="FirstError"></ItemInError> <CorrectRegularExpression >^([A-Z])([a-z])+</CorrectRegularExpression> </PersonErrorInfo> <PersonErrorInfo xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> <ItemInError>LastName</ItemInError> <CorrectRegularExpression >^([A-Z])([a-z])+</CorrectRegularExpression> </PersonErrorInfo> <PersonErrorInfo xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"> <ItemInError>EmailAddress</ItemInError> <CorrectRegularExpression >^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$</CorrectRegularExpression> </PersonErrorInfo> </detail> </soap:Fault> </soap:Body></soap:Envelope>', "text/xml");
        //var objdata = ext.Parsers.xml2js.parseXMLNode(domdata.documentElement, true);

        //var vv = objdata;
        //return;
        var colorName: string = Color[2];
        var cname = Object.prototype.toString.call(Color).slice(8, -1);;
        var rawXML = '<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"> <s:Header> <h:ServerVersionInfo MajorVersion="15" MinorVersion="1" MajorBuildNumber="154" MinorBuildNumber="18" Version="V2_42" xmlns:h="http://schemas.microsoft.com/exchange/services/2006/types" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"/> </s:Header> <s:Body> <m:GetFolderResponse xmlns:m="http://schemas.microsoft.com/exchange/services/2006/messages" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:t="http://schemas.microsoft.com/exchange/services/2006/types"> <m:ResponseMessages> <m:GetFolderResponseMessage ResponseClass="Success"> <m:ResponseCode>NoError</m:ResponseCode> <m:Folders> <t:CalendarFolder> <t:FolderId Id="AAMkADVmNzUzM2M2LTY1ODgtNGIwNS05NWUwLTE5MzJhNWRhNWIzZQAuAAAAAAAt9OU5vf4nTaa38x9WV1pGAQB0vGFf3HZOSb1IxPAYl2sPAAAAAAENAAA=" ChangeKey="AgAAABYAAAB0vGFf3HZOSb1IxPAYl2sPAAAAAAA3"/> <t:ParentFolderId Id="AAMkADVmNzUzM2M2LTY1ODgtNGIwNS05NWUwLTE5MzJhNWRhNWIzZQAuAAAAAAAt9OU5vf4nTaa38x9WV1pGAQB0vGFf3HZOSb1IxPAYl2sPAAAAAAEIAAA=" ChangeKey="AQAAAA=="/> <t:FolderClass>IPF.Appointment</t:FolderClass> <t:DisplayName>Calendar</t:DisplayName> <t:TotalCount>0</t:TotalCount> <t:ChildFolderCount>0</t:ChildFolderCount> <t:EffectiveRights> <t:CreateAssociated>true</t:CreateAssociated> <t:CreateContents>true</t:CreateContents> <t:CreateHierarchy>true</t:CreateHierarchy> <t:Delete>true</t:Delete> <t:Modify>true</t:Modify> <t:Read>true</t:Read> <t:ViewPrivateItems>true</t:ViewPrivateItems> </t:EffectiveRights> <t:PermissionSet> <t:CalendarPermissions> <t:CalendarPermission> <t:UserId> <t:DistinguishedUser>Default</t:DistinguishedUser> </t:UserId> <t:CanCreateItems>false</t:CanCreateItems> <t:CanCreateSubFolders>false</t:CanCreateSubFolders> <t:IsFolderOwner>false</t:IsFolderOwner> <t:IsFolderVisible>false</t:IsFolderVisible> <t:IsFolderContact>false</t:IsFolderContact> <t:EditItems>None</t:EditItems> <t:DeleteItems>None</t:DeleteItems> <t:ReadItems>TimeOnly</t:ReadItems> <t:CalendarPermissionLevel>FreeBusyTimeOnly</t:CalendarPermissionLevel> </t:CalendarPermission> <t:CalendarPermission> <t:UserId> <t:DistinguishedUser>Anonymous</t:DistinguishedUser> </t:UserId> <t:CanCreateItems>false</t:CanCreateItems> <t:CanCreateSubFolders>false</t:CanCreateSubFolders> <t:IsFolderOwner>false</t:IsFolderOwner> <t:IsFolderVisible>false</t:IsFolderVisible> <t:IsFolderContact>false</t:IsFolderContact> <t:EditItems>None</t:EditItems> <t:DeleteItems>None</t:DeleteItems> <t:ReadItems>None</t:ReadItems> <t:CalendarPermissionLevel>None</t:CalendarPermissionLevel> </t:CalendarPermission> </t:CalendarPermissions> </t:PermissionSet> </t:CalendarFolder> </m:Folders> </m:GetFolderResponseMessage> </m:ResponseMessages> </m:GetFolderResponse> </s:Body> </s:Envelope>';
        var parser = new DOMParser();
        //var xmlDoc = parser.parseFromString(rawXML, "text/xml");
        //this.treeWalker = this.xmlDoc.createTreeWalker(this.xmlDoc, NodeFilter.SHOW_ELEMENT, null, false);
        //this.currentNode = this.treeWalker.root;

        //var objjt = ext.xml2JsObject.parseXMLNode(xmlDoc.documentElement, true);
        //EwsLogging.DebugLog(objjt, true);

        //return;
        //var autod = new Microsoft.Exchange.WebServices.Autodiscover.AutodiscoverService("https://autodiscover-s.coutlook.com/autodiscover/autodiscover.svc", "singhspro.onmicrosoft.com", Microsoft.Exchange.WebServices.Data.ExchangeVersion.Exchange2013);
        //var autod = new AutodiscoverService();//"https://pod51045.outlook.com/autodiscover/autodiscover.svc", "singhspro.onmicrosoft.com", ExchangeVersion.Exchange2013);
        //autod.RedirectionUrlValidationCallback = (val) => { return true };
        //var autod = new AutodiscoverService("https://pod51045.outlook.com/autodiscover/autodiscover.svc", "microsoft.com", ExchangeVersion.Exchange2013);
        //var x = new Microsoft.Exchange.WebServices.Data.ExchangeService(Microsoft.Exchange.WebServices.Data.ExchangeVersion.Exchange2010_SP2);
        //autod.Credentials = new ExchangeCredentials(credentials.userName, credentials.password);
        //EwsLogging.DebugLog(exch.Credentials, true);
        //exch.TimeZoneDefinition = new TimeZoneDefinition();


        var att1 = new AttendeeInfo("gs@singhspro.onmicrosoft.com");
        var att2 = new AttendeeInfo("gstest@singhspro.onmicrosoft.com");
        // var att1 = new AttendeeInfo("gautamsi@microsoft.com");
        // var att2 = new AttendeeInfo("abhijitp@microsoft.com");
        // var att3 = new AttendeeInfo("pardeb@microsoft.com");
        // var att4 = new AttendeeInfo("bakul.jais@microsoft.com");
        var tmw = new TimeWindow(DateTime.Now, new DateTime(DateTime.Now.TotalMilliSeconds + TimeSpan.FromHours(48).asMilliseconds()));
        var ats = [att1, att2];//, att3, att4];
        exch.GetUserAvailability(ats, tmw, AvailabilityData.FreeBusyAndSuggestions)
            .then((fi) => {
                //console.log("------found folder------" + fi.DisplayName + "--" + WellKnownFolderName[sr.ParentFolderId.FolderName]);
                EwsLogging.Log(fi, true, true);
                for (var res in fi.SuggestionsResponse)
                    console.log("------------");
            }, (ei: any) => {
                EwsLogging.Log(ei, true, true);
                console.log(ei.stack, ei.stack.split("\n"));
                console.log("------------");
            });
        console.log("------------");
        return;
        return;

        var view = new ItemView(3);
        view.PropertySet = PropertySet.FirstClassProperties;
        //var sf = new SearchFilter.ContainsSubstring(ItemSchema.Subject,"test");
        var groupBy = new Grouping();
        groupBy.GroupOn = EmailMessageSchema.Instance.Subject;
        groupBy.AggregateOn = ItemSchema.Instance.DateTimeReceived;
        groupBy.AggregateType = AggregateType.Minimum;
        groupBy.SortDirection = SortDirection.Descending;
        exch.FindItems(new FolderId(WellKnownFolderName.SentItems), view, groupBy)
            .then((fi) => {
                //console.log("------found folder------" + fi.DisplayName + "--" + WellKnownFolderName[sr.ParentFolderId.FolderName]);
                EwsLogging.Log(fi, true, true);
                console.log("------------");
            }, (ei: any) => {
                EwsLogging.Log(ei, true, true);
                console.log(ei.stack, ei.stack.split("\n"));
                console.log("------------");
            });
        console.log("------------");
        return;


        var fid: FolderId = new FolderId(WellKnownFolderName.SentItems);
        exch.BindToFolder(fid, PropertySet.FirstClassProperties)
            .then((sr) => {
                console.log("------found folder------" + sr.DisplayName + "--");
                //EwsLogging.Log(sr, true, true);
                sr.FindItems(new ItemView(3))
                    .then((fi) => {
                        //console.log("------found folder------" + fi.DisplayName + "--" + WellKnownFolderName[sr.ParentFolderId.FolderName]);
                        EwsLogging.Log(fi, true, true);
                        console.log("------------");
                    }, (ei: any) => {
                        EwsLogging.Log(ei, true, true);
                        console.log("------------");
                    });
                console.log("------------");
            }, (e: any) => {
                EwsLogging.Log(e, true, true);
                console.log("------------");
            });



        return;
        //        var util = require('util');
        //        exch.AutodiscoverUrl("gs@singhspro.onmicrosoft.com",(url) => { return true; }).then((resp) => {
        //            console.log(util.inspect(exch.Url, { showHidden: false, depth: null, colors: true }));
        //            exch.BindToFolder
        //            console.log("------------");
        //        },(err) => {
        //                
        //                console.log(util.inspect(err, { showHidden: false, depth: null, colors: true }));
        //                console.log("------------");
        //
        //            });
        //
        //        return;

        // var autod = new AutodiscoverService();//new Uri("https://pod51045.outlook.com/autodiscover/autodiscover.svc"), ExchangeVersion.Exchange2013);
        // autod.RedirectionUrlValidationCallback = (val) => { return true };      
        // autod.Credentials = new ExchangeCredentials(credentials.userName, credentials.password);
        // var s: UserSettingName[] = [];
        // s.push(UserSettingName.InternalEwsUrl);
        // s.push(UserSettingName.ExternalEwsUrl);

        // s.push(UserSettingName.UserDisplayName);
        // s.push(UserSettingName.UserDN);
        // s.push(UserSettingName.EwsPartnerUrl);
        // s.push(UserSettingName.DocumentSharingLocations);
        // s.push(UserSettingName.MailboxDN);
        // s.push(UserSettingName.ActiveDirectoryServer);
        // s.push(UserSettingName.CasVersion);
        // s.push(UserSettingName.ExternalWebClientUrls);
        // s.push(UserSettingName.ExternalImap4Connections);
        // s.push(UserSettingName.AlternateMailboxes);
        // //autod.GetUserSettings(["gstest@singhspro.onmicrosoft.com", "gstest@singhspro.onmicrosoft.com"], s)
        // autod.GetUserSettings("gstest@singhspro.onmicrosoft.com", UserSettingName.InternalEwsUrl, UserSettingName.ExternalEwsUrl, UserSettingName.AlternateMailboxes, UserSettingName.MailboxDN, UserSettingName.CasVersion, UserSettingName.DocumentSharingLocations, UserSettingName.ActiveDirectoryServer, UserSettingName.EwsPartnerUrl)
        //     .then((sr) => {
        //         var util = require('util');
        //         console.log(util.inspect(sr, { showHidden: false, depth: null, colors: true }));
        //         console.log(autod.Url.ToString());
        //         //console.log(sr);
        //         console.log("------------");
        //     }, (e: any) => {
        //         var util = require('util');
        //         console.log(util.inspect(e, { showHidden: false, depth: null, colors: true }));
        //         console.log("------------");
        //     });
        // return;
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


//{ "Body" : 
//    { "FolderIds" : 
//        [ 
//        { "Id" : "inbox",
//            "__type" : "DistinguishedFolderId:#Exchange"
//          } 
//      ],
//      "FolderShape" : 
//        { "BaseShape" : "AllProperties" 
//        }
//    },
//  "Header" : 
//    { "RequestServerVersion" : "Exchange2013_SP1" 
//    }
//}
// -----------fault code
//{ __prefix: 's',
//  __xmlns:
//   { s: 'http://schemas.xmlsoap.org/soap/envelope/',
//     a: 'http://schemas.microsoft.com/exchange/services/2006/types',
//     e: 'http://schemas.microsoft.com/exchange/services/2006/errors',
//     t: 'http://schemas.microsoft.com/exchange/services/2006/types' },
//  Body:
//   { __prefix: 's',
//     Fault:
//      { __prefix: 's',
//        faultcode: 'a:ErrorSchemaValidation',
//        faultstring:
//         { 'xml:lang': 'en-US',
//           faultstring: 'The request failed schema validation: The required attribute \'Id\' is missing.' },
//        detail:
//         { ResponseCode: 'ErrorSchemaValidation',
//           Message: 'The request failed schema validation.',
//           MessageXml:
//            { __prefix: 't',
//              LineNumber: '1',
//              LinePosition: '472',
//              Violation: 'The required attribute \'Id\' is missing.' } } } } }
