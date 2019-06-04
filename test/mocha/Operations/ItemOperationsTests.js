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
describe.skip("Item Operation tests", function () {
    var MyPropertySetId = new ExchangeWebService_1.Guid("{C11FF724-AA03-4555-9952-8FA248A11C3E}");
    var exch = new ExchangeWebService_1.ExchangeService(ExchangeWebService_1.ExchangeVersion.Exchange2013);
    exch.Url = new ExchangeWebService_1.Uri("https://fake");
    exch.Credentials = new ExchangeWebService_1.WebCredentials("username", "password");
    var mockXhr = new MockXHRApi_1.MockXHRApi();
    it.skip("find item and load extended property ", function (done) {
        mockXhr.requestXml = [MockXHRData_1.MockXHRData.Operations.ItemOperations.FindItemRequest1ItemView];
        mockXhr.responseXml = [MockXHRData_1.MockXHRData.Operations.ItemOperations.FindItemRequest1ItemViewResponse];
        var PR_TRANSPORT_MESSAGE_HEADERS = new ExchangeWebService_1.ExtendedPropertyDefinition(ExchangeWebService_1.MapiPropertyType.String, 0x007D);
        var psPropSet = new ExchangeWebService_1.PropertySet(ExchangeWebService_1.BasePropertySet.IdOnly, [PR_TRANSPORT_MESSAGE_HEADERS]);
        exch.XHRApi = mockXhr;
        ExchangeWebService_1.EwsLogging.DebugLogEnabled = false;
        exch.FindItems(ExchangeWebService_1.WellKnownFolderName.Inbox, new ExchangeWebService_1.ItemView(1))
            .then(function (response) {
            for (var _i = 0, _a = response.Items; _i < _a.length; _i++) {
                var item = _a[_i];
                mockXhr.requestXml = [MockXHRData_1.MockXHRData.Operations.ItemOperations.GetItemRequestWithIDandExtendedPropertyHeader];
                mockXhr.responseXml = [MockXHRData_1.MockXHRData.Operations.ItemOperations.GetItemRequestWithIDandExtendedPropertyHeaderResponse];
                item.Load(psPropSet)
                    .then(function (loadResp) {
                    var outval = { outValue: null };
                    if (item.TryGetExtendedProperty(PR_TRANSPORT_MESSAGE_HEADERS, outval)) {
                        chai.assert(outval.outValue.indexOf("from BN3PR09MB0564.namprd09.prod.outlook.com") >= 0);
                        done();
                    }
                });
            }
        });
    });
    it("Create extended property ", function (done) {
        mockXhr.requestXml = [MockXHRData_1.MockXHRData.Operations.ItemOperations.FindItemRequest1ItemView];
        mockXhr.responseXml = [MockXHRData_1.MockXHRData.Operations.ItemOperations.FindItemRequest1ItemViewResponse];
        var PR_TRANSPORT_MESSAGE_HEADERS = new ExchangeWebService_1.ExtendedPropertyDefinition(ExchangeWebService_1.MapiPropertyType.String, 0x007D);
        var psPropSet = new ExchangeWebService_1.PropertySet(ExchangeWebService_1.BasePropertySet.IdOnly, [PR_TRANSPORT_MESSAGE_HEADERS]);
        exch.XHRApi = mockXhr;
        ExchangeWebService_1.EwsLogging.DebugLogEnabled = true;
        exch.FindItems(ExchangeWebService_1.WellKnownFolderName.Inbox, new ExchangeWebService_1.ItemView(1))
            .then(function (response) {
            for (var _i = 0, _a = response.Items; _i < _a.length; _i++) {
                var item = _a[_i];
                mockXhr.requestXml = [MockXHRData_1.MockXHRData.Operations.ItemOperations.GetItemRequestWithIDandExtendedPropertyHeader];
                mockXhr.responseXml = [MockXHRData_1.MockXHRData.Operations.ItemOperations.GetItemRequestWithIDandExtendedPropertyHeaderResponse];
                var extendedPropertyDefinition = new ExchangeWebService_1.ExtendedPropertyDefinition(MyPropertySetId, "Expiration Date", ExchangeWebService_1.MapiPropertyType.String);
                item.SetExtendedProperty(extendedPropertyDefinition, ExchangeWebService_1.DateTime.Now.Add(2, "days").ToISOString());
                item.Update(ExchangeWebService_1.ConflictResolutionMode.AutoResolve)
                    //item.Load(psPropSet)
                    .then(function (loadResp) {
                    var outval = { outValue: null };
                    if (item.TryGetExtendedProperty(PR_TRANSPORT_MESSAGE_HEADERS, outval)) {
                        chai.assert(outval.outValue.indexOf("from BN3PR09MB0564.namprd09.prod.outlook.com") >= 0);
                        done();
                    }
                });
            }
        });
    });
});
