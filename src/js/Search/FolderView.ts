import PagedView = require("./PagedView");
import FolderTraversal = require("../Enumerations/FolderTraversal");
import ExchangeService = require("../Core/ExchangeService");
import ServiceObjectType = require("../Enumerations/ServiceObjectType");
import EwsServiceXmlWriter = require("../Core/EwsServiceXmlWriter");
class FolderView extends PagedView {
    Traversal: FolderTraversal;
    private traversal: FolderTraversal;
    AddJsonProperties(jsonRequest: any/*JsonObject*/, service: ExchangeService): any { throw new Error("FolderView.ts - AddJsonProperties : Not implemented."); }
    GetServiceObjectType(): ServiceObjectType { throw new Error("FolderView.ts - GetServiceObjectType : Not implemented."); }
    GetViewJsonTypeName(): string { throw new Error("FolderView.ts - GetViewJsonTypeName : Not implemented."); }
    GetViewXmlElementName(): string { throw new Error("FolderView.ts - GetViewXmlElementName : Not implemented."); }
    WriteAttributesToXml(writer: EwsServiceXmlWriter): any { throw new Error("FolderView.ts - WriteAttributesToXml : Not implemented."); }
}
export = FolderView;
//module Microsoft.Exchange.WebServices.Data {
//}
//import _export = Microsoft.Exchange.WebServices.Data;
//export = _export;
