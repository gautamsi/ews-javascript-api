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
    GetExpectedResponseMessageCount(): number { throw new Error("Not implemented."); }
    GetGroupBy(): Grouping { throw new Error("Not implemented."); }
    Validate(): any { throw new Error("Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
    WriteElementsToXml(writer: EwsServiceXmlWriter): any { throw new Error("Not implemented."); }
}
export = FindRequest;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
