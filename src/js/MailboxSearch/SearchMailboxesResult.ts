import {MailboxQuery} from "./MailboxQuery";
import {SearchResultType} from "../Enumerations/SearchResultType";
import {KeywordStatisticsSearchResult} from "./KeywordStatisticsSearchResult";
import {SearchPreviewItem} from "./SearchPreviewItem";
import {FailedSearchMailbox} from "./FailedSearchMailbox";
import {SearchRefinerItem} from "./SearchRefinerItem";
import {MailboxStatisticsItem} from "./MailboxStatisticsItem";
import {EwsServiceXmlReader} from "../Core/EwsServiceXmlReader";
import {ExtendedPropertyCollection} from "../ComplexProperties/ExtendedPropertyCollection";
import {JsonObject} from "../Core/JsonObject";
export class SearchMailboxesResult {
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


//}



