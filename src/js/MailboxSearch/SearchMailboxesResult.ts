import { Convert } from "../ExtensionMethods";
import { DateTime } from "../DateTime";
import { EwsServiceJsonReader } from "../Core/EwsServiceJsonReader";
import { ExchangeService } from "../Core/ExchangeService";
import { ExtendedPropertyCollection } from "../ComplexProperties/ExtendedPropertyCollection";
import { FailedSearchMailbox } from "./FailedSearchMailbox";
import { Importance } from "../Enumerations/Importance";
import { ItemId } from "../ComplexProperties/ItemId";
import { KeywordStatisticsSearchResult } from "./KeywordStatisticsSearchResult";
import { MailboxQuery } from "./MailboxQuery";
import { MailboxSearchLocation } from "../Enumerations/MailboxSearchLocation";
import { MailboxSearchScope } from "./MailboxSearchScope";
import { MailboxStatisticsItem } from "./MailboxStatisticsItem";
import { PreviewItemMailbox } from "./PreviewItemMailbox";
import { SearchPreviewItem } from "./SearchPreviewItem";
import { SearchRefinerItem } from "./SearchRefinerItem";
import { SearchResultType } from "../Enumerations/SearchResultType";
import { XmlElementNames } from "../Core/XmlElementNames";

/**
 * Represents search mailbox result.
 * 
 * @sealed
 */
export class SearchMailboxesResult {

    /**
     * Search queries
     */
    SearchQueries: MailboxQuery[] = null;

    /**
     * Result type
     */
    ResultType: SearchResultType = SearchResultType.StatisticsOnly;

    /**
     * Item count
     */
    ItemCount: number = 0;

    /**
     * Total size
     * [CLSCompliant(false)]
     */
    Size: number = 0;

    /**
     * Page item count
     */
    PageItemCount: number = 0;

    /**
     * Total page item size
     * [CLSCompliant(false)]
     */
    PageItemSize: number = 0;

    /**
     * Keyword statistics search result
     */
    KeywordStats: KeywordStatisticsSearchResult[] = null;

    /**
     * Search preview items
     */
    PreviewItems: SearchPreviewItem[] = null;

    /**
     * Failed mailboxes
     */
    FailedMailboxes: FailedSearchMailbox[] = null;

    /**
     * Refiners
     */
    Refiners: SearchRefinerItem[] = null;

    /**
     * Mailbox statistics
     */
    MailboxStats: MailboxStatisticsItem[] = null;

    /**
     * Get collection of recipients
     *
     * @param   {any}   jsObject	Json Object converted from XML.
     * @return  {string[]}          Array of recipients
     */
    private static GetRecipients(jsObject: any): string[] {
        let recipients: string[] = EwsServiceJsonReader.ReadAsArray(jsObject, XmlElementNames.SmtpAddress)
        return recipients.length === 0 ? null : recipients;
    }

    /**
     * Load extended properties from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     * @return  {ExtendedPropertyCollection}     Extended properties collection
     */
    private static LoadExtendedPropertiesXmlJsObject(jsObject: any, service: ExchangeService): ExtendedPropertyCollection {
        let extendedProperties: ExtendedPropertyCollection = new ExtendedPropertyCollection();
        for (let extendedProperty of EwsServiceJsonReader.ReadAsArray(jsObject, XmlElementNames.ExtendedProperty)) {
            extendedProperties.LoadFromXmlJsObject(extendedProperty, service);
        }
        return extendedProperties.Count === 0 ? null : extendedProperties;
    }

    /**
     * Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     * @return  {SearchMailboxesResult}     Search result object
     */
    static LoadFromXmlJsObject(jsObject: any, service: ExchangeService): SearchMailboxesResult {
        let searchResult: SearchMailboxesResult = new SearchMailboxesResult();

        if (jsObject[XmlElementNames.SearchQueries]) {
            searchResult.SearchQueries = [];
            for (let searchQuery of EwsServiceJsonReader.ReadAsArray(jsObject[XmlElementNames.SearchQueries], XmlElementNames.SearchQuery)) {
                let query: string = searchQuery[XmlElementNames.Query];
                let mailboxSearchScopes: MailboxSearchScope[] = [];
                if (searchQuery[XmlElementNames.MailboxSearchScopes]) {
                    for (let mailboxSearchScope of EwsServiceJsonReader.ReadAsArray(searchQuery[XmlElementNames.MailboxSearchScopes], XmlElementNames.MailboxSearchScope)) {
                        let mailbox: string = mailboxSearchScope[XmlElementNames.Mailbox];
                        let searchScope: MailboxSearchLocation = MailboxSearchLocation[<string>mailboxSearchScope[XmlElementNames.SearchScope]];
                        mailboxSearchScopes.push(new MailboxSearchScope(mailbox, searchScope));
                    }
                }
                searchResult.SearchQueries.push(new MailboxQuery(query, mailboxSearchScopes));
            }
        }

        if (jsObject[XmlElementNames.ResultType]) {
            searchResult.ResultType = SearchResultType[<string>jsObject[XmlElementNames.ResultType]]
        }

        if (jsObject[XmlElementNames.ItemCount]) {
            searchResult.ItemCount = Convert.toNumber(jsObject[XmlElementNames.ItemCount]);
        }

        if (jsObject[XmlElementNames.Size]) {
            searchResult.Size = Convert.toNumber(jsObject[XmlElementNames.Size]);
        }

        if (jsObject[XmlElementNames.PageItemCount]) {
            searchResult.PageItemCount = Convert.toNumber(jsObject[XmlElementNames.PageItemCount]);
        }

        if (jsObject[XmlElementNames.PageItemSize]) {
            searchResult.PageItemSize = Convert.toNumber(jsObject[XmlElementNames.PageItemSize]);
        }

        if (jsObject[XmlElementNames.KeywordStats]) {
            searchResult.KeywordStats = this.LoadKeywordStatsXmlJsObject(jsObject[XmlElementNames.KeywordStats]);
        }

        if (jsObject[XmlElementNames.Items]) {
            searchResult.PreviewItems = this.LoadPreviewItemsXmlJsObject(jsObject[XmlElementNames.Items], service);
        }

        if (jsObject[XmlElementNames.FailedMailboxes]) {
            searchResult.FailedMailboxes = FailedSearchMailbox.LoadFromXmlJsObject(jsObject[XmlElementNames.FailedMailboxes], service);
        }

        if (jsObject[XmlElementNames.Refiners]) {
            let refiners: SearchRefinerItem[] = [];
            for (let refiner of EwsServiceJsonReader.ReadAsArray(jsObject[XmlElementNames.Refiners], XmlElementNames.Refiner)) {
                refiners.push(SearchRefinerItem.LoadFromXmlJsObject(refiner, service));
            }
            if (refiners.length > 0) {
                searchResult.Refiners = refiners;
            }
        }

        if (jsObject[XmlElementNames.MailboxStats]) {
            let mailboxStats: MailboxStatisticsItem[] = [];
            for (let mailboxStat of EwsServiceJsonReader.ReadAsArray(jsObject[XmlElementNames.MailboxStats], XmlElementNames.MailboxStat)) {
                mailboxStats.push(MailboxStatisticsItem.LoadFromXmlJsObject(mailboxStat, service));
            }
            if (mailboxStats.length > 0) {
                searchResult.MailboxStats = mailboxStats;
            }
        }

        return searchResult;
    }

    /**
     * Load keyword stats from XML.
     *
     * @param   {any}   jsObject	Json Object converted from XML.
     * @return  {KeywordStatisticsSearchResult[]}       Array of keyword statistics
     */
    private static LoadKeywordStatsXmlJsObject(jsObject: any): KeywordStatisticsSearchResult[] {
        let keywordStats: KeywordStatisticsSearchResult[] = [];
        for (let keywordStatObj of EwsServiceJsonReader.ReadAsArray(jsObject, XmlElementNames.KeywordStat)) {
            let keywordStat: KeywordStatisticsSearchResult = new KeywordStatisticsSearchResult();
            keywordStat.Keyword = jsObject[XmlElementNames.Keyword];
            keywordStat.ItemHits = Convert.toNumber(jsObject[XmlElementNames.ItemHits]);
            keywordStat.Size = Convert.toNumber(jsObject[XmlElementNames.Size]);
            keywordStats.push(keywordStat);
        }
        return keywordStats.length === 0 ? null : keywordStats;
    }

    /**
     * Load preview items from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.    
     * @return  {SearchPreviewItem[]}     Array of preview items
     */
    private static LoadPreviewItemsXmlJsObject(jsObject: any, service: ExchangeService): SearchPreviewItem[] {
        let previewItems: SearchPreviewItem[] = [];
        for (let searchPreviewItem of EwsServiceJsonReader.ReadAsArray(jsObject, XmlElementNames.SearchPreviewItem)) {
            let previewItem: SearchPreviewItem = new SearchPreviewItem();

            if (searchPreviewItem[XmlElementNames.Id]) {
                previewItem.Id = new ItemId();
                previewItem.Id.LoadFromXmlJsObject(searchPreviewItem[XmlElementNames.Id], service);
            }

            if (searchPreviewItem[XmlElementNames.ParentId]) {
                previewItem.ParentId = new ItemId();
                previewItem.ParentId.LoadFromXmlJsObject(searchPreviewItem[XmlElementNames.ParentId], service);
            }

            if (searchPreviewItem[XmlElementNames.Mailbox]) {
                previewItem.Mailbox = new PreviewItemMailbox();
                previewItem.Mailbox.MailboxId = searchPreviewItem[XmlElementNames.Mailbox][XmlElementNames.MailboxId];
                previewItem.Mailbox.PrimarySmtpAddress = searchPreviewItem[XmlElementNames.Mailbox][XmlElementNames.PrimarySmtpAddress];
            }

            //missing in official repo
            if (searchPreviewItem[XmlElementNames.ItemClass]) {
                previewItem.ItemClass = searchPreviewItem[XmlElementNames.ItemClass];
            }

            if (searchPreviewItem[XmlElementNames.UniqueHash]) {
                previewItem.UniqueHash = searchPreviewItem[XmlElementNames.UniqueHash];
            }

            if (searchPreviewItem[XmlElementNames.SortValue]) {
                previewItem.SortValue = searchPreviewItem[XmlElementNames.SortValue];
            }

            if (searchPreviewItem[XmlElementNames.OwaLink]) {
                previewItem.OwaLink = searchPreviewItem[XmlElementNames.OwaLink];
            }

            if (searchPreviewItem[XmlElementNames.Sender]) {
                previewItem.Sender = searchPreviewItem[XmlElementNames.Sender];
            }

            if (searchPreviewItem[XmlElementNames.ToRecipients]) {
                previewItem.ToRecipients = this.GetRecipients(searchPreviewItem[XmlElementNames.ToRecipients]);
            }

            if (searchPreviewItem[XmlElementNames.CcRecipients]) {
                previewItem.CcRecipients = this.GetRecipients(searchPreviewItem[XmlElementNames.CcRecipients]);
            }

            if (searchPreviewItem[XmlElementNames.BccRecipients]) {
                previewItem.BccRecipients = this.GetRecipients(searchPreviewItem[XmlElementNames.BccRecipients]);
            }

            if (searchPreviewItem[XmlElementNames.CreatedTime]) {
                previewItem.CreatedTime = DateTime.Parse(searchPreviewItem[XmlElementNames.CreatedTime]);
            }

            if (searchPreviewItem[XmlElementNames.ReceivedTime]) {
                previewItem.ReceivedTime = DateTime.Parse(searchPreviewItem[XmlElementNames.ReceivedTime]);
            }

            if (searchPreviewItem[XmlElementNames.SentTime]) {
                previewItem.SentTime = DateTime.Parse(searchPreviewItem[XmlElementNames.SentTime]);
            }

            if (searchPreviewItem[XmlElementNames.Subject]) {
                previewItem.Subject = searchPreviewItem[XmlElementNames.Subject];
            }

            if (searchPreviewItem[XmlElementNames.Preview]) {
                previewItem.Preview = searchPreviewItem[XmlElementNames.Preview];
            }

            if (searchPreviewItem[XmlElementNames.Size]) {
                previewItem.Size = Convert.toNumber(searchPreviewItem[XmlElementNames.Size]);
            }

            if (searchPreviewItem[XmlElementNames.Importance]) {
                previewItem.Importance = Importance[<string>searchPreviewItem[XmlElementNames.Importance]];
            }

            if (searchPreviewItem[XmlElementNames.Read]) {
                previewItem.Read = Convert.toBool(searchPreviewItem[XmlElementNames.Read]);
            }

            if (searchPreviewItem[XmlElementNames.HasAttachment]) {
                previewItem.HasAttachment = Convert.toBool(searchPreviewItem[XmlElementNames.HasAttachment]);
            }

            if (searchPreviewItem[XmlElementNames.ExtendedProperties]) {
                previewItem.ExtendedProperties = this.LoadExtendedPropertiesXmlJsObject(searchPreviewItem[XmlElementNames.ExtendedProperties], service);
            }

            previewItems.push(previewItem);
        }
        return previewItems.length === 0 ? null : previewItems;
    }
}