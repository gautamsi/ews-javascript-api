import {AutodiscoverService, useCustomXhr, ExchangeCredentials, ExchangeService, ExchangeVersion, UserSettingName, EwsLogging, Uri, DateTime}  from "../../../src/js/ExchangeWebService";
import {MockXHRApi} from "../../MockXHRApi";
import {MockXHRData} from "../../MockXHRData";

import chaiAsPromised = require('chai-as-promised');
import chai = require('chai');
chai.use(chaiAsPromised);
var expect = chai.expect;
chai.should();
describe.skip("AD Operation tests", () => {

	var exch = new ExchangeService(ExchangeVersion.Exchange2010_SP1);
	exch.Url = new Uri("https://fake");
	exch.Credentials = new ExchangeCredentials("username", "password");
	var mockXhr = new MockXHRApi();
	it("GetPasswordExpirationDate Operation ", () => {
		mockXhr.requestXml = [MockXHRData.Operations.ADOperations.GetPasswordExpirationRequest];
		mockXhr.responseXml = [MockXHRData.Operations.ADOperations.GetPasswordExpirationResponse_NeverExpire];

		exch.XHRApi = mockXhr;
		//EwsLogging.DebugLogEnabled = false;
		var promise = exch.GetPasswordExpirationDate("user@contoso.com");
		promise.should.eventually.deep.equal(DateTime.Parse("9999-12-31T23:59:59.9999999Z"));
	});

	it("ExpandGroup Operation ", () => {
		mockXhr.requestXml = [MockXHRData.Operations.ADOperations.DLExpansionRequest];
        mockXhr.responseXml = [MockXHRData.Operations.ADOperations.DLExpansionMultipleMembersSMTPtypeResponse];
        exch.XHRApi = mockXhr;
		//EwsLogging.DebugLogEnabled = false;
		var promise = exch.ExpandGroup("group@contoso.com");
		promise.should.eventually.deep.property("Members[0].RoutingType", 'SMTP');
		promise.should.eventually.deep.property("Members[0].MailboxType", 4);
		promise.should.eventually.deep.property("Members[1].RoutingType", 'SMTP');
		promise.should.eventually.deep.property("Members[1].MailboxType", 4);
	});
});