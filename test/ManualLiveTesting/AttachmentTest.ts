import {AutodiscoverService, ExchangeCredentials, ExchangeService, ConflictResolutionMode, Guid, ExtendedPropertyDefinition, MapiPropertyType, PropertySet, ExchangeVersion, ItemView, UserSettingName, EwsLogging, Uri, DateTime, WellKnownFolderName,
    DefaultExtendedPropertySet, BasePropertySet, Item, EmailMessage, Attachment, FileAttachment, ItemAttachment, AttachmentCollection, EmailAddress, MessageBody, FolderId, XmlElementNames
}  from "../../src/js/ExchangeWebService";
import {MockXHRApi} from "../MockXHRApi";
import {MockXHRData} from "../MockXHRData";

(() => {
    var AttachedFile = "textFile.txt"
    var AttachedFileContent = "c29tZSB0ZXh0";
    var exch = new ExchangeService(ExchangeVersion.Exchange2013);
    exch.Url = new Uri("https://fake");
    exch.Credentials = new ExchangeCredentials("username", "password");
    var mockXhr = new MockXHRApi();

    mockXhr.requestXml.push(MockXHRData.Operations.AttachmentOperations.FindItemWithItemAttachmentRequest);
    mockXhr.requestXml.push(MockXHRData.Operations.AttachmentOperations.LoadItemWithItemAttachmentRequest);
    mockXhr.requestXml.push(MockXHRData.Operations.AttachmentOperations.GetItemAttachmentRequest);

    mockXhr.responseXml.push(MockXHRData.Operations.AttachmentOperations.FindItemWithItemAttachmentResponse);
    mockXhr.responseXml.push(MockXHRData.Operations.AttachmentOperations.LoadItemWithItemAttachmentResponse);
    mockXhr.responseXml.push(MockXHRData.Operations.AttachmentOperations.GetItemAttachmentRequestResponse);

    exch.XHRApi = mockXhr;

    exch.FindItems(WellKnownFolderName.Inbox, new ItemView(1)).then((respFind) => {
        respFind.Items[0].Load()
            .then(() => {
                debugger;
                debugger;
                
                var attachment = respFind.Items[0].Attachments.Items[0];
                
                respFind.Items[0].Attachments.Items[0].Load().then(() => {
                    debugger;
                    debugger;
                    debugger;

                    console.log("Attachment count : " + respFind.Items[0].Attachments.Count);
                    console.log(respFind.Items[0].Attachments.__thisIndexer(0));
                },
                    (err) => {
                        debugger;

                        debugger;
                        console.log(err);
                    });
            },
            (err) => {
                debugger;
                debugger;

                console.log(err);
            })

    },
        (err) => {
            debugger;
            debugger;
            console.log(err);
        });








    return;
    //EwsLogging.DebugLogEnabled = false;
    var item = new EmailMessage(exch);
    item.ToRecipients.Add(new EmailAddress("user@contoso.com"));
    item.Body = new MessageBody("This message contains four file attachments.");
    item.Subject = "Message with Attachments";
    item.Attachments.AddFileAttachment(AttachedFile, AttachedFileContent);
    item.Attachments.AddFileAttachment(AttachedFile, AttachedFileContent);
    var itm = item.Attachments.AddItemAttachment<EmailMessage>(EmailMessage, XmlElementNames.Message);
    itm.Name = "Attachemnt name 1";
    item.SendAndSaveCopy()
        .then(() => {
            var b = "asdasd";
        });

})();