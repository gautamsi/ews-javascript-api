import {AutodiscoverService, useCustomXhr, ExchangeCredentials, ExchangeService, ConflictResolutionMode, Guid, ExtendedPropertyDefinition, MapiPropertyType, PropertySet, ExchangeVersion, ItemView, UserSettingName, EwsLogging, Uri, DateTime, WellKnownFolderName,
DefaultExtendedPropertySet, BasePropertySet, Item, EmailMessage, Attachment, FileAttachment, ItemAttachment, AttachmentCollection, EmailAddress, MessageBody, FolderId
}  from "../../../src/js/ExchangeWebService";
import {MockXHRApi} from "../../MockXHRApi";
import {MockXHRData} from "../../MockXHRData";

import chaiAsPromised = require('chai-as-promised');
import chai = require('chai');
chai.use(chaiAsPromised);
var expect = chai.expect;
chai.should();
describe("Attachment Operation tests", () => {
    var AttachedFile = "textFile.txt"
    var AttachedFileContent = "c29tZSB0ZXh0";
    var exch = new ExchangeService(ExchangeVersion.Exchange2013);
    exch.Url = new Uri("https://fake");
    exch.Credentials = new ExchangeCredentials("username", "password");
    var mockXhr = new MockXHRApi();
    it("Create and Send Attachment", (done) => {
        mockXhr.requestXml = [MockXHRData.Operations.AttachmentOperations.CreateItemWithAttachment];
        mockXhr.responseXml = [MockXHRData.Operations.AttachmentOperations.CreateItemWithAttachmentResponse];
        var PR_TRANSPORT_MESSAGE_HEADERS = new ExtendedPropertyDefinition(MapiPropertyType.String, 0x007D);
        exch.XHRApi = mockXhr;
        //EwsLogging.DebugLogEnabled = false;
        var item = new EmailMessage(exch);
        item.ToRecipients.Add(new EmailAddress("user@contoso.com"));
        item.Body = new MessageBody("This message contains four file attachments.");
        item.Subject = "Message with Attachments";
        item.Attachments.AddFileAttachment(AttachedFile, AttachedFileContent);
        exch.SendItem(item, new FolderId(WellKnownFolderName.SentItems))
            .then(() => {

                chai.assert(true);
                done();
            });
    });
});