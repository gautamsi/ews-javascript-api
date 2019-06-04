"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExchangeWebService_1 = require("../../src/js/ExchangeWebService");
var MockXHRApi_1 = require("../MockXHRApi");
var MockXHRData_1 = require("../MockXHRData");
var chaiAsPromised = require("chai-as-promised");
var chai = require("chai");
chai.use(chaiAsPromised);
var expect = chai.expect;
chai.should();
describe.skip("AutoDiscover tests", function () {
    describe("AutoDiscover settings with single user", function () {
        var autod = new ExchangeWebService_1.AutodiscoverService(ExchangeWebService_1.ExchangeVersion.Exchange2010_SP1);
        autod.Url = new ExchangeWebService_1.Uri("https://fake");
        autod.Credentials = new ExchangeWebService_1.WebCredentials("username", "password");
        var mockXhr = new MockXHRApi_1.MockXHRApi();
        it("GetUserSetting with single user", function () {
            mockXhr.requestXml = [MockXHRData_1.MockXHRData.AutoDiscover.autodiscoverRequestWithSingleUserRequest];
            mockXhr;
            mockXhr.responseXml = [MockXHRData_1.MockXHRData.AutoDiscover.autodiscoverRequestWithSingleUserResponse];
            autod.XHRApi = mockXhr;
            ExchangeWebService_1.EwsLogging.DebugLogEnabled = false;
            var promise = autod.GetUserSettings("gstest@singhspro.onmicrosoft.com", [ExchangeWebService_1.UserSettingName.ActiveDirectoryServer, ExchangeWebService_1.UserSettingName.AutoDiscoverSMTPAddress, ExchangeWebService_1.UserSettingName.CasVersion, ExchangeWebService_1.UserSettingName.ExternalEcpPhotoUrl, ExchangeWebService_1.UserSettingName.ExternalEwsUrl,
                ExchangeWebService_1.UserSettingName.ExternalOABUrl, ExchangeWebService_1.UserSettingName.MailboxDN, ExchangeWebService_1.UserSettingName.MailboxVersion, ExchangeWebService_1.UserSettingName.MobileMailboxPolicy, ExchangeWebService_1.UserSettingName.RedirectUrl, ExchangeWebService_1.UserSettingName.UserDisplayName, ExchangeWebService_1.UserSettingName.UserDN, ExchangeWebService_1.UserSettingName.UserMSOnline]);
            promise.should.eventually.have.deep.property("Settings[58]", 'https://outlook.office365.com/EWS/Exchange.asmx');
            promise.should.eventually.have.deep.property("Settings[89]", 'user@contoso.com');
        });
    });
});
