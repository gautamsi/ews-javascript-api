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
describe.skip("AD Operation tests", function () {
    var exch = new ExchangeWebService_1.ExchangeService(ExchangeWebService_1.ExchangeVersion.Exchange2010_SP1);
    exch.Url = new ExchangeWebService_1.Uri("https://fake");
    exch.Credentials = new ExchangeWebService_1.WebCredentials("username", "password");
    var mockXhr = new MockXHRApi_1.MockXHRApi();
    it("GetPasswordExpirationDate Operation ", function () {
        mockXhr.requestXml = [MockXHRData_1.MockXHRData.Operations.ADOperations.GetPasswordExpirationRequest];
        mockXhr.responseXml = [MockXHRData_1.MockXHRData.Operations.ADOperations.GetPasswordExpirationResponse_NeverExpire];
        exch.XHRApi = mockXhr;
        //EwsLogging.DebugLogEnabled = false;
        var promise = exch.GetPasswordExpirationDate("user@contoso.com");
        promise.should.eventually.deep.equal(ExchangeWebService_1.DateTime.Parse("9999-12-31T23:59:59.9999999Z"));
    });
    it("ExpandGroup Operation ", function () {
        mockXhr.requestXml = [MockXHRData_1.MockXHRData.Operations.ADOperations.DLExpansionRequest];
        mockXhr.responseXml = [MockXHRData_1.MockXHRData.Operations.ADOperations.DLExpansionMultipleMembersSMTPtypeResponse];
        exch.XHRApi = mockXhr;
        //EwsLogging.DebugLogEnabled = false;
        var promise = exch.ExpandGroup("group@contoso.com");
        promise.should.eventually.deep.property("Members[0].RoutingType", 'SMTP');
        promise.should.eventually.deep.property("Members[0].MailboxType", 4);
        promise.should.eventually.deep.property("Members[1].RoutingType", 'SMTP');
        promise.should.eventually.deep.property("Members[1].MailboxType", 4);
    });
});
