"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExchangeWebService_1 = require("../../../src/js/ExchangeWebService");
var MockXHRApi_1 = require("../../MockXHRApi");
var MockXHRData_1 = require("../../MockXHRData");
var chaiAsPromised = require("chai-as-promised");
var chai = require("chai");
chai.use(chaiAsPromised);
var expect = chai.expect;
chai.should();
describe("Attachment Operation tests", function () {
    var AttachedFile = "textFile.txt";
    var AttachedFileContent = "c29tZSB0ZXh0";
    var exch = new ExchangeWebService_1.ExchangeService(ExchangeWebService_1.ExchangeVersion.Exchange2013);
    exch.Url = new ExchangeWebService_1.Uri("https://fake");
    exch.Credentials = new ExchangeWebService_1.WebCredentials("username", "password");
    var mockXhr = new MockXHRApi_1.MockXHRApi();
    it("Create and Send Attachment", function (done) {
        mockXhr.requestXml = [MockXHRData_1.MockXHRData.Operations.AttachmentOperations.CreateItemWithAttachment];
        mockXhr.responseXml = [MockXHRData_1.MockXHRData.Operations.AttachmentOperations.CreateItemWithAttachmentResponse];
        var PR_TRANSPORT_MESSAGE_HEADERS = new ExchangeWebService_1.ExtendedPropertyDefinition(ExchangeWebService_1.MapiPropertyType.String, 0x007D);
        exch.XHRApi = mockXhr;
        //EwsLogging.DebugLogEnabled = false;
        var item = new ExchangeWebService_1.EmailMessage(exch);
        item.ToRecipients.Add(new ExchangeWebService_1.EmailAddress("user@contoso.com"));
        item.Body = new ExchangeWebService_1.MessageBody("This message contains four file attachments.");
        item.Subject = "Message with Attachments";
        item.Attachments.AddFileAttachment(AttachedFile, AttachedFileContent);
        exch.SendItem(item, new ExchangeWebService_1.FolderId(ExchangeWebService_1.WellKnownFolderName.SentItems))
            .then(function () {
            chai.assert(true);
            done();
        });
    });
});
