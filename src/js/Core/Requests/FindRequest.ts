import SearchFilter = require("../../Search/Filters/SearchFilter");
import ServiceResponse = require("../Responses/ServiceResponse");
import MultiResponseServiceRequest = require("./MultiResponseServiceRequest");
import FolderIdWrapperList = require("../../Misc/FolderIdWrapperList");
import ViewBase = require("../../Search/ViewBase");
import Grouping = require("../../Search/Grouping");
import EwsServiceXmlWriter = require("../EwsServiceXmlWriter");
class FindRequest<TResponse extends ServiceResponse> extends MultiResponseServiceRequest<TResponse> {//IJsonSerializable
    ParentFolderIds: FolderIdWrapperList;
    SearchFilter: SearchFilter;
    QueryString: string;
    ReturnHighlightTerms: boolean;
    View: ViewBase;
    private parentFolderIds: FolderIdWrapperList;
    private searchFilter: SearchFilter;
    private queryString: string;
    private returnHighlightTerms: boolean;
    private view: ViewBase;
    GetExpectedResponseMessageCount(): number { throw new Error("FindRequest.ts - GetExpectedResponseMessageCount : Not implemented."); }
    GetGroupBy(): Grouping { throw new Error("FindRequest.ts - GetGroupBy : Not implemented."); }
    Validate(): any { throw new Error("FindRequest.ts - Validate : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("FindRequest.ts - WriteAttributesToXml : Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("FindRequest.ts - WriteElementsToXml : Not implemented."); }
}
export = FindRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
