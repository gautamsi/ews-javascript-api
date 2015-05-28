import MultiResponseServiceRequest = require("./MultiResponseServiceRequest");
import MailboxQuery = require("../../MailboxSearch/MailboxQuery");
import SearchResultType = require("../../Enumerations/SearchResultType");
import PreviewItemResponseShape = require("../../MailboxSearch/PreviewItemResponseShape");
import SortDirection = require("../../Enumerations/SortDirection");
import SearchPageDirection = require("../../Enumerations/SearchPageDirection");
import ExchangeService = require("../ExchangeService");
import SearchMailboxesResponse = require("../Responses/SearchMailboxesResponse");
import ExchangeVersion = require("../../Enumerations/ExchangeVersion");
import EwsServiceXmlReader = require("../EwsServiceXmlReader");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class SearchMailboxesRequest extends MultiResponseServiceRequest<SearchMailboxesResponse> {
    SearchQueries: MailboxQuery[];//System.Collections.Generic.List<MailboxQuery>;
    ResultType: SearchResultType;
    PreviewItemResponseShape: PreviewItemResponseShape;
    SortOrder: SortDirection;
    SortByProperty: string;
    Language: string;
    PerformDeduplication: boolean;
    PageSize: number;
    PageItemReference: string;
    PageDirection: SearchPageDirection;
    private /*IDiscoveryVersionable.*/ServerVersion: number;
    private searchQueries: MailboxQuery[];//System.Collections.Generic.List<MailboxQuery>;
    private searchResultType: SearchResultType;
    private sortOrder: SortDirection;
    private sortByProperty: string;
    private performDeduplication: boolean;
    private pageSize: number;
    private pageItemReference: string;
    private pageDirection: SearchPageDirection;
    private previewItemResponseShape: PreviewItemResponseShape;
    CreateServiceResponse(service: ExchangeService, responseIndex: number): SearchMailboxesResponse { throw new Error("SearchMailboxesRequest.ts - CreateServiceResponse : Not implemented."); }
    GetExpectedResponseMessageCount(): number { throw new Error("SearchMailboxesRequest.ts - GetExpectedResponseMessageCount : Not implemented."); }
    GetMinimumRequiredServerVersion(): ExchangeVersion { throw new Error("SearchMailboxesRequest.ts - GetMinimumRequiredServerVersion : Not implemented."); }
    GetResponseMessageXmlElementName(): string { throw new Error("SearchMailboxesRequest.ts - GetResponseMessageXmlElementName : Not implemented."); }
    GetResponseXmlElementName(): string { throw new Error("SearchMailboxesRequest.ts - GetResponseXmlElementName : Not implemented."); }
    GetXmlElementName(): string { throw new Error("SearchMailboxesRequest.ts - GetXmlElementName : Not implemented."); }
    ParseResponse(reader: EwsServiceXmlReader): any { throw new Error("SearchMailboxesRequest.ts - ParseResponse : Not implemented."); }
    //ParseResponse(jsonBody: JsonObject): any { throw new Error("SearchMailboxesRequest.ts - ParseResponse : Not implemented."); }
    Validate(): any { throw new Error("SearchMailboxesRequest.ts - Validate : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("SearchMailboxesRequest.ts - WriteElementsToXml : Not implemented."); }
}
export = SearchMailboxesRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
