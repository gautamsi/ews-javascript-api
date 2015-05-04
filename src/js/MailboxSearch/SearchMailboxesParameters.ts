import MailboxQuery = require("./MailboxQuery");
import SearchResultType = require("../Enumerations/SearchResultType");
import SortDirection = require("../Enumerations/SortDirection");
import SearchPageDirection = require("../Enumerations/SearchPageDirection");
import PreviewItemResponseShape = require("./PreviewItemResponseShape");
class SearchMailboxesParameters {
    SearchQueries: MailboxQuery[];
    ResultType: SearchResultType;
    SortBy: string;
    SortOrder: SortDirection;
    PerformDeduplication: boolean;
    PageSize: number;
    PageDirection: SearchPageDirection;
    PageItemReference: string;
    PreviewItemResponseShape: PreviewItemResponseShape;
    Language: string;
}
export = SearchMailboxesParameters;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
