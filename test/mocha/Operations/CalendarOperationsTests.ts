import {AutodiscoverService, WebCredentials, ExchangeService, ConflictResolutionMode, Guid, ExtendedPropertyDefinition, MapiPropertyType, PropertySet, ExchangeVersion, ItemView, UserSettingName, EwsLogging, Uri, DateTime, WellKnownFolderName, DefaultExtendedPropertySet, BasePropertySet}  from "../../../src/js/ExchangeWebService";
import {TimeWindow, AttendeeInfo, AvailabilityData, ServiceResponseCollection, GetUserAvailabilityResults}  from "../../../src/js/ExchangeWebService";
import {MockXHRApi} from "../../MockXHRApi";
import {MockXHRData} from "../../MockXHRData";

import chaiAsPromised = require('chai-as-promised');
import chai = require('chai');
chai.use(chaiAsPromised);
var expect = chai.expect;
chai.should();
describe("Calendar Operation tests", () => {
    var MyPropertySetId: Guid = new Guid("{C11FF724-AA03-4555-9952-8FA248A11C3E}");
    var exch = new ExchangeService(ExchangeVersion.Exchange2013);
    exch.Url = new Uri("https://fake");
    exch.Credentials = new WebCredentials("username", "password");
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

    it.skip("Create extended property ", (done) => {
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

    it("GetUserAvailability handles empty WorkingPeriod DayOfWeek", (done) => {
        mockXhr.responseXml = [MockXHRData.Operations.CalendarOperations.GetUserAvailabilityRequestResponseWithEmptyDayOfWeek];

        exch.XHRApi = mockXhr;

        var timeWindow = new TimeWindow(
            new DateTime(new Date()),
            new DateTime(new Date(new Date().getTime() + (60 * 60 * 24 * 1000)))
        );
        var attendees = [new AttendeeInfo('test@example.com')];
        exch.GetUserAvailability(attendees, timeWindow, AvailabilityData.FreeBusy).then(
            function (response: GetUserAvailabilityResults) {
                chai.assert.equal(response.AttendeesAvailability.Count, 1);
                chai.assert.deepEqual(
                    response.AttendeesAvailability.Responses[0].WorkingHours.DaysOfTheWeek,
                    []
                );
                done();
            }
        );
    });

});