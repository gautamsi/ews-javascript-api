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
