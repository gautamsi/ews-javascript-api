import {AutodiscoverService, useCustomXhr, ExchangeCredentials, ExchangeService, ConflictResolutionMode, Guid, ExtendedPropertyDefinition, MapiPropertyType, PropertySet, ExchangeVersion, ItemView, UserSettingName, EwsLogging, Uri, DateTime, WellKnownFolderName, DefaultExtendedPropertySet, BasePropertySet}  from "../../../src/js/ExchangeWebService";
import {MockXHRApi} from "../../MockXHRApi";
import {MockXHRData} from "../../MockXHRData";

import chaiAsPromised = require('chai-as-promised');
import chai = require('chai');
chai.use(chaiAsPromised);
var expect = chai.expect;
chai.should();
describe.skip("Calendar Operation tests", () => {
    var MyPropertySetId: Guid = new Guid("{C11FF724-AA03-4555-9952-8FA248A11C3E}");
    var exch = new ExchangeService(ExchangeVersion.Exchange2013);
    exch.Url = new Uri("https://fake");
    exch.Credentials = new ExchangeCredentials("username", "password");
    var mockXhr = new MockXHRApi();
    it.skip("find appointments and load extended property ", (done) => {
        mockXhr.requestXml = [MockXHRData.Operations.ItemOperations.FindItemRequest1ItemView];
        mockXhr.responseXml = [MockXHRData.Operations.ItemOperations.FindItemRequest1ItemViewResponse];
        var PR_TRANSPORT_MESSAGE_HEADERS = new ExtendedPropertyDefinition(MapiPropertyType.String, 0x007D);
        var psPropSet = new PropertySet(BasePropertySet.IdOnly, [PR_TRANSPORT_MESSAGE_HEADERS]);
        exch.XHRApi = mockXhr;
        EwsLogging.DebugLogEnabled = false;
        exch.FindItems(WellKnownFolderName.Inbox, new ItemView(1))
            .then((response) => {
                for (var item of response.Items) {
                    mockXhr.requestXml = [MockXHRData.Operations.ItemOperations.GetItemRequestWithIDandExtendedPropertyHeader];
                    mockXhr.responseXml = [MockXHRData.Operations.ItemOperations.GetItemRequestWithIDandExtendedPropertyHeaderResponse];
                    item.Load(psPropSet)
                        .then((loadResp) => {
                            var outval = { outValue: null };
                            if (item.TryGetExtendedProperty(PR_TRANSPORT_MESSAGE_HEADERS, outval)) {
                                chai.assert((<string>outval.outValue).indexOf("from BN3PR09MB0564.namprd09.prod.outlook.com") >= 0);
                                done();
                            }
                        });
                }
            });
    });

    it("Create extended property ", (done) => {
        mockXhr.requestXml = [MockXHRData.Operations.ItemOperations.FindItemRequest1ItemView];
        mockXhr.responseXml = [MockXHRData.Operations.ItemOperations.FindItemRequest1ItemViewResponse];
        var PR_TRANSPORT_MESSAGE_HEADERS = new ExtendedPropertyDefinition(MapiPropertyType.String, 0x007D);
        var psPropSet = new PropertySet(BasePropertySet.IdOnly, [PR_TRANSPORT_MESSAGE_HEADERS]);
        exch.XHRApi = mockXhr;
        EwsLogging.DebugLogEnabled = true;
        exch.FindItems(WellKnownFolderName.Inbox, new ItemView(1))
            .then((response) => {
                for (var item of response.Items) {
                    mockXhr.requestXml = [MockXHRData.Operations.ItemOperations.GetItemRequestWithIDandExtendedPropertyHeader];
                    mockXhr.responseXml = [MockXHRData.Operations.ItemOperations.GetItemRequestWithIDandExtendedPropertyHeaderResponse];
                    var extendedPropertyDefinition: ExtendedPropertyDefinition = new ExtendedPropertyDefinition(MyPropertySetId, "Expiration Date", MapiPropertyType.String);

                    item.SetExtendedProperty(extendedPropertyDefinition, DateTime.Now.Add(2, "days").ToISOString());
                    item.Update(ConflictResolutionMode.AutoResolve)
                        //item.Load(psPropSet)
                        .then((loadResp) => {
                            var outval = { outValue: null };
                            if (item.TryGetExtendedProperty(PR_TRANSPORT_MESSAGE_HEADERS, outval)) {
                                chai.assert((<string>outval.outValue).indexOf("from BN3PR09MB0564.namprd09.prod.outlook.com") >= 0);
                                done();
                            }
                        });
                }
            });
    });

});