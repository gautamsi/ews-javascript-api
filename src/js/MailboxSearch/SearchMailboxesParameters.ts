import {MailboxQuery} from "./MailboxQuery";
import {SearchResultType} from "../Enumerations/SearchResultType";
import {SortDirection} from "../Enumerations/SortDirection";
import {SearchPageDirection} from "../Enumerations/SearchPageDirection";
import {PreviewItemResponseShape} from "./PreviewItemResponseShape";
export class SearchMailboxesParameters {
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


//}



