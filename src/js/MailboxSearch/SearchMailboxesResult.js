"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExtensionMethods_1 = require("../ExtensionMethods");
var DateTime_1 = require("../DateTime");
var EwsServiceJsonReader_1 = require("../Core/EwsServiceJsonReader");
var ExtendedPropertyCollection_1 = require("../ComplexProperties/ExtendedPropertyCollection");
var FailedSearchMailbox_1 = require("./FailedSearchMailbox");
var Importance_1 = require("../Enumerations/Importance");
var ItemId_1 = require("../ComplexProperties/ItemId");
var KeywordStatisticsSearchResult_1 = require("./KeywordStatisticsSearchResult");
var MailboxQuery_1 = require("./MailboxQuery");
var MailboxSearchLocation_1 = require("../Enumerations/MailboxSearchLocation");
var MailboxSearchScope_1 = require("./MailboxSearchScope");
var MailboxStatisticsItem_1 = require("./MailboxStatisticsItem");
var PreviewItemMailbox_1 = require("./PreviewItemMailbox");
var SearchPreviewItem_1 = require("./SearchPreviewItem");
var SearchRefinerItem_1 = require("./SearchRefinerItem");
var SearchResultType_1 = require("../Enumerations/SearchResultType");
var XmlElementNames_1 = require("../Core/XmlElementNames");
/**
 * Represents search mailbox result.
 *
 * @sealed
 */
var SearchMailboxesResult = /** @class */ (function () {
    function SearchMailboxesResult() {
        /**
         * Search queries
         */
        this.SearchQueries = null;
        /**
         * Result type
         */
        this.ResultType = SearchResultType_1.SearchResultType.StatisticsOnly;
        /**
         * Item count
         */
        this.ItemCount = 0;
        /**
         * Total size
         * [CLSCompliant(false)]
         */
        this.Size = 0;
        /**
         * Page item count
         */
        this.PageItemCount = 0;
        /**
         * Total page item size
         * [CLSCompliant(false)]
         */
        this.PageItemSize = 0;
        /**
         * Keyword statistics search result
         */
        this.KeywordStats = null;
        /**
         * Search preview items
         */
        this.PreviewItems = null;
        /**
         * Failed mailboxes
         */
        this.FailedMailboxes = null;
        /**
         * Refiners
         */
        this.Refiners = null;
        /**
         * Mailbox statistics
         */
        this.MailboxStats = null;
    }
    /**
     * Get collection of recipients
     *
     * @param   {any}   jsObject	Json Object converted from XML.
     * @return  {string[]}          Array of recipients
     */
    SearchMailboxesResult.GetRecipients = function (jsObject) {
        var recipients = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsObject, XmlElementNames_1.XmlElementNames.SmtpAddress);
        return recipients.length === 0 ? null : recipients;
    };
    /**
     * Load extended properties from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     * @return  {ExtendedPropertyCollection}     Extended properties collection
     */
    SearchMailboxesResult.LoadExtendedPropertiesXmlJsObject = function (jsObject, service) {
        var extendedProperties = new ExtendedPropertyCollection_1.ExtendedPropertyCollection();
        for (var _i = 0, _a = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsObject, XmlElementNames_1.XmlElementNames.ExtendedProperty); _i < _a.length; _i++) {
            var extendedProperty = _a[_i];
            extendedProperties.LoadFromXmlJsObject(extendedProperty, service);
        }
        return extendedProperties.Count === 0 ? null : extendedProperties;
    };
    /**
     * Loads service object from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     * @return  {SearchMailboxesResult}     Search result object
     */
    SearchMailboxesResult.LoadFromXmlJsObject = function (jsObject, service) {
        var searchResult = new SearchMailboxesResult();
        if (jsObject[XmlElementNames_1.XmlElementNames.SearchQueries]) {
            searchResult.SearchQueries = [];
            for (var _i = 0, _a = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsObject[XmlElementNames_1.XmlElementNames.SearchQueries], XmlElementNames_1.XmlElementNames.SearchQuery); _i < _a.length; _i++) {
                var searchQuery = _a[_i];
                var query = searchQuery[XmlElementNames_1.XmlElementNames.Query];
                var mailboxSearchScopes = [];
                if (searchQuery[XmlElementNames_1.XmlElementNames.MailboxSearchScopes]) {
                    for (var _b = 0, _c = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(searchQuery[XmlElementNames_1.XmlElementNames.MailboxSearchScopes], XmlElementNames_1.XmlElementNames.MailboxSearchScope); _b < _c.length; _b++) {
                        var mailboxSearchScope = _c[_b];
                        var mailbox = mailboxSearchScope[XmlElementNames_1.XmlElementNames.Mailbox];
                        var searchScope = MailboxSearchLocation_1.MailboxSearchLocation[mailboxSearchScope[XmlElementNames_1.XmlElementNames.SearchScope]];
                        mailboxSearchScopes.push(new MailboxSearchScope_1.MailboxSearchScope(mailbox, searchScope));
                    }
                }
                searchResult.SearchQueries.push(new MailboxQuery_1.MailboxQuery(query, mailboxSearchScopes));
            }
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.ResultType]) {
            searchResult.ResultType = SearchResultType_1.SearchResultType[jsObject[XmlElementNames_1.XmlElementNames.ResultType]];
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.ItemCount]) {
            searchResult.ItemCount = ExtensionMethods_1.Convert.toNumber(jsObject[XmlElementNames_1.XmlElementNames.ItemCount]);
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.Size]) {
            searchResult.Size = ExtensionMethods_1.Convert.toNumber(jsObject[XmlElementNames_1.XmlElementNames.Size]);
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.PageItemCount]) {
            searchResult.PageItemCount = ExtensionMethods_1.Convert.toNumber(jsObject[XmlElementNames_1.XmlElementNames.PageItemCount]);
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.PageItemSize]) {
            searchResult.PageItemSize = ExtensionMethods_1.Convert.toNumber(jsObject[XmlElementNames_1.XmlElementNames.PageItemSize]);
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.KeywordStats]) {
            searchResult.KeywordStats = this.LoadKeywordStatsXmlJsObject(jsObject[XmlElementNames_1.XmlElementNames.KeywordStats]);
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.Items]) {
            searchResult.PreviewItems = this.LoadPreviewItemsXmlJsObject(jsObject[XmlElementNames_1.XmlElementNames.Items], service);
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.FailedMailboxes]) {
            searchResult.FailedMailboxes = FailedSearchMailbox_1.FailedSearchMailbox.LoadFromXmlJsObject(jsObject[XmlElementNames_1.XmlElementNames.FailedMailboxes], service);
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.Refiners]) {
            var refiners = [];
            for (var _d = 0, _e = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsObject[XmlElementNames_1.XmlElementNames.Refiners], XmlElementNames_1.XmlElementNames.Refiner); _d < _e.length; _d++) {
                var refiner = _e[_d];
                refiners.push(SearchRefinerItem_1.SearchRefinerItem.LoadFromXmlJsObject(refiner, service));
            }
            if (refiners.length > 0) {
                searchResult.Refiners = refiners;
            }
        }
        if (jsObject[XmlElementNames_1.XmlElementNames.MailboxStats]) {
            var mailboxStats = [];
            for (var _f = 0, _g = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsObject[XmlElementNames_1.XmlElementNames.MailboxStats], XmlElementNames_1.XmlElementNames.MailboxStat); _f < _g.length; _f++) {
                var mailboxStat = _g[_f];
                mailboxStats.push(MailboxStatisticsItem_1.MailboxStatisticsItem.LoadFromXmlJsObject(mailboxStat, service));
            }
            if (mailboxStats.length > 0) {
                searchResult.MailboxStats = mailboxStats;
            }
        }
        return searchResult;
    };
    /**
     * Load keyword stats from XML.
     *
     * @param   {any}   jsObject	Json Object converted from XML.
     * @return  {KeywordStatisticsSearchResult[]}       Array of keyword statistics
     */
    SearchMailboxesResult.LoadKeywordStatsXmlJsObject = function (jsObject) {
        var keywordStats = [];
        for (var _i = 0, _a = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsObject, XmlElementNames_1.XmlElementNames.KeywordStat); _i < _a.length; _i++) {
            var keywordStatObj = _a[_i];
            var keywordStat = new KeywordStatisticsSearchResult_1.KeywordStatisticsSearchResult();
            keywordStat.Keyword = jsObject[XmlElementNames_1.XmlElementNames.Keyword];
            keywordStat.ItemHits = ExtensionMethods_1.Convert.toNumber(jsObject[XmlElementNames_1.XmlElementNames.ItemHits]);
            keywordStat.Size = ExtensionMethods_1.Convert.toNumber(jsObject[XmlElementNames_1.XmlElementNames.Size]);
            keywordStats.push(keywordStat);
        }
        return keywordStats.length === 0 ? null : keywordStats;
    };
    /**
     * Load preview items from XML.
     *
     * @param   {any}				jsObject	Json Object converted from XML.
     * @param   {ExchangeService}	service	The service.
     * @return  {SearchPreviewItem[]}     Array of preview items
     */
    SearchMailboxesResult.LoadPreviewItemsXmlJsObject = function (jsObject, service) {
        var previewItems = [];
        for (var _i = 0, _a = EwsServiceJsonReader_1.EwsServiceJsonReader.ReadAsArray(jsObject, XmlElementNames_1.XmlElementNames.SearchPreviewItem); _i < _a.length; _i++) {
            var searchPreviewItem = _a[_i];
            var previewItem = new SearchPreviewItem_1.SearchPreviewItem();
            if (searchPreviewItem[XmlElementNames_1.XmlElementNames.Id]) {
                previewItem.Id = new ItemId_1.ItemId();
                previewItem.Id.LoadFromXmlJsObject(searchPreviewItem[XmlElementNames_1.XmlElementNames.Id], service);
            }
            if (searchPreviewItem[XmlElementNames_1.XmlElementNames.ParentId]) {
                previewItem.ParentId = new ItemId_1.ItemId();
                previewItem.ParentId.LoadFromXmlJsObject(searchPreviewItem[XmlElementNames_1.XmlElementNames.ParentId], service);
            }
            if (searchPreviewItem[XmlElementNames_1.XmlElementNames.Mailbox]) {
                previewItem.Mailbox = new PreviewItemMailbox_1.PreviewItemMailbox();
                previewItem.Mailbox.MailboxId = searchPreviewItem[XmlElementNames_1.XmlElementNames.Mailbox][XmlElementNames_1.XmlElementNames.MailboxId];
                previewItem.Mailbox.PrimarySmtpAddress = searchPreviewItem[XmlElementNames_1.XmlElementNames.Mailbox][XmlElementNames_1.XmlElementNames.PrimarySmtpAddress];
            }
            //missing in official repo
            if (searchPreviewItem[XmlElementNames_1.XmlElementNames.ItemClass]) {
                previewItem.ItemClass = searchPreviewItem[XmlElementNames_1.XmlElementNames.ItemClass];
            }
            if (searchPreviewItem[XmlElementNames_1.XmlElementNames.UniqueHash]) {
                previewItem.UniqueHash = searchPreviewItem[XmlElementNames_1.XmlElementNames.UniqueHash];
            }
            if (searchPreviewItem[XmlElementNames_1.XmlElementNames.SortValue]) {
                previewItem.SortValue = searchPreviewItem[XmlElementNames_1.XmlElementNames.SortValue];
            }
            if (searchPreviewItem[XmlElementNames_1.XmlElementNames.OwaLink]) {
                previewItem.OwaLink = searchPreviewItem[XmlElementNames_1.XmlElementNames.OwaLink];
            }
            if (searchPreviewItem[XmlElementNames_1.XmlElementNames.Sender]) {
                previewItem.Sender = searchPreviewItem[XmlElementNames_1.XmlElementNames.Sender];
            }
            if (searchPreviewItem[XmlElementNames_1.XmlElementNames.ToRecipients]) {
                previewItem.ToRecipients = this.GetRecipients(searchPreviewItem[XmlElementNames_1.XmlElementNames.ToRecipients]);
            }
            if (searchPreviewItem[XmlElementNames_1.XmlElementNames.CcRecipients]) {
                previewItem.CcRecipients = this.GetRecipients(searchPreviewItem[XmlElementNames_1.XmlElementNames.CcRecipients]);
            }
            if (searchPreviewItem[XmlElementNames_1.XmlElementNames.BccRecipients]) {
                previewItem.BccRecipients = this.GetRecipients(searchPreviewItem[XmlElementNames_1.XmlElementNames.BccRecipients]);
            }
            if (searchPreviewItem[XmlElementNames_1.XmlElementNames.CreatedTime]) {
                previewItem.CreatedTime = DateTime_1.DateTime.Parse(searchPreviewItem[XmlElementNames_1.XmlElementNames.CreatedTime]);
            }
            if (searchPreviewItem[XmlElementNames_1.XmlElementNames.ReceivedTime]) {
                previewItem.ReceivedTime = DateTime_1.DateTime.Parse(searchPreviewItem[XmlElementNames_1.XmlElementNames.ReceivedTime]);
            }
            if (searchPreviewItem[XmlElementNames_1.XmlElementNames.SentTime]) {
                previewItem.SentTime = DateTime_1.DateTime.Parse(searchPreviewItem[XmlElementNames_1.XmlElementNames.SentTime]);
            }
            if (searchPreviewItem[XmlElementNames_1.XmlElementNames.Subject]) {
                previewItem.Subject = searchPreviewItem[XmlElementNames_1.XmlElementNames.Subject];
            }
            if (searchPreviewItem[XmlElementNames_1.XmlElementNames.Preview]) {
                previewItem.Preview = searchPreviewItem[XmlElementNames_1.XmlElementNames.Preview];
            }
            if (searchPreviewItem[XmlElementNames_1.XmlElementNames.Size]) {
                previewItem.Size = ExtensionMethods_1.Convert.toNumber(searchPreviewItem[XmlElementNames_1.XmlElementNames.Size]);
            }
            if (searchPreviewItem[XmlElementNames_1.XmlElementNames.Importance]) {
                previewItem.Importance = Importance_1.Importance[searchPreviewItem[XmlElementNames_1.XmlElementNames.Importance]];
            }
            if (searchPreviewItem[XmlElementNames_1.XmlElementNames.Read]) {
                previewItem.Read = ExtensionMethods_1.Convert.toBool(searchPreviewItem[XmlElementNames_1.XmlElementNames.Read]);
            }
            if (searchPreviewItem[XmlElementNames_1.XmlElementNames.HasAttachment]) {
                previewItem.HasAttachment = ExtensionMethods_1.Convert.toBool(searchPreviewItem[XmlElementNames_1.XmlElementNames.HasAttachment]);
            }
            if (searchPreviewItem[XmlElementNames_1.XmlElementNames.ExtendedProperties]) {
                previewItem.ExtendedProperties = this.LoadExtendedPropertiesXmlJsObject(searchPreviewItem[XmlElementNames_1.XmlElementNames.ExtendedProperties], service);
            }
            previewItems.push(previewItem);
        }
        return previewItems.length === 0 ? null : previewItems;
    };
    return SearchMailboxesResult;
}());
exports.SearchMailboxesResult = SearchMailboxesResult;
