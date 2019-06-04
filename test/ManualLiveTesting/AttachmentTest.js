"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExchangeWebService_1 = require("../../src/js/ExchangeWebService");
var MockXHRApi_1 = require("../MockXHRApi");
var MockXHRData_1 = require("../MockXHRData");
(function () {
    var AttachedFile = "textFile.txt";
    var AttachedFileContent = "c29tZSB0ZXh0";
    var exch = new ExchangeWebService_1.ExchangeService(ExchangeWebService_1.ExchangeVersion.Exchange2013);
    exch.Url = new ExchangeWebService_1.Uri("https://fake");
    exch.Credentials = new ExchangeWebService_1.WebCredentials("username", "password");
    var mockXhr = new MockXHRApi_1.MockXHRApi();
    mockXhr.requestXml.push(MockXHRData_1.MockXHRData.Operations.AttachmentOperations.FindItemWithItemAttachmentRequest);
    mockXhr.requestXml.push(MockXHRData_1.MockXHRData.Operations.AttachmentOperations.LoadItemWithItemAttachmentRequest);
    mockXhr.requestXml.push(MockXHRData_1.MockXHRData.Operations.AttachmentOperations.GetItemAttachmentRequest);
    mockXhr.responseXml.push(MockXHRData_1.MockXHRData.Operations.AttachmentOperations.FindItemWithItemAttachmentResponse);
    mockXhr.responseXml.push(MockXHRData_1.MockXHRData.Operations.AttachmentOperations.LoadItemWithItemAttachmentResponse);
    mockXhr.responseXml.push(MockXHRData_1.MockXHRData.Operations.AttachmentOperations.GetItemAttachmentRequestResponse);
    exch.XHRApi = mockXhr;
    exch.FindItems(ExchangeWebService_1.WellKnownFolderName.Inbox, new ExchangeWebService_1.ItemView(1)).then(function (respFind) {
        respFind.Items[0].Load()
            .then(function () {
            debugger;
            debugger;
            var attachment = respFind.Items[0].Attachments.Items[0];
            respFind.Items[0].Attachments.Items[0].Load().then(function () {
                debugger;
                debugger;
                debugger;
                console.log("Attachment count : " + respFind.Items[0].Attachments.Count);
                console.log(respFind.Items[0].Attachments._getItem(0));
            }, function (err) {
                debugger;
                debugger;
                console.log(err);
            });
        }, function (err) {
            debugger;
            debugger;
            console.log(err);
        });
    }, function (err) {
        debugger;
        debugger;
        console.log(err);
    });
    return;
    //EwsLogging.DebugLogEnabled = false;
    var item = new ExchangeWebService_1.EmailMessage(exch);
    item.ToRecipients.Add(new ExchangeWebService_1.EmailAddress("user@contoso.com"));
    item.Body = new ExchangeWebService_1.MessageBody("This message contains four file attachments.");
    item.Subject = "Message with Attachments";
    item.Attachments.AddFileAttachment(AttachedFile, AttachedFileContent);
    item.Attachments.AddFileAttachment(AttachedFile, AttachedFileContent);
    var itm = item.Attachments.AddItemAttachment(ExchangeWebService_1.EmailMessage, ExchangeWebService_1.XmlElementNames.Message);
    itm.Name = "Attachemnt name 1";
    item.SendAndSaveCopy()
        .then(function () {
        var b = "asdasd";
    });
})();
