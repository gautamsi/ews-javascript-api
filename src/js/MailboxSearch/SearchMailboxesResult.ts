import MailboxQuery = require("./MailboxQuery");
import SearchResultType = require("../Enumerations/SearchResultType");
import KeywordStatisticsSearchResult = require("./KeywordStatisticsSearchResult");
import SearchPreviewItem = require("./SearchPreviewItem");
import FailedSearchMailbox = require("./FailedSearchMailbox");
import SearchRefinerItem = require("./SearchRefinerItem");
import MailboxStatisticsItem = require("./MailboxStatisticsItem");
import EwsServiceXmlReader = require("../Core/EwsServiceXmlReader");
import ExtendedPropertyCollection = require("../ComplexProperties/ExtendedPropertyCollection");
import JsonObject = require("../Core/JsonObject");
class SearchMailboxesResult {
    SearchQueries: MailboxQuery[];
    ResultType: SearchResultType;
    ItemCount: number;
    Size: number;
    PageItemCount: number;
    PageItemSize: number;
    KeywordStats: KeywordStatisticsSearchResult[];
    PreviewItems: SearchPreviewItem[];
    FailedMailboxes: FailedSearchMailbox[];
    Refiners: SearchRefinerItem[];
    MailboxStats: MailboxStatisticsItem[];
    GetRecipients(reader: EwsServiceXmlReader, elementName: string): string[] { throw new Error("SearchMailboxesResult.ts - GetRecipients : Not implemented."); }
    LoadExtendedPropertiesXml(reader: EwsServiceXmlReader): ExtendedPropertyCollection { throw new Error("SearchMailboxesResult.ts - LoadExtendedPropertiesXml : Not implemented."); }
    LoadFromJson(jsonObject: JsonObject): SearchMailboxesResult { throw new Error("SearchMailboxesResult.ts - LoadFromJson : Not implemented."); }
    LoadFromXml(reader: EwsServiceXmlReader): SearchMailboxesResult { throw new Error("SearchMailboxesResult.ts - LoadFromXml : Not implemented."); }
    LoadKeywordStatsXml(reader: EwsServiceXmlReader): KeywordStatisticsSearchResult[] { throw new Error("SearchMailboxesResult.ts - LoadKeywordStatsXml : Not implemented."); }
    LoadPreviewItemsXml(reader: EwsServiceXmlReader): SearchPreviewItem[] { throw new Error("SearchMailboxesResult.ts - LoadPreviewItemsXml : Not implemented."); }
}
export = SearchMailboxesResult;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
